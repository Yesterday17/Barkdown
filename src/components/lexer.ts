import { Rule } from "../api/rule";
import { Token } from "../api/token";

export class Lexer {
  public static blank = new Lexer();

  private rules: { [name: string]: Rule } = {};

  public addRule(rule: Rule): boolean {
    if (this.rules[rule.getName()] !== undefined) {
      return false;
    }

    this.rules[rule.getName()] = rule;
    return true;
  }

  public delRule(rule: Rule): void {
    if (this.rules[rule.getName()] !== undefined) {
      delete this.rules[rule.getName()];
    }
  }

  public lex(src: string): Token[] {
    const tokens: Token[] = Array<Token>();

    while (src) {
      for (const i in this.rules) {
        const token = this.rules[i].lex(src);
        if (token !== Token.blank) {
          src = src.substring(token.getRaw().length);
          tokens.push(token);
          break;
        }
      }
    }

    return tokens;
  }

  /**
   * Debug function, only for debug purpose.
   * 
   * Output the lexer. 
   */
  public debug(): void {
    console.log(`Lexer: \n${JSON.stringify(this.rules, undefined, 2)}`);
  }
}

export const defaultLexer = new Lexer();
export const blankLexer = new Lexer();
