import { Rule } from "../../api/rule";
import { Token } from "../../api/token";

class RuleText extends Rule {
  constructor() {
    super("Text");
    this.setRegex(/^(.+)/);
  }

  public handle(data: any[]): any[] {
    return [data[1]];
  }

  public render(token: Token): string {
    return `<p>${token.getValue()[0]}</p>`;
  }
}

export const Text = new RuleText();
