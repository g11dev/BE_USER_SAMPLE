import { PassportSerializer } from '@nestjs/passport';
export declare class UserSerializer extends PassportSerializer {
    serializeUser(user: any, done: (err: Error, user: any) => void): void;
    deserializeUser(payload: {
        id: string;
        sid: string;
    }, done: (err: Error, user: any) => void): Promise<void>;
}
