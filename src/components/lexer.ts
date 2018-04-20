import { Rule } from "../api/rules/rule";

export class Lexer {
  public static blankLexer = new Lexer();

  private rules: { [name: string]: Rule } = {};

  public addRule(rule: Rule): boolean {
    if (this.rules[rule.name] !== undefined) {
      return false;
    }

    this.rules[rule.name] = rule;
    return true;
  }

  // Debug functions, must be removed.
  public debug(): void {
    console.log(this.rules);
  }
}

export const defaultLexer = new Lexer();
export const blankLexer = new Lexer();
