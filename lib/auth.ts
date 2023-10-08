import {NextAuthOptions} from "next-auth";
import GoogleProvider from 'next-auth/providers/google';

function getGoogleCredentials() {
    const clientId = process.env.GOOGLE_ID
    const clientSecret = process.env.GOOGLE_SECRET

    if (!clientId || clientId.length === 0) {
        throw new Error('Missing GOOGLE_CLIENT_ID environment variable.')
    }
    if (!clientSecret || clientSecret.length === 0) {
        throw new Error('Missing GOOGLE_CLIENT_SECRET environment variable.')
    }
    return {
        clientId,
        clientSecret
    }
}

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: getGoogleCredentials().clientId,
            clientSecret: getGoogleCredentials().clientSecret,
        }),
    ],
    session: {
        strategy: 'jwt',
    },
    callbacks: {

    },
    pages: {
        signIn: '/login',
    }
}