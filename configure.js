/*
> Recode script give credits to› Dr Xenon 

📝 | Created By Dr Xenon 
🖥️ | Base Ori By Dr Xenon 
📝 | Created By Dr Xenon
📌 |Credits Dr Xenon 
📱 |Chat wa.me/2250500107362
👑 |Github: Dr Xenon2
✉️ |Email: xtechcorporation1@gmail.com
*/
const fs = require('fs')
const chalk = require('chalk')
//=================================================//
// setting bot
global.owner = "2250500107362"
global.ownername = "⏤ ͟͞ ❮❮๋ࣩࣧࣧࣧ͜͡➣ 𝐃𝐑 𝐗𝐄𝐍𝐎𝐍 ヤ"
global.botname = "⏤ ͟͞ ❮❮๋ࣩࣧࣧࣧ͜͡➣ 𝐃𝐑 𝐗𝐄𝐍𝐎𝐍 ヤ"
global.author = "2250500107362"
global.xprefix = '.'
global.autostatus = true 
global.Public = true 
global.packname = "⏤ ͟͞ ❮❮๋ࣩࣧࣧࣧ͜͡➣ 𝐃𝐑 𝐗𝐄𝐍𝐎𝐍 ヤ"
global.author = "⏤ ͟͞ ❮❮๋ࣩࣧࣧࣧ͜͡➣ 𝐃𝐑 𝐗𝐄𝐍𝐎𝐍 ヤ"
//=================================================//
global.egg = "15"
global.loc = "1"
global.nestid = "5"
global.domain = "https://ojan-ptero.panelhosting.xyz"
global.apikey = "ptla_UpmB8I6ClCLI7Qu2jyhsBIR9GK33yu2CSb8fK5wtSqb"
global.capikey = "ptlc_GYzrdAtm8DkuFDBRYg2L4TF5bhFPvxYeeR86ichBsih"
//=================================================//
global.mess = {
    owner: '`command reserved for owner only<\>`',
 prem: '`command reserved for premium only<\>`',
    admin: '`command reserved for admins only<\>`',
    group: '`feature for group only<\>`',
    done: '`Done ✓`',
    error: 'Error !',
    success: 'Succes •'
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.green.bold(`Update ${__filename}`))
delete require.cache[file]
require(file)
})