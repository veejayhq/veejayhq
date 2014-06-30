---
title: Projection Mapping
name: projection-mapping
type: post
date: "Sat, 24 Nov 2012 07:29:20 +0000"
author: xendarboh
---
###Linux VJ Projection Mapping using Veejay + LPMT  
The output from Veejay may be used as a real-time projection-mapped surface using a program called Little Projection-Mapping Tool (LPMT). Using more than one projection-mapped Veejay instance should be possible, but is not covered by this document. Video is shared between the two applications using the v4l2loopback kernel module.  

LPMT - Little Projection-Mapping Tool; is a simple and powerful cross-platform tool for Projection-Mapping. Based on OpenFrameworks C++ toolkit.  

Both Veejay and LPMT are Free software with source code released under versions of the GNU GPL. Also, both can be controlled through OSC messages allowing them to play nicely with custom clients and other warez.  


#### WEBSITES:  

*   LPMT: <http://hv-a.com/lpmt/>

*   v4l2loopback: <https://github.com/umlaeute/v4l2loopback>

#### REFERENCES:  

*   A work-in-progress "Super-Sexy Secret Manual" for LPMT version 1.4 <http://hv-a.com/lpmt/?page_id=195>

*   v4l2loopback usage examples <https://github.com/umlaeute/v4l2loopback/wiki>

#### INSTALLATION:  


    * v4l2loopback  
    $ git clone <https://github.com/umlaeute/v4l2loopback.git> v4l2loopback  
    $ cd v4l2loopback  
    $ make && sudo make install  

    Load the v4l2loopback kernel module:  
    $ sudo modprobe v4l2loopback  

    * yuv4mpeg_to_v4l2  
    A tiny example application included with the v4l2loopback source code  
    is used to stream YUV4MPEG output from Veejay into a v4l2 device.  
    $ cd v4l2loopback/examples  
    $ make yuv4mpeg_to_v4l2  

    You may want to manually install the resulting yuv4mpeg_to_v4l2 binary  
    somewhere in your $PATH for easier execution.  

    * LPMT:  
    Either, Download a pre-compiled binary:<http://hv-a.com/lpmt/?page_id=63>  
    Or, Luke, use the Source:<http://hv-a.com/lpmt/?page_id=70>  

    The following instructions are based on usage of the 64bit Linux binary.  
    There's no real installation of the binary, run LPMT from its directory:  

    $ tar -xjf lpmt_1.4_linux_x64.tar.bz2  
    $ cd lpmt_1.4_linux_x64  
    $ ./lpmt

Play around, LPMT is cool! Press __h__ for a command overview and refer to the manual for more help.  


#### CONFIGURATION:  


#### When the v4l2loopback kernel module is successfully loaded, it will create a device at _/dev/videoX_ where "X" is a number that depends on how many video devices you already have loaded. My computer has a connected webcam so this is what I have:  


    $ ls -l /dev/video*  
    crw-rw----+ 1 root video 81, 0 Nov 15 15:12 /dev/video0  
    crw-rw----+ 1 root video 81, 1 Nov 15 23:02 /dev/video1

_/dev/video0_ is my webcam (because it was already loaded first) and _/dev/video1_ is the v4l2loopback video device -- it is the most recently created device with the highest number. The rest of this document uses _/dev/video1_ as the v4l2loopback device, substitute according to your setup. Make sure the system user that will be running Veejay and LPMT has permission to read and write to the device. In my case, my user needs to be in the "video" group.  

Now, to configure LPMT. In the directory containing the lpmt binary, you should also find a "data" and "libs" directory.  


    $ ls lpmt_1.4_linux_x64  
    data  
    libs  
    lpmt

Edit _data/config.xml_ and add a CAMERA section with the WIDTH and HEIGHT set to the dimensions of your Veejay output and ID set to "X" (the number of the _/dev/video_ device created by the v4l2loopback module). My CAMERAS section looks like this:  


    <CAMERAS>  
    <CAMERA>  
    <WIDTH>640</WIDTH>  
    <HEIGHT>480</HEIGHT>  
    <ID>0</ID>  
    </CAMERA>  
    <CAMERA>  
    <WIDTH>720</WIDTH>  
    <HEIGHT>480</HEIGHT>  
    <ID>1</ID>  
    </CAMERA>  
    </CAMERAS>

Configuration is complete!  


#### EXECUTION:  
You may want to use several terminal windows for this. You may need to specify the full path of the executables depending on where you installed them and if they are in your $PATH.  


    Create a named pipe:  
    $ mkfifo /tmp/pipe  

    Feed the video loopback device with yuv4mpeg (Y4M) data that enters the pipe:  
    $ yuv4mpeg_to_v4l2 /dev/video1 < /tmp/pipe  

    Start veejay, directing a Y4M output stream to the pipe:  
    $ veejay --output 4 --output-file /tmp/pipe  

    Start LPMT  
    $ lpmt

Refer to the LPMT manual for how to configure your projection mapping. Do this to see veejay output right away:  


*   press __F2__ (or __x__)

*   click __cam on/off__ to enable it. You may need to select a different camera number from the __select camera__ list.

#### CONCLUSION:  
Epic!!! A Free VJ projection mapping solution for Linux! Thanks to all the people who have created these open source softwares and for their foresight and attention that has enabled interoperability.
