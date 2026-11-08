
    const { useState, useEffect, useRef } = React;

    // --- Embedded Vector Icons ---
    function Icon({ name, className = "w-4 h-4", ...props }) {
      const icons = {
        trophy: <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.45 1-1 1H7c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1h-2c-.55 0-1-.45-1-1v-2.34M6 4h12v7a6 6 0 0 1-12 0V4Z" />,
        crown: <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />,
        play: <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" />,
        stop: <rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor" />,
        clock: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>,
        lock: <><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>,
        eye: <><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></>,
        check: <polyline points="20 6 9 17 4 12" />,
        checkCircle: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></>,
        user: <><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></>,
        users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
        plus: <path d="M5 12h14M12 5v14" />,
        trash: <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />,
        edit: <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />,
        settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></>,
        x: <path d="M18 6 6 18M6 6l12 12" />,
        sparkles: <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />,
        chevronLeft: <path d="m15 18-6-6 6-6" />,
        chevronRight: <path d="m9 18 6-6-6-6" />,
        arrowRight: <path d="M5 12h14M12 5l7 7-7 7" />,
        home: <><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></>,
        flag: <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7" />,
        key: <><circle cx="7.5" cy="15.5" r="5.5" /><path d="m21 2-9.6 9.6M15.5 7.5l3 3M18.5 4.5l3 3" /></>,
        volume2: <><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14" /></>,
        volumeX: <><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><line x1="23" y1="9" x2="17" y2="15" /><line x1="17" y1="9" x2="23" y2="15" /></>,
        camera: <><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" /><circle cx="12" cy="13" r="3" /></>,
        share: <><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></>,
        smartphone: <><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" /></>,
        image: <><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></>,
        upload: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></>,
        rotate: <><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></>,
        link: <><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></>
      };

      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          {...props}
        >
          {icons[name] || null}
        </svg>
      );
    }

    // --- Official Vector Logo with Transparent Background ---
    function GameMasterVectorLogo({ className = "h-16", showByline = true }) {
      return (
        <svg
          viewBox="0 0 680 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`select-none ${className}`}
        >
          <path d="M272 152 L248 94 L294 126 L340 76 L386 126 L432 94 L408 152 Z" stroke="#FF5B00" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <line x1="228" y1="130" x2="338" y2="204" stroke="#FF5B00" strokeWidth="18" strokeLinecap="round" />
          <line x1="230" y1="131" x2="252" y2="146" stroke="#FFFFFF" strokeWidth="18" strokeLinecap="round" />
          <polygon points="340,196 358,216 332,212" fill="#FF5B00" />
          <path d="M346 162 C405 162 472 166 472 216 C472 248 456 270 436 298 C416 326 380 320 368 296 C362 284 350 274 332 274" stroke="#FF5B00" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="430" cy="208" r="9" fill="#FF5B00" />
          <circle cx="430" cy="248" r="9" fill="#FF5B00" />
          <circle cx="410" cy="228" r="9" fill="#FF5B00" />
          <circle cx="450" cy="228" r="9" fill="#FF5B00" />
          <path d="M214 254 C234 254 252 232 270 206 C278 194 294 186 308 186 C324 186 334 200 324 218 C312 240 286 250 262 264 C238 278 232 308 250 316 C280 328 334 320 360 288" stroke="#FFFFFF" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M214 254 L240 310" stroke="#FF5B00" strokeWidth="9" strokeLinecap="round" />
          {showByline && (
            <text x="585" y="288" textAnchor="end" fill="#FFFFFF" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="17" letterSpacing="2">
              BY: RJR
            </text>
          )}
          <text x="50%" y="368" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="72" letterSpacing="3">
            <tspan fill="#FFFFFF">GAME </tspan>
            <tspan fill="#FF5B00">MASTER</tspan>
          </text>
        </svg>
      );
    }

    function GameMasterLogo({ className = "h-16", customLogoUrl = null, showByline = true }) {
      const [imgLoaded, setImgLoaded] = useState(false);
      const targetSrc = customLogoUrl || "Logo%20Game.png";

      return (
        <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
          {!imgLoaded && (
            <GameMasterVectorLogo className="w-full h-full" showByline={showByline} />
          )}
          <img
            src={targetSrc}
            alt="Game Master"
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgLoaded(false)}
            className={`w-full h-full object-contain select-none drop-shadow-xl ${imgLoaded ? 'block' : 'hidden'}`}
          />
        </div>
      );
    }

    // --- Web Audio Synthesizer (Instant local audio effects) ---
    function playGameSound(type, isMuted) {
      if (isMuted || typeof window === 'undefined') return;
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        if (!window.__gmAudioCtx) window.__gmAudioCtx = new AudioContext();
        const ctx = window.__gmAudioCtx;
        if (ctx.state === 'suspended') ctx.resume();

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);

        const now = ctx.currentTime;
        if (type === 'tick') {
          osc.type = 'sine';
          osc.frequency.setValueAtTime(600, now);
          gain.gain.setValueAtTime(0.08, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
          osc.start(now);
          osc.stop(now + 0.05);
        } else if (type === 'tick-urgent') {
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(880, now);
          gain.gain.setValueAtTime(0.15, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
          osc.start(now);
          osc.stop(now + 0.08);
        } else if (type === 'buzzer') {
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(160, now);
          osc.frequency.linearRampToValueAtTime(110, now + 0.35);
          gain.gain.setValueAtTime(0.2, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
          osc.start(now);
          osc.stop(now + 0.4);
        } else if (type === 'reveal') {
          osc.type = 'sine';
          osc.frequency.setValueAtTime(523.25, now);
          osc.frequency.setValueAtTime(659.25, now + 0.1);
          osc.frequency.setValueAtTime(783.99, now + 0.2);
          gain.gain.setValueAtTime(0.15, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
          osc.start(now);
          osc.stop(now + 0.45);
        } else if (type === 'victory') {
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(440, now);
          osc.frequency.setValueAtTime(554.37, now + 0.12);
          osc.frequency.setValueAtTime(659.25, now + 0.24);
          osc.frequency.setValueAtTime(880, now + 0.36);
          gain.gain.setValueAtTime(0.18, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
          osc.start(now);
          osc.stop(now + 0.7);
        }
      } catch (err) {}
    }

    // --- Automatic Answer Matcher ---
    function checkAnswerMatch(guess, option1, option2) {
      if (!guess || typeof guess !== 'string') return false;
      const clean = (str) =>
        str ? str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '').trim() : '';

      const cleanGuess = clean(guess);
      if (!cleanGuess) return false;

      const cleanOpt1 = clean(option1);
      if (cleanOpt1 && cleanGuess === cleanOpt1) return true;

      if (option2) {
        const rawOpt2 = option2.trim().toLowerCase();
        if (rawOpt2 !== 'n/a' && rawOpt2 !== 'na' && rawOpt2 !== 'none' && rawOpt2 !== '-') {
          const cleanOpt2 = clean(option2);
          if (cleanOpt2 && cleanGuess === cleanOpt2) return true;
        }
      }

      if (option1) {
        const parts = option1.split(/\s+or\s+|\/|,/i);
        for (const p of parts) {
          if (clean(p) === cleanGuess) return true;
        }
      }
      return false;
    }

    function hasValidOption2(round) {
      if (!round) return false;
      const opt2 = (round.option2 || round.name || '').trim();
      if (!opt2) return false;
      const lower = opt2.toLowerCase();
      return lower !== 'n/a' && lower !== 'na' && lower !== 'none' && lower !== '-';
    }

    // Built-in presets for instant load
    const PRESET_ARTWORKS = {
      paco_rabanne_guess: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'><rect width='400' height='400' fill='%230f1422'/><rect x='60' y='60' width='280' height='280' rx='24' fill='url(%23g1)' stroke='%23fef08a' stroke-width='4'/><rect x='110' y='140' width='180' height='120' rx='12' fill='%23451a03' opacity='0.8'/><text x='200' y='195' font-family='sans-serif' font-weight='900' font-size='26' fill='%23fef08a' text-anchor='middle' letter-spacing='3'>1 MILLION</text><text x='200' y='225' font-family='sans-serif' font-weight='700' font-size='14' fill='%23ffffff' text-anchor='middle' letter-spacing='4'>ELIXIR</text><defs><linearGradient id='g1' x1='0' y1='0' x2='1' y2='1'><stop offset='0%25' stop-color='%23fbbf24'/><stop offset='50%25' stop-color='%23d97706'/><stop offset='100%25' stop-color='%2378350f'/></linearGradient></defs></svg>",
      paco_rabanne_reveal: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'><rect width='400' height='400' fill='%23080c16'/><rect x='155' y='30' width='90' height='45' rx='6' fill='%23fef08a'/><rect x='170' y='75' width='60' height='25' fill='%23b45309'/><rect x='100' y='100' width='200' height='260' rx='20' fill='url(%23g2)' stroke='%23fef08a' stroke-width='4'/><rect x='125' y='170' width='150' height='110' rx='10' fill='%23451a03' opacity='0.8'/><text x='200' y='215' font-family='serif' font-weight='bold' font-size='22' fill='%23fef08a' text-anchor='middle'>PACO RABANNE</text><text x='200' y='245' font-family='sans-serif' font-weight='900' font-size='16' fill='%23ffffff' text-anchor='middle' letter-spacing='3'>1 MILLION</text><defs><linearGradient id='g2' x1='0' y1='0' x2='1' y2='1'><stop offset='0%25' stop-color='%23fef08a'/><stop offset='40%25' stop-color='%23f59e0b'/><stop offset='100%25' stop-color='%2378350f'/></linearGradient></defs></svg>",
      prada_guess: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'><rect width='400' height='400' fill='%230f1422'/><polygon points='200,70 330,310 70,310' fill='%23f43f5e' stroke='%23fda4af' stroke-width='6'/><text x='200' y='230' font-family='serif' font-weight='bold' font-size='32' fill='%23ffffff' text-anchor='middle' letter-spacing='4'>PRADA</text><text x='200' y='260' font-family='sans-serif' font-weight='600' font-size='12' fill='%23fecdd3' text-anchor='middle' letter-spacing='3'>MILANO</text></svg>",
      prada_reveal: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'><rect width='400' height='400' fill='%23080c16'/><rect x='170' y='30' width='60' height='30' rx='4' fill='%23111827'/><polygon points='200,60 340,320 60,320' fill='%23fb7185' stroke='%23f43f5e' stroke-width='5'/><text x='200' y='210' font-family='serif' font-weight='bold' font-size='36' fill='%23ffffff' text-anchor='middle' letter-spacing='4'>PRADA</text><text x='200' y='245' font-family='sans-serif' font-weight='bold' font-size='14' fill='%23ffe4e6' text-anchor='middle' letter-spacing='2'>PARADOXE</text></svg>",
      le_labo_guess: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'><rect width='400' height='400' fill='%230f1422'/><rect x='80' y='60' width='240' height='280' rx='16' fill='%23e5e7eb'/><rect x='110' y='110' width='180' height='180' fill='%23fdfbf7' stroke='%2371717a' stroke-width='1'/><text x='200' y='170' font-family='monospace' font-weight='bold' font-size='22' fill='%2318181b' text-anchor='middle'>ANOTHER 13</text><text x='200' y='200' font-family='monospace' font-size='12' fill='%2352525b' text-anchor='middle'>100ml / 3.4 FL.OZ.</text><text x='200' y='240' font-family='monospace' font-weight='bold' font-size='13' fill='%2318181b' text-anchor='middle'>LE LABO</text></svg>",
      le_labo_reveal: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'><rect width='400' height='400' fill='%23080c16'/><rect x='160' y='40' width='80' height='40' rx='6' fill='%2371717a'/><rect x='100' y='80' width='200' height='280' rx='30' fill='%23f3f4f6' stroke='%23e5e7eb' stroke-width='4'/><rect x='120' y='150' width='160' height='140' fill='%23ffffff' stroke='%23a1a1aa' stroke-width='1'/><text x='200' y='190' font-family='monospace' font-weight='bold' font-size='20' fill='%2318181b' text-anchor='middle'>ANOTHER 13</text><text x='200' y='225' font-family='monospace' font-size='11' fill='%2371717a' text-anchor='middle'>Eau de Parfum</text><text x='200' y='255' font-family='monospace' font-weight='bold' font-size='14' fill='%2318181b' text-anchor='middle'>LE LABO</text></svg>"
    };

    const QUICK_TEMPLATES = [
      { option1: 'Paco Rabanne', option2: 'Rabanne', guess: PRESET_ARTWORKS.paco_rabanne_guess, reveal: PRESET_ARTWORKS.paco_rabanne_reveal },
      { option1: 'Prada', option2: 'Prada Milano', guess: PRESET_ARTWORKS.prada_guess, reveal: PRESET_ARTWORKS.prada_reveal },
      { option1: 'Le Labo', option2: 'N/A', guess: PRESET_ARTWORKS.le_labo_guess, reveal: PRESET_ARTWORKS.le_labo_reveal }
    ];

    function compressImage(file, maxWidth = 380, quality = 0.6) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => {
          const img = new Image();
          img.src = event.target.result;
          img.onload = () => {
            const elem = document.createElement('canvas');
            let width = img.width;
            let height = img.height;
            if (width > maxWidth) {
              height = Math.round((height * maxWidth) / width);
              width = maxWidth;
            }
            elem.width = width;
            elem.height = height;
            const ctx = elem.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);
            resolve(elem.toDataURL('image/jpeg', quality));
          };
          img.onerror = () => resolve(event.target.result);
        };
        reader.onerror = () => resolve('');
      });
    }

    // --- Loading Screen ---
    function LoadingScreen({ onFinish, customLogoUrl }) {
      const [progress, setProgress] = useState(30);

      useEffect(() => {
        const timer = setInterval(() => {
          setProgress(p => {
            if (p >= 100) {
              clearInterval(timer);
              setTimeout(onFinish, 100);
              return 100;
            }
            return p + 35;
          });
        }, 50);
        return () => clearInterval(timer);
      }, []);

      return (
        <div className="min-h-screen bg-[#080c16] flex flex-col items-center justify-center p-6 text-zinc-100 select-none">
          <div className="w-full max-w-sm flex flex-col items-center text-center space-y-6">
            <GameMasterLogo customLogoUrl={customLogoUrl} className="h-32 drop-shadow-2xl" />
            <div className="space-y-1">
              <h2 className="text-xs font-bold tracking-[0.25em] uppercase text-orange-400">
                Perfume Guessing Arena
              </h2>
              <p className="text-xs text-zinc-400">Connecting live game network...</p>
            </div>
            <div className="w-full h-2 bg-zinc-900 border border-zinc-800 rounded-full overflow-hidden p-0.5">
              <div
                className="h-full bg-gradient-to-r from-orange-500 via-[#D4AF37] to-amber-400 rounded-full transition-all duration-150"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      );
    }

    // --- Shared items file (game-items.dat in the repo) ---
    // Light scrambling only, so answers aren't readable at a glance. Not real security.
    const ITEMS_FILE = 'game-items.dat';
    const ITEMS_KEY = 'gm-perfume-2026';
    function hashText(str) {
      let h = 5381;
      for (let i = 0; i < str.length; i++) h = ((h << 5) + h + str.charCodeAt(i)) | 0;
      return (h >>> 0).toString(36) + ':' + str.length;
    }
    function encodeItems(rounds) {
      const json = JSON.stringify({ format: 'gm-items', version: 1, exportedAt: new Date().toISOString(), rounds });
      const bytes = new TextEncoder().encode(json);
      let bin = '';
      for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i] ^ ITEMS_KEY.charCodeAt(i % ITEMS_KEY.length));
      return 'GMv1:' + btoa(bin);
    }
    function decodeItems(text) {
      if (!text || !text.startsWith('GMv1:')) throw new Error('Not a game items file');
      const bin = atob(text.slice(5).trim());
      const bytes = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i) ^ ITEMS_KEY.charCodeAt(i % ITEMS_KEY.length);
      const data = JSON.parse(new TextDecoder().decode(bytes));
      if (!data || !Array.isArray(data.rounds)) throw new Error('No items in file');
      return data;
    }

    // --- Realtime config (set in config.js) ---
    const GAME_CFG = window.GAME_CONFIG || {};
    const SB_ON = !!(GAME_CFG.supabaseUrl && GAME_CFG.supabaseKey && window.supabase && !/PASTE/i.test(GAME_CFG.supabaseUrl + GAME_CFG.supabaseKey));
    let sbClient = null;
    try {
      if (SB_ON) sbClient = window.supabase.createClient(GAME_CFG.supabaseUrl.trim(), GAME_CFG.supabaseKey.trim(), { auth: { persistSession: false } });
    } catch (e) { console.error('Supabase init failed', e); }

    // --- Main Game Component ---
    function App() {
      const [isLoading, setIsLoading] = useState(true);
      const [role, setRole] = useState(null);
      const [contestantName, setContestantName] = useState(() => {
        try { return localStorage.getItem('gm_contestant_name') || ''; } catch (e) { return ''; }
      });
      const [isDirectContestant, setIsDirectContestant] = useState(false);
      const [isMuted, setIsMuted] = useState(false);

      const myClientId = useRef('client_' + Math.random().toString(36).substring(2, 9));

      const [roomCode] = useState(() => {
        try {
          const params = new URLSearchParams(window.location.search);
          const r = params.get('room');
          return r ? r.toUpperCase().trim() : 'GIV2026';
        } catch (e) {
          return 'GIV2026';
        }
      });

      const [netStatus, setNetStatus] = useState('connecting');

      // Modals
      const [showPasscodeModal, setShowPasscodeModal] = useState(false);
      const [passcodeInput, setPasscodeInput] = useState('');
      const [passcodeError, setPasscodeError] = useState('');

      const [gmTab, setGmTab] = useState('arena');
      const [showItemModal, setShowItemModal] = useState(false);
      const [showTimerModal, setShowTimerModal] = useState(false);
      const [showShareModal, setShowShareModal] = useState(false);
      const [copiedLink, setCopiedLink] = useState(false);
      const [editingRound, setEditingRound] = useState(null);

      // Forms
      const [itemOption1, setItemOption1] = useState('');
      const [itemOption2, setItemOption2] = useState('');
      const [itemGuessingImage, setItemGuessingImage] = useState('');
      const [itemRevealImage, setItemRevealImage] = useState('');

      // Rounds
      const [rounds, setRounds] = useState(() => {
        try {
          const stored = localStorage.getItem('gm_rounds_store');
          return stored ? JSON.parse(stored) : [
            {
              id: 'round_1',
              option1: 'Paco Rabanne',
              option2: 'Rabanne',
              brand: 'Paco Rabanne',
              name: 'Rabanne',
              guessingImage: PRESET_ARTWORKS.paco_rabanne_guess,
              revealImage: PRESET_ARTWORKS.paco_rabanne_reveal,
              createdAt: 1001
            },
            {
              id: 'round_2',
              option1: 'Prada',
              option2: 'Prada Milano',
              brand: 'Prada',
              name: 'Prada Milano',
              guessingImage: PRESET_ARTWORKS.prada_guess,
              revealImage: PRESET_ARTWORKS.prada_reveal,
              createdAt: 1002
            },
            {
              id: 'round_3',
              option1: 'Le Labo',
              option2: 'N/A',
              brand: 'Le Labo',
              name: 'N/A',
              guessingImage: PRESET_ARTWORKS.le_labo_guess,
              revealImage: PRESET_ARTWORKS.le_labo_reveal,
              createdAt: 1003
            }
          ];
        } catch (e) {
          return [];
        }
      });

      // Synchronized Game State
      const [gameState, setGameState] = useState({
        activeRound: null,
        status: 'waiting', // 'waiting' | 'guessing' | 'locked' | 'revealed' | 'ended'
        timerEndTime: 0,
        timerDuration: 10,
        showLeaderboard: false,
        customLogo: null
      });

      const [displaySeconds, setDisplaySeconds] = useState(10);
      const [players, setPlayers] = useState([]);
      const [myPlayerId] = useState(() => {
        try {
          const cached = localStorage.getItem('gm_player_uid');
          if (cached) return cached;
          const fresh = 'player_' + Math.random().toString(36).substring(2, 8);
          localStorage.setItem('gm_player_uid', fresh);
          return fresh;
        } catch (e) {
          return 'player_' + Math.random().toString(36).substring(2, 8);
        }
      });

      const [myGuessInput, setMyGuessInput] = useState('');
      const broadcastChannelRef = useRef(null);

      // Refs to prevent stale closure bugs
      const gameStateRef = useRef(gameState);
      gameStateRef.current = gameState;
      const playersRef = useRef(players);
      playersRef.current = players;
      const roleRef = useRef(role);
      roleRef.current = role;

      // ===== Realtime transport (Supabase Realtime; BroadcastChannel only as offline demo) =====
      // Master -> everyone: channel "gm-<room>". Phones -> master: channel "gm-<room>-in" (sent over HTTPS, phones never receive each other's messages).
      const roomKey = roomCode.toLowerCase().replace(/[^a-z0-9_-]/g, '');
      const roundsRef = useRef(rounds);
      roundsRef.current = rounds;

      // Shared items file: lets any laptop host with the same items + photos
      const [itemsFile, setItemsFile] = useState({ status: 'loading', hash: null, rounds: null, exportedAt: null });
      // Checked before anything is saved, so a brand-new laptop counts as "no local items"
      const hadLocalItemsRef = useRef((() => {
        try {
          const stored = JSON.parse(localStorage.getItem('gm_rounds_store') || 'null');
          if (!Array.isArray(stored)) return false;
          const onlyDemo = stored.every(r => /^round_[123]$/.test(r.id) && (r.createdAt || 0) <= 1003);
          return !onlyDemo; // the 3 demo items don't count as real work
        } catch (e) { return false; }
      })());
      const [itemsMsg, setItemsMsg] = useState('');
      const localItemsHash = hashText(JSON.stringify(rounds));
      const applyItems = (newRounds, hash) => {
        setRounds(newRounds);
        try { localStorage.setItem('gm_rounds_synced_hash', hash); } catch (e) {}
        setGameState(prev => ({
          ...prev,
          activeRound: newRounds.find(r => r.id === prev.activeRound?.id) || newRounds[0] || null
        }));
      };
      useEffect(() => {
        let isPhone = false;
        try { isPhone = new URLSearchParams(window.location.search).get('role') === 'contestant'; } catch (e) {}
        if (isPhone) return; // phones get photos from the Game Master, never the file
        fetch(ITEMS_FILE + '?t=' + Date.now(), { cache: 'no-store' })
          .then(res => res.ok ? res.text() : Promise.reject(new Error('missing')))
          .then(text => {
            const data = decodeItems(text);
            const fileHash = hashText(JSON.stringify(data.rounds));
            setItemsFile({ status: 'ok', hash: fileHash, rounds: data.rounds, exportedAt: data.exportedAt });
            const hasLocal = hadLocalItemsRef.current;
            let syncedHash = null;
            try { syncedHash = localStorage.getItem('gm_rounds_synced_hash'); } catch (e) {}
            const localHash = hashText(JSON.stringify(roundsRef.current));
            if (localHash === fileHash) {
              try { localStorage.setItem('gm_rounds_synced_hash', fileHash); } catch (e) {}
            } else if (!hasLocal || localHash === syncedHash) {
              applyItems(data.rounds, fileHash); // nothing unsaved on this laptop: use the game file
            }
            // else: this laptop has its own unsaved changes. Keep them and show a choice in Perfume Items.
          })
          .catch(() => setItemsFile({ status: 'none', hash: null, rounds: null, exportedAt: null }));
      }, []);

      const downloadItemsFile = () => {
        try {
          const blob = new Blob([encodeItems(rounds)], { type: 'application/octet-stream' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url; a.download = ITEMS_FILE;
          document.body.appendChild(a); a.click(); a.remove();
          setTimeout(() => URL.revokeObjectURL(url), 2000);
          try { localStorage.setItem('gm_rounds_synced_hash', localItemsHash); } catch (e) {}
          setItemsMsg('Downloaded ' + ITEMS_FILE + '. Upload it to the GitHub repo (replace the old one) so every laptop gets these items.');
        } catch (e) {
          setItemsMsg('Download failed: ' + e.message);
        }
      };
      const loadItemsFromFile = () => {
        if (!itemsFile.rounds) return;
        if (!window.confirm('Replace the items on this laptop with the items from the game file?')) return;
        applyItems(itemsFile.rounds, itemsFile.hash);
        setItemsMsg('Loaded ' + itemsFile.rounds.length + ' items from the game file.');
      };
      const roundInfo = (gs) => {
        const idx = roundsRef.current.findIndex(r => r.id === gs.activeRound?.id);
        return { roundNumber: idx >= 0 ? idx + 1 : 0, totalRounds: roundsRef.current.length, roundsPlayed: gs.roundsPlayed || 0 };
      };
      const mainChRef = useRef(null);
      const inChRef = useRef(null);
      const inWsReadyRef = useRef(false);
      const lastHeardRef = useRef(0);
      const lastSyncReqRef = useRef(0);
      const [myGuess, setMyGuess] = useState({ roundId: null, text: '' });
      const myGuessRef = useRef(myGuess);
      myGuessRef.current = myGuess;
      const contestantNameRef = useRef(contestantName);
      contestantNameRef.current = contestantName;

      const UPSTREAM_TYPES = { PLAYER_JOIN: 1, PLAYER_GUESS: 1, REQUEST_SYNC: 1 };

      const getInChannel = () => {
        if (!SB_ON) return null;
        if (!inChRef.current) {
          inChRef.current = sbClient.channel(`gm-${roomKey}-in`, { config: { broadcast: { self: false } } });
        }
        return inChRef.current;
      };

      const sendUpstream = async (payload, attempt = 0) => {
        const ch = getInChannel();
        if (!ch) return;
        try {
          if (inWsReadyRef.current) {
            await ch.send({ type: 'broadcast', event: 'm', payload });
          } else {
            await ch.httpSend('m', payload);
          }
        } catch (err) {
          // HTTPS send failed: join the channel and send over the open socket instead
          if (!inWsReadyRef.current && roleRef.current !== 'master') {
            ch.subscribe((status) => {
              if (status === 'SUBSCRIBED') {
                inWsReadyRef.current = true;
                ch.send({ type: 'broadcast', event: 'm', payload }).catch(() => {});
              }
            });
          } else if (attempt < 2) {
            setTimeout(() => sendUpstream(payload, attempt + 1), 800);
          }
        }
      };

      const broadcastMessage = (payload) => {
        const fullPayload = { ...payload, senderId: myClientId.current, room: roomKey };
        if (SB_ON) {
          if (UPSTREAM_TYPES[payload.type]) {
            if (roleRef.current !== 'master') sendUpstream(fullPayload);
          } else if (roleRef.current === 'master' && mainChRef.current) {
            mainChRef.current.send({ type: 'broadcast', event: 'm', payload: fullPayload }).catch(() => {});
          }
          return;
        }
        try {
          if (broadcastChannelRef.current) broadcastChannelRef.current.postMessage(JSON.stringify(fullPayload));
        } catch (e) {}
      };

      // What phones are allowed to see. Answers and reveal photo stay on the master until reveal.
      const isRevealPhase = (status) => status === 'revealed' || status === 'ended';
      // Scoring modes: 'all' = every correct answer 1 pt, 'fastest' = only the fastest correct 1 pt, 'top3' = fastest three correct 3/2/1 pts
      const SCORING_LABELS = { all: 'Every correct answer = 1 pt', fastest: 'Fastest correct answer only = 1 pt', top3: 'Top 3 fastest correct = 3 / 2 / 1 pts' };
      const publicPlayers = (list, status) => (list || []).map(p => isRevealPhase(status)
        ? { id: p.id, name: p.name, score: p.score || 0, currentGuess: p.currentGuess || '', isCorrect: !!p.isCorrect, elapsedMs: p.elapsedMs ?? null, roundPoints: p.roundPoints || 0 }
        : { id: p.id, name: p.name, score: Math.max(0, (p.score || 0) - (p.roundPoints || 0)), hasGuessed: !!p.currentGuess }); // this round's points stay hidden until reveal
      const publicRound = (r, status) => {
        if (!r) return null;
        if (isRevealPhase(status)) {
          return { id: r.id, option1: r.option1 || r.brand || '', option2: r.option2 || r.name || '', brand: r.brand, name: r.name, guessingImage: r.guessingImage, revealImage: r.revealImage };
        }
        return { id: r.id, guessingImage: r.guessingImage };
      };
      const publicState = (gs) => ({
        status: gs.status,
        timerDuration: gs.timerDuration || 10,
        remainingSec: gs.status === 'guessing' ? Math.max(0, Math.ceil(((gs.timerEndTime || 0) - Date.now()) / 1000)) : 0,
        remainingMs: gs.status === 'guessing' ? Math.max(0, (gs.timerEndTime || 0) - Date.now()) : 0,
        scoringMode: gs.scoringMode || 'fastest',
        fastest: isRevealPhase(gs.status) ? (gs.fastest || null) : null,
        showLeaderboard: !!gs.showLeaderboard,
        customLogo: gs.customLogo || null,
        activeRound: publicRound(gs.activeRound, gs.status),
        ...roundInfo(gs)
      });

      // Coalesced sends from the master (keeps message volume low with many phones)
      const syncTimerRef = useRef(null);
      const lastFullSyncRef = useRef(0);
      const scheduleSync = () => {
        if (roleRef.current !== 'master' || syncTimerRef.current) return;
        const wait = Math.max(300, 1500 - (Date.now() - lastFullSyncRef.current));
        syncTimerRef.current = setTimeout(() => {
          syncTimerRef.current = null;
          lastFullSyncRef.current = Date.now();
          const gs = gameStateRef.current;
          broadcastMessage({ type: 'STATE_SYNC', state: publicState(gs), players: publicPlayers(playersRef.current, gs.status) });
        }, wait);
      };
      const playersTimerRef = useRef(null);
      const schedulePlayers = () => {
        if (roleRef.current !== 'master' || playersTimerRef.current) return;
        playersTimerRef.current = setTimeout(() => {
          playersTimerRef.current = null;
          broadcastMessage({ type: 'PLAYERS_UPDATE', players: publicPlayers(playersRef.current, gameStateRef.current.status) });
        }, 1000);
      };

      // Save rounds whenever they change (photos are already compressed)
      useEffect(() => {
        try { localStorage.setItem('gm_rounds_store', JSON.stringify(rounds)); } catch (err) {}
      }, [rounds]);

      // Master: keep the session (players + scores) so a page refresh doesn't wipe the game
      const restoredRef = useRef(false);
      useEffect(() => {
        if (role !== 'master' || restoredRef.current) return;
        restoredRef.current = true;
        try {
          const saved = JSON.parse(localStorage.getItem(`gm_master_session_${roomKey}`) || 'null');
          if (saved && Date.now() - saved.savedAt < 6 * 3600 * 1000) {
            if (Array.isArray(saved.players)) setPlayers(saved.players);
            const round = rounds.find(r => r.id === saved.activeRoundId);
            if (round) {
              setGameState(prev => ({
                ...prev,
                activeRound: round,
                status: saved.status === 'guessing' ? 'locked' : (saved.status || 'waiting'),
                timerDuration: saved.timerDuration || prev.timerDuration,
                roundsPlayed: saved.roundsPlayed || 0,
                scoringMode: saved.scoringMode || 'fastest',
                lastStartedRoundId: saved.lastStartedRoundId || null,
                timerEndTime: 0
              }));
            }
          }
        } catch (e) {}
      }, [role]);
      useEffect(() => {
        if (role !== 'master' || !restoredRef.current) return;
        try {
          localStorage.setItem(`gm_master_session_${roomKey}`, JSON.stringify({
            players, status: gameState.status, activeRoundId: gameState.activeRound?.id, timerDuration: gameState.timerDuration, roundsPlayed: gameState.roundsPlayed || 0, scoringMode: gameState.scoringMode || 'fastest', lastStartedRoundId: gameState.lastStartedRoundId || null, savedAt: Date.now()
          }));
        } catch (e) {}
      }, [role, players, gameState.status, gameState.activeRound?.id, gameState.timerDuration, gameState.roundsPlayed, gameState.scoringMode]);
      // Set initial round if needed
      useEffect(() => {
        if (roleRef.current !== 'contestant' && !gameState.activeRound && rounds.length > 0) {
          setGameState(prev => ({
            ...prev,
            activeRound: rounds[0],
            status: 'waiting',
            timerDuration: prev.timerDuration || 10
          }));
        }
      }, [rounds]);

      // Direct contestant URL detection
      useEffect(() => {
        try {
          const params = new URLSearchParams(window.location.search);
          if (params.get('role') === 'contestant') {
            setIsDirectContestant(true);
            const savedName = localStorage.getItem('gm_contestant_name');
            if (savedName && savedName.trim()) {
              setContestantName(savedName.trim());
              setRole('contestant');
              setPlayers(prev => {
                if (prev.some(p => p.id === myPlayerId)) return prev;
                return [{ id: myPlayerId, name: savedName.trim(), score: 0, currentGuess: '', isCorrect: false }, ...prev];
              });
            } else {
              setRole(null);
            }
          }
        } catch (e) {}
      }, []);

      // Local Countdown Timer
      useEffect(() => {
        if (gameState.status !== 'guessing' || !gameState.timerEndTime) {
          setDisplaySeconds(gameState.timerDuration || 10);
          return;
        }

        const tick = () => {
          const now = Date.now();
          const remainingMs = Math.max(0, gameState.timerEndTime - now);
          const secs = Math.ceil(remainingMs / 1000);
          setDisplaySeconds(secs);

          if (remainingMs <= 0) {
            if (roleRef.current === 'master') {
              const lockedState = { ...gameStateRef.current, status: 'locked', timerEndTime: 0 };
              setGameState(lockedState);
              broadcastMessage({
                type: 'ROUND_LOCKED',
                activeRoundId: lockedState.activeRound?.id
              });
            } else {
              setGameState(prev => ({ ...prev, status: 'locked' }));
            }
          }
        };

        tick();
        const interval = setInterval(tick, 150);
        return () => clearInterval(interval);
      }, [gameState.status, gameState.timerEndTime, gameState.timerDuration]);

      // AUDIO EFFECTS
      const prevDisplaySeconds = useRef(displaySeconds);
      useEffect(() => {
        if (isMuted) return;
        if (gameState.status === 'guessing') {
          if (displaySeconds !== prevDisplaySeconds.current && displaySeconds > 0) {
            if (displaySeconds <= 3) {
              playGameSound('tick-urgent', isMuted);
            } else {
              playGameSound('tick', isMuted);
            }
          }
        }
        prevDisplaySeconds.current = displaySeconds;
      }, [displaySeconds, gameState.status, isMuted]);

      const prevStatus = useRef(gameState.status);
      useEffect(() => {
        if (isMuted) return;
        if (prevStatus.current === 'guessing' && gameState.status === 'locked') {
          playGameSound('buzzer', isMuted);
        } else if (prevStatus.current !== 'revealed' && gameState.status === 'revealed') {
          playGameSound('reveal', isMuted);
        } else if (prevStatus.current !== 'ended' && gameState.status === 'ended') {
          playGameSound('victory', isMuted);
        }
        prevStatus.current = gameState.status;
      }, [gameState.status, isMuted]);

      // Master heartbeat (every 4s): tiny message so late or dropped phones catch up
      useEffect(() => {
        if (role !== 'master') return;
        const hb = setInterval(() => {
          const gs = gameStateRef.current;
          broadcastMessage({
            type: 'HEARTBEAT',
            status: gs.status,
            roundId: gs.activeRound?.id || null,
            remainingSec: gs.status === 'guessing' ? Math.max(0, Math.ceil(((gs.timerEndTime || 0) - Date.now()) / 1000)) : 0,
            duration: gs.timerDuration || 10,
            playerCount: playersRef.current.length
          });
        }, 4000);
        return () => clearInterval(hb);
      }, [role]);

      const requestSync = (force = false) => {
        if (!force && Date.now() - lastSyncReqRef.current < 5000) return;
        lastSyncReqRef.current = Date.now();
        broadcastMessage({
          type: 'REQUEST_SYNC',
          playerId: myPlayerId,
          name: contestantNameRef.current || localStorage.getItem('gm_contestant_name') || 'Player'
        });
      };

      // Phone watchdog: if nothing heard from the master for 12s, ask for a sync
      useEffect(() => {
        if (role !== 'contestant') return;
        const wd = setInterval(() => {
          if (Date.now() - lastHeardRef.current > 12000) {
            setNetStatus('connecting');
            requestSync();
          }
        }, 4000);
        return () => clearInterval(wd);
      }, [role]);

      const mergeWithMe = (incoming) => (prev) => {
        const myLocal = prev.find(p => p.id === myPlayerId);
        if (myLocal && !incoming.some(p => p.id === myPlayerId)) return [myLocal, ...incoming];
        return incoming;
      };

      // Central Incoming Message Handler
      const handleIncomingMessage = (msgData) => {
        if (!msgData || typeof msgData !== 'object') return;
        if (msgData.senderId === myClientId.current) return; // Echo suppression
        if (msgData.room && msgData.room !== roomKey) return;

        const currentRole = roleRef.current;

        if (currentRole === 'master') {
          if (msgData.type === 'PLAYER_JOIN' || msgData.type === 'REQUEST_SYNC') {
            const id = msgData.id || msgData.playerId;
            const name = (msgData.name || '').toString().slice(0, 40).trim();
            if (id && name && name !== 'Player') {
              setPlayers(prev => {
                if (prev.some(p => p.id === id)) {
                  return msgData.type === 'PLAYER_JOIN' ? prev.map(p => p.id === id ? { ...p, name } : p) : prev;
                }
                return [...prev, { id, name, score: 0, currentGuess: '', isCorrect: false }];
              });
            }
            scheduleSync();
          } else if (msgData.type === 'PLAYER_GUESS') {
            const gs = gameStateRef.current;
            const active = gs.activeRound;
            if (gs.status !== 'guessing' || !active || msgData.roundId !== active.id) return;
            const guess = (msgData.guess || '').toString().slice(0, 80);
            if (!guess.trim()) return;
            const isMatched = checkAnswerMatch(guess, active.option1 || active.brand || '', active.option2 || active.name || '');
            // Speed: trust the phone's own stopwatch (fair across countries), but never more than 3s faster than the master saw it arrive
            const masterElapsed = Math.max(0, Date.now() - (roundStartAtRef.current || Date.now()));
            const reported = Number(msgData.elapsedMs);
            const elapsedMs = Math.round(Number.isFinite(reported)
              ? Math.min(masterElapsed, Math.max(masterElapsed - 3000, reported, 0))
              : masterElapsed);
            const allMode = (gs.scoringMode || 'fastest') === 'all';
            setPlayers(prev => {
              const exists = prev.some(p => p.id === msgData.playerId);
              const base = exists ? prev : [...prev, { id: msgData.playerId, name: (msgData.name || 'Player').toString().slice(0, 40), score: 0, currentGuess: '', isCorrect: false }];
              return base.map(p => {
                if (p.id !== msgData.playerId || p.currentGuess) return p; // one locked guess per round
                const pts = allMode && isMatched ? 1 : 0; // speed modes award at reveal
                return { ...p, currentGuess: guess, isCorrect: isMatched, elapsedMs, roundPoints: pts, score: (p.score || 0) + pts };
              });
            });
            schedulePlayers();
          }
          return;
        }

        if (currentRole !== 'contestant') return;
        lastHeardRef.current = Date.now();
        setNetStatus('connected');

        if (msgData.type === 'ROUND_START') {
          const ms = msgData.remainingMs || (msgData.remainingSec || msgData.duration || 10) * 1000;
          setGameState(prev => ({
            ...prev,
            status: 'guessing',
            timerEndTime: Date.now() + ms,
            scoringMode: msgData.scoringMode || prev.scoringMode,
            fastest: null,
            timerDuration: msgData.duration || 10,
            activeRound: msgData.activeRound || prev.activeRound,
            roundNumber: msgData.roundNumber || prev.roundNumber,
            totalRounds: msgData.totalRounds || prev.totalRounds,
            roundsPlayed: msgData.roundsPlayed || prev.roundsPlayed
          }));
          if (Array.isArray(msgData.players)) setPlayers(mergeWithMe(msgData.players));
          setMyGuessInput('');
        } else if (msgData.type === 'HEARTBEAT') {
          const local = gameStateRef.current;
          if (msgData.roundId !== (local.activeRound?.id || null)) { requestSync(); return; }
          if (msgData.status !== local.status) {
            if (msgData.status === 'guessing' && local.status === 'waiting' && msgData.remainingSec > 0) {
              setGameState(prev => ({ ...prev, status: 'guessing', timerEndTime: Date.now() + msgData.remainingSec * 1000, timerDuration: msgData.duration || 10 }));
            } else if (msgData.status === 'locked' && local.status === 'guessing') {
              setGameState(prev => ({ ...prev, status: 'locked', timerEndTime: 0 }));
            } else {
              requestSync(); // e.g. missed the reveal: need answers + reveal photo
            }
          }
        } else if (msgData.type === 'ROUND_LOCKED') {
          setGameState(prev => ({ ...prev, status: 'locked', timerEndTime: 0 }));
        } else if (msgData.type === 'ROUND_REVEAL') {
          setGameState(prev => ({ ...prev, status: 'revealed', timerEndTime: 0, activeRound: msgData.revealRound || prev.activeRound, fastest: msgData.fastest || null, scoringMode: msgData.scoringMode || prev.scoringMode }));
          if (Array.isArray(msgData.players)) setPlayers(mergeWithMe(msgData.players));
        } else if (msgData.type === 'GAME_ENDED') {
          setGameState(prev => ({ ...prev, status: 'ended', timerEndTime: 0 }));
          if (Array.isArray(msgData.players)) setPlayers(mergeWithMe(msgData.players));
        } else if (msgData.type === 'STATE_SYNC') {
          const st = msgData.state;
          if (st) {
            setGameState(prev => {
              let endTime = prev.timerEndTime;
              if (st.status === 'guessing' && (prev.status !== 'guessing' || prev.activeRound?.id !== st.activeRound?.id)) {
                endTime = Date.now() + (st.remainingMs || (st.remainingSec || 0) * 1000);
              }
              return {
                ...prev,
                status: st.status === 'guessing' && !(st.remainingSec > 0) ? 'locked' : st.status,
                timerEndTime: st.status === 'guessing' ? endTime : 0,
                timerDuration: st.timerDuration || 10,
                activeRound: st.activeRound || prev.activeRound,
                showLeaderboard: !!st.showLeaderboard,
                customLogo: st.customLogo || prev.customLogo,
                roundNumber: st.roundNumber || 0,
                totalRounds: st.totalRounds || 0,
                roundsPlayed: st.roundsPlayed || 0,
                scoringMode: st.scoringMode || prev.scoringMode,
                fastest: st.fastest || null
              };
            });
          }
          if (Array.isArray(msgData.players)) setPlayers(mergeWithMe(msgData.players));
        } else if (msgData.type === 'PLAYERS_UPDATE') {
          if (Array.isArray(msgData.players)) setPlayers(mergeWithMe(msgData.players));
        } else if (msgData.type === 'GAME_RESET') {
          try { localStorage.removeItem('gm_contestant_name'); } catch (e) {}
          setContestantName('');
          setMyGuessInput('');
          setMyGuess({ roundId: null, text: '' });
          setPlayers([]);
          setRole(null);
        }
      };
      const handlerRef = useRef(handleIncomingMessage);
      handlerRef.current = handleIncomingMessage;

      // Phones never use their own local rounds: the master's round arrives by sync
      useEffect(() => {
        if (role === 'contestant') {
          setGameState(prev => ({ ...prev, activeRound: null, status: 'waiting', timerEndTime: 0 }));
          lastHeardRef.current = 0;
        }
      }, [role]);

      // Connect to the room
      useEffect(() => {
        if (!role) return;

        if (!SB_ON) {
          // Offline demo: only syncs tabs in the same browser
          try {
            if (window.BroadcastChannel) {
              broadcastChannelRef.current = new BroadcastChannel(`gm_perfume_${roomKey}`);
              broadcastChannelRef.current.onmessage = (event) => {
                try { handlerRef.current(JSON.parse(event.data)); } catch (err) {}
              };
            }
          } catch (e) {}
          setNetStatus('offline');
          const t = setTimeout(() => {
            if (roleRef.current === 'contestant') requestSync(true); else scheduleSync();
          }, 200);
          return () => {
            clearTimeout(t);
            try { broadcastChannelRef.current && broadcastChannelRef.current.close(); } catch (e) {}
            broadcastChannelRef.current = null;
          };
        }

        setNetStatus('connecting');
        const main = sbClient.channel(`gm-${roomKey}`, { config: { broadcast: { self: false } } });
        main.on('broadcast', { event: 'm' }, ({ payload }) => handlerRef.current(payload));
        mainChRef.current = main;
        main.subscribe((status) => {
          if (status === 'SUBSCRIBED') {
            setNetStatus('connected');
            if (roleRef.current === 'contestant') {
              const name = contestantNameRef.current || localStorage.getItem('gm_contestant_name') || '';
              if (name) broadcastMessage({ type: 'PLAYER_JOIN', id: myPlayerId, name });
              requestSync(true);
            } else {
              scheduleSync();
            }
          } else if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT' || status === 'CLOSED') {
            setNetStatus('connecting');
          }
        });

        let inbox = null;
        if (role === 'master') {
          inbox = getInChannel();
          inbox.on('broadcast', { event: 'm' }, ({ payload }) => handlerRef.current(payload));
          inbox.subscribe();
        }

        return () => {
          try { sbClient.removeChannel(main); } catch (e) {}
          mainChRef.current = null;
          if (inChRef.current) {
            try { sbClient.removeChannel(inChRef.current); } catch (e) {}
            inChRef.current = null;
            inWsReadyRef.current = false;
          }
        };
      }, [roomKey, role]);
      // --- GAME MASTER ACTIONS ---
      const roundStartAtRef = useRef(0);
      const startTimer = () => {
        if (!gameState.activeRound) return;
        const duration = gameState.timerDuration || 10;
        const endTime = Date.now() + duration * 1000;

        const clearedPlayers = players.map(p => ({ ...p, currentGuess: '', isCorrect: false, elapsedMs: null, roundPoints: 0 }));
        setPlayers(clearedPlayers);
        playersRef.current = clearedPlayers;
        roundStartAtRef.current = Date.now();

        const isNewRound = gameState.lastStartedRoundId !== gameState.activeRound.id;
        const newState = {
          ...gameState,
          status: 'guessing',
          timerEndTime: endTime,
          lastStartedRoundId: gameState.activeRound.id,
          roundKey: gameState.activeRound.id + ':' + Date.now(),
          awardedRoundKey: null,
          fastest: null,
          roundsPlayed: (gameState.roundsPlayed || 0) + (isNewRound ? 1 : 0)
        };
        setGameState(newState);
        gameStateRef.current = newState;

        // Phones get the guessing photo only: no answers, no reveal photo
        broadcastMessage({
          type: 'ROUND_START',
          activeRound: publicRound(newState.activeRound, 'guessing'),
          duration: duration,
          remainingSec: duration,
          remainingMs: duration * 1000,
          scoringMode: newState.scoringMode || 'fastest',
          ...roundInfo(newState),
          players: publicPlayers(clearedPlayers, 'guessing')
        });
      };

      const stopTimerEarly = () => {
        const lockedState = { ...gameState, status: 'locked', timerEndTime: 0 };
        setGameState(lockedState);
        gameStateRef.current = lockedState;
        broadcastMessage({ type: 'ROUND_LOCKED', activeRoundId: gameState.activeRound?.id });
      };

      const revealAnswer = () => {
        const mode = gameState.scoringMode || 'fastest';
        let finalPlayers = players;
        let fastest = gameState.fastest || null;
        // Award speed points once per round (clicking Reveal twice doesn't double-award)
        if (gameState.awardedRoundKey !== gameState.roundKey) {
          const correct = players
            .filter(p => p.isCorrect && p.currentGuess)
            .sort((a, b) => (a.elapsedMs ?? 1e12) - (b.elapsedMs ?? 1e12));
          const winner = correct[0];
          fastest = winner ? { id: winner.id, name: winner.name, elapsedMs: winner.elapsedMs ?? null } : null;
          if (mode !== 'all') {
            const award = {};
            if (mode === 'fastest' && correct[0]) award[correct[0].id] = 1;
            if (mode === 'top3') [3, 2, 1].forEach((pts, i) => { if (correct[i]) award[correct[i].id] = pts; });
            finalPlayers = players.map(p => award[p.id] ? { ...p, roundPoints: award[p.id], score: (p.score || 0) + award[p.id] } : { ...p, roundPoints: 0 });
            setPlayers(finalPlayers);
            playersRef.current = finalPlayers;
          }
        }
        const revealedState = { ...gameState, status: 'revealed', timerEndTime: 0, awardedRoundKey: gameState.roundKey, fastest };
        setGameState(revealedState);
        gameStateRef.current = revealedState;
        broadcastMessage({
          type: 'ROUND_REVEAL',
          activeRoundId: gameState.activeRound?.id,
          revealRound: publicRound(gameState.activeRound, 'revealed'),
          fastest,
          scoringMode: mode,
          players: publicPlayers(finalPlayers, 'revealed')
        });
      };

      const endGameAndAnnounce = () => {
        const endedState = { ...gameState, status: 'ended', timerEndTime: 0 };
        setGameState(endedState);
        gameStateRef.current = endedState;
        broadcastMessage({ type: 'GAME_ENDED', players: publicPlayers(players, 'ended') });
      };

      const resetGame = () => {
        setPlayers([]);
        playersRef.current = [];
        const resetState = {
          ...gameState,
          status: 'waiting',
          timerEndTime: 0,
          roundsPlayed: 0,
          lastStartedRoundId: null,
          activeRound: rounds.length > 0 ? rounds[0] : null
        };
        setGameState(resetState);
        gameStateRef.current = resetState;
        try { localStorage.removeItem(`gm_master_session_${roomKey}`); } catch (e) {}
        broadcastMessage({ type: 'GAME_RESET' });
      };

      const selectRound = (round, jumpToArena = true) => {
        const clearedPlayers = players.map(p => ({ ...p, currentGuess: '', isCorrect: false, elapsedMs: null, roundPoints: 0 }));
        const newState = { ...gameState, activeRound: round, status: 'waiting', timerEndTime: 0, fastest: null };
        setPlayers(clearedPlayers);
        playersRef.current = clearedPlayers;
        setGameState(newState);
        gameStateRef.current = newState;
        scheduleSync();
        if (jumpToArena) setGmTab('arena');
      };

      const handleSaveRound = (e, keepOpen = false) => {
        if (e && e.preventDefault) e.preventDefault();
        if (!itemOption1.trim()) return;

        const guessingImg = itemGuessingImage || PRESET_ARTWORKS.paco_rabanne_guess;
        const revealImg = itemRevealImage || PRESET_ARTWORKS.paco_rabanne_reveal;

        const roundData = {
          id: editingRound ? editingRound.id : 'round_' + Date.now(),
          option1: itemOption1.trim(),
          option2: itemOption2.trim(),
          brand: itemOption1.trim(),
          name: itemOption2.trim() || itemOption1.trim(),
          guessingImage: guessingImg,
          revealImage: revealImg,
          createdAt: editingRound ? editingRound.createdAt : Date.now()
        };

        const updatedRounds = editingRound
          ? rounds.map(r => r.id === editingRound.id ? roundData : r)
          : [...rounds, roundData];
        setRounds(updatedRounds);

        if (!gameState.activeRound || gameState.activeRound?.id === roundData.id) {
          const updatedState = { ...gameState, activeRound: roundData };
          setGameState(updatedState);
          gameStateRef.current = updatedState;
          scheduleSync();
        }

        resetItemForm();
        if (!keepOpen) setShowItemModal(false);
      };

      const resetItemForm = () => {
        setEditingRound(null);
        setItemOption1('');
        setItemOption2('');
        setItemGuessingImage('');
        setItemRevealImage('');
      };

      const openEditRound = (round) => {
        setEditingRound(round);
        setItemOption1(round.option1 || round.brand || '');
        setItemOption2(round.option2 || round.name || '');
        setItemGuessingImage(round.guessingImage || '');
        setItemRevealImage(round.revealImage || '');
        setShowItemModal(true);
      };

      const applyQuickTemplate = (tpl) => {
        setItemOption1(tpl.option1);
        setItemOption2(tpl.option2);
        setItemGuessingImage(tpl.guess);
        setItemRevealImage(tpl.reveal);
      };

      const handleDeleteRound = (roundId) => {
        const remaining = rounds.filter(r => r.id !== roundId);
        setRounds(remaining);
        if (gameState.activeRound?.id === roundId) {
          const nextActive = remaining.length > 0 ? remaining[0] : null;
          const updatedState = { ...gameState, activeRound: nextActive, status: 'waiting' };
          setGameState(updatedState);
          gameStateRef.current = updatedState;
          scheduleSync();
        }
      };
      const handlePasscodeSubmit = (e) => {
        e.preventDefault();
        if (passcodeInput.trim() === '0000') {
          setShowPasscodeModal(false);
          setPasscodeInput('');
          setPasscodeError('');
          setRole('master');
        } else {
          setPasscodeError('Incorrect Passcode. Access restricted to Game Master.');
        }
      };

      const handleJoinContestant = (e) => {
        e.preventDefault();
        const trimmed = contestantName.trim().slice(0, 40);
        if (!trimmed) return;
        try { localStorage.setItem('gm_contestant_name', trimmed); } catch (err) {}

        setPlayers(prev => {
          if (prev.some(p => p.id === myPlayerId)) {
            return prev.map(p => p.id === myPlayerId ? { ...p, name: trimmed } : p);
          }
          return [{ id: myPlayerId, name: trimmed, score: 0, currentGuess: '', isCorrect: false }, ...prev];
        });

        roleRef.current = 'contestant';
        setRole('contestant');
        broadcastMessage({ type: 'PLAYER_JOIN', id: myPlayerId, name: trimmed });
      };

      // Phone stopwatch for this round: starts when the photo appears, adjusted if the phone joined mid-round
      const roundClockRef = useRef({ roundId: null, offsetMs: 0, shownAt: 0 });
      useEffect(() => {
        if (role !== 'contestant' || gameState.status !== 'guessing' || !gameState.activeRound) return;
        const id = gameState.activeRound.id + ':' + (gameState.timerEndTime || 0);
        if (roundClockRef.current.roundId === id) return;
        const totalMs = (gameState.timerDuration || 10) * 1000;
        const leftMs = Math.max(0, (gameState.timerEndTime || 0) - Date.now());
        roundClockRef.current = { roundId: id, offsetMs: Math.max(0, totalMs - leftMs), shownAt: performance.now() };
      }, [role, gameState.status, gameState.activeRound?.id, gameState.timerEndTime]);

      const submitContestantGuess = (e) => {
        e.preventDefault();
        const roundId = gameState.activeRound?.id;
        if (!myGuessInput.trim() || gameState.status !== 'guessing' || !roundId) return;
        if (myGuess.roundId === roundId && myGuess.text) return; // already locked in
        const text = myGuessInput.trim().slice(0, 80);

        setMyGuess({ roundId, text });
        broadcastMessage({
          type: 'PLAYER_GUESS',
          playerId: myPlayerId,
          name: contestantName || 'Player',
          guess: text,
          roundId,
          elapsedMs: Math.round(roundClockRef.current.offsetMs + (performance.now() - roundClockRef.current.shownAt))
        });
      };
      // Computed Values
      const currentRoundIndex = rounds.findIndex(r => r.id === gameState.activeRound?.id);
      const hasNextRound = currentRoundIndex >= 0 && currentRoundIndex < rounds.length - 1;
      const hasPrevRound = currentRoundIndex > 0;
      const topScore = players.length > 0 ? Math.max(...players.map(p => p.score || 0)) : 0;
      const leaders = topScore > 0 ? players.filter(p => (p.score || 0) === topScore) : [];
      const myRecord = players.find(p => p.id === myPlayerId) || { score: 0, currentGuess: '', isCorrect: false };
      const myLocalGuess = myGuess.roundId && myGuess.roundId === gameState.activeRound?.id ? myGuess.text : '';
      const myPlayer = role === 'contestant'
        ? { ...myRecord, currentGuess: myLocalGuess || myRecord.currentGuess || '', isCorrect: isRevealPhase(gameState.status) ? !!myRecord.isCorrect : false }
        : myRecord;

      // Highest score first; equal scores share the same rank
      const rankedPlayers = [...players]
        .sort((a, b) => (b.score || 0) - (a.score || 0) || String(a.name || '').localeCompare(String(b.name || '')))
        .map(p => ({ ...p, rank: 1 + players.filter(o => (o.score || 0) > (p.score || 0)).length }));

      const getAnonymousLeaderLabel = () => {
        if (topScore === 0 || leaders.length === 0) return '0 pts';
        const labels = leaders.map((l, idx) => {
          const pIdx = players.findIndex(p => p.id === l.id);
          return `Player No.${pIdx >= 0 ? pIdx + 1 : idx + 1}`;
        });
        return `${labels.join(', ')} (${topScore}p)`;
      };

      const getShareableUrl = () => {
        if (typeof window !== 'undefined') {
          const origin = window.location.origin;
          const path = window.location.pathname;
          return `${origin}${path}?room=${roomCode}&role=contestant`;
        }
        return `?room=${roomCode}&role=contestant`;
      };

      if (isLoading) {
        return <LoadingScreen onFinish={() => setIsLoading(false)} customLogoUrl={gameState.customLogo} />;
      }

      return (
        <div className="min-h-screen bg-[#080c16] text-zinc-100 flex flex-col justify-between select-none">
          {/* Floating Controls */}
          <div className="fixed bottom-3 right-3 z-50 flex items-center gap-2">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-2 rounded-full bg-zinc-900/90 border border-zinc-700/80 text-[#D4AF37] hover:text-white shadow-xl backdrop-blur transition-all"
              title={isMuted ? 'Unmute Sounds' : 'Mute Sounds'}
            >
              <Icon name={isMuted ? 'volumeX' : 'volume2'} className="w-4 h-4 text-orange-400" />
            </button>

            {role && (
              <div className="flex items-center gap-2 bg-zinc-900/90 border border-zinc-700/80 backdrop-blur px-3 py-1.5 rounded-full shadow-2xl">
                <button
                  onClick={() => {
                    if (role === 'contestant') {
                      setPasscodeInput('');
                      setPasscodeError('');
                      setShowPasscodeModal(true);
                    } else {
                      setRole('contestant');
                    }
                  }}
                  className="text-xs font-semibold text-orange-400 hover:text-orange-300 flex items-center gap-1.5"
                >
                  <Icon name={role === 'master' ? 'smartphone' : 'key'} className="w-3.5 h-3.5" />
                  <span>Switch to {role === 'master' ? 'Contestant' : 'Game Master'}</span>
                </button>
              </div>
            )}
          </div>

          {/* GM Passcode Modal (0000) */}
          {showPasscodeModal && (
            <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl max-w-sm w-full p-6 text-center shadow-2xl relative">
                <button
                  onClick={() => setShowPasscodeModal(false)}
                  className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1"
                >
                  <Icon name="x" className="w-5 h-5" />
                </button>
                <GameMasterLogo customLogoUrl={gameState.customLogo} className="h-16 mx-auto mb-2" />
                <h3 className="text-xl font-serif text-white mb-1">Game Master Passcode</h3>
                <p className="text-xs text-zinc-400 mb-5">Enter passcode 0000 to access hosting controls.</p>

                <form onSubmit={handlePasscodeSubmit} className="space-y-4">
                  <input
                    type="password"
                    maxLength={6}
                    placeholder="Enter passcode"
                    value={passcodeInput}
                    onChange={(e) => {
                      setPasscodeInput(e.target.value);
                      if (passcodeError) setPasscodeError('');
                    }}
                    autoFocus
                    className="w-full bg-zinc-950 border border-zinc-700 text-center tracking-[0.5em] text-2xl font-bold rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500"
                  />
                  {passcodeError && (
                    <p className="text-xs text-red-400 font-semibold">{passcodeError}</p>
                  )}
                  <div className="flex gap-2.5 pt-1">
                    <button
                      type="button"
                      onClick={() => setShowPasscodeModal(false)}
                      className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold py-2.5 rounded-xl text-xs transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-orange-500 to-[#D4AF37] hover:from-orange-600 hover:to-[#b08d2b] text-zinc-950 font-bold py-2.5 rounded-xl text-xs transition-all shadow-md"
                    >
                      Unlock Access
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* VIEW: Lobby */}
          {!role && (
            <div className="flex-1 flex flex-col items-center justify-center p-6 relative overflow-hidden">
              <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
              <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />

              <div className="z-10 w-full max-w-md bg-zinc-900/95 border border-zinc-800 p-8 rounded-3xl shadow-2xl text-center backdrop-blur-xl">
                <div className="flex justify-center mb-4">
                  <GameMasterLogo customLogoUrl={gameState.customLogo} className="h-28" />
                </div>
                <div className="inline-block bg-orange-500/15 border border-orange-500/30 text-orange-400 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
                  {isDirectContestant ? `Room: ${roomCode} • Contestant Entry` : 'Perfume Guessing Arena'}
                </div>

                <form onSubmit={handleJoinContestant} className="space-y-4 text-left">
                  <div>
                    <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                      {isDirectContestant ? 'Enter Your Name to Join Arena *' : 'Contestant Entry'}
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name (e.g. Jean, Marc, Sophie...)"
                      value={contestantName}
                      onChange={(e) => setContestantName(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500 shadow-inner"
                      required
                      autoFocus
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-[#D4AF37] hover:from-orange-600 hover:to-[#b08d2b] text-zinc-950 font-bold py-3.5 rounded-xl text-sm shadow-xl flex items-center justify-center gap-2 transition-transform active:scale-95"
                  >
                    <Icon name="user" className="w-4 h-4" /> Enter Game Arena ➔
                  </button>
                </form>

                {!isDirectContestant && (
                  <>
                    <div className="relative flex items-center py-5">
                      <div className="flex-grow border-t border-zinc-800"></div>
                      <span className="mx-3 text-[11px] text-zinc-500 font-bold uppercase tracking-wider">Host</span>
                      <div className="flex-grow border-t border-zinc-800"></div>
                    </div>

                    <button
                      onClick={() => {
                        setPasscodeInput('');
                        setPasscodeError('');
                        setShowPasscodeModal(true);
                      }}
                      className="w-full bg-zinc-800/80 hover:bg-zinc-800 text-zinc-200 font-bold py-3 rounded-xl border border-zinc-700 hover:border-orange-500/50 text-xs transition-colors flex items-center justify-center gap-2"
                    >
                      <Icon name="key" className="w-4 h-4 text-orange-400" /> Start Game (Game Master)
                    </button>
                  </>
                )}

                {isDirectContestant && (
                  <div className="pt-4 border-t border-zinc-800/80 mt-5">
                    <button
                      type="button"
                      onClick={() => {
                        setPasscodeInput('');
                        setPasscodeError('');
                        setShowPasscodeModal(true);
                      }}
                      className="text-[11px] text-zinc-500 hover:text-orange-400 font-semibold"
                    >
                      Game Master? Enter Passcode ➔
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* VIEW: Game Master */}
          {role === 'master' && (
            <div className="flex-1 flex flex-col">
              {/* Header Bar */}
              <header className="bg-zinc-900 border-b border-zinc-800 px-4 py-2 sticky top-0 z-40 flex items-center justify-between flex-wrap gap-2 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 pr-3 border-r border-zinc-800">
                    <GameMasterLogo customLogoUrl={gameState.customLogo} className="h-9" showByline={false} />
                    <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded font-mono font-bold">
                      Room: {roomCode}
                    </span>
                    <span className={`text-[10px] px-2 py-0.5 rounded font-bold border ${netStatus === 'connected' ? 'bg-emerald-950 text-emerald-400 border-emerald-800' : netStatus === 'offline' ? 'bg-red-950 text-red-400 border-red-800' : 'bg-amber-950 text-amber-400 border-amber-800'}`}>
                      {netStatus === 'connected' ? 'Phones: Live' : netStatus === 'offline' ? 'Offline demo: phones will NOT sync (add keys in config.js)' : 'Connecting…'}
                    </span>
                  </div>

                  <button
                    onClick={() => setGmTab('arena')}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                      gmTab === 'arena'
                        ? 'bg-gradient-to-r from-orange-500 to-[#D4AF37] text-zinc-950 shadow-md scale-105'
                        : 'bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700'
                    }`}
                  >
                    <Icon name="play" className="w-3.5 h-3.5" />
                    <span>🎮 Game Arena</span>
                  </button>

                  <button
                    onClick={() => setGmTab('items')}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                      gmTab === 'items'
                        ? 'bg-gradient-to-r from-orange-500 to-[#D4AF37] text-zinc-950 shadow-md scale-105'
                        : 'bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700'
                    }`}
                  >
                    <Icon name="crown" className="w-3.5 h-3.5 text-orange-400" />
                    <span>📋 Perfume Items ({rounds.length})</span>
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => { setCopiedLink(false); setShowShareModal(true); }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700"
                  >
                    <Icon name="share" className="w-3.5 h-3.5 text-orange-400" />
                    <span>📱 Share Link & QR</span>
                  </button>

                  {gameState.status === 'guessing' ? (
                    <button
                      onClick={stopTimerEarly}
                      className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-bold bg-red-600 hover:bg-red-500 text-white shadow animate-pulse"
                    >
                      <Icon name="stop" className="w-3.5 h-3.5" /> Lock ({displaySeconds}s)
                    </button>
                  ) : (
                    <button
                      onClick={startTimer}
                      disabled={!gameState.activeRound}
                      className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-bold bg-[#D4AF37] hover:bg-[#b5922c] text-zinc-950 shadow disabled:opacity-30"
                    >
                      <Icon name="play" className="w-3.5 h-3.5" /> Start ({gameState.timerDuration || 10}s)
                    </button>
                  )}

                  <button
                    onClick={revealAnswer}
                    disabled={!gameState.activeRound || gameState.status === 'revealed' || gameState.status === 'ended'}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-zinc-100 hover:bg-white text-zinc-950 disabled:opacity-30"
                  >
                    <Icon name="eye" className="w-3.5 h-3.5" /> Reveal Answer
                  </button>

                  {gameState.status !== 'ended' ? (
                    <button
                      onClick={endGameAndAnnounce}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold bg-red-950 hover:bg-red-900 text-red-300 border border-red-800"
                    >
                      <Icon name="flag" className="w-3.5 h-3.5" /> End Game
                    </button>
                  ) : null}

                  <button
                    onClick={resetGame}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold bg-zinc-800 hover:bg-zinc-700 text-orange-400 border border-zinc-700 hover:border-orange-500/50 transition-colors"
                    title="Clear all players and return contestants to home page"
                  >
                    <Icon name="rotate" className="w-3.5 h-3.5" /> Restart Game
                  </button>
                </div>
              </header>

              {/* TAB 1: ITEMS */}
              {gmTab === 'items' && (
                <main className="max-w-4xl mx-auto w-full p-6 space-y-6">
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                    <div>
                      <h2 className="text-xl font-serif text-[#D4AF37] flex items-center gap-2">
                        <Icon name="crown" className="w-5 h-5" /> Perfume Items ({rounds.length})
                      </h2>
                      <p className="text-zinc-400 text-xs mt-1">
                        Add or edit items. You stay on this page after saving so you can add multiple bottles.
                      </p>
                    </div>
                    <button
                      onClick={() => { resetItemForm(); setShowItemModal(true); }}
                      className="bg-[#D4AF37] hover:bg-[#b5922c] text-zinc-950 font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 transition-all shadow-md"
                    >
                      <Icon name="plus" className="w-4 h-4" /> Add Item
                    </button>
                  </div>

                  {/* Shared items file status */}
                  {(() => {
                    const inFile = itemsFile.status === 'ok' && itemsFile.hash === localItemsHash;
                    return (
                      <div className={`p-4 rounded-2xl border text-xs space-y-3 ${inFile ? 'bg-emerald-950/40 border-emerald-800' : 'bg-amber-950/40 border-amber-700'}`}>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <p className={`font-bold text-sm ${inFile ? 'text-emerald-400' : 'text-amber-400'}`}>
                              {inFile ? '✓ These items are saved in the game' : itemsFile.status === 'loading' ? 'Checking game file…' : '⚠ These items are only saved on this laptop'}
                            </p>
                            <p className="text-zinc-400 mt-1">
                              {inFile
                                ? 'Any laptop that opens the game as Game Master gets the same items and photos.'
                                : itemsFile.status === 'ok'
                                  ? 'The game file has different items (' + itemsFile.rounds.length + '). Download your items and upload the file to GitHub to share them, or load the game file items.'
                                  : 'No game file yet. Download your items and upload the file to GitHub so other laptops get them.'}
                            </p>
                          </div>
                          <div className="flex gap-2 shrink-0">
                            {!inFile && (
                              <button onClick={downloadItemsFile} className="bg-[#D4AF37] hover:bg-[#b5922c] text-zinc-950 font-bold px-3 py-2 rounded-xl">
                                ⬇ Download items file
                              </button>
                            )}
                            {!inFile && itemsFile.status === 'ok' && (
                              <button onClick={loadItemsFromFile} className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold px-3 py-2 rounded-xl border border-zinc-700">
                                Use game file items
                              </button>
                            )}
                          </div>
                        </div>
                        {itemsMsg && <p className="text-zinc-300 bg-zinc-950/60 rounded-lg px-3 py-2">{itemsMsg}</p>}
                      </div>
                    );
                  })()}

                  {gameState.activeRound && (
                    <div className="bg-gradient-to-r from-[#D4AF37]/20 via-zinc-900 to-zinc-900 border-2 border-[#D4AF37] p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
                      <div>
                        <span className="text-[10px] bg-[#D4AF37] text-zinc-950 font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                          Ready to Host
                        </span>
                        <h3 className="text-lg font-serif text-white mt-1">
                          {gameState.activeRound.brand} <span className="text-zinc-400 text-sm font-sans font-normal">— {gameState.activeRound.name}</span>
                        </h3>
                        <p className="text-xs text-zinc-400 mt-0.5">Click "Proceed to Game Arena" to start the 10-second guess round.</p>
                      </div>
                      <button
                        onClick={() => setGmTab('arena')}
                        className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#b5922c] text-zinc-950 font-extrabold px-6 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 shadow-2xl transition-transform active:scale-95"
                      >
                        <span>🎮 Proceed to Game Arena</span>
                        <Icon name="arrowRight" className="w-4 h-4" />
                      </button>
                    </div>
                  )}

                  <div className="space-y-3">
                    {rounds.map((perfume, idx) => {
                      const isActive = gameState.activeRound?.id === perfume.id;
                      return (
                        <div
                          key={perfume.id}
                          className={`w-full p-4 rounded-xl border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                            isActive
                              ? 'border-[#D4AF37] bg-[#D4AF37]/15 ring-2 ring-[#D4AF37]/50 shadow-lg'
                              : 'border-zinc-800 bg-zinc-900/80 hover:bg-zinc-900'
                          }`}
                        >
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${isActive ? 'bg-[#D4AF37] text-zinc-950' : 'bg-zinc-800 text-[#D4AF37]'}`}>
                                Item #{idx + 1}
                              </span>
                              <span className="text-[10px] bg-green-950 text-green-400 px-2 py-0.5 rounded border border-green-800">
                                2 Photos Ready
                              </span>
                            </div>
                            <div className="text-base font-semibold text-zinc-100 flex items-center gap-2">
                              <span>{perfume.option1 || perfume.brand}</span>
                              {hasValidOption2(perfume) && (
                                <span className="text-xs text-[#D4AF37] font-normal">
                                  (or: {perfume.option2 || perfume.name})
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                            <button
                              onClick={() => openEditRound(perfume)}
                              className="p-2 rounded-lg text-zinc-400 hover:text-white bg-zinc-800 hover:bg-zinc-700"
                              title="Edit Details"
                            >
                              <Icon name="edit" className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteRound(perfume.id)}
                              className="p-2 rounded-lg text-zinc-500 hover:text-red-400 bg-zinc-800 hover:bg-zinc-700"
                              title="Delete"
                            >
                              <Icon name="trash" className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => selectRound(perfume, true)}
                              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow ${
                                isActive
                                  ? 'bg-[#D4AF37] text-zinc-950'
                                  : 'bg-zinc-800 text-zinc-200 hover:text-white'
                              }`}
                            >
                              <Icon name="play" className="w-3.5 h-3.5" />
                              <span>{isActive ? 'Play Round Now ➔' : 'Select & Play'}</span>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </main>
              )}

              {/* TAB 2: ARENA */}
              {gmTab === 'arena' && (
                <main className="flex-1 p-4 max-w-5xl mx-auto w-full space-y-4">
                  <div className="bg-gradient-to-r from-zinc-900 via-[#D4AF37]/10 to-zinc-900 border border-[#D4AF37]/30 rounded-2xl p-4 flex items-center justify-between flex-wrap gap-3 shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37]">
                        <Icon name="crown" className="w-5 h-5 animate-bounce" />
                      </div>
                      <div>
                        <span className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-bold">Current Leader</span>
                        <div className="text-sm font-semibold text-white">
                          {leaders.length > 0 ? (
                            <span>{leaders.map(l => l.name).join(', ')} — <strong className="text-[#D4AF37] font-bold">{topScore} pts</strong></span>
                          ) : (
                            <span className="text-zinc-400 font-normal">No points recorded yet</span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setShowTimerModal(true)}
                        className="text-xs bg-zinc-800 hover:bg-zinc-700 text-[#D4AF37] border border-zinc-700 px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5"
                      >
                        <Icon name="clock" className="w-3.5 h-3.5" />
                        <span>Timer: {gameState.timerDuration || 10}s</span>
                        <Icon name="settings" className="w-3 h-3 text-zinc-400" />
                      </button>

                      <select
                        value={gameState.scoringMode || 'fastest'}
                        disabled={gameState.status === 'guessing' || gameState.status === 'locked'}
                        onChange={(e) => { const v = e.target.value; setGameState(prev => ({ ...prev, scoringMode: v })); scheduleSync(); }}
                        title="Scoring (change between rounds)"
                        className="text-xs bg-zinc-800 text-[#D4AF37] border border-zinc-700 px-2 py-1.5 rounded-xl font-bold disabled:opacity-50"
                      >
                        <option value="fastest">Scoring: Fastest only (1 pt)</option>
                        <option value="top3">Scoring: Top 3 fastest (3/2/1)</option>
                        <option value="all">Scoring: All correct (1 pt)</option>
                      </select>

                      <div className="text-xs text-zinc-400 flex items-center gap-1.5 px-3 py-1.5 bg-zinc-950 rounded-xl border border-zinc-800">
                        <Icon name="users" className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>{players.length} Contestants</span>
                      </div>
                    </div>
                  </div>

                  {gameState.activeRound && (
                    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-2xl space-y-4">
                      <div className="flex justify-between items-center flex-wrap gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                            Active Round: Item #{currentRoundIndex + 1}
                          </span>
                          <span className="text-xs bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded font-bold">
                            {SCORING_LABELS[gameState.scoringMode || 'fastest']}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => hasPrevRound && selectRound(rounds[currentRoundIndex - 1], true)}
                            disabled={!hasPrevRound}
                            className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 disabled:opacity-30 text-zinc-300"
                          >
                            <Icon name="chevronLeft" className="w-4 h-4" />
                          </button>
                          <span className="text-xs text-zinc-400 px-2 font-mono">{currentRoundIndex + 1} / {rounds.length}</span>
                          <button
                            onClick={() => hasNextRound && selectRound(rounds[currentRoundIndex + 1], true)}
                            disabled={!hasNextRound}
                            className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 disabled:opacity-30 text-zinc-300"
                          >
                            <Icon name="chevronRight" className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800">
                          <span className="text-zinc-500 font-bold block mb-1">Option 1 (Primary Answer)</span>
                          <span className="text-white font-bold text-base">{gameState.activeRound.option1 || gameState.activeRound.brand}</span>
                        </div>
                        <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800">
                          <span className="text-zinc-500 font-bold block mb-1">Option 2 (Alternative / Optional Answer)</span>
                          <span className="text-[#D4AF37] font-semibold text-base">
                            {hasValidOption2(gameState.activeRound) ? (gameState.activeRound.option2 || gameState.activeRound.name) : 'None (Only Option 1 Accepted)'}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                        <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800 flex flex-col justify-between">
                          <div className="flex justify-between items-center mb-1 text-[11px] font-bold text-amber-400">
                            <span>1. Guessing Photo (Close-Up)</span>
                            <span className="text-[10px] text-zinc-500">1:1 Square</span>
                          </div>
                          <div className="h-44 bg-zinc-900 rounded-lg overflow-hidden flex items-center justify-center border border-zinc-800 my-2">
                            <img
                              src={gameState.activeRound.guessingImage || PRESET_ARTWORKS.paco_rabanne_guess}
                              alt="Guessing"
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <label className="cursor-pointer text-center bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold py-2 px-3 rounded-lg border border-zinc-700">
                            <Icon name="upload" className="w-3.5 h-3.5 inline mr-1 text-[#D4AF37]" /> Upload Custom Photo
                            <input
                              type="file"
                              accept="image/*"
                              onChange={async (e) => {
                                const file = e.target.files?.[0];
                                if (!file) return;
                                const compressed = await compressImage(file);
                                const updated = { ...gameState.activeRound, guessingImage: compressed };
                                setGameState(prev => ({ ...prev, activeRound: updated }));
                                setRounds(prev => prev.map(r => r.id === updated.id ? updated : r));
                                scheduleSync();
                              }}
                              className="hidden"
                            />
                          </label>
                        </div>

                        <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800 flex flex-col justify-between">
                          <div className="flex justify-between items-center mb-1 text-[11px] font-bold text-[#D4AF37]">
                            <span>2. Reveal Photo (Full Bottle)</span>
                            <span className="text-[10px] text-zinc-500">1:1 or 4:5</span>
                          </div>
                          <div className="h-44 bg-zinc-900 rounded-lg overflow-hidden flex items-center justify-center border border-zinc-800 my-2">
                            <img
                              src={gameState.activeRound.revealImage || PRESET_ARTWORKS.paco_rabanne_reveal}
                              alt="Reveal"
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <label className="cursor-pointer text-center bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold py-2 px-3 rounded-lg border border-zinc-700">
                            <Icon name="upload" className="w-3.5 h-3.5 inline mr-1 text-[#D4AF37]" /> Upload Custom Photo
                            <input
                              type="file"
                              accept="image/*"
                              onChange={async (e) => {
                                const file = e.target.files?.[0];
                                if (!file) return;
                                const compressed = await compressImage(file);
                                const updated = { ...gameState.activeRound, revealImage: compressed };
                                setGameState(prev => ({ ...prev, activeRound: updated }));
                                setRounds(prev => prev.map(r => r.id === updated.id ? updated : r));
                                scheduleSync();
                              }}
                              className="hidden"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contestants Table */}
                  <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-xl">
                    <div className="p-4 bg-zinc-950 border-b border-zinc-800 flex justify-between items-center">
                      <h3 className="font-bold text-sm text-zinc-200 flex items-center gap-2">
                        <Icon name="user" className="w-4 h-4 text-[#D4AF37]" /> Live Contestants ({players.length})
                      </h3>
                      <button
                        onClick={() => {
                          const testNames = ['Alex', 'Sophie', 'Jean', 'Marc'];
                          const name = testNames[Math.floor(Math.random() * testNames.length)] + ` (${Math.floor(Math.random() * 80 + 10)})`;
                          const opt1 = gameState.activeRound?.option1 || 'Paco Rabanne';
                          const isMatch = Math.random() > 0.4;
                          const updated = [...players, {
                            id: 'bot_' + Date.now(),
                            name,
                            score: isMatch ? 1 : 0,
                            currentGuess: isMatch ? opt1 : 'Gucci',
                            isCorrect: isMatch
                          }];
                          setPlayers(updated);
                          schedulePlayers();
                        }}
                        className="text-xs bg-zinc-800 hover:bg-zinc-700 text-[#D4AF37] px-3 py-1 rounded-lg border border-zinc-700"
                      >
                        + Add Test Bot
                      </button>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm">
                        <thead className="bg-zinc-950/80 text-zinc-500 uppercase tracking-wider text-xs border-b border-zinc-800">
                          <tr>
                            <th className="px-5 py-3 font-medium">Contestant</th>
                            <th className="px-5 py-3 font-medium">Their Guess</th>
                            <th className="px-5 py-3 font-medium text-center">Auto Result</th>
                            <th className="px-5 py-3 font-medium">Total Score</th>
                            <th className="px-5 py-3 font-medium text-right">Adjust</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-800/60">
                          {players.length === 0 ? (
                            <tr>
                              <td colSpan="5" className="px-6 py-6 text-center text-zinc-500 text-xs">
                                No contestants connected yet. Click "Share Link & QR" above to let mobile players scan and join!
                              </td>
                            </tr>
                          ) : (
                            players.map((p, idx) => {
                              const isTop = topScore > 0 && p.score === topScore;
                              return (
                                <tr key={p.id} className={isTop ? 'bg-[#D4AF37]/5' : ''}>
                                  <td className="px-5 py-3">
                                    <div className="flex items-center gap-2">
                                      <span className="text-xs font-bold text-zinc-500">#{idx + 1}</span>
                                      <span className="font-semibold text-white">{p.name}</span>
                                      {isTop && (
                                        <span className="text-[10px] bg-[#D4AF37] text-zinc-950 font-bold px-1.5 py-0.2 rounded-full">#1</span>
                                      )}
                                    </div>
                                  </td>
                                  <td className="px-5 py-3">
                                    {p.currentGuess ? (
                                      <span className="px-2.5 py-1 rounded bg-zinc-800 text-white text-xs border border-zinc-700 font-mono">
                                        {p.currentGuess}
                                        {p.elapsedMs != null && <span className="text-zinc-500 ml-1.5">{(p.elapsedMs / 1000).toFixed(1)}s</span>}
                                      </span>
                                    ) : (
                                      <span className="text-zinc-600 text-xs italic">Awaiting...</span>
                                    )}
                                  </td>
                                  <td className="px-5 py-3 text-center">
                                    {p.currentGuess ? (
                                      p.isCorrect ? (
                                        <span className="text-[11px] bg-green-950 text-green-300 px-2 py-0.5 rounded border border-green-800 font-bold">
                                          {gameState.fastest?.id === p.id && (gameState.status === 'revealed' || gameState.status === 'ended') ? '⚡ ' : '✓ '}
                                          Correct ({(gameState.scoringMode || 'fastest') === 'all' || gameState.status === 'revealed' || gameState.status === 'ended' ? '+' + (p.roundPoints || 0) : 'pts at reveal'})
                                        </span>
                                      ) : (
                                        <span className="text-[11px] bg-red-950 text-red-400 px-2 py-0.5 rounded border border-red-900">
                                          Incorrect (0)
                                        </span>
                                      )
                                    ) : (
                                      <span className="text-zinc-600 text-xs">—</span>
                                    )}
                                  </td>
                                  <td className="px-5 py-3">
                                    <span className="font-bold text-base text-[#D4AF37]">{p.score || 0} pts</span>
                                  </td>
                                  <td className="px-5 py-3 text-right space-x-1">
                                    <button
                                      onClick={() => {
                                        const updated = players.map(pl => pl.id === p.id ? { ...pl, score: pl.score + 1 } : pl);
                                        setPlayers(updated);
                                        schedulePlayers();
                                      }}
                                      className="bg-[#D4AF37] text-zinc-950 text-xs font-bold px-2 py-0.5 rounded"
                                    >
                                      +1
                                    </button>
                                    <button
                                      onClick={() => {
                                        const updated = players.map(pl => pl.id === p.id && pl.score > 0 ? { ...pl, score: pl.score - 1 } : pl);
                                        setPlayers(updated);
                                        schedulePlayers();
                                      }}
                                      className="bg-zinc-800 text-zinc-400 text-xs font-semibold px-2 py-0.5 rounded border border-zinc-700"
                                    >
                                      -1
                                    </button>
                                  </td>
                                </tr>
                              );
                            })
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </main>
              )}

              {/* MODAL: Add / Edit Item */}
              {showItemModal && (
                <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
                  <div className="bg-zinc-900 border border-zinc-800 rounded-3xl max-w-xl w-full p-6 shadow-2xl relative my-8">
                    <button
                      onClick={() => { setShowItemModal(false); resetItemForm(); }}
                      className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1"
                    >
                      <Icon name="x" className="w-5 h-5" />
                    </button>

                    <div className="flex items-center gap-2 mb-1">
                      <Icon name="crown" className="w-5 h-5 text-[#D4AF37]" />
                      <h3 className="text-xl font-serif text-white">
                        {editingRound ? 'Edit Perfume Item' : 'Add New Perfume Item'}
                      </h3>
                    </div>
                    <p className="text-xs text-zinc-400 mb-3">
                      Both Option 1 and Option 2 will be automatically accepted for 1 point.
                    </p>

                    <div className="mb-4 bg-zinc-950 p-2.5 rounded-xl border border-zinc-800">
                      <span className="text-[10px] uppercase font-bold text-zinc-400 block mb-1.5 flex items-center gap-1">
                        <Icon name="sparkles" className="w-3 h-3 text-[#D4AF37]" /> Quick Presets (Click to autofill):
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {QUICK_TEMPLATES.map((tpl, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => applyQuickTemplate(tpl)}
                            className="text-[11px] bg-zinc-900 hover:bg-zinc-800 text-[#D4AF37] border border-zinc-700 px-2 py-1 rounded-lg transition-colors font-medium"
                          >
                            + {tpl.option1}
                          </button>
                        ))}
                      </div>
                    </div>

                    <form onSubmit={(e) => handleSaveRound(e, false)} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">
                            Answer Option 1 (Primary Brand) *
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Prada or Paco Rabanne"
                            value={itemOption1}
                            onChange={(e) => setItemOption1(e.target.value)}
                            className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-3.5 py-2 text-white text-sm focus:outline-none focus:border-[#D4AF37]"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">
                            Answer Option 2 (Alternative / Optional)
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Prada Milano (or N/A)"
                            value={itemOption2}
                            onChange={(e) => setItemOption2(e.target.value)}
                            className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-3.5 py-2 text-white text-sm focus:outline-none focus:border-[#D4AF37]"
                          />
                          <p className="text-[10px] text-zinc-500 mt-0.5">If "N/A", only Option 1 is accepted.</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                        <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-3 flex flex-col justify-between">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                              <Icon name="image" className="w-3.5 h-3.5" /> 1. Guessing Photo
                            </span>
                            <span className="text-[10px] text-zinc-500">1:1 Square</span>
                          </div>

                          <div className="h-28 bg-zinc-900 rounded-lg overflow-hidden flex items-center justify-center border border-zinc-800 my-1">
                            {itemGuessingImage ? (
                              <img src={itemGuessingImage} alt="Guessing preview" className="w-full h-full object-contain" />
                            ) : (
                              <span className="text-[11px] text-zinc-600">No close-up photo</span>
                            )}
                          </div>

                          <label className="w-full cursor-pointer block text-center bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold py-1.5 px-2 rounded-lg border border-zinc-700 transition-colors">
                            <Icon name="upload" className="w-3 h-3 inline mr-1 text-[#D4AF37]" /> Upload Photo
                            <input
                              type="file"
                              accept="image/*"
                              onChange={async (e) => {
                                const file = e.target.files?.[0];
                                if (file) setItemGuessingImage(await compressImage(file));
                              }}
                              className="hidden"
                            />
                          </label>
                        </div>

                        <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-3 flex flex-col justify-between">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider flex items-center gap-1">
                              <Icon name="eye" className="w-3.5 h-3.5" /> 2. Reveal Photo
                            </span>
                            <span className="text-[10px] text-zinc-500">1:1 or 4:5</span>
                          </div>

                          <div className="h-28 bg-zinc-900 rounded-lg overflow-hidden flex items-center justify-center border border-zinc-800 my-1">
                            {itemRevealImage ? (
                              <img src={itemRevealImage} alt="Reveal preview" className="w-full h-full object-contain" />
                            ) : (
                              <span className="text-[11px] text-zinc-600">No reveal photo</span>
                            )}
                          </div>

                          <label className="w-full cursor-pointer block text-center bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold py-1.5 px-2 rounded-lg border border-zinc-700 transition-colors">
                            <Icon name="upload" className="w-3 h-3 inline mr-1 text-[#D4AF37]" /> Upload Photo
                            <input
                              type="file"
                              accept="image/*"
                              onChange={async (e) => {
                                const file = e.target.files?.[0];
                                if (file) setItemRevealImage(await compressImage(file));
                              }}
                              className="hidden"
                            />
                          </label>
                        </div>
                      </div>

                      <div className="pt-3 flex gap-2">
                        <button
                          type="button"
                          onClick={() => { setShowItemModal(false); resetItemForm(); }}
                          className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold py-2.5 px-4 rounded-xl text-xs"
                        >
                          Cancel
                        </button>
                        {!editingRound && (
                          <button
                            type="button"
                            onClick={(e) => handleSaveRound(e, true)}
                            disabled={!itemOption1.trim()}
                            className="bg-zinc-800 hover:bg-zinc-700 border border-[#D4AF37]/50 text-[#D4AF37] font-bold py-2.5 px-4 rounded-xl text-xs disabled:opacity-40"
                          >
                            + Save & Add Another
                          </button>
                        )}
                        <button
                          type="submit"
                          disabled={!itemOption1.trim()}
                          className="flex-1 bg-gradient-to-r from-orange-500 to-[#D4AF37] text-zinc-950 font-bold py-2.5 rounded-xl text-xs shadow-lg disabled:opacity-40"
                        >
                          {editingRound ? 'Save Changes' : 'Save Item'}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}

              {/* MODAL: Timer Setting */}
              {showTimerModal && (
                <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
                  <div className="bg-zinc-900 border border-zinc-800 rounded-3xl max-w-sm w-full p-6 shadow-2xl relative text-center">
                    <button onClick={() => setShowTimerModal(false)} className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1">
                      <Icon name="x" className="w-5 h-5" />
                    </button>
                    <Icon name="clock" className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
                    <h3 className="text-lg font-serif text-white mb-1">Set Timer Duration</h3>
                    <p className="text-xs text-zinc-400 mb-4">Choose how many seconds contestants have to guess:</p>
                    <div className="grid grid-cols-4 gap-2 mb-4">
                      {[5, 10, 15, 20, 25, 30, 45, 60].map(sec => (
                        <button
                          key={sec}
                          onClick={() => {
                            const updated = { ...gameState, timerDuration: sec };
                            setGameState(updated);
                            scheduleSync();
                            setShowTimerModal(false);
                          }}
                          className={`py-2 rounded-xl text-xs font-bold border transition-colors ${
                            (gameState.timerDuration || 10) === sec
                              ? 'bg-[#D4AF37] text-zinc-950 border-[#D4AF37]'
                              : 'bg-zinc-950 text-zinc-300 border-zinc-800 hover:border-zinc-700'
                          }`}
                        >
                          {sec}s
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* MODAL: Share */}
              {showShareModal && (
                <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
                  <div className="bg-zinc-900 border border-zinc-800 rounded-3xl max-w-md w-full p-6 shadow-2xl relative text-center">
                    <button onClick={() => setShowShareModal(false)} className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1">
                      <Icon name="x" className="w-5 h-5" />
                    </button>
                    <Icon name="share" className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                    <h3 className="text-xl font-serif text-white mb-1">Invite Mobile Contestants</h3>
                    <p className="text-xs text-zinc-400 mb-4">Scan with phone camera or copy link to play together:</p>

                    <div className="bg-white p-3 rounded-2xl inline-block shadow-xl mb-4 border-2 border-[#D4AF37]">
                      <img
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(getShareableUrl())}`}
                        alt="QR Code"
                        className="w-40 h-40"
                      />
                    </div>

                    <div className="flex gap-2 mb-3">
                      <input
                        type="text"
                        readOnly
                        value={getShareableUrl()}
                        className="flex-1 bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs font-mono text-zinc-300 truncate"
                      />
                      <button
                        onClick={() => {
                          const temp = document.createElement('textarea');
                          temp.value = getShareableUrl();
                          document.body.appendChild(temp);
                          temp.select();
                          document.execCommand('copy');
                          document.body.removeChild(temp);
                          setCopiedLink(true);
                          setTimeout(() => setCopiedLink(false), 2000);
                        }}
                        className="bg-[#D4AF37] hover:bg-[#b5922c] text-zinc-950 font-bold px-4 py-2 rounded-xl text-xs transition-colors shrink-0"
                      >
                        {copiedLink ? 'Copied!' : 'Copy'}
                      </button>
                    </div>

                    <div className="bg-zinc-950 p-2.5 rounded-xl border border-zinc-800 text-[11px] text-zinc-400">
                      <span>Room Code: <strong className="text-white font-mono">{roomCode}</strong></span>
                      <span className="mx-2">•</span>
                      <span className="text-emerald-400 font-semibold">🟢 Live Connected</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* VIEW: Contestant View */}
          {role === 'contestant' && (
            <div className="h-[100dvh] max-h-[100dvh] bg-[#070b14] flex flex-col relative pb-14 max-w-md mx-auto shadow-2xl border-x border-zinc-900 overflow-hidden">
              {/* Header */}
              <header className="px-4 py-2.5 bg-zinc-950 border-b border-zinc-800 flex justify-between items-center shrink-0">
                <div className="flex items-center gap-2">
                  <GameMasterLogo customLogoUrl={gameState.customLogo} className="h-8" showByline={false} />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] text-zinc-500 uppercase font-bold">Contestant</span>
                      <span className="text-[9px] bg-emerald-950 text-emerald-400 border border-emerald-800 px-1.5 py-0.2 rounded-full font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        {netStatus === 'connected' ? 'Live' : netStatus === 'offline' ? 'Offline' : 'Syncing'}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-white leading-tight block truncate max-w-[120px]">{contestantName || 'Player'}</span>
                      <button
                        onClick={() => setRole(null)}
                        className="text-[10px] text-zinc-500 hover:text-orange-400 underline"
                        title="Change Name"
                      >
                        (Edit)
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="text-right bg-zinc-900/90 border border-zinc-800 px-2.5 py-1 rounded-xl">
                    <span className="text-[9px] text-orange-400 font-bold uppercase tracking-wider block">Leader</span>
                    <span className="text-xs font-bold text-zinc-200">{getAnonymousLeaderLabel()}</span>
                  </div>

                  <div className="bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-xl flex items-center gap-1">
                    <Icon name="trophy" className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span className="font-bold text-xs text-white">{myPlayer.score || 0}</span>
                  </div>
                </div>
              </header>

              {/* Main Content */}
              <main className="flex-1 p-3 flex flex-col justify-between min-h-0 overflow-y-auto">
                {gameState.status === 'ended' ? (
                  /* Game Concluded Screen */
                  <div className="flex-1 flex flex-col justify-between text-center space-y-4 py-4">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 text-[10px] font-bold uppercase tracking-widest animate-pulse">
                        <Icon name="flag" className="w-3 h-3" /> Game Has Concluded
                      </div>
                      <h2 className="text-2xl font-serif font-bold text-white">Official Standings</h2>
                      <p className="text-xs text-zinc-400">Thank you for playing!</p>
                    </div>

                    <div className="space-y-2 max-h-60 overflow-y-auto px-1">
                      {rankedPlayers.map((p) => {
                        const isTop = p.rank === 1 && (p.score || 0) > 0;
                        const isMe = p.id === myPlayerId;
                        return (
                          <div
                            key={p.id}
                            className={`p-3 rounded-xl border flex items-center justify-between ${
                              isTop ? 'bg-[#D4AF37]/20 border-[#D4AF37]' : 'bg-zinc-900 border-zinc-800'
                            } ${isMe ? 'ring-1 ring-orange-500/60' : ''}`}
                          >
                            <div className="flex items-center gap-3">
                              <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${
                                isTop ? 'bg-[#D4AF37] text-zinc-950' : 'bg-zinc-800 text-zinc-400'
                              }`}>
                                #{p.rank}
                              </span>
                              <span className="text-sm font-semibold text-white">{p.name}{isMe ? ' (You)' : ''}</span>
                            </div>
                            <span className="font-bold text-[#D4AF37] text-sm">{p.score || 0} pts</span>
                          </div>
                        );
                      })}
                    </div>

                    <button
                      onClick={() => { setRole(null); setContestantName(''); }}
                      className="w-full bg-gradient-to-r from-orange-500 to-[#D4AF37] hover:from-orange-600 hover:to-[#b08d2b] text-zinc-950 font-extrabold py-3.5 rounded-xl shadow-xl flex items-center justify-center gap-2 text-sm"
                    >
                      <Icon name="home" className="w-4 h-4" /> Back to Home Page
                    </button>
                  </div>
                ) : gameState.status === 'waiting' ? (
                  /* Waiting Lobby Screen */
                  <div className="flex-1 flex flex-col justify-between py-3 text-center space-y-4">
                    <div className="space-y-4 w-full max-w-sm mx-auto">
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
                        <span>{(gameState.roundsPlayed || 0) > 0 ? 'Next question coming up...' : 'Waiting for Game Master to start...'}</span>
                      </div>

                      <div className="py-2">
                        <GameMasterLogo customLogoUrl={gameState.customLogo} className="h-20 mx-auto drop-shadow-xl" />
                        {(gameState.roundsPlayed || 0) > 0 ? (
                          <>
                            <h2 className="text-lg font-serif text-white font-bold mt-2">Get ready for the next question, {contestantName || 'Player'}!</h2>
                            {gameState.roundNumber > 0 && gameState.totalRounds > 0 && (
                              <p className="text-xs font-bold text-orange-400 mt-1">Question {gameState.roundNumber} of {gameState.totalRounds}</p>
                            )}
                            <p className="text-xs text-zinc-400 mt-1">
                              Your score so far: <strong className="text-[#D4AF37]">{myPlayer.score || 0} pts</strong>. The next bottle and {gameState.timerDuration || 10}-second timer appear when the Game Master starts.
                            </p>
                          </>
                        ) : (
                          <>
                            <h2 className="text-lg font-serif text-white font-bold mt-2">Get Ready, {contestantName || 'Player'}!</h2>
                            <p className="text-xs text-zinc-400 mt-1">
                              The bottle photo and {gameState.timerDuration || 10}-second timer will appear as soon as the Game Master begins the round.
                            </p>
                          </>
                        )}
                      </div>

                      {/* Live Contestants Joined */}
                      <div className="bg-zinc-900/95 border border-zinc-800 rounded-2xl p-4 text-left shadow-xl w-full">
                        <div className="flex items-center justify-between mb-3 border-b border-zinc-800 pb-2">
                          <span className="text-xs font-bold text-orange-400 uppercase tracking-wider flex items-center gap-1.5">
                            <Icon name="users" className="w-4 h-4 text-orange-400" />
                            <span>Contestants Joined ({players.length || 1})</span>
                          </span>
                          <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded-full font-bold">
                            Live Lobby
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-1">
                          {players.map((p, idx) => {
                            const isMe = p.id === myPlayerId || p.name === contestantName;
                            return (
                              <div
                                key={p.id || idx}
                                className={`p-2.5 rounded-xl border flex items-center gap-2 text-xs truncate ${
                                  isMe
                                    ? 'bg-orange-500/15 border-orange-500/50 text-white font-bold ring-1 ring-orange-500/30'
                                    : 'bg-zinc-950 border-zinc-800 text-zinc-300'
                                }`}
                              >
                                <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                                  isMe ? 'bg-orange-500 text-zinc-950' : 'bg-zinc-800 text-zinc-400'
                                }`}>
                                  {idx + 1}
                                </div>
                                <span className="truncate">{p.name} {isMe ? '(You)' : ''}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    <div className="w-full pt-2">
                      <p className="text-[11px] text-zinc-500 font-medium">
                        Room: <strong className="text-zinc-300 font-mono">{roomCode}</strong> • Keep this screen open
                      </p>
                    </div>
                  </div>
                ) : (
                  /* Active Round Screen (guessing / locked / revealed) */
                  <div className="flex-1 flex flex-col justify-between min-h-0 space-y-2">
                    {/* Top: Perfume Image */}
                    <div className="relative w-full flex-1 min-h-0 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900 flex items-center justify-center p-2">
                      <img
                        src={
                          gameState.status === 'revealed'
                            ? (gameState.activeRound?.revealImage || PRESET_ARTWORKS.paco_rabanne_reveal)
                            : (gameState.activeRound?.guessingImage || PRESET_ARTWORKS.paco_rabanne_guess)
                        }
                        alt="Perfume bottle"
                        className="w-full h-full object-contain rounded-lg"
                      />

                      {/* Timer Overlay */}
                      <div className="absolute top-3 right-3 z-10">
                        {gameState.status === 'guessing' && (
                          <div className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse flex items-center gap-1">
                            <Icon name="clock" className="w-3.5 h-3.5" /> {displaySeconds}s
                          </div>
                        )}
                        {gameState.status === 'locked' && (
                          <span className="bg-zinc-900/90 text-red-400 border border-zinc-700 px-2.5 py-1 rounded-full text-xs font-bold">
                            Time's Up
                          </span>
                        )}
                        {gameState.status === 'revealed' && (
                          <span className="bg-[#D4AF37] text-zinc-950 px-2.5 py-1 rounded-full text-xs font-bold">
                            Revealed
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Bottom: Official Answer / Guess Input */}
                    <div className="shrink-0 pt-1">
                      {gameState.status === 'revealed' ? (
                        <div className="w-full bg-zinc-900 border border-[#D4AF37]/60 p-3.5 rounded-2xl shadow-xl space-y-2">
                          <div className="flex justify-between items-center border-b border-zinc-800 pb-1.5">
                            <div className="flex items-center gap-1.5">
                              <Icon name="crown" className="w-3.5 h-3.5 text-[#D4AF37]" />
                              <span className="text-[#D4AF37] text-[10px] uppercase font-bold tracking-widest">Official Answer</span>
                            </div>
                            <span className={`text-[11px] font-bold px-2 py-0.5 rounded-lg ${
                              myRecord.roundPoints > 0 ? 'bg-green-950 text-green-300 border border-green-700' : 'bg-zinc-800 text-zinc-400'
                            }`}>
                              {myRecord.roundPoints > 0 ? `+${myRecord.roundPoints} Pt${myRecord.roundPoints > 1 ? 's' : ''} Earned! 🎉` : '+0 Pts'}
                            </span>
                          </div>

                          <div className="bg-zinc-950 p-2.5 rounded-xl border border-zinc-800 text-left">
                            <span className="text-[10px] text-zinc-500 uppercase font-bold block mb-0.5">Accepted Brand:</span>
                            <div className="text-white font-bold text-sm flex items-center gap-1.5 flex-wrap">
                              <span className="text-[#D4AF37]">{gameState.activeRound?.option1 || gameState.activeRound?.brand}</span>
                              {hasValidOption2(gameState.activeRound) && (
                                <>
                                  <span className="text-zinc-500 text-xs">or</span>
                                  <span className="text-[#D4AF37]">{gameState.activeRound?.option2 || gameState.activeRound?.name}</span>
                                </>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-xs bg-zinc-950/80 p-2 rounded-xl border border-zinc-800">
                            <span className="text-zinc-400">Your Guess: <strong className="text-white ml-1">{myPlayer.currentGuess || '(None)'}</strong></span>
                            {myPlayer.isCorrect ? (
                              <span className="text-green-400 font-bold flex items-center gap-1">✓ Correct{myRecord.elapsedMs != null ? ` · ${(myRecord.elapsedMs / 1000).toFixed(1)}s` : ''}</span>
                            ) : (
                              <span className="text-red-400 font-medium">Incorrect</span>
                            )}
                          </div>

                          <div className="text-[11px] text-center bg-orange-950/40 border border-orange-900/60 rounded-xl px-2 py-1.5 text-orange-300">
                            {gameState.fastest
                              ? (gameState.fastest.id === myPlayerId
                                  ? `⚡ You were the fastest correct answer${gameState.fastest.elapsedMs != null ? ` (${(gameState.fastest.elapsedMs / 1000).toFixed(1)}s)` : ''}!`
                                  : `⚡ Fastest correct: ${gameState.fastest.name}${gameState.fastest.elapsedMs != null ? ` (${(gameState.fastest.elapsedMs / 1000).toFixed(1)}s)` : ''}${myPlayer.isCorrect && !(myRecord.roundPoints > 0) ? ' · you were correct but slower' : ''}`)
                              : 'Nobody got this one right.'}
                          </div>
                        </div>
                      ) : gameState.status === 'guessing' && !myPlayer.currentGuess ? (
                        <form onSubmit={submitContestantGuess} className="space-y-2 bg-zinc-900 border border-zinc-800 p-3 rounded-2xl shadow-xl">
                          <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                            Guess the Perfume Brand ({displaySeconds}s)
                          </label>
                          <p className="text-[10px] text-orange-300">{SCORING_LABELS[gameState.scoringMode || 'fastest']}. Speed counts!</p>
                          <input
                            type="text"
                            placeholder="Type brand name (e.g. Prada)..."
                            value={myGuessInput}
                            onChange={(e) => setMyGuessInput(e.target.value)}
                            className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-orange-500"
                            autoFocus
                          />
                          <button
                            type="submit"
                            disabled={!myGuessInput.trim()}
                            className="w-full bg-gradient-to-r from-orange-500 to-[#D4AF37] text-zinc-950 font-bold py-2.5 rounded-xl text-xs disabled:opacity-40"
                          >
                            Lock In Guess ➔
                          </button>
                        </form>
                      ) : (
                        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-center">
                          {myPlayer.currentGuess ? (
                            <div>
                              <Icon name="checkCircle" className="w-5 h-5 text-orange-400 mx-auto mb-1" />
                              <p className="text-orange-400 font-semibold text-xs">Answer Locked In: "{myPlayer.currentGuess}"</p>
                              <p className="text-[10px] text-zinc-500 mt-0.5">Scoring will unlock when GM reveals.</p>
                            </div>
                          ) : (
                            <p className="text-zinc-500 text-xs">
                              Time expired before guess was submitted.
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </main>
            </div>
          )}
        </div>
      );
    }

    ReactDOM.createRoot(document.getElementById('root')).render(<App />);
  