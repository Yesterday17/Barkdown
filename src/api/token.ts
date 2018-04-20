export class Token {
  public static blank = new Token(null, null);

  private type: string;
  private value: any[];

  public constructor(t: string, val: any[]) {
    this.type = t;
    this.value = val;
  }
}
