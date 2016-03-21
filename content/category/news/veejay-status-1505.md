---
title: Veejay Status
name: veejay-status-1505
type: post
date: "Wed, 13 May 2015 08:02:14 +0000"
author: niels
category: news
tags: []
---
Here follows a status update on veejay, compared to the file release of February 2015.

I'm listing only the most important ones, for a full log look at [http://code.dyne.org/veejay/log](http://code.dyne.org/veejay/log)

###Veejay###
* Fixed/Refactored video file loading and editlist handling
* Fixed/Refactored audio playback via jack
* Reduced memory footprint of samples (you can load thousands now)
* Fixed preview render issue when projection mapping was enabled
* Fixed glitch in combining slow motion effect and looping
* Fixed unicast streaming (veejay to veejay)
* Fixed MLZO recording
* Fixed auto splitting
* Fixed crash on closing SDL window via reloaded
* Fixed chain fader
* Fixed handling of cached frames in FX chain
* Fixed chroma leaking everywhere
* Fixed recorders
* Fixed OSD
* Added support for QR code display
* Dropped VIMS_LOG event
* Fixed picture-in-picture effect
* Fixed all scratcher effects
* Fixed slicer effect
* Fixed complex sync effect
* Fixed chameleon effect
* Fixed keyselect effect
* Refactored VIMS message verification and parsing
* Use high resolution timer
* Many other smaller fixes, cleanup and refactoring (thousands of lines removed)

###Reloaded###
* Changed behaviour of -t; by default start without theme
* Fixed Preview,
* Fixed Sample EditList
* Fixed parameter hints for Livido filters
* Fixed timeline
* Many cosmetic fixes
* Added menu item 'Append to samplelist'

###SayVIMS###
* Added interactive mode
* Support querying data from veejay

###New stuff###
* Added new plugin pack ['lvdgmic'](http://code.dyne.org/veejay/tree/veejay-current/plugin-packs/lvdgmic) containing about 25 plugins from [GMIC](http://sourceforge.net/projects/gmic/files/linux/).
