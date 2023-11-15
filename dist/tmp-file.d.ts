/// <reference types="node" />
import { Buffer } from "buffer";
export declare class TmpFile {
    readonly tmp: string;
    readonly filename: string;
    readonly uniqueDir: string;
    readonly file: string;
    constructor(tmp: string, filename: string, buffer: Buffer);
    release(): void | Promise<void>;
}
