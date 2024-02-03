import {
  startup,
  discordClient,
  slashCreator,
  getstarted_up,
} from "../discordHandler.js";

export default defineNuxtPlugin((nuxtApp) => {
  console.log("Creating discord nuxt plugin...");
  console.log(
    "Plugin thinks that discord has been started_up:" + getstarted_up()
  );
  nuxtApp.provide("discordClient", () => discordClient);
});
