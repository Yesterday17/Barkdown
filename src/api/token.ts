export class Token {
  public static blank = new Token(null);

  private type: string;
  private value: any[];
  private raw: string;

  public constructor(t: string) {
    this.type = t;
    this.value = [];
  }

  public setRaw(r: string): void {
    this.raw = r;
  }

  public getRaw(): string {
    return this.raw;
  }

  public putValue(...val: any[]): void {
    this.value.push(val);
  }

  public getValue(): any[] {
    return this.value;
  }
}
