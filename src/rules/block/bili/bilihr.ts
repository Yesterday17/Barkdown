import { Rule } from "../../../api/rule";

class RuleBiliHr extends Rule {
  constructor() {
    super("BiliHr");
    this.setRegex(
      /^((?:(?:\* ?){3,})|(?:(?:- ?){3,})|(?:(?:_ ?){3,}))(?:[\*-_] ?)* *\n/
    );
  }
}

const Bilihr = new RuleBiliHr();

export { Bilihr };
