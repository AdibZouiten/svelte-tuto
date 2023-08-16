export interface User {
  id: number;
  name: string;
  city: string;
  age: number;
}

export interface Users extends Array<User> {}
