class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>;
  container: HTMLElement;

  constructor(config) {
    this.media = config.video;
    this.plugins = config.plugins || [];
    this.initPlayer();
    this.initPlugins();
  }

  initPlayer() {
    this.container = document.createElement('div');
    this.container.style.position = 'relative';
    this.media.parentNode.insertBefore(this.container, this.media);
    this.container.appendChild(this.media);
  }

  private initPlugins() {
    this.plugins.forEach((plugin) => {
      plugin.run(this);
    });
  }
  play = function () {
    this.media.play();
  };

  onPlay = function () {
    this.media.paused ? this.play() : this.pause();
  };

  pause = function () {
    this.media.pause();
  };

  mute = function () {
    this.media.muted = true;
  };

  unmute = function () {
    this.media.muted = false;
  };

  isMuted = function () {
    this.media.muted ? this.unmute() : this.mute();
  };
}

export default MediaPlayer;
