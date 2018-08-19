import { Rule } from "../api/rule";
import { Token } from "../api/token";
import { Lexer } from "./lexer";

export class Renderer {
  private rules: Map<string, Rule>;

  constructor(lexer: Lexer) {
    this.rules = lexer.getRules();
  }

  public parse(tokens: Token[]): string {
    let rendered = "";
    try {
      for (const token of tokens) {
        if (this.rules.has(token.getType())) {
          rendered += this.rules.get(token.getType()).render(token);
        } else {
          throw { message: `Rule ${token.getType()} doesn't exist!` };
        }
      }
    } catch (e) {
      console.error(e.message);
    }

    return rendered;
  }
}
