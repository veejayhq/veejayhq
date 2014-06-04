---
title: Home
name: home
type: page
date: "Sat, 03 Mar 2007 10:57:25 +0000"
author: veejayhq
category: news
---
## Veejay is a visual instrumentand realtime video sampler

With veejay, you can play the video like you would play a pianoWhile playing, you can record the resulting video directly to disk (_video sampling_), all effects are _realtime_ and optimized for use on modern processors, Veejay likes the sound of your video's as much as their images: sound is kept in sync ( pitched when needed - _trickplay_) and delivered to JACK for possible further processing.You can cluster to allow a number of machines to work together over the network (_uncompressed streaming_, _veejay chaining_) And much [more...][0]The engine is historically based upon [mjpegtools's lavplay][1] and processes all video in [YUV planar][2] It performs at its best, currently with [MJPEG][3] AVI (through **ffmpeg**) or one of veejay's internal formats. Veejay is built upon a servent architecture.Thin Clients to Veejay:

- Reloaded
A GUI developed in GLADE/GTK - sayVIMS
A PureData object allowing direct communications with the server- sendVIMS
A console based utility for quick'n'dirty scripting

[0]: http://www.veejayhq.net/features/
[1]: http://mjpeg.sf.net
[2]: http://www.veejayhq.net/docs/colorspaces/
[3]: http://en.wikipedia.org/wiki/Motion_JPEG