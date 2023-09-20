import express, { Request, Response, NextFunction } from "express";
import { STATUS, ErrorFile } from "./ErrorFile";

export const handleError = (
  error: ErrorFile,
//   req: Request,
  res: Response,
//   next: NextFunction
) => {
  return res.status(STATUS.BAD).json({
    errorName: error.errorName,
    errorMessage: error.errorMessage,
    errorSuccess: error.errorSuccess,
    errorStatus: error.errorStatus,
    errorStack: error.stack,
    error,
  });
};

export const ErrorHandler = (
  error: ErrorFile,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  handleError(error, res);
};
