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
exports.UserService = void 0;
const configs_1 = __importDefault(require("../../configs"));
const student_model_1 = require("../student/student.model");
const user_model_1 = require("./user.model");
const createStudentIntoDB = (password, studentData) => __awaiter(void 0, void 0, void 0, function* () {
    // creating a new obj
    const userData = {};
    // setting default password if password is not given
    userData.password = password || configs_1.default.default_password;
    // setting user role
    userData.role = "student";
    // set manual id
    userData.id = "2030100001";
    // creating user
    const newUser = yield user_model_1.User.create(userData);
    // creating student
    if (Object.keys(newUser).length) {
        // set id and _id as user
        studentData.id = newUser.id;
        studentData.user = newUser._id;
        const newStudent = yield student_model_1.Student.create(studentData);
        return newStudent;
    }
});
exports.UserService = {
    createStudentIntoDB,
};
