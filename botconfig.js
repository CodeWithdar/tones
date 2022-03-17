module.exports = {
  Admins: ["Undefeated †ᴱᴳ#5700", ""], 
  ExpressServer: true, 
  DefaultPrefix: process.env.Prefix || ">", 
  Port: 3000, 
  SupportServer: "https://discord.gg/czCVNdfWzK", 
  Token: process.env.Token || "", 
  ClientID: process.env.Discord_ClientID || "", 
  ClientSecret: process.env.Discord_ClientSecret || "", 
  Scopes: ["identify", "guilds", "applications.commands"], 
  ServerDeafen: true, 
  DefaultVolume: 100, 
  CallbackURL: "/api/callback", 
  "24/7": false, 
  CookieSecret: "Pikachu is EPIC", 
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", 
  EmbedColor: "RANDOM", 
  Permissions: 2205281600,
  Website: process.env.Website || "https://example.com", 
  
  
  Presence: {
    status: "online", 
    name: "Music",
    type: "LISTENING", 
  },

  
  Lavalink: {
    id: "Main", 
    host: "losingtime.dpaste.org", 
    port: 2124, 
    pass: "SleepingOnTrains", 
    secure: false, 
  },

 
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "", 
    ClientSecret: process.env.Spotify_ClientSecret || "", 
  },
};
