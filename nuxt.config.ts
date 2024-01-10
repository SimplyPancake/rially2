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
    discordApplicationId: "",
    discordPublicKey: "",
    discordToken: "",
  },
  // For debugging:
  sourcemap: {
    server: true,
    client: true,
  },
});
