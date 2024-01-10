// Is een plugin die in runtime wordt geladen zodat we overal in de server deze plugin kunnen gebruiken
// Wel alleen via de server tho, want wil niet dat de client zomaar iets doet
// iets met socket IO ofzo
import {
  startup,
  discordClient,
  slashCreator,
  started_up,
} from "~/plugins/discord/main";

async function getDiscordClient() {
  if (!started_up) {
    await startup();
  }
  return discordClient;
}

async function getSlashCreatorInstance() {
  if (!started_up) {
    await startup();
  }
  return getSlashCreatorInstance;
}

export default defineNuxtPlugin({
  name: "discord-plugin",
  enforce: "pre", // or 'post'
  async setup(nuxtApp) {
    // this is the equivalent of a normal functional plugin
    return {
      provide: {
        getDiscordInstance: () => {
          return discordClient;
        },
        getSlashCreatorInstance: () => {
          return slashCreator;
        },
      },
    };
  },
  hooks: {
    // You can directly register Nuxt app runtime hooks here
    "app:created"() {
      startup();
    },
  },
  env: {
    // Set this value to `false` if you don't want the plugin to run when rendering server-only or island components.
    islands: true,
  },
});
