import type { AuthConfig, Session } from "@auth/core/types";
import { PrismaClient, User } from "@prisma/client";
import Discord from "@auth/core/providers/discord";
import { NuxtAuthHandler } from "#auth";
import RiallyAdapter from "~/server/utils/riallyAdapter";
import { AdapterUser } from "@auth/core/adapters";
import { JWT } from "@auth/core/jwt";

// The #auth virtual import comes from this module. You can use it on the client
// and server side, however not every export is universal. For example do not
// use sign-in and sign-out on the server side.

const runtimeConfig = useRuntimeConfig();
const prisma = new PrismaClient();

// Refer to Auth.js docs for more details
export const authOptions: AuthConfig = {
  secret: runtimeConfig.authJs.secret,
  adapter: RiallyAdapter(prisma),
  providers: [
    Discord({
      clientId: runtimeConfig.discordApplicationId,
      clientSecret: runtimeConfig.discordAuthSecret,
    }),
  ],
  callbacks: {
    session: async ({
      session,
      user,
    }: {
      session: Session;
      user: AdapterUser;
    }) => {
      // @ts-expect-error
      session.user.id = user.id;
      // @ts-expect-error
      session.user.isAdmin = user.isAdmin;
      return Promise.resolve(session);
    },
  },
};

export default NuxtAuthHandler(authOptions, runtimeConfig);
// If you don't want to pass the full runtime config,
//  you can pass something like this: { public: { authJs: { baseUrl: "" } } }
