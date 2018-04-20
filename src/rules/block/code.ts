import { Rule } from "../../api/rule";

class RuleCode extends Rule {
  constructor() {
    super("Code");
  }
}

const code = new RuleCode();
export default code;
