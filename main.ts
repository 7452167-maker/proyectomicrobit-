basic.forever(function () {
    if (input.temperature() < 10) {
        music.play(music.tonePlayable(185, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            # . # . #
            . # # # .
            # # . # #
            . # # # .
            # . # . #
            `)
        basic.pause(1000)
    } else {
        basic.showNumber(input.temperature())
        basic.pause(1000)
    }
})
