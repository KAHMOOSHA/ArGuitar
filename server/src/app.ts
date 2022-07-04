import { join } from "path";
import dotenv from "dotenv";
import express, { Request, Response, Application } from "express";
import cookieParser from "cookie-parser";
import compression from "compression";
dotenv.config();
import customErrorHandler from "./error";

const app: Application = express();
app.set("port", process.env.PORT || 8080);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());

const {
    env: { NODE_ENV },
} = process;

app.use((err: any, req: Request, res: Response) => {
    customErrorHandler(err, res);
});

export default app;
