import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/Autoplay.js';

const video = document.querySelector('video');
const play = document.querySelector('#play');
const mute = document.querySelector('#muted');

const player = new MediaPlayer({
    video,
    plugins: [],
    // [new AutoPlay()],
});
play.onclick = () => player.onPlay();
mute.onclick = () => player.isMuted();