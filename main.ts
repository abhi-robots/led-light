basic.forever(function () {
    if (!(input.buttonIsPressed(Button.A) && input.buttonIsPressed(Button.B))) {
        basic.showString("T")
        pins.digitalWritePin(DigitalPin.P15, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P15, 1)
        basic.showString("F")
    }
})
