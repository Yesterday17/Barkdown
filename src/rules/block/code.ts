import { Rule } from "../../api/rule";
import { Token } from "../../api/token";

class RuleCode extends Rule {
  constructor() {
    super("Code");
  }

  public handle(data: any[]): any[] {
    return [data[1]];
  }

  public render(token: Token): string {
    return `<p>${token.getValue()[0]}</p>`;
  }
}

export const code = new RuleCode();
