/**
 * web-audio-api.ts
 *
 * THEORY:
 * - The Web Audio API lets you create and control sounds in the browser.
 * - Instead of playing static audio files, you can generate tones, apply effects, or build audio graphs.
 * - Core objects:
 *    1. AudioContext → the main audio environment
 *    2. OscillatorNode → generates tones (sine, square, sawtooth, triangle)
 *    3. GainNode → controls volume
 * - Use cases: music apps, games, sound effects, visualizations.
 */

let audioContext: AudioContext | null = null;
let oscillator: OscillatorNode | null = null;
let gainNode: GainNode | null = null;

const playBtn = document.querySelector<HTMLButtonElement>("#play-btn");
const stopBtn = document.querySelector<HTMLButtonElement>("#stop-btn");
const volumeSlider = document.querySelector<HTMLInputElement>("#volume");

if (playBtn) {
  playBtn.addEventListener("click", () => {
    if (!audioContext) {
      audioContext = new AudioContext();

      // ✅ Create oscillator (sound source)
      oscillator = audioContext.createOscillator();
      oscillator.type = "sine"; // "sine", "square", "triangle", "sawtooth"
      oscillator.frequency.value = 440; // frequency in Hz (440Hz = A4 note)

      // ✅ Create gain node (volume control)
      gainNode = audioContext.createGain();
      gainNode.gain.value = 0.2; // default volume (20%)

      // Connect oscillator → gain → speakers
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.start();
      console.log("Oscillator started 🎵");
    }
  });
}

if (stopBtn) {
  stopBtn.addEventListener("click", () => {
    if (oscillator) {
      oscillator.stop();
      oscillator.disconnect();
      console.log("Oscillator stopped ⏹️");
    }
    if (audioContext) {
      audioContext.close();
      audioContext = null;
    }
  });
}

// ✅ Volume control
if (volumeSlider) {
  volumeSlider.addEventListener("input", (e) => {
    const value = parseFloat((e.target as HTMLInputElement).value);
    if (gainNode) {
      gainNode.gain.value = value;
      console.log("Volume set to:", value);
    }
  });
}
