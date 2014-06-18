---
title: veejay 1.4.3 released
name: veejay-1-4-3-released
type: post
date: "Sun, 30 Nov 2008 22:22:31 +0000"
author: niels
category: news
tags: []
---
#### This is a bugfix / cleanup release to Veejay 1.4  


Easier to compile, several dependencies have been dropped:  


*     

*   Unicap
*     

*   Mjpegtools
*     

*   GtkCairo
*     


Main changes:  


*     

*   Faster capturing (EffecTV's v4lutils) instead of Unicap
*     

*   Added commandline switch to swap YUV range [0..255] <-> [16..235] on input video files
*     

*   Better slow motion, interpolate first/last frame according to loop direction
*     

*   Added skin for 1024x768 reloaded
*     


    Changelog:  
    ==========  

    veejay-client  
    * dropped gtkcairo dependency  
    * added -l commandline paramter to reloaded to select ui skin  
    * added -X commandline parameter to reloaded to set number of tracks  
    * added reset midi layout to menu  
    * added slow motion slider  
    * added more tooltips  
    * allow sample-in-sample creation  
    * match sample slot image dimensions with slot container  
    * fixed midi learner  
    * fixed SRT positioning  
    * fixed FX Anim  
    * fixed sample loop recording  
    * fixed crash on missing file in ~/.veejay/fonts  


    veejay  
    * added -e commandline parameter to veejay to swap yuv range on input video  
    * added 'VEEJAY_CAPTURE_DEVICE' environment variable to select between unicap  
    or v4lutils capturing  
    * dropped unicap dependency (optional now)  
    * dropped mjpegtools dependency (required components are now included)  
    * added v4lutils from EffecTV (default)  
    * allow sample-in-sample creation  
    * Interpolate first/last frame in slow motion according to loop direction  
    * bugfixes to Sample and Stream behaviour  
    * fixed compilation problems  
    * fixed build problems on some distributions  


##Download  

All-in-one source package:  

<http://downloads.sourceforge.net/veejay/veejay-1.4.3.tar.bz2?use_mirror=>