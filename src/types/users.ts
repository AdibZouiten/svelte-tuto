export interface User {
  id: number;
  name: string;
  city: string;
}

export interface Users extends Array<User> {}
