import {BlockRule} from './block'

const code = new BlockRule('code');
code.setRegex(/     /);

export default code