class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>;

  constructor(config) {
    this.media = config.video;
    this.plugins = config.plugins || [];
    this.initPlugins();
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
