import { Rule } from './rules/rule';
import { Lexer, Token } from './components/lexer'

class Barked {
    // Components
    protected lexer: Lexer;

    // Variables
    private token: Token[];

    constructor(lex: Lexer = Lexer.blankLexer){
        this.lexer = lex;
    };

    parse(): string {
        return '';
    }
}

let barked = new Barked();

export default barked;