const fs = require("fs")
const path = require("path")
const archiver = require("archiver")

const handler = async (m, sock) => {
  const backupPath = path.join(__dirname, "../backup_source.zip")
  const rootPath = path.join(__dirname, "..")

  try {
    if (fs.existsSync(backupPath)) fs.unlinkSync(backupPath)

    const output = fs.createWriteStream(backupPath)
    const archive = archiver("zip", { zlib: { level: 9 } })

    output.on("close", async () => {
      const buffer = fs.readFileSync(backupPath)

      // Ambil owner dari global (bisa array atau string)
      const ownerJid = Array.isArray(global.owner)
        ? global.owner[0] + "@s.whatsapp.net"
        : global.owner + "@s.whatsapp.net"

      await sock.sendMessage(ownerJid, {
        document: buffer,
        mimetype: "application/zip",
        fileName: "backup_source.zip",
        caption: "📦 Backup otomatis source code bot."
      }, { quoted: m })

      m.reply("✅ Source code berhasil dibackup dan dikirim ke owner.")
    })

    archive.on("error", err => {
      console.error("❌ Gagal saat membuat backup:", err)
      m.reply("❌ Gagal membuat backup.")
    })

    archive.pipe(output)

    archive.glob("**/*", {
      cwd: rootPath,
      ignore: [
        "node_modules/**",
        "session/**",
        ".cache/**",
        ".npm/**",
        "backup_source.zip"
      ]
    })

    archive.finalize()
  } catch (err) {
    console.error(err)
    m.reply("❌ Terjadi kesalahan saat backup.")
  }
}

handler.command = ["backupsc", "backupsource"]
handler.help = ["backupsc"]
handler.tags = ["owner"]
handler.owner = true

module.exports = handler