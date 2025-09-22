"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const student_route_1 = require("../modules/student/student.route");
const user_route_1 = require("../modules/user/user.route");
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
];
moduleRoute.forEach((value) => router.use(value.path, value.route));
exports.default = router;
