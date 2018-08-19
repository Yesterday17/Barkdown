import { Rule } from "../../../api/rule";
import { Token } from "../../../api/token";

class RuleIndentedCodeBlock extends Rule {
  constructor() {
    super("indented-code-block");
    this.setRegex(/^    .+(?:\n(?:    .+| +))*(?!.)/  );
  }

  public handle(data: any[]): any[] {
    return [data[1]];
  }

  public render(token: Token): string {
    return `<p>${token.getValue()[0]}</p>`;
  }
}

export const IndentedCodeBlock = new RuleIndentedCodeBlock();
