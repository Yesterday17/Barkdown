import { Rule } from "../../api/rule";

class RuleText extends Rule {
  constructor() {
    super("Text");
    this.setRegex(/^(.+)/);
  }

  public handle(data: any[]): [boolean, any[]] {
    return [true, [data[1]]];
  }
}

export const Text = new RuleText();
