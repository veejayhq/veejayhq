---
title: Sampling
name: sampling
type: post
date: "Thu, 26 Apr 2007 22:06:08 +0000"
author: niels
category: documentation
---
If you have started veejay with one or more video file(s) (thus **not with** `$ veejay -d` ), you can easily create new samples;  

First, Veejay must be running in *plain mode*  

![top buttonbar](http://www.veejayhq.net/wp-content/galleries/screenshots/reloaded_bar1.png)  


Then, you can press the In and Out button to set the starting and ending position of a sample ; Pressing the 'Out'  
button immedialty commits the new sample. The keyboard shortcuts are Left bracket and Right bracket resp.  

When a sample is created it has a partial copy of the Edit Decision List; You can change the starting positions by at most -2.0 seconds and the ending positions +2.0 seconds.  

After each commit, the starting position of the sample is set equal to the ending position of the last created sample,  
you can repeatedly press the Out point button to quickly create a series of samples.  

![navigation buttons](http://www.veejayhq.net/wp-content/galleries/screenshots/reloaded_nav1.png)  

If you have started Veejay in dummy mode, the only way to add videofiles is by GVeejay -> Sample -> New from file.  

To play a sample, you can either press one of the F-keys, or doubleclick a sample slot in the samplebank.  
You can activate up to 120 samples per keyboard; To play in range 12-24, press '2', To play in range 1-12, press '1'.  
The 'a,s,d,f,g,h,j,k,l' keys can be used for faster playback , ALT + 'a,s,d,f,g,h,j,k,l' for slower playback.  
To see a full overview of the keyboard comments, use `$ man veejay` or click View -> VIMS bundles in reloaded which displays a list of all valid events and their bindings).