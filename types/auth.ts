export interface User {
  id: string;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  profileImage: string | null;
  role: string;
}

export interface JWTPayload {
  id: string;
  email: string;
  role: string;
  [key: string]: string | number | boolean | undefined;
  iat?: number;
  exp?: number;
}

export interface AuthResponse {
  success?: boolean;
  error?: string;
}
