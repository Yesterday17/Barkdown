import { Rule } from "../api/rules/rule";

export class Lexer {
  public static blankLexer = new Lexer();

  private rules: Rule[];
}

export const defaultLexer = new Lexer();
export const blankLexer = new Lexer();
