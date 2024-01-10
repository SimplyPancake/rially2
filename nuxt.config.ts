import { resolve } from "node:path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@pinia/nuxt"],
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs",
    cookie: resolve(__dirname, "node_modules/cookie"),
  },
  runtimeConfig: {
    discordApplicationId: process.env.NUXT_DISCORD_APPLICATION_ID,
    discordPublicKey: process.env.NUXT_DISCORD_PUBLIC_KEY,
    discordToken: process.env.NUXT_DISCORD_TOKEN,
    discordAuthSecret: process.env.NUXT_DISCORD_AUTH_SECRET,
    authJs: {
      secret: process.env.NUXT_NEXTAUTH_SECRET, // You can generate one with `openssl rand -base64 32`
    },
    public: {
      authJs: {
        baseUrl: process.env.NUXT_NEXTAUTH_URL, // The URL of your deployed app (used for origin Check in production)
        verifyClientOnEveryRequest: true, // whether to hit the /auth/session endpoint on every client request
      },
    },
  },
  // For debugging:
  sourcemap: {
    server: true,
    client: true,
  },
});
