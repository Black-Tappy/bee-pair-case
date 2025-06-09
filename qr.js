const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: Tappy_Tech,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("baileys-pro");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function BUMBLEBEE_XMD_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_Tappy_Tech = Tappy_Tech({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_Tappy_Tech.ev.on('creds.update', saveCreds)
			Qr_Code_By_Tappy_Tech.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_Tappy_Tech.sendMessage(Qr_Code_By_Tappy_Tech.user.id, { text: '' + b64data });
	
				   let BUMBLEBEE_XMD_TEXT = `
> 𝐆ᴇᴛ 𝐑ɪɢʜᴛ 𝐖ɪᴛᴄʜ𝐀 🩷🎀 .
╭───❍「 *𝐂ᴏɴɴᴇᴄᴛᴇ𝐃* 」
┃ 🎀 𝐁ᴜᴍʙʟᴇʙᴇᴇ-𝐗ᴍ𝐃 𝐁ᴏᴛ
╰───────────❍
╭───❍「 *𝐁ᴏᴛ 𝐑ᴇᴘᴏ* 」
┃ [**Here**](https://github.com/Black-Tappy/Bumblebee-XMD!
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
╰───────────❍`
	 await Qr_Code_By_Tappy_Tech.sendMessage(Qr_Code_By_Tappy_Tech.user.id,{text: BUMBLEBEE_XMD_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_Tappy_Tech.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					BUMBLEBEE_XMD_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service is Currently Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await BUMBLBEE_XMD_QR_CODE()
});
module.exports = router
