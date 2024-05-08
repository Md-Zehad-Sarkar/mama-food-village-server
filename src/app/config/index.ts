import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  Node_ENV: process.env.NODE_ENV,
  Base_url: process.env.BASE_URL,
  Port: process.env.PORT,
  DATABASE_URI: process.env.DATABASE_URI,
  DATABASE_SECRET_PASSWORD: process.env.DATABASE_SECRET_PASSWORD,
  BCRYPT_SALT: process.env.BCRYPT_SALT,
  Jwt_Access_secret: process.env.JWT_ACCESS_SECRET,
  Jwt_Refresh_token: process.env.JWT_REFRESH_SECRET,
  Jwt_Access_Expires_In: process.env.JWT_ACCESS_EXPIRES_IN,
  Jwt_Refresh_Expires_In: process.env.JWT_REFRESH_EXPIRES_IN,
};
