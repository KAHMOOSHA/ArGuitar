import dotenv from "dotenv";
import express, { Request, Response, Application } from "express";

const app: Application = express();
app.set("port", process.env.PORT || 2001);
dotenv.config();

app.use(express.urlencoded({ extended: false }));

const {
    env: { NODE_ENV },
} = process;

export default app;
