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

const fs = require('fs')
const chalk = require('chalk')
require('./start.js')

const file = require.resolve('./start.js')

fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update detected: ${file}`))
  delete require.cache[file]
  require('./start.js')
})