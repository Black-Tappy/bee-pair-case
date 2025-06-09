const PastebinAPI = require('pastebin-js');
const pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL');
const { makeid } = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router();
const pino = require('pino');
const {
    default: Toxic_Tech,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require('baileys-pro');

function removeFile(FilePath) {
    if (!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true });
}

router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
    
    async function Toxic_MD_PAIR_CODE() {
        const { state, saveCreds } = await useMultiFileAuthState('./temp/' + id);
        try {
            let Pair_Code_By_Toxic_Tech = Toxic_Tech({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({ level: 'fatal' }).child({ level: 'fatal' })),
                },
                printQRInTerminal: false,
                logger: pino({ level: 'fatal' }).child({ level: 'fatal' }),
                browser: Browsers.macOS('Chrome')
            });

            if (!Pair_Code_By_Toxic_Tech.authState.creds.registered) {
                await delay(1500);
                num = num.replace(/[^0-9]/g, '');
                const code = await Pair_Code_By_Toxic_Tech.requestPairingCode(num);
                if (!res.headersSent) {
                    await res.send({ code });
                }
            }

            Pair_Code_By_Toxic_Tech.ev.on('creds.update', saveCreds);
            Pair_Code_By_Toxic_Tech.ev.on('connection.update', async (s) => {
                const { connection, lastDisconnect } = s;
                if (connection === 'open') {
                    await delay(5000);
                    let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                    await delay(800);
                    let b64data = Buffer.from(data).toString('base64');
                    let session = await Pair_Code_By_Toxic_Tech.sendMessage(Pair_Code_By_Toxic_Tech.user.id, { text: '' + b64data });

                    let Toxic_MD_TEXT = `
> 𝐆ᴇᴛ 𝐑ɪɢʜᴛ 𝐖ɪᴛᴄʜ𝐀 🩷🎀 .
╭───❍「 *𝐂ᴏɴɴᴇᴄᴛᴇ𝐃* 」
┃ 🎀 𝐁ᴜᴍʙʟᴇʙᴇᴇ-𝐗ᴍ𝐃 𝐁ᴏᴛ
╰───────────❍
╭───❍「 *𝐁ᴏᴛ 𝐑ᴇᴘᴏ* 」
┃ [**Here**](https://github.com/Black-Tappy/Bumblebee-XMD)!
╰───────────❍
╭───❍「 *𝐉ᴏɪɴ 𝐂ʜᴀɴɴᴇ𝐋* 」
┃ [**Here**](https://whatsapp.com/channel/0029VasHgfG4tRrwjAUyTs10) to join!
╰───────────❍
╭───❍「 *𝐁ᴏᴛ 𝐎ᴡɴᴇ𝐑* 」
┃ +254759000340
╰───────────❍
╭───❍「 *𝐒ʏꜱᴛᴇᴍ 𝐒ᴛᴀᴛᴜꜱ* 」
┃ ░░░░░░░░░░░░░░░░░░░ 100%
╰───────────❍
╭───❍「 *𝐀ᴜᴛᴏᴍᴀᴛɪᴏ𝐍* 」
┃𝐏ᴏᴡᴇʀᴇᴅ 𝐁ʏ 𝐁ʟᴀᴄᴋ-𝐓ᴀᴘᴘʏ
╰───────────❍`;

                    await Pair_Code_By_Toxic_Tech.sendMessage(Pair_Code_By_Toxic_Tech.user.id, { text: Toxic_MD_TEXT }, { quoted: session });

                    await delay(100);
                    await Pair_Code_By_Toxic_Tech.ws.close();
                    return await removeFile('./temp/' + id);
                } else if (connection === 'close' && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    Toxic_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log('Service restarted');
            await removeFile('./temp/' + id);
            if (!res.headersSent) {
                await res.send({ code: 'Service Currently Unavailable' });
            }
        }
    }
    
    return await Toxic_MD_PAIR_CODE();
});

module.exports = router;
