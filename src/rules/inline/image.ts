import { Rule } from "../../api/rule";

const Image = new Rule("image");
Image.setRegex(/^!\[([^\]]+)\] ?\(([^\)]+)\)/);

export { Image };
