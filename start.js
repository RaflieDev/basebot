/*

//=====================================//

  #- Credits By Zero - X [ Fidzz ]
   Contact : https://wa.me/62895410790927
   
   Devoleper : https://wa.me/62895410790927
 
   [ ! ] Jangan Hapus Credits Hargai Devoleper
   [ ! ] Script Case X Plugins Di Buat Pada :
   ( Sabtu, 21, juni 2025 )
   
//=====================================//

*/

const { 
  default:
  makeWaSocket,
  useMultiFileAuthState,
  DisconnectReason,
  makeInMemoryStore,
  fetchLatestWaWebVersion,
  proto,
  jidDecode,
  } = require("baileys");

const PairingCode = true
const fs = require("fs");
const pino = require('pino');
const path = require('path');
const axios = require('axios');
const chalk = require('chalk');
const readline = require('readline');
const FileType = require('file-type');
const { exec } = require('child_process');
const { say } = require('cfonts')
const { Boom } = require('@hapi/boom');

const store = makeInMemoryStore({ logger: pino().child({ level: "silent", stream: "store" }) });

const { loadPlugins, handleMessage } = require('./library/Plugins')
const DataBase = require('./source/database');
const database = new DataBase();
(async () => {
const loadData = await database.read()
if (loadData && Object.keys(loadData).length === 0) {
global.db = {
users: {},
groups: {},
database: {},
settings : {}, 
...(loadData || {}),
}
await database.write(global.db)
} else {
global.db = loadData
}
setInterval(async () => {
if (global.db) await database.write(global.db)
}, 3500)
})()

const { MessagesUpsert, Solving } = require('./source/message')
const { isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, randomToken } = require('./library/function');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))

async function start() {
const { state, saveCreds } = await useMultiFileAuthState('session');
const sock = await makeWaSocket ({ 
browser: ["Ubuntu", "Chrome", "22.0.04"],      
generateHighQualityLinkPreview: true, 
printQrInTerminal: !PairingCode,
auth: state,
logger: pino({ level: "silent" }),
});

if (PairingCode && !sock.authState.creds.registered) {
let phoneNumber
phoneNumber = await question(chalk.blue.bold('Masukan Nomor WhatsApp :\n'))
phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
let code = await sock.requestPairingCode(phoneNumber);
code = code.match(/.{1,4}/g).join(" - ") || code
await console.log(`${chalk.blue.bold('Kode Pairing')} : ${chalk.white.bold(code)}`)
}
    
sock.ev.on("creds.update", saveCreds);

    sock.ev.on("connection.update", async (update) => {
        const { connection, lastDisconnect } = update;

        if (connection === "close") {
            const reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
            console.error("Disconnect Reason:", reason);

            switch (reason) {
                case DisconnectReason.badSession:
                    console.log("Bad Session File, please delete session and rescan QR.");
                    await sock.logout();
                    break;
                case DisconnectReason.connectionClosed:
                case DisconnectReason.connectionLost:
                case DisconnectReason.timedOut:
                    console.log("[SYSTEM] Connection closed/lost/timed out. Reconnecting...");
                    return start();
                case DisconnectReason.connectionReplaced:
                    console.log("Connection replaced. Logging out current session.");
                    await sock.logout();
                    break;
                case DisconnectReason.restartRequired:
                    console.log("Restart required. Restarting bot...");
                    return start();
                case DisconnectReason.loggedOut:
                    console.log("Logged out from WhatsApp. Please rescan QR.");
                    await sock.logout();
                    break;
                default:
                    console.log("Unknown reason. Reconnecting...");
                    return start();
            }
        } else if (connection === "open") {
            console.log(chalk.green("[BOT] ✅ Berhasil Terhubung ke WhatsApp\n"));
 
await loadPlugins()
console.log(chalk.green("🔄 Semua plugin berhasil dimuat!"))          
            
 const ownerNumber = `${owner}` // Ganti dengan nomor owner utama (tanpa +)
const ownerJid = `${ownerNumber}@s.whatsapp.net`;
const ownerName = `${namaOwner}`; // Ganti dengan nama pemilik bot
const botNumber = `${sock.user.id.split(":")[0]}@s.whatsapp.net`;
const currentDate = new Date();
const formattedDate = `${currentDate.toLocaleDateString()}`;
const formattedDate2 = `${currentDate.toLocaleTimeString()}`;
const dayOfWeek = currentDate.toLocaleString('default', { weekday: 'long' });

// Mengirim pesan ke nomor bot
sock.sendMessage(
    botNumber, 
    {
        text: `📌 *BOT ONLINE* 🌟

📌 *PEMILIK BOT :*
- 📥 *NAMA OWNER :* ${namaOwner} 
- 👤 *NOMOR BOT :* ${botNumber}

📜 *INFO BOT:*
- 🌟 *NAMA :* ${botname}
- 👑 *OWNER :* ${owner}
- 📅 *TANGGAL :* ${formattedDate}
- 🕛 *WAKTU :* ${formattedDate2}
- 📆 *HARI :* ${dayOfWeek}

⚙️ *#- Online*`
    }
);
        }
    });

await store.bind(sock.ev)	
await Solving(sock, store)
	
sock.ev.on('messages.upsert', async (message) => {
await MessagesUpsert(sock, message, store);
})

sock.ev.on('contacts.update', (update) => {
for (let contact of update) {
let id = 
sock.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}})
	
sock.ev.on('group-participants.update', async (update) => {
const { id, author, participants, action } = update
try {
const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: { "extendedTextMessage": {"text": "[ 𝗚𝗿𝗼𝘂𝗽 𝗡𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻 ]"}}}

if (global.db.groups[id] && global.db.groups[id].welcome == true) {
const metadata = await sock.groupMetadata(id)
let teks
for(let n of participants) {
let profile;
try {
profile = await sock.profilePictureUrl(n, 'image');
} catch {
profile = 'https://img102.pixhost.to/images/294/559933293_sazxofficial.jpg';
}
if (action == 'add') {
teks = author.split("").length < 1 ? `@${n.split('@')[0]} join via *link group*` : author !== n ? `@${author.split("@")[0]} telah *menambahkan* @${n.split('@')[0]} kedalam grup` : ``
let img = await welcomeBanner(profile, n.split("@")[0], metadata.subject, "welcome")
await sock.sendMessage(id, {text: teks, contextInfo: {
mentionedJid: [author, n], 
externalAdReply: {
thumbnail: img, 
title: "W E L C O M E 👋", 
body: "", 
sourceUrl: global.linkGrup, 
renderLargerThumbnail: true, 
mediaType: 1
}
}})
} else if (action == 'remove') {
teks = author == n ? `@${n.split('@')[0]} telah *keluar* dari grup` : author !== n ? `@${author.split("@")[0]} telah *mengeluarkan* @${n.split('@')[0]} dari grup` : ""
let img = await welcomeBanner(profile, n.split("@")[0], metadata.subject, "remove")
await sock.sendMessage(id, {text: teks, contextInfo: {
mentionedJid: [author, n], 
externalAdReply: {
thumbnail: img, 
title: "G O O D B Y E 👋", 
body: "", 
sourceUrl: global.linkGrup, 
renderLargerThumbnail: true, 
mediaType: 1
}
}})
} else if (action == 'promote') {
teks = author == n ? `@${n.split('@')[0]} telah *menjadi admin* grup ` : author !== n ? `@${author.split("@")[0]} telah *menjadikan* @${n.split('@')[0]} sebagai *admin* grup` : ""
let img = await promoteBanner(profile, n.split("@")[0], "promote")
await sock.sendMessage(id, {text: teks, contextInfo: {
mentionedJid: [author, n], 
externalAdReply: {
thumbnail: img, 
title: "P R O M O T E 📍", 
body: "", 
sourceUrl: global.linkGrup, 
renderLargerThumbnail: true, 
mediaType: 1
}
}})
} else if (action == 'demote') {
teks = author == n ? `@${n.split('@')[0]} telah *berhenti* menjadi *admin*` : author !== n ? `@${author.split("@")[0]} telah *menghentikan* @${n.split('@')[0]} sebagai *admin* grup` : ""
let img = await promoteBanner(profile, n.split("@")[0], "demote")
await sock.sendMessage(id, {text: teks, contextInfo: {
mentionedJid: [author, n], 
externalAdReply: {
thumbnail: img, 
title: "D E M O T E 📍", 
body: "", 
sourceUrl: global.linkGrup, 
renderLargerThumbnail: true, 
mediaType: 1
}
}})
}}}
} catch (e) {
}
})

return sock

}

start()  
    
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});