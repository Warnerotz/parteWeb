export class User {
  constructor(
    public _id: string,
    public name: string,
    public surname: string,
    public email: string,
    public role: string,
    public age: string,
    public password: string,
    public image: string,
    public validated: boolean
  ) {}
}
