const fs = require("fs");
const os = require("os");

let handler = async (m, sock, { isCreator, isPremium }) => {
const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, toIDR, capital } = require('../library/function');
const menutxt = `
yo
`;

  const interactiveMetaButton = {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
      name: 'single_select',
      paramsJson: JSON.stringify({
        title: 'SELLECT MENU',
        sections: [
          {
            title: 'LIST MENU',
            highlight_label: 'Recommended',
            rows: [
              { title: 'ALL MENU', id: '.allmenu' },       
            ]
          }
        ]
      })
    }
  };

  const buttonMessage = {
    footer: `${botname}`,
    buttons: [
      {
        buttonId: '.owner',
        buttonText: { displayText: 'Contact Owner' },
        type: 1
      },
      interactiveMetaButton
    ],
    headerType: 1,
    viewOnce: true,
    document: fs.readFileSync('./package.json'),
    fileName: `By ${namaOwner} </>`,
    mimetype: 'application/json',
    fileLength: 99999999,
    caption: menutxt,
    contextInfo: {
      isForwarded: true,
      mentionedJid: [m.sender, `${global.owner}@s.whatsapp.net`],
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.idSaluran,
        newsletterName: global.namaSaluran
      },
      externalAdReply: {
        title: `${botname} - ${versi}`,
        body: `Runtime : ${runtime(process.uptime())}`,
        thumbnailUrl: global.image.menu,
        sourceUrl: linkSaluran,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  };

  await sock.sendMessage(m.chat, buttonMessage, { quoted: m });
};

handler.command = ["menu"];
module.exports = handler;