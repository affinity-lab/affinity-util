import { Coder } from "../coder";
export declare class DateCoder extends Coder {
    readonly type = "date";
    decode(value: any): any;
    encode(value: any): any;
}
