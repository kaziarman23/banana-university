"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This is one is for wraping the async function.
// 1. Help us to use DRY method.
// 2. Don't need to use try & catch every time.
const catchAsync = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch((err) => next(err));
    };
};
exports.default = catchAsync;
