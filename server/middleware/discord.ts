import {
  startup,
  discordClient,
  slashCreator,
  started_up,
} from "@/discord/discordHandler";

export default defineEventHandler(async (event) => {
  if (!started_up) {
    console.log("Creating new Discord client");
    const runtimeConfig = useRuntimeConfig();

    await startup(runtimeConfig);
  }
  event.context.discord = discordClient;
});
