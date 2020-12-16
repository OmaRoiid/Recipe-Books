export class User {
  constructor(
    public email: string,
    public id: string,
    private mToken: string
  ) {}

  get Token() {
    return this.mToken;
  }
}
