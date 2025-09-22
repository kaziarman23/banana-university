import express, { Application, Request, Response } from "express";
import cors from "cors";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import notFound from "./app/middleware/notFound";
import router from "./app/routers";

const app: Application = express();

// Parsers
app.use(express.json());
app.use(cors());

// Application routes
app.use("/api/v1", router);

// Root route
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Banana university Server!");
});

// Global Error Handler and Not Found Middleware
app.use(globalErrorHandler);
app.use(notFound);

export default app;
