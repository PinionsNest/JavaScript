import { REST, Routes, Client, GatewayIntentBits } from 'discord.js';

const commands = [
  {
    name: 'whoareyou',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken("MTEyMDc0ODUyMDQwMDQ5NDY2Mw.GtqKnn.6ljDa49EttM1uoMWLQNuFwcFEqyo0LOQAIOGKE");

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands("1120748520400494663"), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'whoareyou') {
    await interaction.reply('You can call me big daddy!');
  }
});

client.login("MTEyMDc0ODUyMDQwMDQ5NDY2Mw.GtqKnn.6ljDa49EttM1uoMWLQNuFwcFEqyo0LOQAIOGKE");