import { Token } from "./token";

export abstract class Rule {
  private name: string;
  public description: string;

  private regex: RegExp;

  constructor(rname: string) {
    this.name = rname;
  }

  public getName(): string {
    return this.name;
  }

  public getRegex(): RegExp {
    return this.regex;
  }

  protected setRegex(reg: RegExp): void {
    this.regex = reg;
  }

  /**
   * The lifetime of a Rule when lexing
   *
   * 1. rule.lex(src)
   *    Here, the function tries to idenfity whether the src given
   *    matches the RegExp. If so, then run rule.handle() and pass
   *    the array the next function needs.
   * 2. rule.handle([])
   *    This function inputs an array generaged by regex.exec(src),
   *    and returns a [err, val] which indicates whether to generate
   *    the token with the value or just throw it.(A second judge).
   *
   */

  // Lexing
  public lex(src: string): Token {
    const token = new Token(this.name);
    let p: any[] = [];

    if (!this.getRegex().test(src)) return Token.blank;

    if ((p = this.getRegex().exec(src))) {
      token.setRaw(p[0]);
      token.putValue(this.handle(p));
      return token;
    }
  }

  /**
   * A function which deals with the exec data. Should be like this:
   *
   * public handle(data: any[]): [boolean, any[]] {
   *   return [false, []];
   * }
   *
   * @param data The data returned by exec.
   */
  public abstract handle(data: any[]): any[];

  /**
   * A function which renders the token.
   *
   * @param token The token to render.
   */
  public abstract render(token: Token): string;
}
