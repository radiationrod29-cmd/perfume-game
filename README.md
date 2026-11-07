# Game Master: Guess the Perfume

Laptop = Game Master. Phones = players (join by QR / share link).

## Files
- `index.html` – the game (built file, upload this to tiiny.host)
- `config.js` – Supabase URL + public key (live sync)
- `Logo Game.png` – logo
- `src/` – source code. Edit `src/app.jsx`, then run `sh build.sh` to rebuild `index.html`.

## Hosting on tiiny.host
Upload a zip with `index.html`, `config.js` and `Logo Game.png`.

## Sync
Uses Supabase Realtime (free tier: 200 connections, 100 messages/sec).
Without keys in `config.js` the game runs in offline demo mode (tabs on one computer only).

Game Master passcode: 0000 (change in `src/app.jsx`, search `'0000'`).
