import { Rule } from "../../../api/rule";

const Bilihr = new Rule("Bilihr");
Bilihr.setRegex(
  /^((?:(?:\* ?){3,})|(?:(?:- ?){3,})|(?:(?:_ ?){3,}))(?:[\*-_] ?)* *\n/
);

export { Bilihr };
