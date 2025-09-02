// lib/pluginHandler.js
const fs = require("fs")
const path = require("path")
const { pathToFileURL } = require("url")

let cachedPlugins = []

const loadPlugins = async () => {
  const direktori = path.join(__dirname, "../plugins")

  if (!fs.existsSync(direktori)) {
    console.warn("📂 Folder 'plugins/' tidak ditemukan.")
    return []
  }

  const files = fs.readdirSync(direktori).filter(f =>
    [".js", ".mjs", ".cjs"].includes(path.extname(f))
  )

  const plugins = []

  for (const file of files) {
    const filePath = path.join(direktori, file)

    try {
      const resolvedPath = require.resolve(filePath)
      if (require.cache[resolvedPath]) delete require.cache[resolvedPath]
    } catch {}

    let plugin
    try {
      if (file.endsWith(".mjs")) {
        plugin = (await import(pathToFileURL(filePath).href)).default
      } else {
        plugin = require(filePath)
      }

      if (typeof plugin === "function" && Array.isArray(plugin.command)) {
        plugins.push(plugin)
      } else {
        console.warn(`⚠️ Plugin '${file}' tidak valid.`)
      }
    } catch (err) {
      console.error(`❌ Gagal load plugin '${file}':`, err)
    }
  }

  cachedPlugins = plugins
  return plugins
}

const handleMessage = async (m, sock, commandText, obj) => {
  const plugins = cachedPlugins.length ? cachedPlugins : await loadPlugins()
  for (const plugin of plugins) {
    const cmds = Array.isArray(plugin.command) ? plugin.command.map(v => v.toLowerCase()) : []
    if (cmds.includes(commandText.toLowerCase())) {
      try {
        await plugin(m, sock, obj)
      } catch (err) {
        console.error(`❌ Error plugin '${commandText}':`, err)
      }
      break
    }
  }
}

module.exports = {
  loadPlugins,
  handleMessage
}