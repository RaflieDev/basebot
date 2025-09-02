// plugins/totalfitur.js
// plugins/totalfitur.js
const fs = require('fs')
const path = require('path')

const handler = async (m) => {
  const caseFile = path.join(__dirname, '../case.js')
  const pluginFolder = path.join(__dirname)

  // Hitung total case (command) di file case.js
  let totalCases = 0
  try {
    const caseCode = fs.readFileSync(caseFile, 'utf-8')
    const regex = /handler\.command\s*=\s*([^]+|['"`][^'"`]+['"`])/g
    const matches = [...caseCode.matchAll(regex)]

    for (const match of matches) {
      const raw = match[1]
      if (raw.startsWith('[')) {
        try {
          const parsed = eval(raw)
          if (Array.isArray(parsed)) totalCases += parsed.length
        } catch (e) {}
      } else {
        totalCases += 1
      }
    }
  } catch (e) {
    console.log('Gagal membaca case.js:', e)
  }

  // Hitung total plugin
  let totalPlugins = 0
  try {
  const allowedExt = ['.js', '.mjs', '.cjs']
  const files = fs.readdirSync(pluginFolder).filter(f => {
    const ext = path.extname(f)
    const name = path.basename(f, ext)
    return allowedExt.includes(ext) && name !== 'totalfitur'
  })

  totalPlugins = files.length
} catch (e) {
  console.log('❌ Gagal membaca folder plugin:', e)
}

  m.reply(`📦 Total Plugin: *${totalPlugins}*\n📌 Total Case/Command: *${totalCases}*`)
}

handler.command = ['totalfitur']
handler.tags = ['info']
handler.help = ['totalfitur']

module.exports = handler