"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNativeWindAvailable = exports.mergeStyles = exports.useStyle = exports.createStyle = void 0;
// Main compatibility utilities
var styleCompat_1 = require("./styleCompat");
Object.defineProperty(exports, "createStyle", { enumerable: true, get: function () { return __importDefault(styleCompat_1).default; } });
Object.defineProperty(exports, "useStyle", { enumerable: true, get: function () { return styleCompat_1.useStyle; } });
Object.defineProperty(exports, "mergeStyles", { enumerable: true, get: function () { return styleCompat_1.mergeStyles; } });
Object.defineProperty(exports, "isNativeWindAvailable", { enumerable: true, get: function () { return styleCompat_1.isNativeWindAvailable; } });
