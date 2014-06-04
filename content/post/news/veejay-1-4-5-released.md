---
title: veejay 1.4.5 released
name: veejay-1-4-5-released
type: post
date: "Wed, 31 Dec 2008 17:06:16 +0000"
author: niels
category: news
---
  
This is a bugfix release with minor feature enhancementsDownload:[http://downloads.sourceforge.net/veejay/veejay-1.4.5.tar.bz2?use_mirror=][0]  
**Main changes:**  
Faster startupBetter quality picture (fixed mixup between Rec. 601 and JPEG/JFIF)Added support for JPEG streaming webcams (V4L1), tested with ov51x-jpegSlow motion works for mixing samplesAdded support for MJPEG-b, Lossless JPEG, YUV4MPEG 4:2:xAdded recorders for YUV planar 4:2:x JPEG/JFIFAdded support for [TwinView/One Big Desktop][1] configurationsAuto loop plain modeSample create in reverse playRemote listing for [veejay's working directory][2] in ReloadedAdded environment variables to customize veejay behaviour, see veejay -u or man veejayVEEJAY_INTERPOLATE_CHROMAVEEJAY_SDL_KEY_REPEATVEEJAY_SDL_KEY_DELAYVEEJAY_AUTOSCALEVEEJAY_PERFORMANCEVEEJAY_PLAYBACK_CACHEVEEJAY_SDL_FULLSCREENVEEJAY_SCREEN_GEOMETRYVEEJAY_SCREEN_SIZE**Bugfixes:**

    - Fixes to Multitrack in Reloaded- Fixes to unicast streaming- Fixed chroma bug in preview image- Save composite configuration per sample- Many small fixes to Reloaded- SRT positioning- Fixed DV support (PAL/NTSC)- Fixed blending filters- Fixed action-file/sample-list loading- Fixed some possible race conditions in playback thread- Fixed reloaded's screen size- Fixed opening multiple V4L devices

**Dropped:**

    - OpenGL output driver- Yuv4MPEG output stream (-O3 -o stdout)- Drop YUV 4:2:0 processing- Drop crop and zoom (obsolete)- Drop pixelate FX- Drop VEEJAY_SET_CPU

**Added:**

    - Veejay environment script (test/startup)

[0]: http://downloads.sourceforge.net/veejay/veejay-1.4.5.tar.bz2?use_mirror=
[1]: http://www.veejayhq.net/docs/veejay-environment-variables/
[2]: http://www.veejayhq.net/wp-content/uploads/2009/01/medialist.jpg