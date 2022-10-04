input.onButtonPressed(Button.A, function () {
    music.playMelody("G B A G C5 B A B ", 120)
    basic.showString("Hello!")
    number += 1
    basic.showNumber(0)
})
input.onButtonPressed(Button.AB, function () {
    if (number < 0) {
        basic.showString("n")
        music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
    } else if (number > 0) {
        basic.showString("p")
        music.startMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once)
    } else if (number == 0) {
        basic.showString("z")
        music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
    }
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    basic.showString("Hello!")
    number += -1
    basic.showNumber(0)
})
input.onGesture(Gesture.Shake, function () {
    if (number % 2 == 1) {
        basic.showString("odd")
        music.playMelody("- D C - - E D - ", 120)
    } else {
        basic.showString("even")
        music.playMelody("- D C - - E D - ", 120)
    }
})
let number = 0
number = 0
basic.showNumber(number)
