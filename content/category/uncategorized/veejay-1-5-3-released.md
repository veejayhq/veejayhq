---
title: veejay 1.5.3 released
name: veejay-1-5-3-released
type: post
date: "Sun, 04 Apr 2010 18:43:18 +0000"
author: niels
category: uncategorized
tags: []
---
**veejay 1.5.3 is out now!**  

[veejay-1.5.3 all-in-one package](https://sourceforge.net/projects/veejay/files/veejay-1.5-src/veejay-1.5.3.tar.bz2/download)  


- Added support for basic (CCD) image calibration.  
(Dark Current subtraction & Flat Field Correction)  
There are two methods to combine frames: Average or Median Filter  

- Added new Stream 'Calibration Image' (bugged)  
Use this to load your calibration config and apply it to existing video  

- Added Constant-time median filtering from Simon Perreault  
( http://nomis80.org/ctmf.html )  

- Fixed VIMS 330 'Screenshot'  

- Fixed TrueType font name display  

- Fixed synchronization problem in Reloaded  

- Added VIMS message 'VIMS_CONTINUOUS_PLAY' for continuous sample  
playing  
(positions are not reset when switching samples. Required for veejay-  
radar)  

- Added absolute cycle count to StatusMessage  
(status token \#19 and \#- Fixed setting Norm on commandline (fixes David's problem)  

- Fixed Dummy Mode  

- Changed Dummy mode to playback in 720x5476 PAL or 720x480 NTSC resolution  
( set VEEJAY_RUN_MODE=CLASSIC environment variable to get old behaviour)  

- Refactorized OSC event handling. Use veejay -u to dump namespace. No pulling of data yet, only triggers.  
The new OSC namespaces matches VIMS 1:1  

- Added VIMS_SAMPLE_STACK message to pull FX mixing sources (veejay-  
radar)  

- Added VIMS_CHAIN_FOLLOW_FADE message to switch sources after fading  
automatically  
(Also added toggle button in Reloaded below the Chain Fade Slider)  

- Added the Constant-time median filtering algorithm as a new Image FX  

- Updated veejay's MAN page 20) Required for veejay-radar  

- Fixed connection instability issues (libvjnet)  

- Lots of bugfixes