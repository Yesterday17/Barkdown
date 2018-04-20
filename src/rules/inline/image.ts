import { Rule } from "../../api/rule";
import { Token } from "../../api/token";

class RuleImage extends Rule {
  constructor() {
    super("Image");
    this.setRegex(/^!\[([^\]]+)\] ?\(([^\)]+)\)/);
  }

  public lex(src: string) {
    const token = new Token(this.name);
    let p: string[] = [];

    if ((p = this.getRegex().exec(src))) {
      token.putValue(p[1], p[2]);
      return token;
    }

    return Token.blank;
  }
}

const Image = new RuleImage();

export { Image };
