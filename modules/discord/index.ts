import { createResolver, defineNuxtModule, addPlugin, useNuxt } from "nuxt/kit";
import {
  startup,
  discordClient,
  slashCreator,
  started_up,
} from "./runtime/discordHandler.js";

export default defineNuxtModule({
  meta: {
    name: "discordModule",
  },
  async setup() {
    // const resolver = createResolver(import.meta.url);
    // Startup discord
    // const nuxt = useNuxt();
    // await startup(nuxt.options.runtimeConfig);
    // addPlugin({
    //   src: resolver.resolve("runtime/plugin.ts"),
    //   mode: "server",
    // });
  },
});
