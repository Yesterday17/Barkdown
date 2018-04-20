import { Rule } from "./rule";

export abstract class InlineRule extends Rule {
  constructor(name: string) {
    super(name);
  }
}
