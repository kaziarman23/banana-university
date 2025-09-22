"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const configs_1 = __importDefault(require("../../configs"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const userSchema = new mongoose_1.Schema({
    id: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    needsPasswordChange: {
        type: Boolean,
        default: true,
    },
    role: {
        type: String,
        enum: {
            values: ["admin", "student", "faculty"],
        },
    },
    status: {
        type: String,
        enum: {
            values: ["in-process", "blocked"],
        },
        default: "in-process",
    },
    isDeleted: { type: Boolean, default: false },
}, {
    timestamps: true,
});
// pre save middleware/ hook : will work on create() save()
userSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        // console.log(this, ' pre hook : we will save data');
        const user = this;
        user.password = yield bcrypt_1.default.hash(user.password, Number(configs_1.default.bcrypt_salt_rounds));
        next();
    });
});
// post save middleware / hook
userSchema.post("save", function (doc, next) {
    doc.password = "";
    next();
});
exports.User = (0, mongoose_1.model)("User", userSchema);
