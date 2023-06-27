import { config } from "dotenv";
import {Client, GatewayIntentBits } from "discord.js";

config();

const client = new Client({
  intents: [
    "Guilds",
    "GuildMessages",
    "MessageContent",
    "GuildMessageReactions",
    "DirectMessageReactions",
    "DirectMessages",
    "DirectMessageTyping"
  ]
});

client.login(process.env.TOKEN);

client.on("ready", () => {
  console.log("Alive");
});

client.on("messageCreate", (message) => {
  if (message.content === "hi") {
    message.reply("Hi there! How can I help you today?");
  }

  if (message.content === "!help") {
    const embed = {
      title: "Help",
      description: "Here are some commands you can use:",
      fields: [
        {
          name: "!time",
          value: "Displays the current time."
        },
        {
          name: "!weather",
          value: "Shows the weather forecast."
        }
      ],
      color: 0xFF0000 // Updated color value to an integer
    };

    message.channel.send({ embeds: [embed] });
  }

  if (message.content === "!time") {
    const currentTime = new Date().toLocaleTimeString();
    message.reply(`The current time is: ${currentTime}`);
  }
});

client.on("messageReactionAdd", (messageReaction, user) => {
  console.log(user.username);
  console.log(messageReaction.emoji.name);
});
