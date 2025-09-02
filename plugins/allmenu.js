const fs = require("fs")
const path = require("path")

const handler = async (m) => {
  const caseFile = path.join(__dirname, "../case.js")
  const pluginFolder = path.join(__dirname)

  let caseCommands = []
  let pluginCommands = []

  // Ambil command dari case.js
  try {
    const caseCode = fs.readFileSync(caseFile, "utf-8")
    const regex = /handler\.command\s*=\s*([^]+|['"`][^'"`]+['"`])/g
    const matches = [...caseCode.matchAll(regex)]

    for (const match of matches) {
      const raw = match[1]
      if (raw.startsWith("[")) {
        try {
          const parsed = eval(raw)
          if (Array.isArray(parsed)) caseCommands.push(...parsed)
        } catch {}
      } else {
        caseCommands.push(raw.replace(/['"`]/g, ""))
      }
    }
  } catch (err) {
    console.warn("❌ Gagal membaca case.js:", err)
  }

  // Ambil command dari folder plugin
  try {
    const files = fs.readdirSync(pluginFolder).filter(file =>
      [".js", ".mjs", ".cjs"].includes(path.extname(file)) &&
      path.basename(file, path.extname(file)) !== "allmenu"
    )

    for (const file of files) {
      const pluginPath = path.join(pluginFolder, file)
      try {
        const plugin = require(pluginPath)
        const cmds = plugin.command
        if (cmds) {
          pluginCommands.push(...(Array.isArray(cmds) ? cmds : [cmds]))
        }
      } catch (e) {
        console.warn(`⚠️ Gagal load plugin '${file}'`)
      }
    }
  } catch (e) {
    console.warn("❌ Gagal membaca folder plugin:", e)
  }

  // Gabungkan dan buat menu
  const allCommands = [...new Set([...caseCommands, ...pluginCommands])]
  const menu = allCommands.map((cmd, i) => `🔹 .${cmd}`).join("\n")

  const teks = `*📦 LIST SEMUA FITUR:*\n\n${menu}`
  m.reply(teks)
}

handler.command = ["allmenu", "menu", "help"]
handler.tags = ["info"]
handler.help = ["allmenu"]

module.exports = handler