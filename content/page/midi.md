---
title: MIDI
name: midi
type: page
date: "Mon, 17 Nov 2008 19:25:02 +0000"
author: niels
category: uncategorized
---
# Configuring the MIDI device

Reloaded supports MIDI devices through ALSA, which means you have to connectyour MIDI device to reloaded.To start, launch reloadedcontrol@veejay-1:~$ reloaded -vTo list the input (readable) clients, type 'aconnect -i'c0ntrol@veejay-1:~$ aconnect -iclient 0: 'System' [type=kernel]0 'Timer '1 'Announce 'client 14: 'Midi Through' [type=kernel]0 'Midi Through Port-0'client 128: 'Virtual Keyboard' [type=user]0 'Virtual Keyboard'To list the output (writeable) clients, type 'aconnect -o'control@veejay-1:~$ aconnect -oclient 14: 'Midi Through' [type=kernel]0 'Midi Through Port-0'client 129: 'Veejay' [type=user]0 'Reloaded 'Now, we can connect the input to the output, Virtual Keyboard to Reloaded with$ aconnect 128 129We'r done on the commandline now and we can start learning midi events inreloaded. Click GVeejay -> Midi -> Learn Midi[caption id="attachment_173" align="alignnone" width="314" caption="MIDI"]

[![MIDI](http://www.veejayhq.net/wp-content/uploads/2008/11/midi.png "MIDI - menuitem")](http://www.veejayhq.net/wp-content/uploads/2008/11/midi.png)[/caption]In the statusbar , you will see the message '_Learning MIDI commands. Touch a midi key and then click a widget._' . Now, we can bind for example NoteOn to the Play Forward button by hitting the note on the keyboard and then by pressing the play forward button. Reloaded will learn MIDI events until you click 'Enable MIDI' in the menu.The MIDI events can be saved to file by clicking GVeejay -> Save -> Save MIDI layout