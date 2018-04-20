export interface rule {
    name: string;
    description?: string;
    regex: RegExp;
}

export class Rule implements rule {
    public name: string;
    public regex: RegExp;

    public description: string;

    constructor(rname: string){
        this.name = rname;
    }

    public setDescription(desc: string): void {
        this.description = desc;
    }

    public setRegex(reg: RegExp): void {
        this.regex = reg;
    }
}