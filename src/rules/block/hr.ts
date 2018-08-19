import { Rule } from "../../api/rule";
import { Token } from "../../api/token";

class RuleHr extends Rule {
  constructor() {
    super("Hr");
    this.setRegex(
      /^((?:(?:\* ?){3,})|(?:(?:- ?){3,})|(?:(?:_ ?){3,}))(?:[\*-_] ?)* *\n/
    );
  }

  public handle(data: any[]): any[] {
    return [data[1].replace(/ /g, "").length];
  }

  public render(token: Token): string {
    return `<hr />`;
  }
}

export const Hr = new RuleHr();
