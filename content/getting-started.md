---
title: Getting Started
name: getting-started
type: page
date: "Mon, 17 Nov 2008 21:38:16 +0000"
author: niels
category: uncategorized
---
**  
First Time Run**  

Once you got veejay installed on your computer, you may need to configure it for your specific setup,  

When veejay is run for the first time, it will create a *.veejay/font* directory in your *$HOME.*  
It will look in this location to find a TrueType font file to use for the OSD display.  
You can activate various OSD's by pressing **CTRL-o** , **CTRL-h** , **CTRL-c in** the video window.  

Once you have choosen a font and put it into *$HOME/.veejay/font*, it is time to configure the dimensions and position of the video window.  
For example, you have a dual screen setup with one big desktop of 2624x1024 and you'd like the video to be displayed on the the second screen (right) you'd set the VEEJAY_SCREEN_GEOMETRY and VEEJAY_SCREEN_SIZE environment variables:  

`$ export VEEJAY_SCREEN_GEOMETRY=2624x1024+1600x0`  

Then, you can specify the size of the video window  

`$ export VEEJAY_SCREEN_SIZE=1024x768`  

On the other hand, if veejay would just run on a single screen (performance/installation mode) you can use SDL's fullscreen option.  

`$ export VEEJAY_FULLSCREEN=1`  

Also, if you have any video capture hardware ( DV1394, Video4Linux) you can choose between two video capture drivers:  
a) The built-in Video4Linux module, as "v4lutils"  
b) Libunicap, which is a library to accesses different kinds of capture devices, as "unicap"  

For example,  

`$ export VEEJAY_CAPTURE_DRIVER=unicap`  

Finally, you may want to change the default capture channel of your video card. If you always use Composite/S-Video input, you will want this.  

`$ export VEEJAY_DEFAULT_CHANNEL=1`  

Optionally, you can tell Veejay to load 3rd party plugins by specifying paths in the textfile $HOME/.veejay/plugins  

For example  
`  
/usr/local/lib/freeframe  
/usr/local/lib/frei0r-1>  
`  

There are more environment variables described in  
$ man veejay  

**Running Veejay**  

There are several ways to start using Veejay. Very often veejay is started in Dummy mode (Showing black video) and Samples are created by loading a Video File in Reloaded. Another way to start veejay is to feed it some videofiles on the commandline; i.e. veejay -v *.avi. Veejay will place all videofiles entered on the commandline in one big Edit Descision List and start playing in *plain* mode. Now, you can use the left and right bracket keys on your keyboard to set in- and out points for the sample to be created. Pressing the right bracket '**]**' will create a new sample. Switching from *sample* to *plain* mode can be done with '**/**' , the keys **F1** to **F12** play sample**1** to sample**12**,  

You can use the number keys (**1-9**) to select a sample bank (i.e, sample **24** would reside in bank **2**)  

Use the **a**,**s**,**d**,**f**,**g**,**h**,**j**,**k**,**l** keys to set a speed multiplier (from left to right, **1x,2x,3x,4x (=f)**) or use the **ALT** modifier for slow motion multipliers.  

The numeric keypad can be used for video navigation, **KP1-KP9** are used for forward/backward play, prev/next frame and jumping. The key **KP*** can be used to change the looptype from *normal* to *pingpong (bounce)*  

When using the console, all FX are in one linear list. You can scroll it by pressing the **Up/Down** arrow keys. Activing the FX can be done by pressing **Return** or **Enter**. Then, you can configure the parameters by pressing **PgUp**/**PgDn** (parameter 0), **KP Insert/KP Delete** (parameter 1) , **,/.** (parameter 2) and all the way from 3 to 8 with **q,w,e,r,t,y,u,i,o,p**  

You can use the **KP Minus/KP Plus** keys to select a slot for the FX, You have 20 such slots.  

Last but not least, you can change the **Mixing Source** by pressing **'/' (Stream/Sample mode)** and the **Mixing Channel** (key **-** and key **+**)  

There are many more keys, but there's an overview in the MAN page.  

Olivier Broquet made a startup script for veejay. It is capable of auto connecting your MIDI devices, starting and stopping veejay and reloaded.  
You can use it as a boiler plate to cook your own.  

* END HERE  

`  
* !/bin/sh`  

DESKTOP_SIZE=2304x800  

DISPLAY_SCREEN_POS=1280x0  
DISPLAY_SCREEN_SIZE=1024x768  

SRC_WIDTH=720  
SRC_HEIGHT=576  

MIDI_BCR_ID=20  
MIDI_ACONNECT_I_TO_RELOADED="$MIDI_BCR_ID:0 $MIDI_BCR_ID:1 $MIDI_BCR_ID:2"  
MIDI_ID_128="128:0"  
MIDI_ID_129="129:0"  

export VEEJAY_SCREEN_GEOMETRY=$DESKTOP_SIZE+$DISPLAY_SCREEN_POS  
export VEEJAY_SCREEN_SIZE=$DISPLAY_SCREEN_SIZE  
export VEEJAY_PERFORMANCE=quality  

case "$1" in  
server)  
veejay -v -d -w$SRC_WIDTH -h$SRC_HEIGHT  
;;  
client)  
reloaded -v  
;;  
radar)  
cd /home/ob/install/video/veejay/veejay-1.4.5/veejay-radar/  
./radar  
;;  
midi128)  
for inp in $MIDI_ACONNECT_I_TO_RELOADED  
do  
aconnect $inp $MIDI_ID_128  
done  
aconnect -o -l  
sleep 10  
;;  
midi129)  
for inp in $MIDI_ACONNECT_I_TO_RELOADED  
do  
aconnect $inp $MIDI_ID_129  
done  
aconnect -o -l  
sleep 10  
;;  
vims_list)  
veejay -u -n | less  
;;  
vims_res)  
cat reserved_vims  
;;  
load)  
sayVIMS -m "056:0 $2;"  
;;  
load_list)  
exec 0<$2  
while read ligne  
do  
$0 load $ligne  
done  
;;  
save_playlist)  

;;  
load_playlist)  

;;  
stop_server)  
killall -9 veejay  
;;  
stop_client)  
killall -9 reloaded  
;;  
stop_radar)  
killall -9 radar  
;;  
start_server)  
gnome-terminal --tab -x $0 server --title veejay  
;;  
start_client)  
gnome-terminal --tab -x $0 client --title reloaded  
;;  

start_radar)  
gnome-terminal --tab -x $0 radar --title radar  
;;  
start_midi128)  
gnome-terminal --tab -x $0 midi128 --title midi128  
;;  

start_midi129)  
gnome-terminal --tab -x $0 midi129 --title midi129  
;;  

esac