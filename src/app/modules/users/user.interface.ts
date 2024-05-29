export interface IUser {
  name: string;
  email: string;
  password: string;
  contact: string;
  role?: 'Admin' | 'Consumer';
}
