basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        pins.digitalWritePin(DigitalPin.P14, 0)
    } else if (input.buttonIsPressed(Button.B)) {
        pins.digitalWritePin(DigitalPin.P15, 0)
    } else if (input.buttonIsPressed(Button.A) && input.buttonIsPressed(Button.B)) {
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P15, 1)
    }
})
