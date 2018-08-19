import { all } from "../src/preset/all";

const src = `
# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6
##
###Not a Header
![233](2333333)
---
`;

// Print all the rules
all.lexer.debug();

const tokens = all.lexer.lex(src);

// Print all the tokens
console.log(JSON.stringify(tokens, undefined, 2));

// Print the parse result
console.log(all.renderer.parse(tokens));
