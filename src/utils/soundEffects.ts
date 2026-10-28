// Pure Web Audio API sound effects inspired by whimsical anime gadgets & music boxes

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass =
      window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

export function playBellChime(): void {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const freqs = [1567.98, 2093.0, 2637.02]; // G6, C7, E7 sparkling bell overtones

  freqs.forEach((freq, i) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now + i * 0.055);

    gain.gain.setValueAtTime(0.001, now + i * 0.055);
    gain.gain.exponentialRampToValueAtTime(0.14 / (i + 1), now + i * 0.055 + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.055 + 0.65);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now + i * 0.055);
    osc.stop(now + i * 0.055 + 0.7);
  });
}

export function playGadgetFanfare(): void {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  // Whimsical "Ta-da! Secret Gadget" motif: C5 - D5 - E5 - G5 - C6
  const notes = [
    { freq: 523.25, time: 0.0, dur: 0.13 },
    { freq: 587.33, time: 0.13, dur: 0.13 },
    { freq: 659.25, time: 0.26, dur: 0.13 },
    { freq: 783.99, time: 0.4, dur: 0.16 },
    { freq: 1046.5, time: 0.58, dur: 0.65 },
  ];

  notes.forEach(({ freq, time, dur }) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, now + time);

    gain.gain.setValueAtTime(0.001, now + time);
    gain.gain.exponentialRampToValueAtTime(0.16, now + time + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + time + dur);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now + time);
    osc.stop(now + time + dur + 0.05);
  });
}

export function playDoorPortalSound(): void {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const scale = [523.25, 659.25, 783.99, 987.77, 1046.5, 1318.51, 1567.98, 2093.0];

  scale.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const startTime = now + idx * 0.065;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, startTime);

    gain.gain.setValueAtTime(0.001, startTime);
    gain.gain.exponentialRampToValueAtTime(0.12, startTime + 0.025);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.85);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(startTime);
    osc.stop(startTime + 0.9);
  });
}

export function playTimeMachineSound(): void {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(330, now);
  osc.frequency.exponentialRampToValueAtTime(1320, now + 0.35);
  osc.frequency.exponentialRampToValueAtTime(880, now + 0.55);

  gain.gain.setValueAtTime(0.001, now);
  gain.gain.exponentialRampToValueAtTime(0.13, now + 0.1);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.6);

  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + 0.65);
}

export function playDorayakiMunch(): void {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const freqs = [440, 587.33, 880];
  freqs.forEach((f, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const t = now + idx * 0.05;
    osc.type = 'sine';
    osc.frequency.setValueAtTime(f, t);
    gain.gain.setValueAtTime(0.001, t);
    gain.gain.exponentialRampToValueAtTime(0.12, t + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(t);
    osc.stop(t + 0.2);
  });
}

export function playPhoneBoothRing(): void {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  // Retro telephone bell trill + magical chime
  const pulses = [0, 0.08, 0.16, 0.24, 0.45];
  pulses.forEach((offset, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(idx === 4 ? 1318.5 : idx % 2 === 0 ? 880 : 1046.5, now + offset);

    gain.gain.setValueAtTime(0.001, now + offset);
    gain.gain.exponentialRampToValueAtTime(0.13, now + offset + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + offset + (idx === 4 ? 0.4 : 0.07));

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now + offset);
    osc.stop(now + offset + (idx === 4 ? 0.45 : 0.08));
  });
}

export function playNoseBoop(): void {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(520, now);
  osc.frequency.exponentialRampToValueAtTime(780, now + 0.12);

  gain.gain.setValueAtTime(0.001, now);
  gain.gain.exponentialRampToValueAtTime(0.15, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);

  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + 0.2);
}

export function playBirthdayMusicBoxChime(): void {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const melody = [
    { f: 523.25, t: 0.0, d: 0.28 },   // C5
    { f: 523.25, t: 0.3, d: 0.25 },   // C5
    { f: 587.33, t: 0.6, d: 0.5 },    // D5
    { f: 523.25, t: 1.15, d: 0.5 },   // C5
    { f: 698.46, t: 1.7, d: 0.5 },    // F5
    { f: 659.25, t: 2.25, d: 0.9 },   // E5
  ];

  melody.forEach(({ f, t, d }) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(f, now + t);

    gain.gain.setValueAtTime(0.001, now + t);
    gain.gain.exponentialRampToValueAtTime(0.11, now + t + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + t + d);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now + t);
    osc.stop(now + t + d + 0.05);
  });
}
