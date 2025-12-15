"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBrazeUserId = void 0;
var react_native_sdk_1 = __importDefault(require("@braze/react-native-sdk"));
__exportStar(require("@braze/react-native-sdk"), exports);
exports.default = react_native_sdk_1.default;
var getBrazeUserId = function () {
    return new Promise(function (res, rej) {
        react_native_sdk_1.default.getUserId(function (error, result) {
            if (error) {
                rej(error);
                return;
            }
            res(result);
        });
    });
};
exports.getBrazeUserId = getBrazeUserId;
//# sourceMappingURL=braze.js.map