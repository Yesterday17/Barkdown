import { InlineRule } from "../../api/rules/inline";

const image = new InlineRule("image");
image.setRegex(/^!\[([^\]]+)\] ?\(([^\)]+)\)/);

export default image;
