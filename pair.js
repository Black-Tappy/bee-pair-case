const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Black_Tappy,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("@whiskeysockets/baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function BUMBLEBEE_XMD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Black_Tappy = Black_Tappy({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Black_Tappy.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Black_Tappy.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Black_Tappy.ev.on('creds.update', saveCreds)
            Pair_Code_By_Black_Tappy.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Black_Tappy.sendMessage(Pair_Code_By_Black_Tappy.user.id, { text: '' + b64data });

               let BUMBLEBEE_XMD_TEXT = `

╭──░░░░〔 *🤖 𝕾𝖊𝖘𝖘𝖎𝖔𝖓 𝕮𝖔𝖓𝖓𝖊𝖈𝖊𝐝* 〕░░░░
│  ╭─➤                                                      
├─ [🔗]*𝐅𝐨𝐫𝐤 𝐚𝐧𝐝 𝐬𝐭𝐚𝐫 ⭐:     
├─ Star Us [**Here**](https://github.com/Black-Tappy/Bumblebee-XMD)!
│  ╰─➤ѲƞℓIƞε αƞδ ⟆ταβℓε 🟢    
│  ╭─➤
├─ 📢 *Join Channel:*  
│  ╰─➤Click [**Here**](https://whatsapp.com/channel/0029VasHgfG4tRrwjAUyTs10) to join!
│ [⚙️]   ▲ SYSTEM STATUS: STABLE ░░░░░░░░░░░░░░░░░░░░░░░ 100%
│ [🛠️]   ▲ MONITORING █▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
├─ [🟢]𝐎𝐰𝐧𝐞𝐫: 
│  ╰─➤ Click [**Here**](https://wa.me/254735342808)!
│▒▒▒▒ [::] BOT READY FOR DEPLOYMENT — STAY HIDDEN
│▒▒▒▒ [::] RUNNING IN GHOST MODE ☠      
╰─🚀 *Powered by Black-Tappy*`
 await Pair_Code_By_Black_Tappy.sendMessage(Pair_Code_By_Black_Tappy.user.id,{text:BUMBLEBEE_XMD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Black_Tappy.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    BUMBLEBEE_XMD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await BUMBLEBEE_XMD_PAIR_CODE()
});
module.exports = router
