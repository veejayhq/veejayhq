---
title: MIDI
name: midi
type: page
date: "Mon, 17 Nov 2008 19:25:02 +0000"
author: niels
---
# Configuring the MIDI device  

Reloaded supports MIDI devices through ALSA, which means you have to connect  
your MIDI device to reloaded.  

To start, launch reloaded  
`  
control@veejay-1:~$ reloaded -v  
`  

To list the input (readable) clients, type 'aconnect -i'  
`  
c0ntrol@veejay-1:~$ aconnect -i  
client 0: 'System' [type=kernel]  
0 'Timer '  
1 'Announce '  
client 14: 'Midi Through' [type=kernel]  
0 'Midi Through Port-0'  
client 128: 'Virtual Keyboard' [type=user]  
0 'Virtual Keyboard'  
`  

To list the output (writeable) clients, type 'aconnect -o'  
`  
control@veejay-1:~$ aconnect -o  
client 14: 'Midi Through' [type=kernel]  
0 'Midi Through Port-0'  
client 129: 'Veejay' [type=user]  
0 'Reloaded '  
`  

Now, we can connect the input to the output, Virtual Keyboard to Reloaded with  
`  
$ aconnect 128 129  
`  

We'r done on the commandline now and we can start learning midi events in  
reloaded. Click GVeejay -> Midi -> Learn Midi  
[caption id="attachment_173" align="alignnone" width="314" caption="MIDI"][![MIDI](/uploads/2008/11/midi.png)[/caption]  

In the statusbar , you will see the message '*Learning MIDI commands. Touch a midi key and then click a widget.*' . Now, we can bind for example NoteOn to the Play Forward button by hitting the note on the keyboard and then by pressing the play forward button. Reloaded will learn MIDI events until you click 'Enable MIDI' in the menu.  

The MIDI events can be saved to file by clicking GVeejay -> Save -> Save MIDI layout