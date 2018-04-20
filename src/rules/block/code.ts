import { BlockRule } from "../../api/rules/block";

const code = new BlockRule("code");
code.setRegex(/     /);

export default code;
