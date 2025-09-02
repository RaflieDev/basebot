const fs = require('fs');
const chalk = require('chalk');
const { version } = require("./package.json")
 
global.owner = '62895410790927'
global.versi = version
global.namaOwner = "ZERO X"
global.packname = 'MEMEK'
global.botname = 'CASE X PLUGINS'
global.botname2 = 'CASE X PLUGIN'
global.dev = '62895410790927'

global.linkOwner = "https://wa.me/6"
global.linkWebsite = "https://"
global.linkGrup = "https://whatsapp.com/channel/"

global.linkSaluran = "https://whatsapp.com/channel/"
global.idSaluran = "@newsletter"
global.namaSaluran = "kontol"

global.image = {
menu: "https://files.catbox.moe/qeu8el.jpeg", 
reply: "https://files.catbox.moe/qeu8el.jpeg", 
logo: "https://files.catbox.moe/qeu8el.jpeg", 
}

global.systemN = "sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ"
global.mess = {
    regis : "*[ sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ ]*\nᴋᴀᴍᴜ ʙᴇʟᴜᴍ ᴛᴇʀᴅᴀғᴛᴀʀ sɪʟᴀʜᴋᴀɴ ᴋᴇᴛɪᴋ .ᴅᴀғᴛᴀʀ",
    creator: "*[ sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ ]*\nᴋʜᴜsᴜs ᴰᴱᵛᴼᴸᴱᴾᴱᴿ ᴛᴏʟʟ😹",
	owner: "*[ sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ ]*\nᴋʜᴜsᴜs ᴏᴡɴᴇʀ ᴛᴏʟʟ😹",
	admin: "*[ sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ ]*\nғɪᴛᴜʀ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ",
	botAdmin: "*[ sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ ]*\nʙᴏᴛ ʜᴀʀᴜs ᴀᴅᴍɪɴ",
	group: "*[ sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ ]*\nғɪᴛᴜʀ ɴʏᴀ ᴋʜᴜsᴜs ᴅɪ ɢʀᴏᴜᴘ ʏᴀʜ ᴀɴᴊᴇɴɢ",
	private: "*[ sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ ]*\nғɪᴛᴜʀ ɴʏᴀ ᴋʜᴜsᴜs ᴘʀɪᴠᴀᴛᴇ ʏᴀʜ ᴀɴᴊᴇɴɢ",
    bot : "*[ sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ ]*\nᴏɴʟʏ ʙᴏᴛ ᴜsᴇʀ",
	prem: "*[ sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ ]*\nᴋʜᴜsᴜs ᴘʀᴇᴍɪᴜᴍ ᴛᴏʟʟ😹",
	wait: 'ᴡᴀɪᴛɪɴɢ ⏳',
	error: 'ERROR❗',
	done: 'ᴅᴏɴᴇ ✅'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})