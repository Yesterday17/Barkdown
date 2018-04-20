import { Rule } from "./rule";

export abstract class BlockRule extends Rule {
  constructor(name: string) {
    super(name);
  }
}
