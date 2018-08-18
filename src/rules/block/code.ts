import { Rule } from "../../api/rule";

class RuleCode extends Rule {
  constructor() {
    super("Code");
  }
}

export const code = new RuleCode();
