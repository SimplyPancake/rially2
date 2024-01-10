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
export let slashCreator: any = undefined;

export async function startup(runtimeConfig: any) {
  slashCreator = new SlashCreator({
    applicationID: runtimeConfig.discordApplicationId,
    publicKey: runtimeConfig.discordPublicKey,
    token: runtimeConfig.discordToken,
    client: discordClient,
  });

  slashCreator.withServer(
    new GatewayServer((handler: any) =>
      discordClient.ws.on("INTERACTION_CREATE", handler)
    )
  );

  await slashCreator.registerCommandsIn(path.join(__dirname, "commands"));

  await slashCreator.syncCommands();

  await discordClient.login(runtimeConfig.discordToken);

  console.log("Started up Discord instances...");

  started_up = true;
}

// export default {
//   startup,
//   slashCreator: creator,
//   discordClient: client,
// };
