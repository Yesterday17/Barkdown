import { Rule } from "../../api/rule";
import { Token } from "../../api/token";

class RuleHardNewline extends Rule {
  constructor() {
    super("HardNewline");
    this.setRegex(/^\n/);
  }

  public handle(data: any[]): any[] {
    return ["\n"];
  }

  public render(token: Token): string {
    return `<br />`;
  }
}

export const HardNewline = new RuleHardNewline();
