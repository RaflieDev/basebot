const handler = async (m, sock, { isOwner, command }) => {
if (!isOwner) return m.reply("Khusus dev bot!")
let status = true
if (command == "self") status = false
sock.public = status
return m.reply(`Berhasil mengganti ke mode ${command}`)
}

handler.command = ["self", "public"]
module.exports = handler