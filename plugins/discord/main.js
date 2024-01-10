const { SlashCreator, GatewayServer } = require("slash-create");
const path = require("path");
const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
  ActivityType,
} = require("discord.js");

export let started_up = false;
export const discordClient = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent,
  ],
});
export let slashCreator = undefined;

export async function startup(runtimeConfig) {
  slashCreator = new SlashCreator({
    applicationID: runtimeConfig.discordApplicationId,
    publicKey: runtimeConfig.discordPublicKey,
    token: runtimeConfig.discordToken,
    client: discordClient,
  });

  slashCreator.on("error", (msg) => {
    console.error(msg);
  });

  slashCreator.on("debug", (msg) => {
    console.debug(msg);
  });

  slashCreator.withServer(
    new GatewayServer((handler) =>
      discordClient.ws.on("INTERACTION_CREATE", handler)
    )
  );

  await slashCreator.registerCommandsIn(path.join(__dirname, "commands"));

  await slashCreator.syncCommands();

  await discordClient.login(runtimeConfig.discordToken);

  console.log("Started up Discord instances...");

  started_up = true;
}
