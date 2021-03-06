/*
    Copyright (c) 2016 eyeOS

    This file is part of Open365.

    Open365 is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of the
    License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program. If not, see <http://www.gnu.org/licenses/>.
*/

wdi.ImageUncompressor = $.spcExtend(wdi.EventObject.prototype, {
	init: function (c) {
		this.syncAsyncHandler = c.syncAsyncHandler || new wdi.SyncAsyncHandler({
			isAsync: c.isAsync
		});
	},

	lzHeaderSize: 32,

	extractLzHeader: function (imageData, brush) {
		var headerData, header;
		if (!brush) { //brushes are still js arrays
			if (Object.prototype.toString.call(imageData) === "[object Array]") {
				headerData = imageData.slice(0, this.lzHeaderSize);
				imageData = imageData.slice(this.lzHeaderSize); //skip the header
			} else {
				headerData = imageData.subarray(0, this.lzHeaderSize).toJSArray();
				imageData = imageData.subarray(this.lzHeaderSize); //skip the header
			}
			header = wdi.LZSS.demarshall_rgb(headerData);
		} else {
			header = wdi.LZSS.demarshall_rgb(imageData);
		}

		return {
			header: header,
			imageData: imageData
		};
	},

	processLz: function (imageData, brush, opaque, clientGui, callback, scope) {
		var extractedData, u8, buffer, number, context;

		extractedData = this.extractLzHeader(imageData, brush);
		imageData = extractedData.imageData;
		number = extractedData.header.width * extractedData.header.height * 4;

		buffer = new ArrayBuffer(imageData.length + 16);
		u8 = new Uint8Array(buffer);

		u8[0] = 1; //LZ_RGB
		u8[1] = opaque;
		u8[2] = extractedData.header.type;
		u8[3] = extractedData.header.top_down; //padding

		for (var i = 0; i < 4; i++) { //iterations because of javascript number size
			u8[4 + i] = number & (255); //Get only the last byte
			number = number >> 8; //Remove the last byte
		}

		var view = new DataView(buffer);
		view.setUint32(8, extractedData.header.width);
		view.setUint32(12, extractedData.header.height);

		u8.set(imageData, 16);

		this.syncAsyncHandler.dispatch(buffer, callback, scope);
	},

	processQuic: function (imageData, opaque, clientGui, callback, scope) {
		wdi.Debug.log('Quic decode');
		buffer = new ArrayBuffer(imageData.length + 4);
		view = new Uint8Array(buffer);

		view.set(imageData, 4);
		view[3] = opaque ? 1 : 0;
		view[0] = 0; //quic

		this.syncAsyncHandler.dispatch(buffer, callback, scope);
	},

	process: function (imageDescriptor, imageData, brush, opaque, clientGui, callback, scope) {
		switch(imageDescriptor.type) {
			case wdi.SpiceImageType.SPICE_IMAGE_TYPE_QUIC:
				this.processQuic(imageData, opaque, clientGui, callback, scope);
				break;
			case wdi.SpiceImageType.SPICE_IMAGE_TYPE_LZ_RGB:
				this.processLz(imageData, brush, opaque, clientGui, callback, scope);
				break;
		}
	},

	dispose: function () {
		this.syncAsyncHandler.dispose();
	}
});

var syncInstance;
var asyncInstance;

wdi.ImageUncompressor.dispose = function () {
	if (syncInstance) {
		syncInstance.dispose();
	}

	if (asyncInstance) {
		asyncInstance.dispose();
	}
};

wdi.ImageUncompressor.getSyncInstance = function () {
	if (!syncInstance) {
		syncInstance = new wdi.ImageUncompressor({
			isAsync: false
		});
	}

	return syncInstance;
};

wdi.ImageUncompressor.getAsyncInstance = function () {
	if (!asyncInstance) {
		asyncInstance = new wdi.ImageUncompressor({
			isAsync: true
		});
	}

	return asyncInstance;
};
