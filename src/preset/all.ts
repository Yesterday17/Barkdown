import {Lexer} from '../components/lexer'
import {Image} from '../rules/inline/image'

const lexer = new Lexer();
lexer.addRule(Image)

export { lexer as all} 