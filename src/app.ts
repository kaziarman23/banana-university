import express, { Application, Request, Response } from "express";
import cors from "cors";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import notFound from "./app/middleware/notFound";
import { StudentRoutes } from "./app/modules/student/student.route";
import { UserRoutes } from "./app/modules/user/user.route";

const app: Application = express();

// Parsers
app.use(express.json());
app.use(cors());

// Application routes
app.use("/api/v1/students", StudentRoutes);
app.use("/api/v1/users", UserRoutes);

// Root route
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Banana university Server!");
});

// Global Error Handler and Not Found Middleware
app.use(globalErrorHandler);
app.use(notFound);

export default app;
