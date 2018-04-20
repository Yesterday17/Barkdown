export class Token {
  /// The Type of a token.
  private type: string;
  // The content of a token.
  private value: any[];

  public constructor(t: string, val: any[]) {
    this.type = t;
    this.value = val;
  }
}
