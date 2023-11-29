import { Coder } from "../transfer";
export declare class DateCoder extends Coder {
    readonly type = "date";
    decode(value: any): any;
    encode(value: any): any;
}
