import { Coder } from "./coder";
export declare class Transfer {
    protected coders: Record<string, Coder>;
    constructor(coders: Array<Coder>);
    encode(data: Record<string, any> | Array<any>): any;
    decode(data: Record<string, any> | Array<any>): any;
}
