enum RadioMessage {
    message1 = 49434,
    Starting = 18557
}
input.onButtonPressed(Button.A, function () {
    if (AAvil == 0) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    AAvil = 0
    TypeMB = randint(0, 2)
    if (TypeMB == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (TypeMB == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    }
    pauseUntil(() => input.buttonIsPressed(Button.A))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    AAvil = 1
})
let FFallIcon = 0
let TypeMB = 0
let AAvil = 0
basic.showLeds(`
    . # # # .
    . # # # .
    . . # . .
    . # # # .
    . # # # .
    `)
AAvil = 1
input.calibrateCompass()
radio.setGroup(1)
let ModeSel = 1
basic.showLeds(`
    . . # . .
    # . # . .
    . . # . #
    # . # . .
    . . # . .
    `)
pauseUntil(() => input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B))
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
ESP8266_IoT.connectWifi("96:65:50:37:A2:D0", "91972509")
ModeSel = 0
loops.everyInterval(100, function () {
    if (input.isGesture(Gesture.FreeFall)) {
        if (FFallIcon == 1) {
            basic.showLeds(`
                . # . # .
                # . # . #
                . # . # .
                # . # . #
                . # . # .
                `)
            FFallIcon = 0
        } else {
            basic.showLeds(`
                # . # . #
                . # . # .
                # . # . #
                . # . # .
                # . # . #
                `)
            FFallIcon = 1
        }
    }
})
