import { Rule } from "../../api/rule";
import { Token } from "../../api/token";

/**
 * Thematic breaks:
 *   A line consisting of 0-3 spaces of indentation,
 *   followed by a sequence of three or more matching -, _, or * characters,
 *   each followed optionally by any number of spaces, forms a thematic break.
 */
class RuleThematicBreak extends Rule {
  constructor() {
    super("thematic-break");
    this.setRegex(
      /^ {0,3}((- *){3,}|(_ *){3,}|(\* *){3,})/
    );
  }

  public handle(data: any[]): any[] {
    return [data[0].replace(/ /g, "").length];
  }

  public render(token: Token): string {
    return `<hr />`;
  }
}

export const ThematicBreak = new RuleThematicBreak();
