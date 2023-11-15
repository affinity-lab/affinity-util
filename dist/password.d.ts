/// <reference types="node" />
export declare class Password {
    private readonly pepper;
    constructor(pepper: Buffer);
    hash(password: string): Promise<string>;
}
