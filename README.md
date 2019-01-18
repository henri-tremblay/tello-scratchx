# Scratch with Tello

Tello doesn't provide yet a Scratch extension that works with ScratchX.

So here it is.

Just launch the `Tello.js` file provided Tello using node (`node Tello.js`).

Then load the extension into Scratch. On a Raspberry PI it means to press shift and then click on
"File" to make the "Import experimental extension" menu appear. Then type the path of the `tello-extension.js`
file to load it. You should get new blocks in the "More blocks" section.

That's it!

## Scratch programs

### Blink

Makes a LED blink when connected to GPIO17.

### Move

Makes the cat move when playing with a joystick connected to GPIO 17,18,22,23.

### Tello

1. Connect the RPI to the drone wifi
2. Open the programm
3. Load the tello extension if needed

When launching the program, the drone will take off.
You can move it with the joystick like the cat in the previous example.

Note: If you save this program on a RPI, it will save as a "sbx".
But Scratch doesn't know how to load a "sbx" for some mysterious reason.
So just change the extension to "sb2" and it will load.

