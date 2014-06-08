---
title: About plugins
name: about-plugins
type: post
date: "Tue, 01 May 2007 21:57:33 +0000"
author: matthijs
category: documentation
tags: []
---
Veejay can load both FreeFrame and Frei0r plugins. By default, veejay loads no plugins. You must create a file and enter the location of the plugins you want to load. Bad plugins can cause veejay to crash, test all your plugins before using them live.  

$ mkdir ~/.veejay  
$ vi ~/.veejay/plugins  

The contents of the file can look like:  

/usr/local/lib/freeframe  
/usr/local/lib/frei0r-1  

Veejay will pick up the plugins the next time you start it.