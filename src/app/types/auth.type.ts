import { userRole } from '../modules/users/user.constant';

//jwt token create jwt payload type
export type TPayload = {
  email?: string;
  phone?: string;
  name: string;
  role: string;
};

//user login type
export type TLoginUser = {
  email?: string;
  phone?: string;
  password: string;
};

export type TUserRole = keyof typeof userRole;
