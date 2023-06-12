export class User {
  constructor(
    public username: string,
    public password: string,
    public role: 'ANONYMOUS' | 'USER' | 'ADMIN'
  ) {}
}
