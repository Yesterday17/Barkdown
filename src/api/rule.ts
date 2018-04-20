import { Token } from "./token";

export class Rule {
  public name: string;
  public description: string;

  private regex: RegExp;

  constructor(rname: string) {
    this.name = rname;
  }

  // Functions on value

  public setDescription(desc: string): void {
    this.description = desc;
  }

  public setRegex(reg: RegExp): void {
    this.regex = reg;
  }

  // Lexing
  public lex(src: string): Token {
    return Token.blank;
  }
}
