---
title: VIMS List
name: vims-list
type: post
date: "Mon, 17 Nov 2008 23:04:50 +0000"
author: niels
---
##Full list of veejay's events and FX  


    VIMS  Syntax: '<selector>:<arguments>;'  
    Use arguments according to FORMAT  
    FORMAT controls the arguments as in C printf. Interpreted sequences are:  
    %d      integer  
    %s      string  
    VIMS selector 001     'Increment index of Effect List'  
    FORMAT: '%d', where:  
    Argument 0 is Step size  
    VIMS selector 002     'Decrement index of Effect List'  
    FORMAT: '%d', where:  
    Argument 0 is Step size  
    VIMS selector 003     'Put selected effect in Effect List to current sample and current entry'  
    VIMS selector 004     'Print current settings'  
    FORMAT: '%d', where:  
    Argument 0 is Sample or Stream ID (depends on playmode, 0=current playing)  
    VIMS selector 005     'GU Get a list of all tracks (unadvised!)'  
    VIMS selector 006     'Camera/Projection calibration setup'  
    VIMS selector 008     'Toggle grayscale preview on/off (default=off)'  
    VIMS selector 010     'Play forward'  
    VIMS selector 011     'Play backward'  
    VIMS selector 012     'Play stop'  
    VIMS selector 013     'Skip N frames forward'  
    FORMAT: '%d', where:  
    Argument 0 is Number of frames  
    VIMS selector 014     'Skip N frames backward'  
    FORMAT: '%d', where:  
    Argument 0 is Number of frames  
    VIMS selector 015     'Skip N seconds forward'  
    FORMAT: '%d', where:  
    Argument 0 is Number of seconds  
    VIMS selector 016     'Skip N seconds backward'  
    FORMAT: '%d', where:  
    Argument 0 is Number of seconds  
    VIMS selector 017     'Go to starting position'  
    VIMS selector 018     'Go to ending position'  
    VIMS selector 019     'Set current frame number'  
    FORMAT: '%d', where:  
    Argument 0 is Frame number  
    VIMS selector 020     'Change trickplay speed'  
    FORMAT: '%d', where:  
    Argument 0 is Frame step  
    VIMS selector 021     'Change frameduplication'  
    FORMAT: '%d', where:  
    Argument 0 is Frame repeat  
    VIMS selector 022     'Start built-in UDP mcast server (YUV planar)'  
    VIMS selector 023     'Stop built-in UDP mcast server'  
    VIMS selector 020     'Change trickplay speed depending on play direction'  
    FORMAT: '%d', where:  
    Argument 0 is Frame step  
    VIMS selector 033     'Macro keystroke recorder/playback'  
    FORMAT: '%d %d', where:  
    Argument 0 is Keep or reset (1=reset)  
    Argument 1 is Macro status (0=disabled,1=record,2=playing)  
    VIMS selector 034     'Select a bank to store macro keystrokes'  
    FORMAT: '%d', where:  
    Argument 0 is Bank ID  
    VIMS selector 040     '(OUT) Write video output to (special) file in yuv4mpeg format'  
    FORMAT: '%s', where:  
    Argument 0 is Filename  
    VIMS selector 041     '(OUT) Stop writing video output to yuv4mpeg file'  
    VIMS selector 042     'TCP: Send a frame to a connected veejay client'  
    VIMS selector 045     'OUT: Start writing video output to a vloopback device'  
    FORMAT: '%d', where:  
    Argument 0 is Vloopback pipe number  
    VIMS selector 046     'OUT: Stop writing to vloopback device'  
    VIMS selector 047     'Push current playing sample or stream as viewport input'  
    VIMS selector 048     'Set render depth, use 1 to render chain entries 0,1 and 2 of underlying sample, use 2 to toggle on/off'  
    FORMAT: '%d', where:  
    Argument 0 is Depth switch  
    VIMS selector 050     'Paste frames from buffer at frame into edit descision list'  
    FORMAT: '%d', where:  
    Argument 0 is EDL position  
    VIMS selector 051     'Copy frames from edit descision list to buffer'  
    FORMAT: '%d %d', where:  
    Argument 0 is EDL start position  
    Argument 1 is EDL end position  
    VIMS selector 052     'Delete frames from editlist (no undo!)'  
    FORMAT: '%d %d', where:  
    Argument 0 is EDL start position  
    Argument 1 is EDL end position  
    VIMS selector 053     'Crop frames from edit descision list to buffer'  
    FORMAT: '%d %d', where:  
    Argument 0 is EDL start position  
    Argument 1 is EDL end position  
    VIMS selector 054     'Cut frames from edit descision list to buffer'  
    FORMAT: '%d %d', where:  
    Argument 0 is EDL start position  
    Argument 1 is EDL end position  
    VIMS selector 055     'Add video file to edit descision list'  
    FORMAT: '%s', where:  
    Argument 0 is Filename  
    VIMS selector 056     'GU Append a file to the plain EDL and create a new sample (unadvised!)'  
    FORMAT: '%d %s', where:  
    Argument 0 is existing or new ID  

    Argument 1 is Filename  
    VIMS selector 058     'Save (selection of) edit descision list to new file'  
    FORMAT: '%d %d %s', where:  
    Argument 0 is EDL start position (0=start position)  
    Argument 1 is EDL end position (0=end position)  
    Argument 2 is Filename  
    VIMS selector 059     'Load edit descision list from file'  
    FORMAT: '%s', where:  
    Argument 0 is Filename  
    VIMS selector 080     'Execute VIMS bundle'  
    FORMAT: '%d', where:  
    Argument 0 is Bundle ID  
    VIMS selector 081     'Delete a VIMS bundle'  
    FORMAT: '%d', where:  
    Argument 0 is Bundle ID  
    VIMS selector 082     'Add a new bundle to the event list'  
    FORMAT: '%d %s', where:  
    Argument 0 is Bundle ID (0=new, 1=overwrite existing)  
    Argument 1 is VIMS text  
    VIMS selector 083     'Attach/Detach a Key to VIMS Event'  
    FORMAT: '%d %d %d %s', where:  
    Argument 0 is VIMS ID  
    Argument 1 is SDL Key symbol  
    Argument 2 is SDL Key modifier (0=none,1=alt,2=ctrl,3=shift)  
    Argument 3 is VIMS message  
    VIMS selector 084     'Veejay load action file'  
    FORMAT: '%s', where:  
    Argument 0 is Filename  
    VIMS selector 085     'Veejay save action file'  
    FORMAT: '%d %s', where:  
    Argument 0 is Mode (0=only Bundles,1=save edl/sample list)  
    Argument 1 is Filename  
    VIMS selector 086     'Capture Effect Chain to a new Bundle'  
    VIMS selector 100     'Create a new sample'  
    FORMAT: '%d %d', where:  
    Argument 0 is Starting position  
    Argument 1 is Ending position  
    VIMS selector 101     'Select and play sample'  
    FORMAT: '%d', where:  
    Argument 0 is Sample ID (0=current playing, -1=last created, > 0 = Sample ID)  
    VIMS selector 102     'Change looptype of sample'  
    FORMAT: '%d %d', where:  
    Argument 0 is Sample ID (0=current playing, -1=last created, > 0 = Sample ID)  
    Argument 1 is Looptype (0=None,1=Normal,2=Pingpong)  
    VIMS selector 103     'Change title of sample'  
    FORMAT: '%d %s', where:  
    Argument 0 is Sample ID (0=current playing, -1=last created, > 0 = Sample ID)  
    Argument 1 is Title  
    VIMS selector 104     'Change playback speed of sample'  
    FORMAT: '%d %d', where:  
    Argument 0 is Sample ID (0=current playing, -1=last created, > 0 = Sample ID)  
    Argument 1 is Speed (0=pause, > 0  and < (end-start)  
    VIMS selector 105     'Change start position of sample'  
    FORMAT: '%d %d', where:  
    Argument 0 is Sample ID (0=current playing, -1=last created, > 0 = Sample ID)  
    Argument 1 is Frame number  
    VIMS selector 106     'Change end position of sample'  
    FORMAT: '%d %d', where:  
    Argument 0 is Sample ID (0=current playing, -1=last created, > 0 = Sample ID)  
    Argument 1 is Frame number  
    VIMS selector 107     'Change frame repeat for this sample'  
    FORMAT: '%d %d', where:  
    Argument 0 is Sample ID (0=current playing, -1=last created, > 0 = Sample ID)  
    Argument 1 is Frame repeat  
    VIMS selector 108     'Set in point in sample'  
    FORMAT: '%d %d', where:  
    Argument 0 is Sample ID (0=current playing, -1=last created, > 0 = Sample ID)  
    Argument 1 is Position  
    VIMS selector 109     'Set out point in sample'  
    FORMAT: '%d %d', where:  
    Argument 0 is Sample ID (0=current playing, -1=last created, > 0 = Sample ID)  
    Argument 1 is Position  
    VIMS selector 110     'Set in and out points in sample'  
    FORMAT: '%d %d %d', where:  
    Argument 0 is Sample ID (0=current playing, -1=last created, > 0 = Sample ID)  
    Argument 1 is Starting position  
    Argument 2 is Ending position  
    VIMS selector 111     'Clear in and out points'  
    FORMAT: '%d', where:  
    Argument 0 is Sample ID (0=current playing, -1=last created, > 0 = Sample ID)  
    VIMS selector 112     'Enable effect chain of sample'  
    FORMAT: '%d', where:  
    Argument 0 is Sample ID (0=current playing, -1=last created, > 0 = Sample ID)  
    VIMS selector 113     'Disable effect chain of sample'  
    FORMAT: '%d', where:  
    Argument 0 is Sample ID (0=current playing, -1=last created, > 0 = Sample ID)  
    VIMS selector 120     'Delete sample'  
    FORMAT: '%d', where:  
    Argument 0 is Sample ID >= 1  
    VIMS selector 121     'Delete all samples (caution!)'  
    VIMS selector 125     'Load samples from file'  
    FORMAT: '%s', where:  
    Argument 0 is Filename  
    VIMS selector 126     'Save samples to file'  
    FORMAT: '%s', where:  
    Argument 0 is Filename  
    VIMS selector 127     'Copy sample to new'  
    FORMAT: '%d', where:  
    Argument 0 is Sample ID (0=current playing, -1=last created, > 0 = Sample ID)  
    VIMS selector 130     'Start recording from sample'  
    FORMAT: '%d %d', where:  
    Argument 0 is Number of frames (0=sample duration)  
    Argument 1 is Auto Play (0=disable, 1=enable)  
    VIMS selector 131     'Stop recording from this sample'  
    VIMS selector 143     'Set sample's starting and ending position'  
    FORMAT: '%d %d %d', where:  
    Argument 0 is Sample ID (0=current playing, -1=last created, > 0 = Sample ID)  
    Argument 1 is Starting position  
    Argument 2 is Ending position  
    VIMS selector 144     'Switch between loop types'  
    FORMAT: '%d %d', where:  
    Argument 0 is Sample ID (0=current playing, -1=last created, > 0 = Sample ID)  
    Argument 1 is Looptype (0=None, 1=Normal, 2=Pingpong)  
    VIMS selector 145     'Change KF play status for entry X'  
    FORMAT: '%d %d', where:  
    Argument 0 is Entry ID  
    Argument 1 is Status value  
    VIMS selector 146     'Get keyframes for parameter Y on entry X'  
    FORMAT: '%d %d', where:  
    Argument 0 is Entry ID  
    Argument 1 is Parameter ID  
    VIMS selector 145     'Clear KF series on entry X'  
    FORMAT: '%d', where:  
    Argument 0 is Entry ID  
    VIMS selector 150     'Store current frame as starting position of new sample'  
    VIMS selector 151     'Store current frame as ending position of a new sample ( and commit )'  
    VIMS selector 160     'Increase projection/camera point'  
    FORMAT: '%d %d', where:  
    Argument 0 is X increment  
    Argument 1 is Y increment  
    VIMS selector 161     'Decrease projection/camera point'  
    FORMAT: '%d %d', where:  
    Argument 0 is X increment  
    Argument 1 is Y increment  
    VIMS selector 162     'Set a viewport point using scale'  
    FORMAT: '%d %d %d %d', where:  
    Argument 0 is Point number  
    Argument 1 is Scale factor  
    Argument 2 is X  
    Argument 3 is Y  
    VIMS selector 163     'Get viewport points using scale'  
    FORMAT: '%d', where:  
    Argument 0 is Grid size  
    VIMS selector 164     'Push viewport to secundary input'  
    FORMAT: '%d %d', where:  
    Argument 0 is On/Off  
    Argument 1 is Color=0, Grayscale=1  
    VIMS selector 201     'Select and play stream'  
    FORMAT: '%d', where:  
    Argument 0 is Stream ID >= 1  
    VIMS selector 202     'Change RGB color of solid stream'  
    FORMAT: '%d %d %d %d', where:  
    Argument 0 is Stream ID (-1=last created, > 0 = Stream ID)  
    Argument 1 is Red  
    Argument 2 is Green  
    Argument 3 is Blue  
    VIMS selector 203     'Change title of stream'  
    FORMAT: '%d %s', where:  
    Argument 0 is Stream ID (-1=last created, > 0 = Stream ID)  
    Argument 1 is Title  
    VIMS selector 207     'Set brightness value for Video4linux stream'  
    FORMAT: '%d %d', where:  
    Argument 0 is Stream ID (-1=last created, > 0 = Stream ID)  
    Argument 1 is Value 0-65535  
    VIMS selector 208     'Set constrast value for Video4linux stream'  
    FORMAT: '%d %d', where:  
    Argument 0 is Stream ID (-1=last created, > 0 = Stream ID)  
    Argument 1 is Value 0-65535  
    VIMS selector 207     'Set hue value for Video4linux stream'  
    FORMAT: '%d %d', where:  
    Argument 0 is Stream ID (-1=last created, > 0 = Stream ID)  
    Argument 1 is Value 0-65535  
    VIMS selector 210     'Set color value for Video4linux stream'  
    FORMAT: '%d %d', where:  
    Argument 0 is Stream ID (-1=last created, > 0 = Stream ID)  
    Argument 1 is Value 0-65535  
    VIMS selector 211     'Set white balance value for Video4linux stream'  
    FORMAT: '%d %d', where:  
    Argument 0 is Stream ID (-1=last created, > 0 = Stream ID)  
    Argument 1 is Value 0-65535  
    VIMS selector 212     'Set ficticious stream length'  
    FORMAT: '%d', where:  
    Argument 0 is Number of frames  
    VIMS selector 213     'Disable effect chain of stream'  
    FORMAT: '%d', where:  
    Argument 0 is Stream ID (-1=last created, > 0 = Stream ID)  
    VIMS selector 211     'Set saturation value for Video4linux stream'  
    FORMAT: '%d %d', where:  
    Argument 0 is Stream ID (-1=last created, > 0 = Stream ID)  
    Argument 1 is Value 0-65535  
    VIMS selector 220     'Delete stream'  
    FORMAT: '%d', where:  
    Argument 0 is Stream ID >= 1  
    VIMS selector 228     'Start offline recording from stream'  
    FORMAT: '%d %d %d', where:  
    Argument 0 is Stream ID (-1=last created, > 0 = Stream ID)  
    Argument 1 is Number of frames  
    Argument 2 is Auto Play (0=disable,1=enable)  
    VIMS selector 229     'Stop offline recording from this stream'  
    VIMS selector 230     'Start recording from stream'  
    FORMAT: '%d %d', where:  
    Argument 0 is Number of frames  
    Argument 1 is Auto Play (0=disable,1=enable)  
    VIMS selector 231     'Stop recording from this stream'  
    FORMAT: '%d %d', where:  
    VIMS selector 240     'Open video4linux device as new input stream'  
    FORMAT: '%d %d', where:  
    Argument 0 is Device Number (0=/dev/video0,1=/dev/video1, ... )  
    Argument 1 is Channel Number (0=TV,1=composite,2=svideo)  
    VIMS selector 241     'Open dv1394 device as new input stream'  
    FORMAT: '%d', where:  
    Argument 0 is Channel number  
    VIMS selector 242     'Solid RGB color fill as new input stream'  
    FORMAT: '%d %d %d', where:  
    Argument 0 is Red  
    Argument 1 is Green  
    Argument 2 is Blue  
    VIMS selector 243     'Open yuv4mpeg (special) file as new input stream'  
    FORMAT: '%s', where:  
    Argument 0 is Filename  
    VIMS selector 245     'Open TCP veejay connection (peer to peer, raw data) as new input stream'  
    FORMAT: '%d %s', where:  
    Argument 0 is Port number  
    Argument 1 is Hostname or IP address  
    VIMS selector 246     'Open UDP multicast as new input stream'  
    FORMAT: '%d %s', where:  
    Argument 0 is Port Number  
    Argument 1 is Multicast Address  
    VIMS selector 247     'Open image from file as new input stream'  
    FORMAT: '%s', where:  
    Argument 0 is Filename  
    VIMS selector 254     'Suspend Veejay (caution!)'  
    VIMS selector 300     'Set audio volume'  
    FORMAT: '%d', where:  
    Argument 0 is Volume 0-100  
    VIMS selector 301     'Enable / Disable Fullscreen video output'  
    FORMAT: '%d', where:  
    Argument 0 is On = 1, Off=0  
    VIMS selector 302     'Set codec to use for recording (global setting)'  
    FORMAT: '%s', where:  
    Argument 0 is Codec name (use 'x' to see list)  
    VIMS selector 303     'Change playback mode'  
    FORMAT: '%d', where:  
    Argument 0 is Playback (2=plain,1=stream,0=sample)  
    VIMS selector 305     'Switch between sample and stream playback'  
    VIMS selector 307     'Enable audio playback'  
    VIMS selector 307     'Disable audio playback'  
    VIMS selector 308     'Set current sample bank'  
    FORMAT: '%d', where:  
    Argument 0 is Bank number  
    VIMS selector 309     'Play stream or sample slot (depends on current playmode)'  
    FORMAT: '%d', where:  
    Argument 0 is Slot number  
    VIMS selector 315     'Start sample randomizer'  
    FORMAT: '%d', where:  
    Argument 0 is Mode (0=Random duration, 1=Sample duration)  
    VIMS selector 316     'Stop sample randomizer'  
    VIMS selector 320     'Start recording now and play when finished'  
    VIMS selector 321     'Stop recording'  
    VIMS selector 322     'Start recording'  
    VIMS selector 323     'Change between box or triangle filter for sampling purposes'  
    VIMS selector 324     'Bezerk mode toggle '  
    VIMS selector 325     'More/Less verbosive console output'  
    VIMS selector 326     '(OUT) Resize SDL video window'  
    FORMAT: '%d %d %d %d', where:  
    Argument 0 is Width  
    Argument 1 is Height  
    Argument 2 is X offset  
    Argument 3 is Y offset  
    VIMS selector 327     'Change playback mode'  
    FORMAT: '%d', where:  
    Argument 0 is Playback mode (0=sample,1=stream,2=plain)  
    VIMS selector 328     'Play sample / stream'  
    FORMAT: '%d %d', where:  
    Argument 0 is Sample or Stream ID (0=current playing, -1=last created, > 0 = ID)  
    Argument 1 is Source type (0=sample,1=stream)  
    VIMS selector 329     'Change YUV <-> RGB conversion (unadvised)'  
    FORMAT: '%d', where:  
    Argument 0 is Mode (0=GIMP,1=CCIR701,2=broken)  
    VIMS selector 330     'Save output frame to file'  
    FORMAT: '%d %d %s', where:  
    Argument 0 is Width  
    Argument 1 is Height  
    Argument 2 is Filename  
    VIMS selector 331     'Editlist cache mode toggle'  
    VIMS selector 001     'GU Get preview image (raw RGB24)'  
    FORMAT: '%d %d', where:  
    Argument 0 is Width  
    Argument 1 is Height  
    VIMS selector 334     'Enable/Disable sync correction'  
    FORMAT: '%d', where:  
    Argument 0 is 0=off,1=on  
    VIMS selector 335     'Change playback engine framerate'  
    FORMAT: '%d', where:  
    Argument 0 is Multiple by 100 (ie. for 25fps, use 2500)  
    VIMS selector 339     'Take current frame as Mask for this Effect'  
    VIMS selector 340     'Set sequence play on or off'  
    FORMAT: '%d', where:  
    Argument 0 is Status 0=off,1=on  
    VIMS selector 341     'Add a sample to the sequence'  
    FORMAT: '%d %d', where:  
    Argument 0 is Seq ID  
    Argument 1 is Sample ID  
    VIMS selector 342     'Del sample from sequence slot'  
    FORMAT: '%d', where:  
    Argument 0 is Seq ID  
    VIMS selector 350     'Increment current Channel ID on selected chain entry'  
    FORMAT: '%d', where:  
    Argument 0 is Increment vale  
    VIMS selector 351     'Decrement current Channel ID on selected chain entry'  
    FORMAT: '%d', where:  
    Argument 0 is Decrement value  
    VIMS selector 352     'Enable or disable Effect Chain for ALL samples or streams'  
    FORMAT: '%d', where:  
    Argument 0 is On = 1, Off= 0  
    VIMS selector 353     'Enable Effect Chain'  
    VIMS selector 354     'Disable Effect Chain'  
    VIMS selector 355     'Reset Effect Chain'  
    FORMAT: '%d', where:  
    Argument 0 is Sample or Stream ID (0=current playing, -1=last created, > 0 = ID)  
    VIMS selector 356     'Fade in effect chain'  
    FORMAT: '%d %d', where:  
    Argument 0 is Sample or Stream ID (0=current playing, -1=last created, > 0 = ID)  
    Argument 1 is Duration in frames  
    VIMS selector 357     'Fade out effet chain'  
    FORMAT: '%d %d', where:  
    Argument 0 is Sample or Stream ID (0=current playing, -1=last created, > 0 = ID)  
    Argument 1 is Duration in frames  
    VIMS selector 358     'GU Get effect chain'  
    FORMAT: '%d', where:  
    Argument 0 is Sample or Stream ID (0=current playing, -1=last created, > 0 = ID)  
    VIMS selector 359     'Set Chain Index'  
    FORMAT: '%d', where:  
    Argument 0 is Index value  
    VIMS selector 360     'Add effect to chain entry with default values'  
    FORMAT: '%d %d %d', where:  
    Argument 0 is Sample or Stream ID (0=current playing, -1=last created, > 0 = ID)  
    Argument 1 is Chain Index (-1=current)  
    Argument 2 is Effect ID  
    VIMS selector 361     'Preset effect on chain entry'  
    FORMAT: '%d %d %d %d %d %d %d %d %d %d %d', where:  
    Argument 0 is Sample or Stream ID (0=current playing, -1=last created, > 0 = ID)  
    Argument 1 is Chain Index (-1=current  
    Argument 2 is Effect ID  
    Argument 3 is Parameter 0  
    Argument 4 is Parameter 1  
    Argument 5 is Parameter 2  
    Argument 6 is Parameter 3  
    Argument 7 is Parameter 4  
    Argument 8 is Parameter 5  
    Argument 9 is Parameter 6  
    Argument 10 is Parameter 7  
    VIMS selector 362     'Set a parameter value'  
    FORMAT: '%d %d %d %d', where:  
    Argument 0 is Sample or Stream ID (0=current playing, -1=last created, > 0 = ID)  
    Argument 1 is Chain Index (-1=current)  
    Argument 2 is Parameter number  
    Argument 3 is Value  
    VIMS selector 363     'Enable effect on chain index'  
    FORMAT: '%d %d', where:  
    Argument 0 is Sample or Stream ID (0=current playing, -1=last created, > 0 = ID)  
    Argument 1 is Chain Index (-1=current)  
    VIMS selector 364     'Disable effect on chain index'  
    FORMAT: '%d %d', where:  
    Argument 0 is Sample or Stream ID (0=current playing, -1=last created, > 0 = ID)  
    Argument 1 is Chain Index (-1=current)  
    VIMS selector 365     'Reset effect to default'  
    FORMAT: '%d %d', where:  
    Argument 0 is Sample or Stream ID (0=current playing, -1=last created, > 0 = ID)  
    Argument 1 is Chain Index (-1=current)  
    VIMS selector 366     'Set mixing channel'  
    FORMAT: '%d %d %d', where:  
    Argument 0 is Sample or Stream ID (0=current playing, -1=last created, > 0 = ID)  
    Argument 1 is Chain Index (-1=current)  
    Argument 2 is Sample ID  
    VIMS selector 367     'Set mixing source type'  
    FORMAT: '%d %d %d', where:  
    Argument 0 is Sample or Stream ID (0=current playing, -1=last created, > 0 = ID)  
    Argument 1 is Chain Index (-1=current)  
    Argument 2 is Source Type (0=sample,1=stream)  
    VIMS selector 368     'Set mixing channel and source type'  
    FORMAT: '%d %d %d %d', where:  
    Argument 0 is Sample or Stream ID (0=current playing, -1=last created, > 0 = ID)  
    Argument 1 is Chain Index (-1=current)  
    Argument 2 is Source Type (0=sample,1=stream)  
    Argument 3 is Sample or Stream ID  
    VIMS selector 369     'Reset chain index'  
    FORMAT: '%d %d', where:  
    Argument 0 is Sample or Stream ID (0=current playing, -1=last created, > 0 = ID)  
    Argument 1 is Chain Index (-1=current)  
    VIMS selector 370     'Set opacity of Effect Chain'  
    FORMAT: '%d %d', where:  
    Argument 0 is Sample or Stream ID (0=current playing, -1=last created, > 0 = ID)  
    Argument 1 is Opacity value [0-255]  
    VIMS selector 371     'Decrement current FX chain entry'  
    FORMAT: '%d', where:  
    Argument 0 is Decrement value  
    VIMS selector 372     'Increment current FX chain entry'  
    FORMAT: '%d', where:  
    Argument 0 is Increment value  
    VIMS selector 373     'Change source type of a chain entry'  
    FORMAT: '%d %d', where:  
    Argument 0 is Chain entry  
    Argument 1 is Source type (0=Sample, 1=Stream)  
    VIMS selector 374     'Increment current value of a parameter'  
    FORMAT: '%d %d', where:  
    Argument 0 is Parameter number  
    Argument 1 is Step size  
    VIMS selector 375     'Decrement current value of a parameter'  
    FORMAT: '%d %d', where:  
    Argument 0 is Parameter number  
    Argument 1 is Step size  
    VIMS selector 376     'Enable / disable Effect Chain'  
    VIMS selector 377     'Enable / disable effect on current entry'  
    FORMAT: '%d %d', where:  
    VIMS selector 388     'Print help in OSD (if available)'  
    VIMS selector 399     'Print copyright'  
    VIMS selector 390     'Set font position'  
    FORMAT: '%d %d', where:  
    Argument 0 is X position  
    Argument 1 is Y position  
    VIMS selector 391     'Set font color'  
    FORMAT: '%d %d %d %d %d', where:  
    Argument 0 is Red  
    Argument 1 is Green  
    Argument 2 is Blue  
    Argument 3 is Alpha  
    Argument 4 is 0=Transparent 1=BG 2=FG  
    VIMS selector 392     'Set font type and font size'  
    FORMAT: '%d %d', where:  
    Argument 0 is Font type  
    Argument 1 is Font size  
    VIMS selector 393     'Add a subtitle sequence'  
    FORMAT: '%d %d %d %d %d %s', where:  
    Argument 0 is Subtitle sequence (0=new)  
    Argument 1 is Start position  
    Argument 2 is End position  
    Argument 3 is X position  
    Argument 4 is Y position  
    Argument 5 is Text  
    VIMS selector 394     'Delete a subtitle sequence'  
    FORMAT: '%d', where:  
    Argument 0 is Subtitle sequence  
    VIMS selector 395     'Update a subtitle sequence'  
    FORMAT: '%d %d %d %s', where:  
    Argument 0 is Subtitle sequence  
    Argument 1 is Start position  
    Argument 2 is End position  
    Argument 3 is Text  
    VIMS selector 396     'Export subtitles to SRT'  
    FORMAT: '%s', where:  
    Argument 0 is Filename  
    VIMS selector 397     'Import subtitles from SRT'  
    FORMAT: '%s', where:  
    Argument 0 is Filename  
    VIMS selector 398     'Select a subtitle sequence'  
    FORMAT: '%d', where:  
    Argument 0 is Subtitle sequence  
    VIMS selector 399     'Toggle OSD status'  
    VIMS selector 400     'GU Get video information details'  
    VIMS selector 401     'GU Get all effects'  
    VIMS selector 402     'GU Get EDL'  
    VIMS selector 403     'GU Get all bundles'  
    VIMS selector 405     'GU Get a list of all streams (unadvised!)'  
    FORMAT: '%d', where:  
    Argument 0 is stream offset  
    VIMS selector 408     'GU Get a list of all samples (unadvised!)'  
    FORMAT: '%d', where:  
    Argument 0 is sample offset  
    VIMS selector 409     'GU Get video4linux properties'  
    FORMAT: '%d', where:  
    Argument 0 is Stream ID (-1=last created, > 0 = Stream ID)  
    VIMS selector 410     'GU Get effect chain index details'  
    FORMAT: '%d %d', where:  
    Argument 0 is Sample or Stream ID (0=current playing, -1=last created, > 0 = ID)  
    Argument 1 is Chain Index  
    VIMS selector 411     'GU Get all VIMS events'  
    VIMS selector 412     'GU Get console output'  
    VIMS selector 413     'GU Get sample or stream information (unadivsed!)'  
    FORMAT: '%d %d', where:  
    Argument 0 is Sample or Stream ID (0=current playing, -1=last created, > 0 = ID)  
    Argument 1 is Source Type (0=sample,1=stream)  
    VIMS selector 414     'GU Get sample options'  
    FORMAT: '%d %d', where:  
    Argument 0 is Sample or Stream ID (0=current playing, -1=last created, > 0 = ID)  
    Argument 1 is Source Type (0=sample,1=stream)  
    VIMS selector 415     'GU Get all devices and their locations'  
    VIMS selector 416     'GU Get list of loaded fonts'  
    VIMS selector 417     'GU Get list of loaded subtitle sequences'  
    VIMS selector 418     'GU Get subtitle sequence'  
    FORMAT: '%d', where:  
    Argument 0 is Subtitle sequence  
    VIMS selector 418     'GU Get list of sample sequences'  
    VIMS selector 420     'GU Get all keys'  
    VIMS selector 600     'Quit Veejay (caution!)'  
    VIMS selector 600     'End sessions with veejay'  
    Veejay OSC  
    When using strings, set it *always* as the first argument  

    ----- The OSC address space -----  
    /  
    /video/  
    /video/play: play foward  
    /video/reverse: play reverse  
    /video/pause: pause  
    /video/speed: speed ( < 0 = reverse, > 0 = forward)  
    /video/slow: slow  
    /video/goto_start: goto start  
    /video/goto_end: goto end  
    /video/set_frame: set frame <pos>  
    /video/prev_frame: set previous frame  
    /video/next_frame: set next frame  
    /video/next_second: set next second  
    /video/prev_second: set previous second  
    /video/mode: play plain video  
    /video/set/  
    /sample/  
    /sample/new: create new sample <pos start> <pos end>  
    /sample/copy: copy sample <num> as new sample  
    /sample/del: delete sample <num>  
    /sample/select: select and play sample <num>  
    /sample/set/  
    /sample/set/jitter: relative start/end position update <pos1> <pos2>  
    /sample/set/start: set sample new starting position <pos>  
    /sample/set/end: set sample new ending position <pos>  
    /sample/set/looptype: sample set looptype <0 = none, 1 = normal, 2 = bounce>  
    /sample/set/speed: sample set playback speed <num>  
    /sample/set/marker: sample set marker <pos1> <pos2>  
    /sample/set/slow: sample set frame duplicate <num>  
    /sample/set/nomarker: sample delete marker  
    /sample/rec/  
    /sample/rec/start: sample start recording <0=entire sample, N=num frames> <0=dont play 1=play>  
    /sample/rec/stop: sample stop recording  
    /sample/rec/format: sample set recorder format (mjpeg,mpeg4,dv,divx,yv12,yv16)  
    /stream/  
    /stream/select: stream select and play <num>  
    /stream/rec/  
    /stream/rec/o_start: hidden record from stream <num frames> <autoplay bool>  
    /stream/rec/o_stop: stop hidden recording   
    /stream/rec/start: start stream recorder <num frames> <autoplay bool>  
    /stream/rec/stop: stop stream recorder   
    /stream/rec/format: set stream recorder format (mjpeg,divx,dv,yv12,yv16,mpeg4)  
    /stream/new/  
    /stream/new/v4l: new video4linux input stream <device num> <channel num>  
    /stream/new/solid: new solid color stream <R> <G> <B>  
    /stream/new/y4m: new yuv4mpeg input stream <filename>  
    /stream/new/mcast: new multicast input stream <address> <port>  
    /stream/new/net: new peer-to-peer input stream <hostname> <port>  
    /record/  
    /chain/  
    /chain/reset: Effect chain clear  
    /chain/fade_in: Fade in effect chain <num frames>  
    /chain/fade_out: Fade out effect chain <num frames>  
    /chain/enable: Effect chain enabled  
    /chain/disable: Effect chain disabled  
    /chain/opacity: Manual Fader (0=A 255=B  
    /chain/global_fx: All Effect chains on/off (1/0)  
    /out/  
    /out/mcaststop: Stop mcast frame sender  
    /out/mcaststart: Start mcast frame sender  
    /cl/  
    /cl/load: Samplelist load <filename>  
    /cl/save: Samplelist save <filename>  
    /el/  
    /el/add_sample: Editlist add filename (as new sample)  
    /el/paste_at: EditList paste frames from buf at frame <num>  
    /el/copy: EditList copy frames <n1> to <n2> to buffer  
    /el/del: EditList delete frames <n1> to <n2>  
    /el/crop: EditList crop frames 0 - <n1>  <n2> - end  
    /el/cut: EditList cut frames <n1> to <n2> into buffer  
    /el/add: EditList add file <filename>  
    /el/save: EditList save <filename>  
    /el/load: EditList load <filename>  
    /arg/  
    /arg/set: Set argument <num> to value <num> for effect on entry <num>  
    /entry/  
    /entry/disable: Disable effect chain entry <num>  
    /entry/enable: Enable effect chain entry <num>  
    /entry/clear: Clear effect chain entry <num>  
    /entry/select: Select effect chain entry <num>  
    /entry/defaults: Set effect default values on chain entry <num>  
    /entry/preset: Preset an effect on chain entry  
    /entry/channel: Select channel <num> for mixing effect on entry <num>  
    /entry/source: Select source (0=sample,1=stream) for mixing effect on entry <num>  
    /output/  
    /output/resize: Resize SDL video window <width> <height>  
    /output/fullscreen: Toggle SDL video window fullscreen/windowed  
    /config/  
    /config/sampling: Configure sampling mode (linear=0 or triangle=1)  
    /config/verbose: Toggle verbose output mode  
    /config/bezerk: Toggle bezerk mode  
    ...end of OSC address space.  


    Below follow all effects in Veejay,  
    Effect numbers starting with 2xx are effects that use  
    *two* sources (by default a copy of itself)  
    Use the channel/source commands to select another sample/stream  
    to mix with.  

    [effect num] [effect name] [arg 0 , min/max ] [ arg 1, min/max ] ...  
    0                       Dummy Frame               
    Color                   0       0 - 7  
    201                     Overlay Magic             
    Mode                    0       1 - 32  
    202                     Luma Magick               
    Mode                    0       1 - 39  

    Opacity A                       1       0 - 200  

    Opacity B                       2       0 - 200  
    203                     Map B to A (substract background mask)            
    Threshold                       0       0 - 255  

    Mode                    1       0 - 1  

    Show mask/image                 2       0 - 2  

    Thinning                        3       1 - 100  
    204                     Normal Overlay            
    Opacity                 0       0 - 255  
    205                     Luma Key                  
    Feather                 0       0 - 255  

    Min Threshold                   1       0 - 255  

    Max Threshold                   2       0 - 255  

    Distance                        3       1 - 720  

    Mode                    4       0 - 2  
    206                     Chroma Key (RGB)                  
    Angle                   0       5 - 900  

    Red                     1       0 - 255  

    Green                   2       0 - 255  

    Blue                    3       0 - 255  

    Mode                    4       0 - 1  

    Noise suppression                       5       1 - 6300  
    207                     Chroma Magic              
    Mode                    0       0 - 25  

    Value                   1       0 - 255  
    208                     Opacity by Threshold              
    Mode                    0       0 - 2  

    Threshold A                     1       0 - 255  

    Threshold B                     2       0 - 255  

    Opacity                 3       0 - 255  
    209                     Splitted Screens                  
    Mode                    0       0 - 13  

    Switch                  1       0 - 1  
    210                     Colored Border Translation                
    Size                    0       1 - 288  

    Color                   1       0 - 7  
    211                     Frame Border Translation                  
    Size                    0       1 - 288  
    212                     AlphaLuma Overlay                 
    213                     Transition Translate Opacity              
    Opacity                 0       0 - 255  

    Width                   1       0 - 720  

    Height                  2       0 - 576  

    Ay                      3       0 - 576  

    Ax                      4       0 - 720  

    By                      5       0 - 576  

    Bx                      6       0 - 720  
    214                     Transition Translate Carot                
    Opacity                 0       0 - 255  

    Mode                    1       0 - 1  

    Point size                      2       1 - 720  

    By start                        3       1 - 576  

    By end                  4       1 - 576  

    Row                     5       1 - 720  
    215                     Transition Line           
    Opacity                 0       0 - 255  

    Line width                      1       1 - 720  

    Distance                        2       2 - 720  

    Mode                    3       0 - 1  
    216                     Transition Translate Blend                
    Mode                    0       0 - 30  

    Width                   1       1 - 720  

    Height                  2       1 - 576  

    Ax offset                       3       1 - 720  

    Ay offset                       4       1 - 576  

    Bx offset                       5       1 - 720  

    By offset                       6       1 - 576  
    217                     Transition Fade to Color                  
    Opacity                 0       1 - 255  

    Color                   1       0 - 7  

    Frame length                    2       1 - 3000  

    Mode                    3       0 - 1  
    218                     Transition Fade to Color by RGB           
    Opacity                 0       1 - 255  

    Red                     1       1 - 255  

    Green                   2       1 - 255  

    Blue                    3       0 - 255  

    Mode                    4       0 - 1  

    Frame length                    5       1 - 3000  
    219                     Replace Pure White                
    220                     Simple Mask (black and white)             
    Threshold                       0       0 - 255  

    Mode                    1       0 - 1  
    221                     Threshold blur with overlay               
    Opacity                 0       0 - 255  

    Min Threshold                   1       0 - 255  

    Max Threshold                   2       0 - 255  
    222                     Overlay by Threshold Range                
    Opacity                 0       0 - 255  

    Min Threshold                   1       0 - 255  

    Max Threshold                   2       0 - 255  
    223                     Transparent Chroma Key (RGB)              
    Angle                   0       5 - 900  

    Red                     1       0 - 255  

    Green                   2       0 - 255  

    Blue                    3       0 - 255  

    Opacity                 4       0 - 255  

    Noise level                     5       0 - 3500  
    224                     Transition Wipe           
    Opacity                 0       0 - 255  

    Increment                       1       0 - 25  
    225                     Tracer            
    Opacity                 0       0 - 255  

    Buffer length                   1       1 - 25  
    226                     Magic Tracer              
    Mode                    0       0 - 30  

    Length                  1       1 - 25  
    227                     Strong Luma Overlay               
    Mode                    0       1 - 13  
    228                     Blend by Color Key                
    Angle                   0       5 - 900  

    Red                     1       0 - 256  

    Green                   2       0 - 256  

    Blue                    3       0 - 256  

    Blend mode                      4       0 - 7  

    Noise suppression                       5       0 - 3500  
    229                     Complex Threshold (fixme)                 
    Angle                   0       5 - 900  

    Red                     1       0 - 255  

    Green                   2       0 - 255  

    Blue                    3       0 - 255  

    Smoothen                        4       0 - 4  

    Threshold                       5       0 - 255  
    230                     Out of Sync -Replace selection-           
    Vertical size                   0       1 - 575  

    Mode                    1       0 - 1  

    Framespeed                      2       1 - 250  
    231                     Horizontal Sliding Bars           
    Divider                 0       1 - 576  

    Top Y                   1       0 - 576  

    Bot Y                   2       0 - 576  

    Top X                   3       0 - 576  

    Bot X                   4       0 - 576  
    232                     Vertical Sliding Bars             
    Divider                 0       1 - 576  

    Top Y                   1       0 - 576  

    Bot Y                   2       0 - 576  

    Top X                   3       0 - 576  

    Bot X                   4       0 - 576  
    233                     Displacement Map                  
    X displacement                  0       1 - 720  

    Y displcement                   1       1 - 576  

    Mode                    2       0 - 1  
    234                     Binary Overlays           
    Mode                    0       0 - 10  
    235                     Dissolve Overlay                  
    Opacity                 0       0 - 255  
    236                     Normal Overlay (per Channel)              
    Opacity Y                       0       0 - 255  

    Opacity Cb                      1       0 - 255  

    Opacity Cr                      2       0 - 255  
    237                     Videoplay (timestretched mosaic)                  
    Photos                  0       2 - 10  

    Waterfall                       1       1 - 250  

    Mode                    2       0 - 3  
    238                     VideoWall / Tile Placement                
    Photos                  0       0 - 10  

    X Displacement                  1       0 - 720  

    Y displacement                  2       0 - 576  

    Lock update                     3       0 - 1  
    239                     Map B from threshold mask                 
    Threshold                       0       0 - 255  

    Reverse                 1       0 - 1  
    240                     Map B to A (bitmask)              
    Threshold                       0       0 - 255  

    Reverse                 1       0 - 1  

    Show                    2       0 - 1  
    241                     Picture in picture                
    Width                   0       8 - 720  

    Height                  1       8 - 576  

    X offset                        2       8 - 720  

    Y offset                        3       8 - 576  
    242                     Chameleon BlendTV                 
    Mode (Appear,Dissapear)                 0       0 - 1  
    243                     RadioActive EffecTV               
    Mode                    0       0 - 6  

    Zoom ratio                      1       50 - 100  

    Strength                        2       0 - 255  

    Difference Threshold                    3       0 - 255  
    244                     Map B to A (sub bg, texture map))                 
    Threshold                       0       0 - 255  

    Reverse                 1       0 - 1  

    Show mask                       2       0 - 4  

    Thinning                        3       1 - 100  

    Min blob weight                 4       1 - 5000  
    245                     Water ripples             
    Refresh Frequency                       0       1 - 3600  

    Wavespeed                       1       1 - 16  

    Decay                   2       1 - 31  

    Mode                    3       0 - 6  

    Threshold (motion)                      4       0 - 255  
    100                     Dummy Frame               
    Color                   0       0 - 7  
    101                     Mirror            
    H or V mode                     0       0 - 5  
    102                     Multi Mirrors             
    H or V                  0       0 - 3  

    Number                  1       0 - 237  
    103                     Width Mirror              
    Widths                  0       2 - 720  
    104                     Flip Frane                
    H or V                  0       0 - 1  
    105                     Posterize (Threshold Range)               
    Posterize                       0       1 - 256  

    Min Threshold                   1       0 - 256  

    Max Threshold                   2       0 - 256  
    106                     Negation                  
    Value                   0       0 - 255  
    107                     Solarize                  
    Threshold                       0       1 - 255  
    108                     Hue and Saturation                
    Degrees                 0       0 - 360  

    Intensity                       1       0 - 256  
    109                     Gamma Correction                  
    Gamma                   0       0 - 500  
    110                     Soft Blur (1x3) and (3x3)                 
    Kernel size                     0       0 - 1  
    111                     RevTV (EffectTV)                  
    Line spacing                    0       1 - 576  

    Vertical scale                  1       1 - 720  

    Luminance intensity                     2       0 - 255  

    Color range                     3       0 - 7  
    112                     Dices (EffectTV)                  
    Mode                    0       0 - 5  
    113                     SmuckTV (EffectTV)                
    Mode                    0       0 - 14  
    114                     Filter out chroma channels                
    Mode                    0       0 - 2  
    115                     Various Weird Effects             
    Mode                    0       0 - 10  
    116                     Matrix Dithering                  
    Mode                    0       2 - 255  

    Value                   1       0 - 1  
    117                     Raw Data Manipulation             
    Mode                    0       0 - 4  

    Value                   1       1 - 255  
    118                     Raw Chroma Pixel Replacement              
    Old Cb                  0       0 - 255  

    Old Cr                  1       0 - 255  

    New Cb                  2       0 - 255  

    New Cr                  3       0 - 255  
    119                     Transform Cubics                  
    Cubics                  0       1 - 36  
    120                     Fibonacci Downscaler              
    Mode                    0       0 - 1  

    Fib                     1       1 - 8  
    121                     Bump 2D           
    Value 1                 0       1 - 256  

    Value 2                 1       1 - 256  

    Mode                    2       0 - 1  
    122                     Rotozoom                  
    Mode                    0       0 - 8  

    Rotate                  1       0 - 255  

    Zoom                    2       0 - 255  

    Automatic                       3       0 - 3  
    123                     Shift pixel values YCbCr                  
    Mode                    0       0 - 9  

    Value                   1       0 - 255  
    124                     Overlay Scratcher                 
    Opacity                 0       0 - 255  

    Scratch buffer                  1       1 - 24  

    PingPong                        2       0 - 1  
    125                     Magic Overlay Scratcher           
    Mode                    0       0 - 9  

    Scratch frames                  1       1 - 24  

    PingPong                        2       0 - 1  
    126                     Matte Scratcher           
    Mode                    0       0 - 25  

    Value                   1       0 - 255  

    Length                  2       0 - 25  

    Pingpong                        3       0 - 1  
    127                     Distortion                
    Inc 1                   0       0 - 8  

    Inc2                    1       0 - 8  
    128                     Grayscale by Color Key            
    Angle                   0       5 - 900  

    Red                     1       0 - 255  

    Green                   2       0 - 255  

    Blue                    3       0 - 255  
    129                     Black and White by Threshold              
    Min threshold                   0       0 - 255  

    Max threshold                   1       0 - 255  
    130                     Complex Invert            
    Angle                   0       5 - 900  

    Red                     1       0 - 255  

    Green                   2       0 - 255  

    Blue                    3       0 - 255  

    Noise suppression                       4       0 - 3500  
    131                     Complex Saturation                
    Angle                   0       5 - 900  

    Red                     1       0 - 255  

    Green                   2       0 - 255  

    Blue                    3       0 - 255  

    Intensity                       4       0 - 360  

    Degrees                 5       0 - 256  

    Noise suppression                       6       0 - 3500  
    132                     Isolate Color             
    Angle                   0       5 - 900  

    Red                     1       0 - 255  

    Green                   2       0 - 255  

    Blue                    3       0 - 255  

    White                   4       0 - 255  
    133                     Sharpen           
    Value                   0       0 - 2048  
    134                     Amplify low noise                 
    Mode                    0       0 - 2  

    Amplification                   1       1 - 10000  
    135                     Contrast                  
    Mode                    0       0 - 2  

    Intensity 1                     1       0 - 255  

    Intensity 2                     2       0 - 255  
    136                     Motion blur               
    Frames                  0       0 - 1000  
    137                     Sinoids           
    Mode                    0       0 - 1  

    Sinoids                 1       0 - 1000  
    138                     Average           
    Value                   0       1 - 100  
    139                     Ripple            
    Waves                   0       1 - 3600  

    Amplitude                       1       1 - 80  

    Attenuation                     2       1 - 360  
    140                     Bathroom Window           
    H or V                  0       0 - 1  

    Value                   1       1 - 64  
    141                     Slice Window              
    Slices                  0       2 - 128  

    Mode                    1       0 - 1  
    142                     Zoom              
    Width                   0       0 - 720  

    Height                  1       0 - 576  

    Factor                  2       10 - 100  

    Mode                    3       0 - 1  
    143                     Pencil Sketch (8)                 
    Mode                    0       0 - 8  

    Min Threshold                   1       0 - 255  

    Max Treshold                    2       0 - 255  
    144                     Deinterlace (yuvkineco)           
    Value                   0       0 - 255  
    145                     Pixel Raster              
    Mode                    0       0 - 1  

    Size                    1       1 - 40  
    146                     Color Enhance             
    Intensity Y                     0       0 - 255  

    Intensity U                     1       0 - 255  

    Intensity V                     2       0 - 255  
    147                     Enhanced Magic Blend              
    Mode                    0       0 - 7  

    Min threshold                   1       1 - 255  

    Max threshold                   2       1 - 255  
    148                     Noise Pencil              
    Mode                    0       0 - 3  

    Amplification                   1       1 - 10000  

    Min Threshold                   2       0 - 255  

    Max Threshold                   3       0 - 255  
    149                     RippleTV  (EffectTV)              
    Refresh Frequency                       0       1 - 3600  

    Wavespeed                       1       1 - 16  

    Decay                   2       1 - 32  
    150                     Pixelate                  
    Pixels                  0       1 - 27  
    151                     Magic Mirror Surface              
    X                       0       0 - 360  

    Y                       1       0 - 288  

    X                       2       0 - 100  

    Y                       3       0 - 100  
    152                     Pixel Smear               
    Mode                    0       0 - 3  

    Value                   1       0 - 255  
    153                     Grid              
    Grid size                       0       4 - 144  
    154                     Fish Eye                  
    Value                   0       -1000 - 1000  
    155                     Swirl             
    Degrees                 0       1 - 360  
    156                     Radial Blur               
    Radius                  0       0 - 90  

    Power                   1       0 - 100  

    Direction                       2       0 - 2  
    157                     Chromium                  
    Mode                    0       0 - 3  
    158                     Chrominance Palette (rgb key)             
    Angle                   0       1 - 900  

    Red                     1       0 - 255  

    Green                   2       0 - 255  

    Blue                    3       0 - 255  

    Chroma Blue                     4       0 - 255  

    Chroma Red                      5       0 - 255  
    159                     U/V Correction            
    Angle                   0       1 - 360  

    U Rotate Center                 1       0 - 255  

    V Rotate Center                 2       0 - 255  

    Intensity U                     3       0 - 100  

    Intensity V                     4       0 - 100  

    Minimum UV                      5       0 - 255  

    Maximum UV                      6       0 - 255  
    160                     Radial cubics             
    Radius                  0       2 - 72  

    Value                   1       1 - 90  
    161                     Cartoon           
    Damp Y                  0       1 - 255  

    Damp U                  1       0 - 255  

    Damp V                  2       0 - 255  
    162                     Nervous           
    Buffer length                   0       0 - 25  
    163                     Morphology (experimental)                 
    Threshold                       0       0 - 255  

    Operator                        1       0 - 8  

    Repeat                  2       0 - 1  
    164                     Video Blobs               
    Radius                  0       1 - 360  

    Blobs                   1       1 - 100  

    Speed                   2       1 - 100  

    Shape                   3       0 - 1  
    165                     Video Boids               
    Radius                  0       1 - 360  

    Blobs                   1       2 - 256  

    Shape                   2       0 - 1  

    Cohesion                        3       0 - 100  

    Seperation                      4       0 - 100  

    Alignment                       5       0 - 100  

    Speed                   6       1 - 100  

    Home Radius                     7       1 - 360  
    166                     Motion Ghost              
    Opacity                 0       16 - 255  
    167                     ZArtistic Filter (Oilpainting, acc. add )                 
    Brush size                      0       2 - 16  

    Smoothness                      1       1 - 255  

    Mode (Luma/Chroma)                      2       0 - 1  
    168                     ZArtistic Filter (Oilpaint, acc. avg)             
    Brush size                      0       2 - 16  

    Smoothness                      1       1 - 255  

    Mode (Luma/Chroma)                      2       0 - 1  
    169                     ZArtistic Filter (Horizontal strokes)             
    Line size                       0       2 - 32  

    Smoothness                      1       1 - 255  

    Mode (Luma/Chroma)                      2       0 - 1  
    170                     ZArtistic Filter (Round Brush)            
    Radius                  0       2 - 32  

    Distance from center                    1       1 - 200  

    Smoothness                      2       1 - 255  

    Mode (Luma/Chroma)                      3       0 - 1  
    171                     ZArtistic Filter (Vertical strokes)               
    Stroke size                     0       2 - 32  

    Smoothness                      1       1 - 255  

    Mode (Luma/Chroma)                      2       0 - 1  
    172                     vvCutStop                 
    Threshold                       0       0 - 255  

    Frame freq                      1       0 - 255  

    Cut mode                        2       0 - 1  

    Hold front/back                 3       0 - 1  
    173                     vvMaskStop                
    Negate Mask                     0       0 - 1  

    Swap Mask/Frame                 1       0 - 1  

    Hold Frame Frequency                    2       0 - 255  

    Hold Mask Frequency                     3       0 - 255  
    174                     Photoplay (timestretched mosaic)                  
    Photos                  0       2 - 10  

    Waterfall                       1       1 - 250  

    Mode                    2       0 - 3  
    175                     Flare (Glow)              
    Mode                    0       0 - 5  

    Opacity                 1       0 - 255  

    Radius                  2       0 - 100  
    176                     Constant Luminance Blend                  
    Mode                    0       0 - 31  

    Threshold                       1       0 - 500  

    Constant                        2       16 - 235  
    177                     Color mapping             
    Red                     0       0 - 255  

    Green                   1       0 - 255  

    Blue                    2       0 - 255  
    178                     Goom              
    Mode                    0       0 - 10  

    Value                   1       100 - 5000  
    179                     Colored Morphology                
    Threshold                       0       0 - 255  

    Operator mode                   1       0 - 8  

    Repeat                  2       0 - 1  
    180                     Color Flash               
    Frametime                       0       0 - 50  

    Red                     1       0 - 255  

    Green                   2       0 - 255  

    Blue                    3       0 - 255  

    Delay                   4       1 - 10  
    181                     RGB Channel               
    Red                     0       0 - 1  

    Green                   1       0 - 1  

    Blue                    2       0 - 1  
    182                     Automatic Histogram Equalizer             
    Channel (Y,U,V,All)                     0       0 - 1  

    Intensity                       1       0 - 255  

    Strength                        2       0 - 255  
    183                     Color Histogram           
    Mode (R,G,B,All)                        0       0 - 3  

    Draw                    1       0 - 1  

    Intensity                       2       0 - 255  

    Strength                        3       0 - 255  
    184                     Motion Mapping            
    Threshold                       0       0 - 255  

    Reverse                 1       50 - 10000  

    Draw                    2       0 - 1  

    History                 3       2 - 200  

    Capture length                  4       0 - 255  
    185                     TimeDistortionTV (EffectTV)               
    Mode                    0       5 - 100  
    186                     ChameleonTV (EffectTV)            
    Appearing/Dissapearing                  0       0 - 1  
    187                     BaltanTV (EffecTV)                
    Stride                  0       2 - 16  

    Mode                    1       0 - 1  
    188                     Contour extraction                
    Threshold                       0       0 - 255  

    Mode                    1       0 - 1  

    Show image/contour                      2       0 - 2  

    Thinning                        3       1 - 100  

    Min weight                      4       1 - 5000  
    189                     Lens correction           
    Alpha X                 0       1 - 1000  

    Alpha Y                 1       1 - 1000  

    Direction                       2       0 - 1  
    190                     Substract background (static, requires bg mask)           
    Threshold                       0       0 - 255  

    Mode                    1       0 - 1  


* * *