input.onButtonPressed(Button.B, function () {
    if (_000.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
        music.playMelody("G C5 C5 - - - - - ", 244)
    } else {
        basic.showIcon(IconNames.No)
        music.playMelody("F C C - - - - - ", 218)
    }
    if (game.score() == 5) {
        basic.showString("win")
        music.playMelody("A F E F D G E F ", 214)
        game.gameOver()
    }
})
let _000: game.LedSprite = null
_000 = game.createSprite(2, 2)
basic.forever(function () {
    _000.move(1)
    basic.pause(500)
    _000.ifOnEdgeBounce()
})
