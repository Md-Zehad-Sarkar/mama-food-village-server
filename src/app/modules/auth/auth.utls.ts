import jwt, { JwtPayload } from 'jsonwebtoken';
import { TPayload } from '../../types/auth.type';

//create token
export const createToken = (
  jwtPayload: TPayload,
  secret: string,
  expiresIn: string,
) => {
  return jwt.sign(jwtPayload, secret, { expiresIn });
};

//verify token
export const verifyToken = (token: string, secret: string) => {
  return jwt.verify(token, secret) as JwtPayload;
};
