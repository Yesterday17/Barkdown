import { all } from "../src/preset/all";

const src = `
# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6
![233](2333333)
`;

all.debug();

console.log(JSON.stringify(all.lex(src), undefined, 2));
