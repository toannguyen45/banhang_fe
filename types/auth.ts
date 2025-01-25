export interface User {
    id: string;
    email: string | null;
    name: string | null;
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