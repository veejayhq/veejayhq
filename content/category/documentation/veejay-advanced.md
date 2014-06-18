---
title: Veejay Advanced
name: veejay-advanced
type: post
date: "Mon, 17 Nov 2008 22:49:54 +0000"
author: niels
---

###Plugins

Veejay can load both FreeFrame and Frei0r plugins. By default, veejay loads no plugins.
You must create a file and enter the location of the plugins you want to load.
Bad plugins can cause veejay to crash, test all your plugins before using them live.

    $ mkdir ~/.veejay
    $ vi ~/.veejay/plugins

The contents of the file can look like:

    /usr/local/lib/freeframe
    /usr/local/lib/frei0r-1

Veejay will pick up the plugins the next time you start it.


##VIMS  


VIMS is veejay's internal message system - its simple and in plain ASCII.  
All control data is distributed via VIMS. Each (atomical) message consists of an Action Identifier and a list of zero or more Arguments which can be used to control Video Clips, Video Streams, the Effect Chain and many other things.  
Reloaded, veejay's client, uses a dual socket to read status and write back VIMS  
messages.  

VIMS allows events to be triggered through:  
SDL Keyboard Event (libsdl)  
OSC (Open Sound Control)  
And Itself  


After intalling veejay, you will have a commandline utility 'sayVIMS' which you  
can use to send text messages.  


Use the command  
`  
$ veejay -u -n |less  
`  
to dump all VIMS messages.  


###The Message Format  

A message is described as:  

<Action Identifier> : <Argument List> ;  

Examples:  


    080:;  
    099:0 0;  


#### <Action Identifier>  
The action identifier is a 3 digit number describing a Network Event  
The colon is used to indicate the start of the Argument List and must be given.  


#### <Argument List>  
The Argument List is described by a printf() style formatted template  
which describes the number and type of arguments to be used.  

The semicolon must be given to indicate the end of this message  


###Reserved Values  
Some reserved numbers:  


<table><tr><td>clip id</td><td>0</td><td>select currently playing sample</td></tr><tr><td>clip id</td><td>-1</td><td>select highest sample number</td></tr><tr><td>chain entry</td><td>-1</td><td>select current chain entry</td></tr><tr><td>stream id</td><td>0</td><td>select currently playing stream</td></tr><tr><td>stream id</td><td>-1</td><td>select highest stream number</td></tr><tr><td>key modifier</td><td colspan="2">0 = nonone, 1= alt , 2 = ctrl, 3 = shift</td><td></td></tr><tr><td>frame</td><td>-1</td><td>use highest possible frame number</td></tr><tr><td>playback mode</td><td colspan="2">0 = clip, 1 = stream, 2 = plain</td><td></td></tr><tr><td>data format</td><td colspan="2">yv16 (yuv 4:2:2 raw) , mpeg4, divx, msmpeg4v3,div3, dvvideo, dvsd, mjpeg, i420 and yv12 (yuv 4:2:0 raw)</td><td></td></tr><tr><td>loop type</td><td colspan="2">0 = no looping, 1 = normal loop, 2 = pingpong (bounce) loop</td><td></td></tr></table>

###Images

#### Using images as a source

Veejay currently supports `jpeg`, `png` and `bmp` images as a source, meaning you can mix
static images with moving video.

#### Writing images

Making screenshots (scales and save image to file)

330:<output width> <output height> <filename>;

for example

    $ sayVIMS "330:640 480 screenshot.png;"

###Sound output

Veejay plays audio through **Jack**

You must start the jack server prior to starting Veejay:


    $ jackd
    $ veejay video-file.avi


If the audio samplerate differs (Jack plays 48Khz, veejay plays 44.1Khz),
you need to setup jack in the proper samplerate.

    $ jackd -r 44100

###Performance tuning

Veejay's performance depends much on the memory bandwidth, CPU and disk access times.

For HDTV (1280x720) mjpeg, you need at least a 2.5 ghz and 1 GB of RAM.
The faster your CPU, the better since decoding is cpu intensive - like some of
veejay's FX.

For full PAL/NTSC resolutions (720x576 resp. 720x480) DV/Mjpeg you need at least a 1.5 ghz, for lower resolution (352x288) you can do fine with a 500-800 mhz PC.

If you need to record without framedrop, you can do so by disabling audio and
disabling synchronization with the commandline options -a0 -c0

On modern CPU's (i686) your best bet is working in RAW or MLZO (compressed)
YUV 4:2:0 / 4:2:2 if you need the little extra for FX rendering.

Typical for laptops is slow diskspeed access, on my 1.8 ghz dell latitude laptop
the best I get is an average of about 20.0 mb/sec which is barely sufficient
for playing full PAL avi's containing RAW YUV.

(you can test yours with hdparm -T -t /dev/hdX)

###Caching

Veejay has a caching mechanism that loads (compressed) images from disk into RAM. Frames
furthest away from the currently played position will be discarded first when the cache size
limit is reached. By default, this limit is set to 30% of your system's memory.

There are two commandline options you can use to change the behaviour of the cache:

-m / --memory [percentage of available RAM to use]

-j / --max_chain [maximum number of simultaneous samples to cache]

If you mix a lot of (short) different samples over eachother, you might want to set "-j5 -m50" .
If you would have 100 MB RAM, veejay will consume up to 50%, dividing the memory available
for 5 different samples, thus max. 10 MB RAM per sample.



