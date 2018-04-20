import { Rule } from "../../api/rule";

const Hr = new Rule("Hr");
Hr.setRegex(
  /^((?:(?:\* ?){3,})|(?:(?:- ?){3,})|(?:(?:_ ?){3,}))(?:[\*-_] ?)* *\n/
);

export { Hr };
