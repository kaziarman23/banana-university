import { NextFunction, Request, RequestHandler, Response } from "express";

// This is one is for wraping the async function.
// 1. Help us to use DRY method.
// 2. Don't need to use try & catch every time.

const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  };
};

export default catchAsync;
