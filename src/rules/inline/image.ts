import { Rule } from "../../api/rule";
import { Token } from "../../api/token";

class RuleImage extends Rule {
  constructor() {
    super("Image");
    this.setRegex(/^!\[([^\]]+)\] ?\(([^\)]+)\)/);
  }

  public handle(p: any[]): [boolean, any[]] {
    return [true, [p[1], p[2]]];
  }
}

const Image = new RuleImage();

export { Image };
