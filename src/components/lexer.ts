import { Rule } from "../api/rule";
import { Token } from "../api/token";

export class Lexer {
  private rules: Map<string, Rule>;
  private purningRules: [];

  constructor() {
    this.rules = new Map();
  }

  public addRule(rule: Rule): boolean {
    if (this.rules.get(rule.getName()) !== undefined) {
      return false;
    }

    this.rules.set(rule.getName(), rule);
    return true;
  }

  public delRule(rule: Rule): void {
    if (this.rules.get(rule.getName()) !== undefined) {
      this.rules.delete(rule.getName());
    }
  }

  public getRules(): Map<string, Rule> {
    return this.rules;
  }

  public addpurningRule(): void {
    //
  }

  public lex(src: string): Token[] {
    const tokens: Token[] = Array<Token>();

    while (src) {
      for (const [key, value] of this.rules) {
        const token = value.lex(src);
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
   * Output the rules applied by the lexer.
   */
  public debug(): void {
    console.log(`Lexer: \n${JSON.stringify([...this.rules], undefined, 2)}`);
  }
}
