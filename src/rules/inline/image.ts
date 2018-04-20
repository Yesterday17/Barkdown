import { InlineRule } from "../../api/rules/inline";

const Image = new InlineRule("image");
Image.setRegex(/^!\[([^\]]+)\] ?\(([^\)]+)\)/);

export { Image };
