import { InlineRule } from './inline'

const image = new InlineRule('image');
image.setRegex(/^!\[([^\]]+)\] {0,1}\(([^\)]+)\)/);

export default image;