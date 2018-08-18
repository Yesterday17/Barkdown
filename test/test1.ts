import {all} from '../src/preset/all'

const src = `![233](2333333)`;

all.debug();

console.log(JSON.stringify(all.lex(src), undefined, 2));
