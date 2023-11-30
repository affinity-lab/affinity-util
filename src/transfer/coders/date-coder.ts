import {Coder} from "../coder";

export class DateCoder extends Coder {
	readonly type = "date";
	decode(value: any): any { return new Date(value);}
	encode(value: any): any {return value instanceof Date ? value.toString() : value;}
}