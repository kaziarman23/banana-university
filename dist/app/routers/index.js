"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const student_route_1 = require("../modules/student/student.route");
const user_route_1 = require("../modules/user/user.route");
const academicSemester_route_1 = require("../modules/academicSemester/academicSemester.route");
const academicFaculty_route_1 = require("../modules/academicFaculty/academicFaculty.route");
const academicDepartment_route_1 = require("../modules/academicDepartment/academicDepartment.route");
const router = (0, express_1.Router)();
const moduleRoute = [
    {
        path: "/students",
        route: student_route_1.StudentRoutes,
    },
    {
        path: "/users",
        route: user_route_1.UserRoutes,
    },
    {
        path: "/academic-semesters",
        route: academicSemester_route_1.AcademicSemesterRoutes,
    },
    {
        path: "/academic-faculties",
        route: academicFaculty_route_1.AcademicFacultyRoutes,
    },
    {
        path: "/academic-departments",
        route: academicDepartment_route_1.AcademicDepartmentRoutes,
    },
];
moduleRoute.forEach((value) => router.use(value.path, value.route));
exports.default = router;
