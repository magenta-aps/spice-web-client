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


wdi.SpicePubkeyType = {
	SPICE_PUBKEY_TYPE_INVALID:0,
	SPICE_PUBKEY_TYPE_RSA:1,
	SPICE_PUBKEY_TYPE_RSA2:2,
	SPICE_PUBKEY_TYPE_DSA:3,
	SPICE_PUBKEY_TYPE_DSA1:4,
	SPICE_PUBKEY_TYPE_DSA2:5,
	SPICE_PUBKEY_TYPE_DSA3:6,
	SPICE_PUBKEY_TYPE_DSA4:7,
	SPICE_PUBKEY_TYPE_DH:8,
	SPICE_PUBKEY_TYPE_EC:9,
	SPICE_PUBKEY_TYPE_ENUM_END:10
}

wdi.SpiceWarnCode = {
	SPICE_WARN_GENERAL:0,
	SPICE_WARN_CODE_ENUM_END:1
}

wdi.SpiceLineFlags = {
	SPICE_LINE_FLAGS_START_WITH_GAP:4,
	SPICE_LINE_FLAGS_STYLED:8,
	SPICE_LINE_FLAGS_MASK:12
}

wdi.SpiceNotifyVisibility = {
	SPICE_NOTIFY_VISIBILITY_LOW:0,
	SPICE_NOTIFY_VISIBILITY_MEDIUM:1,
	SPICE_NOTIFY_VISIBILITY_HIGH:2,
	SPICE_NOTIFY_VISIBILITY_ENUM_END:3
}

wdi.SpiceVars = {
	SPICE_MSGC_ACK_SYNC:1,
	SPICE_MSGC_ACK:2,
	SPICE_MSGC_PONG:3,
	SPICE_MSGC_MIGRATE_FLUSH_MARK:4,
	SPICE_MSGC_MIGRATE_DATA:5,
	SPICE_MSGC_DISCONNECTING:6,
	SPICE_MSGC_DISPLAY_INIT:101,
	SPICE_MSGC_END_DISPLAY:102,
	SPICE_CHANNEL_MAIN:1,
	SPICE_CHANNEL_DISPLAY:2,
	SPICE_CHANNEL_INPUTS:3,
	SPICE_CHANNEL_CURSOR:4,
	SPICE_CHANNEL_PLAYBACK:5,
	SPICE_CHANNEL_RECORD:6,
	SPICE_CHANNEL_TUNNEL:7,
	SPICE_CHANNEL_SMARTCARD:8,
	SPICE_CHANNEL_USBREDIR:9,
	SPICE_END_CHANNEL:10,
	SPICE_MSG_MIGRATE:1,
	SPICE_MSG_MIGRATE_DATA:2,
	SPICE_MSG_SET_ACK:3,
	SPICE_MSG_PING:4,
	SPICE_MSG_WAIT_FOR_CHANNELS:5,
	SPICE_MSG_DISCONNECTING:6,
	SPICE_MSG_NOTIFY:7,
	SPICE_MSG_LIST:8,
	SPICE_MSGC_MAIN_CLIENT_INFO:101,
	SPICE_MSGC_MAIN_MIGRATE_CONNECTED:102,
	SPICE_MSGC_MAIN_MIGRATE_CONNECT_ERROR:103,
	SPICE_MSGC_MAIN_ATTACH_CHANNELS:104,
	SPICE_MSGC_MAIN_MOUSE_MODE_REQUEST:105,
	SPICE_MSGC_MAIN_AGENT_START:106,
	SPICE_MSGC_MAIN_AGENT_DATA:107,
	SPICE_MSGC_MAIN_AGENT_TOKEN:108,
	SPICE_MSGC_MAIN_MIGRATE_END:109,
	SPICE_MSGC_END_MAIN:110,
	SPICE_MSG_DISPLAY_MODE:101,
	SPICE_MSG_DISPLAY_MARK:102,
	SPICE_MSG_DISPLAY_RESET:103,
	SPICE_MSG_DISPLAY_COPY_BITS:104,
	SPICE_MSG_DISPLAY_INVAL_LIST:105,
	SPICE_MSG_DISPLAY_INVAL_ALL_PIXMAPS:106,
	SPICE_MSG_DISPLAY_INVAL_PALETTE:107,
	SPICE_MSG_DISPLAY_INVAL_ALL_PALETTES:108,
	SPICE_MSG_DISPLAY_STREAM_CREATE:122,
	SPICE_MSG_DISPLAY_STREAM_DATA:123,
	SPICE_MSG_DISPLAY_STREAM_CLIP:124,
	SPICE_MSG_DISPLAY_STREAM_DESTROY:125,
	SPICE_MSG_DISPLAY_STREAM_DESTROY_ALL:126,
	SPICE_MSG_DISPLAY_DRAW_FILL:302,
	SPICE_MSG_DISPLAY_DRAW_OPAQUE:303,
	SPICE_MSG_DISPLAY_DRAW_COPY:304,
	SPICE_MSG_DISPLAY_DRAW_BLEND:305,
	SPICE_MSG_DISPLAY_DRAW_BLACKNESS:306,
	SPICE_MSG_DISPLAY_DRAW_WHITENESS:307,
	SPICE_MSG_DISPLAY_DRAW_INVERS:308,
	SPICE_MSG_DISPLAY_DRAW_ROP3:309,
	SPICE_MSG_DISPLAY_DRAW_STROKE:310,
	SPICE_MSG_DISPLAY_DRAW_TEXT:311,
	SPICE_MSG_DISPLAY_DRAW_TRANSPARENT:312,
	SPICE_MSG_DISPLAY_DRAW_ALPHA_BLEND:313,
	SPICE_MSG_DISPLAY_SURFACE_CREATE:314,
	SPICE_MSG_DISPLAY_SURFACE_DESTROY:315,
	SPICE_MSG_END_DISPLAY:316,
	SPICE_MSG_INPUTS_INIT:101,
	SPICE_MSG_INPUTS_KEY_MODIFIERS:102,
	SPICE_MSG_INPUTS_MOUSE_MOTION_ACK:111,
	SPICE_MSG_END_INPUTS:112,
	SPICE_MSGC_INPUTS_KEY_DOWN:101,
	SPICE_MSGC_INPUTS_KEY_UP:102,
	SPICE_MSGC_INPUTS_KEY_MODIFIERS:103,
	SPICE_MSGC_INPUTS_MOUSE_MOTION:111,
	SPICE_MSGC_INPUTS_MOUSE_POSITION:112,
	SPICE_MSGC_INPUTS_MOUSE_PRESS:113,
	SPICE_MSGC_INPUTS_MOUSE_RELEASE:114,
	SPICE_MSGC_END_INPUTS:115,
	SPICE_MSG_CURSOR_INIT:101,
	SPICE_MSG_CURSOR_RESET:102,
	SPICE_MSG_CURSOR_SET:103,
	SPICE_MSG_CURSOR_MOVE:104,
	SPICE_MSG_CURSOR_HIDE:105,
	SPICE_MSG_CURSOR_TRAIL:106,
	SPICE_MSG_CURSOR_INVAL_ONE:107,
	SPICE_MSG_CURSOR_INVAL_ALL:108,
	SPICE_MSG_END_CURSOR:109,
	SPICE_MSG_RECORD_START:101,
	SPICE_MSG_RECORD_STOP:102,
	SPICE_MSG_RECORD_VOLUME:103,
	SPICE_MSG_RECORD_MUTE:104,
	SPICE_MSG_END_RECORD:105,
	SPICE_MSGC_SMARTCARD_DATA:101,
	SPICE_MSGC_END_SMARTCARD:102,
	SPICE_MSGC_SPICEVMC_DATA:101,
	SPICE_MSGC_END_SPICEVMC:102,
	SPICE_MSG_MAIN_MIGRATE_BEGIN:101,
	SPICE_MSG_MAIN_MIGRATE_CANCEL:102,
	SPICE_MSG_MAIN_INIT:103,
	SPICE_MSG_MAIN_CHANNELS_LIST:104,
	SPICE_MSG_MAIN_MOUSE_MODE:105,
	SPICE_MSG_MAIN_MULTI_MEDIA_TIME:106,
	SPICE_MSG_MAIN_AGENT_CONNECTED:107,
	SPICE_MSG_MAIN_AGENT_DISCONNECTED:108,
	SPICE_MSG_MAIN_AGENT_DATA:109,
	SPICE_MSG_MAIN_AGENT_TOKEN:110,
	SPICE_MSG_MAIN_MIGRATE_SWITCH_HOST:111,
	SPICE_MSG_MAIN_MIGRATE_END:112,
	SPICE_MSG_END_MAIN:113,
	SPICE_MSG_PLAYBACK_DATA:101,
	SPICE_MSG_PLAYBACK_MODE:102,
	SPICE_MSG_PLAYBACK_START:103,
	SPICE_MSG_PLAYBACK_STOP:104,
	SPICE_MSG_PLAYBACK_VOLUME:105,
	SPICE_MSG_PLAYBACK_MUTE:106,
	SPICE_MSG_END_PLAYBACK:107,
	SPICE_MSGC_RECORD_DATA:101,
	SPICE_MSGC_RECORD_MODE:102,
	SPICE_MSGC_RECORD_START_MARK:103,
	SPICE_MSGC_END_RECORD:104,
	SPICE_MSG_TUNNEL_INIT:101,
	SPICE_MSG_TUNNEL_SERVICE_IP_MAP:102,
	SPICE_MSG_TUNNEL_SOCKET_OPEN:103,
	SPICE_MSG_TUNNEL_SOCKET_FIN:104,
	SPICE_MSG_TUNNEL_SOCKET_CLOSE:105,
	SPICE_MSG_TUNNEL_SOCKET_DATA:106,
	SPICE_MSG_TUNNEL_SOCKET_CLOSED_ACK:107,
	SPICE_MSG_TUNNEL_SOCKET_TOKEN:108,
	SPICE_MSG_END_TUNNEL:109,
	SPICE_MSGC_TUNNEL_SERVICE_ADD:101,
	SPICE_MSGC_TUNNEL_SERVICE_REMOVE:102,
	SPICE_MSGC_TUNNEL_SOCKET_OPEN_ACK:103,
	SPICE_MSGC_TUNNEL_SOCKET_OPEN_NACK:104,
	SPICE_MSGC_TUNNEL_SOCKET_FIN:105,
	SPICE_MSGC_TUNNEL_SOCKET_CLOSED:106,
	SPICE_MSGC_TUNNEL_SOCKET_CLOSED_ACK:107,
	SPICE_MSGC_TUNNEL_SOCKET_DATA:108,
	SPICE_MSGC_TUNNEL_SOCKET_TOKEN:109,
	SPICE_MSGC_END_TUNNEL:110,
	SPICE_MSG_SMARTCARD_DATA:101,
	SPICE_MSG_END_SMARTCARD:102,
	SPICE_MSG_SPICEVMC_DATA:101,
	SPICE_MSG_END_SPICEVMC:102,
	SPICE_COMMON_CAP_PROTOCOL_AUTH_SELECTION:0,
	SPICE_COMMON_CAP_AUTH_SPICE:1,
	SPICE_COMMON_CAP_AUTH_SASL:2,
	SPICE_COMMON_CAP_MINI_HEADER:3,
	SPICE_PLAYBACK_CAP_CELT_0_5_1:0,
	SPICE_PLAYBACK_CAP_VOLUME:1,
	SPICE_RECORD_CAP_CELT_0_5_1:0,
	SPICE_RECORD_CAP_VOLUME:1,
	SPICE_MAIN_CAP_SEMI_SEAMLESS_MIGRATE:0
}

wdi.SpiceTunnelServiceType = {
	SPICE_TUNNEL_SERVICE_TYPE_INVALID:0,
	SPICE_TUNNEL_SERVICE_TYPE_GENERIC:1,
	SPICE_TUNNEL_SERVICE_TYPE_IPP:2,
	SPICE_TUNNEL_SERVICE_TYPE_ENUM_END:3
}

wdi.SpiceJpegAlphaFlags = {
	SPICE_JPEG_ALPHA_FLAGS_TOP_DOWN:1,
	SPICE_JPEG_ALPHA_FLAGS_MASK:1
}

wdi.SpiceMaskFlags = {
	SPICE_MASK_FLAGS_INVERS:1,
	SPICE_MASK_FLAGS_MASK:1
}

wdi.SpiceCursorType = {
	SPICE_CURSOR_TYPE_ALPHA:0,
	SPICE_CURSOR_TYPE_MONO:1,
	SPICE_CURSOR_TYPE_COLOR4:2,
	SPICE_CURSOR_TYPE_COLOR8:3,
	SPICE_CURSOR_TYPE_COLOR16:4,
	SPICE_CURSOR_TYPE_COLOR24:5,
	SPICE_CURSOR_TYPE_COLOR32:6,
	SPICE_CURSOR_TYPE_ENUM_END:7,
	SPICE_CURSOR_TYPE_URL:8
}

wdi.SpiceImageFlags = {
	SPICE_IMAGE_FLAGS_CACHE_ME:1,
	SPICE_IMAGE_FLAGS_HIGH_BITS_SET:2,
	SPICE_IMAGE_FLAGS_CACHE_REPLACE_ME:4,
	SPICE_IMAGE_FLAGS_MASK:7
}

wdi.SpiceAudioDataMode = {
	SPICE_AUDIO_DATA_MODE_INVALID:0,
	SPICE_AUDIO_DATA_MODE_RAW:1,
	SPICE_AUDIO_DATA_MODE_CELT_0_5_1:2,
	SPICE_AUDIO_DATA_MODE_ENUM_END:3
}

wdi.SpiceAudioFmt = {
	SPICE_AUDIO_FMT_INVALID:0,
	SPICE_AUDIO_FMT_S16:1,
	SPICE_AUDIO_FMT_ENUM_END:2
}

wdi.SpiceBitmapFmt = {
	SPICE_BITMAP_FMT_INVALID:0,
	SPICE_BITMAP_FMT_1BIT_LE:1,
	SPICE_BITMAP_FMT_1BIT_BE:2,
	SPICE_BITMAP_FMT_4BIT_LE:3,
	SPICE_BITMAP_FMT_4BIT_BE:4,
	SPICE_BITMAP_FMT_8BIT:5,
	SPICE_BITMAP_FMT_16BIT:6,
	SPICE_BITMAP_FMT_24BIT:7,
	SPICE_BITMAP_FMT_32BIT:8,
	SPICE_BITMAP_FMT_RGBA:9,
	SPICE_BITMAP_FMT_ENUM_END:10
}

wdi.SpiceStreamFlags = {
	SPICE_STREAM_FLAGS_TOP_DOWN:1,
	SPICE_STREAM_FLAGS_MASK:1
}

wdi.SpiceTunnelIpType = {
	SPICE_TUNNEL_IP_TYPE_INVALID:0,
	SPICE_TUNNEL_IP_TYPE_IPv4:1,
	SPICE_TUNNEL_IP_TYPE_ENUM_END:2
}

wdi.SpiceBitmapFlags = {
	SPICE_BITMAP_FLAGS_PAL_CACHE_ME:1,
	SPICE_BITMAP_FLAGS_PAL_FROM_CACHE:2,
	SPICE_BITMAP_FLAGS_TOP_DOWN:4,
	SPICE_BITMAP_FLAGS_MASK:7
}

wdi.SpiceStringFlags = {
	SPICE_STRING_FLAGS_RASTER_A1:1,
	SPICE_STRING_FLAGS_RASTER_A4:2,
	SPICE_STRING_FLAGS_RASTER_A8:4,
	SPICE_STRING_FLAGS_RASTER_TOP_DOWN:8,
	SPICE_STRING_FLAGS_MASK:15
}

wdi.SpiceSurfaceFmt = {
	SPICE_SURFACE_FMT_INVALID:0,
	SPICE_SURFACE_FMT_1_A:1,
	SPICE_SURFACE_FMT_8_A:8,
	SPICE_SURFACE_FMT_16_555:16,
	SPICE_SURFACE_FMT_32_xRGB:32,
	SPICE_SURFACE_FMT_16_565:80,
	SPICE_SURFACE_FMT_32_ARGB:96,
	SPICE_SURFACE_FMT_ENUM_END:97
}

wdi.SpiceCursorFlags = {
	SPICE_CURSOR_FLAGS_NONE:1,
	SPICE_CURSOR_FLAGS_CACHE_ME:2,
	SPICE_CURSOR_FLAGS_FROM_CACHE:4,
	SPICE_CURSOR_FLAGS_MASK:7
}

wdi.SpiceLinkErr = {
	SPICE_LINK_ERR_OK:0,
	SPICE_LINK_ERR_ERROR:1,
	SPICE_LINK_ERR_INVALID_MAGIC:2,
	SPICE_LINK_ERR_INVALID_DATA:3,
	SPICE_LINK_ERR_VERSION_MISMATCH:4,
	SPICE_LINK_ERR_NEED_SECURED:5,
	SPICE_LINK_ERR_NEED_UNSECURED:6,
	SPICE_LINK_ERR_PERMISSION_DENIED:7,
	SPICE_LINK_ERR_BAD_CONNECTION_ID:8,
	SPICE_LINK_ERR_CHANNEL_NOT_AVAILABLE:9,
	SPICE_LINK_ERR_ENUM_END:10
}

wdi.SpiceNotifySeverity = {
	SPICE_NOTIFY_SEVERITY_INFO:0,
	SPICE_NOTIFY_SEVERITY_WARN:1,
	SPICE_NOTIFY_SEVERITY_ERROR:2,
	SPICE_NOTIFY_SEVERITY_ENUM_END:3
}

wdi.SpiceBrushType = {
	SPICE_BRUSH_TYPE_NONE:0,
	SPICE_BRUSH_TYPE_SOLID:1,
	SPICE_BRUSH_TYPE_PATTERN:2,
	SPICE_BRUSH_TYPE_ENUM_END:3
}

wdi.SpiceAlphaFlags = {
	SPICE_ALPHA_FLAGS_DEST_HAS_ALPHA:1,
	SPICE_ALPHA_FLAGS_SRC_SURFACE_HAS_ALPHA:2,
	SPICE_ALPHA_FLAGS_MASK:3
}

wdi.SpiceSurfaceFlags = {
	SPICE_SURFACE_FLAGS_PRIMARY:1,
	SPICE_SURFACE_FLAGS_MASK:1
}

wdi.QuicImageType = {
    QUIC_IMAGE_TYPE_INVALID: 0,
    QUIC_IMAGE_TYPE_GRAY: 1,
    QUIC_IMAGE_TYPE_RGB16: 2,
    QUIC_IMAGE_TYPE_RGB24: 3,
    QUIC_IMAGE_TYPE_RGB32: 4,
    QUIC_IMAGE_TYPE_RGBA: 5
}

wdi.SpiceImageType = {
	SPICE_IMAGE_TYPE_BITMAP:0,
	SPICE_IMAGE_TYPE_QUIC:1,
	SPICE_IMAGE_TYPE_RESERVED:2,
	SPICE_IMAGE_TYPE_LZ_PLT:100,
	SPICE_IMAGE_TYPE_LZ_RGB:101,
	SPICE_IMAGE_TYPE_GLZ_RGB:102,
	SPICE_IMAGE_TYPE_FROM_CACHE:103,
	SPICE_IMAGE_TYPE_SURFACE:104,
	SPICE_IMAGE_TYPE_JPEG:105,
	SPICE_IMAGE_TYPE_FROM_CACHE_LOSSLESS:106,
	SPICE_IMAGE_TYPE_ZLIB_GLZ_RGB:107,
	SPICE_IMAGE_TYPE_JPEG_ALPHA:108,
	SPICE_IMAGE_TYPE_CANVAS:109,
	SPICE_IMAGE_TYPE_PNG:110,
	SPICE_IMAGE_TYPE_ENUM_END:111
}

wdi.SpiceImageScaleMode = {
	SPICE_IMAGE_SCALE_MODE_INTERPOLATE:0,
	SPICE_IMAGE_SCALE_MODE_NEAREST:1,
	SPICE_IMAGE_SCALE_MODE_ENUM_END:2
}

wdi.SpiceResourceType = {
	SPICE_RES_TYPE_INVALID:0,
	SPICE_RES_TYPE_PIXMAP:1,
	SPICE_RESOURCE_TYPE_ENUM_END:2
}

wdi.SpicePathFlags = {
	SPICE_PATH_BEGIN:1,
	SPICE_PATH_END:2,
	SPICE_PATH_CLOSE:8,
	SPICE_PATH_BEZIER:16,
	SPICE_PATH_FLAGS_MASK:27
}

wdi.SpiceVideoCodecType = {
	SPICE_VIDEO_CODEC_TYPE_MJPEG:1,
	SPICE_VIDEO_CODEC_TYPE_ENUM_END:2
}

wdi.SpiceRopd = {
	SPICE_ROPD_INVERS_SRC:1,
	SPICE_ROPD_INVERS_BRUSH:2,
	SPICE_ROPD_INVERS_DEST:4,
	SPICE_ROPD_OP_PUT:8,
	SPICE_ROPD_OP_OR:16,
	SPICE_ROPD_OP_AND:32,
	SPICE_ROPD_OP_XOR:64,
	SPICE_ROPD_OP_BLACKNESS:128,
	SPICE_ROPD_OP_WHITENESS:256,
	SPICE_ROPD_OP_INVERS:512,
	SPICE_ROPD_INVERS_RES:1024,
	SPICE_ROPD_MASK:2047
}

wdi.SpiceMigrateFlags = {
	SPICE_MIGRATE_NEED_FLUSH:1,
	SPICE_MIGRATE_NEED_DATA_TRANSFER:2,
	SPICE_MIGRATE_FLAGS_MASK:3
}

wdi.SpiceKeyboardModifierFlags = {
	SPICE_KEYBOARD_MODIFIER_FLAGS_SCROLL_LOCK:1,
	SPICE_KEYBOARD_MODIFIER_FLAGS_NUM_LOCK:2,
	SPICE_KEYBOARD_MODIFIER_FLAGS_CAPS_LOCK:4,
	SPICE_KEYBOARD_MODIFIER_FLAGS_MASK:7
}

wdi.SpiceInfoCode = {
	SPICE_INFO_GENERAL:0,
	SPICE_INFO_CODE_ENUM_END:1
}

wdi.SpiceMouseButton = {
	SPICE_MOUSE_BUTTON_INVALID:0,
	SPICE_MOUSE_BUTTON_LEFT:1,
	SPICE_MOUSE_BUTTON_MIDDLE:2,
	SPICE_MOUSE_BUTTON_RIGHT:3,
	SPICE_MOUSE_BUTTON_UP:4,
	SPICE_MOUSE_BUTTON_DOWN:5,
	SPICE_MOUSE_BUTTON_ENUM_END:6
}

wdi.SpiceClipType = {
	SPICE_CLIP_TYPE_NONE:0,
	SPICE_CLIP_TYPE_RECTS:1,
	SPICE_CLIP_TYPE_ENUM_END:2
}

wdi.SpiceMouseButtonMask = {
	SPICE_MOUSE_BUTTON_MASK_LEFT:1,
	SPICE_MOUSE_BUTTON_MASK_MIDDLE:2,
	SPICE_MOUSE_BUTTON_MASK_RIGHT:4,
	SPICE_MOUSE_BUTTON_MASK_MASK:7
}

wdi.SpiceMouseModeTypes = {
	SPICE_MOUSE_MODE_SERVER:1,
	SPICE_MOUSE_MODE_CLIENT:2,
	SPICE_MOUSE_MODE_MASK:3
}

wdi.AgentCaps = {
	VD_AGENT_CAP_MOUSE_STATE: 0,
	VD_AGENT_CAP_MONITORS_CONFIG: 1,
	VD_AGENT_CAP_REPLY: 2,
	VD_AGENT_CAP_CLIPBOARD: 3,
	VD_AGENT_CAP_DISPLAY_CONFIG: 4,
    VD_AGENT_CAP_CLIPBOARD_BY_DEMAND: 5,
    VD_AGENT_CAP_CLIPBOARD_SELECTION : 6
};

wdi.AgentMessageTypes =  {
    VD_AGENT_MOUSE_STATE:1,
    VD_AGENT_MONITORS_CONFIG: 2,
    VD_AGENT_REPLY: 3,
    VD_AGENT_CLIPBOARD: 4,
    VD_AGENT_DISPLAY_CONFIG: 5,
    VD_AGENT_ANNOUNCE_CAPABILITIES: 6,
    VD_AGENT_CLIPBOARD_GRAB: 7,
    VD_AGENT_CLIPBOARD_REQUEST: 8,
    VD_AGENT_CLIPBOARD_RELEASE: 9,

    VD_AGENT_GET_WINDOWS_LIST: 10,
   	VD_AGENT_CLOSE_WINDOW: 11,
   	VD_AGENT_MOVE_WINDOW: 12,
   	VD_AGENT_RESIZE_WINDOW: 13,
   	VD_AGENT_MINIMIZE_WINDOW: 14,
   	VD_AGENT_RESTORE_WINDOW: 15,
   	VD_AGENT_MAXIMIZE_WINDOW: 16,
   	VD_AGENT_FOCUS_WINDOW: 17,
   	VD_AGENT_EXECUTE_COMMAND: 18
};

wdi.ClipBoardTypes = {
    VD_AGENT_CLIPBOARD_NONE: 0,
    VD_AGENT_CLIPBOARD_UTF8_TEXT: 1,
    VD_AGENT_CLIPBOARD_IMAGE_PNG: 2,  /* All clients with image support should support this one */
    VD_AGENT_CLIPBOARD_IMAGE_BMP: 3,  /* optional */
    VD_AGENT_CLIPBOARD_IMAGE_TIFF: 4, /* optional */
    VD_AGENT_CLIPBOARD_IMAGE_JPG: 5  /* optional */
};
