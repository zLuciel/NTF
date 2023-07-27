import NextAuth from 'next-auth';
import DiscordProvider from "next-auth/providers/discord";

//const scopes = ['identify'].join(' ')

export const authOptions = {
  session: {
    strategy:"jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    DiscordProvider({
      clientId: "1130929761280082001", 
      clientSecret: "KyVvQGjyYUnbInCBqsf5mqM0nun0yLfp",
      //authorization: {params: {scope: scopes}},
    }),
  ],
 

  callbacks: {
    async jwt({token, user, account, profile}) {
      return token;
    },
    async session( session ) {
      return session;
    },
  }
}

const handler =  NextAuth(authOptions);

export {handler as GET, handler as POST}