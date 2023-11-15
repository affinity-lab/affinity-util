/// <reference types="node" />
import { NextFunction, Request, Response } from "express";
import { ExtendedError } from "./extended-error";
import { EventEmitter } from "events";
export declare function exceptionHandler(eventEmitter?: EventEmitter): (error: Error | ExtendedError, req: Request, res: Response, next: NextFunction) => Promise<void>;
