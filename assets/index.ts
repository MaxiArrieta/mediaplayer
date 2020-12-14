import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';
import Ads from './plugins/Ads';

const video = document.querySelector('video');
const play: HTMLElement = document.querySelector('#play');
const mute: HTMLElement = document.querySelector('#muted');

const player = new MediaPlayer({
  video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads()],
});

play.onclick = () => player.onPlay();
mute.onclick = () => player.isMuted();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .catch((error) => console.log(error));
}
