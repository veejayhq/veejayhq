---
title: Veejay Basics
name: veejay-basics
type: page
date: "Mon, 17 Nov 2008 22:34:17 +0000"
author: niels
category: uncategorized
---



# Rules of Thumb  
- Veejay is the server  
- Reloaded is the client  
- Sayvims is the console mini-client  
- You can interact with the server directly (SDL mouse and keyboard)  
- Veejay's console output logs your actions  


## system docs  


`  
$ reloaded -h  
$ veejay -h  
$ man veejay  
$ veejay -u  
`  


## Various ways to launch the server  


In dummy mode (just a stream with black video, hit the color wheel in the Stream pad  
to change its color)  
`  
$ veejay -d  
`  

To open your Video4Linux device, you can do something like  
`  
$ echo "240:0 1;" | sayVIMS  
`  

Or you can use reloaded, click GVeejay in the Menu, Stream -> New, and doubleclick  
your capture device.  

To start veejay with a videofile (preferred), you can do something like  
`  
$ veejay -v mjpeg-video-file.avi  
`  


## Solo'ing the server  

All the keybindings in veejay depend on SDL; if you move your mouse over to the  
SDL windows to focus it you can interact directly with the output.  

KP= Numeric KeyPad, check numlock.  


Create new sample from your entire video file and play it by pressing:  
KP1, Left Bracket, KP3, Right Bracket , F1  

If you press 'KP divide' , veejay will return to plain video mode so you can create more clips. If you press 'ESC' , veejay will switch from playing streams to playing clips or vice versa  

Press F1 to F12 to select a clip,  
Press 1 to 9 to select a bank (1 = clips 1 to 12, 2 = clips 12 to 24, etc )  

Once you are playing a clip/stream, simply press 'Cursor UP' , 'ENTER'  
If you add a video effect, try pressing '-' and '=' to select another channel and '/' to  
toggle between clip/stream sources  

Veejay supports chaining of effects since day 0, a number of keys have some importance  

'-' ,'=' and '/'  
'END' for enabling/disabling the chain  
'KP -' for selecting the previous entry  
'KP +' for selecting the next entry  
'ENTER' for adding an effect from the list to the chain  
'DEL' for removing an effect from the chain  

Also, you can press 'HOME' to see clip or stream information. Try the keys 'A' to 'L' to increase/decrease playback speed, Press ALT + 'A' to 'L' to increase/decrease  
slow motion speed.  


#### Some keyboard bindings  


<table border="0" width="80%"><tr><td class="c1">Description</td><td class="c1">SDL key</td><td class="c1">In plain english</td></tr><tr><td>Set the starting position of a new sample</td><td>SDLK_LEFTBRACKET</td><td>Left bracket</td></tr><tr><td>Set ending position and create a new sample</td><td>SDLK_RIGHTBRACKET</td><td>Right bracket</td></tr><tr><td>Select and play sample **1**</td><td>SDLK_F1</td><td>F1</td></tr><tr><td>Set playback speed to 3</td><td>SDLK_d</td><td>d</td></tr><tr><td></td></tr><tr><td>Change looptype</td><td>SDLK_KP_MULTIPLY</td><td>asterix on numeric keypad</td></tr><tr><td>Play backward</td><td>SDLK_KP_4</td><td>Cursor left on numeric keypad</td></tr><tr><td>Play forward</td><td>SDLK_KP_6</td><td>Cursor right on numeric keypad</td></tr><tr><td>Skip 1 second</td><td>SDLK_KP_8</td><td>Cursor up on numeric keypad</td></tr><tr><td>Switch playmode to Plain</td><td>SDLK_KP_DIVIDE</td><td>Divide on numeric keypad</td></tr><tr><td>Print information about sample</td><td>SDLK_HOME</td><td>Home</td></tr></table>  


All keys are listed in  
`  
$ man veejay  
`