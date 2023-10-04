import { User } from './src/models/user.model';
import 'next-auth'
import { PushSubscription } from 'web-push';

declare global {
    var subscriptions: PushSubscription[];
}


/* Not sure if this is needed. */
// declare module 'next-auth' {
//   export interface Session {
//     uid: string
//   }
// }

import { DefaultSession, DefaultUser } from "next-auth"
import { JWT, DefaultJWT } from "next-auth/jwt"

declare module "next-auth" {
    interface Session {
        user: {
            id: string,
            role: string,
        } & DefaultSession
    }

    interface User extends DefaultUser {
        role: string,
    }
}

declare module "next-auth/jwt" {
    interface JWT extends DefaultJWT {
        role: string,
    }
}