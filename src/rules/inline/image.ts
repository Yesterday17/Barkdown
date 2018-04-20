import { InlineRule } from './inline'

const image = new InlineRule('image');
image.setRegex(/^!\[([^\]]+)\] ?\(([^\)]+)\)/);

export default image;