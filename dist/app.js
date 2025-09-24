"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const globalErrorhandler_1 = __importDefault(require("./app/middleware/globalErrorhandler"));
const notFound_1 = __importDefault(require("./app/middleware/notFound"));
const routers_1 = __importDefault(require("./app/routers"));
const app = (0, express_1.default)();
// Parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Application routes
app.use("/api/v1", routers_1.default);
// Root route
app.get("/", (req, res) => {
    res.send("Welcome to the Banana university Server!");
});
// Global Error Handler and Not Found Middleware
app.use(globalErrorhandler_1.default);
app.use(notFound_1.default);
exports.default = app;
