import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6285156402391', 'Denny', true]
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '6285156402391'
global.packname = '2malam'
global.author = '© Denny'
global.namebot = '2malam by Denny'
global.wm = '© 2malam'
global.stickpack = '2malam'
global.stickauth = '2malam'
global.fotonya = 'https://telegra.ph/file/0e8e264ea5a23f0d20415.jpg'
// Link Sosmed
global.sig = 'https://www.instagram.com'
global.sgh = 'https://github.com'
global.sgc = 'https://chat.whatsapp.com/'
// Donasi
global.psaweria = ''
global.ptrakterr = ''
global.povo = ''
// Info Wait
global.wait = 'Sedang Di Proses, Mohon Tunggu....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.lol = 'apikeymu'
global.rose = 'apikeymu'
global.xyro = 'eIYEZjlJly'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
    popcat : 'https://api.popcat.xyz'
}

/Apikey/
global.APIKeys = {
    "https://api.xyroinee.xyz": "eIYEZjlJly",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
})

