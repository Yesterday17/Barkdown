import { Rule } from "./api/rule";
import { Token } from "./api/token";
import { Lexer } from "./components/lexer";
import { Renderer } from "./components/renderer";

class Barked {
  // Components
  protected lexer: Lexer;
  protected renderer: Renderer;

  constructor() {
    //
  }

  public parse(src: string): string {
    const tokens = this.lexer.lex(src);
    return this.renderer.parse(tokens);
  }
}

export const barked = new Barked();
