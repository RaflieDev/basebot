const fs = require("fs")
const path = require("path")

const handler = async (m, sock, { isOwner, text, command }) => {
  try {
    if (!isOwner) return m.reply("❌ Fitur ini hanya untuk developer bot!")

    if (!text || !m.quoted || !m.quoted.text)
      return m.reply(`⚠️ Contoh: *.${command}* namafile.js (reply dengan isi code)`)

    const allowedExt = [".js", ".mjs", ".cjs"]
    const ext = path.extname(text.trim())

    if (!allowedExt.includes(ext))
      return m.reply(`❌ Ekstensi tidak didukung!\nGunakan salah satu: ${allowedExt.join(", ")}`)

    const fileName = text.trim()
    const filePath = path.join(__dirname, fileName)

    await fs.writeFileSync(filePath, m.quoted.text)

    const actionWords = {
      saveplugin: "menyimpan",
      sf: "menyimpan",
      svp: "menyimpan",
    }

    const action = actionWords[command] || "menambahkan"
    return m.reply(`✅ Berhasil ${action} plugin *${fileName}*`)
  } catch (err) {
    console.error(err)
    m.reply("❌ Gagal menyimpan plugin. Cek console untuk detail error.")
  }
}

handler.command = ["addp", "addplugin", "addplugins", "saveplugin", "sf", "svp"]
handler.tags = ["owner"]
handler.help = ["addplugin <nama.js> (reply code)"]

module.exports = handler