const Discord = require("discord.js");
const Client = new Discord.Client();
const { prefix, token } = require("./config.json");
const fs = require("fs");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const dbdb = new FileSync("interventions.json")
const db = low(dbdb)
Client.commands = new Discord.Collection();

//status
Client.on('ready', () => {
    console.log("call 911 chargé.")
    const statuses = [
        () => `🌀・help | Utilisateurs : ${Client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)} `,
        () => `🌀・help | Version 1.0.0`,
        () => `🌀・help | call 911`,
        () => `🌀・help | Interventions : 1`,
        () => `🌀・help | Serveurs : ${Client.guilds.cache.size} `,
      ];
      let i = 0;
      setInterval(() => {
        Client.user.setActivity(`${statuses[i]()}`, {
          type: "PLAYING",
        });
        i = ++i % statuses.length;
    }, 1e4);
});

Client.on("message", async (message) => {
  if(message.content == "/call-911-fr"){
    message.delete()
    let idmember = message.author.id
    let intervention = db.get("Interventions").value()
    let newchannel = await message.guild.channels.create(`911-call-${message.author.username}`, {type: 'text', parent: message.guild.channels.cache.get("838041363143458816")})
    db.get("Interventions").value(intervention[Math.floor(Math.random() * intervention.length)])

    .catch(err => {
      let embederreur = new Discord.MessageEmbed()
      .setColor("#ff0005")
      .setDescription(":x: | Une erreur est survenue, relancez une intervention.")
      .setFooter("(c)call 911 | 2021.")
      message.channel.send(embederreur)
    });
  }
});

Client.on("message", (message) => {
  if(message.author.bot || message.channel.type == "dm") return;
  if(message.content.startsWith(prefix + "interventions")){
    let embedinterventions = new Discord.MessageEmbed()
    .setColor("#ff0005")
    .setTitle("Voici toutes les interventions disponibles :")
    .addField("Incendie :", "1", true)
    .addField("prise d'otage :", "1", true)
    .setFooter("(c)call 911 | 2021.")
    message.channel.send(embedinterventions)
  }
})

Client.login(token)
