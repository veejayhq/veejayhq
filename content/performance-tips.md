---
title: Performance Tips
name: performance-tips
type: page
date: "Mon, 17 Nov 2008 22:07:12 +0000"
author: niels
---
# Tune veejay  

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