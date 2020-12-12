class AutoPause {
    constructor() {
        this.threshold = 0.25;
        this.handlerIntersection = this.handlerIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }
    run(player) {
        // Umbral degine que porcentaje del elemento tiene que tener interseccion
        // con el conotenedor, en este caso es el 25%
        this.player = player;

        const observer = new IntersectionObserver(this.handlerIntersection, {
            threshold: this.threshold,
        });

        observer.observe(this.player.media);

        document.addEventListener('visibilitychange', this.handleVisibilityChange);
    }

    // entries son los objetos que estamos observando
    handlerIntersection(entries) {
        const entry = entries[0];

        const isVisible = entry.intersectionRatio >= this.threshold;

        if (isVisible) {
            this.player.play();
        } else {
            this.player.pause();
        }

        console.log(entry);
    }

    handleVisibilityChange() {
        const isVisible = document.visibilityState === 'visible';

        if (isVisible) {
            this.player.play();
        } else {
            this.player.pause();
        }
    }
}

export default AutoPause;