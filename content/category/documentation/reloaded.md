---
title: Reloaded
name: reloaded
type: post
date: "wo jun 18 23:23:02 CEST 2014"
author: matthijs
---

###Introduction

Veejay has a client-server architecture. This means that multiple clients can connect to
the same veejay `server` or even multiple servers, possible running on different computers even.

Reloaded is a graphical client for veejay, providing nice buttons and sliders to play with.

###Sample sequencer

Its easy to sequence Samples with Reloaded - and to record the sequence to a new sample.

This is how the Sequencer looks like:
[caption id="attachment_200" align="aligncenter" width="194" caption="Sequencer"][![Sequencer](/uploads/2008/11/sequencer.png)[/caption]

In the 10x10 board below you have 100 slots, in each you can place exactly one sample.
First, play the sample you want to sequence and left-mouse click one of the slots. Do
so for the other samples you want to sequence. The grid is played from top left to
bottom right and empty slots are simply skipped. The play pattern in the grid below is:
1,2,3,1,2,3,4,5,6,7,8,9

You can click the 'Play and repeat sample grid' which will do the obvious, play the pattern.

###Video mixing

Veejay can (down)mix from multiple sources

**Method 1/2. Mixing plain samples**

To mix 'plain' samples, i.e samples with no FX you can simply add a video effect to the current sample ,
click it in the FX chain and select a secondary source for it from the FX sources list.
This method will not render the FX that may be present on the secondary source.
You can use method 2, or play and record the secondary sample to a new sample before mixing.

**Method 2/2. Mixing composed samples**

To mix 'composed' samples, i.e. samples with all FX rendered, you can use the MT panel in Reloaded.
The MultiTrack panel is used to track multiple veejay servers and can be used to connect video streams.

If you have a few fast machines and a fast network at your disposal, you can easily drive 4 veejays simultaneously.
The maximum number of tracks can be increased on reloaded's command line.

The MT panel provides synchronized playback controls

###Multi (Veejay) Tracker

Reloaded can track multiple veejay servers.

Double click the preview of the Track to have reloaded reconnect to that
particular veejay-server.


#### 1. Click 'Add Track' (red dot) to add another veejay server to Reloaded

[![](/uploads/2008/11/mtstep1.png)


#### 2. Fill in the connection details of the other veejay server
[![](/uploads/2008/11/mtstep2.png)


#### 3. Click the preview togglebutton (red dot) to see what the other veejay server is delivering
[![](/uploads/2008/11/mtstep3.png)


#### 4. Click the 'Track 1' checkbox of Track 0 (red dot) to use Track 1 as an input stream.
[![](/uploads/2008/11/mtstep4.png)


#### Start playing the newly created input stream
[caption id="attachment_187" align="alignnone" width="300" caption="Enable Track 1"][![Enable Track 1](/uploads/2008/11/mtstep5.png)[/caption]

