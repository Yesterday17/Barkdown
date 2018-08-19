import { Rule } from "../../api/rule";
import { Token } from "../../api/token";

class RuleHr extends Rule {
  constructor() {
    super("Hr");
    this.setRegex(
      /^ {0,3}((- *){3,}|(_ *){3,}|(\* *){3,})\n/
    );
  }

  public handle(data: any[]): any[] {
    // -1 to ignore '\n'
    return [data[0].replace(/ /g, "").length - 1];
  }

  public render(token: Token): string {
    return `<hr />`;
  }
}

export const Hr = new RuleHr();
