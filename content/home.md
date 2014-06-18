---
title: Home
name: home
type: page
date: "Sat, 03 Mar 2007 10:57:25 +0000"
author: veejayhq
---
## Veejay is a visual instrument  

*Veejay is a visual instrument and realtime video sampler.*

With veejay, you can play the video like you would play a piano.

While playing, you can record the resulting video directly to disk (*video sampling*), all effects are *realtime* and optimized for use on modern processors, Veejay likes the sound of your video's as much as their images: sound is kept in sync ( pitched when needed - *trickplay*) and delivered to JACK for possible further processing.  

You can cluster to allow a number of machines to work together over the network (*uncompressed streaming*, *veejay chaining*) And much [more...](http://www.veejayhq.net/features/)  

The engine is historically based upon [mjpegtools's lavplay](http://mjpeg.sf.net) and processes all video in [YUV planar](http://www.veejayhq.net/docs/colorspaces/) It performs at its best, currently with [MJPEG](http://en.wikipedia.org/wiki/Motion_JPEG) AVI (through **ffmpeg**) or one of veejay's internal formats. Veejay is built upon a servent architecture.  

Thin Clients to Veejay:  

<dl><dt>Reloaded</dt><dd>A GUI developed in GLADE/GTK</dd><dt>sayVIMS</dt><dd>A PureData object allowing direct communications with the server</dd><dt>sendVIMS</dt><dd>A console based utility for quick'n'dirty scripting</dd></dl>
