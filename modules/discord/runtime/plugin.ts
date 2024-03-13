import {
  startup,
  discordClient,
  slashCreator,
  started_up,
} from "./discordHandler";

export default defineNuxtPlugin((nuxtApp) => {
  console.log("Plugin!");
  //   console.log(nuxtApp);
  //   console.info(
  //     "Plugin thinks that discord has been started_up:" + started_up
  //   );
  //   nuxtApp.provide("discordClient", () => discordClient);
});
