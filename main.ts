input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.setLedColor(0xff0000)
})
basic.forever(function () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showNumber(0)
    basic.showLeds(`
        # . # . #
        . . . . .
        . . . . .
        # . . . #
        # # . # #
        `)
    basic.pause(1000)
})
