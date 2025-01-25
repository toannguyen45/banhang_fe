import { SignJWT, jwtVerify } from 'jose';
import { JWTPayload } from '@/types/auth';

const JWT_SECRET = new TextEncoder().encode(
    process.env.JWT_SECRET || "your-secret-key"
);

const alg = 'HS256';

export async function signJWT(
    payload: Omit<JWTPayload, 'iat' | 'exp'>, 
    options: { exp?: number } = {}
) {
    const jwt = await new SignJWT({
        ...payload,
        iat: Math.floor(Date.now() / 1000),
    })
        .setProtectedHeader({ alg })
        .setIssuedAt()
        .setExpirationTime(options.exp || '24h')
        .sign(JWT_SECRET);
    
    return jwt;
}

export async function verifyJWT<T extends JWTPayload>(token: string): Promise<T | null> {
    try {
        const { payload } = await jwtVerify(token, JWT_SECRET);
        return payload as T;
    } catch (error) {
        console.error("JWT verification failed:", error);
        return null;
    }
} 