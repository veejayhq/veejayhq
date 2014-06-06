---
title: What to use as a live video source?
name: what-to-use-as-a-live-video-source
type: post
date: "Wed, 08 Aug 2007 09:43:21 +0000"
author: matthijs
category: documentation
---
The issue is raised every now and then:  

"How do I plug in my (USB WebCam/Digital Camera/Exotic Hardware) to veejay?"  

Currently, Veejay does not support decompressing digital video ( firewire) directly from the camera ( like on windows and mac). There is however, full functional support for avi's and quicktime movies in digital video.  

The codec for DV video on linux, is unlike the commercial codecs for windows and macosx, rather slow. There's no way to expect near-realtime performance on average hardware.  

( at least, not on my hardware wich is getting old).  

Capturing live video is done trough UNICAP, so hopefully one day we can have digital video decompression on the fly.  

As for the USB Webcams, please check out the compatibility list on <http://www.exploits.org/v4l/>  

Basically, anything that goes with XawTV and others will propably work with Veejay too.  

The veejay team has always relied on TV-input cards as a source of nice-quality realtime video source. The one's we used:  

- Anything that goes with BTTV  
- The AVER TV CARDBUS from AverMedia ( a PCMCIA card)  
We are in no way affiliated with AverMedia, or making advertisements, but it just happened to be the ONLY existing PCMCIA TV card at the time I was looking for one. there might be other alternatives right now, again, see <http://www.exploits.org/v4l/>  

Using uncompressed video is very CPU friendly, wich leaves more juice for realtime effects. Even on commercial platforms there's a speed penalty when using compressed sources.  

Comments on this issue are VERY welcome!