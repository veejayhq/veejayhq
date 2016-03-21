---
title: Veejay Status Update
name: veejay-status-1506
type: post
date: "Mon, 08 Jun 2015 12:53:40 +0000"
author: niels
category: news
tags: []
---
Here's another status update, compared to the [last](veejay-status-1505);

Previously, the FX chain was dynamically allocated and freed between switching samples and adding/removing FX but now, veejay will pre-allocate all memory required and will keep everything in RAM. You can turn of this feature by using the -M/--dynamic-fx-chain.

###Veejay###
* Added static memory buffers for FX chain and primary buffers
* Added -M/-dynamic-fx-chain commandline option
* Fixed memory leaks
* Added optimized version of strdup and strndup
* Fixed -Z commandline option
* Fixed -B commandline option
* Fixed console messages
* Fixed libdv dependency
* Added SSE optimized memcpy (from xine-lib)
* Added feature to support user defined keybindings (see veejay-server/test/keyboard/README.txt)
* Updated man page
* Many smaller fixes

###Reloaded###
* Fixed sample start/end position buttons
* Fixed parameter slider p0
* Fixed some layout issues
* Fixed sample slot title
* Fixed playmode label

###Plugin-pack/GMIC###
* Fixed Marble
* Added Curvature
* Added DitheredBW
* Added Edges
* Added Light Relief
* Added Plasma
* Added Quadratize Tiles
* Added Shift Tiles
* Added Taquin
