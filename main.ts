let waterLevel = 0
let distancia = 0
function DHT11 () {
    if (input.buttonIsPressed(Button.B)) {
        basic.showString("" + dht11_dht22.readData(dataType.humidity) + "%")
    }
    basic.pause(2000)
    basic.clearScreen()
}
function hcSR501 () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
    basic.pause(2000)
    basic.clearScreen()
}
function waterSensor () {
    waterLevel = pins.analogReadPin(AnalogPin.P3)
    basic.showNumber(waterLevel)
    led.plotBarGraph(
    waterLevel,
    1024
    )
    basic.pause(2000)
    basic.clearScreen()
}
function hcSR504 () {
    if (input.buttonIsPressed(Button.AB)) {
        distancia = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
        )
    }
    basic.pause(2000)
    basic.clearScreen()
}
function temperatura () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("" + input.temperature() + "ºC")
    }
    basic.pause(2000)
    basic.clearScreen()
}
basic.forever(function () {
    basic.showString(".")
    basic.clearScreen()
    waterLevel = 0
    temperatura()
    DHT11()
    hcSR504()
    hcSR501()
    waterSensor()
})
