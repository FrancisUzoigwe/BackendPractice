import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { ErrorFile, STATUS } from "./error/ErrorFile";

export const mainApp = (app: Application) => {
app.use(express.json())
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PATCH"]
}))
app.all("/", (error: ErrorFile, req: Request, res: Response, next: NextFunction) => {
next(
    new ErrorFile({
        errorMessage: `This is as a reult of ${req.originalUrl}`,
        errorName: `Error name ${req.originalUrl}`,
        errorStatus: STATUS.BAD,
        errorSuccess: false
    })
)
})
}