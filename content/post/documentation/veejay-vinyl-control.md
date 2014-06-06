---
title: Veejay Vinyl Control
name: veejay-vinyl-control
type: post
date: "Tue, 24 Sep 2013 18:37:24 +0000"
author: juancito
category: documentation
---
This guide is aimed to use Serato or Traktor timecode with VeeJay's playback. You need to have VeeJay server, Reloaded, sendVIMS and Puredata already installed. Also we need Jackd daemon, in this example I'll use QJackCtl to set audio connection and configuration.  
In order to make it work we'll need:  

* Flext (Development layer for puredata):  
http://puredata.info/Members/thomas/flext  
* Niklas Klügel vinylcontrol~ external:  
http://karhumusic.sesser.at/vinylcontrol/vinylcontrol.html  
* [VeeJayVinylControl.pd.tar](http://www.veejayhq.net/wp-content/uploads/2013/09/VeeJayVinylControl.pd_.tar.gz):  

[![](http://www.veejayhq.net/wp-content/uploads/2013/09/VeeJayVinylControl-300x225.png "VeeJay Vinyl Control")](http://www.veejayhq.net/wp-content/uploads/2013/09/VeeJayVinylControl.png)  

Build flext could be not so easy, so I give you a little guide. Let's build flext with the build bash script:  


> ./build.sh pd gcc  
Then a few configuration files will be created. Now we have to move to buildsys/config-lnx-pd-gcc.txt and edit some lines to point at PD directories, in my case:  


> PDPATH=/usr/include/pd  
and  


> INSTPATH=/usr/lib/pd/extra  
There's no need to build Flext with SndObj and STK support, so we can comment that lines.  
Then we run as root:  


> ./build.sh pd gcc install  
We can also build Flext with autoconf:  


> ./bootstrap.sh  
Then we run:  


> ./configure --with-sdkdir=/usr/include/pd/extra  
> make  
> make install  
By now we should have Flext installed, move on to build vinylcontrol~:  
We can download vinylcontrol src, or just the vinylcontrol~.pd_linux and make a copy to our external puredata directory from http://karhumusic.sesser.at/vinylcontrol/vinylcontrol.html  
Installation of vinylcontrol src is almost the same that flext.  
First:  


> ./build.sh pd gcc  
Again we have to edit the file buildsys/config-lnx-pd-gcc.txt and then install as root:  


> ./build.sh pd gcc install  
Now the system is ready to control the video playback with a vinyl control or scratch live control cd.  
At first, load your video, then open QJackCtl and start the server. Open Puredata and connect the deck or CDJ to Puredata input.  

Load VeeJayVinylControl.pd, and you'll be able to start scratching your video!! Let's explain how it work and how we can calibrate the patch in order to get it working better.  

The external provide 3 outlets:  
1) alive - bang is sent when the decoding starts/stops (ie. input is above a certain threshold and timecode is being tracked)  
2) pitch - float that is 1 at 33 rpm in forward direction; negative values indicate backward-movement  
3) relative position; the start is the first cue-point (first tracked timecode where the needle was dropped) and can be reset to the current timecode-position by sending a bang to the third inlet. The end position is the last sane timecode on the record. The position is calculated using (current_position-start_position)/(last_position-start_posit ion), thus giving a range between 0 and 1 between the end position and the relative start position and negative values for positions before the start position.  

And 3 inlets:  
1) left input  
2) right input (take care of the cabling from your turntable)  
3) reset for the relative start position  

[![](http://www.veejayhq.net/wp-content/uploads/2013/09/vinylcontrol-300x264.png "Vinyl Control")](http://www.veejayhq.net/wp-content/uploads/2013/09/vinylcontrol.png)  

The external doesn't work perfectly, so you have to measure the audio input gain until the number on the 3rd patch outlet increases when the vinyl starts. This is multiplied by the frame's number of our video (I think that it could be took from VeeJay, but I'm not too sure), and is connected to veejay current frame.  

The 2nd outlet have a "moses 0" message box, that means that when it's under 0 it will play the video backward, and when is above 0 it will play forward.  

The 1st outlet just bang the play/stop. It uses a threshold that I'm almost sure it's defined by the timecode.c file.  

That's all, the patch doesn't work perfectly, so if you make something better, let me know: juanicotolengo(at)gmail(dot)com  
Thanks to DJ Trip's Cris, Niels Elburg and Matthijs van Henten for their support.  

Juan Sebastian Faccio (a.k.a.: DaNoiseMan)