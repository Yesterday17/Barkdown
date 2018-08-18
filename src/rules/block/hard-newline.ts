import { Rule } from "../../api/rule";

class RuleHardNewline extends Rule {
  constructor() {
    super("HardNewline");
    this.setRegex(/^\n/);
  }

  public handle(data: any[]): [boolean, any[]] {
    return [true, ["\n"]];
  }
}

export const HardNewline = new RuleHardNewline();
