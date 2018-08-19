import { Token } from "./token";

export abstract class PurningRule {
  private name: string;
  private tokensName: string[];

  constructor(rname: string) {
    this.name = rname;
  }

  public test(tokens: Token[]): boolean {
    const m_tokens = [];
    for (let i = 0; i !== this.tokensName.length; i++) {
      m_tokens.push(tokens[i].getType());
    }
    return JSON.stringify(m_tokens) === JSON.stringify(this.tokensName);
  }
}
