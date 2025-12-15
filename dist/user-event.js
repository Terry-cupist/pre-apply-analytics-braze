"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBrazeInstance = void 0;
var braze_1 = __importStar(require("./braze"));
var getBrazeInstance = function (props) {
    return __assign({ log: function (_a) {
            var eventName = _a.eventName, params = _a.params;
            braze_1.default.logCustomEvent(eventName, params);
        }, logPurchase: function (_a) {
            var productId = _a.productId, price = _a.price, currency = _a.currency, params = _a.params;
            braze_1.default.logPurchase(productId, price.toString(), currency, 1, params);
        }, updateUserProperties: function (_a) {
            return __awaiter(this, arguments, void 0, function (_b) {
                var prevUserId;
                var userId = _b.userId, userProperties = _b.userProperties;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, (0, braze_1.getBrazeUserId)()];
                        case 1:
                            prevUserId = _c.sent();
                            if (userId && prevUserId !== userId) {
                                braze_1.default.changeUser(userId);
                            }
                            Object.entries(userProperties).forEach(function (_a) {
                                var key = _a[0], value = _a[1];
                                if (key === "nickname") {
                                    braze_1.default.setFirstName(value);
                                }
                                else if (key === "gender" && ["F", "M"].includes(value)) {
                                    braze_1.default.setGender(value.toLowerCase());
                                }
                                else if (key === "birthday" && value.split("-").length > 2) {
                                    var _b = value.split("-"), year = _b[0], month = _b[1], day = _b[2];
                                    braze_1.default.setDateOfBirth(Number(year), parseInt(month, 10), Number(day));
                                }
                                else {
                                    // NOTE: value가 null인 경우 해당 프로퍼티를 지우는 동작이 실행되며, 이로 인해 회원가입 시 crash가 발생할 수 있다.
                                    var convertedValue = value === null ? undefined : value;
                                    braze_1.default.setCustomUserAttribute(key, convertedValue);
                                }
                            });
                            return [2 /*return*/];
                    }
                });
            });
        }, logout: function () {
            braze_1.default.changeUser("");
        } }, props);
};
exports.getBrazeInstance = getBrazeInstance;
//# sourceMappingURL=user-event.js.map