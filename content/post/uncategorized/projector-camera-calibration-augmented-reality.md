---
title: Projector/Camera Calibration - Augmented reality
name: projector-camera-calibration-augmented-reality
type: post
date: "Tue, 11 Nov 2008 18:24:46 +0000"
author: niels
category: uncategorized
---
Use veejay 1.4 to calibrate your camera against a projector or a monitor screen in order to calculate the position of a physical object.  


## Calibration  
Press CTRL-s to bring up the setup screen:  


As shown in the preview, the camera was mounted with an angle and doesnt capture the full projection area. We simply select the edges of the projection we see in the camera image, select forward transformation and press CTRL-s again to leave the setup.  


<table class="c3" border="0" width="688"><tbody><tr><td align="left">[](file:///home/control/Desktop/projector-camera-calibration_files/start.png)  

[caption id="attachment_123" align="aligncenter" width="150" caption="Setup screen"][![Setup screen](http://www.veejayhq.net/wp-content/uploads/2008/11/start1-150x150.png "start1")](http://www.veejayhq.net/wp-content/uploads/2008/11/start1.png)[/caption]</td><td class="c1"></td></tr></tbody><tbody><tr><td align="left">[](http://www.veejayhq.net/wp-content/uploads/2008/11/result1.png)  


[![](http://www.veejayhq.net/wp-content/uploads/2008/11/result1-300x230.png "calibrated video")](http://www.veejayhq.net/wp-content/uploads/2008/11/result1.png)  
</td><td class="c1"></td></tr></tbody></table>  
After pressing CTRL-s, we return to our now calibrated camera image.  
This image you can use to process it for motion detection. In order to have veejay pre process filters on your camera stream while playing a sample press CTRL-d