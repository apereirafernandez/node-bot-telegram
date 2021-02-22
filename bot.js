// import * as Telegraf from "telegraf";

const Telegraf = require("telegraf").Telegraf;
require("dotenv").config();

const API = process.env.API;
const bot = new Telegraf(API);

bot.start((ctx) => {
  console.log(ctx.from);
  console.log(ctx.chat);
  console.log(ctx.message);
  console.log(ctx.updateSubTypes);
  ctx.reply("Welcome " + ctx.from.first_name + " " + ctx.from.last_name);
  // bot.telegram.sendMessage;
  // ctx.chat
  //   .id`welcome ${ctx.from.first_name}. You have sended a ${ctx.updateSubTypes[0]}`();
});

bot.mention("BotFather", (ctx) => {
  ctx.reply("you mentioned someone");
});

bot.phone("+34 999 9999 999", (ctx) => {
  ctx.reply("This is a phone number ");
});

bot.hashtag("programming", (ctx) => {
  ctx.reply("hashtag!");
});

bot.help((ctx) => {
  ctx.reply("HELP!!!");
});

bot.settings((ctx) => {
  ctx.reply("Settings");
});

bot.command(["mycommand", "Mycommand", "MYCOMMAND", "test"], (ctx) => {
  ctx.reply("my custom command!!");
});

bot.hears("computer", (ctx) => {
  ctx.reply("Hey I am selling a computer");
});

// bot.on("text", (ctx) => {
//   ctx.reply("you are texting");
// });

bot.on("sticker", (ctx) => {
  ctx.reply("do you like stickers?");
});

bot.launch();
