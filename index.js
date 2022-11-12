class AudioManage {
    constructor(e) {
        var i = new Audio(e);
        this.Voice = i
    }
    play() { this.Voice.play() }
    pause() { this.Voice.pause() }
    loop(e) {
        if (e)
            for (;;) this.Voice.ended && this.play()
    }
    setVolume(e) { this.Voice.volume = e }
    reset() { this.Voice.pause(), this.Voice.currentTime = 0, this.Voice.play() }
}
module.exports = { AudioManage };
