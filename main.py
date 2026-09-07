def on_button_pressed_a():
    led.toggle(0, 0)
    led.toggle(1, 0)
    led.toggle(2, 0)
    led.toggle(3, 0)
    led.toggle(4, 0)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    pass
basic.forever(on_forever)
