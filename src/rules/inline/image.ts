import { Rule } from "../../api/rule";
import { Token } from "../../api/token";

class RuleImage extends Rule {
  constructor() {
    super("Image");
    this.setRegex(/^!\[([^\]]+)\] ?\(([^\)]+)\)/);
  }

  public handle(data: any[]): any[] {
    return [data[1], data[2]];
  }

  public render(token: Token): string {
    return `<img src="${token.getValue()[1]}">${token.getValue()[0]}</img>`;
  }
}

export const Image = new RuleImage();
