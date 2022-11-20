let strip = neopixel.create(DigitalPin.P1, 50, NeoPixelMode.RGB_RGB)
strip.setBrightness(20)
strip.clear()
basic.forever(function () {
    for (let index = 0; index <= 49; index++) {
        strip.clear()
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        basic.pause(50)
    }
    for (let index = 0; index <= 49; index++) {
        strip.clear()
        strip.setPixelColor(49 - index, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        basic.pause(50)
    }
})
