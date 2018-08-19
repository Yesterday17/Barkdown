import { Rule } from "../../../api/rule";
import { Token } from "../../../api/token";

/**
 * ATX headings:
 *   A setext heading consists of one or more lines of text,
 *   each containing at least one non-whitespace character,
 *   with no more than 3 spaces indentation, followed by a setext heading underline.
 *
 *   The lines of text must be such that, were they not followed by the setext heading underline,
 *   they would be interpreted as a paragraph: they cannot be interpretable as a code fence,
 *   ATX heading, block quote, thematic break, list item, or HTML block.
 *
 *   A setext heading underline is a sequence of = characters or a sequence of - characters,
 *   with no more than 3 spaces indentation and any number of trailing spaces.
 *   If a line containing a single - can be interpreted as an empty list items,
 *   it should be interpreted this way and not as a setext heading underline.
 *
 *   The heading is a level 1 heading if = characters are used in the setext heading underline,
 *   and a level 2 heading if - characters are used.
 *   The contents of the heading are the result of parsing the preceding lines of text as CommonMark inline content.
 *   In general, a setext heading need not be preceded or followed by a blank line.
 *   However, it cannot interrupt a paragraph, so when a setext heading comes after a paragraph, a blank line is needed between them.
 */
class RuleSetextHeading extends Rule {
  constructor() {
    super("setext-heading");
    this.setRegex(/^(?!\n) {0,3}([^ ](?:.+\n)*) {0,3}(-+|=+) *(?!.)/);
  }

  public handle(data: any[]): any[] {
    const level = new Map([["=", 1], ["-", 2]]);
    console.log(data);
    return [level.get(data[2][0]), data[1]];
  }

  public render(token: Token): string {
    return `<h${token.getValue()[0]}>${token
      .getValue()[1]
      .substr(0, token.getValue()[1].length - 1)
      .replace(/\n/g, "<br />")}</h${token.getValue()[0]}>`;
  }
}

export const SetextHeading = new RuleSetextHeading();
