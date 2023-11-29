export declare abstract class Coder {
    abstract get type(): string;
    abstract decode(value: any): any;
    abstract encode(value: any): any;
}
