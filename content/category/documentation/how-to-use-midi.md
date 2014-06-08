---
title: How to use MIDI
name: how-to-use-midi
type: post
date: "Sun, 01 Apr 2007 22:07:01 +0000"
author: veejayhq
category: documentation
tags: []
---
**Reloaded 1.0** supports MIDI devices through ALSA  

To use your MIDI device with Reloaded, you need to use **aconnect** or  
**aconnectgui** to connect the MIDI device to Reloaded.  

To see all input devices (your MIDI devices)  
`  
$ aconnect -i  
`  

And all output devices (Reloaded/ Veejay)  
`  
$ aconnect -o  


And then connect them:  
`  
$ aconnect -i 127 -o 128  


Launch Reloaded  

$ reloaded  


Instruction for MIDI learning:  

In the menubar, click GVeejay -> MIDI -> MIDI learn  
Press a key on your MIDI device (reloaded will display the raw MIDI event in the statusbar)  
and click a button , press a key or pull a slider in the userinterface to associate  
a particular event with a MIDI note, pitch or velocity key.  
Once you have assigned the MIDI notes to VIMS, you can save the  
MIDI preset and enable MIDI (GVeejay -> Save -> MIDI layout) and  
(GVeejay -> MIDI -> MIDI enable)``