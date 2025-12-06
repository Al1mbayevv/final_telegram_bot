import TelegramBot from "node-telegram-bot-api";
import { config } from "dotenv";
config()

const TOKEN = process.env.BOT_TOKEN;

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on("message", function (msg) {
    const chatIt = msg.chat.id;
    const firstname = msg.chat.first_name;
    const text = msg.text;

    bot.sendMessage(chatIt, `Assalomu aleykum, ${firstname}`);
    bot.sendMessage(chatIt, `${text}`);


});

console.log("Bot ishga tushdi")