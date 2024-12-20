const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://qu.ax/cQZOL.jpg" || "" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923196335250";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://qu.ax/cQZOL.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_20_12_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjU0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTY4LFxuICAgICAgICA2MixcbiAgICAgICAgMjE5LFxuICAgICAgICA3MixcbiAgICAgICAgNDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE5LFxuICAgICAgICA0NyxcbiAgICAgICAgNCxcbiAgICAgICAgNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDUsXG4gICAgICAgIDkzLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDcwLFxuICAgICAgICA5NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjksXG4gICAgICAgIDk2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDU3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDk5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjAxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjE2LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1LFxuICAgICAgICAzOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAzNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODgsXG4gICAgICAgIDQwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTgzLFxuICAgICAgICA0MixcbiAgICAgICAgNTMsXG4gICAgICAgIDYzLFxuICAgICAgICA4MixcbiAgICAgICAgOTQsXG4gICAgICAgIDI0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjUzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzEsXG4gICAgICAgIDIxNixcbiAgICAgICAgODIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjksXG4gICAgICAgIDkyLFxuICAgICAgICAxMTksXG4gICAgICAgIDY1LFxuICAgICAgICAzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjAxLFxuICAgICAgICA1NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDc2LFxuICAgICAgICAxODEsXG4gICAgICAgIDMyLFxuICAgICAgICA0NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNixcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI2LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDM2LFxuICAgICAgICA3NSxcbiAgICAgICAgMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjI4LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjIsXG4gICAgICAgIDE2LFxuICAgICAgICAyMixcbiAgICAgICAgNzMsXG4gICAgICAgIDg0LFxuICAgICAgICA2NixcbiAgICAgICAgODYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzMixcbiAgICAgICAgMjM0LFxuICAgICAgICAzOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDI2LFxuICAgICAgICA4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzNixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDksXG4gICAgICAgIDEzNixcbiAgICAgICAgODUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMixcbiAgICAgICAgMjEyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjksXG4gICAgICAgIDU3LFxuICAgICAgICAxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA1LFxuICAgICAgICA0OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQ4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJtWWt2cDJ2QytUTjd1MzhBNU5ITXJCeU93VGREWkhXUWZrU2puLzJ0ZkhBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJxOG16MWZXZFNFcUF3Wk5qN3JZdjVRXCIsXG4gIFwicGhvbmVJZFwiOiBcImViOWQ4ZmRiLTVkNzQtNGQ2NC1iNmU4LTQyODJiNDRhMDYyYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NSxcbiAgICAgIDczLFxuICAgICAgMjAzLFxuICAgICAgNixcbiAgICAgIDE0LFxuICAgICAgNjksXG4gICAgICAxMzUsXG4gICAgICAxMCxcbiAgICAgIDMyLFxuICAgICAgMjIyLFxuICAgICAgOTksXG4gICAgICAxNzMsXG4gICAgICAxNDQsXG4gICAgICAxMyxcbiAgICAgIDY2LFxuICAgICAgMjEwLFxuICAgICAgMTUxLFxuICAgICAgMjI5LFxuICAgICAgMTI3LFxuICAgICAgMTg5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MixcbiAgICAgIDEyNixcbiAgICAgIDE3MyxcbiAgICAgIDE0OCxcbiAgICAgIDE2NyxcbiAgICAgIDIwNyxcbiAgICAgIDE3NSxcbiAgICAgIDEyLFxuICAgICAgMTg0LFxuICAgICAgMjQyLFxuICAgICAgNzEsXG4gICAgICA3MSxcbiAgICAgIDIwMyxcbiAgICAgIDIwOCxcbiAgICAgIDEzMSxcbiAgICAgIDM4LFxuICAgICAgNDcsXG4gICAgICA0MCxcbiAgICAgIDE2NyxcbiAgICAgIDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVkRGMVM3QVlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzE5NjMzNTI1MDo4M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCThILqr63wk4apXFxcIiDqr63wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIg8J2Qk/CdkIDwnZCB8J2QiPCdkJLwnZCHIPCThqrqr63qr60g4oC56q+twrPwk4aqIFxcbvCTg65cXG7wk4OuXFxu8JODrlxcbvCTg65cXG7wk4OuXFxu8JODrlxcbvCTg65cXG7wk4ap8JakjfCThqpcIixcbiAgICBcImxpZFwiOiBcIjUzNjEwMzE4NjY3ODQ5OjgzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pUUXo3UUhFTGZibDdzR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwia1N5dkNQd3p5QmxmQXVPN3U1WTVVZjI4VitmQWdpTXpybTVIeEp2V24xdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJOZThGMGtTelBOUEI0RFlzY0xuNDVlS25CMXZYSVNhK1loMkhIajNkTzFEV3lteGpTVSs5akJEVHVISWRha2VleEQrblV1NzdUNFBPVW9OclJLekdBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJRMUNUcmJNdGpjRk5OOGMra3hFaFZZVnNkVk1sZjI5ZmJGLzdjODZiYjkydWdreUJtMzNuS1huRHRnbGxmdWo0SC93QVBtRVpOYms0ejFveWc5R25DQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxOTYzMzUyNTA6ODNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ3MzMyNDFcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝐅𝐀𝐌𝐎𝐔𝐒 𝐓𝐀𝐁𝐈𝐒𝐇" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "𝐓𝐚𝐛𝐢𝐬𝐡",
  packname: process.env.PACK_NAME || "𝐓𝐚𝐛𝐢𝐬𝐡",
  botname : process.env.BOT_NAME  || "🅃🄰🄱🄸🅂🄷 🄰🄻🄸",
  ownername:process.env.OWNER_NAME|| "🅃🄰🄱🄸🅂🄷 🄰🄻🄸",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'Tabish' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
