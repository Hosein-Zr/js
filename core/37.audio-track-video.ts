/**
 * ==========================================
 * Media Elements: <audio>, <video>, <track>
 * ==========================================
 *
 * 1. <audio>
 * ------------------------------------------
 * - Used to embed sound content.
 * - Attributes:
 *    - controls → adds play/pause UI
 *    - autoplay → starts playing automatically (⚠️ discouraged)
 *    - loop → repeats audio
 *
 * Example:
 *   <audio controls>
 *     <source src="song.mp3" type="audio/mpeg" />
 *   </audio>
 *
 * Accessibility:
 * - Always provide controls (don’t rely only on autoplay).
 * - Provide transcript if audio is speech-based.
 *
 *
 * 2. <video>
 * ------------------------------------------
 * - Used to embed video content.
 * - Attributes:
 *    - controls → default browser player UI
 *    - autoplay, muted, loop → playback control
 *    - poster → placeholder image before play
 *
 * Example:
 *   <video controls poster="preview.jpg">
 *     <source src="movie.mp4" type="video/mp4" />
 *   </video>
 *
 * Accessibility:
 * - Ensure controls are visible & keyboard accessible.
 * - Provide captions/subtitles (via <track>).
 *
 *
 * 3. <track>
 * ------------------------------------------
 * - Provides timed text (captions, subtitles, descriptions).
 * - Works with <video> or <audio>.
 * - Attributes:
 *    - kind: subtitles | captions | descriptions | chapters | metadata
 *    - srclang: language (e.g., "en")
 *    - label: how it appears in the player
 *    - default: auto-select this track
 *
 * Example:
 *   <video controls>
 *     <source src="movie.mp4" type="video/mp4" />
 *     <track kind="captions" src="subs_en.vtt" srclang="en" label="English" default />
 *   </video>
 *
 * Accessibility:
 * - Captions essential for deaf/hard-of-hearing users.
 * - Descriptions explain non-verbal audio (important for blind users).
 *
 * ==========================================
 * Zero → Hero Subtopics
 * ------------------------------------------
 * - Audio: controls, transcript, accessibility
 * - Video: controls, poster, keyboard support
 * - Track: captions, subtitles, descriptions
 * ==========================================
 */

// PRACTICAL EXAMPLES (TypeScript DOM API):

// 1. AUDIO Example
const audio = document.createElement("audio");
audio.controls = true;
const audioSrc = document.createElement("source");
audioSrc.src = "song.mp3";
audioSrc.type = "audio/mpeg";
audio.appendChild(audioSrc);
document.body.appendChild(audio);

// 2. VIDEO Example
const video = document.createElement("video");
video.controls = true;
video.poster = "preview.jpg";
video.width = 320;
video.height = 180;

const videoSrc = document.createElement("source");
videoSrc.src = "movie.mp4";
videoSrc.type = "video/mp4";
video.appendChild(videoSrc);

// Add caption track
const track = document.createElement("track");
track.kind = "captions";
track.srclang = "en";
track.label = "English Captions";
track.src = "subs_en.vtt";
track.default = true;
video.appendChild(track);

document.body.appendChild(video);
