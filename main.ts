let strip = neopixel.create(DigitalPin.P15, 24, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Green))
basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    } else {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
            maqueen.motorStop(maqueen.Motors.M1)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        } else {
            if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
                maqueen.motorStop(maqueen.Motors.M2)
                maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
            }
        }
    }
})
