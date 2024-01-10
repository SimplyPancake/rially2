const { SlashCreator, GatewayServer } = require("slash-create");
const runtimeConfig = useRuntimeConfig();
const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
  ActivityType,
} = require("discord.js");

const path = require("path");

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

export const slashCreator = new SlashCreator({
  applicationID: runtimeConfig.discordApplicationId,
  publicKey: runtimeConfig.discordPublicKey,
  token: runtimeConfig.discordToken,
  client: discordClient,
});

export async function startup() {
  slashCreator.withServer(
    new GatewayServer((handler: any) =>
      discordClient.ws.on("INTERACTION_CREATE", handler)
    )
  );

  await slashCreator.registerCommandsIn(path.join(__dirname, "commands"));

  await slashCreator.syncCommands();

  await discordClient.login(
    "DISCORD_MTE4ODQ1Mzc2ODMzMzg4OTU2Ng.GDgV2e.sFRkSZxQjF0Al_CT3YICAhRXkNzOBduY6U3kII"
  );

  console.log("Started up Discord instances...");

  started_up = true;
}

// export default {
//   startup,
//   slashCreator: creator,
//   discordClient: client,
// };
