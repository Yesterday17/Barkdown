import { Rule } from "./api/rule";
import { Token } from "./api/token";
import { Lexer } from "./components/lexer";

class Barked {
  // Components
  protected lexer: Lexer;

  // Variables
  private token: Token[];

  constructor(lex: Lexer = Lexer.blank) {
    this.lexer = lex;
  }

  public parse(src: string): string {
    // Lexing
    // this.lexer

    return "";
  }
}

const barked = new Barked();

export default barked;
