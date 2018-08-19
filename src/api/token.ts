export class Token {
  public static blank = new Token(null);

  private type: string;
  private value: any[];
  private raw: string;

  public constructor(t: string) {
    this.type = t;
    this.value = [];
  }

  public getType(): string {
    return this.type;
  }

  public setRaw(r: string): void {
    this.raw = r;
  }

  public getRaw(): string {
    return this.raw;
  }

  public putValue(val: any[]): void {
    Array.prototype.push.apply(this.value, val);
  }

  public getValue(): any[] {
    return this.value;
  }
}
