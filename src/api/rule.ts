import { Token } from "./token";

export class Rule {
  public name: string = "";
  public description: string = "";

  private regex: RegExp = new RegExp("");

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

  public getRegex(): RegExp {
    return this.regex;
  }

  // Lexing
  public lex(src: string): Token {
    return Token.blank;
  }
}
