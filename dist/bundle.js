/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _aws_sdk_client_bedrock_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/client-bedrock-runtime */ \"./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/BedrockRuntimeClient.js\");\n/* harmony import */ var _aws_sdk_client_bedrock_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/client-bedrock-runtime */ \"./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/commands/InvokeModelCommand.js\");\n\n\nconsole.log(\"Loading EmmaChatBot Libraries\");\n\nwindow.BedrockRuntimeClient = _aws_sdk_client_bedrock_runtime__WEBPACK_IMPORTED_MODULE_0__.BedrockRuntimeClient;\nwindow.InvokeModelCommand = _aws_sdk_client_bedrock_runtime__WEBPACK_IMPORTED_MODULE_1__.InvokeModelCommand;\n\n//# sourceURL=webpack://aws-webpack/./index.js?");

/***/ }),

/***/ "./node_modules/@aws-crypto/crc32/build/aws_crc32.js":
/*!***********************************************************!*\
  !*** ./node_modules/@aws-crypto/crc32/build/aws_crc32.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.\n// SPDX-License-Identifier: Apache-2.0\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AwsCrc32 = void 0;\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/@aws-crypto/crc32/node_modules/tslib/tslib.es6.js\");\nvar util_1 = __webpack_require__(/*! @aws-crypto/util */ \"./node_modules/@aws-crypto/util/build/index.js\");\nvar index_1 = __webpack_require__(/*! ./index */ \"./node_modules/@aws-crypto/crc32/build/index.js\");\nvar AwsCrc32 = /** @class */ (function () {\n    function AwsCrc32() {\n        this.crc32 = new index_1.Crc32();\n    }\n    AwsCrc32.prototype.update = function (toHash) {\n        if ((0, util_1.isEmptyData)(toHash))\n            return;\n        this.crc32.update((0, util_1.convertToBuffer)(toHash));\n    };\n    AwsCrc32.prototype.digest = function () {\n        return tslib_1.__awaiter(this, void 0, void 0, function () {\n            return tslib_1.__generator(this, function (_a) {\n                return [2 /*return*/, (0, util_1.numToUint8)(this.crc32.digest())];\n            });\n        });\n    };\n    AwsCrc32.prototype.reset = function () {\n        this.crc32 = new index_1.Crc32();\n    };\n    return AwsCrc32;\n}());\nexports.AwsCrc32 = AwsCrc32;\n//# sourceMappingURL=aws_crc32.js.map\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-crypto/crc32/build/aws_crc32.js?");

/***/ }),

/***/ "./node_modules/@aws-crypto/crc32/build/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@aws-crypto/crc32/build/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AwsCrc32 = exports.Crc32 = exports.crc32 = void 0;\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/@aws-crypto/crc32/node_modules/tslib/tslib.es6.js\");\nvar util_1 = __webpack_require__(/*! @aws-crypto/util */ \"./node_modules/@aws-crypto/util/build/index.js\");\nfunction crc32(data) {\n    return new Crc32().update(data).digest();\n}\nexports.crc32 = crc32;\nvar Crc32 = /** @class */ (function () {\n    function Crc32() {\n        this.checksum = 0xffffffff;\n    }\n    Crc32.prototype.update = function (data) {\n        var e_1, _a;\n        try {\n            for (var data_1 = tslib_1.__values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {\n                var byte = data_1_1.value;\n                this.checksum =\n                    (this.checksum >>> 8) ^ lookupTable[(this.checksum ^ byte) & 0xff];\n            }\n        }\n        catch (e_1_1) { e_1 = { error: e_1_1 }; }\n        finally {\n            try {\n                if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);\n            }\n            finally { if (e_1) throw e_1.error; }\n        }\n        return this;\n    };\n    Crc32.prototype.digest = function () {\n        return (this.checksum ^ 0xffffffff) >>> 0;\n    };\n    return Crc32;\n}());\nexports.Crc32 = Crc32;\n// prettier-ignore\nvar a_lookUpTable = [\n    0x00000000, 0x77073096, 0xEE0E612C, 0x990951BA,\n    0x076DC419, 0x706AF48F, 0xE963A535, 0x9E6495A3,\n    0x0EDB8832, 0x79DCB8A4, 0xE0D5E91E, 0x97D2D988,\n    0x09B64C2B, 0x7EB17CBD, 0xE7B82D07, 0x90BF1D91,\n    0x1DB71064, 0x6AB020F2, 0xF3B97148, 0x84BE41DE,\n    0x1ADAD47D, 0x6DDDE4EB, 0xF4D4B551, 0x83D385C7,\n    0x136C9856, 0x646BA8C0, 0xFD62F97A, 0x8A65C9EC,\n    0x14015C4F, 0x63066CD9, 0xFA0F3D63, 0x8D080DF5,\n    0x3B6E20C8, 0x4C69105E, 0xD56041E4, 0xA2677172,\n    0x3C03E4D1, 0x4B04D447, 0xD20D85FD, 0xA50AB56B,\n    0x35B5A8FA, 0x42B2986C, 0xDBBBC9D6, 0xACBCF940,\n    0x32D86CE3, 0x45DF5C75, 0xDCD60DCF, 0xABD13D59,\n    0x26D930AC, 0x51DE003A, 0xC8D75180, 0xBFD06116,\n    0x21B4F4B5, 0x56B3C423, 0xCFBA9599, 0xB8BDA50F,\n    0x2802B89E, 0x5F058808, 0xC60CD9B2, 0xB10BE924,\n    0x2F6F7C87, 0x58684C11, 0xC1611DAB, 0xB6662D3D,\n    0x76DC4190, 0x01DB7106, 0x98D220BC, 0xEFD5102A,\n    0x71B18589, 0x06B6B51F, 0x9FBFE4A5, 0xE8B8D433,\n    0x7807C9A2, 0x0F00F934, 0x9609A88E, 0xE10E9818,\n    0x7F6A0DBB, 0x086D3D2D, 0x91646C97, 0xE6635C01,\n    0x6B6B51F4, 0x1C6C6162, 0x856530D8, 0xF262004E,\n    0x6C0695ED, 0x1B01A57B, 0x8208F4C1, 0xF50FC457,\n    0x65B0D9C6, 0x12B7E950, 0x8BBEB8EA, 0xFCB9887C,\n    0x62DD1DDF, 0x15DA2D49, 0x8CD37CF3, 0xFBD44C65,\n    0x4DB26158, 0x3AB551CE, 0xA3BC0074, 0xD4BB30E2,\n    0x4ADFA541, 0x3DD895D7, 0xA4D1C46D, 0xD3D6F4FB,\n    0x4369E96A, 0x346ED9FC, 0xAD678846, 0xDA60B8D0,\n    0x44042D73, 0x33031DE5, 0xAA0A4C5F, 0xDD0D7CC9,\n    0x5005713C, 0x270241AA, 0xBE0B1010, 0xC90C2086,\n    0x5768B525, 0x206F85B3, 0xB966D409, 0xCE61E49F,\n    0x5EDEF90E, 0x29D9C998, 0xB0D09822, 0xC7D7A8B4,\n    0x59B33D17, 0x2EB40D81, 0xB7BD5C3B, 0xC0BA6CAD,\n    0xEDB88320, 0x9ABFB3B6, 0x03B6E20C, 0x74B1D29A,\n    0xEAD54739, 0x9DD277AF, 0x04DB2615, 0x73DC1683,\n    0xE3630B12, 0x94643B84, 0x0D6D6A3E, 0x7A6A5AA8,\n    0xE40ECF0B, 0x9309FF9D, 0x0A00AE27, 0x7D079EB1,\n    0xF00F9344, 0x8708A3D2, 0x1E01F268, 0x6906C2FE,\n    0xF762575D, 0x806567CB, 0x196C3671, 0x6E6B06E7,\n    0xFED41B76, 0x89D32BE0, 0x10DA7A5A, 0x67DD4ACC,\n    0xF9B9DF6F, 0x8EBEEFF9, 0x17B7BE43, 0x60B08ED5,\n    0xD6D6A3E8, 0xA1D1937E, 0x38D8C2C4, 0x4FDFF252,\n    0xD1BB67F1, 0xA6BC5767, 0x3FB506DD, 0x48B2364B,\n    0xD80D2BDA, 0xAF0A1B4C, 0x36034AF6, 0x41047A60,\n    0xDF60EFC3, 0xA867DF55, 0x316E8EEF, 0x4669BE79,\n    0xCB61B38C, 0xBC66831A, 0x256FD2A0, 0x5268E236,\n    0xCC0C7795, 0xBB0B4703, 0x220216B9, 0x5505262F,\n    0xC5BA3BBE, 0xB2BD0B28, 0x2BB45A92, 0x5CB36A04,\n    0xC2D7FFA7, 0xB5D0CF31, 0x2CD99E8B, 0x5BDEAE1D,\n    0x9B64C2B0, 0xEC63F226, 0x756AA39C, 0x026D930A,\n    0x9C0906A9, 0xEB0E363F, 0x72076785, 0x05005713,\n    0x95BF4A82, 0xE2B87A14, 0x7BB12BAE, 0x0CB61B38,\n    0x92D28E9B, 0xE5D5BE0D, 0x7CDCEFB7, 0x0BDBDF21,\n    0x86D3D2D4, 0xF1D4E242, 0x68DDB3F8, 0x1FDA836E,\n    0x81BE16CD, 0xF6B9265B, 0x6FB077E1, 0x18B74777,\n    0x88085AE6, 0xFF0F6A70, 0x66063BCA, 0x11010B5C,\n    0x8F659EFF, 0xF862AE69, 0x616BFFD3, 0x166CCF45,\n    0xA00AE278, 0xD70DD2EE, 0x4E048354, 0x3903B3C2,\n    0xA7672661, 0xD06016F7, 0x4969474D, 0x3E6E77DB,\n    0xAED16A4A, 0xD9D65ADC, 0x40DF0B66, 0x37D83BF0,\n    0xA9BCAE53, 0xDEBB9EC5, 0x47B2CF7F, 0x30B5FFE9,\n    0xBDBDF21C, 0xCABAC28A, 0x53B39330, 0x24B4A3A6,\n    0xBAD03605, 0xCDD70693, 0x54DE5729, 0x23D967BF,\n    0xB3667A2E, 0xC4614AB8, 0x5D681B02, 0x2A6F2B94,\n    0xB40BBE37, 0xC30C8EA1, 0x5A05DF1B, 0x2D02EF8D,\n];\nvar lookupTable = (0, util_1.uint32ArrayFrom)(a_lookUpTable);\nvar aws_crc32_1 = __webpack_require__(/*! ./aws_crc32 */ \"./node_modules/@aws-crypto/crc32/build/aws_crc32.js\");\nObject.defineProperty(exports, \"AwsCrc32\", ({ enumerable: true, get: function () { return aws_crc32_1.AwsCrc32; } }));\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-crypto/crc32/build/index.js?");

/***/ }),

/***/ "./node_modules/@aws-crypto/crc32/node_modules/tslib/tslib.es6.js":
/*!************************************************************************!*\
  !*** ./node_modules/@aws-crypto/crc32/node_modules/tslib/tslib.es6.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __assign: () => (/* binding */ __assign),\n/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),\n/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),\n/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),\n/* harmony export */   __await: () => (/* binding */ __await),\n/* harmony export */   __awaiter: () => (/* binding */ __awaiter),\n/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),\n/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),\n/* harmony export */   __createBinding: () => (/* binding */ __createBinding),\n/* harmony export */   __decorate: () => (/* binding */ __decorate),\n/* harmony export */   __exportStar: () => (/* binding */ __exportStar),\n/* harmony export */   __extends: () => (/* binding */ __extends),\n/* harmony export */   __generator: () => (/* binding */ __generator),\n/* harmony export */   __importDefault: () => (/* binding */ __importDefault),\n/* harmony export */   __importStar: () => (/* binding */ __importStar),\n/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),\n/* harmony export */   __metadata: () => (/* binding */ __metadata),\n/* harmony export */   __param: () => (/* binding */ __param),\n/* harmony export */   __read: () => (/* binding */ __read),\n/* harmony export */   __rest: () => (/* binding */ __rest),\n/* harmony export */   __spread: () => (/* binding */ __spread),\n/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),\n/* harmony export */   __values: () => (/* binding */ __values)\n/* harmony export */ });\n/*! *****************************************************************************\r\nCopyright (c) Microsoft Corporation.\r\n\r\nPermission to use, copy, modify, and/or distribute this software for any\r\npurpose with or without fee is hereby granted.\r\n\r\nTHE SOFTWARE IS PROVIDED \"AS IS\" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH\r\nREGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY\r\nAND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,\r\nINDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM\r\nLOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR\r\nOTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR\r\nPERFORMANCE OF THIS SOFTWARE.\r\n***************************************************************************** */\r\n/* global Reflect, Promise */\r\n\r\nvar extendStatics = function(d, b) {\r\n    extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return extendStatics(d, b);\r\n};\r\n\r\nfunction __extends(d, b) {\r\n    extendStatics(d, b);\r\n    function __() { this.constructor = d; }\r\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n}\r\n\r\nvar __assign = function() {\r\n    __assign = Object.assign || function __assign(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\r\n        }\r\n        return t;\r\n    }\r\n    return __assign.apply(this, arguments);\r\n}\r\n\r\nfunction __rest(s, e) {\r\n    var t = {};\r\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\r\n        t[p] = s[p];\r\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\r\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\r\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\r\n                t[p[i]] = s[p[i]];\r\n        }\r\n    return t;\r\n}\r\n\r\nfunction __decorate(decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n}\r\n\r\nfunction __param(paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n}\r\n\r\nfunction __metadata(metadataKey, metadataValue) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(metadataKey, metadataValue);\r\n}\r\n\r\nfunction __awaiter(thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n}\r\n\r\nfunction __generator(thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n}\r\n\r\nfunction __createBinding(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}\r\n\r\nfunction __exportStar(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\n\r\nfunction __values(o) {\r\n    var s = typeof Symbol === \"function\" && Symbol.iterator, m = s && o[s], i = 0;\r\n    if (m) return m.call(o);\r\n    if (o && typeof o.length === \"number\") return {\r\n        next: function () {\r\n            if (o && i >= o.length) o = void 0;\r\n            return { value: o && o[i++], done: !o };\r\n        }\r\n    };\r\n    throw new TypeError(s ? \"Object is not iterable.\" : \"Symbol.iterator is not defined.\");\r\n}\r\n\r\nfunction __read(o, n) {\r\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator];\r\n    if (!m) return o;\r\n    var i = m.call(o), r, ar = [], e;\r\n    try {\r\n        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);\r\n    }\r\n    catch (error) { e = { error: error }; }\r\n    finally {\r\n        try {\r\n            if (r && !r.done && (m = i[\"return\"])) m.call(i);\r\n        }\r\n        finally { if (e) throw e.error; }\r\n    }\r\n    return ar;\r\n}\r\n\r\nfunction __spread() {\r\n    for (var ar = [], i = 0; i < arguments.length; i++)\r\n        ar = ar.concat(__read(arguments[i]));\r\n    return ar;\r\n}\r\n\r\nfunction __spreadArrays() {\r\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\r\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\r\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\r\n            r[k] = a[j];\r\n    return r;\r\n};\r\n\r\nfunction __await(v) {\r\n    return this instanceof __await ? (this.v = v, this) : new __await(v);\r\n}\r\n\r\nfunction __asyncGenerator(thisArg, _arguments, generator) {\r\n    if (!Symbol.asyncIterator) throw new TypeError(\"Symbol.asyncIterator is not defined.\");\r\n    var g = generator.apply(thisArg, _arguments || []), i, q = [];\r\n    return i = {}, verb(\"next\"), verb(\"throw\"), verb(\"return\"), i[Symbol.asyncIterator] = function () { return this; }, i;\r\n    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }\r\n    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }\r\n    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }\r\n    function fulfill(value) { resume(\"next\", value); }\r\n    function reject(value) { resume(\"throw\", value); }\r\n    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }\r\n}\r\n\r\nfunction __asyncDelegator(o) {\r\n    var i, p;\r\n    return i = {}, verb(\"next\"), verb(\"throw\", function (e) { throw e; }), verb(\"return\"), i[Symbol.iterator] = function () { return this; }, i;\r\n    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === \"return\" } : f ? f(v) : v; } : f; }\r\n}\r\n\r\nfunction __asyncValues(o) {\r\n    if (!Symbol.asyncIterator) throw new TypeError(\"Symbol.asyncIterator is not defined.\");\r\n    var m = o[Symbol.asyncIterator], i;\r\n    return m ? m.call(o) : (o = typeof __values === \"function\" ? __values(o) : o[Symbol.iterator](), i = {}, verb(\"next\"), verb(\"throw\"), verb(\"return\"), i[Symbol.asyncIterator] = function () { return this; }, i);\r\n    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }\r\n    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }\r\n}\r\n\r\nfunction __makeTemplateObject(cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\n\r\nfunction __importStar(mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result.default = mod;\r\n    return result;\r\n}\r\n\r\nfunction __importDefault(mod) {\r\n    return (mod && mod.__esModule) ? mod : { default: mod };\r\n}\r\n\r\nfunction __classPrivateFieldGet(receiver, privateMap) {\r\n    if (!privateMap.has(receiver)) {\r\n        throw new TypeError(\"attempted to get private field on non-instance\");\r\n    }\r\n    return privateMap.get(receiver);\r\n}\r\n\r\nfunction __classPrivateFieldSet(receiver, privateMap, value) {\r\n    if (!privateMap.has(receiver)) {\r\n        throw new TypeError(\"attempted to set private field on non-instance\");\r\n    }\r\n    privateMap.set(receiver, value);\r\n    return value;\r\n}\r\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-crypto/crc32/node_modules/tslib/tslib.es6.js?");

/***/ }),

/***/ "./node_modules/@aws-crypto/ie11-detection/build/CryptoOperation.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@aws-crypto/ie11-detection/build/CryptoOperation.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n//# sourceMappingURL=CryptoOperation.js.map\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-crypto/ie11-detection/build/CryptoOperation.js?");

/***/ }),

/***/ "./node_modules/@aws-crypto/ie11-detection/build/Key.js":
/*!**************************************************************!*\
  !*** ./node_modules/@aws-crypto/ie11-detection/build/Key.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n//# sourceMappingURL=Key.js.map\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-crypto/ie11-detection/build/Key.js?");

/***/ }),

/***/ "./node_modules/@aws-crypto/ie11-detection/build/KeyOperation.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@aws-crypto/ie11-detection/build/KeyOperation.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n//# sourceMappingURL=KeyOperation.js.map\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-crypto/ie11-detection/build/KeyOperation.js?");

/***/ }),

/***/ "./node_modules/@aws-crypto/ie11-detection/build/MsSubtleCrypto.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@aws-crypto/ie11-detection/build/MsSubtleCrypto.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n//# sourceMappingURL=MsSubtleCrypto.js.map\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-crypto/ie11-detection/build/MsSubtleCrypto.js?");

/***/ }),

/***/ "./node_modules/@aws-crypto/ie11-detection/build/MsWindow.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@aws-crypto/ie11-detection/build/MsWindow.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.isMsWindow = void 0;\nvar msSubtleCryptoMethods = [\n    \"decrypt\",\n    \"digest\",\n    \"encrypt\",\n    \"exportKey\",\n    \"generateKey\",\n    \"importKey\",\n    \"sign\",\n    \"verify\"\n];\nfunction quacksLikeAnMsWindow(window) {\n    return \"MSInputMethodContext\" in window && \"msCrypto\" in window;\n}\n/**\n * Determines if the provided window is (or is like) the window object one would\n * expect to encounter in Internet Explorer 11.\n */\nfunction isMsWindow(window) {\n    if (quacksLikeAnMsWindow(window) && window.msCrypto.subtle !== undefined) {\n        var _a = window.msCrypto, getRandomValues = _a.getRandomValues, subtle_1 = _a.subtle;\n        return msSubtleCryptoMethods\n            .map(function (methodName) { return subtle_1[methodName]; })\n            .concat(getRandomValues)\n            .every(function (method) { return typeof method === \"function\"; });\n    }\n    return false;\n}\nexports.isMsWindow = isMsWindow;\n//# sourceMappingURL=MsWindow.js.map\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-crypto/ie11-detection/build/MsWindow.js?");

/***/ }),

/***/ "./node_modules/@aws-crypto/ie11-detection/build/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@aws-crypto/ie11-detection/build/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/@aws-crypto/ie11-detection/node_modules/tslib/tslib.es6.js\");\ntslib_1.__exportStar(__webpack_require__(/*! ./CryptoOperation */ \"./node_modules/@aws-crypto/ie11-detection/build/CryptoOperation.js\"), exports);\ntslib_1.__exportStar(__webpack_require__(/*! ./Key */ \"./node_modules/@aws-crypto/ie11-detection/build/Key.js\"), exports);\ntslib_1.__exportStar(__webpack_require__(/*! ./KeyOperation */ \"./node_modules/@aws-crypto/ie11-detection/build/KeyOperation.js\"), exports);\ntslib_1.__exportStar(__webpack_require__(/*! ./MsSubtleCrypto */ \"./node_modules/@aws-crypto/ie11-detection/build/MsSubtleCrypto.js\"), exports);\ntslib_1.__exportStar(__webpack_require__(/*! ./MsWindow */ \"./node_modules/@aws-crypto/ie11-detection/build/MsWindow.js\"), exports);\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-crypto/ie11-detection/build/index.js?");

/***/ }),

/***/ "./node_modules/@aws-crypto/ie11-detection/node_modules/tslib/tslib.es6.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@aws-crypto/ie11-detection/node_modules/tslib/tslib.es6.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __assign: () => (/* binding */ __assign),\n/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),\n/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),\n/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),\n/* harmony export */   __await: () => (/* binding */ __await),\n/* harmony export */   __awaiter: () => (/* binding */ __awaiter),\n/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),\n/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),\n/* harmony export */   __createBinding: () => (/* binding */ __createBinding),\n/* harmony export */   __decorate: () => (/* binding */ __decorate),\n/* harmony export */   __exportStar: () => (/* binding */ __exportStar),\n/* harmony export */   __extends: () => (/* binding */ __extends),\n/* harmony export */   __generator: () => (/* binding */ __generator),\n/* harmony export */   __importDefault: () => (/* binding */ __importDefault),\n/* harmony export */   __importStar: () => (/* binding */ __importStar),\n/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),\n/* harmony export */   __metadata: () => (/* binding */ __metadata),\n/* harmony export */   __param: () => (/* binding */ __param),\n/* harmony export */   __read: () => (/* binding */ __read),\n/* harmony export */   __rest: () => (/* binding */ __rest),\n/* harmony export */   __spread: () => (/* binding */ __spread),\n/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),\n/* harmony export */   __values: () => (/* binding */ __values)\n/* harmony export */ });\n/*! *****************************************************************************\r\nCopyright (c) Microsoft Corporation.\r\n\r\nPermission to use, copy, modify, and/or distribute this software for any\r\npurpose with or without fee is hereby granted.\r\n\r\nTHE SOFTWARE IS PROVIDED \"AS IS\" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH\r\nREGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY\r\nAND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,\r\nINDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM\r\nLOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR\r\nOTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR\r\nPERFORMANCE OF THIS SOFTWARE.\r\n***************************************************************************** */\r\n/* global Reflect, Promise */\r\n\r\nvar extendStatics = function(d, b) {\r\n    extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return extendStatics(d, b);\r\n};\r\n\r\nfunction __extends(d, b) {\r\n    extendStatics(d, b);\r\n    function __() { this.constructor = d; }\r\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n}\r\n\r\nvar __assign = function() {\r\n    __assign = Object.assign || function __assign(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\r\n        }\r\n        return t;\r\n    }\r\n    return __assign.apply(this, arguments);\r\n}\r\n\r\nfunction __rest(s, e) {\r\n    var t = {};\r\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\r\n        t[p] = s[p];\r\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\r\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\r\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\r\n                t[p[i]] = s[p[i]];\r\n        }\r\n    return t;\r\n}\r\n\r\nfunction __decorate(decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n}\r\n\r\nfunction __param(paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n}\r\n\r\nfunction __metadata(metadataKey, metadataValue) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(metadataKey, metadataValue);\r\n}\r\n\r\nfunction __awaiter(thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n}\r\n\r\nfunction __generator(thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n}\r\n\r\nfunction __createBinding(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}\r\n\r\nfunction __exportStar(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\n\r\nfunction __values(o) {\r\n    var s = typeof Symbol === \"function\" && Symbol.iterator, m = s && o[s], i = 0;\r\n    if (m) return m.call(o);\r\n    if (o && typeof o.length === \"number\") return {\r\n        next: function () {\r\n            if (o && i >= o.length) o = void 0;\r\n            return { value: o && o[i++], done: !o };\r\n        }\r\n    };\r\n    throw new TypeError(s ? \"Object is not iterable.\" : \"Symbol.iterator is not defined.\");\r\n}\r\n\r\nfunction __read(o, n) {\r\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator];\r\n    if (!m) return o;\r\n    var i = m.call(o), r, ar = [], e;\r\n    try {\r\n        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);\r\n    }\r\n    catch (error) { e = { error: error }; }\r\n    finally {\r\n        try {\r\n            if (r && !r.done && (m = i[\"return\"])) m.call(i);\r\n        }\r\n        finally { if (e) throw e.error; }\r\n    }\r\n    return ar;\r\n}\r\n\r\nfunction __spread() {\r\n    for (var ar = [], i = 0; i < arguments.length; i++)\r\n        ar = ar.concat(__read(arguments[i]));\r\n    return ar;\r\n}\r\n\r\nfunction __spreadArrays() {\r\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\r\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\r\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\r\n            r[k] = a[j];\r\n    return r;\r\n};\r\n\r\nfunction __await(v) {\r\n    return this instanceof __await ? (this.v = v, this) : new __await(v);\r\n}\r\n\r\nfunction __asyncGenerator(thisArg, _arguments, generator) {\r\n    if (!Symbol.asyncIterator) throw new TypeError(\"Symbol.asyncIterator is not defined.\");\r\n    var g = generator.apply(thisArg, _arguments || []), i, q = [];\r\n    return i = {}, verb(\"next\"), verb(\"throw\"), verb(\"return\"), i[Symbol.asyncIterator] = function () { return this; }, i;\r\n    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }\r\n    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }\r\n    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }\r\n    function fulfill(value) { resume(\"next\", value); }\r\n    function reject(value) { resume(\"throw\", value); }\r\n    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }\r\n}\r\n\r\nfunction __asyncDelegator(o) {\r\n    var i, p;\r\n    return i = {}, verb(\"next\"), verb(\"throw\", function (e) { throw e; }), verb(\"return\"), i[Symbol.iterator] = function () { return this; }, i;\r\n    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === \"return\" } : f ? f(v) : v; } : f; }\r\n}\r\n\r\nfunction __asyncValues(o) {\r\n    if (!Symbol.asyncIterator) throw new TypeError(\"Symbol.asyncIterator is not defined.\");\r\n    var m = o[Symbol.asyncIterator], i;\r\n    return m ? m.call(o) : (o = typeof __values === \"function\" ? __values(o) : o[Symbol.iterator](), i = {}, verb(\"next\"), verb(\"throw\"), verb(\"return\"), i[Symbol.asyncIterator] = function () { return this; }, i);\r\n    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }\r\n    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }\r\n}\r\n\r\nfunction __makeTemplateObject(cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\n\r\nfunction __importStar(mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result.default = mod;\r\n    return result;\r\n}\r\n\r\nfunction __importDefault(mod) {\r\n    return (mod && mod.__esModule) ? mod : { default: mod };\r\n}\r\n\r\nfunction __classPrivateFieldGet(receiver, privateMap) {\r\n    if (!privateMap.has(receiver)) {\r\n        throw new TypeError(\"attempted to get private field on non-instance\");\r\n    }\r\n    return privateMap.get(receiver);\r\n}\r\n\r\nfunction __classPrivateFieldSet(receiver, privateMap, value) {\r\n    if (!privateMap.has(receiver)) {\r\n        throw new TypeError(\"attempted to set private field on non-instance\");\r\n    }\r\n    privateMap.set(receiver, value);\r\n    return value;\r\n}\r\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-crypto/ie11-detection/node_modules/tslib/tslib.es6.js?");

/***/ }),

/***/ "./node_modules/@aws-crypto/sha256-browser/build/constants.js":
/*!********************************************************************!*\
  !*** ./node_modules/@aws-crypto/sha256-browser/build/constants.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.EMPTY_DATA_SHA_256 = exports.SHA_256_HMAC_ALGO = exports.SHA_256_HASH = void 0;\nexports.SHA_256_HASH = { name: \"SHA-256\" };\nexports.SHA_256_HMAC_ALGO = {\n    name: \"HMAC\",\n    hash: exports.SHA_256_HASH\n};\nexports.EMPTY_DATA_SHA_256 = new Uint8Array([\n    227,\n    176,\n    196,\n    66,\n    152,\n    252,\n    28,\n    20,\n    154,\n    251,\n    244,\n    200,\n    153,\n    111,\n    185,\n    36,\n    39,\n    174,\n    65,\n    228,\n    100,\n    155,\n    147,\n    76,\n    164,\n    149,\n    153,\n    27,\n    120,\n    82,\n    184,\n    85\n]);\n//# sourceMappingURL=constants.js.map\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-crypto/sha256-browser/build/constants.js?");

/***/ }),

/***/ "./node_modules/@aws-crypto/sha256-browser/build/crossPlatformSha256.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@aws-crypto/sha256-browser/build/crossPlatformSha256.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Sha256 = void 0;\nvar ie11Sha256_1 = __webpack_require__(/*! ./ie11Sha256 */ \"./node_modules/@aws-crypto/sha256-browser/build/ie11Sha256.js\");\nvar webCryptoSha256_1 = __webpack_require__(/*! ./webCryptoSha256 */ \"./node_modules/@aws-crypto/sha256-browser/build/webCryptoSha256.js\");\nvar sha256_js_1 = __webpack_require__(/*! @aws-crypto/sha256-js */ \"./node_modules/@aws-crypto/sha256-js/build/index.js\");\nvar supports_web_crypto_1 = __webpack_require__(/*! @aws-crypto/supports-web-crypto */ \"./node_modules/@aws-crypto/supports-web-crypto/build/index.js\");\nvar ie11_detection_1 = __webpack_require__(/*! @aws-crypto/ie11-detection */ \"./node_modules/@aws-crypto/ie11-detection/build/index.js\");\nvar util_locate_window_1 = __webpack_require__(/*! @aws-sdk/util-locate-window */ \"./node_modules/@aws-sdk/util-locate-window/dist-es/index.js\");\nvar util_1 = __webpack_require__(/*! @aws-crypto/util */ \"./node_modules/@aws-crypto/util/build/index.js\");\nvar Sha256 = /** @class */ (function () {\n    function Sha256(secret) {\n        if ((0, supports_web_crypto_1.supportsWebCrypto)((0, util_locate_window_1.locateWindow)())) {\n            this.hash = new webCryptoSha256_1.Sha256(secret);\n        }\n        else if ((0, ie11_detection_1.isMsWindow)((0, util_locate_window_1.locateWindow)())) {\n            this.hash = new ie11Sha256_1.Sha256(secret);\n        }\n        else {\n            this.hash = new sha256_js_1.Sha256(secret);\n        }\n    }\n    Sha256.prototype.update = function (data, encoding) {\n        this.hash.update((0, util_1.convertToBuffer)(data));\n    };\n    Sha256.prototype.digest = function () {\n        return this.hash.digest();\n    };\n    Sha256.prototype.reset = function () {\n        this.hash.reset();\n    };\n    return Sha256;\n}());\nexports.Sha256 = Sha256;\n//# sourceMappingURL=crossPlatformSha256.js.map\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-crypto/sha256-browser/build/crossPlatformSha256.js?");

/***/ }),

/***/ "./node_modules/@aws-crypto/sha256-browser/build/ie11Sha256.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@aws-crypto/sha256-browser/build/ie11Sha256.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Sha256 = void 0;\nvar isEmptyData_1 = __webpack_require__(/*! ./isEmptyData */ \"./node_modules/@aws-crypto/sha256-browser/build/isEmptyData.js\");\nvar constants_1 = __webpack_require__(/*! ./constants */ \"./node_modules/@aws-crypto/sha256-browser/build/constants.js\");\nvar util_utf8_browser_1 = __webpack_require__(/*! @aws-sdk/util-utf8-browser */ \"./node_modules/@aws-sdk/util-utf8-browser/dist-es/index.js\");\nvar util_locate_window_1 = __webpack_require__(/*! @aws-sdk/util-locate-window */ \"./node_modules/@aws-sdk/util-locate-window/dist-es/index.js\");\nvar Sha256 = /** @class */ (function () {\n    function Sha256(secret) {\n        this.secret = secret;\n        this.reset();\n    }\n    Sha256.prototype.update = function (toHash) {\n        var _this = this;\n        if ((0, isEmptyData_1.isEmptyData)(toHash)) {\n            return;\n        }\n        this.operation = this.operation.then(function (operation) {\n            operation.onerror = function () {\n                _this.operation = Promise.reject(new Error(\"Error encountered updating hash\"));\n            };\n            operation.process(toArrayBufferView(toHash));\n            return operation;\n        });\n        this.operation.catch(function () { });\n    };\n    Sha256.prototype.digest = function () {\n        return this.operation.then(function (operation) {\n            return new Promise(function (resolve, reject) {\n                operation.onerror = function () {\n                    reject(new Error(\"Error encountered finalizing hash\"));\n                };\n                operation.oncomplete = function () {\n                    if (operation.result) {\n                        resolve(new Uint8Array(operation.result));\n                    }\n                    reject(new Error(\"Error encountered finalizing hash\"));\n                };\n                operation.finish();\n            });\n        });\n    };\n    Sha256.prototype.reset = function () {\n        if (this.secret) {\n            this.operation = getKeyPromise(this.secret).then(function (keyData) {\n                return (0, util_locate_window_1.locateWindow)().msCrypto.subtle.sign(constants_1.SHA_256_HMAC_ALGO, keyData);\n            });\n            this.operation.catch(function () { });\n        }\n        else {\n            this.operation = Promise.resolve((0, util_locate_window_1.locateWindow)().msCrypto.subtle.digest(\"SHA-256\"));\n        }\n    };\n    return Sha256;\n}());\nexports.Sha256 = Sha256;\nfunction getKeyPromise(secret) {\n    return new Promise(function (resolve, reject) {\n        var keyOperation = (0, util_locate_window_1.locateWindow)().msCrypto.subtle.importKey(\"raw\", toArrayBufferView(secret), constants_1.SHA_256_HMAC_ALGO, false, [\"sign\"]);\n        keyOperation.oncomplete = function () {\n            if (keyOperation.result) {\n                resolve(keyOperation.result);\n            }\n            reject(new Error(\"ImportKey completed without importing key.\"));\n        };\n        keyOperation.onerror = function () {\n            reject(new Error(\"ImportKey failed to import key.\"));\n        };\n    });\n}\nfunction toArrayBufferView(data) {\n    if (typeof data === \"string\") {\n        return (0, util_utf8_browser_1.fromUtf8)(data);\n    }\n    if (ArrayBuffer.isView(data)) {\n        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);\n    }\n    return new Uint8Array(data);\n}\n//# sourceMappingURL=ie11Sha256.js.map\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-crypto/sha256-browser/build/ie11Sha256.js?");

/***/ }),

/***/ "./node_modules/@aws-crypto/sha256-browser/build/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@aws-crypto/sha256-browser/build/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.WebCryptoSha256 = exports.Ie11Sha256 = void 0;\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/@aws-crypto/sha256-browser/node_modules/tslib/tslib.es6.js\");\ntslib_1.__exportStar(__webpack_require__(/*! ./crossPlatformSha256 */ \"./node_modules/@aws-crypto/sha256-browser/build/crossPlatformSha256.js\"), exports);\nvar ie11Sha256_1 = __webpack_require__(/*! ./ie11Sha256 */ \"./node_modules/@aws-crypto/sha256-browser/build/ie11Sha256.js\");\nObject.defineProperty(exports, \"Ie11Sha256\", ({ enumerable: true, get: function () { return ie11Sha256_1.Sha256; } }));\nvar webCryptoSha256_1 = __webpack_require__(/*! ./webCryptoSha256 */ \"./node_modules/@aws-crypto/sha256-browser/build/webCryptoSha256.js\");\nObject.defineProperty(exports, \"WebCryptoSha256\", ({ enumerable: true, get: function () { return webCryptoSha256_1.Sha256; } }));\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-crypto/sha256-browser/build/index.js?");

/***/ }),

/***/ "./node_modules/@aws-crypto/sha256-browser/build/isEmptyData.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@aws-crypto/sha256-browser/build/isEmptyData.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.isEmptyData = void 0;\nfunction isEmptyData(data) {\n    if (typeof data === \"string\") {\n        return data.length === 0;\n    }\n    return data.byteLength === 0;\n}\nexports.isEmptyData = isEmptyData;\n//# sourceMappingURL=isEmptyData.js.map\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-crypto/sha256-browser/build/isEmptyData.js?");

/***/ }),

/***/ "./node_modules/@aws-crypto/sha256-browser/build/webCryptoSha256.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@aws-crypto/sha256-browser/build/webCryptoSha256.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Sha256 = void 0;\nvar util_1 = __webpack_require__(/*! @aws-crypto/util */ \"./node_modules/@aws-crypto/util/build/index.js\");\nvar constants_1 = __webpack_require__(/*! ./constants */ \"./node_modules/@aws-crypto/sha256-browser/build/constants.js\");\nvar util_locate_window_1 = __webpack_require__(/*! @aws-sdk/util-locate-window */ \"./node_modules/@aws-sdk/util-locate-window/dist-es/index.js\");\nvar Sha256 = /** @class */ (function () {\n    function Sha256(secret) {\n        this.toHash = new Uint8Array(0);\n        this.secret = secret;\n        this.reset();\n    }\n    Sha256.prototype.update = function (data) {\n        if ((0, util_1.isEmptyData)(data)) {\n            return;\n        }\n        var update = (0, util_1.convertToBuffer)(data);\n        var typedArray = new Uint8Array(this.toHash.byteLength + update.byteLength);\n        typedArray.set(this.toHash, 0);\n        typedArray.set(update, this.toHash.byteLength);\n        this.toHash = typedArray;\n    };\n    Sha256.prototype.digest = function () {\n        var _this = this;\n        if (this.key) {\n            return this.key.then(function (key) {\n                return (0, util_locate_window_1.locateWindow)()\n                    .crypto.subtle.sign(constants_1.SHA_256_HMAC_ALGO, key, _this.toHash)\n                    .then(function (data) { return new Uint8Array(data); });\n            });\n        }\n        if ((0, util_1.isEmptyData)(this.toHash)) {\n            return Promise.resolve(constants_1.EMPTY_DATA_SHA_256);\n        }\n        return Promise.resolve()\n            .then(function () {\n            return (0, util_locate_window_1.locateWindow)().crypto.subtle.digest(constants_1.SHA_256_HASH, _this.toHash);\n        })\n            .then(function (data) { return Promise.resolve(new Uint8Array(data)); });\n    };\n    Sha256.prototype.reset = function () {\n        var _this = this;\n        this.toHash = new Uint8Array(0);\n        if (this.secret && this.secret !== void 0) {\n            this.key = new Promise(function (resolve, reject) {\n                (0, util_locate_window_1.locateWindow)()\n                    .crypto.subtle.importKey(\"raw\", (0, util_1.convertToBuffer)(_this.secret), constants_1.SHA_256_HMAC_ALGO, false, [\"sign\"])\n                    .then(resolve, reject);\n            });\n            this.key.catch(function () { });\n        }\n    };\n    return Sha256;\n}());\nexports.Sha256 = Sha256;\n//# sourceMappingURL=webCryptoSha256.js.map\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-crypto/sha256-browser/build/webCryptoSha256.js?");

/***/ }),

/***/ "./node_modules/@aws-crypto/sha256-browser/node_modules/tslib/tslib.es6.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@aws-crypto/sha256-browser/node_modules/tslib/tslib.es6.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __assign: () => (/* binding */ __assign),\n/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),\n/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),\n/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),\n/* harmony export */   __await: () => (/* binding */ __await),\n/* harmony export */   __awaiter: () => (/* binding */ __awaiter),\n/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),\n/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),\n/* harmony export */   __createBinding: () => (/* binding */ __createBinding),\n/* harmony export */   __decorate: () => (/* binding */ __decorate),\n/* harmony export */   __exportStar: () => (/* binding */ __exportStar),\n/* harmony export */   __extends: () => (/* binding */ __extends),\n/* harmony export */   __generator: () => (/* binding */ __generator),\n/* harmony export */   __importDefault: () => (/* binding */ __importDefault),\n/* harmony export */   __importStar: () => (/* binding */ __importStar),\n/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),\n/* harmony export */   __metadata: () => (/* binding */ __metadata),\n/* harmony export */   __param: () => (/* binding */ __param),\n/* harmony export */   __read: () => (/* binding */ __read),\n/* harmony export */   __rest: () => (/* binding */ __rest),\n/* harmony export */   __spread: () => (/* binding */ __spread),\n/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),\n/* harmony export */   __values: () => (/* binding */ __values)\n/* harmony export */ });\n/*! *****************************************************************************\r\nCopyright (c) Microsoft Corporation.\r\n\r\nPermission to use, copy, modify, and/or distribute this software for any\r\npurpose with or without fee is hereby granted.\r\n\r\nTHE SOFTWARE IS PROVIDED \"AS IS\" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH\r\nREGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY\r\nAND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,\r\nINDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM\r\nLOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR\r\nOTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR\r\nPERFORMANCE OF THIS SOFTWARE.\r\n***************************************************************************** */\r\n/* global Reflect, Promise */\r\n\r\nvar extendStatics = function(d, b) {\r\n    extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return extendStatics(d, b);\r\n};\r\n\r\nfunction __extends(d, b) {\r\n    extendStatics(d, b);\r\n    function __() { this.constructor = d; }\r\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n}\r\n\r\nvar __assign = function() {\r\n    __assign = Object.assign || function __assign(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\r\n        }\r\n        return t;\r\n    }\r\n    return __assign.apply(this, arguments);\r\n}\r\n\r\nfunction __rest(s, e) {\r\n    var t = {};\r\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\r\n        t[p] = s[p];\r\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\r\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\r\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\r\n                t[p[i]] = s[p[i]];\r\n        }\r\n    return t;\r\n}\r\n\r\nfunction __decorate(decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n}\r\n\r\nfunction __param(paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n}\r\n\r\nfunction __metadata(metadataKey, metadataValue) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(metadataKey, metadataValue);\r\n}\r\n\r\nfunction __awaiter(thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n}\r\n\r\nfunction __generator(thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n}\r\n\r\nfunction __createBinding(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}\r\n\r\nfunction __exportStar(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\n\r\nfunction __values(o) {\r\n    var s = typeof Symbol === \"function\" && Symbol.iterator, m = s && o[s], i = 0;\r\n    if (m) return m.call(o);\r\n    if (o && typeof o.length === \"number\") return {\r\n        next: function () {\r\n            if (o && i >= o.length) o = void 0;\r\n            return { value: o && o[i++], done: !o };\r\n        }\r\n    };\r\n    throw new TypeError(s ? \"Object is not iterable.\" : \"Symbol.iterator is not defined.\");\r\n}\r\n\r\nfunction __read(o, n) {\r\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator];\r\n    if (!m) return o;\r\n    var i = m.call(o), r, ar = [], e;\r\n    try {\r\n        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);\r\n    }\r\n    catch (error) { e = { error: error }; }\r\n    finally {\r\n        try {\r\n            if (r && !r.done && (m = i[\"return\"])) m.call(i);\r\n        }\r\n        finally { if (e) throw e.error; }\r\n    }\r\n    return ar;\r\n}\r\n\r\nfunction __spread() {\r\n    for (var ar = [], i = 0; i < arguments.length; i++)\r\n        ar = ar.concat(__read(arguments[i]));\r\n    return ar;\r\n}\r\n\r\nfunction __spreadArrays() {\r\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\r\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\r\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\r\n            r[k] = a[j];\r\n    return r;\r\n};\r\n\r\nfunction __await(v) {\r\n    return this instanceof __await ? (this.v = v, this) : new __await(v);\r\n}\r\n\r\nfunction __asyncGenerator(thisArg, _arguments, generator) {\r\n    if (!Symbol.asyncIterator) throw new TypeError(\"Symbol.asyncIterator is not defined.\");\r\n    var g = generator.apply(thisArg, _arguments || []), i, q = [];\r\n    return i = {}, verb(\"next\"), verb(\"throw\"), verb(\"return\"), i[Symbol.asyncIterator] = function () { return this; }, i;\r\n    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }\r\n    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }\r\n    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }\r\n    function fulfill(value) { resume(\"next\", value); }\r\n    function reject(value) { resume(\"throw\", value); }\r\n    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }\r\n}\r\n\r\nfunction __asyncDelegator(o) {\r\n    var i, p;\r\n    return i = {}, verb(\"next\"), verb(\"throw\", function (e) { throw e; }), verb(\"return\"), i[Symbol.iterator] = function () { return this; }, i;\r\n    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === \"return\" } : f ? f(v) : v; } : f; }\r\n}\r\n\r\nfunction __asyncValues(o) {\r\n    if (!Symbol.asyncIterator) throw new TypeError(\"Symbol.asyncIterator is not defined.\");\r\n    var m = o[Symbol.asyncIterator], i;\r\n    return m ? m.call(o) : (o = typeof __values === \"function\" ? __values(o) : o[Symbol.iterator](), i = {}, verb(\"next\"), verb(\"throw\"), verb(\"return\"), i[Symbol.asyncIterator] = function () { return this; }, i);\r\n    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }\r\n    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }\r\n}\r\n\r\nfunction __makeTemplateObject(cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\n\r\nfunction __importStar(mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result.default = mod;\r\n    return result;\r\n}\r\n\r\nfunction __importDefault(mod) {\r\n    return (mod && mod.__esModule) ? mod : { default: mod };\r\n}\r\n\r\nfunction __classPrivateFieldGet(receiver, privateMap) {\r\n    if (!privateMap.has(receiver)) {\r\n        throw new TypeError(\"attempted to get private field on non-instance\");\r\n    }\r\n    return privateMap.get(receiver);\r\n}\r\n\r\nfunction __classPrivateFieldSet(receiver, privateMap, value) {\r\n    if (!privateMap.has(receiver)) {\r\n        throw new TypeError(\"attempted to set private field on non-instance\");\r\n    }\r\n    privateMap.set(receiver, value);\r\n    return value;\r\n}\r\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-crypto/sha256-browser/node_modules/tslib/tslib.es6.js?");

/***/ }),

/***/ "./node_modules/@aws-crypto/sha256-js/build/RawSha256.js":
/*!***************************************************************!*\
  !*** ./node_modules/@aws-crypto/sha256-js/build/RawSha256.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.RawSha256 = void 0;\nvar constants_1 = __webpack_require__(/*! ./constants */ \"./node_modules/@aws-crypto/sha256-js/build/constants.js\");\n/**\n * @internal\n */\nvar RawSha256 = /** @class */ (function () {\n    function RawSha256() {\n        this.state = Int32Array.from(constants_1.INIT);\n        this.temp = new Int32Array(64);\n        this.buffer = new Uint8Array(64);\n        this.bufferLength = 0;\n        this.bytesHashed = 0;\n        /**\n         * @internal\n         */\n        this.finished = false;\n    }\n    RawSha256.prototype.update = function (data) {\n        if (this.finished) {\n            throw new Error(\"Attempted to update an already finished hash.\");\n        }\n        var position = 0;\n        var byteLength = data.byteLength;\n        this.bytesHashed += byteLength;\n        if (this.bytesHashed * 8 > constants_1.MAX_HASHABLE_LENGTH) {\n            throw new Error(\"Cannot hash more than 2^53 - 1 bits\");\n        }\n        while (byteLength > 0) {\n            this.buffer[this.bufferLength++] = data[position++];\n            byteLength--;\n            if (this.bufferLength === constants_1.BLOCK_SIZE) {\n                this.hashBuffer();\n                this.bufferLength = 0;\n            }\n        }\n    };\n    RawSha256.prototype.digest = function () {\n        if (!this.finished) {\n            var bitsHashed = this.bytesHashed * 8;\n            var bufferView = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength);\n            var undecoratedLength = this.bufferLength;\n            bufferView.setUint8(this.bufferLength++, 0x80);\n            // Ensure the final block has enough room for the hashed length\n            if (undecoratedLength % constants_1.BLOCK_SIZE >= constants_1.BLOCK_SIZE - 8) {\n                for (var i = this.bufferLength; i < constants_1.BLOCK_SIZE; i++) {\n                    bufferView.setUint8(i, 0);\n                }\n                this.hashBuffer();\n                this.bufferLength = 0;\n            }\n            for (var i = this.bufferLength; i < constants_1.BLOCK_SIZE - 8; i++) {\n                bufferView.setUint8(i, 0);\n            }\n            bufferView.setUint32(constants_1.BLOCK_SIZE - 8, Math.floor(bitsHashed / 0x100000000), true);\n            bufferView.setUint32(constants_1.BLOCK_SIZE - 4, bitsHashed);\n            this.hashBuffer();\n            this.finished = true;\n        }\n        // The value in state is little-endian rather than big-endian, so flip\n        // each word into a new Uint8Array\n        var out = new Uint8Array(constants_1.DIGEST_LENGTH);\n        for (var i = 0; i < 8; i++) {\n            out[i * 4] = (this.state[i] >>> 24) & 0xff;\n            out[i * 4 + 1] = (this.state[i] >>> 16) & 0xff;\n            out[i * 4 + 2] = (this.state[i] >>> 8) & 0xff;\n            out[i * 4 + 3] = (this.state[i] >>> 0) & 0xff;\n        }\n        return out;\n    };\n    RawSha256.prototype.hashBuffer = function () {\n        var _a = this, buffer = _a.buffer, state = _a.state;\n        var state0 = state[0], state1 = state[1], state2 = state[2], state3 = state[3], state4 = state[4], state5 = state[5], state6 = state[6], state7 = state[7];\n        for (var i = 0; i < constants_1.BLOCK_SIZE; i++) {\n            if (i < 16) {\n                this.temp[i] =\n                    ((buffer[i * 4] & 0xff) << 24) |\n                        ((buffer[i * 4 + 1] & 0xff) << 16) |\n                        ((buffer[i * 4 + 2] & 0xff) << 8) |\n                        (buffer[i * 4 + 3] & 0xff);\n            }\n            else {\n                var u = this.temp[i - 2];\n                var t1_1 = ((u >>> 17) | (u << 15)) ^ ((u >>> 19) | (u << 13)) ^ (u >>> 10);\n                u = this.temp[i - 15];\n                var t2_1 = ((u >>> 7) | (u << 25)) ^ ((u >>> 18) | (u << 14)) ^ (u >>> 3);\n                this.temp[i] =\n                    ((t1_1 + this.temp[i - 7]) | 0) + ((t2_1 + this.temp[i - 16]) | 0);\n            }\n            var t1 = ((((((state4 >>> 6) | (state4 << 26)) ^\n                ((state4 >>> 11) | (state4 << 21)) ^\n                ((state4 >>> 25) | (state4 << 7))) +\n                ((state4 & state5) ^ (~state4 & state6))) |\n                0) +\n                ((state7 + ((constants_1.KEY[i] + this.temp[i]) | 0)) | 0)) |\n                0;\n            var t2 = ((((state0 >>> 2) | (state0 << 30)) ^\n                ((state0 >>> 13) | (state0 << 19)) ^\n                ((state0 >>> 22) | (state0 << 10))) +\n                ((state0 & state1) ^ (state0 & state2) ^ (state1 & state2))) |\n                0;\n            state7 = state6;\n            state6 = state5;\n            state5 = state4;\n            state4 = (state3 + t1) | 0;\n            state3 = state2;\n            state2 = state1;\n            state1 = state0;\n            state0 = (t1 + t2) | 0;\n        }\n        state[0] += state0;\n        state[1] += state1;\n        state[2] += state2;\n        state[3] += state3;\n        state[4] += state4;\n        state[5] += state5;\n        state[6] += state6;\n        state[7] += state7;\n    };\n    return RawSha256;\n}());\nexports.RawSha256 = RawSha256;\n//# sourceMappingURL=RawSha256.js.map\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-crypto/sha256-js/build/RawSha256.js?");

/***/ }),

/***/ "./node_modules/@aws-crypto/sha256-js/build/constants.js":
/*!***************************************************************!*\
  !*** ./node_modules/@aws-crypto/sha256-js/build/constants.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.MAX_HASHABLE_LENGTH = exports.INIT = exports.KEY = exports.DIGEST_LENGTH = exports.BLOCK_SIZE = void 0;\n/**\n * @internal\n */\nexports.BLOCK_SIZE = 64;\n/**\n * @internal\n */\nexports.DIGEST_LENGTH = 32;\n/**\n * @internal\n */\nexports.KEY = new Uint32Array([\n    0x428a2f98,\n    0x71374491,\n    0xb5c0fbcf,\n    0xe9b5dba5,\n    0x3956c25b,\n    0x59f111f1,\n    0x923f82a4,\n    0xab1c5ed5,\n    0xd807aa98,\n    0x12835b01,\n    0x243185be,\n    0x550c7dc3,\n    0x72be5d74,\n    0x80deb1fe,\n    0x9bdc06a7,\n    0xc19bf174,\n    0xe49b69c1,\n    0xefbe4786,\n    0x0fc19dc6,\n    0x240ca1cc,\n    0x2de92c6f,\n    0x4a7484aa,\n    0x5cb0a9dc,\n    0x76f988da,\n    0x983e5152,\n    0xa831c66d,\n    0xb00327c8,\n    0xbf597fc7,\n    0xc6e00bf3,\n    0xd5a79147,\n    0x06ca6351,\n    0x14292967,\n    0x27b70a85,\n    0x2e1b2138,\n    0x4d2c6dfc,\n    0x53380d13,\n    0x650a7354,\n    0x766a0abb,\n    0x81c2c92e,\n    0x92722c85,\n    0xa2bfe8a1,\n    0xa81a664b,\n    0xc24b8b70,\n    0xc76c51a3,\n    0xd192e819,\n    0xd6990624,\n    0xf40e3585,\n    0x106aa070,\n    0x19a4c116,\n    0x1e376c08,\n    0x2748774c,\n    0x34b0bcb5,\n    0x391c0cb3,\n    0x4ed8aa4a,\n    0x5b9cca4f,\n    0x682e6ff3,\n    0x748f82ee,\n    0x78a5636f,\n    0x84c87814,\n    0x8cc70208,\n    0x90befffa,\n    0xa4506ceb,\n    0xbef9a3f7,\n    0xc67178f2\n]);\n/**\n * @internal\n */\nexports.INIT = [\n    0x6a09e667,\n    0xbb67ae85,\n    0x3c6ef372,\n    0xa54ff53a,\n    0x510e527f,\n    0x9b05688c,\n    0x1f83d9ab,\n    0x5be0cd19\n];\n/**\n * @internal\n */\nexports.MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1;\n//# sourceMappingURL=constants.js.map\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-crypto/sha256-js/build/constants.js?");

/***/ }),

/***/ "./node_modules/@aws-crypto/sha256-js/build/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@aws-crypto/sha256-js/build/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/@aws-crypto/sha256-js/node_modules/tslib/tslib.es6.js\");\ntslib_1.__exportStar(__webpack_require__(/*! ./jsSha256 */ \"./node_modules/@aws-crypto/sha256-js/build/jsSha256.js\"), exports);\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-crypto/sha256-js/build/index.js?");

/***/ }),

/***/ "./node_modules/@aws-crypto/sha256-js/build/jsSha256.js":
/*!**************************************************************!*\
  !*** ./node_modules/@aws-crypto/sha256-js/build/jsSha256.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Sha256 = void 0;\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/@aws-crypto/sha256-js/node_modules/tslib/tslib.es6.js\");\nvar constants_1 = __webpack_require__(/*! ./constants */ \"./node_modules/@aws-crypto/sha256-js/build/constants.js\");\nvar RawSha256_1 = __webpack_require__(/*! ./RawSha256 */ \"./node_modules/@aws-crypto/sha256-js/build/RawSha256.js\");\nvar util_1 = __webpack_require__(/*! @aws-crypto/util */ \"./node_modules/@aws-crypto/util/build/index.js\");\nvar Sha256 = /** @class */ (function () {\n    function Sha256(secret) {\n        this.secret = secret;\n        this.hash = new RawSha256_1.RawSha256();\n        this.reset();\n    }\n    Sha256.prototype.update = function (toHash) {\n        if ((0, util_1.isEmptyData)(toHash) || this.error) {\n            return;\n        }\n        try {\n            this.hash.update((0, util_1.convertToBuffer)(toHash));\n        }\n        catch (e) {\n            this.error = e;\n        }\n    };\n    /* This synchronous method keeps compatibility\n     * with the v2 aws-sdk.\n     */\n    Sha256.prototype.digestSync = function () {\n        if (this.error) {\n            throw this.error;\n        }\n        if (this.outer) {\n            if (!this.outer.finished) {\n                this.outer.update(this.hash.digest());\n            }\n            return this.outer.digest();\n        }\n        return this.hash.digest();\n    };\n    /* The underlying digest method here is synchronous.\n     * To keep the same interface with the other hash functions\n     * the default is to expose this as an async method.\n     * However, it can sometimes be useful to have a sync method.\n     */\n    Sha256.prototype.digest = function () {\n        return tslib_1.__awaiter(this, void 0, void 0, function () {\n            return tslib_1.__generator(this, function (_a) {\n                return [2 /*return*/, this.digestSync()];\n            });\n        });\n    };\n    Sha256.prototype.reset = function () {\n        this.hash = new RawSha256_1.RawSha256();\n        if (this.secret) {\n            this.outer = new RawSha256_1.RawSha256();\n            var inner = bufferFromSecret(this.secret);\n            var outer = new Uint8Array(constants_1.BLOCK_SIZE);\n            outer.set(inner);\n            for (var i = 0; i < constants_1.BLOCK_SIZE; i++) {\n                inner[i] ^= 0x36;\n                outer[i] ^= 0x5c;\n            }\n            this.hash.update(inner);\n            this.outer.update(outer);\n            // overwrite the copied key in memory\n            for (var i = 0; i < inner.byteLength; i++) {\n                inner[i] = 0;\n            }\n        }\n    };\n    return Sha256;\n}());\nexports.Sha256 = Sha256;\nfunction bufferFromSecret(secret) {\n    var input = (0, util_1.convertToBuffer)(secret);\n    if (input.byteLength > constants_1.BLOCK_SIZE) {\n        var bufferHash = new RawSha256_1.RawSha256();\n        bufferHash.update(input);\n        input = bufferHash.digest();\n    }\n    var buffer = new Uint8Array(constants_1.BLOCK_SIZE);\n    buffer.set(input);\n    return buffer;\n}\n//# sourceMappingURL=jsSha256.js.map\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-crypto/sha256-js/build/jsSha256.js?");

/***/ }),

/***/ "./node_modules/@aws-crypto/sha256-js/node_modules/tslib/tslib.es6.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@aws-crypto/sha256-js/node_modules/tslib/tslib.es6.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __assign: () => (/* binding */ __assign),\n/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),\n/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),\n/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),\n/* harmony export */   __await: () => (/* binding */ __await),\n/* harmony export */   __awaiter: () => (/* binding */ __awaiter),\n/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),\n/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),\n/* harmony export */   __createBinding: () => (/* binding */ __createBinding),\n/* harmony export */   __decorate: () => (/* binding */ __decorate),\n/* harmony export */   __exportStar: () => (/* binding */ __exportStar),\n/* harmony export */   __extends: () => (/* binding */ __extends),\n/* harmony export */   __generator: () => (/* binding */ __generator),\n/* harmony export */   __importDefault: () => (/* binding */ __importDefault),\n/* harmony export */   __importStar: () => (/* binding */ __importStar),\n/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),\n/* harmony export */   __metadata: () => (/* binding */ __metadata),\n/* harmony export */   __param: () => (/* binding */ __param),\n/* harmony export */   __read: () => (/* binding */ __read),\n/* harmony export */   __rest: () => (/* binding */ __rest),\n/* harmony export */   __spread: () => (/* binding */ __spread),\n/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),\n/* harmony export */   __values: () => (/* binding */ __values)\n/* harmony export */ });\n/*! *****************************************************************************\r\nCopyright (c) Microsoft Corporation.\r\n\r\nPermission to use, copy, modify, and/or distribute this software for any\r\npurpose with or without fee is hereby granted.\r\n\r\nTHE SOFTWARE IS PROVIDED \"AS IS\" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH\r\nREGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY\r\nAND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,\r\nINDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM\r\nLOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR\r\nOTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR\r\nPERFORMANCE OF THIS SOFTWARE.\r\n***************************************************************************** */\r\n/* global Reflect, Promise */\r\n\r\nvar extendStatics = function(d, b) {\r\n    extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return extendStatics(d, b);\r\n};\r\n\r\nfunction __extends(d, b) {\r\n    extendStatics(d, b);\r\n    function __() { this.constructor = d; }\r\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n}\r\n\r\nvar __assign = function() {\r\n    __assign = Object.assign || function __assign(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\r\n        }\r\n        return t;\r\n    }\r\n    return __assign.apply(this, arguments);\r\n}\r\n\r\nfunction __rest(s, e) {\r\n    var t = {};\r\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\r\n        t[p] = s[p];\r\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\r\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\r\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\r\n                t[p[i]] = s[p[i]];\r\n        }\r\n    return t;\r\n}\r\n\r\nfunction __decorate(decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n}\r\n\r\nfunction __param(paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n}\r\n\r\nfunction __metadata(metadataKey, metadataValue) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(metadataKey, metadataValue);\r\n}\r\n\r\nfunction __awaiter(thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n}\r\n\r\nfunction __generator(thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n}\r\n\r\nfunction __createBinding(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}\r\n\r\nfunction __exportStar(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\n\r\nfunction __values(o) {\r\n    var s = typeof Symbol === \"function\" && Symbol.iterator, m = s && o[s], i = 0;\r\n    if (m) return m.call(o);\r\n    if (o && typeof o.length === \"number\") return {\r\n        next: function () {\r\n            if (o && i >= o.length) o = void 0;\r\n            return { value: o && o[i++], done: !o };\r\n        }\r\n    };\r\n    throw new TypeError(s ? \"Object is not iterable.\" : \"Symbol.iterator is not defined.\");\r\n}\r\n\r\nfunction __read(o, n) {\r\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator];\r\n    if (!m) return o;\r\n    var i = m.call(o), r, ar = [], e;\r\n    try {\r\n        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);\r\n    }\r\n    catch (error) { e = { error: error }; }\r\n    finally {\r\n        try {\r\n            if (r && !r.done && (m = i[\"return\"])) m.call(i);\r\n        }\r\n        finally { if (e) throw e.error; }\r\n    }\r\n    return ar;\r\n}\r\n\r\nfunction __spread() {\r\n    for (var ar = [], i = 0; i < arguments.length; i++)\r\n        ar = ar.concat(__read(arguments[i]));\r\n    return ar;\r\n}\r\n\r\nfunction __spreadArrays() {\r\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\r\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\r\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\r\n            r[k] = a[j];\r\n    return r;\r\n};\r\n\r\nfunction __await(v) {\r\n    return this instanceof __await ? (this.v = v, this) : new __await(v);\r\n}\r\n\r\nfunction __asyncGenerator(thisArg, _arguments, generator) {\r\n    if (!Symbol.asyncIterator) throw new TypeError(\"Symbol.asyncIterator is not defined.\");\r\n    var g = generator.apply(thisArg, _arguments || []), i, q = [];\r\n    return i = {}, verb(\"next\"), verb(\"throw\"), verb(\"return\"), i[Symbol.asyncIterator] = function () { return this; }, i;\r\n    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }\r\n    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }\r\n    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }\r\n    function fulfill(value) { resume(\"next\", value); }\r\n    function reject(value) { resume(\"throw\", value); }\r\n    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }\r\n}\r\n\r\nfunction __asyncDelegator(o) {\r\n    var i, p;\r\n    return i = {}, verb(\"next\"), verb(\"throw\", function (e) { throw e; }), verb(\"return\"), i[Symbol.iterator] = function () { return this; }, i;\r\n    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === \"return\" } : f ? f(v) : v; } : f; }\r\n}\r\n\r\nfunction __asyncValues(o) {\r\n    if (!Symbol.asyncIterator) throw new TypeError(\"Symbol.asyncIterator is not defined.\");\r\n    var m = o[Symbol.asyncIterator], i;\r\n    return m ? m.call(o) : (o = typeof __values === \"function\" ? __values(o) : o[Symbol.iterator](), i = {}, verb(\"next\"), verb(\"throw\"), verb(\"return\"), i[Symbol.asyncIterator] = function () { return this; }, i);\r\n    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }\r\n    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }\r\n}\r\n\r\nfunction __makeTemplateObject(cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\n\r\nfunction __importStar(mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result.default = mod;\r\n    return result;\r\n}\r\n\r\nfunction __importDefault(mod) {\r\n    return (mod && mod.__esModule) ? mod : { default: mod };\r\n}\r\n\r\nfunction __classPrivateFieldGet(receiver, privateMap) {\r\n    if (!privateMap.has(receiver)) {\r\n        throw new TypeError(\"attempted to get private field on non-instance\");\r\n    }\r\n    return privateMap.get(receiver);\r\n}\r\n\r\nfunction __classPrivateFieldSet(receiver, privateMap, value) {\r\n    if (!privateMap.has(receiver)) {\r\n        throw new TypeError(\"attempted to set private field on non-instance\");\r\n    }\r\n    privateMap.set(receiver, value);\r\n    return value;\r\n}\r\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-crypto/sha256-js/node_modules/tslib/tslib.es6.js?");

/***/ }),

/***/ "./node_modules/@aws-crypto/supports-web-crypto/build/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@aws-crypto/supports-web-crypto/build/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/@aws-crypto/supports-web-crypto/node_modules/tslib/tslib.es6.js\");\ntslib_1.__exportStar(__webpack_require__(/*! ./supportsWebCrypto */ \"./node_modules/@aws-crypto/supports-web-crypto/build/supportsWebCrypto.js\"), exports);\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOERBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4vc3VwcG9ydHNXZWJDcnlwdG9cIjtcbiJdfQ==\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-crypto/supports-web-crypto/build/index.js?");

/***/ }),

/***/ "./node_modules/@aws-crypto/supports-web-crypto/build/supportsWebCrypto.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@aws-crypto/supports-web-crypto/build/supportsWebCrypto.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.supportsZeroByteGCM = exports.supportsSubtleCrypto = exports.supportsSecureRandom = exports.supportsWebCrypto = void 0;\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/@aws-crypto/supports-web-crypto/node_modules/tslib/tslib.es6.js\");\nvar subtleCryptoMethods = [\n    \"decrypt\",\n    \"digest\",\n    \"encrypt\",\n    \"exportKey\",\n    \"generateKey\",\n    \"importKey\",\n    \"sign\",\n    \"verify\"\n];\nfunction supportsWebCrypto(window) {\n    if (supportsSecureRandom(window) &&\n        typeof window.crypto.subtle === \"object\") {\n        var subtle = window.crypto.subtle;\n        return supportsSubtleCrypto(subtle);\n    }\n    return false;\n}\nexports.supportsWebCrypto = supportsWebCrypto;\nfunction supportsSecureRandom(window) {\n    if (typeof window === \"object\" && typeof window.crypto === \"object\") {\n        var getRandomValues = window.crypto.getRandomValues;\n        return typeof getRandomValues === \"function\";\n    }\n    return false;\n}\nexports.supportsSecureRandom = supportsSecureRandom;\nfunction supportsSubtleCrypto(subtle) {\n    return (subtle &&\n        subtleCryptoMethods.every(function (methodName) { return typeof subtle[methodName] === \"function\"; }));\n}\nexports.supportsSubtleCrypto = supportsSubtleCrypto;\nfunction supportsZeroByteGCM(subtle) {\n    return tslib_1.__awaiter(this, void 0, void 0, function () {\n        var key, zeroByteAuthTag, _a;\n        return tslib_1.__generator(this, function (_b) {\n            switch (_b.label) {\n                case 0:\n                    if (!supportsSubtleCrypto(subtle))\n                        return [2 /*return*/, false];\n                    _b.label = 1;\n                case 1:\n                    _b.trys.push([1, 4, , 5]);\n                    return [4 /*yield*/, subtle.generateKey({ name: \"AES-GCM\", length: 128 }, false, [\"encrypt\"])];\n                case 2:\n                    key = _b.sent();\n                    return [4 /*yield*/, subtle.encrypt({\n                            name: \"AES-GCM\",\n                            iv: new Uint8Array(Array(12)),\n                            additionalData: new Uint8Array(Array(16)),\n                            tagLength: 128\n                        }, key, new Uint8Array(0))];\n                case 3:\n                    zeroByteAuthTag = _b.sent();\n                    return [2 /*return*/, zeroByteAuthTag.byteLength === 16];\n                case 4:\n                    _a = _b.sent();\n                    return [2 /*return*/, false];\n                case 5: return [2 /*return*/];\n            }\n        });\n    });\n}\nexports.supportsZeroByteGCM = supportsZeroByteGCM;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VwcG9ydHNXZWJDcnlwdG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvc3VwcG9ydHNXZWJDcnlwdG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQVVBLElBQU0sbUJBQW1CLEdBQThCO0lBQ3JELFNBQVM7SUFDVCxRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCxhQUFhO0lBQ2IsV0FBVztJQUNYLE1BQU07SUFDTixRQUFRO0NBQ1QsQ0FBQztBQUVGLFNBQWdCLGlCQUFpQixDQUFDLE1BQWM7SUFDOUMsSUFDRSxvQkFBb0IsQ0FBQyxNQUFNLENBQUM7UUFDNUIsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxRQUFRLEVBQ3hDO1FBQ1EsSUFBQSxNQUFNLEdBQUssTUFBTSxDQUFDLE1BQU0sT0FBbEIsQ0FBbUI7UUFFakMsT0FBTyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNyQztJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQVhELDhDQVdDO0FBRUQsU0FBZ0Isb0JBQW9CLENBQUMsTUFBYztJQUNqRCxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxPQUFPLE1BQU0sQ0FBQyxNQUFNLEtBQUssUUFBUSxFQUFFO1FBQzNELElBQUEsZUFBZSxHQUFLLE1BQU0sQ0FBQyxNQUFNLGdCQUFsQixDQUFtQjtRQUUxQyxPQUFPLE9BQU8sZUFBZSxLQUFLLFVBQVUsQ0FBQztLQUM5QztJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQVJELG9EQVFDO0FBRUQsU0FBZ0Isb0JBQW9CLENBQUMsTUFBb0I7SUFDdkQsT0FBTyxDQUNMLE1BQU07UUFDTixtQkFBbUIsQ0FBQyxLQUFLLENBQ3ZCLFVBQUEsVUFBVSxJQUFJLE9BQUEsT0FBTyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssVUFBVSxFQUF4QyxDQUF3QyxDQUN2RCxDQUNGLENBQUM7QUFDSixDQUFDO0FBUEQsb0RBT0M7QUFFRCxTQUFzQixtQkFBbUIsQ0FBQyxNQUFvQjs7Ozs7O29CQUM1RCxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDO3dCQUFFLHNCQUFPLEtBQUssRUFBQzs7OztvQkFFbEMscUJBQU0sTUFBTSxDQUFDLFdBQVcsQ0FDbEMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFDaEMsS0FBSyxFQUNMLENBQUMsU0FBUyxDQUFDLENBQ1osRUFBQTs7b0JBSkssR0FBRyxHQUFHLFNBSVg7b0JBQ3VCLHFCQUFNLE1BQU0sQ0FBQyxPQUFPLENBQzFDOzRCQUNFLElBQUksRUFBRSxTQUFTOzRCQUNmLEVBQUUsRUFBRSxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7NEJBQzdCLGNBQWMsRUFBRSxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7NEJBQ3pDLFNBQVMsRUFBRSxHQUFHO3lCQUNmLEVBQ0QsR0FBRyxFQUNILElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUNsQixFQUFBOztvQkFUSyxlQUFlLEdBQUcsU0FTdkI7b0JBQ0Qsc0JBQU8sZUFBZSxDQUFDLFVBQVUsS0FBSyxFQUFFLEVBQUM7OztvQkFFekMsc0JBQU8sS0FBSyxFQUFDOzs7OztDQUVoQjtBQXRCRCxrREFzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJ0eXBlIFN1YnRsZUNyeXB0b01ldGhvZCA9XG4gIHwgXCJkZWNyeXB0XCJcbiAgfCBcImRpZ2VzdFwiXG4gIHwgXCJlbmNyeXB0XCJcbiAgfCBcImV4cG9ydEtleVwiXG4gIHwgXCJnZW5lcmF0ZUtleVwiXG4gIHwgXCJpbXBvcnRLZXlcIlxuICB8IFwic2lnblwiXG4gIHwgXCJ2ZXJpZnlcIjtcblxuY29uc3Qgc3VidGxlQ3J5cHRvTWV0aG9kczogQXJyYXk8U3VidGxlQ3J5cHRvTWV0aG9kPiA9IFtcbiAgXCJkZWNyeXB0XCIsXG4gIFwiZGlnZXN0XCIsXG4gIFwiZW5jcnlwdFwiLFxuICBcImV4cG9ydEtleVwiLFxuICBcImdlbmVyYXRlS2V5XCIsXG4gIFwiaW1wb3J0S2V5XCIsXG4gIFwic2lnblwiLFxuICBcInZlcmlmeVwiXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9ydHNXZWJDcnlwdG8od2luZG93OiBXaW5kb3cpOiBib29sZWFuIHtcbiAgaWYgKFxuICAgIHN1cHBvcnRzU2VjdXJlUmFuZG9tKHdpbmRvdykgJiZcbiAgICB0eXBlb2Ygd2luZG93LmNyeXB0by5zdWJ0bGUgPT09IFwib2JqZWN0XCJcbiAgKSB7XG4gICAgY29uc3QgeyBzdWJ0bGUgfSA9IHdpbmRvdy5jcnlwdG87XG5cbiAgICByZXR1cm4gc3VwcG9ydHNTdWJ0bGVDcnlwdG8oc3VidGxlKTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvcnRzU2VjdXJlUmFuZG9tKHdpbmRvdzogV2luZG93KTogYm9vbGVhbiB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB3aW5kb3cuY3J5cHRvID09PSBcIm9iamVjdFwiKSB7XG4gICAgY29uc3QgeyBnZXRSYW5kb21WYWx1ZXMgfSA9IHdpbmRvdy5jcnlwdG87XG5cbiAgICByZXR1cm4gdHlwZW9mIGdldFJhbmRvbVZhbHVlcyA9PT0gXCJmdW5jdGlvblwiO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9ydHNTdWJ0bGVDcnlwdG8oc3VidGxlOiBTdWJ0bGVDcnlwdG8pIHtcbiAgcmV0dXJuIChcbiAgICBzdWJ0bGUgJiZcbiAgICBzdWJ0bGVDcnlwdG9NZXRob2RzLmV2ZXJ5KFxuICAgICAgbWV0aG9kTmFtZSA9PiB0eXBlb2Ygc3VidGxlW21ldGhvZE5hbWVdID09PSBcImZ1bmN0aW9uXCJcbiAgICApXG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdXBwb3J0c1plcm9CeXRlR0NNKHN1YnRsZTogU3VidGxlQ3J5cHRvKSB7XG4gIGlmICghc3VwcG9ydHNTdWJ0bGVDcnlwdG8oc3VidGxlKSkgcmV0dXJuIGZhbHNlO1xuICB0cnkge1xuICAgIGNvbnN0IGtleSA9IGF3YWl0IHN1YnRsZS5nZW5lcmF0ZUtleShcbiAgICAgIHsgbmFtZTogXCJBRVMtR0NNXCIsIGxlbmd0aDogMTI4IH0sXG4gICAgICBmYWxzZSxcbiAgICAgIFtcImVuY3J5cHRcIl1cbiAgICApO1xuICAgIGNvbnN0IHplcm9CeXRlQXV0aFRhZyA9IGF3YWl0IHN1YnRsZS5lbmNyeXB0KFxuICAgICAge1xuICAgICAgICBuYW1lOiBcIkFFUy1HQ01cIixcbiAgICAgICAgaXY6IG5ldyBVaW50OEFycmF5KEFycmF5KDEyKSksXG4gICAgICAgIGFkZGl0aW9uYWxEYXRhOiBuZXcgVWludDhBcnJheShBcnJheSgxNikpLFxuICAgICAgICB0YWdMZW5ndGg6IDEyOFxuICAgICAgfSxcbiAgICAgIGtleSxcbiAgICAgIG5ldyBVaW50OEFycmF5KDApXG4gICAgKTtcbiAgICByZXR1cm4gemVyb0J5dGVBdXRoVGFnLmJ5dGVMZW5ndGggPT09IDE2O1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-crypto/supports-web-crypto/build/supportsWebCrypto.js?");

/***/ }),

/***/ "./node_modules/@aws-crypto/supports-web-crypto/node_modules/tslib/tslib.es6.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@aws-crypto/supports-web-crypto/node_modules/tslib/tslib.es6.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __assign: () => (/* binding */ __assign),\n/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),\n/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),\n/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),\n/* harmony export */   __await: () => (/* binding */ __await),\n/* harmony export */   __awaiter: () => (/* binding */ __awaiter),\n/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),\n/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),\n/* harmony export */   __createBinding: () => (/* binding */ __createBinding),\n/* harmony export */   __decorate: () => (/* binding */ __decorate),\n/* harmony export */   __exportStar: () => (/* binding */ __exportStar),\n/* harmony export */   __extends: () => (/* binding */ __extends),\n/* harmony export */   __generator: () => (/* binding */ __generator),\n/* harmony export */   __importDefault: () => (/* binding */ __importDefault),\n/* harmony export */   __importStar: () => (/* binding */ __importStar),\n/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),\n/* harmony export */   __metadata: () => (/* binding */ __metadata),\n/* harmony export */   __param: () => (/* binding */ __param),\n/* harmony export */   __read: () => (/* binding */ __read),\n/* harmony export */   __rest: () => (/* binding */ __rest),\n/* harmony export */   __spread: () => (/* binding */ __spread),\n/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),\n/* harmony export */   __values: () => (/* binding */ __values)\n/* harmony export */ });\n/*! *****************************************************************************\r\nCopyright (c) Microsoft Corporation.\r\n\r\nPermission to use, copy, modify, and/or distribute this software for any\r\npurpose with or without fee is hereby granted.\r\n\r\nTHE SOFTWARE IS PROVIDED \"AS IS\" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH\r\nREGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY\r\nAND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,\r\nINDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM\r\nLOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR\r\nOTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR\r\nPERFORMANCE OF THIS SOFTWARE.\r\n***************************************************************************** */\r\n/* global Reflect, Promise */\r\n\r\nvar extendStatics = function(d, b) {\r\n    extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return extendStatics(d, b);\r\n};\r\n\r\nfunction __extends(d, b) {\r\n    extendStatics(d, b);\r\n    function __() { this.constructor = d; }\r\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n}\r\n\r\nvar __assign = function() {\r\n    __assign = Object.assign || function __assign(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\r\n        }\r\n        return t;\r\n    }\r\n    return __assign.apply(this, arguments);\r\n}\r\n\r\nfunction __rest(s, e) {\r\n    var t = {};\r\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\r\n        t[p] = s[p];\r\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\r\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\r\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\r\n                t[p[i]] = s[p[i]];\r\n        }\r\n    return t;\r\n}\r\n\r\nfunction __decorate(decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n}\r\n\r\nfunction __param(paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n}\r\n\r\nfunction __metadata(metadataKey, metadataValue) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(metadataKey, metadataValue);\r\n}\r\n\r\nfunction __awaiter(thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n}\r\n\r\nfunction __generator(thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n}\r\n\r\nfunction __createBinding(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}\r\n\r\nfunction __exportStar(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\n\r\nfunction __values(o) {\r\n    var s = typeof Symbol === \"function\" && Symbol.iterator, m = s && o[s], i = 0;\r\n    if (m) return m.call(o);\r\n    if (o && typeof o.length === \"number\") return {\r\n        next: function () {\r\n            if (o && i >= o.length) o = void 0;\r\n            return { value: o && o[i++], done: !o };\r\n        }\r\n    };\r\n    throw new TypeError(s ? \"Object is not iterable.\" : \"Symbol.iterator is not defined.\");\r\n}\r\n\r\nfunction __read(o, n) {\r\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator];\r\n    if (!m) return o;\r\n    var i = m.call(o), r, ar = [], e;\r\n    try {\r\n        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);\r\n    }\r\n    catch (error) { e = { error: error }; }\r\n    finally {\r\n        try {\r\n            if (r && !r.done && (m = i[\"return\"])) m.call(i);\r\n        }\r\n        finally { if (e) throw e.error; }\r\n    }\r\n    return ar;\r\n}\r\n\r\nfunction __spread() {\r\n    for (var ar = [], i = 0; i < arguments.length; i++)\r\n        ar = ar.concat(__read(arguments[i]));\r\n    return ar;\r\n}\r\n\r\nfunction __spreadArrays() {\r\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\r\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\r\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\r\n            r[k] = a[j];\r\n    return r;\r\n};\r\n\r\nfunction __await(v) {\r\n    return this instanceof __await ? (this.v = v, this) : new __await(v);\r\n}\r\n\r\nfunction __asyncGenerator(thisArg, _arguments, generator) {\r\n    if (!Symbol.asyncIterator) throw new TypeError(\"Symbol.asyncIterator is not defined.\");\r\n    var g = generator.apply(thisArg, _arguments || []), i, q = [];\r\n    return i = {}, verb(\"next\"), verb(\"throw\"), verb(\"return\"), i[Symbol.asyncIterator] = function () { return this; }, i;\r\n    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }\r\n    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }\r\n    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }\r\n    function fulfill(value) { resume(\"next\", value); }\r\n    function reject(value) { resume(\"throw\", value); }\r\n    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }\r\n}\r\n\r\nfunction __asyncDelegator(o) {\r\n    var i, p;\r\n    return i = {}, verb(\"next\"), verb(\"throw\", function (e) { throw e; }), verb(\"return\"), i[Symbol.iterator] = function () { return this; }, i;\r\n    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === \"return\" } : f ? f(v) : v; } : f; }\r\n}\r\n\r\nfunction __asyncValues(o) {\r\n    if (!Symbol.asyncIterator) throw new TypeError(\"Symbol.asyncIterator is not defined.\");\r\n    var m = o[Symbol.asyncIterator], i;\r\n    return m ? m.call(o) : (o = typeof __values === \"function\" ? __values(o) : o[Symbol.iterator](), i = {}, verb(\"next\"), verb(\"throw\"), verb(\"return\"), i[Symbol.asyncIterator] = function () { return this; }, i);\r\n    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }\r\n    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }\r\n}\r\n\r\nfunction __makeTemplateObject(cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\n\r\nfunction __importStar(mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result.default = mod;\r\n    return result;\r\n}\r\n\r\nfunction __importDefault(mod) {\r\n    return (mod && mod.__esModule) ? mod : { default: mod };\r\n}\r\n\r\nfunction __classPrivateFieldGet(receiver, privateMap) {\r\n    if (!privateMap.has(receiver)) {\r\n        throw new TypeError(\"attempted to get private field on non-instance\");\r\n    }\r\n    return privateMap.get(receiver);\r\n}\r\n\r\nfunction __classPrivateFieldSet(receiver, privateMap, value) {\r\n    if (!privateMap.has(receiver)) {\r\n        throw new TypeError(\"attempted to set private field on non-instance\");\r\n    }\r\n    privateMap.set(receiver, value);\r\n    return value;\r\n}\r\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-crypto/supports-web-crypto/node_modules/tslib/tslib.es6.js?");

/***/ }),

/***/ "./node_modules/@aws-crypto/util/build/convertToBuffer.js":
/*!****************************************************************!*\
  !*** ./node_modules/@aws-crypto/util/build/convertToBuffer.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.\n// SPDX-License-Identifier: Apache-2.0\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.convertToBuffer = void 0;\nvar util_utf8_browser_1 = __webpack_require__(/*! @aws-sdk/util-utf8-browser */ \"./node_modules/@aws-sdk/util-utf8-browser/dist-es/index.js\");\n// Quick polyfill\nvar fromUtf8 = typeof Buffer !== \"undefined\" && Buffer.from\n    ? function (input) { return Buffer.from(input, \"utf8\"); }\n    : util_utf8_browser_1.fromUtf8;\nfunction convertToBuffer(data) {\n    // Already a Uint8, do nothing\n    if (data instanceof Uint8Array)\n        return data;\n    if (typeof data === \"string\") {\n        return fromUtf8(data);\n    }\n    if (ArrayBuffer.isView(data)) {\n        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);\n    }\n    return new Uint8Array(data);\n}\nexports.convertToBuffer = convertToBuffer;\n//# sourceMappingURL=convertToBuffer.js.map\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-crypto/util/build/convertToBuffer.js?");

/***/ }),

/***/ "./node_modules/@aws-crypto/util/build/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@aws-crypto/util/build/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.\n// SPDX-License-Identifier: Apache-2.0\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.uint32ArrayFrom = exports.numToUint8 = exports.isEmptyData = exports.convertToBuffer = void 0;\nvar convertToBuffer_1 = __webpack_require__(/*! ./convertToBuffer */ \"./node_modules/@aws-crypto/util/build/convertToBuffer.js\");\nObject.defineProperty(exports, \"convertToBuffer\", ({ enumerable: true, get: function () { return convertToBuffer_1.convertToBuffer; } }));\nvar isEmptyData_1 = __webpack_require__(/*! ./isEmptyData */ \"./node_modules/@aws-crypto/util/build/isEmptyData.js\");\nObject.defineProperty(exports, \"isEmptyData\", ({ enumerable: true, get: function () { return isEmptyData_1.isEmptyData; } }));\nvar numToUint8_1 = __webpack_require__(/*! ./numToUint8 */ \"./node_modules/@aws-crypto/util/build/numToUint8.js\");\nObject.defineProperty(exports, \"numToUint8\", ({ enumerable: true, get: function () { return numToUint8_1.numToUint8; } }));\nvar uint32ArrayFrom_1 = __webpack_require__(/*! ./uint32ArrayFrom */ \"./node_modules/@aws-crypto/util/build/uint32ArrayFrom.js\");\nObject.defineProperty(exports, \"uint32ArrayFrom\", ({ enumerable: true, get: function () { return uint32ArrayFrom_1.uint32ArrayFrom; } }));\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-crypto/util/build/index.js?");

/***/ }),

/***/ "./node_modules/@aws-crypto/util/build/isEmptyData.js":
/*!************************************************************!*\
  !*** ./node_modules/@aws-crypto/util/build/isEmptyData.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.\n// SPDX-License-Identifier: Apache-2.0\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.isEmptyData = void 0;\nfunction isEmptyData(data) {\n    if (typeof data === \"string\") {\n        return data.length === 0;\n    }\n    return data.byteLength === 0;\n}\nexports.isEmptyData = isEmptyData;\n//# sourceMappingURL=isEmptyData.js.map\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-crypto/util/build/isEmptyData.js?");

/***/ }),

/***/ "./node_modules/@aws-crypto/util/build/numToUint8.js":
/*!***********************************************************!*\
  !*** ./node_modules/@aws-crypto/util/build/numToUint8.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.\n// SPDX-License-Identifier: Apache-2.0\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.numToUint8 = void 0;\nfunction numToUint8(num) {\n    return new Uint8Array([\n        (num & 0xff000000) >> 24,\n        (num & 0x00ff0000) >> 16,\n        (num & 0x0000ff00) >> 8,\n        num & 0x000000ff,\n    ]);\n}\nexports.numToUint8 = numToUint8;\n//# sourceMappingURL=numToUint8.js.map\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-crypto/util/build/numToUint8.js?");

/***/ }),

/***/ "./node_modules/@aws-crypto/util/build/uint32ArrayFrom.js":
/*!****************************************************************!*\
  !*** ./node_modules/@aws-crypto/util/build/uint32ArrayFrom.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.\n// SPDX-License-Identifier: Apache-2.0\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.uint32ArrayFrom = void 0;\n// IE 11 does not support Array.from, so we do it manually\nfunction uint32ArrayFrom(a_lookUpTable) {\n    if (!Uint32Array.from) {\n        var return_array = new Uint32Array(a_lookUpTable.length);\n        var a_index = 0;\n        while (a_index < a_lookUpTable.length) {\n            return_array[a_index] = a_lookUpTable[a_index];\n            a_index += 1;\n        }\n        return return_array;\n    }\n    return Uint32Array.from(a_lookUpTable);\n}\nexports.uint32ArrayFrom = uint32ArrayFrom;\n//# sourceMappingURL=uint32ArrayFrom.js.map\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-crypto/util/build/uint32ArrayFrom.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/BedrockRuntimeClient.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/BedrockRuntimeClient.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BedrockRuntimeClient: () => (/* binding */ BedrockRuntimeClient),\n/* harmony export */   __Client: () => (/* reexport safe */ _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_10__.Client)\n/* harmony export */ });\n/* harmony import */ var _aws_sdk_middleware_host_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/middleware-host-header */ \"./node_modules/@aws-sdk/middleware-host-header/dist-es/index.js\");\n/* harmony import */ var _aws_sdk_middleware_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/middleware-logger */ \"./node_modules/@aws-sdk/middleware-logger/dist-es/index.js\");\n/* harmony import */ var _aws_sdk_middleware_recursion_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/middleware-recursion-detection */ \"./node_modules/@aws-sdk/middleware-recursion-detection/dist-es/index.js\");\n/* harmony import */ var _aws_sdk_middleware_user_agent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-sdk/middleware-user-agent */ \"./node_modules/@aws-sdk/middleware-user-agent/dist-es/index.js\");\n/* harmony import */ var _smithy_config_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @smithy/config-resolver */ \"./node_modules/@smithy/config-resolver/dist-es/index.js\");\n/* harmony import */ var _smithy_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @smithy/core */ \"./node_modules/@smithy/core/dist-es/index.js\");\n/* harmony import */ var _smithy_eventstream_serde_config_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @smithy/eventstream-serde-config-resolver */ \"./node_modules/@smithy/eventstream-serde-config-resolver/dist-es/index.js\");\n/* harmony import */ var _smithy_middleware_content_length__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @smithy/middleware-content-length */ \"./node_modules/@smithy/middleware-content-length/dist-es/index.js\");\n/* harmony import */ var _smithy_middleware_endpoint__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @smithy/middleware-endpoint */ \"./node_modules/@smithy/middleware-endpoint/dist-es/index.js\");\n/* harmony import */ var _smithy_middleware_retry__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @smithy/middleware-retry */ \"./node_modules/@smithy/middleware-retry/dist-es/index.js\");\n/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @smithy/smithy-client */ \"./node_modules/@smithy/smithy-client/dist-es/index.js\");\n/* harmony import */ var _auth_httpAuthSchemeProvider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/httpAuthSchemeProvider */ \"./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/auth/httpAuthSchemeProvider.js\");\n/* harmony import */ var _endpoint_EndpointParameters__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./endpoint/EndpointParameters */ \"./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/endpoint/EndpointParameters.js\");\n/* harmony import */ var _runtimeConfig__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./runtimeConfig */ \"./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/runtimeConfig.browser.js\");\n/* harmony import */ var _runtimeExtensions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./runtimeExtensions */ \"./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/runtimeExtensions.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass BedrockRuntimeClient extends _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_10__.Client {\n    constructor(...[configuration]) {\n        const _config_0 = (0,_runtimeConfig__WEBPACK_IMPORTED_MODULE_11__.getRuntimeConfig)(configuration || {});\n        const _config_1 = (0,_endpoint_EndpointParameters__WEBPACK_IMPORTED_MODULE_12__.resolveClientEndpointParameters)(_config_0);\n        const _config_2 = (0,_smithy_config_resolver__WEBPACK_IMPORTED_MODULE_4__.resolveRegionConfig)(_config_1);\n        const _config_3 = (0,_smithy_middleware_endpoint__WEBPACK_IMPORTED_MODULE_8__.resolveEndpointConfig)(_config_2);\n        const _config_4 = (0,_smithy_middleware_retry__WEBPACK_IMPORTED_MODULE_9__.resolveRetryConfig)(_config_3);\n        const _config_5 = (0,_aws_sdk_middleware_host_header__WEBPACK_IMPORTED_MODULE_0__.resolveHostHeaderConfig)(_config_4);\n        const _config_6 = (0,_aws_sdk_middleware_user_agent__WEBPACK_IMPORTED_MODULE_3__.resolveUserAgentConfig)(_config_5);\n        const _config_7 = (0,_smithy_eventstream_serde_config_resolver__WEBPACK_IMPORTED_MODULE_6__.resolveEventStreamSerdeConfig)(_config_6);\n        const _config_8 = (0,_auth_httpAuthSchemeProvider__WEBPACK_IMPORTED_MODULE_13__.resolveHttpAuthSchemeConfig)(_config_7);\n        const _config_9 = (0,_runtimeExtensions__WEBPACK_IMPORTED_MODULE_14__.resolveRuntimeExtensions)(_config_8, configuration?.extensions || []);\n        super(_config_9);\n        this.config = _config_9;\n        this.middlewareStack.use((0,_smithy_middleware_retry__WEBPACK_IMPORTED_MODULE_9__.getRetryPlugin)(this.config));\n        this.middlewareStack.use((0,_smithy_middleware_content_length__WEBPACK_IMPORTED_MODULE_7__.getContentLengthPlugin)(this.config));\n        this.middlewareStack.use((0,_aws_sdk_middleware_host_header__WEBPACK_IMPORTED_MODULE_0__.getHostHeaderPlugin)(this.config));\n        this.middlewareStack.use((0,_aws_sdk_middleware_logger__WEBPACK_IMPORTED_MODULE_1__.getLoggerPlugin)(this.config));\n        this.middlewareStack.use((0,_aws_sdk_middleware_recursion_detection__WEBPACK_IMPORTED_MODULE_2__.getRecursionDetectionPlugin)(this.config));\n        this.middlewareStack.use((0,_aws_sdk_middleware_user_agent__WEBPACK_IMPORTED_MODULE_3__.getUserAgentPlugin)(this.config));\n        this.middlewareStack.use((0,_smithy_core__WEBPACK_IMPORTED_MODULE_5__.getHttpAuthSchemeEndpointRuleSetPlugin)(this.config, {\n            httpAuthSchemeParametersProvider: this.getDefaultHttpAuthSchemeParametersProvider(),\n            identityProviderConfigProvider: this.getIdentityProviderConfigProvider(),\n        }));\n        this.middlewareStack.use((0,_smithy_core__WEBPACK_IMPORTED_MODULE_5__.getHttpSigningPlugin)(this.config));\n    }\n    destroy() {\n        super.destroy();\n    }\n    getDefaultHttpAuthSchemeParametersProvider() {\n        return _auth_httpAuthSchemeProvider__WEBPACK_IMPORTED_MODULE_13__.defaultBedrockRuntimeHttpAuthSchemeParametersProvider;\n    }\n    getIdentityProviderConfigProvider() {\n        return async (config) => new _smithy_core__WEBPACK_IMPORTED_MODULE_5__.DefaultIdentityProviderConfig({\n            \"aws.auth#sigv4\": config.credentials,\n        });\n    }\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/BedrockRuntimeClient.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/auth/httpAuthExtensionConfiguration.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/auth/httpAuthExtensionConfiguration.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getHttpAuthExtensionConfiguration: () => (/* binding */ getHttpAuthExtensionConfiguration),\n/* harmony export */   resolveHttpAuthRuntimeConfig: () => (/* binding */ resolveHttpAuthRuntimeConfig)\n/* harmony export */ });\nconst getHttpAuthExtensionConfiguration = (runtimeConfig) => {\n    const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;\n    let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;\n    let _credentials = runtimeConfig.credentials;\n    return {\n        setHttpAuthScheme(httpAuthScheme) {\n            const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);\n            if (index === -1) {\n                _httpAuthSchemes.push(httpAuthScheme);\n            }\n            else {\n                _httpAuthSchemes.splice(index, 1, httpAuthScheme);\n            }\n        },\n        httpAuthSchemes() {\n            return _httpAuthSchemes;\n        },\n        setHttpAuthSchemeProvider(httpAuthSchemeProvider) {\n            _httpAuthSchemeProvider = httpAuthSchemeProvider;\n        },\n        httpAuthSchemeProvider() {\n            return _httpAuthSchemeProvider;\n        },\n        setCredentials(credentials) {\n            _credentials = credentials;\n        },\n        credentials() {\n            return _credentials;\n        },\n    };\n};\nconst resolveHttpAuthRuntimeConfig = (config) => {\n    return {\n        httpAuthSchemes: config.httpAuthSchemes(),\n        httpAuthSchemeProvider: config.httpAuthSchemeProvider(),\n        credentials: config.credentials(),\n    };\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/auth/httpAuthExtensionConfiguration.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/auth/httpAuthSchemeProvider.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/auth/httpAuthSchemeProvider.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   defaultBedrockRuntimeHttpAuthSchemeParametersProvider: () => (/* binding */ defaultBedrockRuntimeHttpAuthSchemeParametersProvider),\n/* harmony export */   defaultBedrockRuntimeHttpAuthSchemeProvider: () => (/* binding */ defaultBedrockRuntimeHttpAuthSchemeProvider),\n/* harmony export */   resolveHttpAuthSchemeConfig: () => (/* binding */ resolveHttpAuthSchemeConfig)\n/* harmony export */ });\n/* harmony import */ var _aws_sdk_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/core */ \"./node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js\");\n/* harmony import */ var _smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-middleware */ \"./node_modules/@smithy/util-middleware/dist-es/index.js\");\n\n\nconst defaultBedrockRuntimeHttpAuthSchemeParametersProvider = async (config, context, input) => {\n    return {\n        operation: (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__.getSmithyContext)(context).operation,\n        region: (await (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(config.region)()) ||\n            (() => {\n                throw new Error(\"expected `region` to be configured for `aws.auth#sigv4`\");\n            })(),\n    };\n};\nfunction createAwsAuthSigv4HttpAuthOption(authParameters) {\n    return {\n        schemeId: \"aws.auth#sigv4\",\n        signingProperties: {\n            name: \"bedrock\",\n            region: authParameters.region,\n        },\n        propertiesExtractor: (config, context) => ({\n            signingProperties: {\n                config,\n                context,\n            },\n        }),\n    };\n}\nconst defaultBedrockRuntimeHttpAuthSchemeProvider = (authParameters) => {\n    const options = [];\n    switch (authParameters.operation) {\n        default: {\n            options.push(createAwsAuthSigv4HttpAuthOption(authParameters));\n        }\n    }\n    return options;\n};\nconst resolveHttpAuthSchemeConfig = (config) => {\n    const config_0 = (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_1__.resolveAwsSdkSigV4Config)(config);\n    return {\n        ...config_0,\n    };\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/auth/httpAuthSchemeProvider.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/commands/InvokeModelCommand.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/commands/InvokeModelCommand.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   $Command: () => (/* reexport safe */ _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.Command),\n/* harmony export */   InvokeModelCommand: () => (/* binding */ InvokeModelCommand)\n/* harmony export */ });\n/* harmony import */ var _smithy_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/middleware-endpoint */ \"./node_modules/@smithy/middleware-endpoint/dist-es/index.js\");\n/* harmony import */ var _smithy_middleware_serde__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/middleware-serde */ \"./node_modules/@smithy/middleware-serde/dist-es/index.js\");\n/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smithy/smithy-client */ \"./node_modules/@smithy/smithy-client/dist-es/index.js\");\n/* harmony import */ var _endpoint_EndpointParameters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../endpoint/EndpointParameters */ \"./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/endpoint/EndpointParameters.js\");\n/* harmony import */ var _models_models_0__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/models_0 */ \"./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/models/models_0.js\");\n/* harmony import */ var _protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../protocols/Aws_restJson1 */ \"./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/protocols/Aws_restJson1.js\");\n\n\n\n\n\n\n\nclass InvokeModelCommand extends _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.Command\n    .classBuilder()\n    .ep({\n    ..._endpoint_EndpointParameters__WEBPACK_IMPORTED_MODULE_3__.commonParams,\n})\n    .m(function (Command, cs, config, o) {\n    return [\n        (0,_smithy_middleware_serde__WEBPACK_IMPORTED_MODULE_1__.getSerdePlugin)(config, this.serialize, this.deserialize),\n        (0,_smithy_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__.getEndpointPlugin)(config, Command.getEndpointParameterInstructions()),\n    ];\n})\n    .s(\"AmazonBedrockFrontendService\", \"InvokeModel\", {})\n    .n(\"BedrockRuntimeClient\", \"InvokeModelCommand\")\n    .f(_models_models_0__WEBPACK_IMPORTED_MODULE_4__.InvokeModelRequestFilterSensitiveLog, _models_models_0__WEBPACK_IMPORTED_MODULE_4__.InvokeModelResponseFilterSensitiveLog)\n    .ser(_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_5__.se_InvokeModelCommand)\n    .de(_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_5__.de_InvokeModelCommand)\n    .build() {\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/commands/InvokeModelCommand.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/endpoint/EndpointParameters.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/endpoint/EndpointParameters.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   commonParams: () => (/* binding */ commonParams),\n/* harmony export */   resolveClientEndpointParameters: () => (/* binding */ resolveClientEndpointParameters)\n/* harmony export */ });\nconst resolveClientEndpointParameters = (options) => {\n    return {\n        ...options,\n        useDualstackEndpoint: options.useDualstackEndpoint ?? false,\n        useFipsEndpoint: options.useFipsEndpoint ?? false,\n        defaultSigningName: \"bedrock\",\n    };\n};\nconst commonParams = {\n    UseFIPS: { type: \"builtInParams\", name: \"useFipsEndpoint\" },\n    Endpoint: { type: \"builtInParams\", name: \"endpoint\" },\n    Region: { type: \"builtInParams\", name: \"region\" },\n    UseDualStack: { type: \"builtInParams\", name: \"useDualstackEndpoint\" },\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/endpoint/EndpointParameters.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/endpoint/endpointResolver.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/endpoint/endpointResolver.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   defaultEndpointResolver: () => (/* binding */ defaultEndpointResolver)\n/* harmony export */ });\n/* harmony import */ var _aws_sdk_util_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/util-endpoints */ \"./node_modules/@aws-sdk/util-endpoints/dist-es/index.js\");\n/* harmony import */ var _smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/util-endpoints */ \"./node_modules/@smithy/util-endpoints/dist-es/index.js\");\n/* harmony import */ var _ruleset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ruleset */ \"./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/endpoint/ruleset.js\");\n\n\n\nconst defaultEndpointResolver = (endpointParams, context = {}) => {\n    return (0,_smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_1__.resolveEndpoint)(_ruleset__WEBPACK_IMPORTED_MODULE_2__.ruleSet, {\n        endpointParams: endpointParams,\n        logger: context.logger,\n    });\n};\n_smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_1__.customEndpointFunctions.aws = _aws_sdk_util_endpoints__WEBPACK_IMPORTED_MODULE_0__.awsEndpointFunctions;\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/endpoint/endpointResolver.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/endpoint/ruleset.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/endpoint/ruleset.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ruleSet: () => (/* binding */ ruleSet)\n/* harmony export */ });\nconst s = \"required\", t = \"fn\", u = \"argv\", v = \"ref\";\nconst a = true, b = \"isSet\", c = \"booleanEquals\", d = \"error\", e = \"endpoint\", f = \"tree\", g = \"PartitionResult\", h = { [s]: false, \"type\": \"String\" }, i = { [s]: true, \"default\": false, \"type\": \"Boolean\" }, j = { [v]: \"Endpoint\" }, k = { [t]: c, [u]: [{ [v]: \"UseFIPS\" }, true] }, l = { [t]: c, [u]: [{ [v]: \"UseDualStack\" }, true] }, m = {}, n = { [t]: \"getAttr\", [u]: [{ [v]: g }, \"supportsFIPS\"] }, o = { [t]: c, [u]: [true, { [t]: \"getAttr\", [u]: [{ [v]: g }, \"supportsDualStack\"] }] }, p = [k], q = [l], r = [{ [v]: \"Region\" }];\nconst _data = { version: \"1.0\", parameters: { Region: h, UseDualStack: i, UseFIPS: i, Endpoint: h }, rules: [{ conditions: [{ [t]: b, [u]: [j] }], rules: [{ conditions: p, error: \"Invalid Configuration: FIPS and custom endpoint are not supported\", type: d }, { rules: [{ conditions: q, error: \"Invalid Configuration: Dualstack and custom endpoint are not supported\", type: d }, { endpoint: { url: j, properties: m, headers: m }, type: e }], type: f }], type: f }, { rules: [{ conditions: [{ [t]: b, [u]: r }], rules: [{ conditions: [{ [t]: \"aws.partition\", [u]: r, assign: g }], rules: [{ conditions: [k, l], rules: [{ conditions: [{ [t]: c, [u]: [a, n] }, o], rules: [{ rules: [{ endpoint: { url: \"https://bedrock-runtime-fips.{Region}.{PartitionResult#dualStackDnsSuffix}\", properties: m, headers: m }, type: e }], type: f }], type: f }, { error: \"FIPS and DualStack are enabled, but this partition does not support one or both\", type: d }], type: f }, { conditions: p, rules: [{ conditions: [{ [t]: c, [u]: [n, a] }], rules: [{ rules: [{ endpoint: { url: \"https://bedrock-runtime-fips.{Region}.{PartitionResult#dnsSuffix}\", properties: m, headers: m }, type: e }], type: f }], type: f }, { error: \"FIPS is enabled but this partition does not support FIPS\", type: d }], type: f }, { conditions: q, rules: [{ conditions: [o], rules: [{ rules: [{ endpoint: { url: \"https://bedrock-runtime.{Region}.{PartitionResult#dualStackDnsSuffix}\", properties: m, headers: m }, type: e }], type: f }], type: f }, { error: \"DualStack is enabled but this partition does not support DualStack\", type: d }], type: f }, { rules: [{ endpoint: { url: \"https://bedrock-runtime.{Region}.{PartitionResult#dnsSuffix}\", properties: m, headers: m }, type: e }], type: f }], type: f }], type: f }, { error: \"Invalid Configuration: Missing Region\", type: d }], type: f }] };\nconst ruleSet = _data;\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/endpoint/ruleset.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/models/BedrockRuntimeServiceException.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/models/BedrockRuntimeServiceException.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BedrockRuntimeServiceException: () => (/* binding */ BedrockRuntimeServiceException),\n/* harmony export */   __ServiceException: () => (/* reexport safe */ _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.ServiceException)\n/* harmony export */ });\n/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/smithy-client */ \"./node_modules/@smithy/smithy-client/dist-es/index.js\");\n\n\nclass BedrockRuntimeServiceException extends _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.ServiceException {\n    constructor(options) {\n        super(options);\n        Object.setPrototypeOf(this, BedrockRuntimeServiceException.prototype);\n    }\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/models/BedrockRuntimeServiceException.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/models/models_0.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/models/models_0.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AccessDeniedException: () => (/* binding */ AccessDeniedException),\n/* harmony export */   InternalServerException: () => (/* binding */ InternalServerException),\n/* harmony export */   InvokeModelRequestFilterSensitiveLog: () => (/* binding */ InvokeModelRequestFilterSensitiveLog),\n/* harmony export */   InvokeModelResponseFilterSensitiveLog: () => (/* binding */ InvokeModelResponseFilterSensitiveLog),\n/* harmony export */   InvokeModelWithResponseStreamRequestFilterSensitiveLog: () => (/* binding */ InvokeModelWithResponseStreamRequestFilterSensitiveLog),\n/* harmony export */   InvokeModelWithResponseStreamResponseFilterSensitiveLog: () => (/* binding */ InvokeModelWithResponseStreamResponseFilterSensitiveLog),\n/* harmony export */   ModelErrorException: () => (/* binding */ ModelErrorException),\n/* harmony export */   ModelNotReadyException: () => (/* binding */ ModelNotReadyException),\n/* harmony export */   ModelStreamErrorException: () => (/* binding */ ModelStreamErrorException),\n/* harmony export */   ModelTimeoutException: () => (/* binding */ ModelTimeoutException),\n/* harmony export */   PayloadPartFilterSensitiveLog: () => (/* binding */ PayloadPartFilterSensitiveLog),\n/* harmony export */   ResourceNotFoundException: () => (/* binding */ ResourceNotFoundException),\n/* harmony export */   ResponseStream: () => (/* binding */ ResponseStream),\n/* harmony export */   ResponseStreamFilterSensitiveLog: () => (/* binding */ ResponseStreamFilterSensitiveLog),\n/* harmony export */   ServiceQuotaExceededException: () => (/* binding */ ServiceQuotaExceededException),\n/* harmony export */   ThrottlingException: () => (/* binding */ ThrottlingException),\n/* harmony export */   ValidationException: () => (/* binding */ ValidationException)\n/* harmony export */ });\n/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/smithy-client */ \"./node_modules/@smithy/smithy-client/dist-es/index.js\");\n/* harmony import */ var _BedrockRuntimeServiceException__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BedrockRuntimeServiceException */ \"./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/models/BedrockRuntimeServiceException.js\");\n\n\nclass AccessDeniedException extends _BedrockRuntimeServiceException__WEBPACK_IMPORTED_MODULE_1__.BedrockRuntimeServiceException {\n    constructor(opts) {\n        super({\n            name: \"AccessDeniedException\",\n            $fault: \"client\",\n            ...opts,\n        });\n        this.name = \"AccessDeniedException\";\n        this.$fault = \"client\";\n        Object.setPrototypeOf(this, AccessDeniedException.prototype);\n    }\n}\nclass InternalServerException extends _BedrockRuntimeServiceException__WEBPACK_IMPORTED_MODULE_1__.BedrockRuntimeServiceException {\n    constructor(opts) {\n        super({\n            name: \"InternalServerException\",\n            $fault: \"server\",\n            ...opts,\n        });\n        this.name = \"InternalServerException\";\n        this.$fault = \"server\";\n        Object.setPrototypeOf(this, InternalServerException.prototype);\n    }\n}\nclass ModelErrorException extends _BedrockRuntimeServiceException__WEBPACK_IMPORTED_MODULE_1__.BedrockRuntimeServiceException {\n    constructor(opts) {\n        super({\n            name: \"ModelErrorException\",\n            $fault: \"client\",\n            ...opts,\n        });\n        this.name = \"ModelErrorException\";\n        this.$fault = \"client\";\n        Object.setPrototypeOf(this, ModelErrorException.prototype);\n        this.originalStatusCode = opts.originalStatusCode;\n        this.resourceName = opts.resourceName;\n    }\n}\nclass ModelNotReadyException extends _BedrockRuntimeServiceException__WEBPACK_IMPORTED_MODULE_1__.BedrockRuntimeServiceException {\n    constructor(opts) {\n        super({\n            name: \"ModelNotReadyException\",\n            $fault: \"client\",\n            ...opts,\n        });\n        this.name = \"ModelNotReadyException\";\n        this.$fault = \"client\";\n        Object.setPrototypeOf(this, ModelNotReadyException.prototype);\n    }\n}\nclass ModelTimeoutException extends _BedrockRuntimeServiceException__WEBPACK_IMPORTED_MODULE_1__.BedrockRuntimeServiceException {\n    constructor(opts) {\n        super({\n            name: \"ModelTimeoutException\",\n            $fault: \"client\",\n            ...opts,\n        });\n        this.name = \"ModelTimeoutException\";\n        this.$fault = \"client\";\n        Object.setPrototypeOf(this, ModelTimeoutException.prototype);\n    }\n}\nclass ResourceNotFoundException extends _BedrockRuntimeServiceException__WEBPACK_IMPORTED_MODULE_1__.BedrockRuntimeServiceException {\n    constructor(opts) {\n        super({\n            name: \"ResourceNotFoundException\",\n            $fault: \"client\",\n            ...opts,\n        });\n        this.name = \"ResourceNotFoundException\";\n        this.$fault = \"client\";\n        Object.setPrototypeOf(this, ResourceNotFoundException.prototype);\n    }\n}\nclass ServiceQuotaExceededException extends _BedrockRuntimeServiceException__WEBPACK_IMPORTED_MODULE_1__.BedrockRuntimeServiceException {\n    constructor(opts) {\n        super({\n            name: \"ServiceQuotaExceededException\",\n            $fault: \"client\",\n            ...opts,\n        });\n        this.name = \"ServiceQuotaExceededException\";\n        this.$fault = \"client\";\n        Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);\n    }\n}\nclass ThrottlingException extends _BedrockRuntimeServiceException__WEBPACK_IMPORTED_MODULE_1__.BedrockRuntimeServiceException {\n    constructor(opts) {\n        super({\n            name: \"ThrottlingException\",\n            $fault: \"client\",\n            ...opts,\n        });\n        this.name = \"ThrottlingException\";\n        this.$fault = \"client\";\n        Object.setPrototypeOf(this, ThrottlingException.prototype);\n    }\n}\nclass ValidationException extends _BedrockRuntimeServiceException__WEBPACK_IMPORTED_MODULE_1__.BedrockRuntimeServiceException {\n    constructor(opts) {\n        super({\n            name: \"ValidationException\",\n            $fault: \"client\",\n            ...opts,\n        });\n        this.name = \"ValidationException\";\n        this.$fault = \"client\";\n        Object.setPrototypeOf(this, ValidationException.prototype);\n    }\n}\nclass ModelStreamErrorException extends _BedrockRuntimeServiceException__WEBPACK_IMPORTED_MODULE_1__.BedrockRuntimeServiceException {\n    constructor(opts) {\n        super({\n            name: \"ModelStreamErrorException\",\n            $fault: \"client\",\n            ...opts,\n        });\n        this.name = \"ModelStreamErrorException\";\n        this.$fault = \"client\";\n        Object.setPrototypeOf(this, ModelStreamErrorException.prototype);\n        this.originalStatusCode = opts.originalStatusCode;\n        this.originalMessage = opts.originalMessage;\n    }\n}\nvar ResponseStream;\n(function (ResponseStream) {\n    ResponseStream.visit = (value, visitor) => {\n        if (value.chunk !== undefined)\n            return visitor.chunk(value.chunk);\n        if (value.internalServerException !== undefined)\n            return visitor.internalServerException(value.internalServerException);\n        if (value.modelStreamErrorException !== undefined)\n            return visitor.modelStreamErrorException(value.modelStreamErrorException);\n        if (value.validationException !== undefined)\n            return visitor.validationException(value.validationException);\n        if (value.throttlingException !== undefined)\n            return visitor.throttlingException(value.throttlingException);\n        if (value.modelTimeoutException !== undefined)\n            return visitor.modelTimeoutException(value.modelTimeoutException);\n        return visitor._(value.$unknown[0], value.$unknown[1]);\n    };\n})(ResponseStream || (ResponseStream = {}));\nconst InvokeModelRequestFilterSensitiveLog = (obj) => ({\n    ...obj,\n    ...(obj.body && { body: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),\n});\nconst InvokeModelResponseFilterSensitiveLog = (obj) => ({\n    ...obj,\n    ...(obj.body && { body: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),\n});\nconst InvokeModelWithResponseStreamRequestFilterSensitiveLog = (obj) => ({\n    ...obj,\n    ...(obj.body && { body: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),\n});\nconst PayloadPartFilterSensitiveLog = (obj) => ({\n    ...obj,\n    ...(obj.bytes && { bytes: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),\n});\nconst ResponseStreamFilterSensitiveLog = (obj) => {\n    if (obj.chunk !== undefined)\n        return { chunk: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING };\n    if (obj.internalServerException !== undefined)\n        return { internalServerException: obj.internalServerException };\n    if (obj.modelStreamErrorException !== undefined)\n        return { modelStreamErrorException: obj.modelStreamErrorException };\n    if (obj.validationException !== undefined)\n        return { validationException: obj.validationException };\n    if (obj.throttlingException !== undefined)\n        return { throttlingException: obj.throttlingException };\n    if (obj.modelTimeoutException !== undefined)\n        return { modelTimeoutException: obj.modelTimeoutException };\n    if (obj.$unknown !== undefined)\n        return { [obj.$unknown[0]]: \"UNKNOWN\" };\n};\nconst InvokeModelWithResponseStreamResponseFilterSensitiveLog = (obj) => ({\n    ...obj,\n    ...(obj.body && { body: \"STREAMING_CONTENT\" }),\n});\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/models/models_0.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/protocols/Aws_restJson1.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/protocols/Aws_restJson1.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   de_InvokeModelCommand: () => (/* binding */ de_InvokeModelCommand),\n/* harmony export */   de_InvokeModelWithResponseStreamCommand: () => (/* binding */ de_InvokeModelWithResponseStreamCommand),\n/* harmony export */   se_InvokeModelCommand: () => (/* binding */ se_InvokeModelCommand),\n/* harmony export */   se_InvokeModelWithResponseStreamCommand: () => (/* binding */ se_InvokeModelWithResponseStreamCommand)\n/* harmony export */ });\n/* harmony import */ var _aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/core */ \"./node_modules/@aws-sdk/core/dist-es/protocols/json/parseJsonBody.js\");\n/* harmony import */ var _smithy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/core */ \"./node_modules/@smithy/core/dist-es/index.js\");\n/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/smithy-client */ \"./node_modules/@smithy/smithy-client/dist-es/index.js\");\n/* harmony import */ var _models_BedrockRuntimeServiceException__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/BedrockRuntimeServiceException */ \"./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/models/BedrockRuntimeServiceException.js\");\n/* harmony import */ var _models_models_0__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/models_0 */ \"./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/models/models_0.js\");\n\n\n\n\n\nconst se_InvokeModelCommand = async (input, context) => {\n    const b = (0,_smithy_core__WEBPACK_IMPORTED_MODULE_0__.requestBuilder)(input, context);\n    const headers = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({}, isSerializableHeaderValue, {\n        [_ct]: input[_cT] || \"application/octet-stream\",\n        [_a]: input[_a],\n    });\n    b.bp(\"/model/{modelId}/invoke\");\n    b.p(\"modelId\", () => input.modelId, \"{modelId}\", false);\n    let body;\n    if (input.body !== undefined) {\n        body = input.body;\n    }\n    b.m(\"POST\").h(headers).b(body);\n    return b.build();\n};\nconst se_InvokeModelWithResponseStreamCommand = async (input, context) => {\n    const b = (0,_smithy_core__WEBPACK_IMPORTED_MODULE_0__.requestBuilder)(input, context);\n    const headers = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({}, isSerializableHeaderValue, {\n        [_ct]: input[_cT] || \"application/octet-stream\",\n        [_xaba]: input[_a],\n    });\n    b.bp(\"/model/{modelId}/invoke-with-response-stream\");\n    b.p(\"modelId\", () => input.modelId, \"{modelId}\", false);\n    let body;\n    if (input.body !== undefined) {\n        body = input.body;\n    }\n    b.m(\"POST\").h(headers).b(body);\n    return b.build();\n};\nconst de_InvokeModelCommand = async (output, context) => {\n    if (output.statusCode !== 200 && output.statusCode >= 300) {\n        return de_CommandError(output, context);\n    }\n    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({\n        $metadata: deserializeMetadata(output),\n        [_cT]: [, output.headers[_ct]],\n    });\n    const data = await (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.collectBody)(output.body, context);\n    contents.body = data;\n    return contents;\n};\nconst de_InvokeModelWithResponseStreamCommand = async (output, context) => {\n    if (output.statusCode !== 200 && output.statusCode >= 300) {\n        return de_CommandError(output, context);\n    }\n    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({\n        $metadata: deserializeMetadata(output),\n        [_cT]: [, output.headers[_xabct]],\n    });\n    const data = output.body;\n    contents.body = de_ResponseStream(data, context);\n    return contents;\n};\nconst de_CommandError = async (output, context) => {\n    const parsedOutput = {\n        ...output,\n        body: await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonErrorBody)(output.body, context),\n    };\n    const errorCode = (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.loadRestJsonErrorCode)(output, parsedOutput.body);\n    switch (errorCode) {\n        case \"AccessDeniedException\":\n        case \"com.amazonaws.bedrockruntime#AccessDeniedException\":\n            throw await de_AccessDeniedExceptionRes(parsedOutput, context);\n        case \"InternalServerException\":\n        case \"com.amazonaws.bedrockruntime#InternalServerException\":\n            throw await de_InternalServerExceptionRes(parsedOutput, context);\n        case \"ModelErrorException\":\n        case \"com.amazonaws.bedrockruntime#ModelErrorException\":\n            throw await de_ModelErrorExceptionRes(parsedOutput, context);\n        case \"ModelNotReadyException\":\n        case \"com.amazonaws.bedrockruntime#ModelNotReadyException\":\n            throw await de_ModelNotReadyExceptionRes(parsedOutput, context);\n        case \"ModelTimeoutException\":\n        case \"com.amazonaws.bedrockruntime#ModelTimeoutException\":\n            throw await de_ModelTimeoutExceptionRes(parsedOutput, context);\n        case \"ResourceNotFoundException\":\n        case \"com.amazonaws.bedrockruntime#ResourceNotFoundException\":\n            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);\n        case \"ServiceQuotaExceededException\":\n        case \"com.amazonaws.bedrockruntime#ServiceQuotaExceededException\":\n            throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);\n        case \"ThrottlingException\":\n        case \"com.amazonaws.bedrockruntime#ThrottlingException\":\n            throw await de_ThrottlingExceptionRes(parsedOutput, context);\n        case \"ValidationException\":\n        case \"com.amazonaws.bedrockruntime#ValidationException\":\n            throw await de_ValidationExceptionRes(parsedOutput, context);\n        case \"ModelStreamErrorException\":\n        case \"com.amazonaws.bedrockruntime#ModelStreamErrorException\":\n            throw await de_ModelStreamErrorExceptionRes(parsedOutput, context);\n        default:\n            const parsedBody = parsedOutput.body;\n            return throwDefaultError({\n                output,\n                parsedBody,\n                errorCode,\n            });\n    }\n};\nconst throwDefaultError = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.withBaseException)(_models_BedrockRuntimeServiceException__WEBPACK_IMPORTED_MODULE_3__.BedrockRuntimeServiceException);\nconst de_AccessDeniedExceptionRes = async (parsedOutput, context) => {\n    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});\n    const data = parsedOutput.body;\n    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {\n        message: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,\n    });\n    Object.assign(contents, doc);\n    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_4__.AccessDeniedException({\n        $metadata: deserializeMetadata(parsedOutput),\n        ...contents,\n    });\n    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);\n};\nconst de_InternalServerExceptionRes = async (parsedOutput, context) => {\n    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});\n    const data = parsedOutput.body;\n    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {\n        message: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,\n    });\n    Object.assign(contents, doc);\n    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_4__.InternalServerException({\n        $metadata: deserializeMetadata(parsedOutput),\n        ...contents,\n    });\n    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);\n};\nconst de_ModelErrorExceptionRes = async (parsedOutput, context) => {\n    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});\n    const data = parsedOutput.body;\n    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {\n        message: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,\n        originalStatusCode: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectInt32,\n        resourceName: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,\n    });\n    Object.assign(contents, doc);\n    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_4__.ModelErrorException({\n        $metadata: deserializeMetadata(parsedOutput),\n        ...contents,\n    });\n    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);\n};\nconst de_ModelNotReadyExceptionRes = async (parsedOutput, context) => {\n    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});\n    const data = parsedOutput.body;\n    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {\n        message: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,\n    });\n    Object.assign(contents, doc);\n    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_4__.ModelNotReadyException({\n        $metadata: deserializeMetadata(parsedOutput),\n        ...contents,\n    });\n    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);\n};\nconst de_ModelStreamErrorExceptionRes = async (parsedOutput, context) => {\n    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});\n    const data = parsedOutput.body;\n    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {\n        message: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,\n        originalMessage: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,\n        originalStatusCode: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectInt32,\n    });\n    Object.assign(contents, doc);\n    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_4__.ModelStreamErrorException({\n        $metadata: deserializeMetadata(parsedOutput),\n        ...contents,\n    });\n    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);\n};\nconst de_ModelTimeoutExceptionRes = async (parsedOutput, context) => {\n    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});\n    const data = parsedOutput.body;\n    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {\n        message: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,\n    });\n    Object.assign(contents, doc);\n    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_4__.ModelTimeoutException({\n        $metadata: deserializeMetadata(parsedOutput),\n        ...contents,\n    });\n    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);\n};\nconst de_ResourceNotFoundExceptionRes = async (parsedOutput, context) => {\n    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});\n    const data = parsedOutput.body;\n    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {\n        message: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,\n    });\n    Object.assign(contents, doc);\n    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_4__.ResourceNotFoundException({\n        $metadata: deserializeMetadata(parsedOutput),\n        ...contents,\n    });\n    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);\n};\nconst de_ServiceQuotaExceededExceptionRes = async (parsedOutput, context) => {\n    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});\n    const data = parsedOutput.body;\n    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {\n        message: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,\n    });\n    Object.assign(contents, doc);\n    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_4__.ServiceQuotaExceededException({\n        $metadata: deserializeMetadata(parsedOutput),\n        ...contents,\n    });\n    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);\n};\nconst de_ThrottlingExceptionRes = async (parsedOutput, context) => {\n    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});\n    const data = parsedOutput.body;\n    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {\n        message: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,\n    });\n    Object.assign(contents, doc);\n    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_4__.ThrottlingException({\n        $metadata: deserializeMetadata(parsedOutput),\n        ...contents,\n    });\n    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);\n};\nconst de_ValidationExceptionRes = async (parsedOutput, context) => {\n    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});\n    const data = parsedOutput.body;\n    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {\n        message: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,\n    });\n    Object.assign(contents, doc);\n    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_4__.ValidationException({\n        $metadata: deserializeMetadata(parsedOutput),\n        ...contents,\n    });\n    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);\n};\nconst de_ResponseStream = (output, context) => {\n    return context.eventStreamMarshaller.deserialize(output, async (event) => {\n        if (event[\"chunk\"] != null) {\n            return {\n                chunk: await de_PayloadPart_event(event[\"chunk\"], context),\n            };\n        }\n        if (event[\"internalServerException\"] != null) {\n            return {\n                internalServerException: await de_InternalServerException_event(event[\"internalServerException\"], context),\n            };\n        }\n        if (event[\"modelStreamErrorException\"] != null) {\n            return {\n                modelStreamErrorException: await de_ModelStreamErrorException_event(event[\"modelStreamErrorException\"], context),\n            };\n        }\n        if (event[\"validationException\"] != null) {\n            return {\n                validationException: await de_ValidationException_event(event[\"validationException\"], context),\n            };\n        }\n        if (event[\"throttlingException\"] != null) {\n            return {\n                throttlingException: await de_ThrottlingException_event(event[\"throttlingException\"], context),\n            };\n        }\n        if (event[\"modelTimeoutException\"] != null) {\n            return {\n                modelTimeoutException: await de_ModelTimeoutException_event(event[\"modelTimeoutException\"], context),\n            };\n        }\n        return { $unknown: output };\n    });\n};\nconst de_InternalServerException_event = async (output, context) => {\n    const parsedOutput = {\n        ...output,\n        body: await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context),\n    };\n    return de_InternalServerExceptionRes(parsedOutput, context);\n};\nconst de_ModelStreamErrorException_event = async (output, context) => {\n    const parsedOutput = {\n        ...output,\n        body: await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context),\n    };\n    return de_ModelStreamErrorExceptionRes(parsedOutput, context);\n};\nconst de_ModelTimeoutException_event = async (output, context) => {\n    const parsedOutput = {\n        ...output,\n        body: await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context),\n    };\n    return de_ModelTimeoutExceptionRes(parsedOutput, context);\n};\nconst de_PayloadPart_event = async (output, context) => {\n    const contents = {};\n    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);\n    Object.assign(contents, de_PayloadPart(data, context));\n    return contents;\n};\nconst de_ThrottlingException_event = async (output, context) => {\n    const parsedOutput = {\n        ...output,\n        body: await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context),\n    };\n    return de_ThrottlingExceptionRes(parsedOutput, context);\n};\nconst de_ValidationException_event = async (output, context) => {\n    const parsedOutput = {\n        ...output,\n        body: await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context),\n    };\n    return de_ValidationExceptionRes(parsedOutput, context);\n};\nconst de_PayloadPart = (output, context) => {\n    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {\n        bytes: context.base64Decoder,\n    });\n};\nconst deserializeMetadata = (output) => ({\n    httpStatusCode: output.statusCode,\n    requestId: output.headers[\"x-amzn-requestid\"] ?? output.headers[\"x-amzn-request-id\"] ?? output.headers[\"x-amz-request-id\"],\n    extendedRequestId: output.headers[\"x-amz-id-2\"],\n    cfId: output.headers[\"x-amz-cf-id\"],\n});\nconst collectBodyString = (streamBody, context) => (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.collectBody)(streamBody, context).then((body) => context.utf8Encoder(body));\nconst isSerializableHeaderValue = (value) => value !== undefined &&\n    value !== null &&\n    value !== \"\" &&\n    (!Object.getOwnPropertyNames(value).includes(\"length\") || value.length != 0) &&\n    (!Object.getOwnPropertyNames(value).includes(\"size\") || value.size != 0);\nconst _a = \"accept\";\nconst _cT = \"contentType\";\nconst _ct = \"content-type\";\nconst _xaba = \"x-amzn-bedrock-accept\";\nconst _xabct = \"x-amzn-bedrock-content-type\";\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/protocols/Aws_restJson1.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/runtimeConfig.browser.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/runtimeConfig.browser.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getRuntimeConfig: () => (/* binding */ getRuntimeConfig)\n/* harmony export */ });\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../package.json */ \"./node_modules/@aws-sdk/client-bedrock-runtime/package.json\");\n/* harmony import */ var _aws_crypto_sha256_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-crypto/sha256-browser */ \"./node_modules/@aws-crypto/sha256-browser/build/index.js\");\n/* harmony import */ var _aws_crypto_sha256_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_crypto_sha256_browser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _aws_sdk_util_user_agent_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/util-user-agent-browser */ \"./node_modules/@aws-sdk/util-user-agent-browser/dist-es/index.js\");\n/* harmony import */ var _smithy_config_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smithy/config-resolver */ \"./node_modules/@smithy/config-resolver/dist-es/index.js\");\n/* harmony import */ var _smithy_eventstream_serde_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smithy/eventstream-serde-browser */ \"./node_modules/@smithy/eventstream-serde-browser/dist-es/index.js\");\n/* harmony import */ var _smithy_fetch_http_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @smithy/fetch-http-handler */ \"./node_modules/@smithy/fetch-http-handler/dist-es/index.js\");\n/* harmony import */ var _smithy_invalid_dependency__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @smithy/invalid-dependency */ \"./node_modules/@smithy/invalid-dependency/dist-es/index.js\");\n/* harmony import */ var _smithy_util_body_length_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @smithy/util-body-length-browser */ \"./node_modules/@smithy/util-body-length-browser/dist-es/index.js\");\n/* harmony import */ var _smithy_util_retry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @smithy/util-retry */ \"./node_modules/@smithy/util-retry/dist-es/index.js\");\n/* harmony import */ var _runtimeConfig_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./runtimeConfig.shared */ \"./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/runtimeConfig.shared.js\");\n/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @smithy/smithy-client */ \"./node_modules/@smithy/smithy-client/dist-es/index.js\");\n/* harmony import */ var _smithy_util_defaults_mode_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @smithy/util-defaults-mode-browser */ \"./node_modules/@smithy/util-defaults-mode-browser/dist-es/index.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nconst getRuntimeConfig = (config) => {\n    const defaultsMode = (0,_smithy_util_defaults_mode_browser__WEBPACK_IMPORTED_MODULE_9__.resolveDefaultsModeConfig)(config);\n    const defaultConfigProvider = () => defaultsMode().then(_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_8__.loadConfigsForDefaultMode);\n    const clientSharedValues = (0,_runtimeConfig_shared__WEBPACK_IMPORTED_MODULE_10__.getRuntimeConfig)(config);\n    return {\n        ...clientSharedValues,\n        ...config,\n        runtime: \"browser\",\n        defaultsMode,\n        bodyLengthChecker: config?.bodyLengthChecker ?? _smithy_util_body_length_browser__WEBPACK_IMPORTED_MODULE_6__.calculateBodyLength,\n        credentialDefaultProvider: config?.credentialDefaultProvider ?? ((_) => () => Promise.reject(new Error(\"Credential is missing\"))),\n        defaultUserAgentProvider: config?.defaultUserAgentProvider ??\n            (0,_aws_sdk_util_user_agent_browser__WEBPACK_IMPORTED_MODULE_1__.defaultUserAgent)({ serviceId: clientSharedValues.serviceId, clientVersion: _package_json__WEBPACK_IMPORTED_MODULE_11__.version }),\n        eventStreamSerdeProvider: config?.eventStreamSerdeProvider ?? _smithy_eventstream_serde_browser__WEBPACK_IMPORTED_MODULE_3__.eventStreamSerdeProvider,\n        maxAttempts: config?.maxAttempts ?? _smithy_util_retry__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_MAX_ATTEMPTS,\n        region: config?.region ?? (0,_smithy_invalid_dependency__WEBPACK_IMPORTED_MODULE_5__.invalidProvider)(\"Region is missing\"),\n        requestHandler: _smithy_fetch_http_handler__WEBPACK_IMPORTED_MODULE_4__.FetchHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),\n        retryMode: config?.retryMode ?? (async () => (await defaultConfigProvider()).retryMode || _smithy_util_retry__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_RETRY_MODE),\n        sha256: config?.sha256 ?? _aws_crypto_sha256_browser__WEBPACK_IMPORTED_MODULE_0__.Sha256,\n        streamCollector: config?.streamCollector ?? _smithy_fetch_http_handler__WEBPACK_IMPORTED_MODULE_4__.streamCollector,\n        useDualstackEndpoint: config?.useDualstackEndpoint ?? (() => Promise.resolve(_smithy_config_resolver__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_USE_DUALSTACK_ENDPOINT)),\n        useFipsEndpoint: config?.useFipsEndpoint ?? (() => Promise.resolve(_smithy_config_resolver__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_USE_FIPS_ENDPOINT)),\n    };\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/runtimeConfig.browser.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/runtimeConfig.shared.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/runtimeConfig.shared.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getRuntimeConfig: () => (/* binding */ getRuntimeConfig)\n/* harmony export */ });\n/* harmony import */ var _aws_sdk_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @aws-sdk/core */ \"./node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js\");\n/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/smithy-client */ \"./node_modules/@smithy/smithy-client/dist-es/index.js\");\n/* harmony import */ var _smithy_url_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/url-parser */ \"./node_modules/@smithy/url-parser/dist-es/index.js\");\n/* harmony import */ var _smithy_util_base64__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smithy/util-base64 */ \"./node_modules/@smithy/util-base64/dist-es/index.js\");\n/* harmony import */ var _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smithy/util-utf8 */ \"./node_modules/@smithy/util-utf8/dist-es/index.js\");\n/* harmony import */ var _auth_httpAuthSchemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/httpAuthSchemeProvider */ \"./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/auth/httpAuthSchemeProvider.js\");\n/* harmony import */ var _endpoint_endpointResolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./endpoint/endpointResolver */ \"./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/endpoint/endpointResolver.js\");\n\n\n\n\n\n\n\nconst getRuntimeConfig = (config) => {\n    return {\n        apiVersion: \"2023-09-30\",\n        base64Decoder: config?.base64Decoder ?? _smithy_util_base64__WEBPACK_IMPORTED_MODULE_2__.fromBase64,\n        base64Encoder: config?.base64Encoder ?? _smithy_util_base64__WEBPACK_IMPORTED_MODULE_2__.toBase64,\n        disableHostPrefix: config?.disableHostPrefix ?? false,\n        endpointProvider: config?.endpointProvider ?? _endpoint_endpointResolver__WEBPACK_IMPORTED_MODULE_4__.defaultEndpointResolver,\n        extensions: config?.extensions ?? [],\n        httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? _auth_httpAuthSchemeProvider__WEBPACK_IMPORTED_MODULE_5__.defaultBedrockRuntimeHttpAuthSchemeProvider,\n        httpAuthSchemes: config?.httpAuthSchemes ?? [\n            {\n                schemeId: \"aws.auth#sigv4\",\n                identityProvider: (ipc) => ipc.getIdentityProvider(\"aws.auth#sigv4\"),\n                signer: new _aws_sdk_core__WEBPACK_IMPORTED_MODULE_6__.AwsSdkSigV4Signer(),\n            },\n        ],\n        logger: config?.logger ?? new _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.NoOpLogger(),\n        serviceId: config?.serviceId ?? \"Bedrock Runtime\",\n        urlParser: config?.urlParser ?? _smithy_url_parser__WEBPACK_IMPORTED_MODULE_1__.parseUrl,\n        utf8Decoder: config?.utf8Decoder ?? _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_3__.fromUtf8,\n        utf8Encoder: config?.utf8Encoder ?? _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_3__.toUtf8,\n    };\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/runtimeConfig.shared.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/runtimeExtensions.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/runtimeExtensions.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   resolveRuntimeExtensions: () => (/* binding */ resolveRuntimeExtensions)\n/* harmony export */ });\n/* harmony import */ var _aws_sdk_region_config_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/region-config-resolver */ \"./node_modules/@aws-sdk/region-config-resolver/dist-es/index.js\");\n/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/protocol-http */ \"./node_modules/@smithy/protocol-http/dist-es/index.js\");\n/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smithy/smithy-client */ \"./node_modules/@smithy/smithy-client/dist-es/index.js\");\n/* harmony import */ var _auth_httpAuthExtensionConfiguration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/httpAuthExtensionConfiguration */ \"./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/auth/httpAuthExtensionConfiguration.js\");\n\n\n\n\nconst asPartial = (t) => t;\nconst resolveRuntimeExtensions = (runtimeConfig, extensions) => {\n    const extensionConfiguration = {\n        ...asPartial((0,_aws_sdk_region_config_resolver__WEBPACK_IMPORTED_MODULE_0__.getAwsRegionExtensionConfiguration)(runtimeConfig)),\n        ...asPartial((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.getDefaultExtensionConfiguration)(runtimeConfig)),\n        ...asPartial((0,_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_1__.getHttpHandlerExtensionConfiguration)(runtimeConfig)),\n        ...asPartial((0,_auth_httpAuthExtensionConfiguration__WEBPACK_IMPORTED_MODULE_3__.getHttpAuthExtensionConfiguration)(runtimeConfig)),\n    };\n    extensions.forEach((extension) => extension.configure(extensionConfiguration));\n    return {\n        ...runtimeConfig,\n        ...(0,_aws_sdk_region_config_resolver__WEBPACK_IMPORTED_MODULE_0__.resolveAwsRegionExtensionConfiguration)(extensionConfiguration),\n        ...(0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.resolveDefaultRuntimeConfig)(extensionConfiguration),\n        ...(0,_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_1__.resolveHttpHandlerRuntimeConfig)(extensionConfiguration),\n        ...(0,_auth_httpAuthExtensionConfiguration__WEBPACK_IMPORTED_MODULE_3__.resolveHttpAuthRuntimeConfig)(extensionConfiguration),\n    };\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/client-bedrock-runtime/dist-es/runtimeExtensions.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AWSSDKSigV4Signer: () => (/* binding */ AWSSDKSigV4Signer),\n/* harmony export */   AwsSdkSigV4Signer: () => (/* binding */ AwsSdkSigV4Signer)\n/* harmony export */ });\n/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/protocol-http */ \"./node_modules/@smithy/protocol-http/dist-es/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/utils/getSkewCorrectedDate.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ \"./node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/utils/getDateHeader.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ \"./node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/utils/getUpdatedSystemClockOffset.js\");\n\n\nconst throwSigningPropertyError = (name, property) => {\n    if (!property) {\n        throw new Error(`Property \\`${name}\\` is not resolved for AWS SDK SigV4Auth`);\n    }\n    return property;\n};\nconst validateSigningProperties = async (signingProperties) => {\n    const context = throwSigningPropertyError(\"context\", signingProperties.context);\n    const config = throwSigningPropertyError(\"config\", signingProperties.config);\n    const authScheme = context.endpointV2?.properties?.authSchemes?.[0];\n    const signerFunction = throwSigningPropertyError(\"signer\", config.signer);\n    const signer = await signerFunction(authScheme);\n    const signingRegion = signingProperties?.signingRegion;\n    const signingName = signingProperties?.signingName;\n    return {\n        config,\n        signer,\n        signingRegion,\n        signingName,\n    };\n};\nclass AwsSdkSigV4Signer {\n    async sign(httpRequest, identity, signingProperties) {\n        if (!_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest.isInstance(httpRequest)) {\n            throw new Error(\"The request is not an instance of `HttpRequest` and cannot be signed\");\n        }\n        const { config, signer, signingRegion, signingName } = await validateSigningProperties(signingProperties);\n        const signedRequest = await signer.sign(httpRequest, {\n            signingDate: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getSkewCorrectedDate)(config.systemClockOffset),\n            signingRegion: signingRegion,\n            signingService: signingName,\n        });\n        return signedRequest;\n    }\n    errorHandler(signingProperties) {\n        return (error) => {\n            const serverTime = error.ServerTime ?? (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getDateHeader)(error.$response);\n            if (serverTime) {\n                const config = throwSigningPropertyError(\"config\", signingProperties.config);\n                const initialSystemClockOffset = config.systemClockOffset;\n                config.systemClockOffset = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getUpdatedSystemClockOffset)(serverTime, config.systemClockOffset);\n                const clockSkewCorrected = config.systemClockOffset !== initialSystemClockOffset;\n                if (clockSkewCorrected && error.$metadata) {\n                    error.$metadata.clockSkewCorrected = true;\n                }\n            }\n            throw error;\n        };\n    }\n    successHandler(httpResponse, signingProperties) {\n        const dateHeader = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getDateHeader)(httpResponse);\n        if (dateHeader) {\n            const config = throwSigningPropertyError(\"config\", signingProperties.config);\n            config.systemClockOffset = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getUpdatedSystemClockOffset)(dateHeader, config.systemClockOffset);\n        }\n    }\n}\nconst AWSSDKSigV4Signer = AwsSdkSigV4Signer;\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   resolveAWSSDKSigV4Config: () => (/* binding */ resolveAWSSDKSigV4Config),\n/* harmony export */   resolveAwsSdkSigV4Config: () => (/* binding */ resolveAwsSdkSigV4Config)\n/* harmony export */ });\n/* harmony import */ var _smithy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/core */ \"./node_modules/@smithy/core/dist-es/index.js\");\n/* harmony import */ var _smithy_signature_v4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/signature-v4 */ \"./node_modules/@smithy/signature-v4/dist-es/index.js\");\n\n\nconst resolveAwsSdkSigV4Config = (config) => {\n    let normalizedCreds;\n    if (config.credentials) {\n        normalizedCreds = (0,_smithy_core__WEBPACK_IMPORTED_MODULE_0__.memoizeIdentityProvider)(config.credentials, _smithy_core__WEBPACK_IMPORTED_MODULE_0__.isIdentityExpired, _smithy_core__WEBPACK_IMPORTED_MODULE_0__.doesIdentityRequireRefresh);\n    }\n    if (!normalizedCreds) {\n        if (config.credentialDefaultProvider) {\n            normalizedCreds = (0,_smithy_core__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(config.credentialDefaultProvider(Object.assign({}, config, {\n                parentClientConfig: config,\n            })));\n        }\n        else {\n            normalizedCreds = async () => {\n                throw new Error(\"`credentials` is missing\");\n            };\n        }\n    }\n    const { signingEscapePath = true, systemClockOffset = config.systemClockOffset || 0, sha256, } = config;\n    let signer;\n    if (config.signer) {\n        signer = (0,_smithy_core__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(config.signer);\n    }\n    else if (config.regionInfoProvider) {\n        signer = () => (0,_smithy_core__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(config.region)()\n            .then(async (region) => [\n            (await config.regionInfoProvider(region, {\n                useFipsEndpoint: await config.useFipsEndpoint(),\n                useDualstackEndpoint: await config.useDualstackEndpoint(),\n            })) || {},\n            region,\n        ])\n            .then(([regionInfo, region]) => {\n            const { signingRegion, signingService } = regionInfo;\n            config.signingRegion = config.signingRegion || signingRegion || region;\n            config.signingName = config.signingName || signingService || config.serviceId;\n            const params = {\n                ...config,\n                credentials: normalizedCreds,\n                region: config.signingRegion,\n                service: config.signingName,\n                sha256,\n                uriEscapePath: signingEscapePath,\n            };\n            const SignerCtor = config.signerConstructor || _smithy_signature_v4__WEBPACK_IMPORTED_MODULE_1__.SignatureV4;\n            return new SignerCtor(params);\n        });\n    }\n    else {\n        signer = async (authScheme) => {\n            authScheme = Object.assign({}, {\n                name: \"sigv4\",\n                signingName: config.signingName || config.defaultSigningName,\n                signingRegion: await (0,_smithy_core__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(config.region)(),\n                properties: {},\n            }, authScheme);\n            const signingRegion = authScheme.signingRegion;\n            const signingService = authScheme.signingName;\n            config.signingRegion = config.signingRegion || signingRegion;\n            config.signingName = config.signingName || signingService || config.serviceId;\n            const params = {\n                ...config,\n                credentials: normalizedCreds,\n                region: config.signingRegion,\n                service: config.signingName,\n                sha256,\n                uriEscapePath: signingEscapePath,\n            };\n            const SignerCtor = config.signerConstructor || _smithy_signature_v4__WEBPACK_IMPORTED_MODULE_1__.SignatureV4;\n            return new SignerCtor(params);\n        };\n    }\n    return {\n        ...config,\n        systemClockOffset,\n        signingEscapePath,\n        credentials: normalizedCreds,\n        signer,\n    };\n};\nconst resolveAWSSDKSigV4Config = resolveAwsSdkSigV4Config;\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/utils/getDateHeader.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/utils/getDateHeader.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDateHeader: () => (/* binding */ getDateHeader)\n/* harmony export */ });\n/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/protocol-http */ \"./node_modules/@smithy/protocol-http/dist-es/index.js\");\n\nconst getDateHeader = (response) => _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse.isInstance(response) ? response.headers?.date ?? response.headers?.Date : undefined;\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/utils/getDateHeader.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/utils/getSkewCorrectedDate.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/utils/getSkewCorrectedDate.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getSkewCorrectedDate: () => (/* binding */ getSkewCorrectedDate)\n/* harmony export */ });\nconst getSkewCorrectedDate = (systemClockOffset) => new Date(Date.now() + systemClockOffset);\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/utils/getSkewCorrectedDate.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/utils/getUpdatedSystemClockOffset.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/utils/getUpdatedSystemClockOffset.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getUpdatedSystemClockOffset: () => (/* binding */ getUpdatedSystemClockOffset)\n/* harmony export */ });\n/* harmony import */ var _isClockSkewed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isClockSkewed */ \"./node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/utils/isClockSkewed.js\");\n\nconst getUpdatedSystemClockOffset = (clockTime, currentSystemClockOffset) => {\n    const clockTimeInMs = Date.parse(clockTime);\n    if ((0,_isClockSkewed__WEBPACK_IMPORTED_MODULE_0__.isClockSkewed)(clockTimeInMs, currentSystemClockOffset)) {\n        return clockTimeInMs - Date.now();\n    }\n    return currentSystemClockOffset;\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/utils/getUpdatedSystemClockOffset.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/utils/isClockSkewed.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/utils/isClockSkewed.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isClockSkewed: () => (/* binding */ isClockSkewed)\n/* harmony export */ });\n/* harmony import */ var _getSkewCorrectedDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getSkewCorrectedDate */ \"./node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/utils/getSkewCorrectedDate.js\");\n\nconst isClockSkewed = (clockTime, systemClockOffset) => Math.abs((0,_getSkewCorrectedDate__WEBPACK_IMPORTED_MODULE_0__.getSkewCorrectedDate)(systemClockOffset).getTime() - clockTime) >= 300000;\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/utils/isClockSkewed.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/core/dist-es/protocols/common.js":
/*!****************************************************************!*\
  !*** ./node_modules/@aws-sdk/core/dist-es/protocols/common.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   collectBodyString: () => (/* binding */ collectBodyString)\n/* harmony export */ });\n/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/smithy-client */ \"./node_modules/@smithy/smithy-client/dist-es/index.js\");\n\nconst collectBodyString = (streamBody, context) => (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.collectBody)(streamBody, context).then((body) => context.utf8Encoder(body));\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/core/dist-es/protocols/common.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/core/dist-es/protocols/json/parseJsonBody.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@aws-sdk/core/dist-es/protocols/json/parseJsonBody.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadRestJsonErrorCode: () => (/* binding */ loadRestJsonErrorCode),\n/* harmony export */   parseJsonBody: () => (/* binding */ parseJsonBody),\n/* harmony export */   parseJsonErrorBody: () => (/* binding */ parseJsonErrorBody)\n/* harmony export */ });\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ \"./node_modules/@aws-sdk/core/dist-es/protocols/common.js\");\n\nconst parseJsonBody = (streamBody, context) => (0,_common__WEBPACK_IMPORTED_MODULE_0__.collectBodyString)(streamBody, context).then((encoded) => {\n    if (encoded.length) {\n        try {\n            return JSON.parse(encoded);\n        }\n        catch (e) {\n            if (e?.name === \"SyntaxError\") {\n                Object.defineProperty(e, \"$responseBodyText\", {\n                    value: encoded,\n                });\n            }\n            throw e;\n        }\n    }\n    return {};\n});\nconst parseJsonErrorBody = async (errorBody, context) => {\n    const value = await parseJsonBody(errorBody, context);\n    value.message = value.message ?? value.Message;\n    return value;\n};\nconst loadRestJsonErrorCode = (output, data) => {\n    const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());\n    const sanitizeErrorCode = (rawValue) => {\n        let cleanValue = rawValue;\n        if (typeof cleanValue === \"number\") {\n            cleanValue = cleanValue.toString();\n        }\n        if (cleanValue.indexOf(\",\") >= 0) {\n            cleanValue = cleanValue.split(\",\")[0];\n        }\n        if (cleanValue.indexOf(\":\") >= 0) {\n            cleanValue = cleanValue.split(\":\")[0];\n        }\n        if (cleanValue.indexOf(\"#\") >= 0) {\n            cleanValue = cleanValue.split(\"#\")[1];\n        }\n        return cleanValue;\n    };\n    const headerKey = findKey(output.headers, \"x-amzn-errortype\");\n    if (headerKey !== undefined) {\n        return sanitizeErrorCode(output.headers[headerKey]);\n    }\n    if (data.code !== undefined) {\n        return sanitizeErrorCode(data.code);\n    }\n    if (data[\"__type\"] !== undefined) {\n        return sanitizeErrorCode(data[\"__type\"]);\n    }\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/core/dist-es/protocols/json/parseJsonBody.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-host-header/dist-es/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-host-header/dist-es/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getHostHeaderPlugin: () => (/* binding */ getHostHeaderPlugin),\n/* harmony export */   hostHeaderMiddleware: () => (/* binding */ hostHeaderMiddleware),\n/* harmony export */   hostHeaderMiddlewareOptions: () => (/* binding */ hostHeaderMiddlewareOptions),\n/* harmony export */   resolveHostHeaderConfig: () => (/* binding */ resolveHostHeaderConfig)\n/* harmony export */ });\n/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/protocol-http */ \"./node_modules/@smithy/protocol-http/dist-es/index.js\");\n\nfunction resolveHostHeaderConfig(input) {\n    return input;\n}\nconst hostHeaderMiddleware = (options) => (next) => async (args) => {\n    if (!_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest.isInstance(args.request))\n        return next(args);\n    const { request } = args;\n    const { handlerProtocol = \"\" } = options.requestHandler.metadata || {};\n    if (handlerProtocol.indexOf(\"h2\") >= 0 && !request.headers[\":authority\"]) {\n        delete request.headers[\"host\"];\n        request.headers[\":authority\"] = request.hostname + (request.port ? \":\" + request.port : \"\");\n    }\n    else if (!request.headers[\"host\"]) {\n        let host = request.hostname;\n        if (request.port != null)\n            host += `:${request.port}`;\n        request.headers[\"host\"] = host;\n    }\n    return next(args);\n};\nconst hostHeaderMiddlewareOptions = {\n    name: \"hostHeaderMiddleware\",\n    step: \"build\",\n    priority: \"low\",\n    tags: [\"HOST\"],\n    override: true,\n};\nconst getHostHeaderPlugin = (options) => ({\n    applyToStack: (clientStack) => {\n        clientStack.add(hostHeaderMiddleware(options), hostHeaderMiddlewareOptions);\n    },\n});\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/middleware-host-header/dist-es/index.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-logger/dist-es/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-logger/dist-es/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getLoggerPlugin: () => (/* reexport safe */ _loggerMiddleware__WEBPACK_IMPORTED_MODULE_0__.getLoggerPlugin),\n/* harmony export */   loggerMiddleware: () => (/* reexport safe */ _loggerMiddleware__WEBPACK_IMPORTED_MODULE_0__.loggerMiddleware),\n/* harmony export */   loggerMiddlewareOptions: () => (/* reexport safe */ _loggerMiddleware__WEBPACK_IMPORTED_MODULE_0__.loggerMiddlewareOptions)\n/* harmony export */ });\n/* harmony import */ var _loggerMiddleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loggerMiddleware */ \"./node_modules/@aws-sdk/middleware-logger/dist-es/loggerMiddleware.js\");\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/middleware-logger/dist-es/index.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-logger/dist-es/loggerMiddleware.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-logger/dist-es/loggerMiddleware.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getLoggerPlugin: () => (/* binding */ getLoggerPlugin),\n/* harmony export */   loggerMiddleware: () => (/* binding */ loggerMiddleware),\n/* harmony export */   loggerMiddlewareOptions: () => (/* binding */ loggerMiddlewareOptions)\n/* harmony export */ });\nconst loggerMiddleware = () => (next, context) => async (args) => {\n    try {\n        const response = await next(args);\n        const { clientName, commandName, logger, dynamoDbDocumentClientOptions = {} } = context;\n        const { overrideInputFilterSensitiveLog, overrideOutputFilterSensitiveLog } = dynamoDbDocumentClientOptions;\n        const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;\n        const outputFilterSensitiveLog = overrideOutputFilterSensitiveLog ?? context.outputFilterSensitiveLog;\n        const { $metadata, ...outputWithoutMetadata } = response.output;\n        logger?.info?.({\n            clientName,\n            commandName,\n            input: inputFilterSensitiveLog(args.input),\n            output: outputFilterSensitiveLog(outputWithoutMetadata),\n            metadata: $metadata,\n        });\n        return response;\n    }\n    catch (error) {\n        const { clientName, commandName, logger, dynamoDbDocumentClientOptions = {} } = context;\n        const { overrideInputFilterSensitiveLog } = dynamoDbDocumentClientOptions;\n        const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;\n        logger?.error?.({\n            clientName,\n            commandName,\n            input: inputFilterSensitiveLog(args.input),\n            error,\n            metadata: error.$metadata,\n        });\n        throw error;\n    }\n};\nconst loggerMiddlewareOptions = {\n    name: \"loggerMiddleware\",\n    tags: [\"LOGGER\"],\n    step: \"initialize\",\n    override: true,\n};\nconst getLoggerPlugin = (options) => ({\n    applyToStack: (clientStack) => {\n        clientStack.add(loggerMiddleware(), loggerMiddlewareOptions);\n    },\n});\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/middleware-logger/dist-es/loggerMiddleware.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-recursion-detection/dist-es/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-recursion-detection/dist-es/index.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addRecursionDetectionMiddlewareOptions: () => (/* binding */ addRecursionDetectionMiddlewareOptions),\n/* harmony export */   getRecursionDetectionPlugin: () => (/* binding */ getRecursionDetectionPlugin),\n/* harmony export */   recursionDetectionMiddleware: () => (/* binding */ recursionDetectionMiddleware)\n/* harmony export */ });\n/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/protocol-http */ \"./node_modules/@smithy/protocol-http/dist-es/index.js\");\n\nconst TRACE_ID_HEADER_NAME = \"X-Amzn-Trace-Id\";\nconst ENV_LAMBDA_FUNCTION_NAME = \"AWS_LAMBDA_FUNCTION_NAME\";\nconst ENV_TRACE_ID = \"_X_AMZN_TRACE_ID\";\nconst recursionDetectionMiddleware = (options) => (next) => async (args) => {\n    const { request } = args;\n    if (!_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest.isInstance(request) ||\n        options.runtime !== \"node\" ||\n        request.headers.hasOwnProperty(TRACE_ID_HEADER_NAME)) {\n        return next(args);\n    }\n    const functionName = process.env[ENV_LAMBDA_FUNCTION_NAME];\n    const traceId = process.env[ENV_TRACE_ID];\n    const nonEmptyString = (str) => typeof str === \"string\" && str.length > 0;\n    if (nonEmptyString(functionName) && nonEmptyString(traceId)) {\n        request.headers[TRACE_ID_HEADER_NAME] = traceId;\n    }\n    return next({\n        ...args,\n        request,\n    });\n};\nconst addRecursionDetectionMiddlewareOptions = {\n    step: \"build\",\n    tags: [\"RECURSION_DETECTION\"],\n    name: \"recursionDetectionMiddleware\",\n    override: true,\n    priority: \"low\",\n};\nconst getRecursionDetectionPlugin = (options) => ({\n    applyToStack: (clientStack) => {\n        clientStack.add(recursionDetectionMiddleware(options), addRecursionDetectionMiddlewareOptions);\n    },\n});\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/middleware-recursion-detection/dist-es/index.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-user-agent/dist-es/configurations.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-user-agent/dist-es/configurations.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   resolveUserAgentConfig: () => (/* binding */ resolveUserAgentConfig)\n/* harmony export */ });\nfunction resolveUserAgentConfig(input) {\n    return {\n        ...input,\n        customUserAgent: typeof input.customUserAgent === \"string\" ? [[input.customUserAgent]] : input.customUserAgent,\n    };\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/middleware-user-agent/dist-es/configurations.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-user-agent/dist-es/constants.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-user-agent/dist-es/constants.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SPACE: () => (/* binding */ SPACE),\n/* harmony export */   UA_ESCAPE_CHAR: () => (/* binding */ UA_ESCAPE_CHAR),\n/* harmony export */   UA_NAME_ESCAPE_REGEX: () => (/* binding */ UA_NAME_ESCAPE_REGEX),\n/* harmony export */   UA_NAME_SEPARATOR: () => (/* binding */ UA_NAME_SEPARATOR),\n/* harmony export */   UA_VALUE_ESCAPE_REGEX: () => (/* binding */ UA_VALUE_ESCAPE_REGEX),\n/* harmony export */   USER_AGENT: () => (/* binding */ USER_AGENT),\n/* harmony export */   X_AMZ_USER_AGENT: () => (/* binding */ X_AMZ_USER_AGENT)\n/* harmony export */ });\nconst USER_AGENT = \"user-agent\";\nconst X_AMZ_USER_AGENT = \"x-amz-user-agent\";\nconst SPACE = \" \";\nconst UA_NAME_SEPARATOR = \"/\";\nconst UA_NAME_ESCAPE_REGEX = /[^\\!\\$\\%\\&\\'\\*\\+\\-\\.\\^\\_\\`\\|\\~\\d\\w]/g;\nconst UA_VALUE_ESCAPE_REGEX = /[^\\!\\$\\%\\&\\'\\*\\+\\-\\.\\^\\_\\`\\|\\~\\d\\w\\#]/g;\nconst UA_ESCAPE_CHAR = \"-\";\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/middleware-user-agent/dist-es/constants.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-user-agent/dist-es/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-user-agent/dist-es/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getUserAgentMiddlewareOptions: () => (/* reexport safe */ _user_agent_middleware__WEBPACK_IMPORTED_MODULE_1__.getUserAgentMiddlewareOptions),\n/* harmony export */   getUserAgentPlugin: () => (/* reexport safe */ _user_agent_middleware__WEBPACK_IMPORTED_MODULE_1__.getUserAgentPlugin),\n/* harmony export */   resolveUserAgentConfig: () => (/* reexport safe */ _configurations__WEBPACK_IMPORTED_MODULE_0__.resolveUserAgentConfig),\n/* harmony export */   userAgentMiddleware: () => (/* reexport safe */ _user_agent_middleware__WEBPACK_IMPORTED_MODULE_1__.userAgentMiddleware)\n/* harmony export */ });\n/* harmony import */ var _configurations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configurations */ \"./node_modules/@aws-sdk/middleware-user-agent/dist-es/configurations.js\");\n/* harmony import */ var _user_agent_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-agent-middleware */ \"./node_modules/@aws-sdk/middleware-user-agent/dist-es/user-agent-middleware.js\");\n\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/middleware-user-agent/dist-es/index.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-user-agent/dist-es/user-agent-middleware.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-user-agent/dist-es/user-agent-middleware.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getUserAgentMiddlewareOptions: () => (/* binding */ getUserAgentMiddlewareOptions),\n/* harmony export */   getUserAgentPlugin: () => (/* binding */ getUserAgentPlugin),\n/* harmony export */   userAgentMiddleware: () => (/* binding */ userAgentMiddleware)\n/* harmony export */ });\n/* harmony import */ var _aws_sdk_util_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/util-endpoints */ \"./node_modules/@aws-sdk/util-endpoints/dist-es/index.js\");\n/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/protocol-http */ \"./node_modules/@smithy/protocol-http/dist-es/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./node_modules/@aws-sdk/middleware-user-agent/dist-es/constants.js\");\n\n\n\nconst userAgentMiddleware = (options) => (next, context) => async (args) => {\n    const { request } = args;\n    if (!_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_1__.HttpRequest.isInstance(request))\n        return next(args);\n    const { headers } = request;\n    const userAgent = context?.userAgent?.map(escapeUserAgent) || [];\n    const defaultUserAgent = (await options.defaultUserAgentProvider()).map(escapeUserAgent);\n    const customUserAgent = options?.customUserAgent?.map(escapeUserAgent) || [];\n    const prefix = (0,_aws_sdk_util_endpoints__WEBPACK_IMPORTED_MODULE_0__.getUserAgentPrefix)();\n    const sdkUserAgentValue = (prefix ? [prefix] : [])\n        .concat([...defaultUserAgent, ...userAgent, ...customUserAgent])\n        .join(_constants__WEBPACK_IMPORTED_MODULE_2__.SPACE);\n    const normalUAValue = [\n        ...defaultUserAgent.filter((section) => section.startsWith(\"aws-sdk-\")),\n        ...customUserAgent,\n    ].join(_constants__WEBPACK_IMPORTED_MODULE_2__.SPACE);\n    if (options.runtime !== \"browser\") {\n        if (normalUAValue) {\n            headers[_constants__WEBPACK_IMPORTED_MODULE_2__.X_AMZ_USER_AGENT] = headers[_constants__WEBPACK_IMPORTED_MODULE_2__.X_AMZ_USER_AGENT]\n                ? `${headers[_constants__WEBPACK_IMPORTED_MODULE_2__.USER_AGENT]} ${normalUAValue}`\n                : normalUAValue;\n        }\n        headers[_constants__WEBPACK_IMPORTED_MODULE_2__.USER_AGENT] = sdkUserAgentValue;\n    }\n    else {\n        headers[_constants__WEBPACK_IMPORTED_MODULE_2__.X_AMZ_USER_AGENT] = sdkUserAgentValue;\n    }\n    return next({\n        ...args,\n        request,\n    });\n};\nconst escapeUserAgent = (userAgentPair) => {\n    const name = userAgentPair[0]\n        .split(_constants__WEBPACK_IMPORTED_MODULE_2__.UA_NAME_SEPARATOR)\n        .map((part) => part.replace(_constants__WEBPACK_IMPORTED_MODULE_2__.UA_NAME_ESCAPE_REGEX, _constants__WEBPACK_IMPORTED_MODULE_2__.UA_ESCAPE_CHAR))\n        .join(_constants__WEBPACK_IMPORTED_MODULE_2__.UA_NAME_SEPARATOR);\n    const version = userAgentPair[1]?.replace(_constants__WEBPACK_IMPORTED_MODULE_2__.UA_VALUE_ESCAPE_REGEX, _constants__WEBPACK_IMPORTED_MODULE_2__.UA_ESCAPE_CHAR);\n    const prefixSeparatorIndex = name.indexOf(_constants__WEBPACK_IMPORTED_MODULE_2__.UA_NAME_SEPARATOR);\n    const prefix = name.substring(0, prefixSeparatorIndex);\n    let uaName = name.substring(prefixSeparatorIndex + 1);\n    if (prefix === \"api\") {\n        uaName = uaName.toLowerCase();\n    }\n    return [prefix, uaName, version]\n        .filter((item) => item && item.length > 0)\n        .reduce((acc, item, index) => {\n        switch (index) {\n            case 0:\n                return item;\n            case 1:\n                return `${acc}/${item}`;\n            default:\n                return `${acc}#${item}`;\n        }\n    }, \"\");\n};\nconst getUserAgentMiddlewareOptions = {\n    name: \"getUserAgentMiddleware\",\n    step: \"build\",\n    priority: \"low\",\n    tags: [\"SET_USER_AGENT\", \"USER_AGENT\"],\n    override: true,\n};\nconst getUserAgentPlugin = (config) => ({\n    applyToStack: (clientStack) => {\n        clientStack.add(userAgentMiddleware(config), getUserAgentMiddlewareOptions);\n    },\n});\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/middleware-user-agent/dist-es/user-agent-middleware.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/region-config-resolver/dist-es/extensions/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@aws-sdk/region-config-resolver/dist-es/extensions/index.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAwsRegionExtensionConfiguration: () => (/* binding */ getAwsRegionExtensionConfiguration),\n/* harmony export */   resolveAwsRegionExtensionConfiguration: () => (/* binding */ resolveAwsRegionExtensionConfiguration)\n/* harmony export */ });\nconst getAwsRegionExtensionConfiguration = (runtimeConfig) => {\n    let runtimeConfigRegion = async () => {\n        if (runtimeConfig.region === undefined) {\n            throw new Error(\"Region is missing from runtimeConfig\");\n        }\n        const region = runtimeConfig.region;\n        if (typeof region === \"string\") {\n            return region;\n        }\n        return region();\n    };\n    return {\n        setRegion(region) {\n            runtimeConfigRegion = region;\n        },\n        region() {\n            return runtimeConfigRegion;\n        },\n    };\n};\nconst resolveAwsRegionExtensionConfiguration = (awsRegionExtensionConfiguration) => {\n    return {\n        region: awsRegionExtensionConfiguration.region(),\n    };\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/region-config-resolver/dist-es/extensions/index.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/region-config-resolver/dist-es/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@aws-sdk/region-config-resolver/dist-es/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NODE_REGION_CONFIG_FILE_OPTIONS: () => (/* reexport safe */ _regionConfig__WEBPACK_IMPORTED_MODULE_1__.NODE_REGION_CONFIG_FILE_OPTIONS),\n/* harmony export */   NODE_REGION_CONFIG_OPTIONS: () => (/* reexport safe */ _regionConfig__WEBPACK_IMPORTED_MODULE_1__.NODE_REGION_CONFIG_OPTIONS),\n/* harmony export */   REGION_ENV_NAME: () => (/* reexport safe */ _regionConfig__WEBPACK_IMPORTED_MODULE_1__.REGION_ENV_NAME),\n/* harmony export */   REGION_INI_NAME: () => (/* reexport safe */ _regionConfig__WEBPACK_IMPORTED_MODULE_1__.REGION_INI_NAME),\n/* harmony export */   getAwsRegionExtensionConfiguration: () => (/* reexport safe */ _extensions__WEBPACK_IMPORTED_MODULE_0__.getAwsRegionExtensionConfiguration),\n/* harmony export */   resolveAwsRegionExtensionConfiguration: () => (/* reexport safe */ _extensions__WEBPACK_IMPORTED_MODULE_0__.resolveAwsRegionExtensionConfiguration),\n/* harmony export */   resolveRegionConfig: () => (/* reexport safe */ _regionConfig__WEBPACK_IMPORTED_MODULE_1__.resolveRegionConfig)\n/* harmony export */ });\n/* harmony import */ var _extensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extensions */ \"./node_modules/@aws-sdk/region-config-resolver/dist-es/extensions/index.js\");\n/* harmony import */ var _regionConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./regionConfig */ \"./node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/index.js\");\n\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/region-config-resolver/dist-es/index.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/config.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/config.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NODE_REGION_CONFIG_FILE_OPTIONS: () => (/* binding */ NODE_REGION_CONFIG_FILE_OPTIONS),\n/* harmony export */   NODE_REGION_CONFIG_OPTIONS: () => (/* binding */ NODE_REGION_CONFIG_OPTIONS),\n/* harmony export */   REGION_ENV_NAME: () => (/* binding */ REGION_ENV_NAME),\n/* harmony export */   REGION_INI_NAME: () => (/* binding */ REGION_INI_NAME)\n/* harmony export */ });\nconst REGION_ENV_NAME = \"AWS_REGION\";\nconst REGION_INI_NAME = \"region\";\nconst NODE_REGION_CONFIG_OPTIONS = {\n    environmentVariableSelector: (env) => env[REGION_ENV_NAME],\n    configFileSelector: (profile) => profile[REGION_INI_NAME],\n    default: () => {\n        throw new Error(\"Region is missing\");\n    },\n};\nconst NODE_REGION_CONFIG_FILE_OPTIONS = {\n    preferredFile: \"credentials\",\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/config.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/getRealRegion.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/getRealRegion.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getRealRegion: () => (/* binding */ getRealRegion)\n/* harmony export */ });\n/* harmony import */ var _isFipsRegion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFipsRegion */ \"./node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/isFipsRegion.js\");\n\nconst getRealRegion = (region) => (0,_isFipsRegion__WEBPACK_IMPORTED_MODULE_0__.isFipsRegion)(region)\n    ? [\"fips-aws-global\", \"aws-fips\"].includes(region)\n        ? \"us-east-1\"\n        : region.replace(/fips-(dkr-|prod-)?|-fips/, \"\")\n    : region;\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/getRealRegion.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/index.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NODE_REGION_CONFIG_FILE_OPTIONS: () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_0__.NODE_REGION_CONFIG_FILE_OPTIONS),\n/* harmony export */   NODE_REGION_CONFIG_OPTIONS: () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_0__.NODE_REGION_CONFIG_OPTIONS),\n/* harmony export */   REGION_ENV_NAME: () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_0__.REGION_ENV_NAME),\n/* harmony export */   REGION_INI_NAME: () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_0__.REGION_INI_NAME),\n/* harmony export */   resolveRegionConfig: () => (/* reexport safe */ _resolveRegionConfig__WEBPACK_IMPORTED_MODULE_1__.resolveRegionConfig)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/config.js\");\n/* harmony import */ var _resolveRegionConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resolveRegionConfig */ \"./node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/resolveRegionConfig.js\");\n\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/index.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/isFipsRegion.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/isFipsRegion.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isFipsRegion: () => (/* binding */ isFipsRegion)\n/* harmony export */ });\nconst isFipsRegion = (region) => typeof region === \"string\" && (region.startsWith(\"fips-\") || region.endsWith(\"-fips\"));\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/isFipsRegion.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/resolveRegionConfig.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/resolveRegionConfig.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   resolveRegionConfig: () => (/* binding */ resolveRegionConfig)\n/* harmony export */ });\n/* harmony import */ var _getRealRegion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getRealRegion */ \"./node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/getRealRegion.js\");\n/* harmony import */ var _isFipsRegion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFipsRegion */ \"./node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/isFipsRegion.js\");\n\n\nconst resolveRegionConfig = (input) => {\n    const { region, useFipsEndpoint } = input;\n    if (!region) {\n        throw new Error(\"Region is missing\");\n    }\n    return {\n        ...input,\n        region: async () => {\n            if (typeof region === \"string\") {\n                return (0,_getRealRegion__WEBPACK_IMPORTED_MODULE_0__.getRealRegion)(region);\n            }\n            const providedRegion = await region();\n            return (0,_getRealRegion__WEBPACK_IMPORTED_MODULE_0__.getRealRegion)(providedRegion);\n        },\n        useFipsEndpoint: async () => {\n            const providedRegion = typeof region === \"string\" ? region : await region();\n            if ((0,_isFipsRegion__WEBPACK_IMPORTED_MODULE_1__.isFipsRegion)(providedRegion)) {\n                return true;\n            }\n            return typeof useFipsEndpoint !== \"function\" ? Promise.resolve(!!useFipsEndpoint) : useFipsEndpoint();\n        },\n    };\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/resolveRegionConfig.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/aws.js":
/*!*************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/aws.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   awsEndpointFunctions: () => (/* binding */ awsEndpointFunctions)\n/* harmony export */ });\n/* harmony import */ var _smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-endpoints */ \"./node_modules/@smithy/util-endpoints/dist-es/index.js\");\n/* harmony import */ var _lib_aws_isVirtualHostableS3Bucket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/aws/isVirtualHostableS3Bucket */ \"./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/isVirtualHostableS3Bucket.js\");\n/* harmony import */ var _lib_aws_parseArn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/aws/parseArn */ \"./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/parseArn.js\");\n/* harmony import */ var _lib_aws_partition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/aws/partition */ \"./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partition.js\");\n\n\n\n\nconst awsEndpointFunctions = {\n    isVirtualHostableS3Bucket: _lib_aws_isVirtualHostableS3Bucket__WEBPACK_IMPORTED_MODULE_1__.isVirtualHostableS3Bucket,\n    parseArn: _lib_aws_parseArn__WEBPACK_IMPORTED_MODULE_2__.parseArn,\n    partition: _lib_aws_partition__WEBPACK_IMPORTED_MODULE_3__.partition,\n};\n_smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_0__.customEndpointFunctions.aws = awsEndpointFunctions;\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/util-endpoints/dist-es/aws.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EndpointError: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_4__.EndpointError),\n/* harmony export */   awsEndpointFunctions: () => (/* reexport safe */ _aws__WEBPACK_IMPORTED_MODULE_0__.awsEndpointFunctions),\n/* harmony export */   getUserAgentPrefix: () => (/* reexport safe */ _lib_aws_partition__WEBPACK_IMPORTED_MODULE_1__.getUserAgentPrefix),\n/* harmony export */   isIpAddress: () => (/* reexport safe */ _lib_isIpAddress__WEBPACK_IMPORTED_MODULE_2__.isIpAddress),\n/* harmony export */   partition: () => (/* reexport safe */ _lib_aws_partition__WEBPACK_IMPORTED_MODULE_1__.partition),\n/* harmony export */   resolveEndpoint: () => (/* reexport safe */ _resolveEndpoint__WEBPACK_IMPORTED_MODULE_3__.resolveEndpoint),\n/* harmony export */   setPartitionInfo: () => (/* reexport safe */ _lib_aws_partition__WEBPACK_IMPORTED_MODULE_1__.setPartitionInfo),\n/* harmony export */   useDefaultPartitionInfo: () => (/* reexport safe */ _lib_aws_partition__WEBPACK_IMPORTED_MODULE_1__.useDefaultPartitionInfo)\n/* harmony export */ });\n/* harmony import */ var _aws__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aws */ \"./node_modules/@aws-sdk/util-endpoints/dist-es/aws.js\");\n/* harmony import */ var _lib_aws_partition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/aws/partition */ \"./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partition.js\");\n/* harmony import */ var _lib_isIpAddress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/isIpAddress */ \"./node_modules/@aws-sdk/util-endpoints/dist-es/lib/isIpAddress.js\");\n/* harmony import */ var _resolveEndpoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolveEndpoint */ \"./node_modules/@aws-sdk/util-endpoints/dist-es/resolveEndpoint.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ \"./node_modules/@aws-sdk/util-endpoints/dist-es/types/index.js\");\n\n\n\n\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/util-endpoints/dist-es/index.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/isVirtualHostableS3Bucket.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/isVirtualHostableS3Bucket.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isVirtualHostableS3Bucket: () => (/* binding */ isVirtualHostableS3Bucket)\n/* harmony export */ });\n/* harmony import */ var _smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-endpoints */ \"./node_modules/@smithy/util-endpoints/dist-es/index.js\");\n/* harmony import */ var _isIpAddress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isIpAddress */ \"./node_modules/@aws-sdk/util-endpoints/dist-es/lib/isIpAddress.js\");\n\n\nconst isVirtualHostableS3Bucket = (value, allowSubDomains = false) => {\n    if (allowSubDomains) {\n        for (const label of value.split(\".\")) {\n            if (!isVirtualHostableS3Bucket(label)) {\n                return false;\n            }\n        }\n        return true;\n    }\n    if (!(0,_smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_0__.isValidHostLabel)(value)) {\n        return false;\n    }\n    if (value.length < 3 || value.length > 63) {\n        return false;\n    }\n    if (value !== value.toLowerCase()) {\n        return false;\n    }\n    if ((0,_isIpAddress__WEBPACK_IMPORTED_MODULE_1__.isIpAddress)(value)) {\n        return false;\n    }\n    return true;\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/isVirtualHostableS3Bucket.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/parseArn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/parseArn.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   parseArn: () => (/* binding */ parseArn)\n/* harmony export */ });\nconst parseArn = (value) => {\n    const segments = value.split(\":\");\n    if (segments.length < 6)\n        return null;\n    const [arn, partition, service, region, accountId, ...resourceId] = segments;\n    if (arn !== \"arn\" || partition === \"\" || service === \"\" || resourceId[0] === \"\")\n        return null;\n    return {\n        partition,\n        service,\n        region,\n        accountId,\n        resourceId: resourceId[0].includes(\"/\") ? resourceId[0].split(\"/\") : resourceId,\n    };\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/parseArn.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partition.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partition.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getUserAgentPrefix: () => (/* binding */ getUserAgentPrefix),\n/* harmony export */   partition: () => (/* binding */ partition),\n/* harmony export */   setPartitionInfo: () => (/* binding */ setPartitionInfo),\n/* harmony export */   useDefaultPartitionInfo: () => (/* binding */ useDefaultPartitionInfo)\n/* harmony export */ });\n/* harmony import */ var _partitions_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partitions.json */ \"./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partitions.json\");\n\nlet selectedPartitionsInfo = _partitions_json__WEBPACK_IMPORTED_MODULE_0__;\nlet selectedUserAgentPrefix = \"\";\nconst partition = (value) => {\n    const { partitions } = selectedPartitionsInfo;\n    for (const partition of partitions) {\n        const { regions, outputs } = partition;\n        for (const [region, regionData] of Object.entries(regions)) {\n            if (region === value) {\n                return {\n                    ...outputs,\n                    ...regionData,\n                };\n            }\n        }\n    }\n    for (const partition of partitions) {\n        const { regionRegex, outputs } = partition;\n        if (new RegExp(regionRegex).test(value)) {\n            return {\n                ...outputs,\n            };\n        }\n    }\n    const DEFAULT_PARTITION = partitions.find((partition) => partition.id === \"aws\");\n    if (!DEFAULT_PARTITION) {\n        throw new Error(\"Provided region was not found in the partition array or regex,\" +\n            \" and default partition with id 'aws' doesn't exist.\");\n    }\n    return {\n        ...DEFAULT_PARTITION.outputs,\n    };\n};\nconst setPartitionInfo = (partitionsInfo, userAgentPrefix = \"\") => {\n    selectedPartitionsInfo = partitionsInfo;\n    selectedUserAgentPrefix = userAgentPrefix;\n};\nconst useDefaultPartitionInfo = () => {\n    setPartitionInfo(_partitions_json__WEBPACK_IMPORTED_MODULE_0__, \"\");\n};\nconst getUserAgentPrefix = () => selectedUserAgentPrefix;\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partition.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/lib/isIpAddress.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/isIpAddress.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isIpAddress: () => (/* reexport safe */ _smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_0__.isIpAddress)\n/* harmony export */ });\n/* harmony import */ var _smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-endpoints */ \"./node_modules/@smithy/util-endpoints/dist-es/index.js\");\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/util-endpoints/dist-es/lib/isIpAddress.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/resolveEndpoint.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/resolveEndpoint.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   resolveEndpoint: () => (/* reexport safe */ _smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_0__.resolveEndpoint)\n/* harmony export */ });\n/* harmony import */ var _smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-endpoints */ \"./node_modules/@smithy/util-endpoints/dist-es/index.js\");\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/util-endpoints/dist-es/resolveEndpoint.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointError.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointError.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EndpointError: () => (/* reexport safe */ _smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_0__.EndpointError)\n/* harmony export */ });\n/* harmony import */ var _smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-endpoints */ \"./node_modules/@smithy/util-endpoints/dist-es/index.js\");\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointError.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointRuleObject.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointRuleObject.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointRuleObject.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/types/ErrorRuleObject.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/types/ErrorRuleObject.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/util-endpoints/dist-es/types/ErrorRuleObject.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/types/RuleSetObject.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/types/RuleSetObject.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/util-endpoints/dist-es/types/RuleSetObject.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/types/TreeRuleObject.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/types/TreeRuleObject.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/util-endpoints/dist-es/types/TreeRuleObject.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/types/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/types/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EndpointError: () => (/* reexport safe */ _EndpointError__WEBPACK_IMPORTED_MODULE_0__.EndpointError)\n/* harmony export */ });\n/* harmony import */ var _EndpointError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EndpointError */ \"./node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointError.js\");\n/* harmony import */ var _EndpointRuleObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EndpointRuleObject */ \"./node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointRuleObject.js\");\n/* harmony import */ var _ErrorRuleObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ErrorRuleObject */ \"./node_modules/@aws-sdk/util-endpoints/dist-es/types/ErrorRuleObject.js\");\n/* harmony import */ var _RuleSetObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RuleSetObject */ \"./node_modules/@aws-sdk/util-endpoints/dist-es/types/RuleSetObject.js\");\n/* harmony import */ var _TreeRuleObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TreeRuleObject */ \"./node_modules/@aws-sdk/util-endpoints/dist-es/types/TreeRuleObject.js\");\n/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared */ \"./node_modules/@aws-sdk/util-endpoints/dist-es/types/shared.js\");\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/util-endpoints/dist-es/types/index.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/types/shared.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/types/shared.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/util-endpoints/dist-es/types/shared.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/util-locate-window/dist-es/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-locate-window/dist-es/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   locateWindow: () => (/* binding */ locateWindow)\n/* harmony export */ });\nconst fallbackWindow = {};\nfunction locateWindow() {\n    if (typeof window !== \"undefined\") {\n        return window;\n    }\n    else if (typeof self !== \"undefined\") {\n        return self;\n    }\n    return fallbackWindow;\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/util-locate-window/dist-es/index.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/util-user-agent-browser/dist-es/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-user-agent-browser/dist-es/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   defaultUserAgent: () => (/* binding */ defaultUserAgent)\n/* harmony export */ });\n/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bowser */ \"./node_modules/bowser/es5.js\");\n/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_0__);\n\nconst defaultUserAgent = ({ serviceId, clientVersion }) => async () => {\n    const parsedUA = typeof window !== \"undefined\" && window?.navigator?.userAgent\n        ? bowser__WEBPACK_IMPORTED_MODULE_0___default().parse(window.navigator.userAgent)\n        : undefined;\n    const sections = [\n        [\"aws-sdk-js\", clientVersion],\n        [\"ua\", \"2.0\"],\n        [`os/${parsedUA?.os?.name || \"other\"}`, parsedUA?.os?.version],\n        [\"lang/js\"],\n        [\"md/browser\", `${parsedUA?.browser?.name ?? \"unknown\"}_${parsedUA?.browser?.version ?? \"unknown\"}`],\n    ];\n    if (serviceId) {\n        sections.push([`api/${serviceId}`, clientVersion]);\n    }\n    return sections;\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/util-user-agent-browser/dist-es/index.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/util-utf8-browser/dist-es/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-utf8-browser/dist-es/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromUtf8: () => (/* binding */ fromUtf8),\n/* harmony export */   toUtf8: () => (/* binding */ toUtf8)\n/* harmony export */ });\n/* harmony import */ var _pureJs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pureJs */ \"./node_modules/@aws-sdk/util-utf8-browser/dist-es/pureJs.js\");\n/* harmony import */ var _whatwgEncodingApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./whatwgEncodingApi */ \"./node_modules/@aws-sdk/util-utf8-browser/dist-es/whatwgEncodingApi.js\");\n\n\nconst fromUtf8 = (input) => typeof TextEncoder === \"function\" ? (0,_whatwgEncodingApi__WEBPACK_IMPORTED_MODULE_1__.fromUtf8)(input) : (0,_pureJs__WEBPACK_IMPORTED_MODULE_0__.fromUtf8)(input);\nconst toUtf8 = (input) => typeof TextDecoder === \"function\" ? (0,_whatwgEncodingApi__WEBPACK_IMPORTED_MODULE_1__.toUtf8)(input) : (0,_pureJs__WEBPACK_IMPORTED_MODULE_0__.toUtf8)(input);\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/util-utf8-browser/dist-es/index.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/util-utf8-browser/dist-es/pureJs.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-utf8-browser/dist-es/pureJs.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromUtf8: () => (/* binding */ fromUtf8),\n/* harmony export */   toUtf8: () => (/* binding */ toUtf8)\n/* harmony export */ });\nconst fromUtf8 = (input) => {\n    const bytes = [];\n    for (let i = 0, len = input.length; i < len; i++) {\n        const value = input.charCodeAt(i);\n        if (value < 0x80) {\n            bytes.push(value);\n        }\n        else if (value < 0x800) {\n            bytes.push((value >> 6) | 0b11000000, (value & 0b111111) | 0b10000000);\n        }\n        else if (i + 1 < input.length && (value & 0xfc00) === 0xd800 && (input.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {\n            const surrogatePair = 0x10000 + ((value & 0b1111111111) << 10) + (input.charCodeAt(++i) & 0b1111111111);\n            bytes.push((surrogatePair >> 18) | 0b11110000, ((surrogatePair >> 12) & 0b111111) | 0b10000000, ((surrogatePair >> 6) & 0b111111) | 0b10000000, (surrogatePair & 0b111111) | 0b10000000);\n        }\n        else {\n            bytes.push((value >> 12) | 0b11100000, ((value >> 6) & 0b111111) | 0b10000000, (value & 0b111111) | 0b10000000);\n        }\n    }\n    return Uint8Array.from(bytes);\n};\nconst toUtf8 = (input) => {\n    let decoded = \"\";\n    for (let i = 0, len = input.length; i < len; i++) {\n        const byte = input[i];\n        if (byte < 0x80) {\n            decoded += String.fromCharCode(byte);\n        }\n        else if (0b11000000 <= byte && byte < 0b11100000) {\n            const nextByte = input[++i];\n            decoded += String.fromCharCode(((byte & 0b11111) << 6) | (nextByte & 0b111111));\n        }\n        else if (0b11110000 <= byte && byte < 0b101101101) {\n            const surrogatePair = [byte, input[++i], input[++i], input[++i]];\n            const encoded = \"%\" + surrogatePair.map((byteValue) => byteValue.toString(16)).join(\"%\");\n            decoded += decodeURIComponent(encoded);\n        }\n        else {\n            decoded += String.fromCharCode(((byte & 0b1111) << 12) | ((input[++i] & 0b111111) << 6) | (input[++i] & 0b111111));\n        }\n    }\n    return decoded;\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/util-utf8-browser/dist-es/pureJs.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/util-utf8-browser/dist-es/whatwgEncodingApi.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-utf8-browser/dist-es/whatwgEncodingApi.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromUtf8: () => (/* binding */ fromUtf8),\n/* harmony export */   toUtf8: () => (/* binding */ toUtf8)\n/* harmony export */ });\nfunction fromUtf8(input) {\n    return new TextEncoder().encode(input);\n}\nfunction toUtf8(input) {\n    return new TextDecoder(\"utf-8\").decode(input);\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/util-utf8-browser/dist-es/whatwgEncodingApi.js?");

/***/ }),

/***/ "./node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseDualstackEndpointConfigOptions.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseDualstackEndpointConfigOptions.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CONFIG_USE_DUALSTACK_ENDPOINT: () => (/* binding */ CONFIG_USE_DUALSTACK_ENDPOINT),\n/* harmony export */   DEFAULT_USE_DUALSTACK_ENDPOINT: () => (/* binding */ DEFAULT_USE_DUALSTACK_ENDPOINT),\n/* harmony export */   ENV_USE_DUALSTACK_ENDPOINT: () => (/* binding */ ENV_USE_DUALSTACK_ENDPOINT),\n/* harmony export */   NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS: () => (/* binding */ NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS)\n/* harmony export */ });\n/* harmony import */ var _smithy_util_config_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-config-provider */ \"./node_modules/@smithy/util-config-provider/dist-es/index.js\");\n\nconst ENV_USE_DUALSTACK_ENDPOINT = \"AWS_USE_DUALSTACK_ENDPOINT\";\nconst CONFIG_USE_DUALSTACK_ENDPOINT = \"use_dualstack_endpoint\";\nconst DEFAULT_USE_DUALSTACK_ENDPOINT = false;\nconst NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS = {\n    environmentVariableSelector: (env) => (0,_smithy_util_config_provider__WEBPACK_IMPORTED_MODULE_0__.booleanSelector)(env, ENV_USE_DUALSTACK_ENDPOINT, _smithy_util_config_provider__WEBPACK_IMPORTED_MODULE_0__.SelectorType.ENV),\n    configFileSelector: (profile) => (0,_smithy_util_config_provider__WEBPACK_IMPORTED_MODULE_0__.booleanSelector)(profile, CONFIG_USE_DUALSTACK_ENDPOINT, _smithy_util_config_provider__WEBPACK_IMPORTED_MODULE_0__.SelectorType.CONFIG),\n    default: false,\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseDualstackEndpointConfigOptions.js?");

/***/ }),

/***/ "./node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseFipsEndpointConfigOptions.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseFipsEndpointConfigOptions.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CONFIG_USE_FIPS_ENDPOINT: () => (/* binding */ CONFIG_USE_FIPS_ENDPOINT),\n/* harmony export */   DEFAULT_USE_FIPS_ENDPOINT: () => (/* binding */ DEFAULT_USE_FIPS_ENDPOINT),\n/* harmony export */   ENV_USE_FIPS_ENDPOINT: () => (/* binding */ ENV_USE_FIPS_ENDPOINT),\n/* harmony export */   NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS: () => (/* binding */ NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS)\n/* harmony export */ });\n/* harmony import */ var _smithy_util_config_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-config-provider */ \"./node_modules/@smithy/util-config-provider/dist-es/index.js\");\n\nconst ENV_USE_FIPS_ENDPOINT = \"AWS_USE_FIPS_ENDPOINT\";\nconst CONFIG_USE_FIPS_ENDPOINT = \"use_fips_endpoint\";\nconst DEFAULT_USE_FIPS_ENDPOINT = false;\nconst NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS = {\n    environmentVariableSelector: (env) => (0,_smithy_util_config_provider__WEBPACK_IMPORTED_MODULE_0__.booleanSelector)(env, ENV_USE_FIPS_ENDPOINT, _smithy_util_config_provider__WEBPACK_IMPORTED_MODULE_0__.SelectorType.ENV),\n    configFileSelector: (profile) => (0,_smithy_util_config_provider__WEBPACK_IMPORTED_MODULE_0__.booleanSelector)(profile, CONFIG_USE_FIPS_ENDPOINT, _smithy_util_config_provider__WEBPACK_IMPORTED_MODULE_0__.SelectorType.CONFIG),\n    default: false,\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseFipsEndpointConfigOptions.js?");

/***/ }),

/***/ "./node_modules/@smithy/config-resolver/dist-es/endpointsConfig/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@smithy/config-resolver/dist-es/endpointsConfig/index.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CONFIG_USE_DUALSTACK_ENDPOINT: () => (/* reexport safe */ _NodeUseDualstackEndpointConfigOptions__WEBPACK_IMPORTED_MODULE_0__.CONFIG_USE_DUALSTACK_ENDPOINT),\n/* harmony export */   CONFIG_USE_FIPS_ENDPOINT: () => (/* reexport safe */ _NodeUseFipsEndpointConfigOptions__WEBPACK_IMPORTED_MODULE_1__.CONFIG_USE_FIPS_ENDPOINT),\n/* harmony export */   DEFAULT_USE_DUALSTACK_ENDPOINT: () => (/* reexport safe */ _NodeUseDualstackEndpointConfigOptions__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_USE_DUALSTACK_ENDPOINT),\n/* harmony export */   DEFAULT_USE_FIPS_ENDPOINT: () => (/* reexport safe */ _NodeUseFipsEndpointConfigOptions__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_USE_FIPS_ENDPOINT),\n/* harmony export */   ENV_USE_DUALSTACK_ENDPOINT: () => (/* reexport safe */ _NodeUseDualstackEndpointConfigOptions__WEBPACK_IMPORTED_MODULE_0__.ENV_USE_DUALSTACK_ENDPOINT),\n/* harmony export */   ENV_USE_FIPS_ENDPOINT: () => (/* reexport safe */ _NodeUseFipsEndpointConfigOptions__WEBPACK_IMPORTED_MODULE_1__.ENV_USE_FIPS_ENDPOINT),\n/* harmony export */   NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS: () => (/* reexport safe */ _NodeUseDualstackEndpointConfigOptions__WEBPACK_IMPORTED_MODULE_0__.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),\n/* harmony export */   NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS: () => (/* reexport safe */ _NodeUseFipsEndpointConfigOptions__WEBPACK_IMPORTED_MODULE_1__.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS),\n/* harmony export */   resolveCustomEndpointsConfig: () => (/* reexport safe */ _resolveCustomEndpointsConfig__WEBPACK_IMPORTED_MODULE_2__.resolveCustomEndpointsConfig),\n/* harmony export */   resolveEndpointsConfig: () => (/* reexport safe */ _resolveEndpointsConfig__WEBPACK_IMPORTED_MODULE_3__.resolveEndpointsConfig)\n/* harmony export */ });\n/* harmony import */ var _NodeUseDualstackEndpointConfigOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NodeUseDualstackEndpointConfigOptions */ \"./node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseDualstackEndpointConfigOptions.js\");\n/* harmony import */ var _NodeUseFipsEndpointConfigOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NodeUseFipsEndpointConfigOptions */ \"./node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseFipsEndpointConfigOptions.js\");\n/* harmony import */ var _resolveCustomEndpointsConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolveCustomEndpointsConfig */ \"./node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveCustomEndpointsConfig.js\");\n/* harmony import */ var _resolveEndpointsConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolveEndpointsConfig */ \"./node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveEndpointsConfig.js\");\n\n\n\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/config-resolver/dist-es/endpointsConfig/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveCustomEndpointsConfig.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveCustomEndpointsConfig.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   resolveCustomEndpointsConfig: () => (/* binding */ resolveCustomEndpointsConfig)\n/* harmony export */ });\n/* harmony import */ var _smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-middleware */ \"./node_modules/@smithy/util-middleware/dist-es/index.js\");\n\nconst resolveCustomEndpointsConfig = (input) => {\n    const { endpoint, urlParser } = input;\n    return {\n        ...input,\n        tls: input.tls ?? true,\n        endpoint: (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(typeof endpoint === \"string\" ? urlParser(endpoint) : endpoint),\n        isCustomEndpoint: true,\n        useDualstackEndpoint: (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(input.useDualstackEndpoint ?? false),\n    };\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveCustomEndpointsConfig.js?");

/***/ }),

/***/ "./node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveEndpointsConfig.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveEndpointsConfig.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   resolveEndpointsConfig: () => (/* binding */ resolveEndpointsConfig)\n/* harmony export */ });\n/* harmony import */ var _smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-middleware */ \"./node_modules/@smithy/util-middleware/dist-es/index.js\");\n/* harmony import */ var _utils_getEndpointFromRegion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/getEndpointFromRegion */ \"./node_modules/@smithy/config-resolver/dist-es/endpointsConfig/utils/getEndpointFromRegion.js\");\n\n\nconst resolveEndpointsConfig = (input) => {\n    const useDualstackEndpoint = (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(input.useDualstackEndpoint ?? false);\n    const { endpoint, useFipsEndpoint, urlParser } = input;\n    return {\n        ...input,\n        tls: input.tls ?? true,\n        endpoint: endpoint\n            ? (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(typeof endpoint === \"string\" ? urlParser(endpoint) : endpoint)\n            : () => (0,_utils_getEndpointFromRegion__WEBPACK_IMPORTED_MODULE_1__.getEndpointFromRegion)({ ...input, useDualstackEndpoint, useFipsEndpoint }),\n        isCustomEndpoint: !!endpoint,\n        useDualstackEndpoint,\n    };\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveEndpointsConfig.js?");

/***/ }),

/***/ "./node_modules/@smithy/config-resolver/dist-es/endpointsConfig/utils/getEndpointFromRegion.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@smithy/config-resolver/dist-es/endpointsConfig/utils/getEndpointFromRegion.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getEndpointFromRegion: () => (/* binding */ getEndpointFromRegion)\n/* harmony export */ });\nconst getEndpointFromRegion = async (input) => {\n    const { tls = true } = input;\n    const region = await input.region();\n    const dnsHostRegex = new RegExp(/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/);\n    if (!dnsHostRegex.test(region)) {\n        throw new Error(\"Invalid region in client config\");\n    }\n    const useDualstackEndpoint = await input.useDualstackEndpoint();\n    const useFipsEndpoint = await input.useFipsEndpoint();\n    const { hostname } = (await input.regionInfoProvider(region, { useDualstackEndpoint, useFipsEndpoint })) ?? {};\n    if (!hostname) {\n        throw new Error(\"Cannot resolve hostname from client config\");\n    }\n    return input.urlParser(`${tls ? \"https:\" : \"http:\"}//${hostname}`);\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/config-resolver/dist-es/endpointsConfig/utils/getEndpointFromRegion.js?");

/***/ }),

/***/ "./node_modules/@smithy/config-resolver/dist-es/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@smithy/config-resolver/dist-es/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CONFIG_USE_DUALSTACK_ENDPOINT: () => (/* reexport safe */ _endpointsConfig__WEBPACK_IMPORTED_MODULE_0__.CONFIG_USE_DUALSTACK_ENDPOINT),\n/* harmony export */   CONFIG_USE_FIPS_ENDPOINT: () => (/* reexport safe */ _endpointsConfig__WEBPACK_IMPORTED_MODULE_0__.CONFIG_USE_FIPS_ENDPOINT),\n/* harmony export */   DEFAULT_USE_DUALSTACK_ENDPOINT: () => (/* reexport safe */ _endpointsConfig__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_USE_DUALSTACK_ENDPOINT),\n/* harmony export */   DEFAULT_USE_FIPS_ENDPOINT: () => (/* reexport safe */ _endpointsConfig__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_USE_FIPS_ENDPOINT),\n/* harmony export */   ENV_USE_DUALSTACK_ENDPOINT: () => (/* reexport safe */ _endpointsConfig__WEBPACK_IMPORTED_MODULE_0__.ENV_USE_DUALSTACK_ENDPOINT),\n/* harmony export */   ENV_USE_FIPS_ENDPOINT: () => (/* reexport safe */ _endpointsConfig__WEBPACK_IMPORTED_MODULE_0__.ENV_USE_FIPS_ENDPOINT),\n/* harmony export */   NODE_REGION_CONFIG_FILE_OPTIONS: () => (/* reexport safe */ _regionConfig__WEBPACK_IMPORTED_MODULE_1__.NODE_REGION_CONFIG_FILE_OPTIONS),\n/* harmony export */   NODE_REGION_CONFIG_OPTIONS: () => (/* reexport safe */ _regionConfig__WEBPACK_IMPORTED_MODULE_1__.NODE_REGION_CONFIG_OPTIONS),\n/* harmony export */   NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS: () => (/* reexport safe */ _endpointsConfig__WEBPACK_IMPORTED_MODULE_0__.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),\n/* harmony export */   NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS: () => (/* reexport safe */ _endpointsConfig__WEBPACK_IMPORTED_MODULE_0__.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS),\n/* harmony export */   REGION_ENV_NAME: () => (/* reexport safe */ _regionConfig__WEBPACK_IMPORTED_MODULE_1__.REGION_ENV_NAME),\n/* harmony export */   REGION_INI_NAME: () => (/* reexport safe */ _regionConfig__WEBPACK_IMPORTED_MODULE_1__.REGION_INI_NAME),\n/* harmony export */   getRegionInfo: () => (/* reexport safe */ _regionInfo__WEBPACK_IMPORTED_MODULE_2__.getRegionInfo),\n/* harmony export */   resolveCustomEndpointsConfig: () => (/* reexport safe */ _endpointsConfig__WEBPACK_IMPORTED_MODULE_0__.resolveCustomEndpointsConfig),\n/* harmony export */   resolveEndpointsConfig: () => (/* reexport safe */ _endpointsConfig__WEBPACK_IMPORTED_MODULE_0__.resolveEndpointsConfig),\n/* harmony export */   resolveRegionConfig: () => (/* reexport safe */ _regionConfig__WEBPACK_IMPORTED_MODULE_1__.resolveRegionConfig)\n/* harmony export */ });\n/* harmony import */ var _endpointsConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./endpointsConfig */ \"./node_modules/@smithy/config-resolver/dist-es/endpointsConfig/index.js\");\n/* harmony import */ var _regionConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./regionConfig */ \"./node_modules/@smithy/config-resolver/dist-es/regionConfig/index.js\");\n/* harmony import */ var _regionInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./regionInfo */ \"./node_modules/@smithy/config-resolver/dist-es/regionInfo/index.js\");\n\n\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/config-resolver/dist-es/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/config-resolver/dist-es/regionConfig/config.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@smithy/config-resolver/dist-es/regionConfig/config.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NODE_REGION_CONFIG_FILE_OPTIONS: () => (/* binding */ NODE_REGION_CONFIG_FILE_OPTIONS),\n/* harmony export */   NODE_REGION_CONFIG_OPTIONS: () => (/* binding */ NODE_REGION_CONFIG_OPTIONS),\n/* harmony export */   REGION_ENV_NAME: () => (/* binding */ REGION_ENV_NAME),\n/* harmony export */   REGION_INI_NAME: () => (/* binding */ REGION_INI_NAME)\n/* harmony export */ });\nconst REGION_ENV_NAME = \"AWS_REGION\";\nconst REGION_INI_NAME = \"region\";\nconst NODE_REGION_CONFIG_OPTIONS = {\n    environmentVariableSelector: (env) => env[REGION_ENV_NAME],\n    configFileSelector: (profile) => profile[REGION_INI_NAME],\n    default: () => {\n        throw new Error(\"Region is missing\");\n    },\n};\nconst NODE_REGION_CONFIG_FILE_OPTIONS = {\n    preferredFile: \"credentials\",\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/config-resolver/dist-es/regionConfig/config.js?");

/***/ }),

/***/ "./node_modules/@smithy/config-resolver/dist-es/regionConfig/getRealRegion.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@smithy/config-resolver/dist-es/regionConfig/getRealRegion.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getRealRegion: () => (/* binding */ getRealRegion)\n/* harmony export */ });\n/* harmony import */ var _isFipsRegion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFipsRegion */ \"./node_modules/@smithy/config-resolver/dist-es/regionConfig/isFipsRegion.js\");\n\nconst getRealRegion = (region) => (0,_isFipsRegion__WEBPACK_IMPORTED_MODULE_0__.isFipsRegion)(region)\n    ? [\"fips-aws-global\", \"aws-fips\"].includes(region)\n        ? \"us-east-1\"\n        : region.replace(/fips-(dkr-|prod-)?|-fips/, \"\")\n    : region;\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/config-resolver/dist-es/regionConfig/getRealRegion.js?");

/***/ }),

/***/ "./node_modules/@smithy/config-resolver/dist-es/regionConfig/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@smithy/config-resolver/dist-es/regionConfig/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NODE_REGION_CONFIG_FILE_OPTIONS: () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_0__.NODE_REGION_CONFIG_FILE_OPTIONS),\n/* harmony export */   NODE_REGION_CONFIG_OPTIONS: () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_0__.NODE_REGION_CONFIG_OPTIONS),\n/* harmony export */   REGION_ENV_NAME: () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_0__.REGION_ENV_NAME),\n/* harmony export */   REGION_INI_NAME: () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_0__.REGION_INI_NAME),\n/* harmony export */   resolveRegionConfig: () => (/* reexport safe */ _resolveRegionConfig__WEBPACK_IMPORTED_MODULE_1__.resolveRegionConfig)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./node_modules/@smithy/config-resolver/dist-es/regionConfig/config.js\");\n/* harmony import */ var _resolveRegionConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resolveRegionConfig */ \"./node_modules/@smithy/config-resolver/dist-es/regionConfig/resolveRegionConfig.js\");\n\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/config-resolver/dist-es/regionConfig/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/config-resolver/dist-es/regionConfig/isFipsRegion.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@smithy/config-resolver/dist-es/regionConfig/isFipsRegion.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isFipsRegion: () => (/* binding */ isFipsRegion)\n/* harmony export */ });\nconst isFipsRegion = (region) => typeof region === \"string\" && (region.startsWith(\"fips-\") || region.endsWith(\"-fips\"));\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/config-resolver/dist-es/regionConfig/isFipsRegion.js?");

/***/ }),

/***/ "./node_modules/@smithy/config-resolver/dist-es/regionConfig/resolveRegionConfig.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@smithy/config-resolver/dist-es/regionConfig/resolveRegionConfig.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   resolveRegionConfig: () => (/* binding */ resolveRegionConfig)\n/* harmony export */ });\n/* harmony import */ var _getRealRegion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getRealRegion */ \"./node_modules/@smithy/config-resolver/dist-es/regionConfig/getRealRegion.js\");\n/* harmony import */ var _isFipsRegion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFipsRegion */ \"./node_modules/@smithy/config-resolver/dist-es/regionConfig/isFipsRegion.js\");\n\n\nconst resolveRegionConfig = (input) => {\n    const { region, useFipsEndpoint } = input;\n    if (!region) {\n        throw new Error(\"Region is missing\");\n    }\n    return {\n        ...input,\n        region: async () => {\n            if (typeof region === \"string\") {\n                return (0,_getRealRegion__WEBPACK_IMPORTED_MODULE_0__.getRealRegion)(region);\n            }\n            const providedRegion = await region();\n            return (0,_getRealRegion__WEBPACK_IMPORTED_MODULE_0__.getRealRegion)(providedRegion);\n        },\n        useFipsEndpoint: async () => {\n            const providedRegion = typeof region === \"string\" ? region : await region();\n            if ((0,_isFipsRegion__WEBPACK_IMPORTED_MODULE_1__.isFipsRegion)(providedRegion)) {\n                return true;\n            }\n            return typeof useFipsEndpoint !== \"function\" ? Promise.resolve(!!useFipsEndpoint) : useFipsEndpoint();\n        },\n    };\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/config-resolver/dist-es/regionConfig/resolveRegionConfig.js?");

/***/ }),

/***/ "./node_modules/@smithy/config-resolver/dist-es/regionInfo/PartitionHash.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@smithy/config-resolver/dist-es/regionInfo/PartitionHash.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/config-resolver/dist-es/regionInfo/PartitionHash.js?");

/***/ }),

/***/ "./node_modules/@smithy/config-resolver/dist-es/regionInfo/RegionHash.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@smithy/config-resolver/dist-es/regionInfo/RegionHash.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/config-resolver/dist-es/regionInfo/RegionHash.js?");

/***/ }),

/***/ "./node_modules/@smithy/config-resolver/dist-es/regionInfo/getHostnameFromVariants.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@smithy/config-resolver/dist-es/regionInfo/getHostnameFromVariants.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getHostnameFromVariants: () => (/* binding */ getHostnameFromVariants)\n/* harmony export */ });\nconst getHostnameFromVariants = (variants = [], { useFipsEndpoint, useDualstackEndpoint }) => variants.find(({ tags }) => useFipsEndpoint === tags.includes(\"fips\") && useDualstackEndpoint === tags.includes(\"dualstack\"))?.hostname;\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/config-resolver/dist-es/regionInfo/getHostnameFromVariants.js?");

/***/ }),

/***/ "./node_modules/@smithy/config-resolver/dist-es/regionInfo/getRegionInfo.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@smithy/config-resolver/dist-es/regionInfo/getRegionInfo.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getRegionInfo: () => (/* binding */ getRegionInfo)\n/* harmony export */ });\n/* harmony import */ var _getHostnameFromVariants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getHostnameFromVariants */ \"./node_modules/@smithy/config-resolver/dist-es/regionInfo/getHostnameFromVariants.js\");\n/* harmony import */ var _getResolvedHostname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getResolvedHostname */ \"./node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedHostname.js\");\n/* harmony import */ var _getResolvedPartition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getResolvedPartition */ \"./node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedPartition.js\");\n/* harmony import */ var _getResolvedSigningRegion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getResolvedSigningRegion */ \"./node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedSigningRegion.js\");\n\n\n\n\nconst getRegionInfo = (region, { useFipsEndpoint = false, useDualstackEndpoint = false, signingService, regionHash, partitionHash, }) => {\n    const partition = (0,_getResolvedPartition__WEBPACK_IMPORTED_MODULE_2__.getResolvedPartition)(region, { partitionHash });\n    const resolvedRegion = region in regionHash ? region : partitionHash[partition]?.endpoint ?? region;\n    const hostnameOptions = { useFipsEndpoint, useDualstackEndpoint };\n    const regionHostname = (0,_getHostnameFromVariants__WEBPACK_IMPORTED_MODULE_0__.getHostnameFromVariants)(regionHash[resolvedRegion]?.variants, hostnameOptions);\n    const partitionHostname = (0,_getHostnameFromVariants__WEBPACK_IMPORTED_MODULE_0__.getHostnameFromVariants)(partitionHash[partition]?.variants, hostnameOptions);\n    const hostname = (0,_getResolvedHostname__WEBPACK_IMPORTED_MODULE_1__.getResolvedHostname)(resolvedRegion, { regionHostname, partitionHostname });\n    if (hostname === undefined) {\n        throw new Error(`Endpoint resolution failed for: ${{ resolvedRegion, useFipsEndpoint, useDualstackEndpoint }}`);\n    }\n    const signingRegion = (0,_getResolvedSigningRegion__WEBPACK_IMPORTED_MODULE_3__.getResolvedSigningRegion)(hostname, {\n        signingRegion: regionHash[resolvedRegion]?.signingRegion,\n        regionRegex: partitionHash[partition].regionRegex,\n        useFipsEndpoint,\n    });\n    return {\n        partition,\n        signingService,\n        hostname,\n        ...(signingRegion && { signingRegion }),\n        ...(regionHash[resolvedRegion]?.signingService && {\n            signingService: regionHash[resolvedRegion].signingService,\n        }),\n    };\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/config-resolver/dist-es/regionInfo/getRegionInfo.js?");

/***/ }),

/***/ "./node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedHostname.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedHostname.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getResolvedHostname: () => (/* binding */ getResolvedHostname)\n/* harmony export */ });\nconst getResolvedHostname = (resolvedRegion, { regionHostname, partitionHostname }) => regionHostname\n    ? regionHostname\n    : partitionHostname\n        ? partitionHostname.replace(\"{region}\", resolvedRegion)\n        : undefined;\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedHostname.js?");

/***/ }),

/***/ "./node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedPartition.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedPartition.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getResolvedPartition: () => (/* binding */ getResolvedPartition)\n/* harmony export */ });\nconst getResolvedPartition = (region, { partitionHash }) => Object.keys(partitionHash || {}).find((key) => partitionHash[key].regions.includes(region)) ?? \"aws\";\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedPartition.js?");

/***/ }),

/***/ "./node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedSigningRegion.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedSigningRegion.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getResolvedSigningRegion: () => (/* binding */ getResolvedSigningRegion)\n/* harmony export */ });\nconst getResolvedSigningRegion = (hostname, { signingRegion, regionRegex, useFipsEndpoint }) => {\n    if (signingRegion) {\n        return signingRegion;\n    }\n    else if (useFipsEndpoint) {\n        const regionRegexJs = regionRegex.replace(\"\\\\\\\\\", \"\\\\\").replace(/^\\^/g, \"\\\\.\").replace(/\\$$/g, \"\\\\.\");\n        const regionRegexmatchArray = hostname.match(regionRegexJs);\n        if (regionRegexmatchArray) {\n            return regionRegexmatchArray[0].slice(1, -1);\n        }\n    }\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedSigningRegion.js?");

/***/ }),

/***/ "./node_modules/@smithy/config-resolver/dist-es/regionInfo/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@smithy/config-resolver/dist-es/regionInfo/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getRegionInfo: () => (/* reexport safe */ _getRegionInfo__WEBPACK_IMPORTED_MODULE_2__.getRegionInfo)\n/* harmony export */ });\n/* harmony import */ var _PartitionHash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PartitionHash */ \"./node_modules/@smithy/config-resolver/dist-es/regionInfo/PartitionHash.js\");\n/* harmony import */ var _RegionHash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegionHash */ \"./node_modules/@smithy/config-resolver/dist-es/regionInfo/RegionHash.js\");\n/* harmony import */ var _getRegionInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getRegionInfo */ \"./node_modules/@smithy/config-resolver/dist-es/regionInfo/getRegionInfo.js\");\n\n\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/config-resolver/dist-es/regionInfo/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/core/dist-es/getSmithyContext.js":
/*!***************************************************************!*\
  !*** ./node_modules/@smithy/core/dist-es/getSmithyContext.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getSmithyContext: () => (/* binding */ getSmithyContext)\n/* harmony export */ });\n/* harmony import */ var _smithy_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/types */ \"./node_modules/@smithy/types/dist-es/index.js\");\n\nconst getSmithyContext = (context) => context[_smithy_types__WEBPACK_IMPORTED_MODULE_0__.SMITHY_CONTEXT_KEY] || (context[_smithy_types__WEBPACK_IMPORTED_MODULE_0__.SMITHY_CONTEXT_KEY] = {});\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/core/dist-es/getSmithyContext.js?");

/***/ }),

/***/ "./node_modules/@smithy/core/dist-es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@smithy/core/dist-es/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DefaultIdentityProviderConfig: () => (/* reexport safe */ _util_identity_and_auth__WEBPACK_IMPORTED_MODULE_2__.DefaultIdentityProviderConfig),\n/* harmony export */   EXPIRATION_MS: () => (/* reexport safe */ _util_identity_and_auth__WEBPACK_IMPORTED_MODULE_2__.EXPIRATION_MS),\n/* harmony export */   HttpApiKeyAuthSigner: () => (/* reexport safe */ _util_identity_and_auth__WEBPACK_IMPORTED_MODULE_2__.HttpApiKeyAuthSigner),\n/* harmony export */   HttpBearerAuthSigner: () => (/* reexport safe */ _util_identity_and_auth__WEBPACK_IMPORTED_MODULE_2__.HttpBearerAuthSigner),\n/* harmony export */   NoAuthSigner: () => (/* reexport safe */ _util_identity_and_auth__WEBPACK_IMPORTED_MODULE_2__.NoAuthSigner),\n/* harmony export */   RequestBuilder: () => (/* reexport safe */ _protocols_requestBuilder__WEBPACK_IMPORTED_MODULE_5__.RequestBuilder),\n/* harmony export */   createIsIdentityExpiredFunction: () => (/* reexport safe */ _util_identity_and_auth__WEBPACK_IMPORTED_MODULE_2__.createIsIdentityExpiredFunction),\n/* harmony export */   createPaginator: () => (/* reexport safe */ _pagination_createPaginator__WEBPACK_IMPORTED_MODULE_6__.createPaginator),\n/* harmony export */   doesIdentityRequireRefresh: () => (/* reexport safe */ _util_identity_and_auth__WEBPACK_IMPORTED_MODULE_2__.doesIdentityRequireRefresh),\n/* harmony export */   getHttpAuthSchemeEndpointRuleSetPlugin: () => (/* reexport safe */ _middleware_http_auth_scheme__WEBPACK_IMPORTED_MODULE_0__.getHttpAuthSchemeEndpointRuleSetPlugin),\n/* harmony export */   getHttpAuthSchemePlugin: () => (/* reexport safe */ _middleware_http_auth_scheme__WEBPACK_IMPORTED_MODULE_0__.getHttpAuthSchemePlugin),\n/* harmony export */   getHttpSigningPlugin: () => (/* reexport safe */ _middleware_http_signing__WEBPACK_IMPORTED_MODULE_1__.getHttpSigningPlugin),\n/* harmony export */   getSmithyContext: () => (/* reexport safe */ _getSmithyContext__WEBPACK_IMPORTED_MODULE_3__.getSmithyContext),\n/* harmony export */   httpAuthSchemeEndpointRuleSetMiddlewareOptions: () => (/* reexport safe */ _middleware_http_auth_scheme__WEBPACK_IMPORTED_MODULE_0__.httpAuthSchemeEndpointRuleSetMiddlewareOptions),\n/* harmony export */   httpAuthSchemeMiddleware: () => (/* reexport safe */ _middleware_http_auth_scheme__WEBPACK_IMPORTED_MODULE_0__.httpAuthSchemeMiddleware),\n/* harmony export */   httpAuthSchemeMiddlewareOptions: () => (/* reexport safe */ _middleware_http_auth_scheme__WEBPACK_IMPORTED_MODULE_0__.httpAuthSchemeMiddlewareOptions),\n/* harmony export */   httpSigningMiddleware: () => (/* reexport safe */ _middleware_http_signing__WEBPACK_IMPORTED_MODULE_1__.httpSigningMiddleware),\n/* harmony export */   httpSigningMiddlewareOptions: () => (/* reexport safe */ _middleware_http_signing__WEBPACK_IMPORTED_MODULE_1__.httpSigningMiddlewareOptions),\n/* harmony export */   isIdentityExpired: () => (/* reexport safe */ _util_identity_and_auth__WEBPACK_IMPORTED_MODULE_2__.isIdentityExpired),\n/* harmony export */   memoizeIdentityProvider: () => (/* reexport safe */ _util_identity_and_auth__WEBPACK_IMPORTED_MODULE_2__.memoizeIdentityProvider),\n/* harmony export */   normalizeProvider: () => (/* reexport safe */ _normalizeProvider__WEBPACK_IMPORTED_MODULE_4__.normalizeProvider),\n/* harmony export */   requestBuilder: () => (/* reexport safe */ _protocols_requestBuilder__WEBPACK_IMPORTED_MODULE_5__.requestBuilder)\n/* harmony export */ });\n/* harmony import */ var _middleware_http_auth_scheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./middleware-http-auth-scheme */ \"./node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/index.js\");\n/* harmony import */ var _middleware_http_signing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./middleware-http-signing */ \"./node_modules/@smithy/core/dist-es/middleware-http-signing/index.js\");\n/* harmony import */ var _util_identity_and_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util-identity-and-auth */ \"./node_modules/@smithy/core/dist-es/util-identity-and-auth/index.js\");\n/* harmony import */ var _getSmithyContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getSmithyContext */ \"./node_modules/@smithy/core/dist-es/getSmithyContext.js\");\n/* harmony import */ var _normalizeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./normalizeProvider */ \"./node_modules/@smithy/core/dist-es/normalizeProvider.js\");\n/* harmony import */ var _protocols_requestBuilder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./protocols/requestBuilder */ \"./node_modules/@smithy/core/dist-es/protocols/requestBuilder.js\");\n/* harmony import */ var _pagination_createPaginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pagination/createPaginator */ \"./node_modules/@smithy/core/dist-es/pagination/createPaginator.js\");\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/core/dist-es/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getHttpAuthSchemeEndpointRuleSetPlugin: () => (/* binding */ getHttpAuthSchemeEndpointRuleSetPlugin),\n/* harmony export */   httpAuthSchemeEndpointRuleSetMiddlewareOptions: () => (/* binding */ httpAuthSchemeEndpointRuleSetMiddlewareOptions)\n/* harmony export */ });\n/* harmony import */ var _smithy_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/middleware-endpoint */ \"./node_modules/@smithy/middleware-endpoint/dist-es/index.js\");\n/* harmony import */ var _httpAuthSchemeMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./httpAuthSchemeMiddleware */ \"./node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js\");\n\n\nconst httpAuthSchemeEndpointRuleSetMiddlewareOptions = {\n    step: \"serialize\",\n    tags: [\"HTTP_AUTH_SCHEME\"],\n    name: \"httpAuthSchemeMiddleware\",\n    override: true,\n    relation: \"before\",\n    toMiddleware: _smithy_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__.endpointMiddlewareOptions.name,\n};\nconst getHttpAuthSchemeEndpointRuleSetPlugin = (config, { httpAuthSchemeParametersProvider, identityProviderConfigProvider, }) => ({\n    applyToStack: (clientStack) => {\n        clientStack.addRelativeTo((0,_httpAuthSchemeMiddleware__WEBPACK_IMPORTED_MODULE_1__.httpAuthSchemeMiddleware)(config, {\n            httpAuthSchemeParametersProvider,\n            identityProviderConfigProvider,\n        }), httpAuthSchemeEndpointRuleSetMiddlewareOptions);\n    },\n});\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js?");

/***/ }),

/***/ "./node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemePlugin.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemePlugin.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getHttpAuthSchemePlugin: () => (/* binding */ getHttpAuthSchemePlugin),\n/* harmony export */   httpAuthSchemeMiddlewareOptions: () => (/* binding */ httpAuthSchemeMiddlewareOptions)\n/* harmony export */ });\n/* harmony import */ var _smithy_middleware_serde__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/middleware-serde */ \"./node_modules/@smithy/middleware-serde/dist-es/index.js\");\n/* harmony import */ var _httpAuthSchemeMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./httpAuthSchemeMiddleware */ \"./node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js\");\n\n\nconst httpAuthSchemeMiddlewareOptions = {\n    step: \"serialize\",\n    tags: [\"HTTP_AUTH_SCHEME\"],\n    name: \"httpAuthSchemeMiddleware\",\n    override: true,\n    relation: \"before\",\n    toMiddleware: _smithy_middleware_serde__WEBPACK_IMPORTED_MODULE_0__.serializerMiddlewareOption.name,\n};\nconst getHttpAuthSchemePlugin = (config, { httpAuthSchemeParametersProvider, identityProviderConfigProvider, }) => ({\n    applyToStack: (clientStack) => {\n        clientStack.addRelativeTo((0,_httpAuthSchemeMiddleware__WEBPACK_IMPORTED_MODULE_1__.httpAuthSchemeMiddleware)(config, {\n            httpAuthSchemeParametersProvider,\n            identityProviderConfigProvider,\n        }), httpAuthSchemeMiddlewareOptions);\n    },\n});\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemePlugin.js?");

/***/ }),

/***/ "./node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   httpAuthSchemeMiddleware: () => (/* binding */ httpAuthSchemeMiddleware)\n/* harmony export */ });\n/* harmony import */ var _smithy_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/types */ \"./node_modules/@smithy/types/dist-es/index.js\");\n/* harmony import */ var _smithy_util_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/util-middleware */ \"./node_modules/@smithy/util-middleware/dist-es/index.js\");\n\n\nfunction convertHttpAuthSchemesToMap(httpAuthSchemes) {\n    const map = new Map();\n    for (const scheme of httpAuthSchemes) {\n        map.set(scheme.schemeId, scheme);\n    }\n    return map;\n}\nconst httpAuthSchemeMiddleware = (config, mwOptions) => (next, context) => async (args) => {\n    const options = config.httpAuthSchemeProvider(await mwOptions.httpAuthSchemeParametersProvider(config, context, args.input));\n    const authSchemes = convertHttpAuthSchemesToMap(config.httpAuthSchemes);\n    const smithyContext = (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_1__.getSmithyContext)(context);\n    const failureReasons = [];\n    for (const option of options) {\n        const scheme = authSchemes.get(option.schemeId);\n        if (!scheme) {\n            failureReasons.push(`HttpAuthScheme \\`${option.schemeId}\\` was not enabled for this service.`);\n            continue;\n        }\n        const identityProvider = scheme.identityProvider(await mwOptions.identityProviderConfigProvider(config));\n        if (!identityProvider) {\n            failureReasons.push(`HttpAuthScheme \\`${option.schemeId}\\` did not have an IdentityProvider configured.`);\n            continue;\n        }\n        const { identityProperties = {}, signingProperties = {} } = option.propertiesExtractor?.(config, context) || {};\n        option.identityProperties = Object.assign(option.identityProperties || {}, identityProperties);\n        option.signingProperties = Object.assign(option.signingProperties || {}, signingProperties);\n        smithyContext.selectedHttpAuthScheme = {\n            httpAuthOption: option,\n            identity: await identityProvider(option.identityProperties),\n            signer: scheme.signer,\n        };\n        break;\n    }\n    if (!smithyContext.selectedHttpAuthScheme) {\n        throw new Error(failureReasons.join(\"\\n\"));\n    }\n    return next(args);\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js?");

/***/ }),

/***/ "./node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/index.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getHttpAuthSchemeEndpointRuleSetPlugin: () => (/* reexport safe */ _getHttpAuthSchemeEndpointRuleSetPlugin__WEBPACK_IMPORTED_MODULE_1__.getHttpAuthSchemeEndpointRuleSetPlugin),\n/* harmony export */   getHttpAuthSchemePlugin: () => (/* reexport safe */ _getHttpAuthSchemePlugin__WEBPACK_IMPORTED_MODULE_2__.getHttpAuthSchemePlugin),\n/* harmony export */   httpAuthSchemeEndpointRuleSetMiddlewareOptions: () => (/* reexport safe */ _getHttpAuthSchemeEndpointRuleSetPlugin__WEBPACK_IMPORTED_MODULE_1__.httpAuthSchemeEndpointRuleSetMiddlewareOptions),\n/* harmony export */   httpAuthSchemeMiddleware: () => (/* reexport safe */ _httpAuthSchemeMiddleware__WEBPACK_IMPORTED_MODULE_0__.httpAuthSchemeMiddleware),\n/* harmony export */   httpAuthSchemeMiddlewareOptions: () => (/* reexport safe */ _getHttpAuthSchemePlugin__WEBPACK_IMPORTED_MODULE_2__.httpAuthSchemeMiddlewareOptions)\n/* harmony export */ });\n/* harmony import */ var _httpAuthSchemeMiddleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./httpAuthSchemeMiddleware */ \"./node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js\");\n/* harmony import */ var _getHttpAuthSchemeEndpointRuleSetPlugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getHttpAuthSchemeEndpointRuleSetPlugin */ \"./node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js\");\n/* harmony import */ var _getHttpAuthSchemePlugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getHttpAuthSchemePlugin */ \"./node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemePlugin.js\");\n\n\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/core/dist-es/middleware-http-signing/getHttpSigningMiddleware.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@smithy/core/dist-es/middleware-http-signing/getHttpSigningMiddleware.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getHttpSigningPlugin: () => (/* binding */ getHttpSigningPlugin),\n/* harmony export */   httpSigningMiddlewareOptions: () => (/* binding */ httpSigningMiddlewareOptions)\n/* harmony export */ });\n/* harmony import */ var _smithy_middleware_retry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/middleware-retry */ \"./node_modules/@smithy/middleware-retry/dist-es/index.js\");\n/* harmony import */ var _httpSigningMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./httpSigningMiddleware */ \"./node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js\");\n\n\nconst httpSigningMiddlewareOptions = {\n    step: \"finalizeRequest\",\n    tags: [\"HTTP_SIGNING\"],\n    name: \"httpSigningMiddleware\",\n    aliases: [\"apiKeyMiddleware\", \"tokenMiddleware\", \"awsAuthMiddleware\"],\n    override: true,\n    relation: \"after\",\n    toMiddleware: _smithy_middleware_retry__WEBPACK_IMPORTED_MODULE_0__.retryMiddlewareOptions.name,\n};\nconst getHttpSigningPlugin = (config) => ({\n    applyToStack: (clientStack) => {\n        clientStack.addRelativeTo((0,_httpSigningMiddleware__WEBPACK_IMPORTED_MODULE_1__.httpSigningMiddleware)(config), httpSigningMiddlewareOptions);\n    },\n});\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/core/dist-es/middleware-http-signing/getHttpSigningMiddleware.js?");

/***/ }),

/***/ "./node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   httpSigningMiddleware: () => (/* binding */ httpSigningMiddleware)\n/* harmony export */ });\n/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/protocol-http */ \"./node_modules/@smithy/protocol-http/dist-es/index.js\");\n/* harmony import */ var _smithy_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/types */ \"./node_modules/@smithy/types/dist-es/index.js\");\n/* harmony import */ var _smithy_util_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smithy/util-middleware */ \"./node_modules/@smithy/util-middleware/dist-es/index.js\");\n\n\n\nconst defaultErrorHandler = (signingProperties) => (error) => {\n    throw error;\n};\nconst defaultSuccessHandler = (httpResponse, signingProperties) => { };\nconst httpSigningMiddleware = (config) => (next, context) => async (args) => {\n    if (!_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest.isInstance(args.request)) {\n        return next(args);\n    }\n    const smithyContext = (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_2__.getSmithyContext)(context);\n    const scheme = smithyContext.selectedHttpAuthScheme;\n    if (!scheme) {\n        throw new Error(`No HttpAuthScheme was selected: unable to sign request`);\n    }\n    const { httpAuthOption: { signingProperties = {} }, identity, signer, } = scheme;\n    const output = await next({\n        ...args,\n        request: await signer.sign(args.request, identity, signingProperties),\n    }).catch((signer.errorHandler || defaultErrorHandler)(signingProperties));\n    (signer.successHandler || defaultSuccessHandler)(output.response, signingProperties);\n    return output;\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js?");

/***/ }),

/***/ "./node_modules/@smithy/core/dist-es/middleware-http-signing/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@smithy/core/dist-es/middleware-http-signing/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getHttpSigningPlugin: () => (/* reexport safe */ _getHttpSigningMiddleware__WEBPACK_IMPORTED_MODULE_1__.getHttpSigningPlugin),\n/* harmony export */   httpSigningMiddleware: () => (/* reexport safe */ _httpSigningMiddleware__WEBPACK_IMPORTED_MODULE_0__.httpSigningMiddleware),\n/* harmony export */   httpSigningMiddlewareOptions: () => (/* reexport safe */ _getHttpSigningMiddleware__WEBPACK_IMPORTED_MODULE_1__.httpSigningMiddlewareOptions)\n/* harmony export */ });\n/* harmony import */ var _httpSigningMiddleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./httpSigningMiddleware */ \"./node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js\");\n/* harmony import */ var _getHttpSigningMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getHttpSigningMiddleware */ \"./node_modules/@smithy/core/dist-es/middleware-http-signing/getHttpSigningMiddleware.js\");\n\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/core/dist-es/middleware-http-signing/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/core/dist-es/normalizeProvider.js":
/*!****************************************************************!*\
  !*** ./node_modules/@smithy/core/dist-es/normalizeProvider.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   normalizeProvider: () => (/* binding */ normalizeProvider)\n/* harmony export */ });\nconst normalizeProvider = (input) => {\n    if (typeof input === \"function\")\n        return input;\n    const promisified = Promise.resolve(input);\n    return () => promisified;\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/core/dist-es/normalizeProvider.js?");

/***/ }),

/***/ "./node_modules/@smithy/core/dist-es/pagination/createPaginator.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@smithy/core/dist-es/pagination/createPaginator.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createPaginator: () => (/* binding */ createPaginator)\n/* harmony export */ });\nconst makePagedClientRequest = async (CommandCtor, client, input, ...args) => {\n    return await client.send(new CommandCtor(input), ...args);\n};\nfunction createPaginator(ClientCtor, CommandCtor, inputTokenName, outputTokenName, pageSizeTokenName) {\n    return async function* paginateOperation(config, input, ...additionalArguments) {\n        let token = config.startingToken || undefined;\n        let hasNext = true;\n        let page;\n        while (hasNext) {\n            input[inputTokenName] = token;\n            if (pageSizeTokenName) {\n                input[pageSizeTokenName] = input[pageSizeTokenName] ?? config.pageSize;\n            }\n            if (config.client instanceof ClientCtor) {\n                page = await makePagedClientRequest(CommandCtor, config.client, input, ...additionalArguments);\n            }\n            else {\n                throw new Error(`Invalid client, expected instance of ${ClientCtor.name}`);\n            }\n            yield page;\n            const prevToken = token;\n            token = get(page, outputTokenName);\n            hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));\n        }\n        return undefined;\n    };\n}\nconst get = (fromObject, path) => {\n    let cursor = fromObject;\n    const pathComponents = path.split(\".\");\n    for (const step of pathComponents) {\n        if (!cursor || typeof cursor !== \"object\") {\n            return undefined;\n        }\n        cursor = cursor[step];\n    }\n    return cursor;\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/core/dist-es/pagination/createPaginator.js?");

/***/ }),

/***/ "./node_modules/@smithy/core/dist-es/protocols/requestBuilder.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@smithy/core/dist-es/protocols/requestBuilder.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RequestBuilder: () => (/* binding */ RequestBuilder),\n/* harmony export */   requestBuilder: () => (/* binding */ requestBuilder)\n/* harmony export */ });\n/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/protocol-http */ \"./node_modules/@smithy/protocol-http/dist-es/index.js\");\n/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/smithy-client */ \"./node_modules/@smithy/smithy-client/dist-es/index.js\");\n\n\nfunction requestBuilder(input, context) {\n    return new RequestBuilder(input, context);\n}\nclass RequestBuilder {\n    constructor(input, context) {\n        this.input = input;\n        this.context = context;\n        this.query = {};\n        this.method = \"\";\n        this.headers = {};\n        this.path = \"\";\n        this.body = null;\n        this.hostname = \"\";\n        this.resolvePathStack = [];\n    }\n    async build() {\n        const { hostname, protocol = \"https\", port, path: basePath } = await this.context.endpoint();\n        this.path = basePath;\n        for (const resolvePath of this.resolvePathStack) {\n            resolvePath(this.path);\n        }\n        return new _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest({\n            protocol,\n            hostname: this.hostname || hostname,\n            port,\n            method: this.method,\n            path: this.path,\n            query: this.query,\n            body: this.body,\n            headers: this.headers,\n        });\n    }\n    hn(hostname) {\n        this.hostname = hostname;\n        return this;\n    }\n    bp(uriLabel) {\n        this.resolvePathStack.push((basePath) => {\n            this.path = `${basePath?.endsWith(\"/\") ? basePath.slice(0, -1) : basePath || \"\"}` + uriLabel;\n        });\n        return this;\n    }\n    p(memberName, labelValueProvider, uriLabel, isGreedyLabel) {\n        this.resolvePathStack.push((path) => {\n            this.path = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.resolvedPath)(path, this.input, memberName, labelValueProvider, uriLabel, isGreedyLabel);\n        });\n        return this;\n    }\n    h(headers) {\n        this.headers = headers;\n        return this;\n    }\n    q(query) {\n        this.query = query;\n        return this;\n    }\n    b(body) {\n        this.body = body;\n        return this;\n    }\n    m(method) {\n        this.method = method;\n        return this;\n    }\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/core/dist-es/protocols/requestBuilder.js?");

/***/ }),

/***/ "./node_modules/@smithy/core/dist-es/util-identity-and-auth/DefaultIdentityProviderConfig.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@smithy/core/dist-es/util-identity-and-auth/DefaultIdentityProviderConfig.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DefaultIdentityProviderConfig: () => (/* binding */ DefaultIdentityProviderConfig)\n/* harmony export */ });\nclass DefaultIdentityProviderConfig {\n    constructor(config) {\n        this.authSchemes = new Map();\n        for (const [key, value] of Object.entries(config)) {\n            if (value !== undefined) {\n                this.authSchemes.set(key, value);\n            }\n        }\n    }\n    getIdentityProvider(schemeId) {\n        return this.authSchemes.get(schemeId);\n    }\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/core/dist-es/util-identity-and-auth/DefaultIdentityProviderConfig.js?");

/***/ }),

/***/ "./node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpApiKeyAuth.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpApiKeyAuth.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HttpApiKeyAuthSigner: () => (/* binding */ HttpApiKeyAuthSigner)\n/* harmony export */ });\n/* harmony import */ var _smithy_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/types */ \"./node_modules/@smithy/types/dist-es/index.js\");\n\nclass HttpApiKeyAuthSigner {\n    async sign(httpRequest, identity, signingProperties) {\n        if (!signingProperties) {\n            throw new Error(\"request could not be signed with `apiKey` since the `name` and `in` signer properties are missing\");\n        }\n        if (!signingProperties.name) {\n            throw new Error(\"request could not be signed with `apiKey` since the `name` signer property is missing\");\n        }\n        if (!signingProperties.in) {\n            throw new Error(\"request could not be signed with `apiKey` since the `in` signer property is missing\");\n        }\n        if (!identity.apiKey) {\n            throw new Error(\"request could not be signed with `apiKey` since the `apiKey` is not defined\");\n        }\n        const clonedRequest = httpRequest.clone();\n        if (signingProperties.in === _smithy_types__WEBPACK_IMPORTED_MODULE_0__.HttpApiKeyAuthLocation.QUERY) {\n            clonedRequest.query[signingProperties.name] = identity.apiKey;\n        }\n        else if (signingProperties.in === _smithy_types__WEBPACK_IMPORTED_MODULE_0__.HttpApiKeyAuthLocation.HEADER) {\n            clonedRequest.headers[signingProperties.name] = signingProperties.scheme\n                ? `${signingProperties.scheme} ${identity.apiKey}`\n                : identity.apiKey;\n        }\n        else {\n            throw new Error(\"request can only be signed with `apiKey` locations `query` or `header`, \" +\n                \"but found: `\" +\n                signingProperties.in +\n                \"`\");\n        }\n        return clonedRequest;\n    }\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpApiKeyAuth.js?");

/***/ }),

/***/ "./node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpBearerAuth.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpBearerAuth.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HttpBearerAuthSigner: () => (/* binding */ HttpBearerAuthSigner)\n/* harmony export */ });\nclass HttpBearerAuthSigner {\n    async sign(httpRequest, identity, signingProperties) {\n        const clonedRequest = httpRequest.clone();\n        if (!identity.token) {\n            throw new Error(\"request could not be signed with `token` since the `token` is not defined\");\n        }\n        clonedRequest.headers[\"Authorization\"] = `Bearer ${identity.token}`;\n        return clonedRequest;\n    }\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpBearerAuth.js?");

/***/ }),

/***/ "./node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/index.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/index.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HttpApiKeyAuthSigner: () => (/* reexport safe */ _httpApiKeyAuth__WEBPACK_IMPORTED_MODULE_0__.HttpApiKeyAuthSigner),\n/* harmony export */   HttpBearerAuthSigner: () => (/* reexport safe */ _httpBearerAuth__WEBPACK_IMPORTED_MODULE_1__.HttpBearerAuthSigner),\n/* harmony export */   NoAuthSigner: () => (/* reexport safe */ _noAuth__WEBPACK_IMPORTED_MODULE_2__.NoAuthSigner)\n/* harmony export */ });\n/* harmony import */ var _httpApiKeyAuth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./httpApiKeyAuth */ \"./node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpApiKeyAuth.js\");\n/* harmony import */ var _httpBearerAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./httpBearerAuth */ \"./node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpBearerAuth.js\");\n/* harmony import */ var _noAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./noAuth */ \"./node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/noAuth.js\");\n\n\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/noAuth.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/noAuth.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NoAuthSigner: () => (/* binding */ NoAuthSigner)\n/* harmony export */ });\nclass NoAuthSigner {\n    async sign(httpRequest, identity, signingProperties) {\n        return httpRequest;\n    }\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/noAuth.js?");

/***/ }),

/***/ "./node_modules/@smithy/core/dist-es/util-identity-and-auth/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@smithy/core/dist-es/util-identity-and-auth/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DefaultIdentityProviderConfig: () => (/* reexport safe */ _DefaultIdentityProviderConfig__WEBPACK_IMPORTED_MODULE_0__.DefaultIdentityProviderConfig),\n/* harmony export */   EXPIRATION_MS: () => (/* reexport safe */ _memoizeIdentityProvider__WEBPACK_IMPORTED_MODULE_2__.EXPIRATION_MS),\n/* harmony export */   HttpApiKeyAuthSigner: () => (/* reexport safe */ _httpAuthSchemes__WEBPACK_IMPORTED_MODULE_1__.HttpApiKeyAuthSigner),\n/* harmony export */   HttpBearerAuthSigner: () => (/* reexport safe */ _httpAuthSchemes__WEBPACK_IMPORTED_MODULE_1__.HttpBearerAuthSigner),\n/* harmony export */   NoAuthSigner: () => (/* reexport safe */ _httpAuthSchemes__WEBPACK_IMPORTED_MODULE_1__.NoAuthSigner),\n/* harmony export */   createIsIdentityExpiredFunction: () => (/* reexport safe */ _memoizeIdentityProvider__WEBPACK_IMPORTED_MODULE_2__.createIsIdentityExpiredFunction),\n/* harmony export */   doesIdentityRequireRefresh: () => (/* reexport safe */ _memoizeIdentityProvider__WEBPACK_IMPORTED_MODULE_2__.doesIdentityRequireRefresh),\n/* harmony export */   isIdentityExpired: () => (/* reexport safe */ _memoizeIdentityProvider__WEBPACK_IMPORTED_MODULE_2__.isIdentityExpired),\n/* harmony export */   memoizeIdentityProvider: () => (/* reexport safe */ _memoizeIdentityProvider__WEBPACK_IMPORTED_MODULE_2__.memoizeIdentityProvider)\n/* harmony export */ });\n/* harmony import */ var _DefaultIdentityProviderConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultIdentityProviderConfig */ \"./node_modules/@smithy/core/dist-es/util-identity-and-auth/DefaultIdentityProviderConfig.js\");\n/* harmony import */ var _httpAuthSchemes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./httpAuthSchemes */ \"./node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/index.js\");\n/* harmony import */ var _memoizeIdentityProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./memoizeIdentityProvider */ \"./node_modules/@smithy/core/dist-es/util-identity-and-auth/memoizeIdentityProvider.js\");\n\n\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/core/dist-es/util-identity-and-auth/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/core/dist-es/util-identity-and-auth/memoizeIdentityProvider.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@smithy/core/dist-es/util-identity-and-auth/memoizeIdentityProvider.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EXPIRATION_MS: () => (/* binding */ EXPIRATION_MS),\n/* harmony export */   createIsIdentityExpiredFunction: () => (/* binding */ createIsIdentityExpiredFunction),\n/* harmony export */   doesIdentityRequireRefresh: () => (/* binding */ doesIdentityRequireRefresh),\n/* harmony export */   isIdentityExpired: () => (/* binding */ isIdentityExpired),\n/* harmony export */   memoizeIdentityProvider: () => (/* binding */ memoizeIdentityProvider)\n/* harmony export */ });\nconst createIsIdentityExpiredFunction = (expirationMs) => (identity) => doesIdentityRequireRefresh(identity) && identity.expiration.getTime() - Date.now() < expirationMs;\nconst EXPIRATION_MS = 300000;\nconst isIdentityExpired = createIsIdentityExpiredFunction(EXPIRATION_MS);\nconst doesIdentityRequireRefresh = (identity) => identity.expiration !== undefined;\nconst memoizeIdentityProvider = (provider, isExpired, requiresRefresh) => {\n    if (provider === undefined) {\n        return undefined;\n    }\n    const normalizedProvider = typeof provider !== \"function\" ? async () => Promise.resolve(provider) : provider;\n    let resolved;\n    let pending;\n    let hasResult;\n    let isConstant = false;\n    const coalesceProvider = async (options) => {\n        if (!pending) {\n            pending = normalizedProvider(options);\n        }\n        try {\n            resolved = await pending;\n            hasResult = true;\n            isConstant = false;\n        }\n        finally {\n            pending = undefined;\n        }\n        return resolved;\n    };\n    if (isExpired === undefined) {\n        return async (options) => {\n            if (!hasResult || options?.forceRefresh) {\n                resolved = await coalesceProvider(options);\n            }\n            return resolved;\n        };\n    }\n    return async (options) => {\n        if (!hasResult || options?.forceRefresh) {\n            resolved = await coalesceProvider(options);\n        }\n        if (isConstant) {\n            return resolved;\n        }\n        if (!requiresRefresh(resolved)) {\n            isConstant = true;\n            return resolved;\n        }\n        if (isExpired(resolved)) {\n            await coalesceProvider(options);\n            return resolved;\n        }\n        return resolved;\n    };\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/core/dist-es/util-identity-and-auth/memoizeIdentityProvider.js?");

/***/ }),

/***/ "./node_modules/@smithy/eventstream-codec/dist-es/EventStreamCodec.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@smithy/eventstream-codec/dist-es/EventStreamCodec.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EventStreamCodec: () => (/* binding */ EventStreamCodec)\n/* harmony export */ });\n/* harmony import */ var _aws_crypto_crc32__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-crypto/crc32 */ \"./node_modules/@aws-crypto/crc32/build/index.js\");\n/* harmony import */ var _HeaderMarshaller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderMarshaller */ \"./node_modules/@smithy/eventstream-codec/dist-es/HeaderMarshaller.js\");\n/* harmony import */ var _splitMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splitMessage */ \"./node_modules/@smithy/eventstream-codec/dist-es/splitMessage.js\");\n\n\n\nclass EventStreamCodec {\n    constructor(toUtf8, fromUtf8) {\n        this.headerMarshaller = new _HeaderMarshaller__WEBPACK_IMPORTED_MODULE_1__.HeaderMarshaller(toUtf8, fromUtf8);\n        this.messageBuffer = [];\n        this.isEndOfStream = false;\n    }\n    feed(message) {\n        this.messageBuffer.push(this.decode(message));\n    }\n    endOfStream() {\n        this.isEndOfStream = true;\n    }\n    getMessage() {\n        const message = this.messageBuffer.pop();\n        const isEndOfStream = this.isEndOfStream;\n        return {\n            getMessage() {\n                return message;\n            },\n            isEndOfStream() {\n                return isEndOfStream;\n            },\n        };\n    }\n    getAvailableMessages() {\n        const messages = this.messageBuffer;\n        this.messageBuffer = [];\n        const isEndOfStream = this.isEndOfStream;\n        return {\n            getMessages() {\n                return messages;\n            },\n            isEndOfStream() {\n                return isEndOfStream;\n            },\n        };\n    }\n    encode({ headers: rawHeaders, body }) {\n        const headers = this.headerMarshaller.format(rawHeaders);\n        const length = headers.byteLength + body.byteLength + 16;\n        const out = new Uint8Array(length);\n        const view = new DataView(out.buffer, out.byteOffset, out.byteLength);\n        const checksum = new _aws_crypto_crc32__WEBPACK_IMPORTED_MODULE_0__.Crc32();\n        view.setUint32(0, length, false);\n        view.setUint32(4, headers.byteLength, false);\n        view.setUint32(8, checksum.update(out.subarray(0, 8)).digest(), false);\n        out.set(headers, 12);\n        out.set(body, headers.byteLength + 12);\n        view.setUint32(length - 4, checksum.update(out.subarray(8, length - 4)).digest(), false);\n        return out;\n    }\n    decode(message) {\n        const { headers, body } = (0,_splitMessage__WEBPACK_IMPORTED_MODULE_2__.splitMessage)(message);\n        return { headers: this.headerMarshaller.parse(headers), body };\n    }\n    formatHeaders(rawHeaders) {\n        return this.headerMarshaller.format(rawHeaders);\n    }\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/eventstream-codec/dist-es/EventStreamCodec.js?");

/***/ }),

/***/ "./node_modules/@smithy/eventstream-codec/dist-es/HeaderMarshaller.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@smithy/eventstream-codec/dist-es/HeaderMarshaller.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HeaderMarshaller: () => (/* binding */ HeaderMarshaller)\n/* harmony export */ });\n/* harmony import */ var _smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-hex-encoding */ \"./node_modules/@smithy/util-hex-encoding/dist-es/index.js\");\n/* harmony import */ var _Int64__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Int64 */ \"./node_modules/@smithy/eventstream-codec/dist-es/Int64.js\");\n\n\nclass HeaderMarshaller {\n    constructor(toUtf8, fromUtf8) {\n        this.toUtf8 = toUtf8;\n        this.fromUtf8 = fromUtf8;\n    }\n    format(headers) {\n        const chunks = [];\n        for (const headerName of Object.keys(headers)) {\n            const bytes = this.fromUtf8(headerName);\n            chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));\n        }\n        const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));\n        let position = 0;\n        for (const chunk of chunks) {\n            out.set(chunk, position);\n            position += chunk.byteLength;\n        }\n        return out;\n    }\n    formatHeaderValue(header) {\n        switch (header.type) {\n            case \"boolean\":\n                return Uint8Array.from([header.value ? 0 : 1]);\n            case \"byte\":\n                return Uint8Array.from([2, header.value]);\n            case \"short\":\n                const shortView = new DataView(new ArrayBuffer(3));\n                shortView.setUint8(0, 3);\n                shortView.setInt16(1, header.value, false);\n                return new Uint8Array(shortView.buffer);\n            case \"integer\":\n                const intView = new DataView(new ArrayBuffer(5));\n                intView.setUint8(0, 4);\n                intView.setInt32(1, header.value, false);\n                return new Uint8Array(intView.buffer);\n            case \"long\":\n                const longBytes = new Uint8Array(9);\n                longBytes[0] = 5;\n                longBytes.set(header.value.bytes, 1);\n                return longBytes;\n            case \"binary\":\n                const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));\n                binView.setUint8(0, 6);\n                binView.setUint16(1, header.value.byteLength, false);\n                const binBytes = new Uint8Array(binView.buffer);\n                binBytes.set(header.value, 3);\n                return binBytes;\n            case \"string\":\n                const utf8Bytes = this.fromUtf8(header.value);\n                const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));\n                strView.setUint8(0, 7);\n                strView.setUint16(1, utf8Bytes.byteLength, false);\n                const strBytes = new Uint8Array(strView.buffer);\n                strBytes.set(utf8Bytes, 3);\n                return strBytes;\n            case \"timestamp\":\n                const tsBytes = new Uint8Array(9);\n                tsBytes[0] = 8;\n                tsBytes.set(_Int64__WEBPACK_IMPORTED_MODULE_1__.Int64.fromNumber(header.value.valueOf()).bytes, 1);\n                return tsBytes;\n            case \"uuid\":\n                if (!UUID_PATTERN.test(header.value)) {\n                    throw new Error(`Invalid UUID received: ${header.value}`);\n                }\n                const uuidBytes = new Uint8Array(17);\n                uuidBytes[0] = 9;\n                uuidBytes.set((0,_smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.fromHex)(header.value.replace(/\\-/g, \"\")), 1);\n                return uuidBytes;\n        }\n    }\n    parse(headers) {\n        const out = {};\n        let position = 0;\n        while (position < headers.byteLength) {\n            const nameLength = headers.getUint8(position++);\n            const name = this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, nameLength));\n            position += nameLength;\n            switch (headers.getUint8(position++)) {\n                case 0:\n                    out[name] = {\n                        type: BOOLEAN_TAG,\n                        value: true,\n                    };\n                    break;\n                case 1:\n                    out[name] = {\n                        type: BOOLEAN_TAG,\n                        value: false,\n                    };\n                    break;\n                case 2:\n                    out[name] = {\n                        type: BYTE_TAG,\n                        value: headers.getInt8(position++),\n                    };\n                    break;\n                case 3:\n                    out[name] = {\n                        type: SHORT_TAG,\n                        value: headers.getInt16(position, false),\n                    };\n                    position += 2;\n                    break;\n                case 4:\n                    out[name] = {\n                        type: INT_TAG,\n                        value: headers.getInt32(position, false),\n                    };\n                    position += 4;\n                    break;\n                case 5:\n                    out[name] = {\n                        type: LONG_TAG,\n                        value: new _Int64__WEBPACK_IMPORTED_MODULE_1__.Int64(new Uint8Array(headers.buffer, headers.byteOffset + position, 8)),\n                    };\n                    position += 8;\n                    break;\n                case 6:\n                    const binaryLength = headers.getUint16(position, false);\n                    position += 2;\n                    out[name] = {\n                        type: BINARY_TAG,\n                        value: new Uint8Array(headers.buffer, headers.byteOffset + position, binaryLength),\n                    };\n                    position += binaryLength;\n                    break;\n                case 7:\n                    const stringLength = headers.getUint16(position, false);\n                    position += 2;\n                    out[name] = {\n                        type: STRING_TAG,\n                        value: this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, stringLength)),\n                    };\n                    position += stringLength;\n                    break;\n                case 8:\n                    out[name] = {\n                        type: TIMESTAMP_TAG,\n                        value: new Date(new _Int64__WEBPACK_IMPORTED_MODULE_1__.Int64(new Uint8Array(headers.buffer, headers.byteOffset + position, 8)).valueOf()),\n                    };\n                    position += 8;\n                    break;\n                case 9:\n                    const uuidBytes = new Uint8Array(headers.buffer, headers.byteOffset + position, 16);\n                    position += 16;\n                    out[name] = {\n                        type: UUID_TAG,\n                        value: `${(0,_smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.toHex)(uuidBytes.subarray(0, 4))}-${(0,_smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.toHex)(uuidBytes.subarray(4, 6))}-${(0,_smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.toHex)(uuidBytes.subarray(6, 8))}-${(0,_smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.toHex)(uuidBytes.subarray(8, 10))}-${(0,_smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.toHex)(uuidBytes.subarray(10))}`,\n                    };\n                    break;\n                default:\n                    throw new Error(`Unrecognized header type tag`);\n            }\n        }\n        return out;\n    }\n}\nvar HEADER_VALUE_TYPE;\n(function (HEADER_VALUE_TYPE) {\n    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE[\"boolTrue\"] = 0] = \"boolTrue\";\n    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE[\"boolFalse\"] = 1] = \"boolFalse\";\n    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE[\"byte\"] = 2] = \"byte\";\n    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE[\"short\"] = 3] = \"short\";\n    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE[\"integer\"] = 4] = \"integer\";\n    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE[\"long\"] = 5] = \"long\";\n    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE[\"byteArray\"] = 6] = \"byteArray\";\n    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE[\"string\"] = 7] = \"string\";\n    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE[\"timestamp\"] = 8] = \"timestamp\";\n    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE[\"uuid\"] = 9] = \"uuid\";\n})(HEADER_VALUE_TYPE || (HEADER_VALUE_TYPE = {}));\nconst BOOLEAN_TAG = \"boolean\";\nconst BYTE_TAG = \"byte\";\nconst SHORT_TAG = \"short\";\nconst INT_TAG = \"integer\";\nconst LONG_TAG = \"long\";\nconst BINARY_TAG = \"binary\";\nconst STRING_TAG = \"string\";\nconst TIMESTAMP_TAG = \"timestamp\";\nconst UUID_TAG = \"uuid\";\nconst UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/eventstream-codec/dist-es/HeaderMarshaller.js?");

/***/ }),

/***/ "./node_modules/@smithy/eventstream-codec/dist-es/Int64.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@smithy/eventstream-codec/dist-es/Int64.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Int64: () => (/* binding */ Int64)\n/* harmony export */ });\n/* harmony import */ var _smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-hex-encoding */ \"./node_modules/@smithy/util-hex-encoding/dist-es/index.js\");\n\nclass Int64 {\n    constructor(bytes) {\n        this.bytes = bytes;\n        if (bytes.byteLength !== 8) {\n            throw new Error(\"Int64 buffers must be exactly 8 bytes\");\n        }\n    }\n    static fromNumber(number) {\n        if (number > 9223372036854776000 || number < -9223372036854776000) {\n            throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);\n        }\n        const bytes = new Uint8Array(8);\n        for (let i = 7, remaining = Math.abs(Math.round(number)); i > -1 && remaining > 0; i--, remaining /= 256) {\n            bytes[i] = remaining;\n        }\n        if (number < 0) {\n            negate(bytes);\n        }\n        return new Int64(bytes);\n    }\n    valueOf() {\n        const bytes = this.bytes.slice(0);\n        const negative = bytes[0] & 0b10000000;\n        if (negative) {\n            negate(bytes);\n        }\n        return parseInt((0,_smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.toHex)(bytes), 16) * (negative ? -1 : 1);\n    }\n    toString() {\n        return String(this.valueOf());\n    }\n}\nfunction negate(bytes) {\n    for (let i = 0; i < 8; i++) {\n        bytes[i] ^= 0xff;\n    }\n    for (let i = 7; i > -1; i--) {\n        bytes[i]++;\n        if (bytes[i] !== 0)\n            break;\n    }\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/eventstream-codec/dist-es/Int64.js?");

/***/ }),

/***/ "./node_modules/@smithy/eventstream-codec/dist-es/Message.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@smithy/eventstream-codec/dist-es/Message.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/eventstream-codec/dist-es/Message.js?");

/***/ }),

/***/ "./node_modules/@smithy/eventstream-codec/dist-es/MessageDecoderStream.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@smithy/eventstream-codec/dist-es/MessageDecoderStream.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MessageDecoderStream: () => (/* binding */ MessageDecoderStream)\n/* harmony export */ });\nclass MessageDecoderStream {\n    constructor(options) {\n        this.options = options;\n    }\n    [Symbol.asyncIterator]() {\n        return this.asyncIterator();\n    }\n    async *asyncIterator() {\n        for await (const bytes of this.options.inputStream) {\n            const decoded = this.options.decoder.decode(bytes);\n            yield decoded;\n        }\n    }\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/eventstream-codec/dist-es/MessageDecoderStream.js?");

/***/ }),

/***/ "./node_modules/@smithy/eventstream-codec/dist-es/MessageEncoderStream.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@smithy/eventstream-codec/dist-es/MessageEncoderStream.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MessageEncoderStream: () => (/* binding */ MessageEncoderStream)\n/* harmony export */ });\nclass MessageEncoderStream {\n    constructor(options) {\n        this.options = options;\n    }\n    [Symbol.asyncIterator]() {\n        return this.asyncIterator();\n    }\n    async *asyncIterator() {\n        for await (const msg of this.options.messageStream) {\n            const encoded = this.options.encoder.encode(msg);\n            yield encoded;\n        }\n        if (this.options.includeEndFrame) {\n            yield new Uint8Array(0);\n        }\n    }\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/eventstream-codec/dist-es/MessageEncoderStream.js?");

/***/ }),

/***/ "./node_modules/@smithy/eventstream-codec/dist-es/SmithyMessageDecoderStream.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@smithy/eventstream-codec/dist-es/SmithyMessageDecoderStream.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SmithyMessageDecoderStream: () => (/* binding */ SmithyMessageDecoderStream)\n/* harmony export */ });\nclass SmithyMessageDecoderStream {\n    constructor(options) {\n        this.options = options;\n    }\n    [Symbol.asyncIterator]() {\n        return this.asyncIterator();\n    }\n    async *asyncIterator() {\n        for await (const message of this.options.messageStream) {\n            const deserialized = await this.options.deserializer(message);\n            if (deserialized === undefined)\n                continue;\n            yield deserialized;\n        }\n    }\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/eventstream-codec/dist-es/SmithyMessageDecoderStream.js?");

/***/ }),

/***/ "./node_modules/@smithy/eventstream-codec/dist-es/SmithyMessageEncoderStream.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@smithy/eventstream-codec/dist-es/SmithyMessageEncoderStream.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SmithyMessageEncoderStream: () => (/* binding */ SmithyMessageEncoderStream)\n/* harmony export */ });\nclass SmithyMessageEncoderStream {\n    constructor(options) {\n        this.options = options;\n    }\n    [Symbol.asyncIterator]() {\n        return this.asyncIterator();\n    }\n    async *asyncIterator() {\n        for await (const chunk of this.options.inputStream) {\n            const payloadBuf = this.options.serializer(chunk);\n            yield payloadBuf;\n        }\n    }\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/eventstream-codec/dist-es/SmithyMessageEncoderStream.js?");

/***/ }),

/***/ "./node_modules/@smithy/eventstream-codec/dist-es/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@smithy/eventstream-codec/dist-es/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EventStreamCodec: () => (/* reexport safe */ _EventStreamCodec__WEBPACK_IMPORTED_MODULE_0__.EventStreamCodec),\n/* harmony export */   HeaderMarshaller: () => (/* reexport safe */ _HeaderMarshaller__WEBPACK_IMPORTED_MODULE_1__.HeaderMarshaller),\n/* harmony export */   Int64: () => (/* reexport safe */ _Int64__WEBPACK_IMPORTED_MODULE_2__.Int64),\n/* harmony export */   MessageDecoderStream: () => (/* reexport safe */ _MessageDecoderStream__WEBPACK_IMPORTED_MODULE_4__.MessageDecoderStream),\n/* harmony export */   MessageEncoderStream: () => (/* reexport safe */ _MessageEncoderStream__WEBPACK_IMPORTED_MODULE_5__.MessageEncoderStream),\n/* harmony export */   SmithyMessageDecoderStream: () => (/* reexport safe */ _SmithyMessageDecoderStream__WEBPACK_IMPORTED_MODULE_6__.SmithyMessageDecoderStream),\n/* harmony export */   SmithyMessageEncoderStream: () => (/* reexport safe */ _SmithyMessageEncoderStream__WEBPACK_IMPORTED_MODULE_7__.SmithyMessageEncoderStream)\n/* harmony export */ });\n/* harmony import */ var _EventStreamCodec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventStreamCodec */ \"./node_modules/@smithy/eventstream-codec/dist-es/EventStreamCodec.js\");\n/* harmony import */ var _HeaderMarshaller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderMarshaller */ \"./node_modules/@smithy/eventstream-codec/dist-es/HeaderMarshaller.js\");\n/* harmony import */ var _Int64__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Int64 */ \"./node_modules/@smithy/eventstream-codec/dist-es/Int64.js\");\n/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Message */ \"./node_modules/@smithy/eventstream-codec/dist-es/Message.js\");\n/* harmony import */ var _MessageDecoderStream__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MessageDecoderStream */ \"./node_modules/@smithy/eventstream-codec/dist-es/MessageDecoderStream.js\");\n/* harmony import */ var _MessageEncoderStream__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MessageEncoderStream */ \"./node_modules/@smithy/eventstream-codec/dist-es/MessageEncoderStream.js\");\n/* harmony import */ var _SmithyMessageDecoderStream__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SmithyMessageDecoderStream */ \"./node_modules/@smithy/eventstream-codec/dist-es/SmithyMessageDecoderStream.js\");\n/* harmony import */ var _SmithyMessageEncoderStream__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SmithyMessageEncoderStream */ \"./node_modules/@smithy/eventstream-codec/dist-es/SmithyMessageEncoderStream.js\");\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/eventstream-codec/dist-es/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/eventstream-codec/dist-es/splitMessage.js":
/*!************************************************************************!*\
  !*** ./node_modules/@smithy/eventstream-codec/dist-es/splitMessage.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   splitMessage: () => (/* binding */ splitMessage)\n/* harmony export */ });\n/* harmony import */ var _aws_crypto_crc32__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-crypto/crc32 */ \"./node_modules/@aws-crypto/crc32/build/index.js\");\n\nconst PRELUDE_MEMBER_LENGTH = 4;\nconst PRELUDE_LENGTH = PRELUDE_MEMBER_LENGTH * 2;\nconst CHECKSUM_LENGTH = 4;\nconst MINIMUM_MESSAGE_LENGTH = PRELUDE_LENGTH + CHECKSUM_LENGTH * 2;\nfunction splitMessage({ byteLength, byteOffset, buffer }) {\n    if (byteLength < MINIMUM_MESSAGE_LENGTH) {\n        throw new Error(\"Provided message too short to accommodate event stream message overhead\");\n    }\n    const view = new DataView(buffer, byteOffset, byteLength);\n    const messageLength = view.getUint32(0, false);\n    if (byteLength !== messageLength) {\n        throw new Error(\"Reported message length does not match received message length\");\n    }\n    const headerLength = view.getUint32(PRELUDE_MEMBER_LENGTH, false);\n    const expectedPreludeChecksum = view.getUint32(PRELUDE_LENGTH, false);\n    const expectedMessageChecksum = view.getUint32(byteLength - CHECKSUM_LENGTH, false);\n    const checksummer = new _aws_crypto_crc32__WEBPACK_IMPORTED_MODULE_0__.Crc32().update(new Uint8Array(buffer, byteOffset, PRELUDE_LENGTH));\n    if (expectedPreludeChecksum !== checksummer.digest()) {\n        throw new Error(`The prelude checksum specified in the message (${expectedPreludeChecksum}) does not match the calculated CRC32 checksum (${checksummer.digest()})`);\n    }\n    checksummer.update(new Uint8Array(buffer, byteOffset + PRELUDE_LENGTH, byteLength - (PRELUDE_LENGTH + CHECKSUM_LENGTH)));\n    if (expectedMessageChecksum !== checksummer.digest()) {\n        throw new Error(`The message checksum (${checksummer.digest()}) did not match the expected value of ${expectedMessageChecksum}`);\n    }\n    return {\n        headers: new DataView(buffer, byteOffset + PRELUDE_LENGTH + CHECKSUM_LENGTH, headerLength),\n        body: new Uint8Array(buffer, byteOffset + PRELUDE_LENGTH + CHECKSUM_LENGTH + headerLength, messageLength - headerLength - (PRELUDE_LENGTH + CHECKSUM_LENGTH + CHECKSUM_LENGTH)),\n    };\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/eventstream-codec/dist-es/splitMessage.js?");

/***/ }),

/***/ "./node_modules/@smithy/eventstream-serde-browser/dist-es/EventStreamMarshaller.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@smithy/eventstream-serde-browser/dist-es/EventStreamMarshaller.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EventStreamMarshaller: () => (/* binding */ EventStreamMarshaller)\n/* harmony export */ });\n/* harmony import */ var _smithy_eventstream_serde_universal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/eventstream-serde-universal */ \"./node_modules/@smithy/eventstream-serde-universal/dist-es/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./node_modules/@smithy/eventstream-serde-browser/dist-es/utils.js\");\n\n\nclass EventStreamMarshaller {\n    constructor({ utf8Encoder, utf8Decoder }) {\n        this.universalMarshaller = new _smithy_eventstream_serde_universal__WEBPACK_IMPORTED_MODULE_0__.EventStreamMarshaller({\n            utf8Decoder,\n            utf8Encoder,\n        });\n    }\n    deserialize(body, deserializer) {\n        const bodyIterable = isReadableStream(body) ? (0,_utils__WEBPACK_IMPORTED_MODULE_1__.readableStreamtoIterable)(body) : body;\n        return this.universalMarshaller.deserialize(bodyIterable, deserializer);\n    }\n    serialize(input, serializer) {\n        const serialziedIterable = this.universalMarshaller.serialize(input, serializer);\n        return typeof ReadableStream === \"function\" ? (0,_utils__WEBPACK_IMPORTED_MODULE_1__.iterableToReadableStream)(serialziedIterable) : serialziedIterable;\n    }\n}\nconst isReadableStream = (body) => typeof ReadableStream === \"function\" && body instanceof ReadableStream;\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/eventstream-serde-browser/dist-es/EventStreamMarshaller.js?");

/***/ }),

/***/ "./node_modules/@smithy/eventstream-serde-browser/dist-es/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@smithy/eventstream-serde-browser/dist-es/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EventStreamMarshaller: () => (/* reexport safe */ _EventStreamMarshaller__WEBPACK_IMPORTED_MODULE_0__.EventStreamMarshaller),\n/* harmony export */   eventStreamSerdeProvider: () => (/* reexport safe */ _provider__WEBPACK_IMPORTED_MODULE_1__.eventStreamSerdeProvider),\n/* harmony export */   iterableToReadableStream: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.iterableToReadableStream),\n/* harmony export */   readableStreamtoIterable: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.readableStreamtoIterable)\n/* harmony export */ });\n/* harmony import */ var _EventStreamMarshaller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventStreamMarshaller */ \"./node_modules/@smithy/eventstream-serde-browser/dist-es/EventStreamMarshaller.js\");\n/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./provider */ \"./node_modules/@smithy/eventstream-serde-browser/dist-es/provider.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./node_modules/@smithy/eventstream-serde-browser/dist-es/utils.js\");\n\n\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/eventstream-serde-browser/dist-es/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/eventstream-serde-browser/dist-es/provider.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@smithy/eventstream-serde-browser/dist-es/provider.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   eventStreamSerdeProvider: () => (/* binding */ eventStreamSerdeProvider)\n/* harmony export */ });\n/* harmony import */ var _EventStreamMarshaller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventStreamMarshaller */ \"./node_modules/@smithy/eventstream-serde-browser/dist-es/EventStreamMarshaller.js\");\n\nconst eventStreamSerdeProvider = (options) => new _EventStreamMarshaller__WEBPACK_IMPORTED_MODULE_0__.EventStreamMarshaller(options);\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/eventstream-serde-browser/dist-es/provider.js?");

/***/ }),

/***/ "./node_modules/@smithy/eventstream-serde-browser/dist-es/utils.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@smithy/eventstream-serde-browser/dist-es/utils.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   iterableToReadableStream: () => (/* binding */ iterableToReadableStream),\n/* harmony export */   readableStreamtoIterable: () => (/* binding */ readableStreamtoIterable)\n/* harmony export */ });\nconst readableStreamtoIterable = (readableStream) => ({\n    [Symbol.asyncIterator]: async function* () {\n        const reader = readableStream.getReader();\n        try {\n            while (true) {\n                const { done, value } = await reader.read();\n                if (done)\n                    return;\n                yield value;\n            }\n        }\n        finally {\n            reader.releaseLock();\n        }\n    },\n});\nconst iterableToReadableStream = (asyncIterable) => {\n    const iterator = asyncIterable[Symbol.asyncIterator]();\n    return new ReadableStream({\n        async pull(controller) {\n            const { done, value } = await iterator.next();\n            if (done) {\n                return controller.close();\n            }\n            controller.enqueue(value);\n        },\n    });\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/eventstream-serde-browser/dist-es/utils.js?");

/***/ }),

/***/ "./node_modules/@smithy/eventstream-serde-config-resolver/dist-es/EventStreamSerdeConfig.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@smithy/eventstream-serde-config-resolver/dist-es/EventStreamSerdeConfig.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   resolveEventStreamSerdeConfig: () => (/* binding */ resolveEventStreamSerdeConfig)\n/* harmony export */ });\nconst resolveEventStreamSerdeConfig = (input) => ({\n    ...input,\n    eventStreamMarshaller: input.eventStreamSerdeProvider(input),\n});\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/eventstream-serde-config-resolver/dist-es/EventStreamSerdeConfig.js?");

/***/ }),

/***/ "./node_modules/@smithy/eventstream-serde-config-resolver/dist-es/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@smithy/eventstream-serde-config-resolver/dist-es/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   resolveEventStreamSerdeConfig: () => (/* reexport safe */ _EventStreamSerdeConfig__WEBPACK_IMPORTED_MODULE_0__.resolveEventStreamSerdeConfig)\n/* harmony export */ });\n/* harmony import */ var _EventStreamSerdeConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventStreamSerdeConfig */ \"./node_modules/@smithy/eventstream-serde-config-resolver/dist-es/EventStreamSerdeConfig.js\");\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/eventstream-serde-config-resolver/dist-es/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/eventstream-serde-universal/dist-es/EventStreamMarshaller.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@smithy/eventstream-serde-universal/dist-es/EventStreamMarshaller.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EventStreamMarshaller: () => (/* binding */ EventStreamMarshaller)\n/* harmony export */ });\n/* harmony import */ var _smithy_eventstream_codec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/eventstream-codec */ \"./node_modules/@smithy/eventstream-codec/dist-es/index.js\");\n/* harmony import */ var _getChunkedStream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getChunkedStream */ \"./node_modules/@smithy/eventstream-serde-universal/dist-es/getChunkedStream.js\");\n/* harmony import */ var _getUnmarshalledStream__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getUnmarshalledStream */ \"./node_modules/@smithy/eventstream-serde-universal/dist-es/getUnmarshalledStream.js\");\n\n\n\nclass EventStreamMarshaller {\n    constructor({ utf8Encoder, utf8Decoder }) {\n        this.eventStreamCodec = new _smithy_eventstream_codec__WEBPACK_IMPORTED_MODULE_0__.EventStreamCodec(utf8Encoder, utf8Decoder);\n        this.utfEncoder = utf8Encoder;\n    }\n    deserialize(body, deserializer) {\n        const inputStream = (0,_getChunkedStream__WEBPACK_IMPORTED_MODULE_1__.getChunkedStream)(body);\n        return new _smithy_eventstream_codec__WEBPACK_IMPORTED_MODULE_0__.SmithyMessageDecoderStream({\n            messageStream: new _smithy_eventstream_codec__WEBPACK_IMPORTED_MODULE_0__.MessageDecoderStream({ inputStream, decoder: this.eventStreamCodec }),\n            deserializer: (0,_getUnmarshalledStream__WEBPACK_IMPORTED_MODULE_2__.getMessageUnmarshaller)(deserializer, this.utfEncoder),\n        });\n    }\n    serialize(inputStream, serializer) {\n        return new _smithy_eventstream_codec__WEBPACK_IMPORTED_MODULE_0__.MessageEncoderStream({\n            messageStream: new _smithy_eventstream_codec__WEBPACK_IMPORTED_MODULE_0__.SmithyMessageEncoderStream({ inputStream, serializer }),\n            encoder: this.eventStreamCodec,\n            includeEndFrame: true,\n        });\n    }\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/eventstream-serde-universal/dist-es/EventStreamMarshaller.js?");

/***/ }),

/***/ "./node_modules/@smithy/eventstream-serde-universal/dist-es/getChunkedStream.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@smithy/eventstream-serde-universal/dist-es/getChunkedStream.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getChunkedStream: () => (/* binding */ getChunkedStream)\n/* harmony export */ });\nfunction getChunkedStream(source) {\n    let currentMessageTotalLength = 0;\n    let currentMessagePendingLength = 0;\n    let currentMessage = null;\n    let messageLengthBuffer = null;\n    const allocateMessage = (size) => {\n        if (typeof size !== \"number\") {\n            throw new Error(\"Attempted to allocate an event message where size was not a number: \" + size);\n        }\n        currentMessageTotalLength = size;\n        currentMessagePendingLength = 4;\n        currentMessage = new Uint8Array(size);\n        const currentMessageView = new DataView(currentMessage.buffer);\n        currentMessageView.setUint32(0, size, false);\n    };\n    const iterator = async function* () {\n        const sourceIterator = source[Symbol.asyncIterator]();\n        while (true) {\n            const { value, done } = await sourceIterator.next();\n            if (done) {\n                if (!currentMessageTotalLength) {\n                    return;\n                }\n                else if (currentMessageTotalLength === currentMessagePendingLength) {\n                    yield currentMessage;\n                }\n                else {\n                    throw new Error(\"Truncated event message received.\");\n                }\n                return;\n            }\n            const chunkLength = value.length;\n            let currentOffset = 0;\n            while (currentOffset < chunkLength) {\n                if (!currentMessage) {\n                    const bytesRemaining = chunkLength - currentOffset;\n                    if (!messageLengthBuffer) {\n                        messageLengthBuffer = new Uint8Array(4);\n                    }\n                    const numBytesForTotal = Math.min(4 - currentMessagePendingLength, bytesRemaining);\n                    messageLengthBuffer.set(value.slice(currentOffset, currentOffset + numBytesForTotal), currentMessagePendingLength);\n                    currentMessagePendingLength += numBytesForTotal;\n                    currentOffset += numBytesForTotal;\n                    if (currentMessagePendingLength < 4) {\n                        break;\n                    }\n                    allocateMessage(new DataView(messageLengthBuffer.buffer).getUint32(0, false));\n                    messageLengthBuffer = null;\n                }\n                const numBytesToWrite = Math.min(currentMessageTotalLength - currentMessagePendingLength, chunkLength - currentOffset);\n                currentMessage.set(value.slice(currentOffset, currentOffset + numBytesToWrite), currentMessagePendingLength);\n                currentMessagePendingLength += numBytesToWrite;\n                currentOffset += numBytesToWrite;\n                if (currentMessageTotalLength && currentMessageTotalLength === currentMessagePendingLength) {\n                    yield currentMessage;\n                    currentMessage = null;\n                    currentMessageTotalLength = 0;\n                    currentMessagePendingLength = 0;\n                }\n            }\n        }\n    };\n    return {\n        [Symbol.asyncIterator]: iterator,\n    };\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/eventstream-serde-universal/dist-es/getChunkedStream.js?");

/***/ }),

/***/ "./node_modules/@smithy/eventstream-serde-universal/dist-es/getUnmarshalledStream.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@smithy/eventstream-serde-universal/dist-es/getUnmarshalledStream.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getMessageUnmarshaller: () => (/* binding */ getMessageUnmarshaller),\n/* harmony export */   getUnmarshalledStream: () => (/* binding */ getUnmarshalledStream)\n/* harmony export */ });\nfunction getUnmarshalledStream(source, options) {\n    const messageUnmarshaller = getMessageUnmarshaller(options.deserializer, options.toUtf8);\n    return {\n        [Symbol.asyncIterator]: async function* () {\n            for await (const chunk of source) {\n                const message = options.eventStreamCodec.decode(chunk);\n                const type = await messageUnmarshaller(message);\n                if (type === undefined)\n                    continue;\n                yield type;\n            }\n        },\n    };\n}\nfunction getMessageUnmarshaller(deserializer, toUtf8) {\n    return async function (message) {\n        const { value: messageType } = message.headers[\":message-type\"];\n        if (messageType === \"error\") {\n            const unmodeledError = new Error(message.headers[\":error-message\"].value || \"UnknownError\");\n            unmodeledError.name = message.headers[\":error-code\"].value;\n            throw unmodeledError;\n        }\n        else if (messageType === \"exception\") {\n            const code = message.headers[\":exception-type\"].value;\n            const exception = { [code]: message };\n            const deserializedException = await deserializer(exception);\n            if (deserializedException.$unknown) {\n                const error = new Error(toUtf8(message.body));\n                error.name = code;\n                throw error;\n            }\n            throw deserializedException[code];\n        }\n        else if (messageType === \"event\") {\n            const event = {\n                [message.headers[\":event-type\"].value]: message,\n            };\n            const deserialized = await deserializer(event);\n            if (deserialized.$unknown)\n                return;\n            return deserialized;\n        }\n        else {\n            throw Error(`Unrecognizable event type: ${message.headers[\":event-type\"].value}`);\n        }\n    };\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/eventstream-serde-universal/dist-es/getUnmarshalledStream.js?");

/***/ }),

/***/ "./node_modules/@smithy/eventstream-serde-universal/dist-es/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@smithy/eventstream-serde-universal/dist-es/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EventStreamMarshaller: () => (/* reexport safe */ _EventStreamMarshaller__WEBPACK_IMPORTED_MODULE_0__.EventStreamMarshaller),\n/* harmony export */   eventStreamSerdeProvider: () => (/* reexport safe */ _provider__WEBPACK_IMPORTED_MODULE_1__.eventStreamSerdeProvider)\n/* harmony export */ });\n/* harmony import */ var _EventStreamMarshaller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventStreamMarshaller */ \"./node_modules/@smithy/eventstream-serde-universal/dist-es/EventStreamMarshaller.js\");\n/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./provider */ \"./node_modules/@smithy/eventstream-serde-universal/dist-es/provider.js\");\n\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/eventstream-serde-universal/dist-es/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/eventstream-serde-universal/dist-es/provider.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@smithy/eventstream-serde-universal/dist-es/provider.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   eventStreamSerdeProvider: () => (/* binding */ eventStreamSerdeProvider)\n/* harmony export */ });\n/* harmony import */ var _EventStreamMarshaller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventStreamMarshaller */ \"./node_modules/@smithy/eventstream-serde-universal/dist-es/EventStreamMarshaller.js\");\n\nconst eventStreamSerdeProvider = (options) => new _EventStreamMarshaller__WEBPACK_IMPORTED_MODULE_0__.EventStreamMarshaller(options);\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/eventstream-serde-universal/dist-es/provider.js?");

/***/ }),

/***/ "./node_modules/@smithy/fetch-http-handler/dist-es/fetch-http-handler.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@smithy/fetch-http-handler/dist-es/fetch-http-handler.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FetchHttpHandler: () => (/* binding */ FetchHttpHandler),\n/* harmony export */   keepAliveSupport: () => (/* binding */ keepAliveSupport)\n/* harmony export */ });\n/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/protocol-http */ \"./node_modules/@smithy/protocol-http/dist-es/index.js\");\n/* harmony import */ var _smithy_querystring_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/querystring-builder */ \"./node_modules/@smithy/querystring-builder/dist-es/index.js\");\n/* harmony import */ var _request_timeout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request-timeout */ \"./node_modules/@smithy/fetch-http-handler/dist-es/request-timeout.js\");\n\n\n\nconst keepAliveSupport = {\n    supported: Boolean(typeof Request !== \"undefined\" && \"keepalive\" in new Request(\"https://[::1]\")),\n};\nclass FetchHttpHandler {\n    static create(instanceOrOptions) {\n        if (typeof instanceOrOptions?.handle === \"function\") {\n            return instanceOrOptions;\n        }\n        return new FetchHttpHandler(instanceOrOptions);\n    }\n    constructor(options) {\n        if (typeof options === \"function\") {\n            this.configProvider = options().then((opts) => opts || {});\n        }\n        else {\n            this.config = options ?? {};\n            this.configProvider = Promise.resolve(this.config);\n        }\n    }\n    destroy() {\n    }\n    async handle(request, { abortSignal } = {}) {\n        if (!this.config) {\n            this.config = await this.configProvider;\n        }\n        const requestTimeoutInMs = this.config.requestTimeout;\n        const keepAlive = this.config.keepAlive === true;\n        if (abortSignal?.aborted) {\n            const abortError = new Error(\"Request aborted\");\n            abortError.name = \"AbortError\";\n            return Promise.reject(abortError);\n        }\n        let path = request.path;\n        const queryString = (0,_smithy_querystring_builder__WEBPACK_IMPORTED_MODULE_1__.buildQueryString)(request.query || {});\n        if (queryString) {\n            path += `?${queryString}`;\n        }\n        if (request.fragment) {\n            path += `#${request.fragment}`;\n        }\n        let auth = \"\";\n        if (request.username != null || request.password != null) {\n            const username = request.username ?? \"\";\n            const password = request.password ?? \"\";\n            auth = `${username}:${password}@`;\n        }\n        const { port, method } = request;\n        const url = `${request.protocol}//${auth}${request.hostname}${port ? `:${port}` : \"\"}${path}`;\n        const body = method === \"GET\" || method === \"HEAD\" ? undefined : request.body;\n        const requestOptions = { body, headers: new Headers(request.headers), method: method };\n        if (typeof AbortController !== \"undefined\") {\n            requestOptions[\"signal\"] = abortSignal;\n        }\n        if (keepAliveSupport.supported) {\n            requestOptions[\"keepalive\"] = keepAlive;\n        }\n        const fetchRequest = new Request(url, requestOptions);\n        const raceOfPromises = [\n            fetch(fetchRequest).then((response) => {\n                const fetchHeaders = response.headers;\n                const transformedHeaders = {};\n                for (const pair of fetchHeaders.entries()) {\n                    transformedHeaders[pair[0]] = pair[1];\n                }\n                const hasReadableStream = response.body != undefined;\n                if (!hasReadableStream) {\n                    return response.blob().then((body) => ({\n                        response: new _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse({\n                            headers: transformedHeaders,\n                            reason: response.statusText,\n                            statusCode: response.status,\n                            body,\n                        }),\n                    }));\n                }\n                return {\n                    response: new _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse({\n                        headers: transformedHeaders,\n                        reason: response.statusText,\n                        statusCode: response.status,\n                        body: response.body,\n                    }),\n                };\n            }),\n            (0,_request_timeout__WEBPACK_IMPORTED_MODULE_2__.requestTimeout)(requestTimeoutInMs),\n        ];\n        if (abortSignal) {\n            raceOfPromises.push(new Promise((resolve, reject) => {\n                abortSignal.onabort = () => {\n                    const abortError = new Error(\"Request aborted\");\n                    abortError.name = \"AbortError\";\n                    reject(abortError);\n                };\n            }));\n        }\n        return Promise.race(raceOfPromises);\n    }\n    updateHttpClientConfig(key, value) {\n        this.config = undefined;\n        this.configProvider = this.configProvider.then((config) => {\n            config[key] = value;\n            return config;\n        });\n    }\n    httpHandlerConfigs() {\n        return this.config ?? {};\n    }\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/fetch-http-handler/dist-es/fetch-http-handler.js?");

/***/ }),

/***/ "./node_modules/@smithy/fetch-http-handler/dist-es/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@smithy/fetch-http-handler/dist-es/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FetchHttpHandler: () => (/* reexport safe */ _fetch_http_handler__WEBPACK_IMPORTED_MODULE_0__.FetchHttpHandler),\n/* harmony export */   keepAliveSupport: () => (/* reexport safe */ _fetch_http_handler__WEBPACK_IMPORTED_MODULE_0__.keepAliveSupport),\n/* harmony export */   streamCollector: () => (/* reexport safe */ _stream_collector__WEBPACK_IMPORTED_MODULE_1__.streamCollector)\n/* harmony export */ });\n/* harmony import */ var _fetch_http_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch-http-handler */ \"./node_modules/@smithy/fetch-http-handler/dist-es/fetch-http-handler.js\");\n/* harmony import */ var _stream_collector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stream-collector */ \"./node_modules/@smithy/fetch-http-handler/dist-es/stream-collector.js\");\n\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/fetch-http-handler/dist-es/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/fetch-http-handler/dist-es/request-timeout.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@smithy/fetch-http-handler/dist-es/request-timeout.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   requestTimeout: () => (/* binding */ requestTimeout)\n/* harmony export */ });\nfunction requestTimeout(timeoutInMs = 0) {\n    return new Promise((resolve, reject) => {\n        if (timeoutInMs) {\n            setTimeout(() => {\n                const timeoutError = new Error(`Request did not complete within ${timeoutInMs} ms`);\n                timeoutError.name = \"TimeoutError\";\n                reject(timeoutError);\n            }, timeoutInMs);\n        }\n    });\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/fetch-http-handler/dist-es/request-timeout.js?");

/***/ }),

/***/ "./node_modules/@smithy/fetch-http-handler/dist-es/stream-collector.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@smithy/fetch-http-handler/dist-es/stream-collector.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   streamCollector: () => (/* binding */ streamCollector)\n/* harmony export */ });\n/* harmony import */ var _smithy_util_base64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-base64 */ \"./node_modules/@smithy/util-base64/dist-es/index.js\");\n\nconst streamCollector = (stream) => {\n    if (typeof Blob === \"function\" && stream instanceof Blob) {\n        return collectBlob(stream);\n    }\n    return collectStream(stream);\n};\nasync function collectBlob(blob) {\n    const base64 = await readToBase64(blob);\n    const arrayBuffer = (0,_smithy_util_base64__WEBPACK_IMPORTED_MODULE_0__.fromBase64)(base64);\n    return new Uint8Array(arrayBuffer);\n}\nasync function collectStream(stream) {\n    let res = new Uint8Array(0);\n    const reader = stream.getReader();\n    let isDone = false;\n    while (!isDone) {\n        const { done, value } = await reader.read();\n        if (value) {\n            const prior = res;\n            res = new Uint8Array(prior.length + value.length);\n            res.set(prior);\n            res.set(value, prior.length);\n        }\n        isDone = done;\n    }\n    return res;\n}\nfunction readToBase64(blob) {\n    return new Promise((resolve, reject) => {\n        const reader = new FileReader();\n        reader.onloadend = () => {\n            if (reader.readyState !== 2) {\n                return reject(new Error(\"Reader aborted too early\"));\n            }\n            const result = (reader.result ?? \"\");\n            const commaIndex = result.indexOf(\",\");\n            const dataOffset = commaIndex > -1 ? commaIndex + 1 : result.length;\n            resolve(result.substring(dataOffset));\n        };\n        reader.onabort = () => reject(new Error(\"Read aborted\"));\n        reader.onerror = () => reject(reader.error);\n        reader.readAsDataURL(blob);\n    });\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/fetch-http-handler/dist-es/stream-collector.js?");

/***/ }),

/***/ "./node_modules/@smithy/invalid-dependency/dist-es/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@smithy/invalid-dependency/dist-es/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   invalidFunction: () => (/* reexport safe */ _invalidFunction__WEBPACK_IMPORTED_MODULE_0__.invalidFunction),\n/* harmony export */   invalidProvider: () => (/* reexport safe */ _invalidProvider__WEBPACK_IMPORTED_MODULE_1__.invalidProvider)\n/* harmony export */ });\n/* harmony import */ var _invalidFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invalidFunction */ \"./node_modules/@smithy/invalid-dependency/dist-es/invalidFunction.js\");\n/* harmony import */ var _invalidProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invalidProvider */ \"./node_modules/@smithy/invalid-dependency/dist-es/invalidProvider.js\");\n\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/invalid-dependency/dist-es/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/invalid-dependency/dist-es/invalidFunction.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@smithy/invalid-dependency/dist-es/invalidFunction.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   invalidFunction: () => (/* binding */ invalidFunction)\n/* harmony export */ });\nconst invalidFunction = (message) => () => {\n    throw new Error(message);\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/invalid-dependency/dist-es/invalidFunction.js?");

/***/ }),

/***/ "./node_modules/@smithy/invalid-dependency/dist-es/invalidProvider.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@smithy/invalid-dependency/dist-es/invalidProvider.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   invalidProvider: () => (/* binding */ invalidProvider)\n/* harmony export */ });\nconst invalidProvider = (message) => () => Promise.reject(message);\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/invalid-dependency/dist-es/invalidProvider.js?");

/***/ }),

/***/ "./node_modules/@smithy/is-array-buffer/dist-es/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@smithy/is-array-buffer/dist-es/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isArrayBuffer: () => (/* binding */ isArrayBuffer)\n/* harmony export */ });\nconst isArrayBuffer = (arg) => (typeof ArrayBuffer === \"function\" && arg instanceof ArrayBuffer) ||\n    Object.prototype.toString.call(arg) === \"[object ArrayBuffer]\";\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/is-array-buffer/dist-es/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/middleware-content-length/dist-es/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@smithy/middleware-content-length/dist-es/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contentLengthMiddleware: () => (/* binding */ contentLengthMiddleware),\n/* harmony export */   contentLengthMiddlewareOptions: () => (/* binding */ contentLengthMiddlewareOptions),\n/* harmony export */   getContentLengthPlugin: () => (/* binding */ getContentLengthPlugin)\n/* harmony export */ });\n/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/protocol-http */ \"./node_modules/@smithy/protocol-http/dist-es/index.js\");\n\nconst CONTENT_LENGTH_HEADER = \"content-length\";\nfunction contentLengthMiddleware(bodyLengthChecker) {\n    return (next) => async (args) => {\n        const request = args.request;\n        if (_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest.isInstance(request)) {\n            const { body, headers } = request;\n            if (body &&\n                Object.keys(headers)\n                    .map((str) => str.toLowerCase())\n                    .indexOf(CONTENT_LENGTH_HEADER) === -1) {\n                try {\n                    const length = bodyLengthChecker(body);\n                    request.headers = {\n                        ...request.headers,\n                        [CONTENT_LENGTH_HEADER]: String(length),\n                    };\n                }\n                catch (error) {\n                }\n            }\n        }\n        return next({\n            ...args,\n            request,\n        });\n    };\n}\nconst contentLengthMiddlewareOptions = {\n    step: \"build\",\n    tags: [\"SET_CONTENT_LENGTH\", \"CONTENT_LENGTH\"],\n    name: \"contentLengthMiddleware\",\n    override: true,\n};\nconst getContentLengthPlugin = (options) => ({\n    applyToStack: (clientStack) => {\n        clientStack.add(contentLengthMiddleware(options.bodyLengthChecker), contentLengthMiddlewareOptions);\n    },\n});\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/middleware-content-length/dist-es/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/middleware-endpoint/dist-es/adaptors/createConfigValueProvider.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@smithy/middleware-endpoint/dist-es/adaptors/createConfigValueProvider.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createConfigValueProvider: () => (/* binding */ createConfigValueProvider)\n/* harmony export */ });\nconst createConfigValueProvider = (configKey, canonicalEndpointParamKey, config) => {\n    const configProvider = async () => {\n        const configValue = config[configKey] ?? config[canonicalEndpointParamKey];\n        if (typeof configValue === \"function\") {\n            return configValue();\n        }\n        return configValue;\n    };\n    if (configKey === \"credentialScope\" || canonicalEndpointParamKey === \"CredentialScope\") {\n        return async () => {\n            const credentials = typeof config.credentials === \"function\" ? await config.credentials() : config.credentials;\n            const configValue = credentials?.credentialScope ?? credentials?.CredentialScope;\n            return configValue;\n        };\n    }\n    if (configKey === \"endpoint\" || canonicalEndpointParamKey === \"endpoint\") {\n        return async () => {\n            const endpoint = await configProvider();\n            if (endpoint && typeof endpoint === \"object\") {\n                if (\"url\" in endpoint) {\n                    return endpoint.url.href;\n                }\n                if (\"hostname\" in endpoint) {\n                    const { protocol, hostname, port, path } = endpoint;\n                    return `${protocol}//${hostname}${port ? \":\" + port : \"\"}${path}`;\n                }\n            }\n            return endpoint;\n        };\n    }\n    return configProvider;\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/middleware-endpoint/dist-es/adaptors/createConfigValueProvider.js?");

/***/ }),

/***/ "./node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromConfig.browser.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromConfig.browser.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getEndpointFromConfig: () => (/* binding */ getEndpointFromConfig)\n/* harmony export */ });\nconst getEndpointFromConfig = async (serviceId) => undefined;\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromConfig.browser.js?");

/***/ }),

/***/ "./node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getEndpointFromInstructions: () => (/* binding */ getEndpointFromInstructions),\n/* harmony export */   resolveParams: () => (/* binding */ resolveParams)\n/* harmony export */ });\n/* harmony import */ var _service_customizations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service-customizations */ \"./node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/index.js\");\n/* harmony import */ var _createConfigValueProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createConfigValueProvider */ \"./node_modules/@smithy/middleware-endpoint/dist-es/adaptors/createConfigValueProvider.js\");\n/* harmony import */ var _getEndpointFromConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getEndpointFromConfig */ \"./node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromConfig.browser.js\");\n/* harmony import */ var _toEndpointV1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toEndpointV1 */ \"./node_modules/@smithy/middleware-endpoint/dist-es/adaptors/toEndpointV1.js\");\n\n\n\n\nconst getEndpointFromInstructions = async (commandInput, instructionsSupplier, clientConfig, context) => {\n    if (!clientConfig.endpoint) {\n        const endpointFromConfig = await (0,_getEndpointFromConfig__WEBPACK_IMPORTED_MODULE_2__.getEndpointFromConfig)(clientConfig.serviceId || \"\");\n        if (endpointFromConfig) {\n            clientConfig.endpoint = () => Promise.resolve((0,_toEndpointV1__WEBPACK_IMPORTED_MODULE_3__.toEndpointV1)(endpointFromConfig));\n        }\n    }\n    const endpointParams = await resolveParams(commandInput, instructionsSupplier, clientConfig);\n    if (typeof clientConfig.endpointProvider !== \"function\") {\n        throw new Error(\"config.endpointProvider is not set.\");\n    }\n    const endpoint = clientConfig.endpointProvider(endpointParams, context);\n    return endpoint;\n};\nconst resolveParams = async (commandInput, instructionsSupplier, clientConfig) => {\n    const endpointParams = {};\n    const instructions = instructionsSupplier?.getEndpointParameterInstructions?.() || {};\n    for (const [name, instruction] of Object.entries(instructions)) {\n        switch (instruction.type) {\n            case \"staticContextParams\":\n                endpointParams[name] = instruction.value;\n                break;\n            case \"contextParams\":\n                endpointParams[name] = commandInput[instruction.name];\n                break;\n            case \"clientContextParams\":\n            case \"builtInParams\":\n                endpointParams[name] = await (0,_createConfigValueProvider__WEBPACK_IMPORTED_MODULE_1__.createConfigValueProvider)(instruction.name, name, clientConfig)();\n                break;\n            default:\n                throw new Error(\"Unrecognized endpoint parameter instruction: \" + JSON.stringify(instruction));\n        }\n    }\n    if (Object.keys(instructions).length === 0) {\n        Object.assign(endpointParams, clientConfig);\n    }\n    if (String(clientConfig.serviceId).toLowerCase() === \"s3\") {\n        await (0,_service_customizations__WEBPACK_IMPORTED_MODULE_0__.resolveParamsForS3)(endpointParams);\n    }\n    return endpointParams;\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js?");

/***/ }),

/***/ "./node_modules/@smithy/middleware-endpoint/dist-es/adaptors/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@smithy/middleware-endpoint/dist-es/adaptors/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getEndpointFromInstructions: () => (/* reexport safe */ _getEndpointFromInstructions__WEBPACK_IMPORTED_MODULE_0__.getEndpointFromInstructions),\n/* harmony export */   resolveParams: () => (/* reexport safe */ _getEndpointFromInstructions__WEBPACK_IMPORTED_MODULE_0__.resolveParams),\n/* harmony export */   toEndpointV1: () => (/* reexport safe */ _toEndpointV1__WEBPACK_IMPORTED_MODULE_1__.toEndpointV1)\n/* harmony export */ });\n/* harmony import */ var _getEndpointFromInstructions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getEndpointFromInstructions */ \"./node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js\");\n/* harmony import */ var _toEndpointV1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toEndpointV1 */ \"./node_modules/@smithy/middleware-endpoint/dist-es/adaptors/toEndpointV1.js\");\n\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/middleware-endpoint/dist-es/adaptors/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/middleware-endpoint/dist-es/adaptors/toEndpointV1.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@smithy/middleware-endpoint/dist-es/adaptors/toEndpointV1.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toEndpointV1: () => (/* binding */ toEndpointV1)\n/* harmony export */ });\n/* harmony import */ var _smithy_url_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/url-parser */ \"./node_modules/@smithy/url-parser/dist-es/index.js\");\n\nconst toEndpointV1 = (endpoint) => {\n    if (typeof endpoint === \"object\") {\n        if (\"url\" in endpoint) {\n            return (0,_smithy_url_parser__WEBPACK_IMPORTED_MODULE_0__.parseUrl)(endpoint.url);\n        }\n        return endpoint;\n    }\n    return (0,_smithy_url_parser__WEBPACK_IMPORTED_MODULE_0__.parseUrl)(endpoint);\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/middleware-endpoint/dist-es/adaptors/toEndpointV1.js?");

/***/ }),

/***/ "./node_modules/@smithy/middleware-endpoint/dist-es/endpointMiddleware.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@smithy/middleware-endpoint/dist-es/endpointMiddleware.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   endpointMiddleware: () => (/* binding */ endpointMiddleware)\n/* harmony export */ });\n/* harmony import */ var _smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-middleware */ \"./node_modules/@smithy/util-middleware/dist-es/index.js\");\n/* harmony import */ var _adaptors_getEndpointFromInstructions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adaptors/getEndpointFromInstructions */ \"./node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js\");\n\n\nconst endpointMiddleware = ({ config, instructions, }) => {\n    return (next, context) => async (args) => {\n        const endpoint = await (0,_adaptors_getEndpointFromInstructions__WEBPACK_IMPORTED_MODULE_1__.getEndpointFromInstructions)(args.input, {\n            getEndpointParameterInstructions() {\n                return instructions;\n            },\n        }, { ...config }, context);\n        context.endpointV2 = endpoint;\n        context.authSchemes = endpoint.properties?.authSchemes;\n        const authScheme = context.authSchemes?.[0];\n        if (authScheme) {\n            context[\"signing_region\"] = authScheme.signingRegion;\n            context[\"signing_service\"] = authScheme.signingName;\n            const smithyContext = (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__.getSmithyContext)(context);\n            const httpAuthOption = smithyContext?.selectedHttpAuthScheme?.httpAuthOption;\n            if (httpAuthOption) {\n                httpAuthOption.signingProperties = Object.assign(httpAuthOption.signingProperties || {}, {\n                    signing_region: authScheme.signingRegion,\n                    signingRegion: authScheme.signingRegion,\n                    signing_service: authScheme.signingName,\n                    signingName: authScheme.signingName,\n                    signingRegionSet: authScheme.signingRegionSet,\n                }, authScheme.properties);\n            }\n        }\n        return next({\n            ...args,\n        });\n    };\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/middleware-endpoint/dist-es/endpointMiddleware.js?");

/***/ }),

/***/ "./node_modules/@smithy/middleware-endpoint/dist-es/getEndpointPlugin.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@smithy/middleware-endpoint/dist-es/getEndpointPlugin.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   endpointMiddlewareOptions: () => (/* binding */ endpointMiddlewareOptions),\n/* harmony export */   getEndpointPlugin: () => (/* binding */ getEndpointPlugin)\n/* harmony export */ });\n/* harmony import */ var _smithy_middleware_serde__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/middleware-serde */ \"./node_modules/@smithy/middleware-serde/dist-es/index.js\");\n/* harmony import */ var _endpointMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endpointMiddleware */ \"./node_modules/@smithy/middleware-endpoint/dist-es/endpointMiddleware.js\");\n\n\nconst endpointMiddlewareOptions = {\n    step: \"serialize\",\n    tags: [\"ENDPOINT_PARAMETERS\", \"ENDPOINT_V2\", \"ENDPOINT\"],\n    name: \"endpointV2Middleware\",\n    override: true,\n    relation: \"before\",\n    toMiddleware: _smithy_middleware_serde__WEBPACK_IMPORTED_MODULE_0__.serializerMiddlewareOption.name,\n};\nconst getEndpointPlugin = (config, instructions) => ({\n    applyToStack: (clientStack) => {\n        clientStack.addRelativeTo((0,_endpointMiddleware__WEBPACK_IMPORTED_MODULE_1__.endpointMiddleware)({\n            config,\n            instructions,\n        }), endpointMiddlewareOptions);\n    },\n});\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/middleware-endpoint/dist-es/getEndpointPlugin.js?");

/***/ }),

/***/ "./node_modules/@smithy/middleware-endpoint/dist-es/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@smithy/middleware-endpoint/dist-es/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   endpointMiddleware: () => (/* reexport safe */ _endpointMiddleware__WEBPACK_IMPORTED_MODULE_1__.endpointMiddleware),\n/* harmony export */   endpointMiddlewareOptions: () => (/* reexport safe */ _getEndpointPlugin__WEBPACK_IMPORTED_MODULE_2__.endpointMiddlewareOptions),\n/* harmony export */   getEndpointFromInstructions: () => (/* reexport safe */ _adaptors__WEBPACK_IMPORTED_MODULE_0__.getEndpointFromInstructions),\n/* harmony export */   getEndpointPlugin: () => (/* reexport safe */ _getEndpointPlugin__WEBPACK_IMPORTED_MODULE_2__.getEndpointPlugin),\n/* harmony export */   resolveEndpointConfig: () => (/* reexport safe */ _resolveEndpointConfig__WEBPACK_IMPORTED_MODULE_3__.resolveEndpointConfig),\n/* harmony export */   resolveParams: () => (/* reexport safe */ _adaptors__WEBPACK_IMPORTED_MODULE_0__.resolveParams),\n/* harmony export */   toEndpointV1: () => (/* reexport safe */ _adaptors__WEBPACK_IMPORTED_MODULE_0__.toEndpointV1)\n/* harmony export */ });\n/* harmony import */ var _adaptors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adaptors */ \"./node_modules/@smithy/middleware-endpoint/dist-es/adaptors/index.js\");\n/* harmony import */ var _endpointMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endpointMiddleware */ \"./node_modules/@smithy/middleware-endpoint/dist-es/endpointMiddleware.js\");\n/* harmony import */ var _getEndpointPlugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getEndpointPlugin */ \"./node_modules/@smithy/middleware-endpoint/dist-es/getEndpointPlugin.js\");\n/* harmony import */ var _resolveEndpointConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolveEndpointConfig */ \"./node_modules/@smithy/middleware-endpoint/dist-es/resolveEndpointConfig.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ \"./node_modules/@smithy/middleware-endpoint/dist-es/types.js\");\n\n\n\n\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/middleware-endpoint/dist-es/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/middleware-endpoint/dist-es/resolveEndpointConfig.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@smithy/middleware-endpoint/dist-es/resolveEndpointConfig.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   resolveEndpointConfig: () => (/* binding */ resolveEndpointConfig)\n/* harmony export */ });\n/* harmony import */ var _smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-middleware */ \"./node_modules/@smithy/util-middleware/dist-es/index.js\");\n/* harmony import */ var _adaptors_toEndpointV1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adaptors/toEndpointV1 */ \"./node_modules/@smithy/middleware-endpoint/dist-es/adaptors/toEndpointV1.js\");\n\n\nconst resolveEndpointConfig = (input) => {\n    const tls = input.tls ?? true;\n    const { endpoint } = input;\n    const customEndpointProvider = endpoint != null ? async () => (0,_adaptors_toEndpointV1__WEBPACK_IMPORTED_MODULE_1__.toEndpointV1)(await (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(endpoint)()) : undefined;\n    const isCustomEndpoint = !!endpoint;\n    return {\n        ...input,\n        endpoint: customEndpointProvider,\n        tls,\n        isCustomEndpoint,\n        useDualstackEndpoint: (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(input.useDualstackEndpoint ?? false),\n        useFipsEndpoint: (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(input.useFipsEndpoint ?? false),\n    };\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/middleware-endpoint/dist-es/resolveEndpointConfig.js?");

/***/ }),

/***/ "./node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/index.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DOT_PATTERN: () => (/* reexport safe */ _s3__WEBPACK_IMPORTED_MODULE_0__.DOT_PATTERN),\n/* harmony export */   S3_HOSTNAME_PATTERN: () => (/* reexport safe */ _s3__WEBPACK_IMPORTED_MODULE_0__.S3_HOSTNAME_PATTERN),\n/* harmony export */   isArnBucketName: () => (/* reexport safe */ _s3__WEBPACK_IMPORTED_MODULE_0__.isArnBucketName),\n/* harmony export */   isDnsCompatibleBucketName: () => (/* reexport safe */ _s3__WEBPACK_IMPORTED_MODULE_0__.isDnsCompatibleBucketName),\n/* harmony export */   resolveParamsForS3: () => (/* reexport safe */ _s3__WEBPACK_IMPORTED_MODULE_0__.resolveParamsForS3)\n/* harmony export */ });\n/* harmony import */ var _s3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./s3 */ \"./node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/s3.js\");\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/s3.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/s3.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DOT_PATTERN: () => (/* binding */ DOT_PATTERN),\n/* harmony export */   S3_HOSTNAME_PATTERN: () => (/* binding */ S3_HOSTNAME_PATTERN),\n/* harmony export */   isArnBucketName: () => (/* binding */ isArnBucketName),\n/* harmony export */   isDnsCompatibleBucketName: () => (/* binding */ isDnsCompatibleBucketName),\n/* harmony export */   resolveParamsForS3: () => (/* binding */ resolveParamsForS3)\n/* harmony export */ });\nconst resolveParamsForS3 = async (endpointParams) => {\n    const bucket = endpointParams?.Bucket || \"\";\n    if (typeof endpointParams.Bucket === \"string\") {\n        endpointParams.Bucket = bucket.replace(/#/g, encodeURIComponent(\"#\")).replace(/\\?/g, encodeURIComponent(\"?\"));\n    }\n    if (isArnBucketName(bucket)) {\n        if (endpointParams.ForcePathStyle === true) {\n            throw new Error(\"Path-style addressing cannot be used with ARN buckets\");\n        }\n    }\n    else if (!isDnsCompatibleBucketName(bucket) ||\n        (bucket.indexOf(\".\") !== -1 && !String(endpointParams.Endpoint).startsWith(\"http:\")) ||\n        bucket.toLowerCase() !== bucket ||\n        bucket.length < 3) {\n        endpointParams.ForcePathStyle = true;\n    }\n    if (endpointParams.DisableMultiRegionAccessPoints) {\n        endpointParams.disableMultiRegionAccessPoints = true;\n        endpointParams.DisableMRAP = true;\n    }\n    return endpointParams;\n};\nconst DOMAIN_PATTERN = /^[a-z0-9][a-z0-9\\.\\-]{1,61}[a-z0-9]$/;\nconst IP_ADDRESS_PATTERN = /(\\d+\\.){3}\\d+/;\nconst DOTS_PATTERN = /\\.\\./;\nconst DOT_PATTERN = /\\./;\nconst S3_HOSTNAME_PATTERN = /^(.+\\.)?s3(-fips)?(\\.dualstack)?[.-]([a-z0-9-]+)\\./;\nconst isDnsCompatibleBucketName = (bucketName) => DOMAIN_PATTERN.test(bucketName) && !IP_ADDRESS_PATTERN.test(bucketName) && !DOTS_PATTERN.test(bucketName);\nconst isArnBucketName = (bucketName) => {\n    const [arn, partition, service, , , bucket] = bucketName.split(\":\");\n    const isArn = arn === \"arn\" && bucketName.split(\":\").length >= 6;\n    const isValidArn = Boolean(isArn && partition && service && bucket);\n    if (isArn && !isValidArn) {\n        throw new Error(`Invalid ARN: ${bucketName} was an invalid ARN.`);\n    }\n    return isValidArn;\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/s3.js?");

/***/ }),

/***/ "./node_modules/@smithy/middleware-endpoint/dist-es/types.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@smithy/middleware-endpoint/dist-es/types.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/middleware-endpoint/dist-es/types.js?");

/***/ }),

/***/ "./node_modules/@smithy/middleware-retry/dist-es/AdaptiveRetryStrategy.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@smithy/middleware-retry/dist-es/AdaptiveRetryStrategy.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AdaptiveRetryStrategy: () => (/* binding */ AdaptiveRetryStrategy)\n/* harmony export */ });\n/* harmony import */ var _smithy_util_retry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-retry */ \"./node_modules/@smithy/util-retry/dist-es/index.js\");\n/* harmony import */ var _StandardRetryStrategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StandardRetryStrategy */ \"./node_modules/@smithy/middleware-retry/dist-es/StandardRetryStrategy.js\");\n\n\nclass AdaptiveRetryStrategy extends _StandardRetryStrategy__WEBPACK_IMPORTED_MODULE_1__.StandardRetryStrategy {\n    constructor(maxAttemptsProvider, options) {\n        const { rateLimiter, ...superOptions } = options ?? {};\n        super(maxAttemptsProvider, superOptions);\n        this.rateLimiter = rateLimiter ?? new _smithy_util_retry__WEBPACK_IMPORTED_MODULE_0__.DefaultRateLimiter();\n        this.mode = _smithy_util_retry__WEBPACK_IMPORTED_MODULE_0__.RETRY_MODES.ADAPTIVE;\n    }\n    async retry(next, args) {\n        return super.retry(next, args, {\n            beforeRequest: async () => {\n                return this.rateLimiter.getSendToken();\n            },\n            afterRequest: (response) => {\n                this.rateLimiter.updateClientSendingRate(response);\n            },\n        });\n    }\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/middleware-retry/dist-es/AdaptiveRetryStrategy.js?");

/***/ }),

/***/ "./node_modules/@smithy/middleware-retry/dist-es/StandardRetryStrategy.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@smithy/middleware-retry/dist-es/StandardRetryStrategy.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   StandardRetryStrategy: () => (/* binding */ StandardRetryStrategy)\n/* harmony export */ });\n/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/protocol-http */ \"./node_modules/@smithy/protocol-http/dist-es/index.js\");\n/* harmony import */ var _smithy_service_error_classification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/service-error-classification */ \"./node_modules/@smithy/service-error-classification/dist-es/index.js\");\n/* harmony import */ var _smithy_util_retry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smithy/util-retry */ \"./node_modules/@smithy/util-retry/dist-es/index.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _defaultRetryQuota__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaultRetryQuota */ \"./node_modules/@smithy/middleware-retry/dist-es/defaultRetryQuota.js\");\n/* harmony import */ var _delayDecider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delayDecider */ \"./node_modules/@smithy/middleware-retry/dist-es/delayDecider.js\");\n/* harmony import */ var _retryDecider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./retryDecider */ \"./node_modules/@smithy/middleware-retry/dist-es/retryDecider.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util */ \"./node_modules/@smithy/middleware-retry/dist-es/util.js\");\n\n\n\n\n\n\n\n\nclass StandardRetryStrategy {\n    constructor(maxAttemptsProvider, options) {\n        this.maxAttemptsProvider = maxAttemptsProvider;\n        this.mode = _smithy_util_retry__WEBPACK_IMPORTED_MODULE_2__.RETRY_MODES.STANDARD;\n        this.retryDecider = options?.retryDecider ?? _retryDecider__WEBPACK_IMPORTED_MODULE_5__.defaultRetryDecider;\n        this.delayDecider = options?.delayDecider ?? _delayDecider__WEBPACK_IMPORTED_MODULE_4__.defaultDelayDecider;\n        this.retryQuota = options?.retryQuota ?? (0,_defaultRetryQuota__WEBPACK_IMPORTED_MODULE_3__.getDefaultRetryQuota)(_smithy_util_retry__WEBPACK_IMPORTED_MODULE_2__.INITIAL_RETRY_TOKENS);\n    }\n    shouldRetry(error, attempts, maxAttempts) {\n        return attempts < maxAttempts && this.retryDecider(error) && this.retryQuota.hasRetryTokens(error);\n    }\n    async getMaxAttempts() {\n        let maxAttempts;\n        try {\n            maxAttempts = await this.maxAttemptsProvider();\n        }\n        catch (error) {\n            maxAttempts = _smithy_util_retry__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_MAX_ATTEMPTS;\n        }\n        return maxAttempts;\n    }\n    async retry(next, args, options) {\n        let retryTokenAmount;\n        let attempts = 0;\n        let totalDelay = 0;\n        const maxAttempts = await this.getMaxAttempts();\n        const { request } = args;\n        if (_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest.isInstance(request)) {\n            request.headers[_smithy_util_retry__WEBPACK_IMPORTED_MODULE_2__.INVOCATION_ID_HEADER] = (0,uuid__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n        }\n        while (true) {\n            try {\n                if (_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest.isInstance(request)) {\n                    request.headers[_smithy_util_retry__WEBPACK_IMPORTED_MODULE_2__.REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;\n                }\n                if (options?.beforeRequest) {\n                    await options.beforeRequest();\n                }\n                const { response, output } = await next(args);\n                if (options?.afterRequest) {\n                    options.afterRequest(response);\n                }\n                this.retryQuota.releaseRetryTokens(retryTokenAmount);\n                output.$metadata.attempts = attempts + 1;\n                output.$metadata.totalRetryDelay = totalDelay;\n                return { response, output };\n            }\n            catch (e) {\n                const err = (0,_util__WEBPACK_IMPORTED_MODULE_6__.asSdkError)(e);\n                attempts++;\n                if (this.shouldRetry(err, attempts, maxAttempts)) {\n                    retryTokenAmount = this.retryQuota.retrieveRetryTokens(err);\n                    const delayFromDecider = this.delayDecider((0,_smithy_service_error_classification__WEBPACK_IMPORTED_MODULE_1__.isThrottlingError)(err) ? _smithy_util_retry__WEBPACK_IMPORTED_MODULE_2__.THROTTLING_RETRY_DELAY_BASE : _smithy_util_retry__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_RETRY_DELAY_BASE, attempts);\n                    const delayFromResponse = getDelayFromRetryAfterHeader(err.$response);\n                    const delay = Math.max(delayFromResponse || 0, delayFromDecider);\n                    totalDelay += delay;\n                    await new Promise((resolve) => setTimeout(resolve, delay));\n                    continue;\n                }\n                if (!err.$metadata) {\n                    err.$metadata = {};\n                }\n                err.$metadata.attempts = attempts;\n                err.$metadata.totalRetryDelay = totalDelay;\n                throw err;\n            }\n        }\n    }\n}\nconst getDelayFromRetryAfterHeader = (response) => {\n    if (!_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse.isInstance(response))\n        return;\n    const retryAfterHeaderName = Object.keys(response.headers).find((key) => key.toLowerCase() === \"retry-after\");\n    if (!retryAfterHeaderName)\n        return;\n    const retryAfter = response.headers[retryAfterHeaderName];\n    const retryAfterSeconds = Number(retryAfter);\n    if (!Number.isNaN(retryAfterSeconds))\n        return retryAfterSeconds * 1000;\n    const retryAfterDate = new Date(retryAfter);\n    return retryAfterDate.getTime() - Date.now();\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/middleware-retry/dist-es/StandardRetryStrategy.js?");

/***/ }),

/***/ "./node_modules/@smithy/middleware-retry/dist-es/configurations.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@smithy/middleware-retry/dist-es/configurations.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CONFIG_MAX_ATTEMPTS: () => (/* binding */ CONFIG_MAX_ATTEMPTS),\n/* harmony export */   CONFIG_RETRY_MODE: () => (/* binding */ CONFIG_RETRY_MODE),\n/* harmony export */   ENV_MAX_ATTEMPTS: () => (/* binding */ ENV_MAX_ATTEMPTS),\n/* harmony export */   ENV_RETRY_MODE: () => (/* binding */ ENV_RETRY_MODE),\n/* harmony export */   NODE_MAX_ATTEMPT_CONFIG_OPTIONS: () => (/* binding */ NODE_MAX_ATTEMPT_CONFIG_OPTIONS),\n/* harmony export */   NODE_RETRY_MODE_CONFIG_OPTIONS: () => (/* binding */ NODE_RETRY_MODE_CONFIG_OPTIONS),\n/* harmony export */   resolveRetryConfig: () => (/* binding */ resolveRetryConfig)\n/* harmony export */ });\n/* harmony import */ var _smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-middleware */ \"./node_modules/@smithy/util-middleware/dist-es/index.js\");\n/* harmony import */ var _smithy_util_retry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/util-retry */ \"./node_modules/@smithy/util-retry/dist-es/index.js\");\n\n\nconst ENV_MAX_ATTEMPTS = \"AWS_MAX_ATTEMPTS\";\nconst CONFIG_MAX_ATTEMPTS = \"max_attempts\";\nconst NODE_MAX_ATTEMPT_CONFIG_OPTIONS = {\n    environmentVariableSelector: (env) => {\n        const value = env[ENV_MAX_ATTEMPTS];\n        if (!value)\n            return undefined;\n        const maxAttempt = parseInt(value);\n        if (Number.isNaN(maxAttempt)) {\n            throw new Error(`Environment variable ${ENV_MAX_ATTEMPTS} mast be a number, got \"${value}\"`);\n        }\n        return maxAttempt;\n    },\n    configFileSelector: (profile) => {\n        const value = profile[CONFIG_MAX_ATTEMPTS];\n        if (!value)\n            return undefined;\n        const maxAttempt = parseInt(value);\n        if (Number.isNaN(maxAttempt)) {\n            throw new Error(`Shared config file entry ${CONFIG_MAX_ATTEMPTS} mast be a number, got \"${value}\"`);\n        }\n        return maxAttempt;\n    },\n    default: _smithy_util_retry__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_MAX_ATTEMPTS,\n};\nconst resolveRetryConfig = (input) => {\n    const { retryStrategy } = input;\n    const maxAttempts = (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(input.maxAttempts ?? _smithy_util_retry__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_MAX_ATTEMPTS);\n    return {\n        ...input,\n        maxAttempts,\n        retryStrategy: async () => {\n            if (retryStrategy) {\n                return retryStrategy;\n            }\n            const retryMode = await (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(input.retryMode)();\n            if (retryMode === _smithy_util_retry__WEBPACK_IMPORTED_MODULE_1__.RETRY_MODES.ADAPTIVE) {\n                return new _smithy_util_retry__WEBPACK_IMPORTED_MODULE_1__.AdaptiveRetryStrategy(maxAttempts);\n            }\n            return new _smithy_util_retry__WEBPACK_IMPORTED_MODULE_1__.StandardRetryStrategy(maxAttempts);\n        },\n    };\n};\nconst ENV_RETRY_MODE = \"AWS_RETRY_MODE\";\nconst CONFIG_RETRY_MODE = \"retry_mode\";\nconst NODE_RETRY_MODE_CONFIG_OPTIONS = {\n    environmentVariableSelector: (env) => env[ENV_RETRY_MODE],\n    configFileSelector: (profile) => profile[CONFIG_RETRY_MODE],\n    default: _smithy_util_retry__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_RETRY_MODE,\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/middleware-retry/dist-es/configurations.js?");

/***/ }),

/***/ "./node_modules/@smithy/middleware-retry/dist-es/defaultRetryQuota.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@smithy/middleware-retry/dist-es/defaultRetryQuota.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDefaultRetryQuota: () => (/* binding */ getDefaultRetryQuota)\n/* harmony export */ });\n/* harmony import */ var _smithy_util_retry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-retry */ \"./node_modules/@smithy/util-retry/dist-es/index.js\");\n\nconst getDefaultRetryQuota = (initialRetryTokens, options) => {\n    const MAX_CAPACITY = initialRetryTokens;\n    const noRetryIncrement = options?.noRetryIncrement ?? _smithy_util_retry__WEBPACK_IMPORTED_MODULE_0__.NO_RETRY_INCREMENT;\n    const retryCost = options?.retryCost ?? _smithy_util_retry__WEBPACK_IMPORTED_MODULE_0__.RETRY_COST;\n    const timeoutRetryCost = options?.timeoutRetryCost ?? _smithy_util_retry__WEBPACK_IMPORTED_MODULE_0__.TIMEOUT_RETRY_COST;\n    let availableCapacity = initialRetryTokens;\n    const getCapacityAmount = (error) => (error.name === \"TimeoutError\" ? timeoutRetryCost : retryCost);\n    const hasRetryTokens = (error) => getCapacityAmount(error) <= availableCapacity;\n    const retrieveRetryTokens = (error) => {\n        if (!hasRetryTokens(error)) {\n            throw new Error(\"No retry token available\");\n        }\n        const capacityAmount = getCapacityAmount(error);\n        availableCapacity -= capacityAmount;\n        return capacityAmount;\n    };\n    const releaseRetryTokens = (capacityReleaseAmount) => {\n        availableCapacity += capacityReleaseAmount ?? noRetryIncrement;\n        availableCapacity = Math.min(availableCapacity, MAX_CAPACITY);\n    };\n    return Object.freeze({\n        hasRetryTokens,\n        retrieveRetryTokens,\n        releaseRetryTokens,\n    });\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/middleware-retry/dist-es/defaultRetryQuota.js?");

/***/ }),

/***/ "./node_modules/@smithy/middleware-retry/dist-es/delayDecider.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@smithy/middleware-retry/dist-es/delayDecider.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   defaultDelayDecider: () => (/* binding */ defaultDelayDecider)\n/* harmony export */ });\n/* harmony import */ var _smithy_util_retry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-retry */ \"./node_modules/@smithy/util-retry/dist-es/index.js\");\n\nconst defaultDelayDecider = (delayBase, attempts) => Math.floor(Math.min(_smithy_util_retry__WEBPACK_IMPORTED_MODULE_0__.MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase));\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/middleware-retry/dist-es/delayDecider.js?");

/***/ }),

/***/ "./node_modules/@smithy/middleware-retry/dist-es/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@smithy/middleware-retry/dist-es/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AdaptiveRetryStrategy: () => (/* reexport safe */ _AdaptiveRetryStrategy__WEBPACK_IMPORTED_MODULE_0__.AdaptiveRetryStrategy),\n/* harmony export */   CONFIG_MAX_ATTEMPTS: () => (/* reexport safe */ _configurations__WEBPACK_IMPORTED_MODULE_2__.CONFIG_MAX_ATTEMPTS),\n/* harmony export */   CONFIG_RETRY_MODE: () => (/* reexport safe */ _configurations__WEBPACK_IMPORTED_MODULE_2__.CONFIG_RETRY_MODE),\n/* harmony export */   ENV_MAX_ATTEMPTS: () => (/* reexport safe */ _configurations__WEBPACK_IMPORTED_MODULE_2__.ENV_MAX_ATTEMPTS),\n/* harmony export */   ENV_RETRY_MODE: () => (/* reexport safe */ _configurations__WEBPACK_IMPORTED_MODULE_2__.ENV_RETRY_MODE),\n/* harmony export */   NODE_MAX_ATTEMPT_CONFIG_OPTIONS: () => (/* reexport safe */ _configurations__WEBPACK_IMPORTED_MODULE_2__.NODE_MAX_ATTEMPT_CONFIG_OPTIONS),\n/* harmony export */   NODE_RETRY_MODE_CONFIG_OPTIONS: () => (/* reexport safe */ _configurations__WEBPACK_IMPORTED_MODULE_2__.NODE_RETRY_MODE_CONFIG_OPTIONS),\n/* harmony export */   StandardRetryStrategy: () => (/* reexport safe */ _StandardRetryStrategy__WEBPACK_IMPORTED_MODULE_1__.StandardRetryStrategy),\n/* harmony export */   defaultDelayDecider: () => (/* reexport safe */ _delayDecider__WEBPACK_IMPORTED_MODULE_3__.defaultDelayDecider),\n/* harmony export */   defaultRetryDecider: () => (/* reexport safe */ _retryDecider__WEBPACK_IMPORTED_MODULE_5__.defaultRetryDecider),\n/* harmony export */   getOmitRetryHeadersPlugin: () => (/* reexport safe */ _omitRetryHeadersMiddleware__WEBPACK_IMPORTED_MODULE_4__.getOmitRetryHeadersPlugin),\n/* harmony export */   getRetryAfterHint: () => (/* reexport safe */ _retryMiddleware__WEBPACK_IMPORTED_MODULE_6__.getRetryAfterHint),\n/* harmony export */   getRetryPlugin: () => (/* reexport safe */ _retryMiddleware__WEBPACK_IMPORTED_MODULE_6__.getRetryPlugin),\n/* harmony export */   omitRetryHeadersMiddleware: () => (/* reexport safe */ _omitRetryHeadersMiddleware__WEBPACK_IMPORTED_MODULE_4__.omitRetryHeadersMiddleware),\n/* harmony export */   omitRetryHeadersMiddlewareOptions: () => (/* reexport safe */ _omitRetryHeadersMiddleware__WEBPACK_IMPORTED_MODULE_4__.omitRetryHeadersMiddlewareOptions),\n/* harmony export */   resolveRetryConfig: () => (/* reexport safe */ _configurations__WEBPACK_IMPORTED_MODULE_2__.resolveRetryConfig),\n/* harmony export */   retryMiddleware: () => (/* reexport safe */ _retryMiddleware__WEBPACK_IMPORTED_MODULE_6__.retryMiddleware),\n/* harmony export */   retryMiddlewareOptions: () => (/* reexport safe */ _retryMiddleware__WEBPACK_IMPORTED_MODULE_6__.retryMiddlewareOptions)\n/* harmony export */ });\n/* harmony import */ var _AdaptiveRetryStrategy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdaptiveRetryStrategy */ \"./node_modules/@smithy/middleware-retry/dist-es/AdaptiveRetryStrategy.js\");\n/* harmony import */ var _StandardRetryStrategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StandardRetryStrategy */ \"./node_modules/@smithy/middleware-retry/dist-es/StandardRetryStrategy.js\");\n/* harmony import */ var _configurations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configurations */ \"./node_modules/@smithy/middleware-retry/dist-es/configurations.js\");\n/* harmony import */ var _delayDecider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delayDecider */ \"./node_modules/@smithy/middleware-retry/dist-es/delayDecider.js\");\n/* harmony import */ var _omitRetryHeadersMiddleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./omitRetryHeadersMiddleware */ \"./node_modules/@smithy/middleware-retry/dist-es/omitRetryHeadersMiddleware.js\");\n/* harmony import */ var _retryDecider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./retryDecider */ \"./node_modules/@smithy/middleware-retry/dist-es/retryDecider.js\");\n/* harmony import */ var _retryMiddleware__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./retryMiddleware */ \"./node_modules/@smithy/middleware-retry/dist-es/retryMiddleware.js\");\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/middleware-retry/dist-es/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/middleware-retry/dist-es/isStreamingPayload/isStreamingPayload.browser.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@smithy/middleware-retry/dist-es/isStreamingPayload/isStreamingPayload.browser.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isStreamingPayload: () => (/* binding */ isStreamingPayload)\n/* harmony export */ });\nconst isStreamingPayload = (request) => request?.body instanceof ReadableStream;\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/middleware-retry/dist-es/isStreamingPayload/isStreamingPayload.browser.js?");

/***/ }),

/***/ "./node_modules/@smithy/middleware-retry/dist-es/omitRetryHeadersMiddleware.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@smithy/middleware-retry/dist-es/omitRetryHeadersMiddleware.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getOmitRetryHeadersPlugin: () => (/* binding */ getOmitRetryHeadersPlugin),\n/* harmony export */   omitRetryHeadersMiddleware: () => (/* binding */ omitRetryHeadersMiddleware),\n/* harmony export */   omitRetryHeadersMiddlewareOptions: () => (/* binding */ omitRetryHeadersMiddlewareOptions)\n/* harmony export */ });\n/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/protocol-http */ \"./node_modules/@smithy/protocol-http/dist-es/index.js\");\n/* harmony import */ var _smithy_util_retry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/util-retry */ \"./node_modules/@smithy/util-retry/dist-es/index.js\");\n\n\nconst omitRetryHeadersMiddleware = () => (next) => async (args) => {\n    const { request } = args;\n    if (_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest.isInstance(request)) {\n        delete request.headers[_smithy_util_retry__WEBPACK_IMPORTED_MODULE_1__.INVOCATION_ID_HEADER];\n        delete request.headers[_smithy_util_retry__WEBPACK_IMPORTED_MODULE_1__.REQUEST_HEADER];\n    }\n    return next(args);\n};\nconst omitRetryHeadersMiddlewareOptions = {\n    name: \"omitRetryHeadersMiddleware\",\n    tags: [\"RETRY\", \"HEADERS\", \"OMIT_RETRY_HEADERS\"],\n    relation: \"before\",\n    toMiddleware: \"awsAuthMiddleware\",\n    override: true,\n};\nconst getOmitRetryHeadersPlugin = (options) => ({\n    applyToStack: (clientStack) => {\n        clientStack.addRelativeTo(omitRetryHeadersMiddleware(), omitRetryHeadersMiddlewareOptions);\n    },\n});\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/middleware-retry/dist-es/omitRetryHeadersMiddleware.js?");

/***/ }),

/***/ "./node_modules/@smithy/middleware-retry/dist-es/retryDecider.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@smithy/middleware-retry/dist-es/retryDecider.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   defaultRetryDecider: () => (/* binding */ defaultRetryDecider)\n/* harmony export */ });\n/* harmony import */ var _smithy_service_error_classification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/service-error-classification */ \"./node_modules/@smithy/service-error-classification/dist-es/index.js\");\n\nconst defaultRetryDecider = (error) => {\n    if (!error) {\n        return false;\n    }\n    return (0,_smithy_service_error_classification__WEBPACK_IMPORTED_MODULE_0__.isRetryableByTrait)(error) || (0,_smithy_service_error_classification__WEBPACK_IMPORTED_MODULE_0__.isClockSkewError)(error) || (0,_smithy_service_error_classification__WEBPACK_IMPORTED_MODULE_0__.isThrottlingError)(error) || (0,_smithy_service_error_classification__WEBPACK_IMPORTED_MODULE_0__.isTransientError)(error);\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/middleware-retry/dist-es/retryDecider.js?");

/***/ }),

/***/ "./node_modules/@smithy/middleware-retry/dist-es/retryMiddleware.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@smithy/middleware-retry/dist-es/retryMiddleware.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getRetryAfterHint: () => (/* binding */ getRetryAfterHint),\n/* harmony export */   getRetryPlugin: () => (/* binding */ getRetryPlugin),\n/* harmony export */   retryMiddleware: () => (/* binding */ retryMiddleware),\n/* harmony export */   retryMiddlewareOptions: () => (/* binding */ retryMiddlewareOptions)\n/* harmony export */ });\n/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/protocol-http */ \"./node_modules/@smithy/protocol-http/dist-es/index.js\");\n/* harmony import */ var _smithy_service_error_classification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/service-error-classification */ \"./node_modules/@smithy/service-error-classification/dist-es/index.js\");\n/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smithy/smithy-client */ \"./node_modules/@smithy/smithy-client/dist-es/index.js\");\n/* harmony import */ var _smithy_util_retry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smithy/util-retry */ \"./node_modules/@smithy/util-retry/dist-es/index.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _isStreamingPayload_isStreamingPayload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isStreamingPayload/isStreamingPayload */ \"./node_modules/@smithy/middleware-retry/dist-es/isStreamingPayload/isStreamingPayload.browser.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util */ \"./node_modules/@smithy/middleware-retry/dist-es/util.js\");\n\n\n\n\n\n\n\nconst retryMiddleware = (options) => (next, context) => async (args) => {\n    let retryStrategy = await options.retryStrategy();\n    const maxAttempts = await options.maxAttempts();\n    if (isRetryStrategyV2(retryStrategy)) {\n        retryStrategy = retryStrategy;\n        let retryToken = await retryStrategy.acquireInitialRetryToken(context[\"partition_id\"]);\n        let lastError = new Error();\n        let attempts = 0;\n        let totalRetryDelay = 0;\n        const { request } = args;\n        const isRequest = _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest.isInstance(request);\n        if (isRequest) {\n            request.headers[_smithy_util_retry__WEBPACK_IMPORTED_MODULE_3__.INVOCATION_ID_HEADER] = (0,uuid__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n        }\n        while (true) {\n            try {\n                if (isRequest) {\n                    request.headers[_smithy_util_retry__WEBPACK_IMPORTED_MODULE_3__.REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;\n                }\n                const { response, output } = await next(args);\n                retryStrategy.recordSuccess(retryToken);\n                output.$metadata.attempts = attempts + 1;\n                output.$metadata.totalRetryDelay = totalRetryDelay;\n                return { response, output };\n            }\n            catch (e) {\n                const retryErrorInfo = getRetryErrorInfo(e);\n                lastError = (0,_util__WEBPACK_IMPORTED_MODULE_5__.asSdkError)(e);\n                if (isRequest && (0,_isStreamingPayload_isStreamingPayload__WEBPACK_IMPORTED_MODULE_4__.isStreamingPayload)(request)) {\n                    (context.logger instanceof _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.NoOpLogger ? console : context.logger)?.warn(\"An error was encountered in a non-retryable streaming request.\");\n                    throw lastError;\n                }\n                try {\n                    retryToken = await retryStrategy.refreshRetryTokenForRetry(retryToken, retryErrorInfo);\n                }\n                catch (refreshError) {\n                    if (!lastError.$metadata) {\n                        lastError.$metadata = {};\n                    }\n                    lastError.$metadata.attempts = attempts + 1;\n                    lastError.$metadata.totalRetryDelay = totalRetryDelay;\n                    throw lastError;\n                }\n                attempts = retryToken.getRetryCount();\n                const delay = retryToken.getRetryDelay();\n                totalRetryDelay += delay;\n                await new Promise((resolve) => setTimeout(resolve, delay));\n            }\n        }\n    }\n    else {\n        retryStrategy = retryStrategy;\n        if (retryStrategy?.mode)\n            context.userAgent = [...(context.userAgent || []), [\"cfg/retry-mode\", retryStrategy.mode]];\n        return retryStrategy.retry(next, args);\n    }\n};\nconst isRetryStrategyV2 = (retryStrategy) => typeof retryStrategy.acquireInitialRetryToken !== \"undefined\" &&\n    typeof retryStrategy.refreshRetryTokenForRetry !== \"undefined\" &&\n    typeof retryStrategy.recordSuccess !== \"undefined\";\nconst getRetryErrorInfo = (error) => {\n    const errorInfo = {\n        error,\n        errorType: getRetryErrorType(error),\n    };\n    const retryAfterHint = getRetryAfterHint(error.$response);\n    if (retryAfterHint) {\n        errorInfo.retryAfterHint = retryAfterHint;\n    }\n    return errorInfo;\n};\nconst getRetryErrorType = (error) => {\n    if ((0,_smithy_service_error_classification__WEBPACK_IMPORTED_MODULE_1__.isThrottlingError)(error))\n        return \"THROTTLING\";\n    if ((0,_smithy_service_error_classification__WEBPACK_IMPORTED_MODULE_1__.isTransientError)(error))\n        return \"TRANSIENT\";\n    if ((0,_smithy_service_error_classification__WEBPACK_IMPORTED_MODULE_1__.isServerError)(error))\n        return \"SERVER_ERROR\";\n    return \"CLIENT_ERROR\";\n};\nconst retryMiddlewareOptions = {\n    name: \"retryMiddleware\",\n    tags: [\"RETRY\"],\n    step: \"finalizeRequest\",\n    priority: \"high\",\n    override: true,\n};\nconst getRetryPlugin = (options) => ({\n    applyToStack: (clientStack) => {\n        clientStack.add(retryMiddleware(options), retryMiddlewareOptions);\n    },\n});\nconst getRetryAfterHint = (response) => {\n    if (!_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse.isInstance(response))\n        return;\n    const retryAfterHeaderName = Object.keys(response.headers).find((key) => key.toLowerCase() === \"retry-after\");\n    if (!retryAfterHeaderName)\n        return;\n    const retryAfter = response.headers[retryAfterHeaderName];\n    const retryAfterSeconds = Number(retryAfter);\n    if (!Number.isNaN(retryAfterSeconds))\n        return new Date(retryAfterSeconds * 1000);\n    const retryAfterDate = new Date(retryAfter);\n    return retryAfterDate;\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/middleware-retry/dist-es/retryMiddleware.js?");

/***/ }),

/***/ "./node_modules/@smithy/middleware-retry/dist-es/util.js":
/*!***************************************************************!*\
  !*** ./node_modules/@smithy/middleware-retry/dist-es/util.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   asSdkError: () => (/* binding */ asSdkError)\n/* harmony export */ });\nconst asSdkError = (error) => {\n    if (error instanceof Error)\n        return error;\n    if (error instanceof Object)\n        return Object.assign(new Error(), error);\n    if (typeof error === \"string\")\n        return new Error(error);\n    return new Error(`AWS SDK error wrapper for ${error}`);\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/middleware-retry/dist-es/util.js?");

/***/ }),

/***/ "./node_modules/@smithy/middleware-serde/dist-es/deserializerMiddleware.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@smithy/middleware-serde/dist-es/deserializerMiddleware.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deserializerMiddleware: () => (/* binding */ deserializerMiddleware)\n/* harmony export */ });\nconst deserializerMiddleware = (options, deserializer) => (next, context) => async (args) => {\n    const { response } = await next(args);\n    try {\n        const parsed = await deserializer(response, options);\n        return {\n            response,\n            output: parsed,\n        };\n    }\n    catch (error) {\n        Object.defineProperty(error, \"$response\", {\n            value: response,\n        });\n        if (!(\"$metadata\" in error)) {\n            const hint = `Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;\n            error.message += \"\\n  \" + hint;\n            if (typeof error.$responseBodyText !== \"undefined\") {\n                if (error.$response) {\n                    error.$response.body = error.$responseBodyText;\n                }\n            }\n        }\n        throw error;\n    }\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/middleware-serde/dist-es/deserializerMiddleware.js?");

/***/ }),

/***/ "./node_modules/@smithy/middleware-serde/dist-es/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@smithy/middleware-serde/dist-es/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deserializerMiddleware: () => (/* reexport safe */ _deserializerMiddleware__WEBPACK_IMPORTED_MODULE_0__.deserializerMiddleware),\n/* harmony export */   deserializerMiddlewareOption: () => (/* reexport safe */ _serdePlugin__WEBPACK_IMPORTED_MODULE_1__.deserializerMiddlewareOption),\n/* harmony export */   getSerdePlugin: () => (/* reexport safe */ _serdePlugin__WEBPACK_IMPORTED_MODULE_1__.getSerdePlugin),\n/* harmony export */   serializerMiddleware: () => (/* reexport safe */ _serializerMiddleware__WEBPACK_IMPORTED_MODULE_2__.serializerMiddleware),\n/* harmony export */   serializerMiddlewareOption: () => (/* reexport safe */ _serdePlugin__WEBPACK_IMPORTED_MODULE_1__.serializerMiddlewareOption)\n/* harmony export */ });\n/* harmony import */ var _deserializerMiddleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deserializerMiddleware */ \"./node_modules/@smithy/middleware-serde/dist-es/deserializerMiddleware.js\");\n/* harmony import */ var _serdePlugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serdePlugin */ \"./node_modules/@smithy/middleware-serde/dist-es/serdePlugin.js\");\n/* harmony import */ var _serializerMiddleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./serializerMiddleware */ \"./node_modules/@smithy/middleware-serde/dist-es/serializerMiddleware.js\");\n\n\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/middleware-serde/dist-es/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/middleware-serde/dist-es/serdePlugin.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@smithy/middleware-serde/dist-es/serdePlugin.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deserializerMiddlewareOption: () => (/* binding */ deserializerMiddlewareOption),\n/* harmony export */   getSerdePlugin: () => (/* binding */ getSerdePlugin),\n/* harmony export */   serializerMiddlewareOption: () => (/* binding */ serializerMiddlewareOption)\n/* harmony export */ });\n/* harmony import */ var _deserializerMiddleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deserializerMiddleware */ \"./node_modules/@smithy/middleware-serde/dist-es/deserializerMiddleware.js\");\n/* harmony import */ var _serializerMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serializerMiddleware */ \"./node_modules/@smithy/middleware-serde/dist-es/serializerMiddleware.js\");\n\n\nconst deserializerMiddlewareOption = {\n    name: \"deserializerMiddleware\",\n    step: \"deserialize\",\n    tags: [\"DESERIALIZER\"],\n    override: true,\n};\nconst serializerMiddlewareOption = {\n    name: \"serializerMiddleware\",\n    step: \"serialize\",\n    tags: [\"SERIALIZER\"],\n    override: true,\n};\nfunction getSerdePlugin(config, serializer, deserializer) {\n    return {\n        applyToStack: (commandStack) => {\n            commandStack.add((0,_deserializerMiddleware__WEBPACK_IMPORTED_MODULE_0__.deserializerMiddleware)(config, deserializer), deserializerMiddlewareOption);\n            commandStack.add((0,_serializerMiddleware__WEBPACK_IMPORTED_MODULE_1__.serializerMiddleware)(config, serializer), serializerMiddlewareOption);\n        },\n    };\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/middleware-serde/dist-es/serdePlugin.js?");

/***/ }),

/***/ "./node_modules/@smithy/middleware-serde/dist-es/serializerMiddleware.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@smithy/middleware-serde/dist-es/serializerMiddleware.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   serializerMiddleware: () => (/* binding */ serializerMiddleware)\n/* harmony export */ });\nconst serializerMiddleware = (options, serializer) => (next, context) => async (args) => {\n    const endpoint = context.endpointV2?.url && options.urlParser\n        ? async () => options.urlParser(context.endpointV2.url)\n        : options.endpoint;\n    if (!endpoint) {\n        throw new Error(\"No valid endpoint provider available.\");\n    }\n    const request = await serializer(args.input, { ...options, endpoint });\n    return next({\n        ...args,\n        request,\n    });\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/middleware-serde/dist-es/serializerMiddleware.js?");

/***/ }),

/***/ "./node_modules/@smithy/middleware-stack/dist-es/MiddlewareStack.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@smithy/middleware-stack/dist-es/MiddlewareStack.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   constructStack: () => (/* binding */ constructStack)\n/* harmony export */ });\nconst getAllAliases = (name, aliases) => {\n    const _aliases = [];\n    if (name) {\n        _aliases.push(name);\n    }\n    if (aliases) {\n        for (const alias of aliases) {\n            _aliases.push(alias);\n        }\n    }\n    return _aliases;\n};\nconst getMiddlewareNameWithAliases = (name, aliases) => {\n    return `${name || \"anonymous\"}${aliases && aliases.length > 0 ? ` (a.k.a. ${aliases.join(\",\")})` : \"\"}`;\n};\nconst constructStack = () => {\n    let absoluteEntries = [];\n    let relativeEntries = [];\n    let identifyOnResolve = false;\n    const entriesNameSet = new Set();\n    const sort = (entries) => entries.sort((a, b) => stepWeights[b.step] - stepWeights[a.step] ||\n        priorityWeights[b.priority || \"normal\"] - priorityWeights[a.priority || \"normal\"]);\n    const removeByName = (toRemove) => {\n        let isRemoved = false;\n        const filterCb = (entry) => {\n            const aliases = getAllAliases(entry.name, entry.aliases);\n            if (aliases.includes(toRemove)) {\n                isRemoved = true;\n                for (const alias of aliases) {\n                    entriesNameSet.delete(alias);\n                }\n                return false;\n            }\n            return true;\n        };\n        absoluteEntries = absoluteEntries.filter(filterCb);\n        relativeEntries = relativeEntries.filter(filterCb);\n        return isRemoved;\n    };\n    const removeByReference = (toRemove) => {\n        let isRemoved = false;\n        const filterCb = (entry) => {\n            if (entry.middleware === toRemove) {\n                isRemoved = true;\n                for (const alias of getAllAliases(entry.name, entry.aliases)) {\n                    entriesNameSet.delete(alias);\n                }\n                return false;\n            }\n            return true;\n        };\n        absoluteEntries = absoluteEntries.filter(filterCb);\n        relativeEntries = relativeEntries.filter(filterCb);\n        return isRemoved;\n    };\n    const cloneTo = (toStack) => {\n        absoluteEntries.forEach((entry) => {\n            toStack.add(entry.middleware, { ...entry });\n        });\n        relativeEntries.forEach((entry) => {\n            toStack.addRelativeTo(entry.middleware, { ...entry });\n        });\n        toStack.identifyOnResolve?.(stack.identifyOnResolve());\n        return toStack;\n    };\n    const expandRelativeMiddlewareList = (from) => {\n        const expandedMiddlewareList = [];\n        from.before.forEach((entry) => {\n            if (entry.before.length === 0 && entry.after.length === 0) {\n                expandedMiddlewareList.push(entry);\n            }\n            else {\n                expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));\n            }\n        });\n        expandedMiddlewareList.push(from);\n        from.after.reverse().forEach((entry) => {\n            if (entry.before.length === 0 && entry.after.length === 0) {\n                expandedMiddlewareList.push(entry);\n            }\n            else {\n                expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));\n            }\n        });\n        return expandedMiddlewareList;\n    };\n    const getMiddlewareList = (debug = false) => {\n        const normalizedAbsoluteEntries = [];\n        const normalizedRelativeEntries = [];\n        const normalizedEntriesNameMap = {};\n        absoluteEntries.forEach((entry) => {\n            const normalizedEntry = {\n                ...entry,\n                before: [],\n                after: [],\n            };\n            for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {\n                normalizedEntriesNameMap[alias] = normalizedEntry;\n            }\n            normalizedAbsoluteEntries.push(normalizedEntry);\n        });\n        relativeEntries.forEach((entry) => {\n            const normalizedEntry = {\n                ...entry,\n                before: [],\n                after: [],\n            };\n            for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {\n                normalizedEntriesNameMap[alias] = normalizedEntry;\n            }\n            normalizedRelativeEntries.push(normalizedEntry);\n        });\n        normalizedRelativeEntries.forEach((entry) => {\n            if (entry.toMiddleware) {\n                const toMiddleware = normalizedEntriesNameMap[entry.toMiddleware];\n                if (toMiddleware === undefined) {\n                    if (debug) {\n                        return;\n                    }\n                    throw new Error(`${entry.toMiddleware} is not found when adding ` +\n                        `${getMiddlewareNameWithAliases(entry.name, entry.aliases)} ` +\n                        `middleware ${entry.relation} ${entry.toMiddleware}`);\n                }\n                if (entry.relation === \"after\") {\n                    toMiddleware.after.push(entry);\n                }\n                if (entry.relation === \"before\") {\n                    toMiddleware.before.push(entry);\n                }\n            }\n        });\n        const mainChain = sort(normalizedAbsoluteEntries)\n            .map(expandRelativeMiddlewareList)\n            .reduce((wholeList, expandedMiddlewareList) => {\n            wholeList.push(...expandedMiddlewareList);\n            return wholeList;\n        }, []);\n        return mainChain;\n    };\n    const stack = {\n        add: (middleware, options = {}) => {\n            const { name, override, aliases: _aliases } = options;\n            const entry = {\n                step: \"initialize\",\n                priority: \"normal\",\n                middleware,\n                ...options,\n            };\n            const aliases = getAllAliases(name, _aliases);\n            if (aliases.length > 0) {\n                if (aliases.some((alias) => entriesNameSet.has(alias))) {\n                    if (!override)\n                        throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);\n                    for (const alias of aliases) {\n                        const toOverrideIndex = absoluteEntries.findIndex((entry) => entry.name === alias || entry.aliases?.some((a) => a === alias));\n                        if (toOverrideIndex === -1) {\n                            continue;\n                        }\n                        const toOverride = absoluteEntries[toOverrideIndex];\n                        if (toOverride.step !== entry.step || entry.priority !== toOverride.priority) {\n                            throw new Error(`\"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}\" middleware with ` +\n                                `${toOverride.priority} priority in ${toOverride.step} step cannot ` +\n                                `be overridden by \"${getMiddlewareNameWithAliases(name, _aliases)}\" middleware with ` +\n                                `${entry.priority} priority in ${entry.step} step.`);\n                        }\n                        absoluteEntries.splice(toOverrideIndex, 1);\n                    }\n                }\n                for (const alias of aliases) {\n                    entriesNameSet.add(alias);\n                }\n            }\n            absoluteEntries.push(entry);\n        },\n        addRelativeTo: (middleware, options) => {\n            const { name, override, aliases: _aliases } = options;\n            const entry = {\n                middleware,\n                ...options,\n            };\n            const aliases = getAllAliases(name, _aliases);\n            if (aliases.length > 0) {\n                if (aliases.some((alias) => entriesNameSet.has(alias))) {\n                    if (!override)\n                        throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);\n                    for (const alias of aliases) {\n                        const toOverrideIndex = relativeEntries.findIndex((entry) => entry.name === alias || entry.aliases?.some((a) => a === alias));\n                        if (toOverrideIndex === -1) {\n                            continue;\n                        }\n                        const toOverride = relativeEntries[toOverrideIndex];\n                        if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {\n                            throw new Error(`\"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}\" middleware ` +\n                                `${toOverride.relation} \"${toOverride.toMiddleware}\" middleware cannot be overridden ` +\n                                `by \"${getMiddlewareNameWithAliases(name, _aliases)}\" middleware ${entry.relation} ` +\n                                `\"${entry.toMiddleware}\" middleware.`);\n                        }\n                        relativeEntries.splice(toOverrideIndex, 1);\n                    }\n                }\n                for (const alias of aliases) {\n                    entriesNameSet.add(alias);\n                }\n            }\n            relativeEntries.push(entry);\n        },\n        clone: () => cloneTo(constructStack()),\n        use: (plugin) => {\n            plugin.applyToStack(stack);\n        },\n        remove: (toRemove) => {\n            if (typeof toRemove === \"string\")\n                return removeByName(toRemove);\n            else\n                return removeByReference(toRemove);\n        },\n        removeByTag: (toRemove) => {\n            let isRemoved = false;\n            const filterCb = (entry) => {\n                const { tags, name, aliases: _aliases } = entry;\n                if (tags && tags.includes(toRemove)) {\n                    const aliases = getAllAliases(name, _aliases);\n                    for (const alias of aliases) {\n                        entriesNameSet.delete(alias);\n                    }\n                    isRemoved = true;\n                    return false;\n                }\n                return true;\n            };\n            absoluteEntries = absoluteEntries.filter(filterCb);\n            relativeEntries = relativeEntries.filter(filterCb);\n            return isRemoved;\n        },\n        concat: (from) => {\n            const cloned = cloneTo(constructStack());\n            cloned.use(from);\n            cloned.identifyOnResolve(identifyOnResolve || cloned.identifyOnResolve() || (from.identifyOnResolve?.() ?? false));\n            return cloned;\n        },\n        applyToStack: cloneTo,\n        identify: () => {\n            return getMiddlewareList(true).map((mw) => {\n                const step = mw.step ??\n                    mw.relation +\n                        \" \" +\n                        mw.toMiddleware;\n                return getMiddlewareNameWithAliases(mw.name, mw.aliases) + \" - \" + step;\n            });\n        },\n        identifyOnResolve(toggle) {\n            if (typeof toggle === \"boolean\")\n                identifyOnResolve = toggle;\n            return identifyOnResolve;\n        },\n        resolve: (handler, context) => {\n            for (const middleware of getMiddlewareList()\n                .map((entry) => entry.middleware)\n                .reverse()) {\n                handler = middleware(handler, context);\n            }\n            if (identifyOnResolve) {\n                console.log(stack.identify());\n            }\n            return handler;\n        },\n    };\n    return stack;\n};\nconst stepWeights = {\n    initialize: 5,\n    serialize: 4,\n    build: 3,\n    finalizeRequest: 2,\n    deserialize: 1,\n};\nconst priorityWeights = {\n    high: 3,\n    normal: 2,\n    low: 1,\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/middleware-stack/dist-es/MiddlewareStack.js?");

/***/ }),

/***/ "./node_modules/@smithy/middleware-stack/dist-es/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@smithy/middleware-stack/dist-es/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   constructStack: () => (/* reexport safe */ _MiddlewareStack__WEBPACK_IMPORTED_MODULE_0__.constructStack)\n/* harmony export */ });\n/* harmony import */ var _MiddlewareStack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MiddlewareStack */ \"./node_modules/@smithy/middleware-stack/dist-es/MiddlewareStack.js\");\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/middleware-stack/dist-es/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/property-provider/dist-es/CredentialsProviderError.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@smithy/property-provider/dist-es/CredentialsProviderError.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CredentialsProviderError: () => (/* binding */ CredentialsProviderError)\n/* harmony export */ });\n/* harmony import */ var _ProviderError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProviderError */ \"./node_modules/@smithy/property-provider/dist-es/ProviderError.js\");\n\nclass CredentialsProviderError extends _ProviderError__WEBPACK_IMPORTED_MODULE_0__.ProviderError {\n    constructor(message, tryNextLink = true) {\n        super(message, tryNextLink);\n        this.tryNextLink = tryNextLink;\n        this.name = \"CredentialsProviderError\";\n        Object.setPrototypeOf(this, CredentialsProviderError.prototype);\n    }\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/property-provider/dist-es/CredentialsProviderError.js?");

/***/ }),

/***/ "./node_modules/@smithy/property-provider/dist-es/ProviderError.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@smithy/property-provider/dist-es/ProviderError.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProviderError: () => (/* binding */ ProviderError)\n/* harmony export */ });\nclass ProviderError extends Error {\n    constructor(message, tryNextLink = true) {\n        super(message);\n        this.tryNextLink = tryNextLink;\n        this.name = \"ProviderError\";\n        Object.setPrototypeOf(this, ProviderError.prototype);\n    }\n    static from(error, tryNextLink = true) {\n        return Object.assign(new this(error.message, tryNextLink), error);\n    }\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/property-provider/dist-es/ProviderError.js?");

/***/ }),

/***/ "./node_modules/@smithy/property-provider/dist-es/TokenProviderError.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@smithy/property-provider/dist-es/TokenProviderError.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TokenProviderError: () => (/* binding */ TokenProviderError)\n/* harmony export */ });\n/* harmony import */ var _ProviderError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProviderError */ \"./node_modules/@smithy/property-provider/dist-es/ProviderError.js\");\n\nclass TokenProviderError extends _ProviderError__WEBPACK_IMPORTED_MODULE_0__.ProviderError {\n    constructor(message, tryNextLink = true) {\n        super(message, tryNextLink);\n        this.tryNextLink = tryNextLink;\n        this.name = \"TokenProviderError\";\n        Object.setPrototypeOf(this, TokenProviderError.prototype);\n    }\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/property-provider/dist-es/TokenProviderError.js?");

/***/ }),

/***/ "./node_modules/@smithy/property-provider/dist-es/chain.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@smithy/property-provider/dist-es/chain.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   chain: () => (/* binding */ chain)\n/* harmony export */ });\n/* harmony import */ var _ProviderError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProviderError */ \"./node_modules/@smithy/property-provider/dist-es/ProviderError.js\");\n\nconst chain = (...providers) => async () => {\n    if (providers.length === 0) {\n        throw new _ProviderError__WEBPACK_IMPORTED_MODULE_0__.ProviderError(\"No providers in chain\");\n    }\n    let lastProviderError;\n    for (const provider of providers) {\n        try {\n            const credentials = await provider();\n            return credentials;\n        }\n        catch (err) {\n            lastProviderError = err;\n            if (err?.tryNextLink) {\n                continue;\n            }\n            throw err;\n        }\n    }\n    throw lastProviderError;\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/property-provider/dist-es/chain.js?");

/***/ }),

/***/ "./node_modules/@smithy/property-provider/dist-es/fromStatic.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@smithy/property-provider/dist-es/fromStatic.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromStatic: () => (/* binding */ fromStatic)\n/* harmony export */ });\nconst fromStatic = (staticValue) => () => Promise.resolve(staticValue);\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/property-provider/dist-es/fromStatic.js?");

/***/ }),

/***/ "./node_modules/@smithy/property-provider/dist-es/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@smithy/property-provider/dist-es/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CredentialsProviderError: () => (/* reexport safe */ _CredentialsProviderError__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError),\n/* harmony export */   ProviderError: () => (/* reexport safe */ _ProviderError__WEBPACK_IMPORTED_MODULE_1__.ProviderError),\n/* harmony export */   TokenProviderError: () => (/* reexport safe */ _TokenProviderError__WEBPACK_IMPORTED_MODULE_2__.TokenProviderError),\n/* harmony export */   chain: () => (/* reexport safe */ _chain__WEBPACK_IMPORTED_MODULE_3__.chain),\n/* harmony export */   fromStatic: () => (/* reexport safe */ _fromStatic__WEBPACK_IMPORTED_MODULE_4__.fromStatic),\n/* harmony export */   memoize: () => (/* reexport safe */ _memoize__WEBPACK_IMPORTED_MODULE_5__.memoize)\n/* harmony export */ });\n/* harmony import */ var _CredentialsProviderError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CredentialsProviderError */ \"./node_modules/@smithy/property-provider/dist-es/CredentialsProviderError.js\");\n/* harmony import */ var _ProviderError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProviderError */ \"./node_modules/@smithy/property-provider/dist-es/ProviderError.js\");\n/* harmony import */ var _TokenProviderError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TokenProviderError */ \"./node_modules/@smithy/property-provider/dist-es/TokenProviderError.js\");\n/* harmony import */ var _chain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chain */ \"./node_modules/@smithy/property-provider/dist-es/chain.js\");\n/* harmony import */ var _fromStatic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fromStatic */ \"./node_modules/@smithy/property-provider/dist-es/fromStatic.js\");\n/* harmony import */ var _memoize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./memoize */ \"./node_modules/@smithy/property-provider/dist-es/memoize.js\");\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/property-provider/dist-es/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/property-provider/dist-es/memoize.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@smithy/property-provider/dist-es/memoize.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   memoize: () => (/* binding */ memoize)\n/* harmony export */ });\nconst memoize = (provider, isExpired, requiresRefresh) => {\n    let resolved;\n    let pending;\n    let hasResult;\n    let isConstant = false;\n    const coalesceProvider = async () => {\n        if (!pending) {\n            pending = provider();\n        }\n        try {\n            resolved = await pending;\n            hasResult = true;\n            isConstant = false;\n        }\n        finally {\n            pending = undefined;\n        }\n        return resolved;\n    };\n    if (isExpired === undefined) {\n        return async (options) => {\n            if (!hasResult || options?.forceRefresh) {\n                resolved = await coalesceProvider();\n            }\n            return resolved;\n        };\n    }\n    return async (options) => {\n        if (!hasResult || options?.forceRefresh) {\n            resolved = await coalesceProvider();\n        }\n        if (isConstant) {\n            return resolved;\n        }\n        if (requiresRefresh && !requiresRefresh(resolved)) {\n            isConstant = true;\n            return resolved;\n        }\n        if (isExpired(resolved)) {\n            await coalesceProvider();\n            return resolved;\n        }\n        return resolved;\n    };\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/property-provider/dist-es/memoize.js?");

/***/ }),

/***/ "./node_modules/@smithy/protocol-http/dist-es/Field.js":
/*!*************************************************************!*\
  !*** ./node_modules/@smithy/protocol-http/dist-es/Field.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Field: () => (/* binding */ Field)\n/* harmony export */ });\n/* harmony import */ var _smithy_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/types */ \"./node_modules/@smithy/types/dist-es/index.js\");\n\nclass Field {\n    constructor({ name, kind = _smithy_types__WEBPACK_IMPORTED_MODULE_0__.FieldPosition.HEADER, values = [] }) {\n        this.name = name;\n        this.kind = kind;\n        this.values = values;\n    }\n    add(value) {\n        this.values.push(value);\n    }\n    set(values) {\n        this.values = values;\n    }\n    remove(value) {\n        this.values = this.values.filter((v) => v !== value);\n    }\n    toString() {\n        return this.values.map((v) => (v.includes(\",\") || v.includes(\" \") ? `\"${v}\"` : v)).join(\", \");\n    }\n    get() {\n        return this.values;\n    }\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/protocol-http/dist-es/Field.js?");

/***/ }),

/***/ "./node_modules/@smithy/protocol-http/dist-es/Fields.js":
/*!**************************************************************!*\
  !*** ./node_modules/@smithy/protocol-http/dist-es/Fields.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Fields: () => (/* binding */ Fields)\n/* harmony export */ });\nclass Fields {\n    constructor({ fields = [], encoding = \"utf-8\" }) {\n        this.entries = {};\n        fields.forEach(this.setField.bind(this));\n        this.encoding = encoding;\n    }\n    setField(field) {\n        this.entries[field.name.toLowerCase()] = field;\n    }\n    getField(name) {\n        return this.entries[name.toLowerCase()];\n    }\n    removeField(name) {\n        delete this.entries[name.toLowerCase()];\n    }\n    getByType(kind) {\n        return Object.values(this.entries).filter((field) => field.kind === kind);\n    }\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/protocol-http/dist-es/Fields.js?");

/***/ }),

/***/ "./node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getHttpHandlerExtensionConfiguration: () => (/* binding */ getHttpHandlerExtensionConfiguration),\n/* harmony export */   resolveHttpHandlerRuntimeConfig: () => (/* binding */ resolveHttpHandlerRuntimeConfig)\n/* harmony export */ });\nconst getHttpHandlerExtensionConfiguration = (runtimeConfig) => {\n    let httpHandler = runtimeConfig.httpHandler;\n    return {\n        setHttpHandler(handler) {\n            httpHandler = handler;\n        },\n        httpHandler() {\n            return httpHandler;\n        },\n        updateHttpClientConfig(key, value) {\n            httpHandler.updateHttpClientConfig(key, value);\n        },\n        httpHandlerConfigs() {\n            return httpHandler.httpHandlerConfigs();\n        },\n    };\n};\nconst resolveHttpHandlerRuntimeConfig = (httpHandlerExtensionConfiguration) => {\n    return {\n        httpHandler: httpHandlerExtensionConfiguration.httpHandler(),\n    };\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js?");

/***/ }),

/***/ "./node_modules/@smithy/protocol-http/dist-es/extensions/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@smithy/protocol-http/dist-es/extensions/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getHttpHandlerExtensionConfiguration: () => (/* reexport safe */ _httpExtensionConfiguration__WEBPACK_IMPORTED_MODULE_0__.getHttpHandlerExtensionConfiguration),\n/* harmony export */   resolveHttpHandlerRuntimeConfig: () => (/* reexport safe */ _httpExtensionConfiguration__WEBPACK_IMPORTED_MODULE_0__.resolveHttpHandlerRuntimeConfig)\n/* harmony export */ });\n/* harmony import */ var _httpExtensionConfiguration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./httpExtensionConfiguration */ \"./node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js\");\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/protocol-http/dist-es/extensions/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/protocol-http/dist-es/httpHandler.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@smithy/protocol-http/dist-es/httpHandler.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/protocol-http/dist-es/httpHandler.js?");

/***/ }),

/***/ "./node_modules/@smithy/protocol-http/dist-es/httpRequest.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@smithy/protocol-http/dist-es/httpRequest.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HttpRequest: () => (/* binding */ HttpRequest)\n/* harmony export */ });\nclass HttpRequest {\n    constructor(options) {\n        this.method = options.method || \"GET\";\n        this.hostname = options.hostname || \"localhost\";\n        this.port = options.port;\n        this.query = options.query || {};\n        this.headers = options.headers || {};\n        this.body = options.body;\n        this.protocol = options.protocol\n            ? options.protocol.slice(-1) !== \":\"\n                ? `${options.protocol}:`\n                : options.protocol\n            : \"https:\";\n        this.path = options.path ? (options.path.charAt(0) !== \"/\" ? `/${options.path}` : options.path) : \"/\";\n        this.username = options.username;\n        this.password = options.password;\n        this.fragment = options.fragment;\n    }\n    static isInstance(request) {\n        if (!request)\n            return false;\n        const req = request;\n        return (\"method\" in req &&\n            \"protocol\" in req &&\n            \"hostname\" in req &&\n            \"path\" in req &&\n            typeof req[\"query\"] === \"object\" &&\n            typeof req[\"headers\"] === \"object\");\n    }\n    clone() {\n        const cloned = new HttpRequest({\n            ...this,\n            headers: { ...this.headers },\n        });\n        if (cloned.query)\n            cloned.query = cloneQuery(cloned.query);\n        return cloned;\n    }\n}\nfunction cloneQuery(query) {\n    return Object.keys(query).reduce((carry, paramName) => {\n        const param = query[paramName];\n        return {\n            ...carry,\n            [paramName]: Array.isArray(param) ? [...param] : param,\n        };\n    }, {});\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/protocol-http/dist-es/httpRequest.js?");

/***/ }),

/***/ "./node_modules/@smithy/protocol-http/dist-es/httpResponse.js":
/*!********************************************************************!*\
  !*** ./node_modules/@smithy/protocol-http/dist-es/httpResponse.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HttpResponse: () => (/* binding */ HttpResponse)\n/* harmony export */ });\nclass HttpResponse {\n    constructor(options) {\n        this.statusCode = options.statusCode;\n        this.reason = options.reason;\n        this.headers = options.headers || {};\n        this.body = options.body;\n    }\n    static isInstance(response) {\n        if (!response)\n            return false;\n        const resp = response;\n        return typeof resp.statusCode === \"number\" && typeof resp.headers === \"object\";\n    }\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/protocol-http/dist-es/httpResponse.js?");

/***/ }),

/***/ "./node_modules/@smithy/protocol-http/dist-es/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@smithy/protocol-http/dist-es/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Field: () => (/* reexport safe */ _Field__WEBPACK_IMPORTED_MODULE_1__.Field),\n/* harmony export */   Fields: () => (/* reexport safe */ _Fields__WEBPACK_IMPORTED_MODULE_2__.Fields),\n/* harmony export */   HttpRequest: () => (/* reexport safe */ _httpRequest__WEBPACK_IMPORTED_MODULE_4__.HttpRequest),\n/* harmony export */   HttpResponse: () => (/* reexport safe */ _httpResponse__WEBPACK_IMPORTED_MODULE_5__.HttpResponse),\n/* harmony export */   getHttpHandlerExtensionConfiguration: () => (/* reexport safe */ _extensions__WEBPACK_IMPORTED_MODULE_0__.getHttpHandlerExtensionConfiguration),\n/* harmony export */   isValidHostname: () => (/* reexport safe */ _isValidHostname__WEBPACK_IMPORTED_MODULE_6__.isValidHostname),\n/* harmony export */   resolveHttpHandlerRuntimeConfig: () => (/* reexport safe */ _extensions__WEBPACK_IMPORTED_MODULE_0__.resolveHttpHandlerRuntimeConfig)\n/* harmony export */ });\n/* harmony import */ var _extensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extensions */ \"./node_modules/@smithy/protocol-http/dist-es/extensions/index.js\");\n/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field */ \"./node_modules/@smithy/protocol-http/dist-es/Field.js\");\n/* harmony import */ var _Fields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Fields */ \"./node_modules/@smithy/protocol-http/dist-es/Fields.js\");\n/* harmony import */ var _httpHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./httpHandler */ \"./node_modules/@smithy/protocol-http/dist-es/httpHandler.js\");\n/* harmony import */ var _httpRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./httpRequest */ \"./node_modules/@smithy/protocol-http/dist-es/httpRequest.js\");\n/* harmony import */ var _httpResponse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./httpResponse */ \"./node_modules/@smithy/protocol-http/dist-es/httpResponse.js\");\n/* harmony import */ var _isValidHostname__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isValidHostname */ \"./node_modules/@smithy/protocol-http/dist-es/isValidHostname.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types */ \"./node_modules/@smithy/protocol-http/dist-es/types.js\");\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/protocol-http/dist-es/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/protocol-http/dist-es/isValidHostname.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@smithy/protocol-http/dist-es/isValidHostname.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isValidHostname: () => (/* binding */ isValidHostname)\n/* harmony export */ });\nfunction isValidHostname(hostname) {\n    const hostPattern = /^[a-z0-9][a-z0-9\\.\\-]*[a-z0-9]$/;\n    return hostPattern.test(hostname);\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/protocol-http/dist-es/isValidHostname.js?");

/***/ }),

/***/ "./node_modules/@smithy/protocol-http/dist-es/types.js":
/*!*************************************************************!*\
  !*** ./node_modules/@smithy/protocol-http/dist-es/types.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/protocol-http/dist-es/types.js?");

/***/ }),

/***/ "./node_modules/@smithy/querystring-builder/dist-es/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@smithy/querystring-builder/dist-es/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildQueryString: () => (/* binding */ buildQueryString)\n/* harmony export */ });\n/* harmony import */ var _smithy_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-uri-escape */ \"./node_modules/@smithy/util-uri-escape/dist-es/index.js\");\n\nfunction buildQueryString(query) {\n    const parts = [];\n    for (let key of Object.keys(query).sort()) {\n        const value = query[key];\n        key = (0,_smithy_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__.escapeUri)(key);\n        if (Array.isArray(value)) {\n            for (let i = 0, iLen = value.length; i < iLen; i++) {\n                parts.push(`${key}=${(0,_smithy_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__.escapeUri)(value[i])}`);\n            }\n        }\n        else {\n            let qsEntry = key;\n            if (value || typeof value === \"string\") {\n                qsEntry += `=${(0,_smithy_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__.escapeUri)(value)}`;\n            }\n            parts.push(qsEntry);\n        }\n    }\n    return parts.join(\"&\");\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/querystring-builder/dist-es/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/querystring-parser/dist-es/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@smithy/querystring-parser/dist-es/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   parseQueryString: () => (/* binding */ parseQueryString)\n/* harmony export */ });\nfunction parseQueryString(querystring) {\n    const query = {};\n    querystring = querystring.replace(/^\\?/, \"\");\n    if (querystring) {\n        for (const pair of querystring.split(\"&\")) {\n            let [key, value = null] = pair.split(\"=\");\n            key = decodeURIComponent(key);\n            if (value) {\n                value = decodeURIComponent(value);\n            }\n            if (!(key in query)) {\n                query[key] = value;\n            }\n            else if (Array.isArray(query[key])) {\n                query[key].push(value);\n            }\n            else {\n                query[key] = [query[key], value];\n            }\n        }\n    }\n    return query;\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/querystring-parser/dist-es/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/service-error-classification/dist-es/constants.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@smithy/service-error-classification/dist-es/constants.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CLOCK_SKEW_ERROR_CODES: () => (/* binding */ CLOCK_SKEW_ERROR_CODES),\n/* harmony export */   NODEJS_TIMEOUT_ERROR_CODES: () => (/* binding */ NODEJS_TIMEOUT_ERROR_CODES),\n/* harmony export */   THROTTLING_ERROR_CODES: () => (/* binding */ THROTTLING_ERROR_CODES),\n/* harmony export */   TRANSIENT_ERROR_CODES: () => (/* binding */ TRANSIENT_ERROR_CODES),\n/* harmony export */   TRANSIENT_ERROR_STATUS_CODES: () => (/* binding */ TRANSIENT_ERROR_STATUS_CODES)\n/* harmony export */ });\nconst CLOCK_SKEW_ERROR_CODES = [\n    \"AuthFailure\",\n    \"InvalidSignatureException\",\n    \"RequestExpired\",\n    \"RequestInTheFuture\",\n    \"RequestTimeTooSkewed\",\n    \"SignatureDoesNotMatch\",\n];\nconst THROTTLING_ERROR_CODES = [\n    \"BandwidthLimitExceeded\",\n    \"EC2ThrottledException\",\n    \"LimitExceededException\",\n    \"PriorRequestNotComplete\",\n    \"ProvisionedThroughputExceededException\",\n    \"RequestLimitExceeded\",\n    \"RequestThrottled\",\n    \"RequestThrottledException\",\n    \"SlowDown\",\n    \"ThrottledException\",\n    \"Throttling\",\n    \"ThrottlingException\",\n    \"TooManyRequestsException\",\n    \"TransactionInProgressException\",\n];\nconst TRANSIENT_ERROR_CODES = [\"TimeoutError\", \"RequestTimeout\", \"RequestTimeoutException\"];\nconst TRANSIENT_ERROR_STATUS_CODES = [500, 502, 503, 504];\nconst NODEJS_TIMEOUT_ERROR_CODES = [\"ECONNRESET\", \"ECONNREFUSED\", \"EPIPE\", \"ETIMEDOUT\"];\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/service-error-classification/dist-es/constants.js?");

/***/ }),

/***/ "./node_modules/@smithy/service-error-classification/dist-es/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@smithy/service-error-classification/dist-es/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isClockSkewCorrectedError: () => (/* binding */ isClockSkewCorrectedError),\n/* harmony export */   isClockSkewError: () => (/* binding */ isClockSkewError),\n/* harmony export */   isRetryableByTrait: () => (/* binding */ isRetryableByTrait),\n/* harmony export */   isServerError: () => (/* binding */ isServerError),\n/* harmony export */   isThrottlingError: () => (/* binding */ isThrottlingError),\n/* harmony export */   isTransientError: () => (/* binding */ isTransientError)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./node_modules/@smithy/service-error-classification/dist-es/constants.js\");\n\nconst isRetryableByTrait = (error) => error.$retryable !== undefined;\nconst isClockSkewError = (error) => _constants__WEBPACK_IMPORTED_MODULE_0__.CLOCK_SKEW_ERROR_CODES.includes(error.name);\nconst isClockSkewCorrectedError = (error) => error.$metadata?.clockSkewCorrected;\nconst isThrottlingError = (error) => error.$metadata?.httpStatusCode === 429 ||\n    _constants__WEBPACK_IMPORTED_MODULE_0__.THROTTLING_ERROR_CODES.includes(error.name) ||\n    error.$retryable?.throttling == true;\nconst isTransientError = (error) => isClockSkewCorrectedError(error) ||\n    _constants__WEBPACK_IMPORTED_MODULE_0__.TRANSIENT_ERROR_CODES.includes(error.name) ||\n    _constants__WEBPACK_IMPORTED_MODULE_0__.NODEJS_TIMEOUT_ERROR_CODES.includes(error?.code || \"\") ||\n    _constants__WEBPACK_IMPORTED_MODULE_0__.TRANSIENT_ERROR_STATUS_CODES.includes(error.$metadata?.httpStatusCode || 0);\nconst isServerError = (error) => {\n    if (error.$metadata?.httpStatusCode !== undefined) {\n        const statusCode = error.$metadata.httpStatusCode;\n        if (500 <= statusCode && statusCode <= 599 && !isTransientError(error)) {\n            return true;\n        }\n        return false;\n    }\n    return false;\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/service-error-classification/dist-es/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/signature-v4/dist-es/HeaderFormatter.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@smithy/signature-v4/dist-es/HeaderFormatter.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HeaderFormatter: () => (/* binding */ HeaderFormatter),\n/* harmony export */   Int64: () => (/* binding */ Int64)\n/* harmony export */ });\n/* harmony import */ var _smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-hex-encoding */ \"./node_modules/@smithy/util-hex-encoding/dist-es/index.js\");\n/* harmony import */ var _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/util-utf8 */ \"./node_modules/@smithy/util-utf8/dist-es/index.js\");\n\n\nclass HeaderFormatter {\n    format(headers) {\n        const chunks = [];\n        for (const headerName of Object.keys(headers)) {\n            const bytes = (0,_smithy_util_utf8__WEBPACK_IMPORTED_MODULE_1__.fromUtf8)(headerName);\n            chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));\n        }\n        const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));\n        let position = 0;\n        for (const chunk of chunks) {\n            out.set(chunk, position);\n            position += chunk.byteLength;\n        }\n        return out;\n    }\n    formatHeaderValue(header) {\n        switch (header.type) {\n            case \"boolean\":\n                return Uint8Array.from([header.value ? 0 : 1]);\n            case \"byte\":\n                return Uint8Array.from([2, header.value]);\n            case \"short\":\n                const shortView = new DataView(new ArrayBuffer(3));\n                shortView.setUint8(0, 3);\n                shortView.setInt16(1, header.value, false);\n                return new Uint8Array(shortView.buffer);\n            case \"integer\":\n                const intView = new DataView(new ArrayBuffer(5));\n                intView.setUint8(0, 4);\n                intView.setInt32(1, header.value, false);\n                return new Uint8Array(intView.buffer);\n            case \"long\":\n                const longBytes = new Uint8Array(9);\n                longBytes[0] = 5;\n                longBytes.set(header.value.bytes, 1);\n                return longBytes;\n            case \"binary\":\n                const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));\n                binView.setUint8(0, 6);\n                binView.setUint16(1, header.value.byteLength, false);\n                const binBytes = new Uint8Array(binView.buffer);\n                binBytes.set(header.value, 3);\n                return binBytes;\n            case \"string\":\n                const utf8Bytes = (0,_smithy_util_utf8__WEBPACK_IMPORTED_MODULE_1__.fromUtf8)(header.value);\n                const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));\n                strView.setUint8(0, 7);\n                strView.setUint16(1, utf8Bytes.byteLength, false);\n                const strBytes = new Uint8Array(strView.buffer);\n                strBytes.set(utf8Bytes, 3);\n                return strBytes;\n            case \"timestamp\":\n                const tsBytes = new Uint8Array(9);\n                tsBytes[0] = 8;\n                tsBytes.set(Int64.fromNumber(header.value.valueOf()).bytes, 1);\n                return tsBytes;\n            case \"uuid\":\n                if (!UUID_PATTERN.test(header.value)) {\n                    throw new Error(`Invalid UUID received: ${header.value}`);\n                }\n                const uuidBytes = new Uint8Array(17);\n                uuidBytes[0] = 9;\n                uuidBytes.set((0,_smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.fromHex)(header.value.replace(/\\-/g, \"\")), 1);\n                return uuidBytes;\n        }\n    }\n}\nvar HEADER_VALUE_TYPE;\n(function (HEADER_VALUE_TYPE) {\n    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE[\"boolTrue\"] = 0] = \"boolTrue\";\n    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE[\"boolFalse\"] = 1] = \"boolFalse\";\n    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE[\"byte\"] = 2] = \"byte\";\n    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE[\"short\"] = 3] = \"short\";\n    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE[\"integer\"] = 4] = \"integer\";\n    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE[\"long\"] = 5] = \"long\";\n    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE[\"byteArray\"] = 6] = \"byteArray\";\n    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE[\"string\"] = 7] = \"string\";\n    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE[\"timestamp\"] = 8] = \"timestamp\";\n    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE[\"uuid\"] = 9] = \"uuid\";\n})(HEADER_VALUE_TYPE || (HEADER_VALUE_TYPE = {}));\nconst UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;\nclass Int64 {\n    constructor(bytes) {\n        this.bytes = bytes;\n        if (bytes.byteLength !== 8) {\n            throw new Error(\"Int64 buffers must be exactly 8 bytes\");\n        }\n    }\n    static fromNumber(number) {\n        if (number > 9223372036854776000 || number < -9223372036854776000) {\n            throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);\n        }\n        const bytes = new Uint8Array(8);\n        for (let i = 7, remaining = Math.abs(Math.round(number)); i > -1 && remaining > 0; i--, remaining /= 256) {\n            bytes[i] = remaining;\n        }\n        if (number < 0) {\n            negate(bytes);\n        }\n        return new Int64(bytes);\n    }\n    valueOf() {\n        const bytes = this.bytes.slice(0);\n        const negative = bytes[0] & 0b10000000;\n        if (negative) {\n            negate(bytes);\n        }\n        return parseInt((0,_smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.toHex)(bytes), 16) * (negative ? -1 : 1);\n    }\n    toString() {\n        return String(this.valueOf());\n    }\n}\nfunction negate(bytes) {\n    for (let i = 0; i < 8; i++) {\n        bytes[i] ^= 0xff;\n    }\n    for (let i = 7; i > -1; i--) {\n        bytes[i]++;\n        if (bytes[i] !== 0)\n            break;\n    }\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/signature-v4/dist-es/HeaderFormatter.js?");

/***/ }),

/***/ "./node_modules/@smithy/signature-v4/dist-es/SignatureV4.js":
/*!******************************************************************!*\
  !*** ./node_modules/@smithy/signature-v4/dist-es/SignatureV4.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SignatureV4: () => (/* binding */ SignatureV4)\n/* harmony export */ });\n/* harmony import */ var _smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-hex-encoding */ \"./node_modules/@smithy/util-hex-encoding/dist-es/index.js\");\n/* harmony import */ var _smithy_util_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/util-middleware */ \"./node_modules/@smithy/util-middleware/dist-es/index.js\");\n/* harmony import */ var _smithy_util_uri_escape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smithy/util-uri-escape */ \"./node_modules/@smithy/util-uri-escape/dist-es/index.js\");\n/* harmony import */ var _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smithy/util-utf8 */ \"./node_modules/@smithy/util-utf8/dist-es/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ \"./node_modules/@smithy/signature-v4/dist-es/constants.js\");\n/* harmony import */ var _credentialDerivation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./credentialDerivation */ \"./node_modules/@smithy/signature-v4/dist-es/credentialDerivation.js\");\n/* harmony import */ var _getCanonicalHeaders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getCanonicalHeaders */ \"./node_modules/@smithy/signature-v4/dist-es/getCanonicalHeaders.js\");\n/* harmony import */ var _getCanonicalQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getCanonicalQuery */ \"./node_modules/@smithy/signature-v4/dist-es/getCanonicalQuery.js\");\n/* harmony import */ var _getPayloadHash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getPayloadHash */ \"./node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js\");\n/* harmony import */ var _HeaderFormatter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HeaderFormatter */ \"./node_modules/@smithy/signature-v4/dist-es/HeaderFormatter.js\");\n/* harmony import */ var _headerUtil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./headerUtil */ \"./node_modules/@smithy/signature-v4/dist-es/headerUtil.js\");\n/* harmony import */ var _moveHeadersToQuery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./moveHeadersToQuery */ \"./node_modules/@smithy/signature-v4/dist-es/moveHeadersToQuery.js\");\n/* harmony import */ var _prepareRequest__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./prepareRequest */ \"./node_modules/@smithy/signature-v4/dist-es/prepareRequest.js\");\n/* harmony import */ var _utilDate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utilDate */ \"./node_modules/@smithy/signature-v4/dist-es/utilDate.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass SignatureV4 {\n    constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true, }) {\n        this.headerFormatter = new _HeaderFormatter__WEBPACK_IMPORTED_MODULE_9__.HeaderFormatter();\n        this.service = service;\n        this.sha256 = sha256;\n        this.uriEscapePath = uriEscapePath;\n        this.applyChecksum = typeof applyChecksum === \"boolean\" ? applyChecksum : true;\n        this.regionProvider = (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_1__.normalizeProvider)(region);\n        this.credentialProvider = (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_1__.normalizeProvider)(credentials);\n    }\n    async presign(originalRequest, options = {}) {\n        const { signingDate = new Date(), expiresIn = 3600, unsignableHeaders, unhoistableHeaders, signableHeaders, signingRegion, signingService, } = options;\n        const credentials = await this.credentialProvider();\n        this.validateResolvedCredentials(credentials);\n        const region = signingRegion ?? (await this.regionProvider());\n        const { longDate, shortDate } = formatDate(signingDate);\n        if (expiresIn > _constants__WEBPACK_IMPORTED_MODULE_4__.MAX_PRESIGNED_TTL) {\n            return Promise.reject(\"Signature version 4 presigned URLs\" + \" must have an expiration date less than one week in\" + \" the future\");\n        }\n        const scope = (0,_credentialDerivation__WEBPACK_IMPORTED_MODULE_5__.createScope)(shortDate, region, signingService ?? this.service);\n        const request = (0,_moveHeadersToQuery__WEBPACK_IMPORTED_MODULE_11__.moveHeadersToQuery)((0,_prepareRequest__WEBPACK_IMPORTED_MODULE_12__.prepareRequest)(originalRequest), { unhoistableHeaders });\n        if (credentials.sessionToken) {\n            request.query[_constants__WEBPACK_IMPORTED_MODULE_4__.TOKEN_QUERY_PARAM] = credentials.sessionToken;\n        }\n        request.query[_constants__WEBPACK_IMPORTED_MODULE_4__.ALGORITHM_QUERY_PARAM] = _constants__WEBPACK_IMPORTED_MODULE_4__.ALGORITHM_IDENTIFIER;\n        request.query[_constants__WEBPACK_IMPORTED_MODULE_4__.CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;\n        request.query[_constants__WEBPACK_IMPORTED_MODULE_4__.AMZ_DATE_QUERY_PARAM] = longDate;\n        request.query[_constants__WEBPACK_IMPORTED_MODULE_4__.EXPIRES_QUERY_PARAM] = expiresIn.toString(10);\n        const canonicalHeaders = (0,_getCanonicalHeaders__WEBPACK_IMPORTED_MODULE_6__.getCanonicalHeaders)(request, unsignableHeaders, signableHeaders);\n        request.query[_constants__WEBPACK_IMPORTED_MODULE_4__.SIGNED_HEADERS_QUERY_PARAM] = getCanonicalHeaderList(canonicalHeaders);\n        request.query[_constants__WEBPACK_IMPORTED_MODULE_4__.SIGNATURE_QUERY_PARAM] = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, await (0,_getPayloadHash__WEBPACK_IMPORTED_MODULE_8__.getPayloadHash)(originalRequest, this.sha256)));\n        return request;\n    }\n    async sign(toSign, options) {\n        if (typeof toSign === \"string\") {\n            return this.signString(toSign, options);\n        }\n        else if (toSign.headers && toSign.payload) {\n            return this.signEvent(toSign, options);\n        }\n        else if (toSign.message) {\n            return this.signMessage(toSign, options);\n        }\n        else {\n            return this.signRequest(toSign, options);\n        }\n    }\n    async signEvent({ headers, payload }, { signingDate = new Date(), priorSignature, signingRegion, signingService }) {\n        const region = signingRegion ?? (await this.regionProvider());\n        const { shortDate, longDate } = formatDate(signingDate);\n        const scope = (0,_credentialDerivation__WEBPACK_IMPORTED_MODULE_5__.createScope)(shortDate, region, signingService ?? this.service);\n        const hashedPayload = await (0,_getPayloadHash__WEBPACK_IMPORTED_MODULE_8__.getPayloadHash)({ headers: {}, body: payload }, this.sha256);\n        const hash = new this.sha256();\n        hash.update(headers);\n        const hashedHeaders = (0,_smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.toHex)(await hash.digest());\n        const stringToSign = [\n            _constants__WEBPACK_IMPORTED_MODULE_4__.EVENT_ALGORITHM_IDENTIFIER,\n            longDate,\n            scope,\n            priorSignature,\n            hashedHeaders,\n            hashedPayload,\n        ].join(\"\\n\");\n        return this.signString(stringToSign, { signingDate, signingRegion: region, signingService });\n    }\n    async signMessage(signableMessage, { signingDate = new Date(), signingRegion, signingService }) {\n        const promise = this.signEvent({\n            headers: this.headerFormatter.format(signableMessage.message.headers),\n            payload: signableMessage.message.body,\n        }, {\n            signingDate,\n            signingRegion,\n            signingService,\n            priorSignature: signableMessage.priorSignature,\n        });\n        return promise.then((signature) => {\n            return { message: signableMessage.message, signature };\n        });\n    }\n    async signString(stringToSign, { signingDate = new Date(), signingRegion, signingService } = {}) {\n        const credentials = await this.credentialProvider();\n        this.validateResolvedCredentials(credentials);\n        const region = signingRegion ?? (await this.regionProvider());\n        const { shortDate } = formatDate(signingDate);\n        const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));\n        hash.update((0,_smithy_util_utf8__WEBPACK_IMPORTED_MODULE_3__.toUint8Array)(stringToSign));\n        return (0,_smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.toHex)(await hash.digest());\n    }\n    async signRequest(requestToSign, { signingDate = new Date(), signableHeaders, unsignableHeaders, signingRegion, signingService, } = {}) {\n        const credentials = await this.credentialProvider();\n        this.validateResolvedCredentials(credentials);\n        const region = signingRegion ?? (await this.regionProvider());\n        const request = (0,_prepareRequest__WEBPACK_IMPORTED_MODULE_12__.prepareRequest)(requestToSign);\n        const { longDate, shortDate } = formatDate(signingDate);\n        const scope = (0,_credentialDerivation__WEBPACK_IMPORTED_MODULE_5__.createScope)(shortDate, region, signingService ?? this.service);\n        request.headers[_constants__WEBPACK_IMPORTED_MODULE_4__.AMZ_DATE_HEADER] = longDate;\n        if (credentials.sessionToken) {\n            request.headers[_constants__WEBPACK_IMPORTED_MODULE_4__.TOKEN_HEADER] = credentials.sessionToken;\n        }\n        const payloadHash = await (0,_getPayloadHash__WEBPACK_IMPORTED_MODULE_8__.getPayloadHash)(request, this.sha256);\n        if (!(0,_headerUtil__WEBPACK_IMPORTED_MODULE_10__.hasHeader)(_constants__WEBPACK_IMPORTED_MODULE_4__.SHA256_HEADER, request.headers) && this.applyChecksum) {\n            request.headers[_constants__WEBPACK_IMPORTED_MODULE_4__.SHA256_HEADER] = payloadHash;\n        }\n        const canonicalHeaders = (0,_getCanonicalHeaders__WEBPACK_IMPORTED_MODULE_6__.getCanonicalHeaders)(request, unsignableHeaders, signableHeaders);\n        const signature = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, payloadHash));\n        request.headers[_constants__WEBPACK_IMPORTED_MODULE_4__.AUTH_HEADER] =\n            `${_constants__WEBPACK_IMPORTED_MODULE_4__.ALGORITHM_IDENTIFIER} ` +\n                `Credential=${credentials.accessKeyId}/${scope}, ` +\n                `SignedHeaders=${getCanonicalHeaderList(canonicalHeaders)}, ` +\n                `Signature=${signature}`;\n        return request;\n    }\n    createCanonicalRequest(request, canonicalHeaders, payloadHash) {\n        const sortedHeaders = Object.keys(canonicalHeaders).sort();\n        return `${request.method}\n${this.getCanonicalPath(request)}\n${(0,_getCanonicalQuery__WEBPACK_IMPORTED_MODULE_7__.getCanonicalQuery)(request)}\n${sortedHeaders.map((name) => `${name}:${canonicalHeaders[name]}`).join(\"\\n\")}\n\n${sortedHeaders.join(\";\")}\n${payloadHash}`;\n    }\n    async createStringToSign(longDate, credentialScope, canonicalRequest) {\n        const hash = new this.sha256();\n        hash.update((0,_smithy_util_utf8__WEBPACK_IMPORTED_MODULE_3__.toUint8Array)(canonicalRequest));\n        const hashedRequest = await hash.digest();\n        return `${_constants__WEBPACK_IMPORTED_MODULE_4__.ALGORITHM_IDENTIFIER}\n${longDate}\n${credentialScope}\n${(0,_smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.toHex)(hashedRequest)}`;\n    }\n    getCanonicalPath({ path }) {\n        if (this.uriEscapePath) {\n            const normalizedPathSegments = [];\n            for (const pathSegment of path.split(\"/\")) {\n                if (pathSegment?.length === 0)\n                    continue;\n                if (pathSegment === \".\")\n                    continue;\n                if (pathSegment === \"..\") {\n                    normalizedPathSegments.pop();\n                }\n                else {\n                    normalizedPathSegments.push(pathSegment);\n                }\n            }\n            const normalizedPath = `${path?.startsWith(\"/\") ? \"/\" : \"\"}${normalizedPathSegments.join(\"/\")}${normalizedPathSegments.length > 0 && path?.endsWith(\"/\") ? \"/\" : \"\"}`;\n            const doubleEncoded = (0,_smithy_util_uri_escape__WEBPACK_IMPORTED_MODULE_2__.escapeUri)(normalizedPath);\n            return doubleEncoded.replace(/%2F/g, \"/\");\n        }\n        return path;\n    }\n    async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {\n        const stringToSign = await this.createStringToSign(longDate, credentialScope, canonicalRequest);\n        const hash = new this.sha256(await keyPromise);\n        hash.update((0,_smithy_util_utf8__WEBPACK_IMPORTED_MODULE_3__.toUint8Array)(stringToSign));\n        return (0,_smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.toHex)(await hash.digest());\n    }\n    getSigningKey(credentials, region, shortDate, service) {\n        return (0,_credentialDerivation__WEBPACK_IMPORTED_MODULE_5__.getSigningKey)(this.sha256, credentials, shortDate, region, service || this.service);\n    }\n    validateResolvedCredentials(credentials) {\n        if (typeof credentials !== \"object\" ||\n            typeof credentials.accessKeyId !== \"string\" ||\n            typeof credentials.secretAccessKey !== \"string\") {\n            throw new Error(\"Resolved credential object is not valid\");\n        }\n    }\n}\nconst formatDate = (now) => {\n    const longDate = (0,_utilDate__WEBPACK_IMPORTED_MODULE_13__.iso8601)(now).replace(/[\\-:]/g, \"\");\n    return {\n        longDate,\n        shortDate: longDate.slice(0, 8),\n    };\n};\nconst getCanonicalHeaderList = (headers) => Object.keys(headers).sort().join(\";\");\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/signature-v4/dist-es/SignatureV4.js?");

/***/ }),

/***/ "./node_modules/@smithy/signature-v4/dist-es/cloneRequest.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@smithy/signature-v4/dist-es/cloneRequest.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cloneQuery: () => (/* binding */ cloneQuery),\n/* harmony export */   cloneRequest: () => (/* binding */ cloneRequest)\n/* harmony export */ });\nconst cloneRequest = ({ headers, query, ...rest }) => ({\n    ...rest,\n    headers: { ...headers },\n    query: query ? cloneQuery(query) : undefined,\n});\nconst cloneQuery = (query) => Object.keys(query).reduce((carry, paramName) => {\n    const param = query[paramName];\n    return {\n        ...carry,\n        [paramName]: Array.isArray(param) ? [...param] : param,\n    };\n}, {});\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/signature-v4/dist-es/cloneRequest.js?");

/***/ }),

/***/ "./node_modules/@smithy/signature-v4/dist-es/constants.js":
/*!****************************************************************!*\
  !*** ./node_modules/@smithy/signature-v4/dist-es/constants.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ALGORITHM_IDENTIFIER: () => (/* binding */ ALGORITHM_IDENTIFIER),\n/* harmony export */   ALGORITHM_IDENTIFIER_V4A: () => (/* binding */ ALGORITHM_IDENTIFIER_V4A),\n/* harmony export */   ALGORITHM_QUERY_PARAM: () => (/* binding */ ALGORITHM_QUERY_PARAM),\n/* harmony export */   ALWAYS_UNSIGNABLE_HEADERS: () => (/* binding */ ALWAYS_UNSIGNABLE_HEADERS),\n/* harmony export */   AMZ_DATE_HEADER: () => (/* binding */ AMZ_DATE_HEADER),\n/* harmony export */   AMZ_DATE_QUERY_PARAM: () => (/* binding */ AMZ_DATE_QUERY_PARAM),\n/* harmony export */   AUTH_HEADER: () => (/* binding */ AUTH_HEADER),\n/* harmony export */   CREDENTIAL_QUERY_PARAM: () => (/* binding */ CREDENTIAL_QUERY_PARAM),\n/* harmony export */   DATE_HEADER: () => (/* binding */ DATE_HEADER),\n/* harmony export */   EVENT_ALGORITHM_IDENTIFIER: () => (/* binding */ EVENT_ALGORITHM_IDENTIFIER),\n/* harmony export */   EXPIRES_QUERY_PARAM: () => (/* binding */ EXPIRES_QUERY_PARAM),\n/* harmony export */   GENERATED_HEADERS: () => (/* binding */ GENERATED_HEADERS),\n/* harmony export */   HOST_HEADER: () => (/* binding */ HOST_HEADER),\n/* harmony export */   KEY_TYPE_IDENTIFIER: () => (/* binding */ KEY_TYPE_IDENTIFIER),\n/* harmony export */   MAX_CACHE_SIZE: () => (/* binding */ MAX_CACHE_SIZE),\n/* harmony export */   MAX_PRESIGNED_TTL: () => (/* binding */ MAX_PRESIGNED_TTL),\n/* harmony export */   PROXY_HEADER_PATTERN: () => (/* binding */ PROXY_HEADER_PATTERN),\n/* harmony export */   REGION_SET_PARAM: () => (/* binding */ REGION_SET_PARAM),\n/* harmony export */   SEC_HEADER_PATTERN: () => (/* binding */ SEC_HEADER_PATTERN),\n/* harmony export */   SHA256_HEADER: () => (/* binding */ SHA256_HEADER),\n/* harmony export */   SIGNATURE_HEADER: () => (/* binding */ SIGNATURE_HEADER),\n/* harmony export */   SIGNATURE_QUERY_PARAM: () => (/* binding */ SIGNATURE_QUERY_PARAM),\n/* harmony export */   SIGNED_HEADERS_QUERY_PARAM: () => (/* binding */ SIGNED_HEADERS_QUERY_PARAM),\n/* harmony export */   TOKEN_HEADER: () => (/* binding */ TOKEN_HEADER),\n/* harmony export */   TOKEN_QUERY_PARAM: () => (/* binding */ TOKEN_QUERY_PARAM),\n/* harmony export */   UNSIGNABLE_PATTERNS: () => (/* binding */ UNSIGNABLE_PATTERNS),\n/* harmony export */   UNSIGNED_PAYLOAD: () => (/* binding */ UNSIGNED_PAYLOAD)\n/* harmony export */ });\nconst ALGORITHM_QUERY_PARAM = \"X-Amz-Algorithm\";\nconst CREDENTIAL_QUERY_PARAM = \"X-Amz-Credential\";\nconst AMZ_DATE_QUERY_PARAM = \"X-Amz-Date\";\nconst SIGNED_HEADERS_QUERY_PARAM = \"X-Amz-SignedHeaders\";\nconst EXPIRES_QUERY_PARAM = \"X-Amz-Expires\";\nconst SIGNATURE_QUERY_PARAM = \"X-Amz-Signature\";\nconst TOKEN_QUERY_PARAM = \"X-Amz-Security-Token\";\nconst REGION_SET_PARAM = \"X-Amz-Region-Set\";\nconst AUTH_HEADER = \"authorization\";\nconst AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();\nconst DATE_HEADER = \"date\";\nconst GENERATED_HEADERS = [AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER];\nconst SIGNATURE_HEADER = SIGNATURE_QUERY_PARAM.toLowerCase();\nconst SHA256_HEADER = \"x-amz-content-sha256\";\nconst TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();\nconst HOST_HEADER = \"host\";\nconst ALWAYS_UNSIGNABLE_HEADERS = {\n    authorization: true,\n    \"cache-control\": true,\n    connection: true,\n    expect: true,\n    from: true,\n    \"keep-alive\": true,\n    \"max-forwards\": true,\n    pragma: true,\n    referer: true,\n    te: true,\n    trailer: true,\n    \"transfer-encoding\": true,\n    upgrade: true,\n    \"user-agent\": true,\n    \"x-amzn-trace-id\": true,\n};\nconst PROXY_HEADER_PATTERN = /^proxy-/;\nconst SEC_HEADER_PATTERN = /^sec-/;\nconst UNSIGNABLE_PATTERNS = [/^proxy-/i, /^sec-/i];\nconst ALGORITHM_IDENTIFIER = \"AWS4-HMAC-SHA256\";\nconst ALGORITHM_IDENTIFIER_V4A = \"AWS4-ECDSA-P256-SHA256\";\nconst EVENT_ALGORITHM_IDENTIFIER = \"AWS4-HMAC-SHA256-PAYLOAD\";\nconst UNSIGNED_PAYLOAD = \"UNSIGNED-PAYLOAD\";\nconst MAX_CACHE_SIZE = 50;\nconst KEY_TYPE_IDENTIFIER = \"aws4_request\";\nconst MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/signature-v4/dist-es/constants.js?");

/***/ }),

/***/ "./node_modules/@smithy/signature-v4/dist-es/credentialDerivation.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@smithy/signature-v4/dist-es/credentialDerivation.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearCredentialCache: () => (/* binding */ clearCredentialCache),\n/* harmony export */   createScope: () => (/* binding */ createScope),\n/* harmony export */   getSigningKey: () => (/* binding */ getSigningKey)\n/* harmony export */ });\n/* harmony import */ var _smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-hex-encoding */ \"./node_modules/@smithy/util-hex-encoding/dist-es/index.js\");\n/* harmony import */ var _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/util-utf8 */ \"./node_modules/@smithy/util-utf8/dist-es/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./node_modules/@smithy/signature-v4/dist-es/constants.js\");\n\n\n\nconst signingKeyCache = {};\nconst cacheQueue = [];\nconst createScope = (shortDate, region, service) => `${shortDate}/${region}/${service}/${_constants__WEBPACK_IMPORTED_MODULE_2__.KEY_TYPE_IDENTIFIER}`;\nconst getSigningKey = async (sha256Constructor, credentials, shortDate, region, service) => {\n    const credsHash = await hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId);\n    const cacheKey = `${shortDate}:${region}:${service}:${(0,_smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.toHex)(credsHash)}:${credentials.sessionToken}`;\n    if (cacheKey in signingKeyCache) {\n        return signingKeyCache[cacheKey];\n    }\n    cacheQueue.push(cacheKey);\n    while (cacheQueue.length > _constants__WEBPACK_IMPORTED_MODULE_2__.MAX_CACHE_SIZE) {\n        delete signingKeyCache[cacheQueue.shift()];\n    }\n    let key = `AWS4${credentials.secretAccessKey}`;\n    for (const signable of [shortDate, region, service, _constants__WEBPACK_IMPORTED_MODULE_2__.KEY_TYPE_IDENTIFIER]) {\n        key = await hmac(sha256Constructor, key, signable);\n    }\n    return (signingKeyCache[cacheKey] = key);\n};\nconst clearCredentialCache = () => {\n    cacheQueue.length = 0;\n    Object.keys(signingKeyCache).forEach((cacheKey) => {\n        delete signingKeyCache[cacheKey];\n    });\n};\nconst hmac = (ctor, secret, data) => {\n    const hash = new ctor(secret);\n    hash.update((0,_smithy_util_utf8__WEBPACK_IMPORTED_MODULE_1__.toUint8Array)(data));\n    return hash.digest();\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/signature-v4/dist-es/credentialDerivation.js?");

/***/ }),

/***/ "./node_modules/@smithy/signature-v4/dist-es/getCanonicalHeaders.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@smithy/signature-v4/dist-es/getCanonicalHeaders.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCanonicalHeaders: () => (/* binding */ getCanonicalHeaders)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./node_modules/@smithy/signature-v4/dist-es/constants.js\");\n\nconst getCanonicalHeaders = ({ headers }, unsignableHeaders, signableHeaders) => {\n    const canonical = {};\n    for (const headerName of Object.keys(headers).sort()) {\n        if (headers[headerName] == undefined) {\n            continue;\n        }\n        const canonicalHeaderName = headerName.toLowerCase();\n        if (canonicalHeaderName in _constants__WEBPACK_IMPORTED_MODULE_0__.ALWAYS_UNSIGNABLE_HEADERS ||\n            unsignableHeaders?.has(canonicalHeaderName) ||\n            _constants__WEBPACK_IMPORTED_MODULE_0__.PROXY_HEADER_PATTERN.test(canonicalHeaderName) ||\n            _constants__WEBPACK_IMPORTED_MODULE_0__.SEC_HEADER_PATTERN.test(canonicalHeaderName)) {\n            if (!signableHeaders || (signableHeaders && !signableHeaders.has(canonicalHeaderName))) {\n                continue;\n            }\n        }\n        canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\\s+/g, \" \");\n    }\n    return canonical;\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/signature-v4/dist-es/getCanonicalHeaders.js?");

/***/ }),

/***/ "./node_modules/@smithy/signature-v4/dist-es/getCanonicalQuery.js":
/*!************************************************************************!*\
  !*** ./node_modules/@smithy/signature-v4/dist-es/getCanonicalQuery.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCanonicalQuery: () => (/* binding */ getCanonicalQuery)\n/* harmony export */ });\n/* harmony import */ var _smithy_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-uri-escape */ \"./node_modules/@smithy/util-uri-escape/dist-es/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./node_modules/@smithy/signature-v4/dist-es/constants.js\");\n\n\nconst getCanonicalQuery = ({ query = {} }) => {\n    const keys = [];\n    const serialized = {};\n    for (const key of Object.keys(query).sort()) {\n        if (key.toLowerCase() === _constants__WEBPACK_IMPORTED_MODULE_1__.SIGNATURE_HEADER) {\n            continue;\n        }\n        keys.push(key);\n        const value = query[key];\n        if (typeof value === \"string\") {\n            serialized[key] = `${(0,_smithy_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__.escapeUri)(key)}=${(0,_smithy_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__.escapeUri)(value)}`;\n        }\n        else if (Array.isArray(value)) {\n            serialized[key] = value\n                .slice(0)\n                .reduce((encoded, value) => encoded.concat([`${(0,_smithy_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__.escapeUri)(key)}=${(0,_smithy_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__.escapeUri)(value)}`]), [])\n                .sort()\n                .join(\"&\");\n        }\n    }\n    return keys\n        .map((key) => serialized[key])\n        .filter((serialized) => serialized)\n        .join(\"&\");\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/signature-v4/dist-es/getCanonicalQuery.js?");

/***/ }),

/***/ "./node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getPayloadHash: () => (/* binding */ getPayloadHash)\n/* harmony export */ });\n/* harmony import */ var _smithy_is_array_buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/is-array-buffer */ \"./node_modules/@smithy/is-array-buffer/dist-es/index.js\");\n/* harmony import */ var _smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/util-hex-encoding */ \"./node_modules/@smithy/util-hex-encoding/dist-es/index.js\");\n/* harmony import */ var _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smithy/util-utf8 */ \"./node_modules/@smithy/util-utf8/dist-es/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"./node_modules/@smithy/signature-v4/dist-es/constants.js\");\n\n\n\n\nconst getPayloadHash = async ({ headers, body }, hashConstructor) => {\n    for (const headerName of Object.keys(headers)) {\n        if (headerName.toLowerCase() === _constants__WEBPACK_IMPORTED_MODULE_3__.SHA256_HEADER) {\n            return headers[headerName];\n        }\n    }\n    if (body == undefined) {\n        return \"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855\";\n    }\n    else if (typeof body === \"string\" || ArrayBuffer.isView(body) || (0,_smithy_is_array_buffer__WEBPACK_IMPORTED_MODULE_0__.isArrayBuffer)(body)) {\n        const hashCtor = new hashConstructor();\n        hashCtor.update((0,_smithy_util_utf8__WEBPACK_IMPORTED_MODULE_2__.toUint8Array)(body));\n        return (0,_smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_1__.toHex)(await hashCtor.digest());\n    }\n    return _constants__WEBPACK_IMPORTED_MODULE_3__.UNSIGNED_PAYLOAD;\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js?");

/***/ }),

/***/ "./node_modules/@smithy/signature-v4/dist-es/headerUtil.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@smithy/signature-v4/dist-es/headerUtil.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteHeader: () => (/* binding */ deleteHeader),\n/* harmony export */   getHeaderValue: () => (/* binding */ getHeaderValue),\n/* harmony export */   hasHeader: () => (/* binding */ hasHeader)\n/* harmony export */ });\nconst hasHeader = (soughtHeader, headers) => {\n    soughtHeader = soughtHeader.toLowerCase();\n    for (const headerName of Object.keys(headers)) {\n        if (soughtHeader === headerName.toLowerCase()) {\n            return true;\n        }\n    }\n    return false;\n};\nconst getHeaderValue = (soughtHeader, headers) => {\n    soughtHeader = soughtHeader.toLowerCase();\n    for (const headerName of Object.keys(headers)) {\n        if (soughtHeader === headerName.toLowerCase()) {\n            return headers[headerName];\n        }\n    }\n    return undefined;\n};\nconst deleteHeader = (soughtHeader, headers) => {\n    soughtHeader = soughtHeader.toLowerCase();\n    for (const headerName of Object.keys(headers)) {\n        if (soughtHeader === headerName.toLowerCase()) {\n            delete headers[headerName];\n        }\n    }\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/signature-v4/dist-es/headerUtil.js?");

/***/ }),

/***/ "./node_modules/@smithy/signature-v4/dist-es/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@smithy/signature-v4/dist-es/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SignatureV4: () => (/* reexport safe */ _SignatureV4__WEBPACK_IMPORTED_MODULE_0__.SignatureV4),\n/* harmony export */   clearCredentialCache: () => (/* reexport safe */ _credentialDerivation__WEBPACK_IMPORTED_MODULE_6__.clearCredentialCache),\n/* harmony export */   createScope: () => (/* reexport safe */ _credentialDerivation__WEBPACK_IMPORTED_MODULE_6__.createScope),\n/* harmony export */   getCanonicalHeaders: () => (/* reexport safe */ _getCanonicalHeaders__WEBPACK_IMPORTED_MODULE_1__.getCanonicalHeaders),\n/* harmony export */   getCanonicalQuery: () => (/* reexport safe */ _getCanonicalQuery__WEBPACK_IMPORTED_MODULE_2__.getCanonicalQuery),\n/* harmony export */   getPayloadHash: () => (/* reexport safe */ _getPayloadHash__WEBPACK_IMPORTED_MODULE_3__.getPayloadHash),\n/* harmony export */   getSigningKey: () => (/* reexport safe */ _credentialDerivation__WEBPACK_IMPORTED_MODULE_6__.getSigningKey),\n/* harmony export */   moveHeadersToQuery: () => (/* reexport safe */ _moveHeadersToQuery__WEBPACK_IMPORTED_MODULE_4__.moveHeadersToQuery),\n/* harmony export */   prepareRequest: () => (/* reexport safe */ _prepareRequest__WEBPACK_IMPORTED_MODULE_5__.prepareRequest)\n/* harmony export */ });\n/* harmony import */ var _SignatureV4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignatureV4 */ \"./node_modules/@smithy/signature-v4/dist-es/SignatureV4.js\");\n/* harmony import */ var _getCanonicalHeaders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getCanonicalHeaders */ \"./node_modules/@smithy/signature-v4/dist-es/getCanonicalHeaders.js\");\n/* harmony import */ var _getCanonicalQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getCanonicalQuery */ \"./node_modules/@smithy/signature-v4/dist-es/getCanonicalQuery.js\");\n/* harmony import */ var _getPayloadHash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getPayloadHash */ \"./node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js\");\n/* harmony import */ var _moveHeadersToQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./moveHeadersToQuery */ \"./node_modules/@smithy/signature-v4/dist-es/moveHeadersToQuery.js\");\n/* harmony import */ var _prepareRequest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prepareRequest */ \"./node_modules/@smithy/signature-v4/dist-es/prepareRequest.js\");\n/* harmony import */ var _credentialDerivation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./credentialDerivation */ \"./node_modules/@smithy/signature-v4/dist-es/credentialDerivation.js\");\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/signature-v4/dist-es/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/signature-v4/dist-es/moveHeadersToQuery.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@smithy/signature-v4/dist-es/moveHeadersToQuery.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   moveHeadersToQuery: () => (/* binding */ moveHeadersToQuery)\n/* harmony export */ });\n/* harmony import */ var _cloneRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cloneRequest */ \"./node_modules/@smithy/signature-v4/dist-es/cloneRequest.js\");\n\nconst moveHeadersToQuery = (request, options = {}) => {\n    const { headers, query = {} } = typeof request.clone === \"function\" ? request.clone() : (0,_cloneRequest__WEBPACK_IMPORTED_MODULE_0__.cloneRequest)(request);\n    for (const name of Object.keys(headers)) {\n        const lname = name.toLowerCase();\n        if (lname.slice(0, 6) === \"x-amz-\" && !options.unhoistableHeaders?.has(lname)) {\n            query[name] = headers[name];\n            delete headers[name];\n        }\n    }\n    return {\n        ...request,\n        headers,\n        query,\n    };\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/signature-v4/dist-es/moveHeadersToQuery.js?");

/***/ }),

/***/ "./node_modules/@smithy/signature-v4/dist-es/prepareRequest.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@smithy/signature-v4/dist-es/prepareRequest.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prepareRequest: () => (/* binding */ prepareRequest)\n/* harmony export */ });\n/* harmony import */ var _cloneRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cloneRequest */ \"./node_modules/@smithy/signature-v4/dist-es/cloneRequest.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./node_modules/@smithy/signature-v4/dist-es/constants.js\");\n\n\nconst prepareRequest = (request) => {\n    request = typeof request.clone === \"function\" ? request.clone() : (0,_cloneRequest__WEBPACK_IMPORTED_MODULE_0__.cloneRequest)(request);\n    for (const headerName of Object.keys(request.headers)) {\n        if (_constants__WEBPACK_IMPORTED_MODULE_1__.GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {\n            delete request.headers[headerName];\n        }\n    }\n    return request;\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/signature-v4/dist-es/prepareRequest.js?");

/***/ }),

/***/ "./node_modules/@smithy/signature-v4/dist-es/utilDate.js":
/*!***************************************************************!*\
  !*** ./node_modules/@smithy/signature-v4/dist-es/utilDate.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   iso8601: () => (/* binding */ iso8601),\n/* harmony export */   toDate: () => (/* binding */ toDate)\n/* harmony export */ });\nconst iso8601 = (time) => toDate(time)\n    .toISOString()\n    .replace(/\\.\\d{3}Z$/, \"Z\");\nconst toDate = (time) => {\n    if (typeof time === \"number\") {\n        return new Date(time * 1000);\n    }\n    if (typeof time === \"string\") {\n        if (Number(time)) {\n            return new Date(Number(time) * 1000);\n        }\n        return new Date(time);\n    }\n    return time;\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/signature-v4/dist-es/utilDate.js?");

/***/ }),

/***/ "./node_modules/@smithy/smithy-client/dist-es/NoOpLogger.js":
/*!******************************************************************!*\
  !*** ./node_modules/@smithy/smithy-client/dist-es/NoOpLogger.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NoOpLogger: () => (/* binding */ NoOpLogger)\n/* harmony export */ });\nclass NoOpLogger {\n    trace() { }\n    debug() { }\n    info() { }\n    warn() { }\n    error() { }\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/smithy-client/dist-es/NoOpLogger.js?");

/***/ }),

/***/ "./node_modules/@smithy/smithy-client/dist-es/client.js":
/*!**************************************************************!*\
  !*** ./node_modules/@smithy/smithy-client/dist-es/client.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Client: () => (/* binding */ Client)\n/* harmony export */ });\n/* harmony import */ var _smithy_middleware_stack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/middleware-stack */ \"./node_modules/@smithy/middleware-stack/dist-es/index.js\");\n\nclass Client {\n    constructor(config) {\n        this.middlewareStack = (0,_smithy_middleware_stack__WEBPACK_IMPORTED_MODULE_0__.constructStack)();\n        this.config = config;\n    }\n    send(command, optionsOrCb, cb) {\n        const options = typeof optionsOrCb !== \"function\" ? optionsOrCb : undefined;\n        const callback = typeof optionsOrCb === \"function\" ? optionsOrCb : cb;\n        const handler = command.resolveMiddleware(this.middlewareStack, this.config, options);\n        if (callback) {\n            handler(command)\n                .then((result) => callback(null, result.output), (err) => callback(err))\n                .catch(() => { });\n        }\n        else {\n            return handler(command).then((result) => result.output);\n        }\n    }\n    destroy() {\n        if (this.config.requestHandler.destroy)\n            this.config.requestHandler.destroy();\n    }\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/smithy-client/dist-es/client.js?");

/***/ }),

/***/ "./node_modules/@smithy/smithy-client/dist-es/collect-stream-body.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@smithy/smithy-client/dist-es/collect-stream-body.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   collectBody: () => (/* binding */ collectBody)\n/* harmony export */ });\n/* harmony import */ var _smithy_util_stream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-stream */ \"./node_modules/@smithy/util-stream/dist-es/index.js\");\n\nconst collectBody = async (streamBody = new Uint8Array(), context) => {\n    if (streamBody instanceof Uint8Array) {\n        return _smithy_util_stream__WEBPACK_IMPORTED_MODULE_0__.Uint8ArrayBlobAdapter.mutate(streamBody);\n    }\n    if (!streamBody) {\n        return _smithy_util_stream__WEBPACK_IMPORTED_MODULE_0__.Uint8ArrayBlobAdapter.mutate(new Uint8Array());\n    }\n    const fromContext = context.streamCollector(streamBody);\n    return _smithy_util_stream__WEBPACK_IMPORTED_MODULE_0__.Uint8ArrayBlobAdapter.mutate(await fromContext);\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/smithy-client/dist-es/collect-stream-body.js?");

/***/ }),

/***/ "./node_modules/@smithy/smithy-client/dist-es/command.js":
/*!***************************************************************!*\
  !*** ./node_modules/@smithy/smithy-client/dist-es/command.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Command: () => (/* binding */ Command)\n/* harmony export */ });\n/* harmony import */ var _smithy_middleware_stack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/middleware-stack */ \"./node_modules/@smithy/middleware-stack/dist-es/index.js\");\n/* harmony import */ var _smithy_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/types */ \"./node_modules/@smithy/types/dist-es/index.js\");\n\n\nclass Command {\n    constructor() {\n        this.middlewareStack = (0,_smithy_middleware_stack__WEBPACK_IMPORTED_MODULE_0__.constructStack)();\n    }\n    static classBuilder() {\n        return new ClassBuilder();\n    }\n    resolveMiddlewareWithContext(clientStack, configuration, options, { middlewareFn, clientName, commandName, inputFilterSensitiveLog, outputFilterSensitiveLog, smithyContext, additionalContext, CommandCtor, }) {\n        for (const mw of middlewareFn.bind(this)(CommandCtor, clientStack, configuration, options)) {\n            this.middlewareStack.use(mw);\n        }\n        const stack = clientStack.concat(this.middlewareStack);\n        const { logger } = configuration;\n        const handlerExecutionContext = {\n            logger,\n            clientName,\n            commandName,\n            inputFilterSensitiveLog,\n            outputFilterSensitiveLog,\n            [_smithy_types__WEBPACK_IMPORTED_MODULE_1__.SMITHY_CONTEXT_KEY]: {\n                ...smithyContext,\n            },\n            ...additionalContext,\n        };\n        const { requestHandler } = configuration;\n        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);\n    }\n}\nclass ClassBuilder {\n    constructor() {\n        this._init = () => { };\n        this._ep = {};\n        this._middlewareFn = () => [];\n        this._commandName = \"\";\n        this._clientName = \"\";\n        this._additionalContext = {};\n        this._smithyContext = {};\n        this._inputFilterSensitiveLog = (_) => _;\n        this._outputFilterSensitiveLog = (_) => _;\n        this._serializer = null;\n        this._deserializer = null;\n    }\n    init(cb) {\n        this._init = cb;\n    }\n    ep(endpointParameterInstructions) {\n        this._ep = endpointParameterInstructions;\n        return this;\n    }\n    m(middlewareSupplier) {\n        this._middlewareFn = middlewareSupplier;\n        return this;\n    }\n    s(service, operation, smithyContext = {}) {\n        this._smithyContext = {\n            service,\n            operation,\n            ...smithyContext,\n        };\n        return this;\n    }\n    c(additionalContext = {}) {\n        this._additionalContext = additionalContext;\n        return this;\n    }\n    n(clientName, commandName) {\n        this._clientName = clientName;\n        this._commandName = commandName;\n        return this;\n    }\n    f(inputFilter = (_) => _, outputFilter = (_) => _) {\n        this._inputFilterSensitiveLog = inputFilter;\n        this._outputFilterSensitiveLog = outputFilter;\n        return this;\n    }\n    ser(serializer) {\n        this._serializer = serializer;\n        return this;\n    }\n    de(deserializer) {\n        this._deserializer = deserializer;\n        return this;\n    }\n    build() {\n        const closure = this;\n        let CommandRef;\n        return (CommandRef = class extends Command {\n            static getEndpointParameterInstructions() {\n                return closure._ep;\n            }\n            constructor(...[input]) {\n                super();\n                this.serialize = closure._serializer;\n                this.deserialize = closure._deserializer;\n                this.input = input ?? {};\n                closure._init(this);\n            }\n            resolveMiddleware(stack, configuration, options) {\n                return this.resolveMiddlewareWithContext(stack, configuration, options, {\n                    CommandCtor: CommandRef,\n                    middlewareFn: closure._middlewareFn,\n                    clientName: closure._clientName,\n                    commandName: closure._commandName,\n                    inputFilterSensitiveLog: closure._inputFilterSensitiveLog,\n                    outputFilterSensitiveLog: closure._outputFilterSensitiveLog,\n                    smithyContext: closure._smithyContext,\n                    additionalContext: closure._additionalContext,\n                });\n            }\n        });\n    }\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/smithy-client/dist-es/command.js?");

/***/ }),

/***/ "./node_modules/@smithy/smithy-client/dist-es/constants.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@smithy/smithy-client/dist-es/constants.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SENSITIVE_STRING: () => (/* binding */ SENSITIVE_STRING)\n/* harmony export */ });\nconst SENSITIVE_STRING = \"***SensitiveInformation***\";\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/smithy-client/dist-es/constants.js?");

/***/ }),

/***/ "./node_modules/@smithy/smithy-client/dist-es/create-aggregated-client.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@smithy/smithy-client/dist-es/create-aggregated-client.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createAggregatedClient: () => (/* binding */ createAggregatedClient)\n/* harmony export */ });\nconst createAggregatedClient = (commands, Client) => {\n    for (const command of Object.keys(commands)) {\n        const CommandCtor = commands[command];\n        const methodImpl = async function (args, optionsOrCb, cb) {\n            const command = new CommandCtor(args);\n            if (typeof optionsOrCb === \"function\") {\n                this.send(command, optionsOrCb);\n            }\n            else if (typeof cb === \"function\") {\n                if (typeof optionsOrCb !== \"object\")\n                    throw new Error(`Expected http options but got ${typeof optionsOrCb}`);\n                this.send(command, optionsOrCb || {}, cb);\n            }\n            else {\n                return this.send(command, optionsOrCb);\n            }\n        };\n        const methodName = (command[0].toLowerCase() + command.slice(1)).replace(/Command$/, \"\");\n        Client.prototype[methodName] = methodImpl;\n    }\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/smithy-client/dist-es/create-aggregated-client.js?");

/***/ }),

/***/ "./node_modules/@smithy/smithy-client/dist-es/date-utils.js":
/*!******************************************************************!*\
  !*** ./node_modules/@smithy/smithy-client/dist-es/date-utils.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dateToUtcString: () => (/* binding */ dateToUtcString),\n/* harmony export */   parseEpochTimestamp: () => (/* binding */ parseEpochTimestamp),\n/* harmony export */   parseRfc3339DateTime: () => (/* binding */ parseRfc3339DateTime),\n/* harmony export */   parseRfc3339DateTimeWithOffset: () => (/* binding */ parseRfc3339DateTimeWithOffset),\n/* harmony export */   parseRfc7231DateTime: () => (/* binding */ parseRfc7231DateTime)\n/* harmony export */ });\n/* harmony import */ var _parse_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse-utils */ \"./node_modules/@smithy/smithy-client/dist-es/parse-utils.js\");\n\nconst DAYS = [\"Sun\", \"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\", \"Sat\"];\nconst MONTHS = [\"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\", \"Jun\", \"Jul\", \"Aug\", \"Sep\", \"Oct\", \"Nov\", \"Dec\"];\nfunction dateToUtcString(date) {\n    const year = date.getUTCFullYear();\n    const month = date.getUTCMonth();\n    const dayOfWeek = date.getUTCDay();\n    const dayOfMonthInt = date.getUTCDate();\n    const hoursInt = date.getUTCHours();\n    const minutesInt = date.getUTCMinutes();\n    const secondsInt = date.getUTCSeconds();\n    const dayOfMonthString = dayOfMonthInt < 10 ? `0${dayOfMonthInt}` : `${dayOfMonthInt}`;\n    const hoursString = hoursInt < 10 ? `0${hoursInt}` : `${hoursInt}`;\n    const minutesString = minutesInt < 10 ? `0${minutesInt}` : `${minutesInt}`;\n    const secondsString = secondsInt < 10 ? `0${secondsInt}` : `${secondsInt}`;\n    return `${DAYS[dayOfWeek]}, ${dayOfMonthString} ${MONTHS[month]} ${year} ${hoursString}:${minutesString}:${secondsString} GMT`;\n}\nconst RFC3339 = new RegExp(/^(\\d{4})-(\\d{2})-(\\d{2})[tT](\\d{2}):(\\d{2}):(\\d{2})(?:\\.(\\d+))?[zZ]$/);\nconst parseRfc3339DateTime = (value) => {\n    if (value === null || value === undefined) {\n        return undefined;\n    }\n    if (typeof value !== \"string\") {\n        throw new TypeError(\"RFC-3339 date-times must be expressed as strings\");\n    }\n    const match = RFC3339.exec(value);\n    if (!match) {\n        throw new TypeError(\"Invalid RFC-3339 date-time value\");\n    }\n    const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds] = match;\n    const year = (0,_parse_utils__WEBPACK_IMPORTED_MODULE_0__.strictParseShort)(stripLeadingZeroes(yearStr));\n    const month = parseDateValue(monthStr, \"month\", 1, 12);\n    const day = parseDateValue(dayStr, \"day\", 1, 31);\n    return buildDate(year, month, day, { hours, minutes, seconds, fractionalMilliseconds });\n};\nconst RFC3339_WITH_OFFSET = new RegExp(/^(\\d{4})-(\\d{2})-(\\d{2})[tT](\\d{2}):(\\d{2}):(\\d{2})(?:\\.(\\d+))?(([-+]\\d{2}\\:\\d{2})|[zZ])$/);\nconst parseRfc3339DateTimeWithOffset = (value) => {\n    if (value === null || value === undefined) {\n        return undefined;\n    }\n    if (typeof value !== \"string\") {\n        throw new TypeError(\"RFC-3339 date-times must be expressed as strings\");\n    }\n    const match = RFC3339_WITH_OFFSET.exec(value);\n    if (!match) {\n        throw new TypeError(\"Invalid RFC-3339 date-time value\");\n    }\n    const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, offsetStr] = match;\n    const year = (0,_parse_utils__WEBPACK_IMPORTED_MODULE_0__.strictParseShort)(stripLeadingZeroes(yearStr));\n    const month = parseDateValue(monthStr, \"month\", 1, 12);\n    const day = parseDateValue(dayStr, \"day\", 1, 31);\n    const date = buildDate(year, month, day, { hours, minutes, seconds, fractionalMilliseconds });\n    if (offsetStr.toUpperCase() != \"Z\") {\n        date.setTime(date.getTime() - parseOffsetToMilliseconds(offsetStr));\n    }\n    return date;\n};\nconst IMF_FIXDATE = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\\d{4}) (\\d{1,2}):(\\d{2}):(\\d{2})(?:\\.(\\d+))? GMT$/);\nconst RFC_850_DATE = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\\d{2}) (\\d{1,2}):(\\d{2}):(\\d{2})(?:\\.(\\d+))? GMT$/);\nconst ASC_TIME = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\\d{2}) (\\d{1,2}):(\\d{2}):(\\d{2})(?:\\.(\\d+))? (\\d{4})$/);\nconst parseRfc7231DateTime = (value) => {\n    if (value === null || value === undefined) {\n        return undefined;\n    }\n    if (typeof value !== \"string\") {\n        throw new TypeError(\"RFC-7231 date-times must be expressed as strings\");\n    }\n    let match = IMF_FIXDATE.exec(value);\n    if (match) {\n        const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;\n        return buildDate((0,_parse_utils__WEBPACK_IMPORTED_MODULE_0__.strictParseShort)(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr, \"day\", 1, 31), { hours, minutes, seconds, fractionalMilliseconds });\n    }\n    match = RFC_850_DATE.exec(value);\n    if (match) {\n        const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;\n        return adjustRfc850Year(buildDate(parseTwoDigitYear(yearStr), parseMonthByShortName(monthStr), parseDateValue(dayStr, \"day\", 1, 31), {\n            hours,\n            minutes,\n            seconds,\n            fractionalMilliseconds,\n        }));\n    }\n    match = ASC_TIME.exec(value);\n    if (match) {\n        const [_, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, yearStr] = match;\n        return buildDate((0,_parse_utils__WEBPACK_IMPORTED_MODULE_0__.strictParseShort)(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr.trimLeft(), \"day\", 1, 31), { hours, minutes, seconds, fractionalMilliseconds });\n    }\n    throw new TypeError(\"Invalid RFC-7231 date-time value\");\n};\nconst parseEpochTimestamp = (value) => {\n    if (value === null || value === undefined) {\n        return undefined;\n    }\n    let valueAsDouble;\n    if (typeof value === \"number\") {\n        valueAsDouble = value;\n    }\n    else if (typeof value === \"string\") {\n        valueAsDouble = (0,_parse_utils__WEBPACK_IMPORTED_MODULE_0__.strictParseDouble)(value);\n    }\n    else {\n        throw new TypeError(\"Epoch timestamps must be expressed as floating point numbers or their string representation\");\n    }\n    if (Number.isNaN(valueAsDouble) || valueAsDouble === Infinity || valueAsDouble === -Infinity) {\n        throw new TypeError(\"Epoch timestamps must be valid, non-Infinite, non-NaN numerics\");\n    }\n    return new Date(Math.round(valueAsDouble * 1000));\n};\nconst buildDate = (year, month, day, time) => {\n    const adjustedMonth = month - 1;\n    validateDayOfMonth(year, adjustedMonth, day);\n    return new Date(Date.UTC(year, adjustedMonth, day, parseDateValue(time.hours, \"hour\", 0, 23), parseDateValue(time.minutes, \"minute\", 0, 59), parseDateValue(time.seconds, \"seconds\", 0, 60), parseMilliseconds(time.fractionalMilliseconds)));\n};\nconst parseTwoDigitYear = (value) => {\n    const thisYear = new Date().getUTCFullYear();\n    const valueInThisCentury = Math.floor(thisYear / 100) * 100 + (0,_parse_utils__WEBPACK_IMPORTED_MODULE_0__.strictParseShort)(stripLeadingZeroes(value));\n    if (valueInThisCentury < thisYear) {\n        return valueInThisCentury + 100;\n    }\n    return valueInThisCentury;\n};\nconst FIFTY_YEARS_IN_MILLIS = 50 * 365 * 24 * 60 * 60 * 1000;\nconst adjustRfc850Year = (input) => {\n    if (input.getTime() - new Date().getTime() > FIFTY_YEARS_IN_MILLIS) {\n        return new Date(Date.UTC(input.getUTCFullYear() - 100, input.getUTCMonth(), input.getUTCDate(), input.getUTCHours(), input.getUTCMinutes(), input.getUTCSeconds(), input.getUTCMilliseconds()));\n    }\n    return input;\n};\nconst parseMonthByShortName = (value) => {\n    const monthIdx = MONTHS.indexOf(value);\n    if (monthIdx < 0) {\n        throw new TypeError(`Invalid month: ${value}`);\n    }\n    return monthIdx + 1;\n};\nconst DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];\nconst validateDayOfMonth = (year, month, day) => {\n    let maxDays = DAYS_IN_MONTH[month];\n    if (month === 1 && isLeapYear(year)) {\n        maxDays = 29;\n    }\n    if (day > maxDays) {\n        throw new TypeError(`Invalid day for ${MONTHS[month]} in ${year}: ${day}`);\n    }\n};\nconst isLeapYear = (year) => {\n    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);\n};\nconst parseDateValue = (value, type, lower, upper) => {\n    const dateVal = (0,_parse_utils__WEBPACK_IMPORTED_MODULE_0__.strictParseByte)(stripLeadingZeroes(value));\n    if (dateVal < lower || dateVal > upper) {\n        throw new TypeError(`${type} must be between ${lower} and ${upper}, inclusive`);\n    }\n    return dateVal;\n};\nconst parseMilliseconds = (value) => {\n    if (value === null || value === undefined) {\n        return 0;\n    }\n    return (0,_parse_utils__WEBPACK_IMPORTED_MODULE_0__.strictParseFloat32)(\"0.\" + value) * 1000;\n};\nconst parseOffsetToMilliseconds = (value) => {\n    const directionStr = value[0];\n    let direction = 1;\n    if (directionStr == \"+\") {\n        direction = 1;\n    }\n    else if (directionStr == \"-\") {\n        direction = -1;\n    }\n    else {\n        throw new TypeError(`Offset direction, ${directionStr}, must be \"+\" or \"-\"`);\n    }\n    const hour = Number(value.substring(1, 3));\n    const minute = Number(value.substring(4, 6));\n    return direction * (hour * 60 + minute) * 60 * 1000;\n};\nconst stripLeadingZeroes = (value) => {\n    let idx = 0;\n    while (idx < value.length - 1 && value.charAt(idx) === \"0\") {\n        idx++;\n    }\n    if (idx === 0) {\n        return value;\n    }\n    return value.slice(idx);\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/smithy-client/dist-es/date-utils.js?");

/***/ }),

/***/ "./node_modules/@smithy/smithy-client/dist-es/default-error-handler.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@smithy/smithy-client/dist-es/default-error-handler.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   throwDefaultError: () => (/* binding */ throwDefaultError),\n/* harmony export */   withBaseException: () => (/* binding */ withBaseException)\n/* harmony export */ });\n/* harmony import */ var _exceptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exceptions */ \"./node_modules/@smithy/smithy-client/dist-es/exceptions.js\");\n\nconst throwDefaultError = ({ output, parsedBody, exceptionCtor, errorCode }) => {\n    const $metadata = deserializeMetadata(output);\n    const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + \"\" : undefined;\n    const response = new exceptionCtor({\n        name: parsedBody?.code || parsedBody?.Code || errorCode || statusCode || \"UnknownError\",\n        $fault: \"client\",\n        $metadata,\n    });\n    throw (0,_exceptions__WEBPACK_IMPORTED_MODULE_0__.decorateServiceException)(response, parsedBody);\n};\nconst withBaseException = (ExceptionCtor) => {\n    return ({ output, parsedBody, errorCode }) => {\n        throwDefaultError({ output, parsedBody, exceptionCtor: ExceptionCtor, errorCode });\n    };\n};\nconst deserializeMetadata = (output) => ({\n    httpStatusCode: output.statusCode,\n    requestId: output.headers[\"x-amzn-requestid\"] ?? output.headers[\"x-amzn-request-id\"] ?? output.headers[\"x-amz-request-id\"],\n    extendedRequestId: output.headers[\"x-amz-id-2\"],\n    cfId: output.headers[\"x-amz-cf-id\"],\n});\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/smithy-client/dist-es/default-error-handler.js?");

/***/ }),

/***/ "./node_modules/@smithy/smithy-client/dist-es/defaults-mode.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@smithy/smithy-client/dist-es/defaults-mode.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadConfigsForDefaultMode: () => (/* binding */ loadConfigsForDefaultMode)\n/* harmony export */ });\nconst loadConfigsForDefaultMode = (mode) => {\n    switch (mode) {\n        case \"standard\":\n            return {\n                retryMode: \"standard\",\n                connectionTimeout: 3100,\n            };\n        case \"in-region\":\n            return {\n                retryMode: \"standard\",\n                connectionTimeout: 1100,\n            };\n        case \"cross-region\":\n            return {\n                retryMode: \"standard\",\n                connectionTimeout: 3100,\n            };\n        case \"mobile\":\n            return {\n                retryMode: \"standard\",\n                connectionTimeout: 30000,\n            };\n        default:\n            return {};\n    }\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/smithy-client/dist-es/defaults-mode.js?");

/***/ }),

/***/ "./node_modules/@smithy/smithy-client/dist-es/emitWarningIfUnsupportedVersion.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@smithy/smithy-client/dist-es/emitWarningIfUnsupportedVersion.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   emitWarningIfUnsupportedVersion: () => (/* binding */ emitWarningIfUnsupportedVersion)\n/* harmony export */ });\nlet warningEmitted = false;\nconst emitWarningIfUnsupportedVersion = (version) => {\n    if (version && !warningEmitted && parseInt(version.substring(1, version.indexOf(\".\"))) < 14) {\n        warningEmitted = true;\n    }\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/smithy-client/dist-es/emitWarningIfUnsupportedVersion.js?");

/***/ }),

/***/ "./node_modules/@smithy/smithy-client/dist-es/exceptions.js":
/*!******************************************************************!*\
  !*** ./node_modules/@smithy/smithy-client/dist-es/exceptions.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ServiceException: () => (/* binding */ ServiceException),\n/* harmony export */   decorateServiceException: () => (/* binding */ decorateServiceException)\n/* harmony export */ });\nclass ServiceException extends Error {\n    constructor(options) {\n        super(options.message);\n        Object.setPrototypeOf(this, ServiceException.prototype);\n        this.name = options.name;\n        this.$fault = options.$fault;\n        this.$metadata = options.$metadata;\n    }\n}\nconst decorateServiceException = (exception, additions = {}) => {\n    Object.entries(additions)\n        .filter(([, v]) => v !== undefined)\n        .forEach(([k, v]) => {\n        if (exception[k] == undefined || exception[k] === \"\") {\n            exception[k] = v;\n        }\n    });\n    const message = exception.message || exception.Message || \"UnknownError\";\n    exception.message = message;\n    delete exception.Message;\n    return exception;\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/smithy-client/dist-es/exceptions.js?");

/***/ }),

/***/ "./node_modules/@smithy/smithy-client/dist-es/extended-encode-uri-component.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@smithy/smithy-client/dist-es/extended-encode-uri-component.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   extendedEncodeURIComponent: () => (/* binding */ extendedEncodeURIComponent)\n/* harmony export */ });\nfunction extendedEncodeURIComponent(str) {\n    return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {\n        return \"%\" + c.charCodeAt(0).toString(16).toUpperCase();\n    });\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/smithy-client/dist-es/extended-encode-uri-component.js?");

/***/ }),

/***/ "./node_modules/@smithy/smithy-client/dist-es/extensions/checksum.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@smithy/smithy-client/dist-es/extensions/checksum.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AlgorithmId: () => (/* reexport safe */ _smithy_types__WEBPACK_IMPORTED_MODULE_0__.AlgorithmId),\n/* harmony export */   getChecksumConfiguration: () => (/* binding */ getChecksumConfiguration),\n/* harmony export */   resolveChecksumRuntimeConfig: () => (/* binding */ resolveChecksumRuntimeConfig)\n/* harmony export */ });\n/* harmony import */ var _smithy_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/types */ \"./node_modules/@smithy/types/dist-es/index.js\");\n\n\nconst getChecksumConfiguration = (runtimeConfig) => {\n    const checksumAlgorithms = [];\n    for (const id in _smithy_types__WEBPACK_IMPORTED_MODULE_0__.AlgorithmId) {\n        const algorithmId = _smithy_types__WEBPACK_IMPORTED_MODULE_0__.AlgorithmId[id];\n        if (runtimeConfig[algorithmId] === undefined) {\n            continue;\n        }\n        checksumAlgorithms.push({\n            algorithmId: () => algorithmId,\n            checksumConstructor: () => runtimeConfig[algorithmId],\n        });\n    }\n    return {\n        _checksumAlgorithms: checksumAlgorithms,\n        addChecksumAlgorithm(algo) {\n            this._checksumAlgorithms.push(algo);\n        },\n        checksumAlgorithms() {\n            return this._checksumAlgorithms;\n        },\n    };\n};\nconst resolveChecksumRuntimeConfig = (clientConfig) => {\n    const runtimeConfig = {};\n    clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {\n        runtimeConfig[checksumAlgorithm.algorithmId()] = checksumAlgorithm.checksumConstructor();\n    });\n    return runtimeConfig;\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/smithy-client/dist-es/extensions/checksum.js?");

/***/ }),

/***/ "./node_modules/@smithy/smithy-client/dist-es/extensions/defaultExtensionConfiguration.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@smithy/smithy-client/dist-es/extensions/defaultExtensionConfiguration.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDefaultClientConfiguration: () => (/* binding */ getDefaultClientConfiguration),\n/* harmony export */   getDefaultExtensionConfiguration: () => (/* binding */ getDefaultExtensionConfiguration),\n/* harmony export */   resolveDefaultRuntimeConfig: () => (/* binding */ resolveDefaultRuntimeConfig)\n/* harmony export */ });\n/* harmony import */ var _checksum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checksum */ \"./node_modules/@smithy/smithy-client/dist-es/extensions/checksum.js\");\n/* harmony import */ var _retry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./retry */ \"./node_modules/@smithy/smithy-client/dist-es/extensions/retry.js\");\n\n\nconst getDefaultExtensionConfiguration = (runtimeConfig) => {\n    return {\n        ...(0,_checksum__WEBPACK_IMPORTED_MODULE_0__.getChecksumConfiguration)(runtimeConfig),\n        ...(0,_retry__WEBPACK_IMPORTED_MODULE_1__.getRetryConfiguration)(runtimeConfig),\n    };\n};\nconst getDefaultClientConfiguration = getDefaultExtensionConfiguration;\nconst resolveDefaultRuntimeConfig = (config) => {\n    return {\n        ...(0,_checksum__WEBPACK_IMPORTED_MODULE_0__.resolveChecksumRuntimeConfig)(config),\n        ...(0,_retry__WEBPACK_IMPORTED_MODULE_1__.resolveRetryRuntimeConfig)(config),\n    };\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/smithy-client/dist-es/extensions/defaultExtensionConfiguration.js?");

/***/ }),

/***/ "./node_modules/@smithy/smithy-client/dist-es/extensions/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@smithy/smithy-client/dist-es/extensions/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDefaultClientConfiguration: () => (/* reexport safe */ _defaultExtensionConfiguration__WEBPACK_IMPORTED_MODULE_0__.getDefaultClientConfiguration),\n/* harmony export */   getDefaultExtensionConfiguration: () => (/* reexport safe */ _defaultExtensionConfiguration__WEBPACK_IMPORTED_MODULE_0__.getDefaultExtensionConfiguration),\n/* harmony export */   resolveDefaultRuntimeConfig: () => (/* reexport safe */ _defaultExtensionConfiguration__WEBPACK_IMPORTED_MODULE_0__.resolveDefaultRuntimeConfig)\n/* harmony export */ });\n/* harmony import */ var _defaultExtensionConfiguration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultExtensionConfiguration */ \"./node_modules/@smithy/smithy-client/dist-es/extensions/defaultExtensionConfiguration.js\");\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/smithy-client/dist-es/extensions/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/smithy-client/dist-es/extensions/retry.js":
/*!************************************************************************!*\
  !*** ./node_modules/@smithy/smithy-client/dist-es/extensions/retry.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getRetryConfiguration: () => (/* binding */ getRetryConfiguration),\n/* harmony export */   resolveRetryRuntimeConfig: () => (/* binding */ resolveRetryRuntimeConfig)\n/* harmony export */ });\nconst getRetryConfiguration = (runtimeConfig) => {\n    let _retryStrategy = runtimeConfig.retryStrategy;\n    return {\n        setRetryStrategy(retryStrategy) {\n            _retryStrategy = retryStrategy;\n        },\n        retryStrategy() {\n            return _retryStrategy;\n        },\n    };\n};\nconst resolveRetryRuntimeConfig = (retryStrategyConfiguration) => {\n    const runtimeConfig = {};\n    runtimeConfig.retryStrategy = retryStrategyConfiguration.retryStrategy();\n    return runtimeConfig;\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/smithy-client/dist-es/extensions/retry.js?");

/***/ }),

/***/ "./node_modules/@smithy/smithy-client/dist-es/get-array-if-single-item.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@smithy/smithy-client/dist-es/get-array-if-single-item.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getArrayIfSingleItem: () => (/* binding */ getArrayIfSingleItem)\n/* harmony export */ });\nconst getArrayIfSingleItem = (mayBeArray) => Array.isArray(mayBeArray) ? mayBeArray : [mayBeArray];\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/smithy-client/dist-es/get-array-if-single-item.js?");

/***/ }),

/***/ "./node_modules/@smithy/smithy-client/dist-es/get-value-from-text-node.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@smithy/smithy-client/dist-es/get-value-from-text-node.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getValueFromTextNode: () => (/* binding */ getValueFromTextNode)\n/* harmony export */ });\nconst getValueFromTextNode = (obj) => {\n    const textNodeName = \"#text\";\n    for (const key in obj) {\n        if (obj.hasOwnProperty(key) && obj[key][textNodeName] !== undefined) {\n            obj[key] = obj[key][textNodeName];\n        }\n        else if (typeof obj[key] === \"object\" && obj[key] !== null) {\n            obj[key] = getValueFromTextNode(obj[key]);\n        }\n    }\n    return obj;\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/smithy-client/dist-es/get-value-from-text-node.js?");

/***/ }),

/***/ "./node_modules/@smithy/smithy-client/dist-es/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@smithy/smithy-client/dist-es/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Client: () => (/* reexport safe */ _client__WEBPACK_IMPORTED_MODULE_1__.Client),\n/* harmony export */   Command: () => (/* reexport safe */ _command__WEBPACK_IMPORTED_MODULE_3__.Command),\n/* harmony export */   LazyJsonString: () => (/* reexport safe */ _lazy_json__WEBPACK_IMPORTED_MODULE_15__.LazyJsonString),\n/* harmony export */   NoOpLogger: () => (/* reexport safe */ _NoOpLogger__WEBPACK_IMPORTED_MODULE_0__.NoOpLogger),\n/* harmony export */   SENSITIVE_STRING: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_4__.SENSITIVE_STRING),\n/* harmony export */   ServiceException: () => (/* reexport safe */ _exceptions__WEBPACK_IMPORTED_MODULE_11__.ServiceException),\n/* harmony export */   StringWrapper: () => (/* reexport safe */ _lazy_json__WEBPACK_IMPORTED_MODULE_15__.StringWrapper),\n/* harmony export */   _json: () => (/* reexport safe */ _serde_json__WEBPACK_IMPORTED_MODULE_20__._json),\n/* harmony export */   collectBody: () => (/* reexport safe */ _collect_stream_body__WEBPACK_IMPORTED_MODULE_2__.collectBody),\n/* harmony export */   convertMap: () => (/* reexport safe */ _object_mapping__WEBPACK_IMPORTED_MODULE_16__.convertMap),\n/* harmony export */   createAggregatedClient: () => (/* reexport safe */ _create_aggregated_client__WEBPACK_IMPORTED_MODULE_5__.createAggregatedClient),\n/* harmony export */   dateToUtcString: () => (/* reexport safe */ _date_utils__WEBPACK_IMPORTED_MODULE_6__.dateToUtcString),\n/* harmony export */   decorateServiceException: () => (/* reexport safe */ _exceptions__WEBPACK_IMPORTED_MODULE_11__.decorateServiceException),\n/* harmony export */   emitWarningIfUnsupportedVersion: () => (/* reexport safe */ _emitWarningIfUnsupportedVersion__WEBPACK_IMPORTED_MODULE_9__.emitWarningIfUnsupportedVersion),\n/* harmony export */   expectBoolean: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.expectBoolean),\n/* harmony export */   expectByte: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.expectByte),\n/* harmony export */   expectFloat32: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.expectFloat32),\n/* harmony export */   expectInt: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.expectInt),\n/* harmony export */   expectInt32: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.expectInt32),\n/* harmony export */   expectLong: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.expectLong),\n/* harmony export */   expectNonNull: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.expectNonNull),\n/* harmony export */   expectNumber: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.expectNumber),\n/* harmony export */   expectObject: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.expectObject),\n/* harmony export */   expectShort: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.expectShort),\n/* harmony export */   expectString: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.expectString),\n/* harmony export */   expectUnion: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.expectUnion),\n/* harmony export */   extendedEncodeURIComponent: () => (/* reexport safe */ _extended_encode_uri_component__WEBPACK_IMPORTED_MODULE_12__.extendedEncodeURIComponent),\n/* harmony export */   getArrayIfSingleItem: () => (/* reexport safe */ _get_array_if_single_item__WEBPACK_IMPORTED_MODULE_13__.getArrayIfSingleItem),\n/* harmony export */   getDefaultClientConfiguration: () => (/* reexport safe */ _extensions__WEBPACK_IMPORTED_MODULE_10__.getDefaultClientConfiguration),\n/* harmony export */   getDefaultExtensionConfiguration: () => (/* reexport safe */ _extensions__WEBPACK_IMPORTED_MODULE_10__.getDefaultExtensionConfiguration),\n/* harmony export */   getValueFromTextNode: () => (/* reexport safe */ _get_value_from_text_node__WEBPACK_IMPORTED_MODULE_14__.getValueFromTextNode),\n/* harmony export */   handleFloat: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.handleFloat),\n/* harmony export */   limitedParseDouble: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.limitedParseDouble),\n/* harmony export */   limitedParseFloat: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.limitedParseFloat),\n/* harmony export */   limitedParseFloat32: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.limitedParseFloat32),\n/* harmony export */   loadConfigsForDefaultMode: () => (/* reexport safe */ _defaults_mode__WEBPACK_IMPORTED_MODULE_8__.loadConfigsForDefaultMode),\n/* harmony export */   logger: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.logger),\n/* harmony export */   map: () => (/* reexport safe */ _object_mapping__WEBPACK_IMPORTED_MODULE_16__.map),\n/* harmony export */   parseBoolean: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.parseBoolean),\n/* harmony export */   parseEpochTimestamp: () => (/* reexport safe */ _date_utils__WEBPACK_IMPORTED_MODULE_6__.parseEpochTimestamp),\n/* harmony export */   parseRfc3339DateTime: () => (/* reexport safe */ _date_utils__WEBPACK_IMPORTED_MODULE_6__.parseRfc3339DateTime),\n/* harmony export */   parseRfc3339DateTimeWithOffset: () => (/* reexport safe */ _date_utils__WEBPACK_IMPORTED_MODULE_6__.parseRfc3339DateTimeWithOffset),\n/* harmony export */   parseRfc7231DateTime: () => (/* reexport safe */ _date_utils__WEBPACK_IMPORTED_MODULE_6__.parseRfc7231DateTime),\n/* harmony export */   resolveDefaultRuntimeConfig: () => (/* reexport safe */ _extensions__WEBPACK_IMPORTED_MODULE_10__.resolveDefaultRuntimeConfig),\n/* harmony export */   resolvedPath: () => (/* reexport safe */ _resolve_path__WEBPACK_IMPORTED_MODULE_18__.resolvedPath),\n/* harmony export */   serializeFloat: () => (/* reexport safe */ _ser_utils__WEBPACK_IMPORTED_MODULE_19__.serializeFloat),\n/* harmony export */   splitEvery: () => (/* reexport safe */ _split_every__WEBPACK_IMPORTED_MODULE_21__.splitEvery),\n/* harmony export */   strictParseByte: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.strictParseByte),\n/* harmony export */   strictParseDouble: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.strictParseDouble),\n/* harmony export */   strictParseFloat: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.strictParseFloat),\n/* harmony export */   strictParseFloat32: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.strictParseFloat32),\n/* harmony export */   strictParseInt: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.strictParseInt),\n/* harmony export */   strictParseInt32: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.strictParseInt32),\n/* harmony export */   strictParseLong: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.strictParseLong),\n/* harmony export */   strictParseShort: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.strictParseShort),\n/* harmony export */   take: () => (/* reexport safe */ _object_mapping__WEBPACK_IMPORTED_MODULE_16__.take),\n/* harmony export */   throwDefaultError: () => (/* reexport safe */ _default_error_handler__WEBPACK_IMPORTED_MODULE_7__.throwDefaultError),\n/* harmony export */   withBaseException: () => (/* reexport safe */ _default_error_handler__WEBPACK_IMPORTED_MODULE_7__.withBaseException)\n/* harmony export */ });\n/* harmony import */ var _NoOpLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NoOpLogger */ \"./node_modules/@smithy/smithy-client/dist-es/NoOpLogger.js\");\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client */ \"./node_modules/@smithy/smithy-client/dist-es/client.js\");\n/* harmony import */ var _collect_stream_body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collect-stream-body */ \"./node_modules/@smithy/smithy-client/dist-es/collect-stream-body.js\");\n/* harmony import */ var _command__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./command */ \"./node_modules/@smithy/smithy-client/dist-es/command.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ \"./node_modules/@smithy/smithy-client/dist-es/constants.js\");\n/* harmony import */ var _create_aggregated_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-aggregated-client */ \"./node_modules/@smithy/smithy-client/dist-es/create-aggregated-client.js\");\n/* harmony import */ var _date_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./date-utils */ \"./node_modules/@smithy/smithy-client/dist-es/date-utils.js\");\n/* harmony import */ var _default_error_handler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./default-error-handler */ \"./node_modules/@smithy/smithy-client/dist-es/default-error-handler.js\");\n/* harmony import */ var _defaults_mode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./defaults-mode */ \"./node_modules/@smithy/smithy-client/dist-es/defaults-mode.js\");\n/* harmony import */ var _emitWarningIfUnsupportedVersion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./emitWarningIfUnsupportedVersion */ \"./node_modules/@smithy/smithy-client/dist-es/emitWarningIfUnsupportedVersion.js\");\n/* harmony import */ var _extensions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./extensions */ \"./node_modules/@smithy/smithy-client/dist-es/extensions/index.js\");\n/* harmony import */ var _exceptions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./exceptions */ \"./node_modules/@smithy/smithy-client/dist-es/exceptions.js\");\n/* harmony import */ var _extended_encode_uri_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./extended-encode-uri-component */ \"./node_modules/@smithy/smithy-client/dist-es/extended-encode-uri-component.js\");\n/* harmony import */ var _get_array_if_single_item__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./get-array-if-single-item */ \"./node_modules/@smithy/smithy-client/dist-es/get-array-if-single-item.js\");\n/* harmony import */ var _get_value_from_text_node__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./get-value-from-text-node */ \"./node_modules/@smithy/smithy-client/dist-es/get-value-from-text-node.js\");\n/* harmony import */ var _lazy_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lazy-json */ \"./node_modules/@smithy/smithy-client/dist-es/lazy-json.js\");\n/* harmony import */ var _object_mapping__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./object-mapping */ \"./node_modules/@smithy/smithy-client/dist-es/object-mapping.js\");\n/* harmony import */ var _parse_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./parse-utils */ \"./node_modules/@smithy/smithy-client/dist-es/parse-utils.js\");\n/* harmony import */ var _resolve_path__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./resolve-path */ \"./node_modules/@smithy/smithy-client/dist-es/resolve-path.js\");\n/* harmony import */ var _ser_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ser-utils */ \"./node_modules/@smithy/smithy-client/dist-es/ser-utils.js\");\n/* harmony import */ var _serde_json__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./serde-json */ \"./node_modules/@smithy/smithy-client/dist-es/serde-json.js\");\n/* harmony import */ var _split_every__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./split-every */ \"./node_modules/@smithy/smithy-client/dist-es/split-every.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/smithy-client/dist-es/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/smithy-client/dist-es/lazy-json.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@smithy/smithy-client/dist-es/lazy-json.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LazyJsonString: () => (/* binding */ LazyJsonString),\n/* harmony export */   StringWrapper: () => (/* binding */ StringWrapper)\n/* harmony export */ });\nconst StringWrapper = function () {\n    const Class = Object.getPrototypeOf(this).constructor;\n    const Constructor = Function.bind.apply(String, [null, ...arguments]);\n    const instance = new Constructor();\n    Object.setPrototypeOf(instance, Class.prototype);\n    return instance;\n};\nStringWrapper.prototype = Object.create(String.prototype, {\n    constructor: {\n        value: StringWrapper,\n        enumerable: false,\n        writable: true,\n        configurable: true,\n    },\n});\nObject.setPrototypeOf(StringWrapper, String);\nclass LazyJsonString extends StringWrapper {\n    deserializeJSON() {\n        return JSON.parse(super.toString());\n    }\n    toJSON() {\n        return super.toString();\n    }\n    static fromObject(object) {\n        if (object instanceof LazyJsonString) {\n            return object;\n        }\n        else if (object instanceof String || typeof object === \"string\") {\n            return new LazyJsonString(object);\n        }\n        return new LazyJsonString(JSON.stringify(object));\n    }\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/smithy-client/dist-es/lazy-json.js?");

/***/ }),

/***/ "./node_modules/@smithy/smithy-client/dist-es/object-mapping.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@smithy/smithy-client/dist-es/object-mapping.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   convertMap: () => (/* binding */ convertMap),\n/* harmony export */   map: () => (/* binding */ map),\n/* harmony export */   take: () => (/* binding */ take)\n/* harmony export */ });\nfunction map(arg0, arg1, arg2) {\n    let target;\n    let filter;\n    let instructions;\n    if (typeof arg1 === \"undefined\" && typeof arg2 === \"undefined\") {\n        target = {};\n        instructions = arg0;\n    }\n    else {\n        target = arg0;\n        if (typeof arg1 === \"function\") {\n            filter = arg1;\n            instructions = arg2;\n            return mapWithFilter(target, filter, instructions);\n        }\n        else {\n            instructions = arg1;\n        }\n    }\n    for (const key of Object.keys(instructions)) {\n        if (!Array.isArray(instructions[key])) {\n            target[key] = instructions[key];\n            continue;\n        }\n        applyInstruction(target, null, instructions, key);\n    }\n    return target;\n}\nconst convertMap = (target) => {\n    const output = {};\n    for (const [k, v] of Object.entries(target || {})) {\n        output[k] = [, v];\n    }\n    return output;\n};\nconst take = (source, instructions) => {\n    const out = {};\n    for (const key in instructions) {\n        applyInstruction(out, source, instructions, key);\n    }\n    return out;\n};\nconst mapWithFilter = (target, filter, instructions) => {\n    return map(target, Object.entries(instructions).reduce((_instructions, [key, value]) => {\n        if (Array.isArray(value)) {\n            _instructions[key] = value;\n        }\n        else {\n            if (typeof value === \"function\") {\n                _instructions[key] = [filter, value()];\n            }\n            else {\n                _instructions[key] = [filter, value];\n            }\n        }\n        return _instructions;\n    }, {}));\n};\nconst applyInstruction = (target, source, instructions, targetKey) => {\n    if (source !== null) {\n        let instruction = instructions[targetKey];\n        if (typeof instruction === \"function\") {\n            instruction = [, instruction];\n        }\n        const [filter = nonNullish, valueFn = pass, sourceKey = targetKey] = instruction;\n        if ((typeof filter === \"function\" && filter(source[sourceKey])) || (typeof filter !== \"function\" && !!filter)) {\n            target[targetKey] = valueFn(source[sourceKey]);\n        }\n        return;\n    }\n    let [filter, value] = instructions[targetKey];\n    if (typeof value === \"function\") {\n        let _value;\n        const defaultFilterPassed = filter === undefined && (_value = value()) != null;\n        const customFilterPassed = (typeof filter === \"function\" && !!filter(void 0)) || (typeof filter !== \"function\" && !!filter);\n        if (defaultFilterPassed) {\n            target[targetKey] = _value;\n        }\n        else if (customFilterPassed) {\n            target[targetKey] = value();\n        }\n    }\n    else {\n        const defaultFilterPassed = filter === undefined && value != null;\n        const customFilterPassed = (typeof filter === \"function\" && !!filter(value)) || (typeof filter !== \"function\" && !!filter);\n        if (defaultFilterPassed || customFilterPassed) {\n            target[targetKey] = value;\n        }\n    }\n};\nconst nonNullish = (_) => _ != null;\nconst pass = (_) => _;\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/smithy-client/dist-es/object-mapping.js?");

/***/ }),

/***/ "./node_modules/@smithy/smithy-client/dist-es/parse-utils.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@smithy/smithy-client/dist-es/parse-utils.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   expectBoolean: () => (/* binding */ expectBoolean),\n/* harmony export */   expectByte: () => (/* binding */ expectByte),\n/* harmony export */   expectFloat32: () => (/* binding */ expectFloat32),\n/* harmony export */   expectInt: () => (/* binding */ expectInt),\n/* harmony export */   expectInt32: () => (/* binding */ expectInt32),\n/* harmony export */   expectLong: () => (/* binding */ expectLong),\n/* harmony export */   expectNonNull: () => (/* binding */ expectNonNull),\n/* harmony export */   expectNumber: () => (/* binding */ expectNumber),\n/* harmony export */   expectObject: () => (/* binding */ expectObject),\n/* harmony export */   expectShort: () => (/* binding */ expectShort),\n/* harmony export */   expectString: () => (/* binding */ expectString),\n/* harmony export */   expectUnion: () => (/* binding */ expectUnion),\n/* harmony export */   handleFloat: () => (/* binding */ handleFloat),\n/* harmony export */   limitedParseDouble: () => (/* binding */ limitedParseDouble),\n/* harmony export */   limitedParseFloat: () => (/* binding */ limitedParseFloat),\n/* harmony export */   limitedParseFloat32: () => (/* binding */ limitedParseFloat32),\n/* harmony export */   logger: () => (/* binding */ logger),\n/* harmony export */   parseBoolean: () => (/* binding */ parseBoolean),\n/* harmony export */   strictParseByte: () => (/* binding */ strictParseByte),\n/* harmony export */   strictParseDouble: () => (/* binding */ strictParseDouble),\n/* harmony export */   strictParseFloat: () => (/* binding */ strictParseFloat),\n/* harmony export */   strictParseFloat32: () => (/* binding */ strictParseFloat32),\n/* harmony export */   strictParseInt: () => (/* binding */ strictParseInt),\n/* harmony export */   strictParseInt32: () => (/* binding */ strictParseInt32),\n/* harmony export */   strictParseLong: () => (/* binding */ strictParseLong),\n/* harmony export */   strictParseShort: () => (/* binding */ strictParseShort)\n/* harmony export */ });\nconst parseBoolean = (value) => {\n    switch (value) {\n        case \"true\":\n            return true;\n        case \"false\":\n            return false;\n        default:\n            throw new Error(`Unable to parse boolean value \"${value}\"`);\n    }\n};\nconst expectBoolean = (value) => {\n    if (value === null || value === undefined) {\n        return undefined;\n    }\n    if (typeof value === \"number\") {\n        if (value === 0 || value === 1) {\n            logger.warn(stackTraceWarning(`Expected boolean, got ${typeof value}: ${value}`));\n        }\n        if (value === 0) {\n            return false;\n        }\n        if (value === 1) {\n            return true;\n        }\n    }\n    if (typeof value === \"string\") {\n        const lower = value.toLowerCase();\n        if (lower === \"false\" || lower === \"true\") {\n            logger.warn(stackTraceWarning(`Expected boolean, got ${typeof value}: ${value}`));\n        }\n        if (lower === \"false\") {\n            return false;\n        }\n        if (lower === \"true\") {\n            return true;\n        }\n    }\n    if (typeof value === \"boolean\") {\n        return value;\n    }\n    throw new TypeError(`Expected boolean, got ${typeof value}: ${value}`);\n};\nconst expectNumber = (value) => {\n    if (value === null || value === undefined) {\n        return undefined;\n    }\n    if (typeof value === \"string\") {\n        const parsed = parseFloat(value);\n        if (!Number.isNaN(parsed)) {\n            if (String(parsed) !== String(value)) {\n                logger.warn(stackTraceWarning(`Expected number but observed string: ${value}`));\n            }\n            return parsed;\n        }\n    }\n    if (typeof value === \"number\") {\n        return value;\n    }\n    throw new TypeError(`Expected number, got ${typeof value}: ${value}`);\n};\nconst MAX_FLOAT = Math.ceil(2 ** 127 * (2 - 2 ** -23));\nconst expectFloat32 = (value) => {\n    const expected = expectNumber(value);\n    if (expected !== undefined && !Number.isNaN(expected) && expected !== Infinity && expected !== -Infinity) {\n        if (Math.abs(expected) > MAX_FLOAT) {\n            throw new TypeError(`Expected 32-bit float, got ${value}`);\n        }\n    }\n    return expected;\n};\nconst expectLong = (value) => {\n    if (value === null || value === undefined) {\n        return undefined;\n    }\n    if (Number.isInteger(value) && !Number.isNaN(value)) {\n        return value;\n    }\n    throw new TypeError(`Expected integer, got ${typeof value}: ${value}`);\n};\nconst expectInt = expectLong;\nconst expectInt32 = (value) => expectSizedInt(value, 32);\nconst expectShort = (value) => expectSizedInt(value, 16);\nconst expectByte = (value) => expectSizedInt(value, 8);\nconst expectSizedInt = (value, size) => {\n    const expected = expectLong(value);\n    if (expected !== undefined && castInt(expected, size) !== expected) {\n        throw new TypeError(`Expected ${size}-bit integer, got ${value}`);\n    }\n    return expected;\n};\nconst castInt = (value, size) => {\n    switch (size) {\n        case 32:\n            return Int32Array.of(value)[0];\n        case 16:\n            return Int16Array.of(value)[0];\n        case 8:\n            return Int8Array.of(value)[0];\n    }\n};\nconst expectNonNull = (value, location) => {\n    if (value === null || value === undefined) {\n        if (location) {\n            throw new TypeError(`Expected a non-null value for ${location}`);\n        }\n        throw new TypeError(\"Expected a non-null value\");\n    }\n    return value;\n};\nconst expectObject = (value) => {\n    if (value === null || value === undefined) {\n        return undefined;\n    }\n    if (typeof value === \"object\" && !Array.isArray(value)) {\n        return value;\n    }\n    const receivedType = Array.isArray(value) ? \"array\" : typeof value;\n    throw new TypeError(`Expected object, got ${receivedType}: ${value}`);\n};\nconst expectString = (value) => {\n    if (value === null || value === undefined) {\n        return undefined;\n    }\n    if (typeof value === \"string\") {\n        return value;\n    }\n    if ([\"boolean\", \"number\", \"bigint\"].includes(typeof value)) {\n        logger.warn(stackTraceWarning(`Expected string, got ${typeof value}: ${value}`));\n        return String(value);\n    }\n    throw new TypeError(`Expected string, got ${typeof value}: ${value}`);\n};\nconst expectUnion = (value) => {\n    if (value === null || value === undefined) {\n        return undefined;\n    }\n    const asObject = expectObject(value);\n    const setKeys = Object.entries(asObject)\n        .filter(([, v]) => v != null)\n        .map(([k]) => k);\n    if (setKeys.length === 0) {\n        throw new TypeError(`Unions must have exactly one non-null member. None were found.`);\n    }\n    if (setKeys.length > 1) {\n        throw new TypeError(`Unions must have exactly one non-null member. Keys ${setKeys} were not null.`);\n    }\n    return asObject;\n};\nconst strictParseDouble = (value) => {\n    if (typeof value == \"string\") {\n        return expectNumber(parseNumber(value));\n    }\n    return expectNumber(value);\n};\nconst strictParseFloat = strictParseDouble;\nconst strictParseFloat32 = (value) => {\n    if (typeof value == \"string\") {\n        return expectFloat32(parseNumber(value));\n    }\n    return expectFloat32(value);\n};\nconst NUMBER_REGEX = /(-?(?:0|[1-9]\\d*)(?:\\.\\d+)?(?:[eE][+-]?\\d+)?)|(-?Infinity)|(NaN)/g;\nconst parseNumber = (value) => {\n    const matches = value.match(NUMBER_REGEX);\n    if (matches === null || matches[0].length !== value.length) {\n        throw new TypeError(`Expected real number, got implicit NaN`);\n    }\n    return parseFloat(value);\n};\nconst limitedParseDouble = (value) => {\n    if (typeof value == \"string\") {\n        return parseFloatString(value);\n    }\n    return expectNumber(value);\n};\nconst handleFloat = limitedParseDouble;\nconst limitedParseFloat = limitedParseDouble;\nconst limitedParseFloat32 = (value) => {\n    if (typeof value == \"string\") {\n        return parseFloatString(value);\n    }\n    return expectFloat32(value);\n};\nconst parseFloatString = (value) => {\n    switch (value) {\n        case \"NaN\":\n            return NaN;\n        case \"Infinity\":\n            return Infinity;\n        case \"-Infinity\":\n            return -Infinity;\n        default:\n            throw new Error(`Unable to parse float value: ${value}`);\n    }\n};\nconst strictParseLong = (value) => {\n    if (typeof value === \"string\") {\n        return expectLong(parseNumber(value));\n    }\n    return expectLong(value);\n};\nconst strictParseInt = strictParseLong;\nconst strictParseInt32 = (value) => {\n    if (typeof value === \"string\") {\n        return expectInt32(parseNumber(value));\n    }\n    return expectInt32(value);\n};\nconst strictParseShort = (value) => {\n    if (typeof value === \"string\") {\n        return expectShort(parseNumber(value));\n    }\n    return expectShort(value);\n};\nconst strictParseByte = (value) => {\n    if (typeof value === \"string\") {\n        return expectByte(parseNumber(value));\n    }\n    return expectByte(value);\n};\nconst stackTraceWarning = (message) => {\n    return String(new TypeError(message).stack || message)\n        .split(\"\\n\")\n        .slice(0, 5)\n        .filter((s) => !s.includes(\"stackTraceWarning\"))\n        .join(\"\\n\");\n};\nconst logger = {\n    warn: console.warn,\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/smithy-client/dist-es/parse-utils.js?");

/***/ }),

/***/ "./node_modules/@smithy/smithy-client/dist-es/resolve-path.js":
/*!********************************************************************!*\
  !*** ./node_modules/@smithy/smithy-client/dist-es/resolve-path.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   resolvedPath: () => (/* binding */ resolvedPath)\n/* harmony export */ });\n/* harmony import */ var _extended_encode_uri_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extended-encode-uri-component */ \"./node_modules/@smithy/smithy-client/dist-es/extended-encode-uri-component.js\");\n\nconst resolvedPath = (resolvedPath, input, memberName, labelValueProvider, uriLabel, isGreedyLabel) => {\n    if (input != null && input[memberName] !== undefined) {\n        const labelValue = labelValueProvider();\n        if (labelValue.length <= 0) {\n            throw new Error(\"Empty value provided for input HTTP label: \" + memberName + \".\");\n        }\n        resolvedPath = resolvedPath.replace(uriLabel, isGreedyLabel\n            ? labelValue\n                .split(\"/\")\n                .map((segment) => (0,_extended_encode_uri_component__WEBPACK_IMPORTED_MODULE_0__.extendedEncodeURIComponent)(segment))\n                .join(\"/\")\n            : (0,_extended_encode_uri_component__WEBPACK_IMPORTED_MODULE_0__.extendedEncodeURIComponent)(labelValue));\n    }\n    else {\n        throw new Error(\"No value provided for input HTTP label: \" + memberName + \".\");\n    }\n    return resolvedPath;\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/smithy-client/dist-es/resolve-path.js?");

/***/ }),

/***/ "./node_modules/@smithy/smithy-client/dist-es/ser-utils.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@smithy/smithy-client/dist-es/ser-utils.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   serializeFloat: () => (/* binding */ serializeFloat)\n/* harmony export */ });\nconst serializeFloat = (value) => {\n    if (value !== value) {\n        return \"NaN\";\n    }\n    switch (value) {\n        case Infinity:\n            return \"Infinity\";\n        case -Infinity:\n            return \"-Infinity\";\n        default:\n            return value;\n    }\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/smithy-client/dist-es/ser-utils.js?");

/***/ }),

/***/ "./node_modules/@smithy/smithy-client/dist-es/serde-json.js":
/*!******************************************************************!*\
  !*** ./node_modules/@smithy/smithy-client/dist-es/serde-json.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   _json: () => (/* binding */ _json)\n/* harmony export */ });\nconst _json = (obj) => {\n    if (obj == null) {\n        return {};\n    }\n    if (Array.isArray(obj)) {\n        return obj.filter((_) => _ != null).map(_json);\n    }\n    if (typeof obj === \"object\") {\n        const target = {};\n        for (const key of Object.keys(obj)) {\n            if (obj[key] == null) {\n                continue;\n            }\n            target[key] = _json(obj[key]);\n        }\n        return target;\n    }\n    return obj;\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/smithy-client/dist-es/serde-json.js?");

/***/ }),

/***/ "./node_modules/@smithy/smithy-client/dist-es/split-every.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@smithy/smithy-client/dist-es/split-every.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   splitEvery: () => (/* binding */ splitEvery)\n/* harmony export */ });\nfunction splitEvery(value, delimiter, numDelimiters) {\n    if (numDelimiters <= 0 || !Number.isInteger(numDelimiters)) {\n        throw new Error(\"Invalid number of delimiters (\" + numDelimiters + \") for splitEvery.\");\n    }\n    const segments = value.split(delimiter);\n    if (numDelimiters === 1) {\n        return segments;\n    }\n    const compoundSegments = [];\n    let currentSegment = \"\";\n    for (let i = 0; i < segments.length; i++) {\n        if (currentSegment === \"\") {\n            currentSegment = segments[i];\n        }\n        else {\n            currentSegment += delimiter + segments[i];\n        }\n        if ((i + 1) % numDelimiters === 0) {\n            compoundSegments.push(currentSegment);\n            currentSegment = \"\";\n        }\n    }\n    if (currentSegment !== \"\") {\n        compoundSegments.push(currentSegment);\n    }\n    return compoundSegments;\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/smithy-client/dist-es/split-every.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/abort.js":
/*!*****************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/abort.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/abort.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/auth/HttpApiKeyAuth.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/auth/HttpApiKeyAuth.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HttpApiKeyAuthLocation: () => (/* binding */ HttpApiKeyAuthLocation)\n/* harmony export */ });\nvar HttpApiKeyAuthLocation;\n(function (HttpApiKeyAuthLocation) {\n    HttpApiKeyAuthLocation[\"HEADER\"] = \"header\";\n    HttpApiKeyAuthLocation[\"QUERY\"] = \"query\";\n})(HttpApiKeyAuthLocation || (HttpApiKeyAuthLocation = {}));\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/auth/HttpApiKeyAuth.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/auth/HttpAuthScheme.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/auth/HttpAuthScheme.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/auth/HttpAuthScheme.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/auth/HttpAuthSchemeProvider.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/auth/HttpAuthSchemeProvider.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/auth/HttpAuthSchemeProvider.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/auth/HttpSigner.js":
/*!***************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/auth/HttpSigner.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/auth/HttpSigner.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/auth/IdentityProviderConfig.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/auth/IdentityProviderConfig.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/auth/IdentityProviderConfig.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/auth/auth.js":
/*!*********************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/auth/auth.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HttpAuthLocation: () => (/* binding */ HttpAuthLocation)\n/* harmony export */ });\nvar HttpAuthLocation;\n(function (HttpAuthLocation) {\n    HttpAuthLocation[\"HEADER\"] = \"header\";\n    HttpAuthLocation[\"QUERY\"] = \"query\";\n})(HttpAuthLocation || (HttpAuthLocation = {}));\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/auth/auth.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/auth/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/auth/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HttpApiKeyAuthLocation: () => (/* reexport safe */ _HttpApiKeyAuth__WEBPACK_IMPORTED_MODULE_1__.HttpApiKeyAuthLocation),\n/* harmony export */   HttpAuthLocation: () => (/* reexport safe */ _auth__WEBPACK_IMPORTED_MODULE_0__.HttpAuthLocation)\n/* harmony export */ });\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth */ \"./node_modules/@smithy/types/dist-es/auth/auth.js\");\n/* harmony import */ var _HttpApiKeyAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HttpApiKeyAuth */ \"./node_modules/@smithy/types/dist-es/auth/HttpApiKeyAuth.js\");\n/* harmony import */ var _HttpAuthScheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HttpAuthScheme */ \"./node_modules/@smithy/types/dist-es/auth/HttpAuthScheme.js\");\n/* harmony import */ var _HttpAuthSchemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HttpAuthSchemeProvider */ \"./node_modules/@smithy/types/dist-es/auth/HttpAuthSchemeProvider.js\");\n/* harmony import */ var _HttpSigner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HttpSigner */ \"./node_modules/@smithy/types/dist-es/auth/HttpSigner.js\");\n/* harmony import */ var _IdentityProviderConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./IdentityProviderConfig */ \"./node_modules/@smithy/types/dist-es/auth/IdentityProviderConfig.js\");\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/auth/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/blob/blob-payload-input-types.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/blob/blob-payload-input-types.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/blob/blob-payload-input-types.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/checksum.js":
/*!********************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/checksum.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/checksum.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/client.js":
/*!******************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/client.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/client.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/command.js":
/*!*******************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/command.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/command.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/connection/config.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/connection/config.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/connection/config.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/connection/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/connection/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./node_modules/@smithy/types/dist-es/connection/config.js\");\n/* harmony import */ var _manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manager */ \"./node_modules/@smithy/types/dist-es/connection/manager.js\");\n/* harmony import */ var _pool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pool */ \"./node_modules/@smithy/types/dist-es/connection/pool.js\");\n\n\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/connection/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/connection/manager.js":
/*!******************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/connection/manager.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/connection/manager.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/connection/pool.js":
/*!***************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/connection/pool.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/connection/pool.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/crypto.js":
/*!******************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/crypto.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/crypto.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/encode.js":
/*!******************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/encode.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/encode.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/endpoint.js":
/*!********************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/endpoint.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EndpointURLScheme: () => (/* binding */ EndpointURLScheme)\n/* harmony export */ });\nvar EndpointURLScheme;\n(function (EndpointURLScheme) {\n    EndpointURLScheme[\"HTTP\"] = \"http\";\n    EndpointURLScheme[\"HTTPS\"] = \"https\";\n})(EndpointURLScheme || (EndpointURLScheme = {}));\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/endpoint.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/endpoints/EndpointRuleObject.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/endpoints/EndpointRuleObject.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/endpoints/EndpointRuleObject.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/endpoints/ErrorRuleObject.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/endpoints/ErrorRuleObject.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/endpoints/ErrorRuleObject.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/endpoints/RuleSetObject.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/endpoints/RuleSetObject.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/endpoints/RuleSetObject.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/endpoints/TreeRuleObject.js":
/*!************************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/endpoints/TreeRuleObject.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/endpoints/TreeRuleObject.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/endpoints/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/endpoints/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _EndpointRuleObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EndpointRuleObject */ \"./node_modules/@smithy/types/dist-es/endpoints/EndpointRuleObject.js\");\n/* harmony import */ var _ErrorRuleObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorRuleObject */ \"./node_modules/@smithy/types/dist-es/endpoints/ErrorRuleObject.js\");\n/* harmony import */ var _RuleSetObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RuleSetObject */ \"./node_modules/@smithy/types/dist-es/endpoints/RuleSetObject.js\");\n/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared */ \"./node_modules/@smithy/types/dist-es/endpoints/shared.js\");\n/* harmony import */ var _TreeRuleObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TreeRuleObject */ \"./node_modules/@smithy/types/dist-es/endpoints/TreeRuleObject.js\");\n\n\n\n\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/endpoints/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/endpoints/shared.js":
/*!****************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/endpoints/shared.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/endpoints/shared.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/eventStream.js":
/*!***********************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/eventStream.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/eventStream.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/extensions/checksum.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/extensions/checksum.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AlgorithmId: () => (/* binding */ AlgorithmId),\n/* harmony export */   getChecksumConfiguration: () => (/* binding */ getChecksumConfiguration),\n/* harmony export */   resolveChecksumRuntimeConfig: () => (/* binding */ resolveChecksumRuntimeConfig)\n/* harmony export */ });\nvar AlgorithmId;\n(function (AlgorithmId) {\n    AlgorithmId[\"MD5\"] = \"md5\";\n    AlgorithmId[\"CRC32\"] = \"crc32\";\n    AlgorithmId[\"CRC32C\"] = \"crc32c\";\n    AlgorithmId[\"SHA1\"] = \"sha1\";\n    AlgorithmId[\"SHA256\"] = \"sha256\";\n})(AlgorithmId || (AlgorithmId = {}));\nconst getChecksumConfiguration = (runtimeConfig) => {\n    const checksumAlgorithms = [];\n    if (runtimeConfig.sha256 !== undefined) {\n        checksumAlgorithms.push({\n            algorithmId: () => AlgorithmId.SHA256,\n            checksumConstructor: () => runtimeConfig.sha256,\n        });\n    }\n    if (runtimeConfig.md5 != undefined) {\n        checksumAlgorithms.push({\n            algorithmId: () => AlgorithmId.MD5,\n            checksumConstructor: () => runtimeConfig.md5,\n        });\n    }\n    return {\n        _checksumAlgorithms: checksumAlgorithms,\n        addChecksumAlgorithm(algo) {\n            this._checksumAlgorithms.push(algo);\n        },\n        checksumAlgorithms() {\n            return this._checksumAlgorithms;\n        },\n    };\n};\nconst resolveChecksumRuntimeConfig = (clientConfig) => {\n    const runtimeConfig = {};\n    clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {\n        runtimeConfig[checksumAlgorithm.algorithmId()] = checksumAlgorithm.checksumConstructor();\n    });\n    return runtimeConfig;\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/extensions/checksum.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/extensions/defaultClientConfiguration.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/extensions/defaultClientConfiguration.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDefaultClientConfiguration: () => (/* binding */ getDefaultClientConfiguration),\n/* harmony export */   resolveDefaultRuntimeConfig: () => (/* binding */ resolveDefaultRuntimeConfig)\n/* harmony export */ });\n/* harmony import */ var _checksum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checksum */ \"./node_modules/@smithy/types/dist-es/extensions/checksum.js\");\n\nconst getDefaultClientConfiguration = (runtimeConfig) => {\n    return {\n        ...(0,_checksum__WEBPACK_IMPORTED_MODULE_0__.getChecksumConfiguration)(runtimeConfig),\n    };\n};\nconst resolveDefaultRuntimeConfig = (config) => {\n    return {\n        ...(0,_checksum__WEBPACK_IMPORTED_MODULE_0__.resolveChecksumRuntimeConfig)(config),\n    };\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/extensions/defaultClientConfiguration.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/extensions/defaultExtensionConfiguration.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/extensions/defaultExtensionConfiguration.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/extensions/defaultExtensionConfiguration.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/extensions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/extensions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AlgorithmId: () => (/* reexport safe */ _checksum__WEBPACK_IMPORTED_MODULE_2__.AlgorithmId),\n/* harmony export */   getDefaultClientConfiguration: () => (/* reexport safe */ _defaultClientConfiguration__WEBPACK_IMPORTED_MODULE_0__.getDefaultClientConfiguration),\n/* harmony export */   resolveDefaultRuntimeConfig: () => (/* reexport safe */ _defaultClientConfiguration__WEBPACK_IMPORTED_MODULE_0__.resolveDefaultRuntimeConfig)\n/* harmony export */ });\n/* harmony import */ var _defaultClientConfiguration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultClientConfiguration */ \"./node_modules/@smithy/types/dist-es/extensions/defaultClientConfiguration.js\");\n/* harmony import */ var _defaultExtensionConfiguration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultExtensionConfiguration */ \"./node_modules/@smithy/types/dist-es/extensions/defaultExtensionConfiguration.js\");\n/* harmony import */ var _checksum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checksum */ \"./node_modules/@smithy/types/dist-es/extensions/checksum.js\");\n\n\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/extensions/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/http.js":
/*!****************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/http.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FieldPosition: () => (/* binding */ FieldPosition)\n/* harmony export */ });\nvar FieldPosition;\n(function (FieldPosition) {\n    FieldPosition[FieldPosition[\"HEADER\"] = 0] = \"HEADER\";\n    FieldPosition[FieldPosition[\"TRAILER\"] = 1] = \"TRAILER\";\n})(FieldPosition || (FieldPosition = {}));\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/http.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/http/httpHandlerInitialization.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/http/httpHandlerInitialization.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/http/httpHandlerInitialization.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/identity/apiKeyIdentity.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/identity/apiKeyIdentity.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/identity/apiKeyIdentity.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/identity/awsCredentialIdentity.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/identity/awsCredentialIdentity.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/identity/awsCredentialIdentity.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/identity/identity.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/identity/identity.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/identity/identity.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/identity/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/identity/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apiKeyIdentity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiKeyIdentity */ \"./node_modules/@smithy/types/dist-es/identity/apiKeyIdentity.js\");\n/* harmony import */ var _awsCredentialIdentity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./awsCredentialIdentity */ \"./node_modules/@smithy/types/dist-es/identity/awsCredentialIdentity.js\");\n/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./identity */ \"./node_modules/@smithy/types/dist-es/identity/identity.js\");\n/* harmony import */ var _tokenIdentity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tokenIdentity */ \"./node_modules/@smithy/types/dist-es/identity/tokenIdentity.js\");\n\n\n\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/identity/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/identity/tokenIdentity.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/identity/tokenIdentity.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/identity/tokenIdentity.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AlgorithmId: () => (/* reexport safe */ _extensions__WEBPACK_IMPORTED_MODULE_12__.AlgorithmId),\n/* harmony export */   EndpointURLScheme: () => (/* reexport safe */ _endpoint__WEBPACK_IMPORTED_MODULE_9__.EndpointURLScheme),\n/* harmony export */   FieldPosition: () => (/* reexport safe */ _http__WEBPACK_IMPORTED_MODULE_13__.FieldPosition),\n/* harmony export */   HttpApiKeyAuthLocation: () => (/* reexport safe */ _auth__WEBPACK_IMPORTED_MODULE_1__.HttpApiKeyAuthLocation),\n/* harmony export */   HttpAuthLocation: () => (/* reexport safe */ _auth__WEBPACK_IMPORTED_MODULE_1__.HttpAuthLocation),\n/* harmony export */   IniSectionType: () => (/* reexport safe */ _profile__WEBPACK_IMPORTED_MODULE_19__.IniSectionType),\n/* harmony export */   RequestHandlerProtocol: () => (/* reexport safe */ _transfer__WEBPACK_IMPORTED_MODULE_29__.RequestHandlerProtocol),\n/* harmony export */   SMITHY_CONTEXT_KEY: () => (/* reexport safe */ _middleware__WEBPACK_IMPORTED_MODULE_17__.SMITHY_CONTEXT_KEY),\n/* harmony export */   getDefaultClientConfiguration: () => (/* reexport safe */ _extensions__WEBPACK_IMPORTED_MODULE_12__.getDefaultClientConfiguration),\n/* harmony export */   resolveDefaultRuntimeConfig: () => (/* reexport safe */ _extensions__WEBPACK_IMPORTED_MODULE_12__.resolveDefaultRuntimeConfig)\n/* harmony export */ });\n/* harmony import */ var _abort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abort */ \"./node_modules/@smithy/types/dist-es/abort.js\");\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ \"./node_modules/@smithy/types/dist-es/auth/index.js\");\n/* harmony import */ var _blob_blob_payload_input_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blob/blob-payload-input-types */ \"./node_modules/@smithy/types/dist-es/blob/blob-payload-input-types.js\");\n/* harmony import */ var _checksum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checksum */ \"./node_modules/@smithy/types/dist-es/checksum.js\");\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client */ \"./node_modules/@smithy/types/dist-es/client.js\");\n/* harmony import */ var _command__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./command */ \"./node_modules/@smithy/types/dist-es/command.js\");\n/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./connection */ \"./node_modules/@smithy/types/dist-es/connection/index.js\");\n/* harmony import */ var _crypto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./crypto */ \"./node_modules/@smithy/types/dist-es/crypto.js\");\n/* harmony import */ var _encode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./encode */ \"./node_modules/@smithy/types/dist-es/encode.js\");\n/* harmony import */ var _endpoint__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./endpoint */ \"./node_modules/@smithy/types/dist-es/endpoint.js\");\n/* harmony import */ var _endpoints__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./endpoints */ \"./node_modules/@smithy/types/dist-es/endpoints/index.js\");\n/* harmony import */ var _eventStream__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./eventStream */ \"./node_modules/@smithy/types/dist-es/eventStream.js\");\n/* harmony import */ var _extensions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./extensions */ \"./node_modules/@smithy/types/dist-es/extensions/index.js\");\n/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./http */ \"./node_modules/@smithy/types/dist-es/http.js\");\n/* harmony import */ var _http_httpHandlerInitialization__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./http/httpHandlerInitialization */ \"./node_modules/@smithy/types/dist-es/http/httpHandlerInitialization.js\");\n/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./identity */ \"./node_modules/@smithy/types/dist-es/identity/index.js\");\n/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./logger */ \"./node_modules/@smithy/types/dist-es/logger.js\");\n/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./middleware */ \"./node_modules/@smithy/types/dist-es/middleware.js\");\n/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pagination */ \"./node_modules/@smithy/types/dist-es/pagination.js\");\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./profile */ \"./node_modules/@smithy/types/dist-es/profile.js\");\n/* harmony import */ var _response__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./response */ \"./node_modules/@smithy/types/dist-es/response.js\");\n/* harmony import */ var _retry__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./retry */ \"./node_modules/@smithy/types/dist-es/retry.js\");\n/* harmony import */ var _serde__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./serde */ \"./node_modules/@smithy/types/dist-es/serde.js\");\n/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shapes */ \"./node_modules/@smithy/types/dist-es/shapes.js\");\n/* harmony import */ var _signature__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./signature */ \"./node_modules/@smithy/types/dist-es/signature.js\");\n/* harmony import */ var _stream__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./stream */ \"./node_modules/@smithy/types/dist-es/stream.js\");\n/* harmony import */ var _streaming_payload_streaming_blob_common_types__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./streaming-payload/streaming-blob-common-types */ \"./node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-common-types.js\");\n/* harmony import */ var _streaming_payload_streaming_blob_payload_input_types__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./streaming-payload/streaming-blob-payload-input-types */ \"./node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-input-types.js\");\n/* harmony import */ var _streaming_payload_streaming_blob_payload_output_types__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./streaming-payload/streaming-blob-payload-output-types */ \"./node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-output-types.js\");\n/* harmony import */ var _transfer__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./transfer */ \"./node_modules/@smithy/types/dist-es/transfer.js\");\n/* harmony import */ var _transform_client_payload_blob_type_narrow__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./transform/client-payload-blob-type-narrow */ \"./node_modules/@smithy/types/dist-es/transform/client-payload-blob-type-narrow.js\");\n/* harmony import */ var _transform_no_undefined__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./transform/no-undefined */ \"./node_modules/@smithy/types/dist-es/transform/no-undefined.js\");\n/* harmony import */ var _transform_type_transform__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./transform/type-transform */ \"./node_modules/@smithy/types/dist-es/transform/type-transform.js\");\n/* harmony import */ var _uri__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./uri */ \"./node_modules/@smithy/types/dist-es/uri.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./util */ \"./node_modules/@smithy/types/dist-es/util.js\");\n/* harmony import */ var _waiter__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./waiter */ \"./node_modules/@smithy/types/dist-es/waiter.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/logger.js":
/*!******************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/logger.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/logger.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/middleware.js":
/*!**********************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/middleware.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SMITHY_CONTEXT_KEY: () => (/* binding */ SMITHY_CONTEXT_KEY)\n/* harmony export */ });\nconst SMITHY_CONTEXT_KEY = \"__smithy_context\";\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/middleware.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/pagination.js":
/*!**********************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/pagination.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/pagination.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/profile.js":
/*!*******************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/profile.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IniSectionType: () => (/* binding */ IniSectionType)\n/* harmony export */ });\nvar IniSectionType;\n(function (IniSectionType) {\n    IniSectionType[\"PROFILE\"] = \"profile\";\n    IniSectionType[\"SSO_SESSION\"] = \"sso-session\";\n    IniSectionType[\"SERVICES\"] = \"services\";\n})(IniSectionType || (IniSectionType = {}));\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/profile.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/response.js":
/*!********************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/response.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/response.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/retry.js":
/*!*****************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/retry.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/retry.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/serde.js":
/*!*****************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/serde.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/serde.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/shapes.js":
/*!******************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/shapes.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/shapes.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/signature.js":
/*!*********************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/signature.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/signature.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/stream.js":
/*!******************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/stream.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/stream.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-common-types.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-common-types.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-common-types.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-input-types.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-input-types.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-input-types.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-output-types.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-output-types.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-output-types.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/transfer.js":
/*!********************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/transfer.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RequestHandlerProtocol: () => (/* binding */ RequestHandlerProtocol)\n/* harmony export */ });\nvar RequestHandlerProtocol;\n(function (RequestHandlerProtocol) {\n    RequestHandlerProtocol[\"HTTP_0_9\"] = \"http/0.9\";\n    RequestHandlerProtocol[\"HTTP_1_0\"] = \"http/1.0\";\n    RequestHandlerProtocol[\"TDS_8_0\"] = \"tds/8.0\";\n})(RequestHandlerProtocol || (RequestHandlerProtocol = {}));\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/transfer.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/transform/client-payload-blob-type-narrow.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/transform/client-payload-blob-type-narrow.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/transform/client-payload-blob-type-narrow.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/transform/no-undefined.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/transform/no-undefined.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/transform/no-undefined.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/transform/type-transform.js":
/*!************************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/transform/type-transform.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/transform/type-transform.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/uri.js":
/*!***************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/uri.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/uri.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/util.js":
/*!****************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/util.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/util.js?");

/***/ }),

/***/ "./node_modules/@smithy/types/dist-es/waiter.js":
/*!******************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/waiter.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/types/dist-es/waiter.js?");

/***/ }),

/***/ "./node_modules/@smithy/url-parser/dist-es/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@smithy/url-parser/dist-es/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   parseUrl: () => (/* binding */ parseUrl)\n/* harmony export */ });\n/* harmony import */ var _smithy_querystring_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/querystring-parser */ \"./node_modules/@smithy/querystring-parser/dist-es/index.js\");\n\nconst parseUrl = (url) => {\n    if (typeof url === \"string\") {\n        return parseUrl(new URL(url));\n    }\n    const { hostname, pathname, port, protocol, search } = url;\n    let query;\n    if (search) {\n        query = (0,_smithy_querystring_parser__WEBPACK_IMPORTED_MODULE_0__.parseQueryString)(search);\n    }\n    return {\n        hostname,\n        port: port ? parseInt(port) : undefined,\n        protocol,\n        path: pathname,\n        query,\n    };\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/url-parser/dist-es/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-base64/dist-es/constants.browser.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@smithy/util-base64/dist-es/constants.browser.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   alphabetByEncoding: () => (/* binding */ alphabetByEncoding),\n/* harmony export */   alphabetByValue: () => (/* binding */ alphabetByValue),\n/* harmony export */   bitsPerByte: () => (/* binding */ bitsPerByte),\n/* harmony export */   bitsPerLetter: () => (/* binding */ bitsPerLetter),\n/* harmony export */   maxLetterValue: () => (/* binding */ maxLetterValue)\n/* harmony export */ });\nconst alphabetByEncoding = {};\nconst alphabetByValue = new Array(64);\nfor (let i = 0, start = \"A\".charCodeAt(0), limit = \"Z\".charCodeAt(0); i + start <= limit; i++) {\n    const char = String.fromCharCode(i + start);\n    alphabetByEncoding[char] = i;\n    alphabetByValue[i] = char;\n}\nfor (let i = 0, start = \"a\".charCodeAt(0), limit = \"z\".charCodeAt(0); i + start <= limit; i++) {\n    const char = String.fromCharCode(i + start);\n    const index = i + 26;\n    alphabetByEncoding[char] = index;\n    alphabetByValue[index] = char;\n}\nfor (let i = 0; i < 10; i++) {\n    alphabetByEncoding[i.toString(10)] = i + 52;\n    const char = i.toString(10);\n    const index = i + 52;\n    alphabetByEncoding[char] = index;\n    alphabetByValue[index] = char;\n}\nalphabetByEncoding[\"+\"] = 62;\nalphabetByValue[62] = \"+\";\nalphabetByEncoding[\"/\"] = 63;\nalphabetByValue[63] = \"/\";\nconst bitsPerLetter = 6;\nconst bitsPerByte = 8;\nconst maxLetterValue = 0b111111;\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-base64/dist-es/constants.browser.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-base64/dist-es/fromBase64.browser.js":
/*!************************************************************************!*\
  !*** ./node_modules/@smithy/util-base64/dist-es/fromBase64.browser.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromBase64: () => (/* binding */ fromBase64)\n/* harmony export */ });\n/* harmony import */ var _constants_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.browser */ \"./node_modules/@smithy/util-base64/dist-es/constants.browser.js\");\n\nconst fromBase64 = (input) => {\n    let totalByteLength = (input.length / 4) * 3;\n    if (input.slice(-2) === \"==\") {\n        totalByteLength -= 2;\n    }\n    else if (input.slice(-1) === \"=\") {\n        totalByteLength--;\n    }\n    const out = new ArrayBuffer(totalByteLength);\n    const dataView = new DataView(out);\n    for (let i = 0; i < input.length; i += 4) {\n        let bits = 0;\n        let bitLength = 0;\n        for (let j = i, limit = i + 3; j <= limit; j++) {\n            if (input[j] !== \"=\") {\n                if (!(input[j] in _constants_browser__WEBPACK_IMPORTED_MODULE_0__.alphabetByEncoding)) {\n                    throw new TypeError(`Invalid character ${input[j]} in base64 string.`);\n                }\n                bits |= _constants_browser__WEBPACK_IMPORTED_MODULE_0__.alphabetByEncoding[input[j]] << ((limit - j) * _constants_browser__WEBPACK_IMPORTED_MODULE_0__.bitsPerLetter);\n                bitLength += _constants_browser__WEBPACK_IMPORTED_MODULE_0__.bitsPerLetter;\n            }\n            else {\n                bits >>= _constants_browser__WEBPACK_IMPORTED_MODULE_0__.bitsPerLetter;\n            }\n        }\n        const chunkOffset = (i / 4) * 3;\n        bits >>= bitLength % _constants_browser__WEBPACK_IMPORTED_MODULE_0__.bitsPerByte;\n        const byteLength = Math.floor(bitLength / _constants_browser__WEBPACK_IMPORTED_MODULE_0__.bitsPerByte);\n        for (let k = 0; k < byteLength; k++) {\n            const offset = (byteLength - k - 1) * _constants_browser__WEBPACK_IMPORTED_MODULE_0__.bitsPerByte;\n            dataView.setUint8(chunkOffset + k, (bits & (255 << offset)) >> offset);\n        }\n    }\n    return new Uint8Array(out);\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-base64/dist-es/fromBase64.browser.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-base64/dist-es/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@smithy/util-base64/dist-es/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromBase64: () => (/* reexport safe */ _fromBase64__WEBPACK_IMPORTED_MODULE_0__.fromBase64),\n/* harmony export */   toBase64: () => (/* reexport safe */ _toBase64__WEBPACK_IMPORTED_MODULE_1__.toBase64)\n/* harmony export */ });\n/* harmony import */ var _fromBase64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fromBase64 */ \"./node_modules/@smithy/util-base64/dist-es/fromBase64.browser.js\");\n/* harmony import */ var _toBase64__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toBase64 */ \"./node_modules/@smithy/util-base64/dist-es/toBase64.browser.js\");\n\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-base64/dist-es/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-base64/dist-es/toBase64.browser.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@smithy/util-base64/dist-es/toBase64.browser.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toBase64: () => (/* binding */ toBase64)\n/* harmony export */ });\n/* harmony import */ var _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-utf8 */ \"./node_modules/@smithy/util-utf8/dist-es/index.js\");\n/* harmony import */ var _constants_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.browser */ \"./node_modules/@smithy/util-base64/dist-es/constants.browser.js\");\n\n\nfunction toBase64(_input) {\n    let input;\n    if (typeof _input === \"string\") {\n        input = (0,_smithy_util_utf8__WEBPACK_IMPORTED_MODULE_0__.fromUtf8)(_input);\n    }\n    else {\n        input = _input;\n    }\n    const isArrayLike = typeof input === \"object\" && typeof input.length === \"number\";\n    const isUint8Array = typeof input === \"object\" &&\n        typeof input.byteOffset === \"number\" &&\n        typeof input.byteLength === \"number\";\n    if (!isArrayLike && !isUint8Array) {\n        throw new Error(\"@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.\");\n    }\n    let str = \"\";\n    for (let i = 0; i < input.length; i += 3) {\n        let bits = 0;\n        let bitLength = 0;\n        for (let j = i, limit = Math.min(i + 3, input.length); j < limit; j++) {\n            bits |= input[j] << ((limit - j - 1) * _constants_browser__WEBPACK_IMPORTED_MODULE_1__.bitsPerByte);\n            bitLength += _constants_browser__WEBPACK_IMPORTED_MODULE_1__.bitsPerByte;\n        }\n        const bitClusterCount = Math.ceil(bitLength / _constants_browser__WEBPACK_IMPORTED_MODULE_1__.bitsPerLetter);\n        bits <<= bitClusterCount * _constants_browser__WEBPACK_IMPORTED_MODULE_1__.bitsPerLetter - bitLength;\n        for (let k = 1; k <= bitClusterCount; k++) {\n            const offset = (bitClusterCount - k) * _constants_browser__WEBPACK_IMPORTED_MODULE_1__.bitsPerLetter;\n            str += _constants_browser__WEBPACK_IMPORTED_MODULE_1__.alphabetByValue[(bits & (_constants_browser__WEBPACK_IMPORTED_MODULE_1__.maxLetterValue << offset)) >> offset];\n        }\n        str += \"==\".slice(0, 4 - bitClusterCount);\n    }\n    return str;\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-base64/dist-es/toBase64.browser.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-body-length-browser/dist-es/calculateBodyLength.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@smithy/util-body-length-browser/dist-es/calculateBodyLength.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calculateBodyLength: () => (/* binding */ calculateBodyLength)\n/* harmony export */ });\nconst TEXT_ENCODER = typeof TextEncoder == \"function\" ? new TextEncoder() : null;\nconst calculateBodyLength = (body) => {\n    if (typeof body === \"string\") {\n        if (TEXT_ENCODER) {\n            return TEXT_ENCODER.encode(body).byteLength;\n        }\n        let len = body.length;\n        for (let i = len - 1; i >= 0; i--) {\n            const code = body.charCodeAt(i);\n            if (code > 0x7f && code <= 0x7ff)\n                len++;\n            else if (code > 0x7ff && code <= 0xffff)\n                len += 2;\n            if (code >= 0xdc00 && code <= 0xdfff)\n                i--;\n        }\n        return len;\n    }\n    else if (typeof body.byteLength === \"number\") {\n        return body.byteLength;\n    }\n    else if (typeof body.size === \"number\") {\n        return body.size;\n    }\n    throw new Error(`Body Length computation failed for ${body}`);\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-body-length-browser/dist-es/calculateBodyLength.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-body-length-browser/dist-es/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@smithy/util-body-length-browser/dist-es/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calculateBodyLength: () => (/* reexport safe */ _calculateBodyLength__WEBPACK_IMPORTED_MODULE_0__.calculateBodyLength)\n/* harmony export */ });\n/* harmony import */ var _calculateBodyLength__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculateBodyLength */ \"./node_modules/@smithy/util-body-length-browser/dist-es/calculateBodyLength.js\");\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-body-length-browser/dist-es/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-config-provider/dist-es/booleanSelector.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@smithy/util-config-provider/dist-es/booleanSelector.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   booleanSelector: () => (/* binding */ booleanSelector)\n/* harmony export */ });\nconst booleanSelector = (obj, key, type) => {\n    if (!(key in obj))\n        return undefined;\n    if (obj[key] === \"true\")\n        return true;\n    if (obj[key] === \"false\")\n        return false;\n    throw new Error(`Cannot load ${type} \"${key}\". Expected \"true\" or \"false\", got ${obj[key]}.`);\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-config-provider/dist-es/booleanSelector.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-config-provider/dist-es/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@smithy/util-config-provider/dist-es/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SelectorType: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_2__.SelectorType),\n/* harmony export */   booleanSelector: () => (/* reexport safe */ _booleanSelector__WEBPACK_IMPORTED_MODULE_0__.booleanSelector),\n/* harmony export */   numberSelector: () => (/* reexport safe */ _numberSelector__WEBPACK_IMPORTED_MODULE_1__.numberSelector)\n/* harmony export */ });\n/* harmony import */ var _booleanSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booleanSelector */ \"./node_modules/@smithy/util-config-provider/dist-es/booleanSelector.js\");\n/* harmony import */ var _numberSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./numberSelector */ \"./node_modules/@smithy/util-config-provider/dist-es/numberSelector.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ \"./node_modules/@smithy/util-config-provider/dist-es/types.js\");\n\n\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-config-provider/dist-es/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-config-provider/dist-es/numberSelector.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@smithy/util-config-provider/dist-es/numberSelector.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   numberSelector: () => (/* binding */ numberSelector)\n/* harmony export */ });\nconst numberSelector = (obj, key, type) => {\n    if (!(key in obj))\n        return undefined;\n    const numberValue = parseInt(obj[key], 10);\n    if (Number.isNaN(numberValue)) {\n        throw new TypeError(`Cannot load ${type} '${key}'. Expected number, got '${obj[key]}'.`);\n    }\n    return numberValue;\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-config-provider/dist-es/numberSelector.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-config-provider/dist-es/types.js":
/*!********************************************************************!*\
  !*** ./node_modules/@smithy/util-config-provider/dist-es/types.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SelectorType: () => (/* binding */ SelectorType)\n/* harmony export */ });\nvar SelectorType;\n(function (SelectorType) {\n    SelectorType[\"ENV\"] = \"env\";\n    SelectorType[\"CONFIG\"] = \"shared config entry\";\n})(SelectorType || (SelectorType = {}));\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-config-provider/dist-es/types.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-defaults-mode-browser/dist-es/constants.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@smithy/util-defaults-mode-browser/dist-es/constants.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DEFAULTS_MODE_OPTIONS: () => (/* binding */ DEFAULTS_MODE_OPTIONS)\n/* harmony export */ });\nconst DEFAULTS_MODE_OPTIONS = [\"in-region\", \"cross-region\", \"mobile\", \"standard\", \"legacy\"];\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-defaults-mode-browser/dist-es/constants.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-defaults-mode-browser/dist-es/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@smithy/util-defaults-mode-browser/dist-es/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   resolveDefaultsModeConfig: () => (/* reexport safe */ _resolveDefaultsModeConfig__WEBPACK_IMPORTED_MODULE_0__.resolveDefaultsModeConfig)\n/* harmony export */ });\n/* harmony import */ var _resolveDefaultsModeConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resolveDefaultsModeConfig */ \"./node_modules/@smithy/util-defaults-mode-browser/dist-es/resolveDefaultsModeConfig.js\");\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-defaults-mode-browser/dist-es/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-defaults-mode-browser/dist-es/resolveDefaultsModeConfig.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@smithy/util-defaults-mode-browser/dist-es/resolveDefaultsModeConfig.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   resolveDefaultsModeConfig: () => (/* binding */ resolveDefaultsModeConfig)\n/* harmony export */ });\n/* harmony import */ var _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/property-provider */ \"./node_modules/@smithy/property-provider/dist-es/index.js\");\n/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bowser */ \"./node_modules/bowser/es5.js\");\n/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./node_modules/@smithy/util-defaults-mode-browser/dist-es/constants.js\");\n\n\n\nconst resolveDefaultsModeConfig = ({ defaultsMode, } = {}) => (0,_smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.memoize)(async () => {\n    const mode = typeof defaultsMode === \"function\" ? await defaultsMode() : defaultsMode;\n    switch (mode?.toLowerCase()) {\n        case \"auto\":\n            return Promise.resolve(isMobileBrowser() ? \"mobile\" : \"standard\");\n        case \"mobile\":\n        case \"in-region\":\n        case \"cross-region\":\n        case \"standard\":\n        case \"legacy\":\n            return Promise.resolve(mode?.toLocaleLowerCase());\n        case undefined:\n            return Promise.resolve(\"legacy\");\n        default:\n            throw new Error(`Invalid parameter for \"defaultsMode\", expect ${_constants__WEBPACK_IMPORTED_MODULE_2__.DEFAULTS_MODE_OPTIONS.join(\", \")}, got ${mode}`);\n    }\n});\nconst isMobileBrowser = () => {\n    const parsedUA = typeof window !== \"undefined\" && window?.navigator?.userAgent\n        ? bowser__WEBPACK_IMPORTED_MODULE_1___default().parse(window.navigator.userAgent)\n        : undefined;\n    const platform = parsedUA?.platform?.type;\n    return platform === \"tablet\" || platform === \"mobile\";\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-defaults-mode-browser/dist-es/resolveDefaultsModeConfig.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-endpoints/dist-es/debug/debugId.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@smithy/util-endpoints/dist-es/debug/debugId.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   debugId: () => (/* binding */ debugId)\n/* harmony export */ });\nconst debugId = \"endpoints\";\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-endpoints/dist-es/debug/debugId.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-endpoints/dist-es/debug/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@smithy/util-endpoints/dist-es/debug/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   debugId: () => (/* reexport safe */ _debugId__WEBPACK_IMPORTED_MODULE_0__.debugId),\n/* harmony export */   toDebugString: () => (/* reexport safe */ _toDebugString__WEBPACK_IMPORTED_MODULE_1__.toDebugString)\n/* harmony export */ });\n/* harmony import */ var _debugId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debugId */ \"./node_modules/@smithy/util-endpoints/dist-es/debug/debugId.js\");\n/* harmony import */ var _toDebugString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDebugString */ \"./node_modules/@smithy/util-endpoints/dist-es/debug/toDebugString.js\");\n\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-endpoints/dist-es/debug/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-endpoints/dist-es/debug/toDebugString.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@smithy/util-endpoints/dist-es/debug/toDebugString.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toDebugString: () => (/* binding */ toDebugString)\n/* harmony export */ });\nfunction toDebugString(input) {\n    if (typeof input !== \"object\" || input == null) {\n        return input;\n    }\n    if (\"ref\" in input) {\n        return `$${toDebugString(input.ref)}`;\n    }\n    if (\"fn\" in input) {\n        return `${input.fn}(${(input.argv || []).map(toDebugString).join(\", \")})`;\n    }\n    return JSON.stringify(input, null, 2);\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-endpoints/dist-es/debug/toDebugString.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-endpoints/dist-es/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@smithy/util-endpoints/dist-es/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EndpointError: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_4__.EndpointError),\n/* harmony export */   customEndpointFunctions: () => (/* reexport safe */ _utils_customEndpointFunctions__WEBPACK_IMPORTED_MODULE_2__.customEndpointFunctions),\n/* harmony export */   isIpAddress: () => (/* reexport safe */ _lib_isIpAddress__WEBPACK_IMPORTED_MODULE_0__.isIpAddress),\n/* harmony export */   isValidHostLabel: () => (/* reexport safe */ _lib_isValidHostLabel__WEBPACK_IMPORTED_MODULE_1__.isValidHostLabel),\n/* harmony export */   resolveEndpoint: () => (/* reexport safe */ _resolveEndpoint__WEBPACK_IMPORTED_MODULE_3__.resolveEndpoint)\n/* harmony export */ });\n/* harmony import */ var _lib_isIpAddress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/isIpAddress */ \"./node_modules/@smithy/util-endpoints/dist-es/lib/isIpAddress.js\");\n/* harmony import */ var _lib_isValidHostLabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/isValidHostLabel */ \"./node_modules/@smithy/util-endpoints/dist-es/lib/isValidHostLabel.js\");\n/* harmony import */ var _utils_customEndpointFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/customEndpointFunctions */ \"./node_modules/@smithy/util-endpoints/dist-es/utils/customEndpointFunctions.js\");\n/* harmony import */ var _resolveEndpoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolveEndpoint */ \"./node_modules/@smithy/util-endpoints/dist-es/resolveEndpoint.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ \"./node_modules/@smithy/util-endpoints/dist-es/types/index.js\");\n\n\n\n\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-endpoints/dist-es/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-endpoints/dist-es/lib/booleanEquals.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@smithy/util-endpoints/dist-es/lib/booleanEquals.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   booleanEquals: () => (/* binding */ booleanEquals)\n/* harmony export */ });\nconst booleanEquals = (value1, value2) => value1 === value2;\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-endpoints/dist-es/lib/booleanEquals.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-endpoints/dist-es/lib/getAttr.js":
/*!********************************************************************!*\
  !*** ./node_modules/@smithy/util-endpoints/dist-es/lib/getAttr.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAttr: () => (/* binding */ getAttr)\n/* harmony export */ });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ \"./node_modules/@smithy/util-endpoints/dist-es/types/index.js\");\n/* harmony import */ var _getAttrPathList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getAttrPathList */ \"./node_modules/@smithy/util-endpoints/dist-es/lib/getAttrPathList.js\");\n\n\nconst getAttr = (value, path) => (0,_getAttrPathList__WEBPACK_IMPORTED_MODULE_1__.getAttrPathList)(path).reduce((acc, index) => {\n    if (typeof acc !== \"object\") {\n        throw new _types__WEBPACK_IMPORTED_MODULE_0__.EndpointError(`Index '${index}' in '${path}' not found in '${JSON.stringify(value)}'`);\n    }\n    else if (Array.isArray(acc)) {\n        return acc[parseInt(index)];\n    }\n    return acc[index];\n}, value);\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-endpoints/dist-es/lib/getAttr.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-endpoints/dist-es/lib/getAttrPathList.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@smithy/util-endpoints/dist-es/lib/getAttrPathList.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAttrPathList: () => (/* binding */ getAttrPathList)\n/* harmony export */ });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ \"./node_modules/@smithy/util-endpoints/dist-es/types/index.js\");\n\nconst getAttrPathList = (path) => {\n    const parts = path.split(\".\");\n    const pathList = [];\n    for (const part of parts) {\n        const squareBracketIndex = part.indexOf(\"[\");\n        if (squareBracketIndex !== -1) {\n            if (part.indexOf(\"]\") !== part.length - 1) {\n                throw new _types__WEBPACK_IMPORTED_MODULE_0__.EndpointError(`Path: '${path}' does not end with ']'`);\n            }\n            const arrayIndex = part.slice(squareBracketIndex + 1, -1);\n            if (Number.isNaN(parseInt(arrayIndex))) {\n                throw new _types__WEBPACK_IMPORTED_MODULE_0__.EndpointError(`Invalid array index: '${arrayIndex}' in path: '${path}'`);\n            }\n            if (squareBracketIndex !== 0) {\n                pathList.push(part.slice(0, squareBracketIndex));\n            }\n            pathList.push(arrayIndex);\n        }\n        else {\n            pathList.push(part);\n        }\n    }\n    return pathList;\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-endpoints/dist-es/lib/getAttrPathList.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-endpoints/dist-es/lib/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@smithy/util-endpoints/dist-es/lib/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   booleanEquals: () => (/* reexport safe */ _booleanEquals__WEBPACK_IMPORTED_MODULE_0__.booleanEquals),\n/* harmony export */   getAttr: () => (/* reexport safe */ _getAttr__WEBPACK_IMPORTED_MODULE_1__.getAttr),\n/* harmony export */   isSet: () => (/* reexport safe */ _isSet__WEBPACK_IMPORTED_MODULE_2__.isSet),\n/* harmony export */   isValidHostLabel: () => (/* reexport safe */ _isValidHostLabel__WEBPACK_IMPORTED_MODULE_3__.isValidHostLabel),\n/* harmony export */   not: () => (/* reexport safe */ _not__WEBPACK_IMPORTED_MODULE_4__.not),\n/* harmony export */   parseURL: () => (/* reexport safe */ _parseURL__WEBPACK_IMPORTED_MODULE_5__.parseURL),\n/* harmony export */   stringEquals: () => (/* reexport safe */ _stringEquals__WEBPACK_IMPORTED_MODULE_6__.stringEquals),\n/* harmony export */   substring: () => (/* reexport safe */ _substring__WEBPACK_IMPORTED_MODULE_7__.substring),\n/* harmony export */   uriEncode: () => (/* reexport safe */ _uriEncode__WEBPACK_IMPORTED_MODULE_8__.uriEncode)\n/* harmony export */ });\n/* harmony import */ var _booleanEquals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booleanEquals */ \"./node_modules/@smithy/util-endpoints/dist-es/lib/booleanEquals.js\");\n/* harmony import */ var _getAttr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getAttr */ \"./node_modules/@smithy/util-endpoints/dist-es/lib/getAttr.js\");\n/* harmony import */ var _isSet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isSet */ \"./node_modules/@smithy/util-endpoints/dist-es/lib/isSet.js\");\n/* harmony import */ var _isValidHostLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isValidHostLabel */ \"./node_modules/@smithy/util-endpoints/dist-es/lib/isValidHostLabel.js\");\n/* harmony import */ var _not__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not */ \"./node_modules/@smithy/util-endpoints/dist-es/lib/not.js\");\n/* harmony import */ var _parseURL__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parseURL */ \"./node_modules/@smithy/util-endpoints/dist-es/lib/parseURL.js\");\n/* harmony import */ var _stringEquals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stringEquals */ \"./node_modules/@smithy/util-endpoints/dist-es/lib/stringEquals.js\");\n/* harmony import */ var _substring__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./substring */ \"./node_modules/@smithy/util-endpoints/dist-es/lib/substring.js\");\n/* harmony import */ var _uriEncode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./uriEncode */ \"./node_modules/@smithy/util-endpoints/dist-es/lib/uriEncode.js\");\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-endpoints/dist-es/lib/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-endpoints/dist-es/lib/isIpAddress.js":
/*!************************************************************************!*\
  !*** ./node_modules/@smithy/util-endpoints/dist-es/lib/isIpAddress.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isIpAddress: () => (/* binding */ isIpAddress)\n/* harmony export */ });\nconst IP_V4_REGEX = new RegExp(`^(?:25[0-5]|2[0-4]\\\\d|1\\\\d\\\\d|[1-9]\\\\d|\\\\d)(?:\\\\.(?:25[0-5]|2[0-4]\\\\d|1\\\\d\\\\d|[1-9]\\\\d|\\\\d)){3}$`);\nconst isIpAddress = (value) => IP_V4_REGEX.test(value) || (value.startsWith(\"[\") && value.endsWith(\"]\"));\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-endpoints/dist-es/lib/isIpAddress.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-endpoints/dist-es/lib/isSet.js":
/*!******************************************************************!*\
  !*** ./node_modules/@smithy/util-endpoints/dist-es/lib/isSet.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isSet: () => (/* binding */ isSet)\n/* harmony export */ });\nconst isSet = (value) => value != null;\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-endpoints/dist-es/lib/isSet.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-endpoints/dist-es/lib/isValidHostLabel.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@smithy/util-endpoints/dist-es/lib/isValidHostLabel.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isValidHostLabel: () => (/* binding */ isValidHostLabel)\n/* harmony export */ });\nconst VALID_HOST_LABEL_REGEX = new RegExp(`^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$`);\nconst isValidHostLabel = (value, allowSubDomains = false) => {\n    if (!allowSubDomains) {\n        return VALID_HOST_LABEL_REGEX.test(value);\n    }\n    const labels = value.split(\".\");\n    for (const label of labels) {\n        if (!isValidHostLabel(label)) {\n            return false;\n        }\n    }\n    return true;\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-endpoints/dist-es/lib/isValidHostLabel.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-endpoints/dist-es/lib/not.js":
/*!****************************************************************!*\
  !*** ./node_modules/@smithy/util-endpoints/dist-es/lib/not.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   not: () => (/* binding */ not)\n/* harmony export */ });\nconst not = (value) => !value;\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-endpoints/dist-es/lib/not.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-endpoints/dist-es/lib/parseURL.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@smithy/util-endpoints/dist-es/lib/parseURL.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   parseURL: () => (/* binding */ parseURL)\n/* harmony export */ });\n/* harmony import */ var _smithy_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/types */ \"./node_modules/@smithy/types/dist-es/index.js\");\n/* harmony import */ var _isIpAddress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isIpAddress */ \"./node_modules/@smithy/util-endpoints/dist-es/lib/isIpAddress.js\");\n\n\nconst DEFAULT_PORTS = {\n    [_smithy_types__WEBPACK_IMPORTED_MODULE_0__.EndpointURLScheme.HTTP]: 80,\n    [_smithy_types__WEBPACK_IMPORTED_MODULE_0__.EndpointURLScheme.HTTPS]: 443,\n};\nconst parseURL = (value) => {\n    const whatwgURL = (() => {\n        try {\n            if (value instanceof URL) {\n                return value;\n            }\n            if (typeof value === \"object\" && \"hostname\" in value) {\n                const { hostname, port, protocol = \"\", path = \"\", query = {} } = value;\n                const url = new URL(`${protocol}//${hostname}${port ? `:${port}` : \"\"}${path}`);\n                url.search = Object.entries(query)\n                    .map(([k, v]) => `${k}=${v}`)\n                    .join(\"&\");\n                return url;\n            }\n            return new URL(value);\n        }\n        catch (error) {\n            return null;\n        }\n    })();\n    if (!whatwgURL) {\n        console.error(`Unable to parse ${JSON.stringify(value)} as a whatwg URL.`);\n        return null;\n    }\n    const urlString = whatwgURL.href;\n    const { host, hostname, pathname, protocol, search } = whatwgURL;\n    if (search) {\n        return null;\n    }\n    const scheme = protocol.slice(0, -1);\n    if (!Object.values(_smithy_types__WEBPACK_IMPORTED_MODULE_0__.EndpointURLScheme).includes(scheme)) {\n        return null;\n    }\n    const isIp = (0,_isIpAddress__WEBPACK_IMPORTED_MODULE_1__.isIpAddress)(hostname);\n    const inputContainsDefaultPort = urlString.includes(`${host}:${DEFAULT_PORTS[scheme]}`) ||\n        (typeof value === \"string\" && value.includes(`${host}:${DEFAULT_PORTS[scheme]}`));\n    const authority = `${host}${inputContainsDefaultPort ? `:${DEFAULT_PORTS[scheme]}` : ``}`;\n    return {\n        scheme,\n        authority,\n        path: pathname,\n        normalizedPath: pathname.endsWith(\"/\") ? pathname : `${pathname}/`,\n        isIp,\n    };\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-endpoints/dist-es/lib/parseURL.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-endpoints/dist-es/lib/stringEquals.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@smithy/util-endpoints/dist-es/lib/stringEquals.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   stringEquals: () => (/* binding */ stringEquals)\n/* harmony export */ });\nconst stringEquals = (value1, value2) => value1 === value2;\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-endpoints/dist-es/lib/stringEquals.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-endpoints/dist-es/lib/substring.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@smithy/util-endpoints/dist-es/lib/substring.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   substring: () => (/* binding */ substring)\n/* harmony export */ });\nconst substring = (input, start, stop, reverse) => {\n    if (start >= stop || input.length < stop) {\n        return null;\n    }\n    if (!reverse) {\n        return input.substring(start, stop);\n    }\n    return input.substring(input.length - stop, input.length - start);\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-endpoints/dist-es/lib/substring.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-endpoints/dist-es/lib/uriEncode.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@smithy/util-endpoints/dist-es/lib/uriEncode.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   uriEncode: () => (/* binding */ uriEncode)\n/* harmony export */ });\nconst uriEncode = (value) => encodeURIComponent(value).replace(/[!*'()]/g, (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-endpoints/dist-es/lib/uriEncode.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-endpoints/dist-es/resolveEndpoint.js":
/*!************************************************************************!*\
  !*** ./node_modules/@smithy/util-endpoints/dist-es/resolveEndpoint.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   resolveEndpoint: () => (/* binding */ resolveEndpoint)\n/* harmony export */ });\n/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debug */ \"./node_modules/@smithy/util-endpoints/dist-es/debug/index.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ \"./node_modules/@smithy/util-endpoints/dist-es/types/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./node_modules/@smithy/util-endpoints/dist-es/utils/index.js\");\n\n\n\nconst resolveEndpoint = (ruleSetObject, options) => {\n    const { endpointParams, logger } = options;\n    const { parameters, rules } = ruleSetObject;\n    options.logger?.debug?.(`${_debug__WEBPACK_IMPORTED_MODULE_0__.debugId} Initial EndpointParams: ${(0,_debug__WEBPACK_IMPORTED_MODULE_0__.toDebugString)(endpointParams)}`);\n    const paramsWithDefault = Object.entries(parameters)\n        .filter(([, v]) => v.default != null)\n        .map(([k, v]) => [k, v.default]);\n    if (paramsWithDefault.length > 0) {\n        for (const [paramKey, paramDefaultValue] of paramsWithDefault) {\n            endpointParams[paramKey] = endpointParams[paramKey] ?? paramDefaultValue;\n        }\n    }\n    const requiredParams = Object.entries(parameters)\n        .filter(([, v]) => v.required)\n        .map(([k]) => k);\n    for (const requiredParam of requiredParams) {\n        if (endpointParams[requiredParam] == null) {\n            throw new _types__WEBPACK_IMPORTED_MODULE_1__.EndpointError(`Missing required parameter: '${requiredParam}'`);\n        }\n    }\n    const endpoint = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.evaluateRules)(rules, { endpointParams, logger, referenceRecord: {} });\n    if (options.endpointParams?.Endpoint) {\n        try {\n            const givenEndpoint = new URL(options.endpointParams.Endpoint);\n            const { protocol, port } = givenEndpoint;\n            endpoint.url.protocol = protocol;\n            endpoint.url.port = port;\n        }\n        catch (e) {\n        }\n    }\n    options.logger?.debug?.(`${_debug__WEBPACK_IMPORTED_MODULE_0__.debugId} Resolved endpoint: ${(0,_debug__WEBPACK_IMPORTED_MODULE_0__.toDebugString)(endpoint)}`);\n    return endpoint;\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-endpoints/dist-es/resolveEndpoint.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-endpoints/dist-es/types/EndpointError.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@smithy/util-endpoints/dist-es/types/EndpointError.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EndpointError: () => (/* binding */ EndpointError)\n/* harmony export */ });\nclass EndpointError extends Error {\n    constructor(message) {\n        super(message);\n        this.name = \"EndpointError\";\n    }\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-endpoints/dist-es/types/EndpointError.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-endpoints/dist-es/types/EndpointFunctions.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@smithy/util-endpoints/dist-es/types/EndpointFunctions.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-endpoints/dist-es/types/EndpointFunctions.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-endpoints/dist-es/types/EndpointRuleObject.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@smithy/util-endpoints/dist-es/types/EndpointRuleObject.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-endpoints/dist-es/types/EndpointRuleObject.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-endpoints/dist-es/types/ErrorRuleObject.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@smithy/util-endpoints/dist-es/types/ErrorRuleObject.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-endpoints/dist-es/types/ErrorRuleObject.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-endpoints/dist-es/types/RuleSetObject.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@smithy/util-endpoints/dist-es/types/RuleSetObject.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-endpoints/dist-es/types/RuleSetObject.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-endpoints/dist-es/types/TreeRuleObject.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@smithy/util-endpoints/dist-es/types/TreeRuleObject.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-endpoints/dist-es/types/TreeRuleObject.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-endpoints/dist-es/types/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@smithy/util-endpoints/dist-es/types/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EndpointError: () => (/* reexport safe */ _EndpointError__WEBPACK_IMPORTED_MODULE_0__.EndpointError)\n/* harmony export */ });\n/* harmony import */ var _EndpointError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EndpointError */ \"./node_modules/@smithy/util-endpoints/dist-es/types/EndpointError.js\");\n/* harmony import */ var _EndpointFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EndpointFunctions */ \"./node_modules/@smithy/util-endpoints/dist-es/types/EndpointFunctions.js\");\n/* harmony import */ var _EndpointRuleObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EndpointRuleObject */ \"./node_modules/@smithy/util-endpoints/dist-es/types/EndpointRuleObject.js\");\n/* harmony import */ var _ErrorRuleObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ErrorRuleObject */ \"./node_modules/@smithy/util-endpoints/dist-es/types/ErrorRuleObject.js\");\n/* harmony import */ var _RuleSetObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RuleSetObject */ \"./node_modules/@smithy/util-endpoints/dist-es/types/RuleSetObject.js\");\n/* harmony import */ var _TreeRuleObject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TreeRuleObject */ \"./node_modules/@smithy/util-endpoints/dist-es/types/TreeRuleObject.js\");\n/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared */ \"./node_modules/@smithy/util-endpoints/dist-es/types/shared.js\");\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-endpoints/dist-es/types/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-endpoints/dist-es/types/shared.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@smithy/util-endpoints/dist-es/types/shared.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-endpoints/dist-es/types/shared.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-endpoints/dist-es/utils/callFunction.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@smithy/util-endpoints/dist-es/utils/callFunction.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   callFunction: () => (/* binding */ callFunction)\n/* harmony export */ });\n/* harmony import */ var _customEndpointFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customEndpointFunctions */ \"./node_modules/@smithy/util-endpoints/dist-es/utils/customEndpointFunctions.js\");\n/* harmony import */ var _endpointFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endpointFunctions */ \"./node_modules/@smithy/util-endpoints/dist-es/utils/endpointFunctions.js\");\n/* harmony import */ var _evaluateExpression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./evaluateExpression */ \"./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateExpression.js\");\n\n\n\nconst callFunction = ({ fn, argv }, options) => {\n    const evaluatedArgs = argv.map((arg) => [\"boolean\", \"number\"].includes(typeof arg) ? arg : (0,_evaluateExpression__WEBPACK_IMPORTED_MODULE_2__.evaluateExpression)(arg, \"arg\", options));\n    const fnSegments = fn.split(\".\");\n    if (fnSegments[0] in _customEndpointFunctions__WEBPACK_IMPORTED_MODULE_0__.customEndpointFunctions && fnSegments[1] != null) {\n        return _customEndpointFunctions__WEBPACK_IMPORTED_MODULE_0__.customEndpointFunctions[fnSegments[0]][fnSegments[1]](...evaluatedArgs);\n    }\n    return _endpointFunctions__WEBPACK_IMPORTED_MODULE_1__.endpointFunctions[fn](...evaluatedArgs);\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-endpoints/dist-es/utils/callFunction.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-endpoints/dist-es/utils/customEndpointFunctions.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@smithy/util-endpoints/dist-es/utils/customEndpointFunctions.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   customEndpointFunctions: () => (/* binding */ customEndpointFunctions)\n/* harmony export */ });\nconst customEndpointFunctions = {};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-endpoints/dist-es/utils/customEndpointFunctions.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-endpoints/dist-es/utils/endpointFunctions.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@smithy/util-endpoints/dist-es/utils/endpointFunctions.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   endpointFunctions: () => (/* binding */ endpointFunctions)\n/* harmony export */ });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./node_modules/@smithy/util-endpoints/dist-es/lib/index.js\");\n\nconst endpointFunctions = {\n    booleanEquals: _lib__WEBPACK_IMPORTED_MODULE_0__.booleanEquals,\n    getAttr: _lib__WEBPACK_IMPORTED_MODULE_0__.getAttr,\n    isSet: _lib__WEBPACK_IMPORTED_MODULE_0__.isSet,\n    isValidHostLabel: _lib__WEBPACK_IMPORTED_MODULE_0__.isValidHostLabel,\n    not: _lib__WEBPACK_IMPORTED_MODULE_0__.not,\n    parseURL: _lib__WEBPACK_IMPORTED_MODULE_0__.parseURL,\n    stringEquals: _lib__WEBPACK_IMPORTED_MODULE_0__.stringEquals,\n    substring: _lib__WEBPACK_IMPORTED_MODULE_0__.substring,\n    uriEncode: _lib__WEBPACK_IMPORTED_MODULE_0__.uriEncode,\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-endpoints/dist-es/utils/endpointFunctions.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateCondition.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateCondition.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   evaluateCondition: () => (/* binding */ evaluateCondition)\n/* harmony export */ });\n/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../debug */ \"./node_modules/@smithy/util-endpoints/dist-es/debug/index.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ \"./node_modules/@smithy/util-endpoints/dist-es/types/index.js\");\n/* harmony import */ var _callFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./callFunction */ \"./node_modules/@smithy/util-endpoints/dist-es/utils/callFunction.js\");\n\n\n\nconst evaluateCondition = ({ assign, ...fnArgs }, options) => {\n    if (assign && assign in options.referenceRecord) {\n        throw new _types__WEBPACK_IMPORTED_MODULE_1__.EndpointError(`'${assign}' is already defined in Reference Record.`);\n    }\n    const value = (0,_callFunction__WEBPACK_IMPORTED_MODULE_2__.callFunction)(fnArgs, options);\n    options.logger?.debug?.(_debug__WEBPACK_IMPORTED_MODULE_0__.debugId, `evaluateCondition: ${(0,_debug__WEBPACK_IMPORTED_MODULE_0__.toDebugString)(fnArgs)} = ${(0,_debug__WEBPACK_IMPORTED_MODULE_0__.toDebugString)(value)}`);\n    return {\n        result: value === \"\" ? true : !!value,\n        ...(assign != null && { toAssign: { name: assign, value } }),\n    };\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateCondition.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateConditions.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateConditions.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   evaluateConditions: () => (/* binding */ evaluateConditions)\n/* harmony export */ });\n/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../debug */ \"./node_modules/@smithy/util-endpoints/dist-es/debug/index.js\");\n/* harmony import */ var _evaluateCondition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaluateCondition */ \"./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateCondition.js\");\n\n\nconst evaluateConditions = (conditions = [], options) => {\n    const conditionsReferenceRecord = {};\n    for (const condition of conditions) {\n        const { result, toAssign } = (0,_evaluateCondition__WEBPACK_IMPORTED_MODULE_1__.evaluateCondition)(condition, {\n            ...options,\n            referenceRecord: {\n                ...options.referenceRecord,\n                ...conditionsReferenceRecord,\n            },\n        });\n        if (!result) {\n            return { result };\n        }\n        if (toAssign) {\n            conditionsReferenceRecord[toAssign.name] = toAssign.value;\n            options.logger?.debug?.(_debug__WEBPACK_IMPORTED_MODULE_0__.debugId, `assign: ${toAssign.name} := ${(0,_debug__WEBPACK_IMPORTED_MODULE_0__.toDebugString)(toAssign.value)}`);\n        }\n    }\n    return { result: true, referenceRecord: conditionsReferenceRecord };\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateConditions.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateEndpointRule.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateEndpointRule.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   evaluateEndpointRule: () => (/* binding */ evaluateEndpointRule)\n/* harmony export */ });\n/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../debug */ \"./node_modules/@smithy/util-endpoints/dist-es/debug/index.js\");\n/* harmony import */ var _evaluateConditions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaluateConditions */ \"./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateConditions.js\");\n/* harmony import */ var _getEndpointHeaders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getEndpointHeaders */ \"./node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointHeaders.js\");\n/* harmony import */ var _getEndpointProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getEndpointProperties */ \"./node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperties.js\");\n/* harmony import */ var _getEndpointUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getEndpointUrl */ \"./node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointUrl.js\");\n\n\n\n\n\nconst evaluateEndpointRule = (endpointRule, options) => {\n    const { conditions, endpoint } = endpointRule;\n    const { result, referenceRecord } = (0,_evaluateConditions__WEBPACK_IMPORTED_MODULE_1__.evaluateConditions)(conditions, options);\n    if (!result) {\n        return;\n    }\n    const endpointRuleOptions = {\n        ...options,\n        referenceRecord: { ...options.referenceRecord, ...referenceRecord },\n    };\n    const { url, properties, headers } = endpoint;\n    options.logger?.debug?.(_debug__WEBPACK_IMPORTED_MODULE_0__.debugId, `Resolving endpoint from template: ${(0,_debug__WEBPACK_IMPORTED_MODULE_0__.toDebugString)(endpoint)}`);\n    return {\n        ...(headers != undefined && {\n            headers: (0,_getEndpointHeaders__WEBPACK_IMPORTED_MODULE_2__.getEndpointHeaders)(headers, endpointRuleOptions),\n        }),\n        ...(properties != undefined && {\n            properties: (0,_getEndpointProperties__WEBPACK_IMPORTED_MODULE_3__.getEndpointProperties)(properties, endpointRuleOptions),\n        }),\n        url: (0,_getEndpointUrl__WEBPACK_IMPORTED_MODULE_4__.getEndpointUrl)(url, endpointRuleOptions),\n    };\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateEndpointRule.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateErrorRule.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateErrorRule.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   evaluateErrorRule: () => (/* binding */ evaluateErrorRule)\n/* harmony export */ });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ \"./node_modules/@smithy/util-endpoints/dist-es/types/index.js\");\n/* harmony import */ var _evaluateConditions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaluateConditions */ \"./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateConditions.js\");\n/* harmony import */ var _evaluateExpression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./evaluateExpression */ \"./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateExpression.js\");\n\n\n\nconst evaluateErrorRule = (errorRule, options) => {\n    const { conditions, error } = errorRule;\n    const { result, referenceRecord } = (0,_evaluateConditions__WEBPACK_IMPORTED_MODULE_1__.evaluateConditions)(conditions, options);\n    if (!result) {\n        return;\n    }\n    throw new _types__WEBPACK_IMPORTED_MODULE_0__.EndpointError((0,_evaluateExpression__WEBPACK_IMPORTED_MODULE_2__.evaluateExpression)(error, \"Error\", {\n        ...options,\n        referenceRecord: { ...options.referenceRecord, ...referenceRecord },\n    }));\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateErrorRule.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateExpression.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateExpression.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   evaluateExpression: () => (/* binding */ evaluateExpression)\n/* harmony export */ });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ \"./node_modules/@smithy/util-endpoints/dist-es/types/index.js\");\n/* harmony import */ var _callFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./callFunction */ \"./node_modules/@smithy/util-endpoints/dist-es/utils/callFunction.js\");\n/* harmony import */ var _evaluateTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./evaluateTemplate */ \"./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTemplate.js\");\n/* harmony import */ var _getReferenceValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getReferenceValue */ \"./node_modules/@smithy/util-endpoints/dist-es/utils/getReferenceValue.js\");\n\n\n\n\nconst evaluateExpression = (obj, keyName, options) => {\n    if (typeof obj === \"string\") {\n        return (0,_evaluateTemplate__WEBPACK_IMPORTED_MODULE_2__.evaluateTemplate)(obj, options);\n    }\n    else if (obj[\"fn\"]) {\n        return (0,_callFunction__WEBPACK_IMPORTED_MODULE_1__.callFunction)(obj, options);\n    }\n    else if (obj[\"ref\"]) {\n        return (0,_getReferenceValue__WEBPACK_IMPORTED_MODULE_3__.getReferenceValue)(obj, options);\n    }\n    throw new _types__WEBPACK_IMPORTED_MODULE_0__.EndpointError(`'${keyName}': ${String(obj)} is not a string, function or reference.`);\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateExpression.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateRules.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateRules.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   evaluateRules: () => (/* binding */ evaluateRules)\n/* harmony export */ });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ \"./node_modules/@smithy/util-endpoints/dist-es/types/index.js\");\n/* harmony import */ var _evaluateEndpointRule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaluateEndpointRule */ \"./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateEndpointRule.js\");\n/* harmony import */ var _evaluateErrorRule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./evaluateErrorRule */ \"./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateErrorRule.js\");\n/* harmony import */ var _evaluateTreeRule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./evaluateTreeRule */ \"./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTreeRule.js\");\n\n\n\n\nconst evaluateRules = (rules, options) => {\n    for (const rule of rules) {\n        if (rule.type === \"endpoint\") {\n            const endpointOrUndefined = (0,_evaluateEndpointRule__WEBPACK_IMPORTED_MODULE_1__.evaluateEndpointRule)(rule, options);\n            if (endpointOrUndefined) {\n                return endpointOrUndefined;\n            }\n        }\n        else if (rule.type === \"error\") {\n            (0,_evaluateErrorRule__WEBPACK_IMPORTED_MODULE_2__.evaluateErrorRule)(rule, options);\n        }\n        else if (rule.type === \"tree\") {\n            const endpointOrUndefined = (0,_evaluateTreeRule__WEBPACK_IMPORTED_MODULE_3__.evaluateTreeRule)(rule, options);\n            if (endpointOrUndefined) {\n                return endpointOrUndefined;\n            }\n        }\n        else {\n            throw new _types__WEBPACK_IMPORTED_MODULE_0__.EndpointError(`Unknown endpoint rule: ${rule}`);\n        }\n    }\n    throw new _types__WEBPACK_IMPORTED_MODULE_0__.EndpointError(`Rules evaluation failed`);\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateRules.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTemplate.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTemplate.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   evaluateTemplate: () => (/* binding */ evaluateTemplate)\n/* harmony export */ });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./node_modules/@smithy/util-endpoints/dist-es/lib/index.js\");\n\nconst evaluateTemplate = (template, options) => {\n    const evaluatedTemplateArr = [];\n    const templateContext = {\n        ...options.endpointParams,\n        ...options.referenceRecord,\n    };\n    let currentIndex = 0;\n    while (currentIndex < template.length) {\n        const openingBraceIndex = template.indexOf(\"{\", currentIndex);\n        if (openingBraceIndex === -1) {\n            evaluatedTemplateArr.push(template.slice(currentIndex));\n            break;\n        }\n        evaluatedTemplateArr.push(template.slice(currentIndex, openingBraceIndex));\n        const closingBraceIndex = template.indexOf(\"}\", openingBraceIndex);\n        if (closingBraceIndex === -1) {\n            evaluatedTemplateArr.push(template.slice(openingBraceIndex));\n            break;\n        }\n        if (template[openingBraceIndex + 1] === \"{\" && template[closingBraceIndex + 1] === \"}\") {\n            evaluatedTemplateArr.push(template.slice(openingBraceIndex + 1, closingBraceIndex));\n            currentIndex = closingBraceIndex + 2;\n        }\n        const parameterName = template.substring(openingBraceIndex + 1, closingBraceIndex);\n        if (parameterName.includes(\"#\")) {\n            const [refName, attrName] = parameterName.split(\"#\");\n            evaluatedTemplateArr.push((0,_lib__WEBPACK_IMPORTED_MODULE_0__.getAttr)(templateContext[refName], attrName));\n        }\n        else {\n            evaluatedTemplateArr.push(templateContext[parameterName]);\n        }\n        currentIndex = closingBraceIndex + 1;\n    }\n    return evaluatedTemplateArr.join(\"\");\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTemplate.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTreeRule.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTreeRule.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   evaluateTreeRule: () => (/* binding */ evaluateTreeRule)\n/* harmony export */ });\n/* harmony import */ var _evaluateConditions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./evaluateConditions */ \"./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateConditions.js\");\n/* harmony import */ var _evaluateRules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaluateRules */ \"./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateRules.js\");\n\n\nconst evaluateTreeRule = (treeRule, options) => {\n    const { conditions, rules } = treeRule;\n    const { result, referenceRecord } = (0,_evaluateConditions__WEBPACK_IMPORTED_MODULE_0__.evaluateConditions)(conditions, options);\n    if (!result) {\n        return;\n    }\n    return (0,_evaluateRules__WEBPACK_IMPORTED_MODULE_1__.evaluateRules)(rules, {\n        ...options,\n        referenceRecord: { ...options.referenceRecord, ...referenceRecord },\n    });\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTreeRule.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointHeaders.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointHeaders.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getEndpointHeaders: () => (/* binding */ getEndpointHeaders)\n/* harmony export */ });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ \"./node_modules/@smithy/util-endpoints/dist-es/types/index.js\");\n/* harmony import */ var _evaluateExpression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaluateExpression */ \"./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateExpression.js\");\n\n\nconst getEndpointHeaders = (headers, options) => Object.entries(headers).reduce((acc, [headerKey, headerVal]) => ({\n    ...acc,\n    [headerKey]: headerVal.map((headerValEntry) => {\n        const processedExpr = (0,_evaluateExpression__WEBPACK_IMPORTED_MODULE_1__.evaluateExpression)(headerValEntry, \"Header value entry\", options);\n        if (typeof processedExpr !== \"string\") {\n            throw new _types__WEBPACK_IMPORTED_MODULE_0__.EndpointError(`Header '${headerKey}' value '${processedExpr}' is not a string`);\n        }\n        return processedExpr;\n    }),\n}), {});\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointHeaders.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperties.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getEndpointProperties: () => (/* binding */ getEndpointProperties)\n/* harmony export */ });\n/* harmony import */ var _getEndpointProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getEndpointProperty */ \"./node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperty.js\");\n\nconst getEndpointProperties = (properties, options) => Object.entries(properties).reduce((acc, [propertyKey, propertyVal]) => ({\n    ...acc,\n    [propertyKey]: (0,_getEndpointProperty__WEBPACK_IMPORTED_MODULE_0__.getEndpointProperty)(propertyVal, options),\n}), {});\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperties.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperty.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperty.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getEndpointProperty: () => (/* binding */ getEndpointProperty)\n/* harmony export */ });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ \"./node_modules/@smithy/util-endpoints/dist-es/types/index.js\");\n/* harmony import */ var _evaluateTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaluateTemplate */ \"./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTemplate.js\");\n/* harmony import */ var _getEndpointProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getEndpointProperties */ \"./node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperties.js\");\n\n\n\nconst getEndpointProperty = (property, options) => {\n    if (Array.isArray(property)) {\n        return property.map((propertyEntry) => getEndpointProperty(propertyEntry, options));\n    }\n    switch (typeof property) {\n        case \"string\":\n            return (0,_evaluateTemplate__WEBPACK_IMPORTED_MODULE_1__.evaluateTemplate)(property, options);\n        case \"object\":\n            if (property === null) {\n                throw new _types__WEBPACK_IMPORTED_MODULE_0__.EndpointError(`Unexpected endpoint property: ${property}`);\n            }\n            return (0,_getEndpointProperties__WEBPACK_IMPORTED_MODULE_2__.getEndpointProperties)(property, options);\n        case \"boolean\":\n            return property;\n        default:\n            throw new _types__WEBPACK_IMPORTED_MODULE_0__.EndpointError(`Unexpected endpoint property type: ${typeof property}`);\n    }\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperty.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointUrl.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointUrl.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getEndpointUrl: () => (/* binding */ getEndpointUrl)\n/* harmony export */ });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ \"./node_modules/@smithy/util-endpoints/dist-es/types/index.js\");\n/* harmony import */ var _evaluateExpression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaluateExpression */ \"./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateExpression.js\");\n\n\nconst getEndpointUrl = (endpointUrl, options) => {\n    const expression = (0,_evaluateExpression__WEBPACK_IMPORTED_MODULE_1__.evaluateExpression)(endpointUrl, \"Endpoint URL\", options);\n    if (typeof expression === \"string\") {\n        try {\n            return new URL(expression);\n        }\n        catch (error) {\n            console.error(`Failed to construct URL with ${expression}`, error);\n            throw error;\n        }\n    }\n    throw new _types__WEBPACK_IMPORTED_MODULE_0__.EndpointError(`Endpoint URL must be a string, got ${typeof expression}`);\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointUrl.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-endpoints/dist-es/utils/getReferenceValue.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@smithy/util-endpoints/dist-es/utils/getReferenceValue.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getReferenceValue: () => (/* binding */ getReferenceValue)\n/* harmony export */ });\nconst getReferenceValue = ({ ref }, options) => {\n    const referenceRecord = {\n        ...options.endpointParams,\n        ...options.referenceRecord,\n    };\n    return referenceRecord[ref];\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-endpoints/dist-es/utils/getReferenceValue.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-endpoints/dist-es/utils/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@smithy/util-endpoints/dist-es/utils/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   customEndpointFunctions: () => (/* reexport safe */ _customEndpointFunctions__WEBPACK_IMPORTED_MODULE_0__.customEndpointFunctions),\n/* harmony export */   evaluateRules: () => (/* reexport safe */ _evaluateRules__WEBPACK_IMPORTED_MODULE_1__.evaluateRules)\n/* harmony export */ });\n/* harmony import */ var _customEndpointFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customEndpointFunctions */ \"./node_modules/@smithy/util-endpoints/dist-es/utils/customEndpointFunctions.js\");\n/* harmony import */ var _evaluateRules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaluateRules */ \"./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateRules.js\");\n\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-endpoints/dist-es/utils/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-hex-encoding/dist-es/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@smithy/util-hex-encoding/dist-es/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromHex: () => (/* binding */ fromHex),\n/* harmony export */   toHex: () => (/* binding */ toHex)\n/* harmony export */ });\nconst SHORT_TO_HEX = {};\nconst HEX_TO_SHORT = {};\nfor (let i = 0; i < 256; i++) {\n    let encodedByte = i.toString(16).toLowerCase();\n    if (encodedByte.length === 1) {\n        encodedByte = `0${encodedByte}`;\n    }\n    SHORT_TO_HEX[i] = encodedByte;\n    HEX_TO_SHORT[encodedByte] = i;\n}\nfunction fromHex(encoded) {\n    if (encoded.length % 2 !== 0) {\n        throw new Error(\"Hex encoded strings must have an even number length\");\n    }\n    const out = new Uint8Array(encoded.length / 2);\n    for (let i = 0; i < encoded.length; i += 2) {\n        const encodedByte = encoded.slice(i, i + 2).toLowerCase();\n        if (encodedByte in HEX_TO_SHORT) {\n            out[i / 2] = HEX_TO_SHORT[encodedByte];\n        }\n        else {\n            throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);\n        }\n    }\n    return out;\n}\nfunction toHex(bytes) {\n    let out = \"\";\n    for (let i = 0; i < bytes.byteLength; i++) {\n        out += SHORT_TO_HEX[bytes[i]];\n    }\n    return out;\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-hex-encoding/dist-es/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getSmithyContext: () => (/* binding */ getSmithyContext)\n/* harmony export */ });\n/* harmony import */ var _smithy_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/types */ \"./node_modules/@smithy/types/dist-es/index.js\");\n\nconst getSmithyContext = (context) => context[_smithy_types__WEBPACK_IMPORTED_MODULE_0__.SMITHY_CONTEXT_KEY] || (context[_smithy_types__WEBPACK_IMPORTED_MODULE_0__.SMITHY_CONTEXT_KEY] = {});\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-middleware/dist-es/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@smithy/util-middleware/dist-es/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getSmithyContext: () => (/* reexport safe */ _getSmithyContext__WEBPACK_IMPORTED_MODULE_0__.getSmithyContext),\n/* harmony export */   normalizeProvider: () => (/* reexport safe */ _normalizeProvider__WEBPACK_IMPORTED_MODULE_1__.normalizeProvider)\n/* harmony export */ });\n/* harmony import */ var _getSmithyContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getSmithyContext */ \"./node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js\");\n/* harmony import */ var _normalizeProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./normalizeProvider */ \"./node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js\");\n\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-middleware/dist-es/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   normalizeProvider: () => (/* binding */ normalizeProvider)\n/* harmony export */ });\nconst normalizeProvider = (input) => {\n    if (typeof input === \"function\")\n        return input;\n    const promisified = Promise.resolve(input);\n    return () => promisified;\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-retry/dist-es/AdaptiveRetryStrategy.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@smithy/util-retry/dist-es/AdaptiveRetryStrategy.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AdaptiveRetryStrategy: () => (/* binding */ AdaptiveRetryStrategy)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./node_modules/@smithy/util-retry/dist-es/config.js\");\n/* harmony import */ var _DefaultRateLimiter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultRateLimiter */ \"./node_modules/@smithy/util-retry/dist-es/DefaultRateLimiter.js\");\n/* harmony import */ var _StandardRetryStrategy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StandardRetryStrategy */ \"./node_modules/@smithy/util-retry/dist-es/StandardRetryStrategy.js\");\n\n\n\nclass AdaptiveRetryStrategy {\n    constructor(maxAttemptsProvider, options) {\n        this.maxAttemptsProvider = maxAttemptsProvider;\n        this.mode = _config__WEBPACK_IMPORTED_MODULE_0__.RETRY_MODES.ADAPTIVE;\n        const { rateLimiter } = options ?? {};\n        this.rateLimiter = rateLimiter ?? new _DefaultRateLimiter__WEBPACK_IMPORTED_MODULE_1__.DefaultRateLimiter();\n        this.standardRetryStrategy = new _StandardRetryStrategy__WEBPACK_IMPORTED_MODULE_2__.StandardRetryStrategy(maxAttemptsProvider);\n    }\n    async acquireInitialRetryToken(retryTokenScope) {\n        await this.rateLimiter.getSendToken();\n        return this.standardRetryStrategy.acquireInitialRetryToken(retryTokenScope);\n    }\n    async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {\n        this.rateLimiter.updateClientSendingRate(errorInfo);\n        return this.standardRetryStrategy.refreshRetryTokenForRetry(tokenToRenew, errorInfo);\n    }\n    recordSuccess(token) {\n        this.rateLimiter.updateClientSendingRate({});\n        this.standardRetryStrategy.recordSuccess(token);\n    }\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-retry/dist-es/AdaptiveRetryStrategy.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-retry/dist-es/ConfiguredRetryStrategy.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@smithy/util-retry/dist-es/ConfiguredRetryStrategy.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ConfiguredRetryStrategy: () => (/* binding */ ConfiguredRetryStrategy)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./node_modules/@smithy/util-retry/dist-es/constants.js\");\n/* harmony import */ var _StandardRetryStrategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StandardRetryStrategy */ \"./node_modules/@smithy/util-retry/dist-es/StandardRetryStrategy.js\");\n\n\nclass ConfiguredRetryStrategy extends _StandardRetryStrategy__WEBPACK_IMPORTED_MODULE_1__.StandardRetryStrategy {\n    constructor(maxAttempts, computeNextBackoffDelay = _constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_RETRY_DELAY_BASE) {\n        super(typeof maxAttempts === \"function\" ? maxAttempts : async () => maxAttempts);\n        if (typeof computeNextBackoffDelay === \"number\") {\n            this.computeNextBackoffDelay = () => computeNextBackoffDelay;\n        }\n        else {\n            this.computeNextBackoffDelay = computeNextBackoffDelay;\n        }\n    }\n    async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {\n        const token = await super.refreshRetryTokenForRetry(tokenToRenew, errorInfo);\n        token.getRetryDelay = () => this.computeNextBackoffDelay(token.getRetryCount());\n        return token;\n    }\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-retry/dist-es/ConfiguredRetryStrategy.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-retry/dist-es/DefaultRateLimiter.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@smithy/util-retry/dist-es/DefaultRateLimiter.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DefaultRateLimiter: () => (/* binding */ DefaultRateLimiter)\n/* harmony export */ });\n/* harmony import */ var _smithy_service_error_classification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/service-error-classification */ \"./node_modules/@smithy/service-error-classification/dist-es/index.js\");\n\nclass DefaultRateLimiter {\n    constructor(options) {\n        this.currentCapacity = 0;\n        this.enabled = false;\n        this.lastMaxRate = 0;\n        this.measuredTxRate = 0;\n        this.requestCount = 0;\n        this.lastTimestamp = 0;\n        this.timeWindow = 0;\n        this.beta = options?.beta ?? 0.7;\n        this.minCapacity = options?.minCapacity ?? 1;\n        this.minFillRate = options?.minFillRate ?? 0.5;\n        this.scaleConstant = options?.scaleConstant ?? 0.4;\n        this.smooth = options?.smooth ?? 0.8;\n        const currentTimeInSeconds = this.getCurrentTimeInSeconds();\n        this.lastThrottleTime = currentTimeInSeconds;\n        this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds());\n        this.fillRate = this.minFillRate;\n        this.maxCapacity = this.minCapacity;\n    }\n    getCurrentTimeInSeconds() {\n        return Date.now() / 1000;\n    }\n    async getSendToken() {\n        return this.acquireTokenBucket(1);\n    }\n    async acquireTokenBucket(amount) {\n        if (!this.enabled) {\n            return;\n        }\n        this.refillTokenBucket();\n        if (amount > this.currentCapacity) {\n            const delay = ((amount - this.currentCapacity) / this.fillRate) * 1000;\n            await new Promise((resolve) => setTimeout(resolve, delay));\n        }\n        this.currentCapacity = this.currentCapacity - amount;\n    }\n    refillTokenBucket() {\n        const timestamp = this.getCurrentTimeInSeconds();\n        if (!this.lastTimestamp) {\n            this.lastTimestamp = timestamp;\n            return;\n        }\n        const fillAmount = (timestamp - this.lastTimestamp) * this.fillRate;\n        this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + fillAmount);\n        this.lastTimestamp = timestamp;\n    }\n    updateClientSendingRate(response) {\n        let calculatedRate;\n        this.updateMeasuredRate();\n        if ((0,_smithy_service_error_classification__WEBPACK_IMPORTED_MODULE_0__.isThrottlingError)(response)) {\n            const rateToUse = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);\n            this.lastMaxRate = rateToUse;\n            this.calculateTimeWindow();\n            this.lastThrottleTime = this.getCurrentTimeInSeconds();\n            calculatedRate = this.cubicThrottle(rateToUse);\n            this.enableTokenBucket();\n        }\n        else {\n            this.calculateTimeWindow();\n            calculatedRate = this.cubicSuccess(this.getCurrentTimeInSeconds());\n        }\n        const newRate = Math.min(calculatedRate, 2 * this.measuredTxRate);\n        this.updateTokenBucketRate(newRate);\n    }\n    calculateTimeWindow() {\n        this.timeWindow = this.getPrecise(Math.pow((this.lastMaxRate * (1 - this.beta)) / this.scaleConstant, 1 / 3));\n    }\n    cubicThrottle(rateToUse) {\n        return this.getPrecise(rateToUse * this.beta);\n    }\n    cubicSuccess(timestamp) {\n        return this.getPrecise(this.scaleConstant * Math.pow(timestamp - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate);\n    }\n    enableTokenBucket() {\n        this.enabled = true;\n    }\n    updateTokenBucketRate(newRate) {\n        this.refillTokenBucket();\n        this.fillRate = Math.max(newRate, this.minFillRate);\n        this.maxCapacity = Math.max(newRate, this.minCapacity);\n        this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity);\n    }\n    updateMeasuredRate() {\n        const t = this.getCurrentTimeInSeconds();\n        const timeBucket = Math.floor(t * 2) / 2;\n        this.requestCount++;\n        if (timeBucket > this.lastTxRateBucket) {\n            const currentRate = this.requestCount / (timeBucket - this.lastTxRateBucket);\n            this.measuredTxRate = this.getPrecise(currentRate * this.smooth + this.measuredTxRate * (1 - this.smooth));\n            this.requestCount = 0;\n            this.lastTxRateBucket = timeBucket;\n        }\n    }\n    getPrecise(num) {\n        return parseFloat(num.toFixed(8));\n    }\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-retry/dist-es/DefaultRateLimiter.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-retry/dist-es/StandardRetryStrategy.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@smithy/util-retry/dist-es/StandardRetryStrategy.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   StandardRetryStrategy: () => (/* binding */ StandardRetryStrategy)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./node_modules/@smithy/util-retry/dist-es/config.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./node_modules/@smithy/util-retry/dist-es/constants.js\");\n/* harmony import */ var _defaultRetryBackoffStrategy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultRetryBackoffStrategy */ \"./node_modules/@smithy/util-retry/dist-es/defaultRetryBackoffStrategy.js\");\n/* harmony import */ var _defaultRetryToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaultRetryToken */ \"./node_modules/@smithy/util-retry/dist-es/defaultRetryToken.js\");\n\n\n\n\nclass StandardRetryStrategy {\n    constructor(maxAttempts) {\n        this.maxAttempts = maxAttempts;\n        this.mode = _config__WEBPACK_IMPORTED_MODULE_0__.RETRY_MODES.STANDARD;\n        this.capacity = _constants__WEBPACK_IMPORTED_MODULE_1__.INITIAL_RETRY_TOKENS;\n        this.retryBackoffStrategy = (0,_defaultRetryBackoffStrategy__WEBPACK_IMPORTED_MODULE_2__.getDefaultRetryBackoffStrategy)();\n        this.maxAttemptsProvider = typeof maxAttempts === \"function\" ? maxAttempts : async () => maxAttempts;\n    }\n    async acquireInitialRetryToken(retryTokenScope) {\n        return (0,_defaultRetryToken__WEBPACK_IMPORTED_MODULE_3__.createDefaultRetryToken)({\n            retryDelay: _constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_RETRY_DELAY_BASE,\n            retryCount: 0,\n        });\n    }\n    async refreshRetryTokenForRetry(token, errorInfo) {\n        const maxAttempts = await this.getMaxAttempts();\n        if (this.shouldRetry(token, errorInfo, maxAttempts)) {\n            const errorType = errorInfo.errorType;\n            this.retryBackoffStrategy.setDelayBase(errorType === \"THROTTLING\" ? _constants__WEBPACK_IMPORTED_MODULE_1__.THROTTLING_RETRY_DELAY_BASE : _constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_RETRY_DELAY_BASE);\n            const delayFromErrorType = this.retryBackoffStrategy.computeNextBackoffDelay(token.getRetryCount());\n            const retryDelay = errorInfo.retryAfterHint\n                ? Math.max(errorInfo.retryAfterHint.getTime() - Date.now() || 0, delayFromErrorType)\n                : delayFromErrorType;\n            const capacityCost = this.getCapacityCost(errorType);\n            this.capacity -= capacityCost;\n            return (0,_defaultRetryToken__WEBPACK_IMPORTED_MODULE_3__.createDefaultRetryToken)({\n                retryDelay,\n                retryCount: token.getRetryCount() + 1,\n                retryCost: capacityCost,\n            });\n        }\n        throw new Error(\"No retry token available\");\n    }\n    recordSuccess(token) {\n        this.capacity = Math.max(_constants__WEBPACK_IMPORTED_MODULE_1__.INITIAL_RETRY_TOKENS, this.capacity + (token.getRetryCost() ?? _constants__WEBPACK_IMPORTED_MODULE_1__.NO_RETRY_INCREMENT));\n    }\n    getCapacity() {\n        return this.capacity;\n    }\n    async getMaxAttempts() {\n        try {\n            return await this.maxAttemptsProvider();\n        }\n        catch (error) {\n            console.warn(`Max attempts provider could not resolve. Using default of ${_config__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_MAX_ATTEMPTS}`);\n            return _config__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_MAX_ATTEMPTS;\n        }\n    }\n    shouldRetry(tokenToRenew, errorInfo, maxAttempts) {\n        const attempts = tokenToRenew.getRetryCount() + 1;\n        return (attempts < maxAttempts &&\n            this.capacity >= this.getCapacityCost(errorInfo.errorType) &&\n            this.isRetryableError(errorInfo.errorType));\n    }\n    getCapacityCost(errorType) {\n        return errorType === \"TRANSIENT\" ? _constants__WEBPACK_IMPORTED_MODULE_1__.TIMEOUT_RETRY_COST : _constants__WEBPACK_IMPORTED_MODULE_1__.RETRY_COST;\n    }\n    isRetryableError(errorType) {\n        return errorType === \"THROTTLING\" || errorType === \"TRANSIENT\";\n    }\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-retry/dist-es/StandardRetryStrategy.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-retry/dist-es/config.js":
/*!***********************************************************!*\
  !*** ./node_modules/@smithy/util-retry/dist-es/config.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DEFAULT_MAX_ATTEMPTS: () => (/* binding */ DEFAULT_MAX_ATTEMPTS),\n/* harmony export */   DEFAULT_RETRY_MODE: () => (/* binding */ DEFAULT_RETRY_MODE),\n/* harmony export */   RETRY_MODES: () => (/* binding */ RETRY_MODES)\n/* harmony export */ });\nvar RETRY_MODES;\n(function (RETRY_MODES) {\n    RETRY_MODES[\"STANDARD\"] = \"standard\";\n    RETRY_MODES[\"ADAPTIVE\"] = \"adaptive\";\n})(RETRY_MODES || (RETRY_MODES = {}));\nconst DEFAULT_MAX_ATTEMPTS = 3;\nconst DEFAULT_RETRY_MODE = RETRY_MODES.STANDARD;\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-retry/dist-es/config.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-retry/dist-es/constants.js":
/*!**************************************************************!*\
  !*** ./node_modules/@smithy/util-retry/dist-es/constants.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DEFAULT_RETRY_DELAY_BASE: () => (/* binding */ DEFAULT_RETRY_DELAY_BASE),\n/* harmony export */   INITIAL_RETRY_TOKENS: () => (/* binding */ INITIAL_RETRY_TOKENS),\n/* harmony export */   INVOCATION_ID_HEADER: () => (/* binding */ INVOCATION_ID_HEADER),\n/* harmony export */   MAXIMUM_RETRY_DELAY: () => (/* binding */ MAXIMUM_RETRY_DELAY),\n/* harmony export */   NO_RETRY_INCREMENT: () => (/* binding */ NO_RETRY_INCREMENT),\n/* harmony export */   REQUEST_HEADER: () => (/* binding */ REQUEST_HEADER),\n/* harmony export */   RETRY_COST: () => (/* binding */ RETRY_COST),\n/* harmony export */   THROTTLING_RETRY_DELAY_BASE: () => (/* binding */ THROTTLING_RETRY_DELAY_BASE),\n/* harmony export */   TIMEOUT_RETRY_COST: () => (/* binding */ TIMEOUT_RETRY_COST)\n/* harmony export */ });\nconst DEFAULT_RETRY_DELAY_BASE = 100;\nconst MAXIMUM_RETRY_DELAY = 20 * 1000;\nconst THROTTLING_RETRY_DELAY_BASE = 500;\nconst INITIAL_RETRY_TOKENS = 500;\nconst RETRY_COST = 5;\nconst TIMEOUT_RETRY_COST = 10;\nconst NO_RETRY_INCREMENT = 1;\nconst INVOCATION_ID_HEADER = \"amz-sdk-invocation-id\";\nconst REQUEST_HEADER = \"amz-sdk-request\";\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-retry/dist-es/constants.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-retry/dist-es/defaultRetryBackoffStrategy.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@smithy/util-retry/dist-es/defaultRetryBackoffStrategy.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDefaultRetryBackoffStrategy: () => (/* binding */ getDefaultRetryBackoffStrategy)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./node_modules/@smithy/util-retry/dist-es/constants.js\");\n\nconst getDefaultRetryBackoffStrategy = () => {\n    let delayBase = _constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_RETRY_DELAY_BASE;\n    const computeNextBackoffDelay = (attempts) => {\n        return Math.floor(Math.min(_constants__WEBPACK_IMPORTED_MODULE_0__.MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase));\n    };\n    const setDelayBase = (delay) => {\n        delayBase = delay;\n    };\n    return {\n        computeNextBackoffDelay,\n        setDelayBase,\n    };\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-retry/dist-es/defaultRetryBackoffStrategy.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-retry/dist-es/defaultRetryToken.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@smithy/util-retry/dist-es/defaultRetryToken.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createDefaultRetryToken: () => (/* binding */ createDefaultRetryToken)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./node_modules/@smithy/util-retry/dist-es/constants.js\");\n\nconst createDefaultRetryToken = ({ retryDelay, retryCount, retryCost, }) => {\n    const getRetryCount = () => retryCount;\n    const getRetryDelay = () => Math.min(_constants__WEBPACK_IMPORTED_MODULE_0__.MAXIMUM_RETRY_DELAY, retryDelay);\n    const getRetryCost = () => retryCost;\n    return {\n        getRetryCount,\n        getRetryDelay,\n        getRetryCost,\n    };\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-retry/dist-es/defaultRetryToken.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-retry/dist-es/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@smithy/util-retry/dist-es/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AdaptiveRetryStrategy: () => (/* reexport safe */ _AdaptiveRetryStrategy__WEBPACK_IMPORTED_MODULE_0__.AdaptiveRetryStrategy),\n/* harmony export */   ConfiguredRetryStrategy: () => (/* reexport safe */ _ConfiguredRetryStrategy__WEBPACK_IMPORTED_MODULE_1__.ConfiguredRetryStrategy),\n/* harmony export */   DEFAULT_MAX_ATTEMPTS: () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_MAX_ATTEMPTS),\n/* harmony export */   DEFAULT_RETRY_DELAY_BASE: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_RETRY_DELAY_BASE),\n/* harmony export */   DEFAULT_RETRY_MODE: () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_RETRY_MODE),\n/* harmony export */   DefaultRateLimiter: () => (/* reexport safe */ _DefaultRateLimiter__WEBPACK_IMPORTED_MODULE_2__.DefaultRateLimiter),\n/* harmony export */   INITIAL_RETRY_TOKENS: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.INITIAL_RETRY_TOKENS),\n/* harmony export */   INVOCATION_ID_HEADER: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.INVOCATION_ID_HEADER),\n/* harmony export */   MAXIMUM_RETRY_DELAY: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.MAXIMUM_RETRY_DELAY),\n/* harmony export */   NO_RETRY_INCREMENT: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.NO_RETRY_INCREMENT),\n/* harmony export */   REQUEST_HEADER: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.REQUEST_HEADER),\n/* harmony export */   RETRY_COST: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.RETRY_COST),\n/* harmony export */   RETRY_MODES: () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_4__.RETRY_MODES),\n/* harmony export */   StandardRetryStrategy: () => (/* reexport safe */ _StandardRetryStrategy__WEBPACK_IMPORTED_MODULE_3__.StandardRetryStrategy),\n/* harmony export */   THROTTLING_RETRY_DELAY_BASE: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.THROTTLING_RETRY_DELAY_BASE),\n/* harmony export */   TIMEOUT_RETRY_COST: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.TIMEOUT_RETRY_COST)\n/* harmony export */ });\n/* harmony import */ var _AdaptiveRetryStrategy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdaptiveRetryStrategy */ \"./node_modules/@smithy/util-retry/dist-es/AdaptiveRetryStrategy.js\");\n/* harmony import */ var _ConfiguredRetryStrategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConfiguredRetryStrategy */ \"./node_modules/@smithy/util-retry/dist-es/ConfiguredRetryStrategy.js\");\n/* harmony import */ var _DefaultRateLimiter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DefaultRateLimiter */ \"./node_modules/@smithy/util-retry/dist-es/DefaultRateLimiter.js\");\n/* harmony import */ var _StandardRetryStrategy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StandardRetryStrategy */ \"./node_modules/@smithy/util-retry/dist-es/StandardRetryStrategy.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ \"./node_modules/@smithy/util-retry/dist-es/config.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ \"./node_modules/@smithy/util-retry/dist-es/constants.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types */ \"./node_modules/@smithy/util-retry/dist-es/types.js\");\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-retry/dist-es/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-retry/dist-es/types.js":
/*!**********************************************************!*\
  !*** ./node_modules/@smithy/util-retry/dist-es/types.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-retry/dist-es/types.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-stream/dist-es/blob/Uint8ArrayBlobAdapter.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@smithy/util-stream/dist-es/blob/Uint8ArrayBlobAdapter.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Uint8ArrayBlobAdapter: () => (/* binding */ Uint8ArrayBlobAdapter)\n/* harmony export */ });\n/* harmony import */ var _transforms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transforms */ \"./node_modules/@smithy/util-stream/dist-es/blob/transforms.js\");\n\nclass Uint8ArrayBlobAdapter extends Uint8Array {\n    static fromString(source, encoding = \"utf-8\") {\n        switch (typeof source) {\n            case \"string\":\n                return (0,_transforms__WEBPACK_IMPORTED_MODULE_0__.transformFromString)(source, encoding);\n            default:\n                throw new Error(`Unsupported conversion from ${typeof source} to Uint8ArrayBlobAdapter.`);\n        }\n    }\n    static mutate(source) {\n        Object.setPrototypeOf(source, Uint8ArrayBlobAdapter.prototype);\n        return source;\n    }\n    transformToString(encoding = \"utf-8\") {\n        return (0,_transforms__WEBPACK_IMPORTED_MODULE_0__.transformToString)(this, encoding);\n    }\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-stream/dist-es/blob/Uint8ArrayBlobAdapter.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-stream/dist-es/blob/transforms.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@smithy/util-stream/dist-es/blob/transforms.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   transformFromString: () => (/* binding */ transformFromString),\n/* harmony export */   transformToString: () => (/* binding */ transformToString)\n/* harmony export */ });\n/* harmony import */ var _smithy_util_base64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-base64 */ \"./node_modules/@smithy/util-base64/dist-es/index.js\");\n/* harmony import */ var _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/util-utf8 */ \"./node_modules/@smithy/util-utf8/dist-es/index.js\");\n/* harmony import */ var _Uint8ArrayBlobAdapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Uint8ArrayBlobAdapter */ \"./node_modules/@smithy/util-stream/dist-es/blob/Uint8ArrayBlobAdapter.js\");\n\n\n\nfunction transformToString(payload, encoding = \"utf-8\") {\n    if (encoding === \"base64\") {\n        return (0,_smithy_util_base64__WEBPACK_IMPORTED_MODULE_0__.toBase64)(payload);\n    }\n    return (0,_smithy_util_utf8__WEBPACK_IMPORTED_MODULE_1__.toUtf8)(payload);\n}\nfunction transformFromString(str, encoding) {\n    if (encoding === \"base64\") {\n        return _Uint8ArrayBlobAdapter__WEBPACK_IMPORTED_MODULE_2__.Uint8ArrayBlobAdapter.mutate((0,_smithy_util_base64__WEBPACK_IMPORTED_MODULE_0__.fromBase64)(str));\n    }\n    return _Uint8ArrayBlobAdapter__WEBPACK_IMPORTED_MODULE_2__.Uint8ArrayBlobAdapter.mutate((0,_smithy_util_utf8__WEBPACK_IMPORTED_MODULE_1__.fromUtf8)(str));\n}\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-stream/dist-es/blob/transforms.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-stream/dist-es/getAwsChunkedEncodingStream.browser.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@smithy/util-stream/dist-es/getAwsChunkedEncodingStream.browser.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAwsChunkedEncodingStream: () => (/* binding */ getAwsChunkedEncodingStream)\n/* harmony export */ });\nconst getAwsChunkedEncodingStream = (readableStream, options) => {\n    const { base64Encoder, bodyLengthChecker, checksumAlgorithmFn, checksumLocationName, streamHasher } = options;\n    const checksumRequired = base64Encoder !== undefined &&\n        bodyLengthChecker !== undefined &&\n        checksumAlgorithmFn !== undefined &&\n        checksumLocationName !== undefined &&\n        streamHasher !== undefined;\n    const digest = checksumRequired ? streamHasher(checksumAlgorithmFn, readableStream) : undefined;\n    const reader = readableStream.getReader();\n    return new ReadableStream({\n        async pull(controller) {\n            const { value, done } = await reader.read();\n            if (done) {\n                controller.enqueue(`0\\r\\n`);\n                if (checksumRequired) {\n                    const checksum = base64Encoder(await digest);\n                    controller.enqueue(`${checksumLocationName}:${checksum}\\r\\n`);\n                    controller.enqueue(`\\r\\n`);\n                }\n                controller.close();\n            }\n            else {\n                controller.enqueue(`${(bodyLengthChecker(value) || 0).toString(16)}\\r\\n${value}\\r\\n`);\n            }\n        },\n    });\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-stream/dist-es/getAwsChunkedEncodingStream.browser.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-stream/dist-es/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@smithy/util-stream/dist-es/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Uint8ArrayBlobAdapter: () => (/* reexport safe */ _blob_Uint8ArrayBlobAdapter__WEBPACK_IMPORTED_MODULE_0__.Uint8ArrayBlobAdapter),\n/* harmony export */   getAwsChunkedEncodingStream: () => (/* reexport safe */ _getAwsChunkedEncodingStream__WEBPACK_IMPORTED_MODULE_1__.getAwsChunkedEncodingStream),\n/* harmony export */   sdkStreamMixin: () => (/* reexport safe */ _sdk_stream_mixin__WEBPACK_IMPORTED_MODULE_2__.sdkStreamMixin)\n/* harmony export */ });\n/* harmony import */ var _blob_Uint8ArrayBlobAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blob/Uint8ArrayBlobAdapter */ \"./node_modules/@smithy/util-stream/dist-es/blob/Uint8ArrayBlobAdapter.js\");\n/* harmony import */ var _getAwsChunkedEncodingStream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getAwsChunkedEncodingStream */ \"./node_modules/@smithy/util-stream/dist-es/getAwsChunkedEncodingStream.browser.js\");\n/* harmony import */ var _sdk_stream_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sdk-stream-mixin */ \"./node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.browser.js\");\n\n\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-stream/dist-es/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.browser.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.browser.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sdkStreamMixin: () => (/* binding */ sdkStreamMixin)\n/* harmony export */ });\n/* harmony import */ var _smithy_fetch_http_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/fetch-http-handler */ \"./node_modules/@smithy/fetch-http-handler/dist-es/index.js\");\n/* harmony import */ var _smithy_util_base64__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/util-base64 */ \"./node_modules/@smithy/util-base64/dist-es/index.js\");\n/* harmony import */ var _smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smithy/util-hex-encoding */ \"./node_modules/@smithy/util-hex-encoding/dist-es/index.js\");\n/* harmony import */ var _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smithy/util-utf8 */ \"./node_modules/@smithy/util-utf8/dist-es/index.js\");\n\n\n\n\nconst ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED = \"The stream has already been transformed.\";\nconst sdkStreamMixin = (stream) => {\n    if (!isBlobInstance(stream) && !isReadableStreamInstance(stream)) {\n        const name = stream?.__proto__?.constructor?.name || stream;\n        throw new Error(`Unexpected stream implementation, expect Blob or ReadableStream, got ${name}`);\n    }\n    let transformed = false;\n    const transformToByteArray = async () => {\n        if (transformed) {\n            throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);\n        }\n        transformed = true;\n        return await (0,_smithy_fetch_http_handler__WEBPACK_IMPORTED_MODULE_0__.streamCollector)(stream);\n    };\n    const blobToWebStream = (blob) => {\n        if (typeof blob.stream !== \"function\") {\n            throw new Error(\"Cannot transform payload Blob to web stream. Please make sure the Blob.stream() is polyfilled.\\n\" +\n                \"If you are using React Native, this API is not yet supported, see: https://react-native.canny.io/feature-requests/p/fetch-streaming-body\");\n        }\n        return blob.stream();\n    };\n    return Object.assign(stream, {\n        transformToByteArray: transformToByteArray,\n        transformToString: async (encoding) => {\n            const buf = await transformToByteArray();\n            if (encoding === \"base64\") {\n                return (0,_smithy_util_base64__WEBPACK_IMPORTED_MODULE_1__.toBase64)(buf);\n            }\n            else if (encoding === \"hex\") {\n                return (0,_smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_2__.toHex)(buf);\n            }\n            else if (encoding === undefined || encoding === \"utf8\" || encoding === \"utf-8\") {\n                return (0,_smithy_util_utf8__WEBPACK_IMPORTED_MODULE_3__.toUtf8)(buf);\n            }\n            else if (typeof TextDecoder === \"function\") {\n                return new TextDecoder(encoding).decode(buf);\n            }\n            else {\n                throw new Error(\"TextDecoder is not available, please make sure polyfill is provided.\");\n            }\n        },\n        transformToWebStream: () => {\n            if (transformed) {\n                throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);\n            }\n            transformed = true;\n            if (isBlobInstance(stream)) {\n                return blobToWebStream(stream);\n            }\n            else if (isReadableStreamInstance(stream)) {\n                return stream;\n            }\n            else {\n                throw new Error(`Cannot transform payload to web stream, got ${stream}`);\n            }\n        },\n    });\n};\nconst isBlobInstance = (stream) => typeof Blob === \"function\" && stream instanceof Blob;\nconst isReadableStreamInstance = (stream) => typeof ReadableStream === \"function\" && stream instanceof ReadableStream;\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.browser.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-uri-escape/dist-es/escape-uri-path.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@smithy/util-uri-escape/dist-es/escape-uri-path.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   escapeUriPath: () => (/* binding */ escapeUriPath)\n/* harmony export */ });\n/* harmony import */ var _escape_uri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./escape-uri */ \"./node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js\");\n\nconst escapeUriPath = (uri) => uri.split(\"/\").map(_escape_uri__WEBPACK_IMPORTED_MODULE_0__.escapeUri).join(\"/\");\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-uri-escape/dist-es/escape-uri-path.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js":
/*!********************************************************************!*\
  !*** ./node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   escapeUri: () => (/* binding */ escapeUri)\n/* harmony export */ });\nconst escapeUri = (uri) => encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode);\nconst hexEncode = (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`;\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-uri-escape/dist-es/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@smithy/util-uri-escape/dist-es/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   escapeUri: () => (/* reexport safe */ _escape_uri__WEBPACK_IMPORTED_MODULE_0__.escapeUri),\n/* harmony export */   escapeUriPath: () => (/* reexport safe */ _escape_uri_path__WEBPACK_IMPORTED_MODULE_1__.escapeUriPath)\n/* harmony export */ });\n/* harmony import */ var _escape_uri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./escape-uri */ \"./node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js\");\n/* harmony import */ var _escape_uri_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./escape-uri-path */ \"./node_modules/@smithy/util-uri-escape/dist-es/escape-uri-path.js\");\n\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-uri-escape/dist-es/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js":
/*!********************************************************************!*\
  !*** ./node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromUtf8: () => (/* binding */ fromUtf8)\n/* harmony export */ });\nconst fromUtf8 = (input) => new TextEncoder().encode(input);\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-utf8/dist-es/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@smithy/util-utf8/dist-es/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromUtf8: () => (/* reexport safe */ _fromUtf8__WEBPACK_IMPORTED_MODULE_0__.fromUtf8),\n/* harmony export */   toUint8Array: () => (/* reexport safe */ _toUint8Array__WEBPACK_IMPORTED_MODULE_1__.toUint8Array),\n/* harmony export */   toUtf8: () => (/* reexport safe */ _toUtf8__WEBPACK_IMPORTED_MODULE_2__.toUtf8)\n/* harmony export */ });\n/* harmony import */ var _fromUtf8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fromUtf8 */ \"./node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js\");\n/* harmony import */ var _toUint8Array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toUint8Array */ \"./node_modules/@smithy/util-utf8/dist-es/toUint8Array.js\");\n/* harmony import */ var _toUtf8__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toUtf8 */ \"./node_modules/@smithy/util-utf8/dist-es/toUtf8.browser.js\");\n\n\n\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-utf8/dist-es/index.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-utf8/dist-es/toUint8Array.js":
/*!****************************************************************!*\
  !*** ./node_modules/@smithy/util-utf8/dist-es/toUint8Array.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toUint8Array: () => (/* binding */ toUint8Array)\n/* harmony export */ });\n/* harmony import */ var _fromUtf8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fromUtf8 */ \"./node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js\");\n\nconst toUint8Array = (data) => {\n    if (typeof data === \"string\") {\n        return (0,_fromUtf8__WEBPACK_IMPORTED_MODULE_0__.fromUtf8)(data);\n    }\n    if (ArrayBuffer.isView(data)) {\n        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);\n    }\n    return new Uint8Array(data);\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-utf8/dist-es/toUint8Array.js?");

/***/ }),

/***/ "./node_modules/@smithy/util-utf8/dist-es/toUtf8.browser.js":
/*!******************************************************************!*\
  !*** ./node_modules/@smithy/util-utf8/dist-es/toUtf8.browser.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toUtf8: () => (/* binding */ toUtf8)\n/* harmony export */ });\nconst toUtf8 = (input) => {\n    if (typeof input === \"string\") {\n        return input;\n    }\n    if (typeof input !== \"object\" || typeof input.byteOffset !== \"number\" || typeof input.byteLength !== \"number\") {\n        throw new Error(\"@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.\");\n    }\n    return new TextDecoder(\"utf-8\").decode(input);\n};\n\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@smithy/util-utf8/dist-es/toUtf8.browser.js?");

/***/ }),

/***/ "./node_modules/bowser/es5.js":
/*!************************************!*\
  !*** ./node_modules/bowser/es5.js ***!
  \************************************/
/***/ (function(module) {

eval("!function(e,t){ true?module.exports=t():0}(this,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&\"object\"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,\"default\",{enumerable:!0,value:e}),2&t&&\"string\"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,\"a\",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p=\"\",r(r.s=90)}({17:function(e,t,r){\"use strict\";t.__esModule=!0,t.default=void 0;var n=r(18),i=function(){function e(){}return e.getFirstMatch=function(e,t){var r=t.match(e);return r&&r.length>0&&r[1]||\"\"},e.getSecondMatch=function(e,t){var r=t.match(e);return r&&r.length>1&&r[2]||\"\"},e.matchAndReturnConst=function(e,t,r){if(e.test(t))return r},e.getWindowsVersionName=function(e){switch(e){case\"NT\":return\"NT\";case\"XP\":return\"XP\";case\"NT 5.0\":return\"2000\";case\"NT 5.1\":return\"XP\";case\"NT 5.2\":return\"2003\";case\"NT 6.0\":return\"Vista\";case\"NT 6.1\":return\"7\";case\"NT 6.2\":return\"8\";case\"NT 6.3\":return\"8.1\";case\"NT 10.0\":return\"10\";default:return}},e.getMacOSVersionName=function(e){var t=e.split(\".\").splice(0,2).map((function(e){return parseInt(e,10)||0}));if(t.push(0),10===t[0])switch(t[1]){case 5:return\"Leopard\";case 6:return\"Snow Leopard\";case 7:return\"Lion\";case 8:return\"Mountain Lion\";case 9:return\"Mavericks\";case 10:return\"Yosemite\";case 11:return\"El Capitan\";case 12:return\"Sierra\";case 13:return\"High Sierra\";case 14:return\"Mojave\";case 15:return\"Catalina\";default:return}},e.getAndroidVersionName=function(e){var t=e.split(\".\").splice(0,2).map((function(e){return parseInt(e,10)||0}));if(t.push(0),!(1===t[0]&&t[1]<5))return 1===t[0]&&t[1]<6?\"Cupcake\":1===t[0]&&t[1]>=6?\"Donut\":2===t[0]&&t[1]<2?\"Eclair\":2===t[0]&&2===t[1]?\"Froyo\":2===t[0]&&t[1]>2?\"Gingerbread\":3===t[0]?\"Honeycomb\":4===t[0]&&t[1]<1?\"Ice Cream Sandwich\":4===t[0]&&t[1]<4?\"Jelly Bean\":4===t[0]&&t[1]>=4?\"KitKat\":5===t[0]?\"Lollipop\":6===t[0]?\"Marshmallow\":7===t[0]?\"Nougat\":8===t[0]?\"Oreo\":9===t[0]?\"Pie\":void 0},e.getVersionPrecision=function(e){return e.split(\".\").length},e.compareVersions=function(t,r,n){void 0===n&&(n=!1);var i=e.getVersionPrecision(t),s=e.getVersionPrecision(r),a=Math.max(i,s),o=0,u=e.map([t,r],(function(t){var r=a-e.getVersionPrecision(t),n=t+new Array(r+1).join(\".0\");return e.map(n.split(\".\"),(function(e){return new Array(20-e.length).join(\"0\")+e})).reverse()}));for(n&&(o=a-Math.min(i,s)),a-=1;a>=o;){if(u[0][a]>u[1][a])return 1;if(u[0][a]===u[1][a]){if(a===o)return 0;a-=1}else if(u[0][a]<u[1][a])return-1}},e.map=function(e,t){var r,n=[];if(Array.prototype.map)return Array.prototype.map.call(e,t);for(r=0;r<e.length;r+=1)n.push(t(e[r]));return n},e.find=function(e,t){var r,n;if(Array.prototype.find)return Array.prototype.find.call(e,t);for(r=0,n=e.length;r<n;r+=1){var i=e[r];if(t(i,r))return i}},e.assign=function(e){for(var t,r,n=e,i=arguments.length,s=new Array(i>1?i-1:0),a=1;a<i;a++)s[a-1]=arguments[a];if(Object.assign)return Object.assign.apply(Object,[e].concat(s));var o=function(){var e=s[t];\"object\"==typeof e&&null!==e&&Object.keys(e).forEach((function(t){n[t]=e[t]}))};for(t=0,r=s.length;t<r;t+=1)o();return e},e.getBrowserAlias=function(e){return n.BROWSER_ALIASES_MAP[e]},e.getBrowserTypeByAlias=function(e){return n.BROWSER_MAP[e]||\"\"},e}();t.default=i,e.exports=t.default},18:function(e,t,r){\"use strict\";t.__esModule=!0,t.ENGINE_MAP=t.OS_MAP=t.PLATFORMS_MAP=t.BROWSER_MAP=t.BROWSER_ALIASES_MAP=void 0;t.BROWSER_ALIASES_MAP={\"Amazon Silk\":\"amazon_silk\",\"Android Browser\":\"android\",Bada:\"bada\",BlackBerry:\"blackberry\",Chrome:\"chrome\",Chromium:\"chromium\",Electron:\"electron\",Epiphany:\"epiphany\",Firefox:\"firefox\",Focus:\"focus\",Generic:\"generic\",\"Google Search\":\"google_search\",Googlebot:\"googlebot\",\"Internet Explorer\":\"ie\",\"K-Meleon\":\"k_meleon\",Maxthon:\"maxthon\",\"Microsoft Edge\":\"edge\",\"MZ Browser\":\"mz\",\"NAVER Whale Browser\":\"naver\",Opera:\"opera\",\"Opera Coast\":\"opera_coast\",PhantomJS:\"phantomjs\",Puffin:\"puffin\",QupZilla:\"qupzilla\",QQ:\"qq\",QQLite:\"qqlite\",Safari:\"safari\",Sailfish:\"sailfish\",\"Samsung Internet for Android\":\"samsung_internet\",SeaMonkey:\"seamonkey\",Sleipnir:\"sleipnir\",Swing:\"swing\",Tizen:\"tizen\",\"UC Browser\":\"uc\",Vivaldi:\"vivaldi\",\"WebOS Browser\":\"webos\",WeChat:\"wechat\",\"Yandex Browser\":\"yandex\",Roku:\"roku\"};t.BROWSER_MAP={amazon_silk:\"Amazon Silk\",android:\"Android Browser\",bada:\"Bada\",blackberry:\"BlackBerry\",chrome:\"Chrome\",chromium:\"Chromium\",electron:\"Electron\",epiphany:\"Epiphany\",firefox:\"Firefox\",focus:\"Focus\",generic:\"Generic\",googlebot:\"Googlebot\",google_search:\"Google Search\",ie:\"Internet Explorer\",k_meleon:\"K-Meleon\",maxthon:\"Maxthon\",edge:\"Microsoft Edge\",mz:\"MZ Browser\",naver:\"NAVER Whale Browser\",opera:\"Opera\",opera_coast:\"Opera Coast\",phantomjs:\"PhantomJS\",puffin:\"Puffin\",qupzilla:\"QupZilla\",qq:\"QQ Browser\",qqlite:\"QQ Browser Lite\",safari:\"Safari\",sailfish:\"Sailfish\",samsung_internet:\"Samsung Internet for Android\",seamonkey:\"SeaMonkey\",sleipnir:\"Sleipnir\",swing:\"Swing\",tizen:\"Tizen\",uc:\"UC Browser\",vivaldi:\"Vivaldi\",webos:\"WebOS Browser\",wechat:\"WeChat\",yandex:\"Yandex Browser\"};t.PLATFORMS_MAP={tablet:\"tablet\",mobile:\"mobile\",desktop:\"desktop\",tv:\"tv\"};t.OS_MAP={WindowsPhone:\"Windows Phone\",Windows:\"Windows\",MacOS:\"macOS\",iOS:\"iOS\",Android:\"Android\",WebOS:\"WebOS\",BlackBerry:\"BlackBerry\",Bada:\"Bada\",Tizen:\"Tizen\",Linux:\"Linux\",ChromeOS:\"Chrome OS\",PlayStation4:\"PlayStation 4\",Roku:\"Roku\"};t.ENGINE_MAP={EdgeHTML:\"EdgeHTML\",Blink:\"Blink\",Trident:\"Trident\",Presto:\"Presto\",Gecko:\"Gecko\",WebKit:\"WebKit\"}},90:function(e,t,r){\"use strict\";t.__esModule=!0,t.default=void 0;var n,i=(n=r(91))&&n.__esModule?n:{default:n},s=r(18);function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,\"value\"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=function(){function e(){}var t,r,n;return e.getParser=function(e,t){if(void 0===t&&(t=!1),\"string\"!=typeof e)throw new Error(\"UserAgent should be a string\");return new i.default(e,t)},e.parse=function(e){return new i.default(e).getResult()},t=e,n=[{key:\"BROWSER_MAP\",get:function(){return s.BROWSER_MAP}},{key:\"ENGINE_MAP\",get:function(){return s.ENGINE_MAP}},{key:\"OS_MAP\",get:function(){return s.OS_MAP}},{key:\"PLATFORMS_MAP\",get:function(){return s.PLATFORMS_MAP}}],(r=null)&&a(t.prototype,r),n&&a(t,n),e}();t.default=o,e.exports=t.default},91:function(e,t,r){\"use strict\";t.__esModule=!0,t.default=void 0;var n=u(r(92)),i=u(r(93)),s=u(r(94)),a=u(r(95)),o=u(r(17));function u(e){return e&&e.__esModule?e:{default:e}}var d=function(){function e(e,t){if(void 0===t&&(t=!1),null==e||\"\"===e)throw new Error(\"UserAgent parameter can't be empty\");this._ua=e,this.parsedResult={},!0!==t&&this.parse()}var t=e.prototype;return t.getUA=function(){return this._ua},t.test=function(e){return e.test(this._ua)},t.parseBrowser=function(){var e=this;this.parsedResult.browser={};var t=o.default.find(n.default,(function(t){if(\"function\"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error(\"Browser's test function is not valid\")}));return t&&(this.parsedResult.browser=t.describe(this.getUA())),this.parsedResult.browser},t.getBrowser=function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()},t.getBrowserName=function(e){return e?String(this.getBrowser().name).toLowerCase()||\"\":this.getBrowser().name||\"\"},t.getBrowserVersion=function(){return this.getBrowser().version},t.getOS=function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()},t.parseOS=function(){var e=this;this.parsedResult.os={};var t=o.default.find(i.default,(function(t){if(\"function\"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error(\"Browser's test function is not valid\")}));return t&&(this.parsedResult.os=t.describe(this.getUA())),this.parsedResult.os},t.getOSName=function(e){var t=this.getOS().name;return e?String(t).toLowerCase()||\"\":t||\"\"},t.getOSVersion=function(){return this.getOS().version},t.getPlatform=function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()},t.getPlatformType=function(e){void 0===e&&(e=!1);var t=this.getPlatform().type;return e?String(t).toLowerCase()||\"\":t||\"\"},t.parsePlatform=function(){var e=this;this.parsedResult.platform={};var t=o.default.find(s.default,(function(t){if(\"function\"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error(\"Browser's test function is not valid\")}));return t&&(this.parsedResult.platform=t.describe(this.getUA())),this.parsedResult.platform},t.getEngine=function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()},t.getEngineName=function(e){return e?String(this.getEngine().name).toLowerCase()||\"\":this.getEngine().name||\"\"},t.parseEngine=function(){var e=this;this.parsedResult.engine={};var t=o.default.find(a.default,(function(t){if(\"function\"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error(\"Browser's test function is not valid\")}));return t&&(this.parsedResult.engine=t.describe(this.getUA())),this.parsedResult.engine},t.parse=function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this},t.getResult=function(){return o.default.assign({},this.parsedResult)},t.satisfies=function(e){var t=this,r={},n=0,i={},s=0;if(Object.keys(e).forEach((function(t){var a=e[t];\"string\"==typeof a?(i[t]=a,s+=1):\"object\"==typeof a&&(r[t]=a,n+=1)})),n>0){var a=Object.keys(r),u=o.default.find(a,(function(e){return t.isOS(e)}));if(u){var d=this.satisfies(r[u]);if(void 0!==d)return d}var c=o.default.find(a,(function(e){return t.isPlatform(e)}));if(c){var f=this.satisfies(r[c]);if(void 0!==f)return f}}if(s>0){var l=Object.keys(i),h=o.default.find(l,(function(e){return t.isBrowser(e,!0)}));if(void 0!==h)return this.compareVersion(i[h])}},t.isBrowser=function(e,t){void 0===t&&(t=!1);var r=this.getBrowserName().toLowerCase(),n=e.toLowerCase(),i=o.default.getBrowserTypeByAlias(n);return t&&i&&(n=i.toLowerCase()),n===r},t.compareVersion=function(e){var t=[0],r=e,n=!1,i=this.getBrowserVersion();if(\"string\"==typeof i)return\">\"===e[0]||\"<\"===e[0]?(r=e.substr(1),\"=\"===e[1]?(n=!0,r=e.substr(2)):t=[],\">\"===e[0]?t.push(1):t.push(-1)):\"=\"===e[0]?r=e.substr(1):\"~\"===e[0]&&(n=!0,r=e.substr(1)),t.indexOf(o.default.compareVersions(i,r,n))>-1},t.isOS=function(e){return this.getOSName(!0)===String(e).toLowerCase()},t.isPlatform=function(e){return this.getPlatformType(!0)===String(e).toLowerCase()},t.isEngine=function(e){return this.getEngineName(!0)===String(e).toLowerCase()},t.is=function(e,t){return void 0===t&&(t=!1),this.isBrowser(e,t)||this.isOS(e)||this.isPlatform(e)},t.some=function(e){var t=this;return void 0===e&&(e=[]),e.some((function(e){return t.is(e)}))},e}();t.default=d,e.exports=t.default},92:function(e,t,r){\"use strict\";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n};var s=/version\\/(\\d+(\\.?_?\\d+)+)/i,a=[{test:[/googlebot/i],describe:function(e){var t={name:\"Googlebot\"},r=i.default.getFirstMatch(/googlebot\\/(\\d+(\\.\\d+))/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/opera/i],describe:function(e){var t={name:\"Opera\"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:opera)[\\s/](\\d+(\\.?_?\\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opr\\/|opios/i],describe:function(e){var t={name:\"Opera\"},r=i.default.getFirstMatch(/(?:opr|opios)[\\s/](\\S+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/SamsungBrowser/i],describe:function(e){var t={name:\"Samsung Internet for Android\"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:SamsungBrowser)[\\s/](\\d+(\\.?_?\\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Whale/i],describe:function(e){var t={name:\"NAVER Whale Browser\"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:whale)[\\s/](\\d+(?:\\.\\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MZBrowser/i],describe:function(e){var t={name:\"MZ Browser\"},r=i.default.getFirstMatch(/(?:MZBrowser)[\\s/](\\d+(?:\\.\\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/focus/i],describe:function(e){var t={name:\"Focus\"},r=i.default.getFirstMatch(/(?:focus)[\\s/](\\d+(?:\\.\\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/swing/i],describe:function(e){var t={name:\"Swing\"},r=i.default.getFirstMatch(/(?:swing)[\\s/](\\d+(?:\\.\\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/coast/i],describe:function(e){var t={name:\"Opera Coast\"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:coast)[\\s/](\\d+(\\.?_?\\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opt\\/\\d+(?:.?_?\\d+)+/i],describe:function(e){var t={name:\"Opera Touch\"},r=i.default.getFirstMatch(/(?:opt)[\\s/](\\d+(\\.?_?\\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/yabrowser/i],describe:function(e){var t={name:\"Yandex Browser\"},r=i.default.getFirstMatch(/(?:yabrowser)[\\s/](\\d+(\\.?_?\\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/ucbrowser/i],describe:function(e){var t={name:\"UC Browser\"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:ucbrowser)[\\s/](\\d+(\\.?_?\\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Maxthon|mxios/i],describe:function(e){var t={name:\"Maxthon\"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:Maxthon|mxios)[\\s/](\\d+(\\.?_?\\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/epiphany/i],describe:function(e){var t={name:\"Epiphany\"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:epiphany)[\\s/](\\d+(\\.?_?\\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/puffin/i],describe:function(e){var t={name:\"Puffin\"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:puffin)[\\s/](\\d+(\\.?_?\\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sleipnir/i],describe:function(e){var t={name:\"Sleipnir\"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:sleipnir)[\\s/](\\d+(\\.?_?\\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/k-meleon/i],describe:function(e){var t={name:\"K-Meleon\"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:k-meleon)[\\s/](\\d+(\\.?_?\\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/micromessenger/i],describe:function(e){var t={name:\"WeChat\"},r=i.default.getFirstMatch(/(?:micromessenger)[\\s/](\\d+(\\.?_?\\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/qqbrowser/i],describe:function(e){var t={name:/qqbrowserlite/i.test(e)?\"QQ Browser Lite\":\"QQ Browser\"},r=i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\\d+(\\.?_?\\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/msie|trident/i],describe:function(e){var t={name:\"Internet Explorer\"},r=i.default.getFirstMatch(/(?:msie |rv:)(\\d+(\\.?_?\\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/\\sedg\\//i],describe:function(e){var t={name:\"Microsoft Edge\"},r=i.default.getFirstMatch(/\\sedg\\/(\\d+(\\.?_?\\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/edg([ea]|ios)/i],describe:function(e){var t={name:\"Microsoft Edge\"},r=i.default.getSecondMatch(/edg([ea]|ios)\\/(\\d+(\\.?_?\\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/vivaldi/i],describe:function(e){var t={name:\"Vivaldi\"},r=i.default.getFirstMatch(/vivaldi\\/(\\d+(\\.?_?\\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/seamonkey/i],describe:function(e){var t={name:\"SeaMonkey\"},r=i.default.getFirstMatch(/seamonkey\\/(\\d+(\\.?_?\\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sailfish/i],describe:function(e){var t={name:\"Sailfish\"},r=i.default.getFirstMatch(/sailfish\\s?browser\\/(\\d+(\\.\\d+)?)/i,e);return r&&(t.version=r),t}},{test:[/silk/i],describe:function(e){var t={name:\"Amazon Silk\"},r=i.default.getFirstMatch(/silk\\/(\\d+(\\.?_?\\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/phantom/i],describe:function(e){var t={name:\"PhantomJS\"},r=i.default.getFirstMatch(/phantomjs\\/(\\d+(\\.?_?\\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/slimerjs/i],describe:function(e){var t={name:\"SlimerJS\"},r=i.default.getFirstMatch(/slimerjs\\/(\\d+(\\.?_?\\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/blackberry|\\bbb\\d+/i,/rim\\stablet/i],describe:function(e){var t={name:\"BlackBerry\"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/blackberry[\\d]+\\/(\\d+(\\.?_?\\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t={name:\"WebOS Browser\"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\\/(\\d+(\\.?_?\\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/bada/i],describe:function(e){var t={name:\"Bada\"},r=i.default.getFirstMatch(/dolfin\\/(\\d+(\\.?_?\\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/tizen/i],describe:function(e){var t={name:\"Tizen\"},r=i.default.getFirstMatch(/(?:tizen\\s?)?browser\\/(\\d+(\\.?_?\\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/qupzilla/i],describe:function(e){var t={name:\"QupZilla\"},r=i.default.getFirstMatch(/(?:qupzilla)[\\s/](\\d+(\\.?_?\\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/firefox|iceweasel|fxios/i],describe:function(e){var t={name:\"Firefox\"},r=i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\\s/](\\d+(\\.?_?\\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/electron/i],describe:function(e){var t={name:\"Electron\"},r=i.default.getFirstMatch(/(?:electron)\\/(\\d+(\\.?_?\\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MiuiBrowser/i],describe:function(e){var t={name:\"Miui\"},r=i.default.getFirstMatch(/(?:MiuiBrowser)[\\s/](\\d+(\\.?_?\\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/chromium/i],describe:function(e){var t={name:\"Chromium\"},r=i.default.getFirstMatch(/(?:chromium)[\\s/](\\d+(\\.?_?\\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/chrome|crios|crmo/i],describe:function(e){var t={name:\"Chrome\"},r=i.default.getFirstMatch(/(?:chrome|crios|crmo)\\/(\\d+(\\.?_?\\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/GSA/i],describe:function(e){var t={name:\"Google Search\"},r=i.default.getFirstMatch(/(?:GSA)\\/(\\d+(\\.?_?\\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t={name:\"Android Browser\"},r=i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/playstation 4/i],describe:function(e){var t={name:\"PlayStation 4\"},r=i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/safari|applewebkit/i],describe:function(e){var t={name:\"Safari\"},r=i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/.*/i],describe:function(e){var t=-1!==e.search(\"\\\\(\")?/^(.*)\\/(.*)[ \\t]\\((.*)/:/^(.*)\\/(.*) /;return{name:i.default.getFirstMatch(t,e),version:i.default.getSecondMatch(t,e)}}}];t.default=a,e.exports=t.default},93:function(e,t,r){\"use strict\";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},s=r(18);var a=[{test:[/Roku\\/DVP/],describe:function(e){var t=i.default.getFirstMatch(/Roku\\/DVP-(\\d+\\.\\d+)/i,e);return{name:s.OS_MAP.Roku,version:t}}},{test:[/windows phone/i],describe:function(e){var t=i.default.getFirstMatch(/windows phone (?:os)?\\s?(\\d+(\\.\\d+)*)/i,e);return{name:s.OS_MAP.WindowsPhone,version:t}}},{test:[/windows /i],describe:function(e){var t=i.default.getFirstMatch(/Windows ((NT|XP)( \\d\\d?.\\d)?)/i,e),r=i.default.getWindowsVersionName(t);return{name:s.OS_MAP.Windows,version:t,versionName:r}}},{test:[/Macintosh(.*?) FxiOS(.*?)\\//],describe:function(e){var t={name:s.OS_MAP.iOS},r=i.default.getSecondMatch(/(Version\\/)(\\d[\\d.]+)/,e);return r&&(t.version=r),t}},{test:[/macintosh/i],describe:function(e){var t=i.default.getFirstMatch(/mac os x (\\d+(\\.?_?\\d+)+)/i,e).replace(/[_\\s]/g,\".\"),r=i.default.getMacOSVersionName(t),n={name:s.OS_MAP.MacOS,version:t};return r&&(n.versionName=r),n}},{test:[/(ipod|iphone|ipad)/i],describe:function(e){var t=i.default.getFirstMatch(/os (\\d+([_\\s]\\d+)*) like mac os x/i,e).replace(/[_\\s]/g,\".\");return{name:s.OS_MAP.iOS,version:t}}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t=i.default.getFirstMatch(/android[\\s/-](\\d+(\\.\\d+)*)/i,e),r=i.default.getAndroidVersionName(t),n={name:s.OS_MAP.Android,version:t};return r&&(n.versionName=r),n}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t=i.default.getFirstMatch(/(?:web|hpw)[o0]s\\/(\\d+(\\.\\d+)*)/i,e),r={name:s.OS_MAP.WebOS};return t&&t.length&&(r.version=t),r}},{test:[/blackberry|\\bbb\\d+/i,/rim\\stablet/i],describe:function(e){var t=i.default.getFirstMatch(/rim\\stablet\\sos\\s(\\d+(\\.\\d+)*)/i,e)||i.default.getFirstMatch(/blackberry\\d+\\/(\\d+([_\\s]\\d+)*)/i,e)||i.default.getFirstMatch(/\\bbb(\\d+)/i,e);return{name:s.OS_MAP.BlackBerry,version:t}}},{test:[/bada/i],describe:function(e){var t=i.default.getFirstMatch(/bada\\/(\\d+(\\.\\d+)*)/i,e);return{name:s.OS_MAP.Bada,version:t}}},{test:[/tizen/i],describe:function(e){var t=i.default.getFirstMatch(/tizen[/\\s](\\d+(\\.\\d+)*)/i,e);return{name:s.OS_MAP.Tizen,version:t}}},{test:[/linux/i],describe:function(){return{name:s.OS_MAP.Linux}}},{test:[/CrOS/],describe:function(){return{name:s.OS_MAP.ChromeOS}}},{test:[/PlayStation 4/],describe:function(e){var t=i.default.getFirstMatch(/PlayStation 4[/\\s](\\d+(\\.\\d+)*)/i,e);return{name:s.OS_MAP.PlayStation4,version:t}}}];t.default=a,e.exports=t.default},94:function(e,t,r){\"use strict\";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},s=r(18);var a=[{test:[/googlebot/i],describe:function(){return{type:\"bot\",vendor:\"Google\"}}},{test:[/huawei/i],describe:function(e){var t=i.default.getFirstMatch(/(can-l01)/i,e)&&\"Nova\",r={type:s.PLATFORMS_MAP.mobile,vendor:\"Huawei\"};return t&&(r.model=t),r}},{test:[/nexus\\s*(?:7|8|9|10).*/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:\"Nexus\"}}},{test:[/ipad/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:\"Apple\",model:\"iPad\"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\\//],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:\"Apple\",model:\"iPad\"}}},{test:[/kftt build/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:\"Amazon\",model:\"Kindle Fire HD 7\"}}},{test:[/silk/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:\"Amazon\"}}},{test:[/tablet(?! pc)/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet}}},{test:function(e){var t=e.test(/ipod|iphone/i),r=e.test(/like (ipod|iphone)/i);return t&&!r},describe:function(e){var t=i.default.getFirstMatch(/(ipod|iphone)/i,e);return{type:s.PLATFORMS_MAP.mobile,vendor:\"Apple\",model:t}}},{test:[/nexus\\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:\"Nexus\"}}},{test:[/[^-]mobi/i],describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return\"blackberry\"===e.getBrowserName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:\"BlackBerry\"}}},{test:function(e){return\"bada\"===e.getBrowserName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return\"windows phone\"===e.getBrowserName()},describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:\"Microsoft\"}}},{test:function(e){var t=Number(String(e.getOSVersion()).split(\".\")[0]);return\"android\"===e.getOSName(!0)&&t>=3},describe:function(){return{type:s.PLATFORMS_MAP.tablet}}},{test:function(e){return\"android\"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return\"macos\"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop,vendor:\"Apple\"}}},{test:function(e){return\"windows\"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop}}},{test:function(e){return\"linux\"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop}}},{test:function(e){return\"playstation 4\"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.tv}}},{test:function(e){return\"roku\"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.tv}}}];t.default=a,e.exports=t.default},95:function(e,t,r){\"use strict\";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},s=r(18);var a=[{test:function(e){return\"microsoft edge\"===e.getBrowserName(!0)},describe:function(e){if(/\\sedg\\//i.test(e))return{name:s.ENGINE_MAP.Blink};var t=i.default.getFirstMatch(/edge\\/(\\d+(\\.?_?\\d+)+)/i,e);return{name:s.ENGINE_MAP.EdgeHTML,version:t}}},{test:[/trident/i],describe:function(e){var t={name:s.ENGINE_MAP.Trident},r=i.default.getFirstMatch(/trident\\/(\\d+(\\.?_?\\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){return e.test(/presto/i)},describe:function(e){var t={name:s.ENGINE_MAP.Presto},r=i.default.getFirstMatch(/presto\\/(\\d+(\\.?_?\\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=e.test(/gecko/i),r=e.test(/like gecko/i);return t&&!r},describe:function(e){var t={name:s.ENGINE_MAP.Gecko},r=i.default.getFirstMatch(/gecko\\/(\\d+(\\.?_?\\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(apple)?webkit\\/537\\.36/i],describe:function(){return{name:s.ENGINE_MAP.Blink}}},{test:[/(apple)?webkit/i],describe:function(e){var t={name:s.ENGINE_MAP.WebKit},r=i.default.getFirstMatch(/webkit\\/(\\d+(\\.?_?\\d+)+)/i,e);return r&&(t.version=r),t}}];t.default=a,e.exports=t.default}})}));\n\n//# sourceURL=webpack://aws-webpack/./node_modules/bowser/es5.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  randomUUID\n});\n\n//# sourceURL=webpack://aws-webpack/./node_modules/uuid/dist/esm-browser/native.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://aws-webpack/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nlet getRandomValues;\nconst rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);\n\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://aws-webpack/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nconst byteToHex = [];\n\nfor (let i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).slice(1));\n}\n\nfunction unsafeStringify(arr, offset = 0) {\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];\n}\n\nfunction stringify(arr, offset = 0) {\n  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://aws-webpack/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ \"./node_modules/uuid/dist/esm-browser/native.js\");\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\n\nfunction v4(options, buf, offset) {\n  if (_native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID && !buf && !options) {\n    return _native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID();\n  }\n\n  options = options || {};\n  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (let i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://aws-webpack/./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://aws-webpack/./node_modules/uuid/dist/esm-browser/validate.js?");

/***/ }),

/***/ "./node_modules/@aws-sdk/client-bedrock-runtime/package.json":
/*!*******************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-bedrock-runtime/package.json ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('{\"name\":\"@aws-sdk/client-bedrock-runtime\",\"description\":\"AWS SDK for JavaScript Bedrock Runtime Client for Node.js, Browser and React Native\",\"version\":\"3.554.0\",\"scripts\":{\"build\":\"concurrently \\'yarn:build:cjs\\' \\'yarn:build:es\\' \\'yarn:build:types\\'\",\"build:cjs\":\"node ../../scripts/compilation/inline client-bedrock-runtime\",\"build:es\":\"tsc -p tsconfig.es.json\",\"build:include:deps\":\"lerna run --scope $npm_package_name --include-dependencies build\",\"build:types\":\"tsc -p tsconfig.types.json\",\"build:types:downlevel\":\"downlevel-dts dist-types dist-types/ts3.4\",\"clean\":\"rimraf ./dist-* && rimraf *.tsbuildinfo\",\"extract:docs\":\"api-extractor run --local\",\"generate:client\":\"node ../../scripts/generate-clients/single-service --solo bedrock-runtime\"},\"main\":\"./dist-cjs/index.js\",\"types\":\"./dist-types/index.d.ts\",\"module\":\"./dist-es/index.js\",\"sideEffects\":false,\"dependencies\":{\"@aws-crypto/sha256-browser\":\"3.0.0\",\"@aws-crypto/sha256-js\":\"3.0.0\",\"@aws-sdk/client-sts\":\"3.554.0\",\"@aws-sdk/core\":\"3.554.0\",\"@aws-sdk/credential-provider-node\":\"3.554.0\",\"@aws-sdk/middleware-host-header\":\"3.535.0\",\"@aws-sdk/middleware-logger\":\"3.535.0\",\"@aws-sdk/middleware-recursion-detection\":\"3.535.0\",\"@aws-sdk/middleware-user-agent\":\"3.540.0\",\"@aws-sdk/region-config-resolver\":\"3.535.0\",\"@aws-sdk/types\":\"3.535.0\",\"@aws-sdk/util-endpoints\":\"3.540.0\",\"@aws-sdk/util-user-agent-browser\":\"3.535.0\",\"@aws-sdk/util-user-agent-node\":\"3.535.0\",\"@smithy/config-resolver\":\"^2.2.0\",\"@smithy/core\":\"^1.4.2\",\"@smithy/eventstream-serde-browser\":\"^2.2.0\",\"@smithy/eventstream-serde-config-resolver\":\"^2.2.0\",\"@smithy/eventstream-serde-node\":\"^2.2.0\",\"@smithy/fetch-http-handler\":\"^2.5.0\",\"@smithy/hash-node\":\"^2.2.0\",\"@smithy/invalid-dependency\":\"^2.2.0\",\"@smithy/middleware-content-length\":\"^2.2.0\",\"@smithy/middleware-endpoint\":\"^2.5.1\",\"@smithy/middleware-retry\":\"^2.3.1\",\"@smithy/middleware-serde\":\"^2.3.0\",\"@smithy/middleware-stack\":\"^2.2.0\",\"@smithy/node-config-provider\":\"^2.3.0\",\"@smithy/node-http-handler\":\"^2.5.0\",\"@smithy/protocol-http\":\"^3.3.0\",\"@smithy/smithy-client\":\"^2.5.1\",\"@smithy/types\":\"^2.12.0\",\"@smithy/url-parser\":\"^2.2.0\",\"@smithy/util-base64\":\"^2.3.0\",\"@smithy/util-body-length-browser\":\"^2.2.0\",\"@smithy/util-body-length-node\":\"^2.3.0\",\"@smithy/util-defaults-mode-browser\":\"^2.2.1\",\"@smithy/util-defaults-mode-node\":\"^2.3.1\",\"@smithy/util-endpoints\":\"^1.2.0\",\"@smithy/util-middleware\":\"^2.2.0\",\"@smithy/util-retry\":\"^2.2.0\",\"@smithy/util-stream\":\"^2.2.0\",\"@smithy/util-utf8\":\"^2.3.0\",\"tslib\":\"^2.6.2\"},\"devDependencies\":{\"@smithy/service-client-documentation-generator\":\"^2.2.0\",\"@tsconfig/node14\":\"1.0.3\",\"@types/node\":\"^14.14.31\",\"concurrently\":\"7.0.0\",\"downlevel-dts\":\"0.10.1\",\"rimraf\":\"3.0.2\",\"typescript\":\"~4.9.5\"},\"engines\":{\"node\":\">=14.0.0\"},\"typesVersions\":{\"<4.0\":{\"dist-types/*\":[\"dist-types/ts3.4/*\"]}},\"files\":[\"dist-*/**\"],\"author\":{\"name\":\"AWS SDK for JavaScript Team\",\"url\":\"https://aws.amazon.com/javascript/\"},\"license\":\"Apache-2.0\",\"browser\":{\"./dist-es/runtimeConfig\":\"./dist-es/runtimeConfig.browser\"},\"react-native\":{\"./dist-es/runtimeConfig\":\"./dist-es/runtimeConfig.native\"},\"homepage\":\"https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-bedrock-runtime\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/aws/aws-sdk-js-v3.git\",\"directory\":\"clients/client-bedrock-runtime\"}}');\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/client-bedrock-runtime/package.json?");

/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partitions.json":
/*!******************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partitions.json ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('{\"partitions\":[{\"id\":\"aws\",\"outputs\":{\"dnsSuffix\":\"amazonaws.com\",\"dualStackDnsSuffix\":\"api.aws\",\"implicitGlobalRegion\":\"us-east-1\",\"name\":\"aws\",\"supportsDualStack\":true,\"supportsFIPS\":true},\"regionRegex\":\"^(us|eu|ap|sa|ca|me|af|il)\\\\\\\\-\\\\\\\\w+\\\\\\\\-\\\\\\\\d+$\",\"regions\":{\"af-south-1\":{\"description\":\"Africa (Cape Town)\"},\"ap-east-1\":{\"description\":\"Asia Pacific (Hong Kong)\"},\"ap-northeast-1\":{\"description\":\"Asia Pacific (Tokyo)\"},\"ap-northeast-2\":{\"description\":\"Asia Pacific (Seoul)\"},\"ap-northeast-3\":{\"description\":\"Asia Pacific (Osaka)\"},\"ap-south-1\":{\"description\":\"Asia Pacific (Mumbai)\"},\"ap-south-2\":{\"description\":\"Asia Pacific (Hyderabad)\"},\"ap-southeast-1\":{\"description\":\"Asia Pacific (Singapore)\"},\"ap-southeast-2\":{\"description\":\"Asia Pacific (Sydney)\"},\"ap-southeast-3\":{\"description\":\"Asia Pacific (Jakarta)\"},\"ap-southeast-4\":{\"description\":\"Asia Pacific (Melbourne)\"},\"aws-global\":{\"description\":\"AWS Standard global region\"},\"ca-central-1\":{\"description\":\"Canada (Central)\"},\"ca-west-1\":{\"description\":\"Canada West (Calgary)\"},\"eu-central-1\":{\"description\":\"Europe (Frankfurt)\"},\"eu-central-2\":{\"description\":\"Europe (Zurich)\"},\"eu-north-1\":{\"description\":\"Europe (Stockholm)\"},\"eu-south-1\":{\"description\":\"Europe (Milan)\"},\"eu-south-2\":{\"description\":\"Europe (Spain)\"},\"eu-west-1\":{\"description\":\"Europe (Ireland)\"},\"eu-west-2\":{\"description\":\"Europe (London)\"},\"eu-west-3\":{\"description\":\"Europe (Paris)\"},\"il-central-1\":{\"description\":\"Israel (Tel Aviv)\"},\"me-central-1\":{\"description\":\"Middle East (UAE)\"},\"me-south-1\":{\"description\":\"Middle East (Bahrain)\"},\"sa-east-1\":{\"description\":\"South America (Sao Paulo)\"},\"us-east-1\":{\"description\":\"US East (N. Virginia)\"},\"us-east-2\":{\"description\":\"US East (Ohio)\"},\"us-west-1\":{\"description\":\"US West (N. California)\"},\"us-west-2\":{\"description\":\"US West (Oregon)\"}}},{\"id\":\"aws-cn\",\"outputs\":{\"dnsSuffix\":\"amazonaws.com.cn\",\"dualStackDnsSuffix\":\"api.amazonwebservices.com.cn\",\"implicitGlobalRegion\":\"cn-northwest-1\",\"name\":\"aws-cn\",\"supportsDualStack\":true,\"supportsFIPS\":true},\"regionRegex\":\"^cn\\\\\\\\-\\\\\\\\w+\\\\\\\\-\\\\\\\\d+$\",\"regions\":{\"aws-cn-global\":{\"description\":\"AWS China global region\"},\"cn-north-1\":{\"description\":\"China (Beijing)\"},\"cn-northwest-1\":{\"description\":\"China (Ningxia)\"}}},{\"id\":\"aws-us-gov\",\"outputs\":{\"dnsSuffix\":\"amazonaws.com\",\"dualStackDnsSuffix\":\"api.aws\",\"implicitGlobalRegion\":\"us-gov-west-1\",\"name\":\"aws-us-gov\",\"supportsDualStack\":true,\"supportsFIPS\":true},\"regionRegex\":\"^us\\\\\\\\-gov\\\\\\\\-\\\\\\\\w+\\\\\\\\-\\\\\\\\d+$\",\"regions\":{\"aws-us-gov-global\":{\"description\":\"AWS GovCloud (US) global region\"},\"us-gov-east-1\":{\"description\":\"AWS GovCloud (US-East)\"},\"us-gov-west-1\":{\"description\":\"AWS GovCloud (US-West)\"}}},{\"id\":\"aws-iso\",\"outputs\":{\"dnsSuffix\":\"c2s.ic.gov\",\"dualStackDnsSuffix\":\"c2s.ic.gov\",\"implicitGlobalRegion\":\"us-iso-east-1\",\"name\":\"aws-iso\",\"supportsDualStack\":false,\"supportsFIPS\":true},\"regionRegex\":\"^us\\\\\\\\-iso\\\\\\\\-\\\\\\\\w+\\\\\\\\-\\\\\\\\d+$\",\"regions\":{\"aws-iso-global\":{\"description\":\"AWS ISO (US) global region\"},\"us-iso-east-1\":{\"description\":\"US ISO East\"},\"us-iso-west-1\":{\"description\":\"US ISO WEST\"}}},{\"id\":\"aws-iso-b\",\"outputs\":{\"dnsSuffix\":\"sc2s.sgov.gov\",\"dualStackDnsSuffix\":\"sc2s.sgov.gov\",\"implicitGlobalRegion\":\"us-isob-east-1\",\"name\":\"aws-iso-b\",\"supportsDualStack\":false,\"supportsFIPS\":true},\"regionRegex\":\"^us\\\\\\\\-isob\\\\\\\\-\\\\\\\\w+\\\\\\\\-\\\\\\\\d+$\",\"regions\":{\"aws-iso-b-global\":{\"description\":\"AWS ISOB (US) global region\"},\"us-isob-east-1\":{\"description\":\"US ISOB East (Ohio)\"}}},{\"id\":\"aws-iso-e\",\"outputs\":{\"dnsSuffix\":\"cloud.adc-e.uk\",\"dualStackDnsSuffix\":\"cloud.adc-e.uk\",\"implicitGlobalRegion\":\"eu-isoe-west-1\",\"name\":\"aws-iso-e\",\"supportsDualStack\":false,\"supportsFIPS\":true},\"regionRegex\":\"^eu\\\\\\\\-isoe\\\\\\\\-\\\\\\\\w+\\\\\\\\-\\\\\\\\d+$\",\"regions\":{}},{\"id\":\"aws-iso-f\",\"outputs\":{\"dnsSuffix\":\"csp.hci.ic.gov\",\"dualStackDnsSuffix\":\"csp.hci.ic.gov\",\"implicitGlobalRegion\":\"us-isof-south-1\",\"name\":\"aws-iso-f\",\"supportsDualStack\":false,\"supportsFIPS\":true},\"regionRegex\":\"^us\\\\\\\\-isof\\\\\\\\-\\\\\\\\w+\\\\\\\\-\\\\\\\\d+$\",\"regions\":{}}],\"version\":\"1.1\"}');\n\n//# sourceURL=webpack://aws-webpack/./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partitions.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;