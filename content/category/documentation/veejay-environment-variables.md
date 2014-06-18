---
title: veejay environment variables
name: veejay-environment-variables
type: post
date: "Thu, 01 Jan 2009 16:42:55 +0000"
author: niels
---
You can specify various environment variables to change veejay's behaviour.  


<table><tr><td>VEEJAY_FULLSCREEN</td><td>0 or 1</td><td>Always starts veejay in fullscreen mode (usefull for installation mode)</td></tr><tr><td>VEEJAY_SCREEN_SIZE</td><td>WidthXHeight</td><td>Size of the video window in Twinview/One BigDesktop mode</td></tr><tr><td>VEEJAY_SCREEN_GEOMETRY</td><td>WidthXHeight+XOffsetxYOffset</td><td>Geometry of your desktop and X/Y offset for video window</td></tr><tr><td>VEEJAY_CAPTURE_DRIVER</td><td>unicap or v4lutils</td><td>Specifies capture driver to use</td></tr><tr><td>VEEJAY_PERFORMANCE</td><td>quality or fastest</td><td>Choose between quality or speed</td></tr><tr><td></td></tr></table>  


###Examples  


TwinView setup, Screen 0:1600x1024 Screen1: 1024x768  
[![](/uploads/2009/01/ms.jpg)  

`$ export VEEJAY_SCREEN_GEOMETRY=2624x1024+1600x0  
$ export VEEJAY_SCREEN_SIZE=1024x768  
$ export VEEJAY_PERFORMANCE=quality  
$ veejay -v -w1024 -h768 myvideo.avi  
`