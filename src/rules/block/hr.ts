import { Rule } from "../../api/rule";

class RuleHr extends Rule {
  constructor() {
    super("Hr");
    this.setRegex(
      /^((?:(?:\* ?){3,})|(?:(?:- ?){3,})|(?:(?:_ ?){3,}))(?:[\*-_] ?)* *\n/
    );
  }

  public handle(data: any[]): [boolean, any[]] {
    return [false, []];
  }
}

const Hr = new RuleHr();

export { Hr };
