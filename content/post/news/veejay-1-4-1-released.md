---
title: veejay 1.4.1 released
name: veejay-1-4-1-released
type: post
date: "Tue, 11 Nov 2008 18:32:16 +0000"
author: niels
category: news
---
**This is veejay 1.4.1**_News:_Veejay 1.4 supports now the perspective transformation on a per-sample basis,You can use this feature to calibrate your camera in such way that the videoprojected corresponds with the object's position in physical space - at least,approximately depending on pixel to millimeter ratio's. This is great for setups likewall projections with interactive mirrors or floor projections with interactive water(try rippleTV) You can also use this feature to project the video onto an object on stage.This feature is in beta._New Features:_

* Beta: Camera/Projector calibration per sample
* Chained rendering of image effects
* Sample based perspective transformation setup (CTRL-s)
* Some new FX
_Changes:_

* Many bugfixes
* support lower resolution streams when playing in highres
* better colorspace support
* Improved handling of action files (veejay's saved settings)
* Improved OSD/Font rendering and SRT subtitling
_Download:_**Binaries:**[Ubuntu Intrepid][0]**Source packages:**( dependencies, themes, utilities )[https://sourceforge.net/project/showfiles.php?group_id=47564][1]( veejay client and server )[veejay-1.4.1.tar.bz2][2]**Bleeding Edge:**svn co svn://dyne.org/veejay/trunk/veejay-current

[0]: http://sourceforge.net/project/showfiles.php?group_id=47564&package_id=298709
[1]: https://sourceforge.net/project/showfiles.php?group_id=47564
[2]: http://sourceforge.net/project/showfiles.php?group_id=47564&package_id=298603