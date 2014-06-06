---
title: sendVIMS client for Pure Data
name: sendvims-client-for-pure-data
type: post
date: "Tue, 01 May 2007 22:33:17 +0000"
author: matthijs
category: documentation
---
sendVIMS is an external for [Pure Data](http://www.puredata.org). with sendVIMS, you can send VIMS messages directly to veejay, and receive the complete status back. With a little patching and trial&error you could easily built a custom interface for a performance or installation.  

I've whipped up some examples of what can be done in sendVIMS, wich also shows how fast a little prototyping can be done in pure data.  

The pd patches in one tarbal: [help-vims-patchestar.gz](http://www.veejayhq.net/wp-content/uploads/2007/05/help-vims-patchestar.gz "help-vims-patchestar.gz")  

**1. Triggering actions with audio**  

shouting at the video makes it look weirder...  

[![Triggering actions from audio](http://veejayhq.ischen.nl/wp-content/uploads/2007/05/help-vims-audiotrigger-150x150.png)](http://www.veejayhq.net/wp-content/uploads/2007/05/help-vims-audiotrigger.png "Triggering actions from audio")  

**2. Create a midi - videomixer**  

As of 1.0, midi is built into veejay, making this example less useful. Still, it shows some basic controlling done easily... replace <midi> with <joystick> or <extra mice>  

[![Using MIDI to control playback](http://veejayhq.ischen.nl/wp-content/uploads/2007/05/help-vims-midi-150x150.png)](http://www.veejayhq.net/wp-content/uploads/2007/05/help-vims-midi.png "Using MIDI to control playback")  

**3. Building your custom playback-scrubber**  

See the sound example, maybe connect these two?  

[![Controlling the timeline in YOUR way](http://veejayhq.ischen.nl/wp-content/uploads/2007/05/help-vims-scrubbing-150x150.png)](http://www.veejayhq.net/wp-content/uploads/2007/05/help-vims-scrubbing.png "Controlling the timeline in YOUR way")  

**4. A simple video sequencer**  

Simple sequencing, or multiple veejays all controlled by one shout, it can be done.  

[![A simple video sequencer](http://veejayhq.ischen.nl/wp-content/uploads/2007/05/help-vims-sequencer-150x150.png)](http://www.veejayhq.net/wp-content/uploads/2007/05/help-vims-sequencer.png "A simple video sequencer")  


## A simple video sequencer