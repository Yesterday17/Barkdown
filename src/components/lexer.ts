import { Rule } from "../rules/rule";

export class Lexer {
    static blankLexer = new Lexer();

    private rules: Rule[];
}

export class Token {
    /// The Type of a token.
    private type: string;
    // The content of a token.
    private value: any[];

    public constructor(t: string, val: any[]){
        this.type = t;
        this.value = val;
    }
}

export const defaultLexer = new Lexer();
export const blankLexer = new Lexer();