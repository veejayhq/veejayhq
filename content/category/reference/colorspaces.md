---
title: Colorspaces
name: colorspaces
type: post
date: "Mon, 17 Nov 2008 21:27:17 +0000"
author: niels
---
##Colorspaces

Veejay processes all video in YUV planar mostly for historical reasons - nowadays, VJ software is shifting to the domain of the GPU and OpenGL . However:  
- A lot of (older) capture hardware delivers in some YUV format  
- Your MJPEG and other videos usually decodes into some YUV format  
- YUV is a lot less bandwidth then RGB  
- Veejay is good at recording to disk from any source  
- Veejay runs on exotic systems and requires lower hardware requirements than most  
(commercial) VJ software.  

On the downside, veejay sub- and supersamples YUV to 4:4:4 planar when special  
FX require a U and V pixel for every Y pixel. Some USB Webcams only support the RGB colorspace , for which veejay provides a (very fast) colorspace conversion.  

By default, veejay works in YUV 4:2:2 format which is the highest quality possible,  
as such, it will try to open any video source in its native format.  


#### YUV 4:2:2 planar Rec. 601 (Y'CbCr)  
8 bit Y plane followed by 8 bit 2x1 subsampled V and U planes.  

The Y plane is filled with 8 bit luminance samples ; Here the value 16 is used for black and 235 for white.  

The U and V planes are filled with 8 bit chrominance samples, with the values 16 to 240.  

This allows for overshoot and undershoot .  


#### YUV 4:2:2 planar JPEG/JFIF (veejay's standard playback mode)  
8 bit Y plane followed by 8 bit 2x1 subsampled V and U planes.  

The sample values in the planes range from 0 - 255, Black is defined at 0, White at 255  

Note that scaling this format to Rec. 601 is somewhat lossy.  

Veejay has an enviroment variable you can set if you want to convert between the two formats  

automatically.
