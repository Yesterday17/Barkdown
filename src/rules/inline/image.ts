import { Rule } from "../../api/rule";

class RuleImage extends Rule {
  constructor() {
    super("Image");
    this.setRegex(/^!\[([^\]]+)\] ?\(([^\)]+)\)/);
  }

  public handle(data: any[]): [boolean, any[]] {
    return [true, [data[1], data[2]]];
  }
}

export const Image = new RuleImage();

