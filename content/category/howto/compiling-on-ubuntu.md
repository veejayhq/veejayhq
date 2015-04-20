---
title: "Compiling on Ubuntu "
name: compiling-on-ubuntu
type: post
date: "Wed, 06 Jul 2011 13:34:56 +0000"
author: matthijs
---

##*warning this documentation is a bit out of date*

You could [access to some fresh veggie-meat](/installing) to build under mint 17.1 (rebecca).
Please [contact](/contact) us if you need help.


#### 1. Introduction  
Compiling Veejay is not hard; however, there are a number of caveats to be ware of. The following document is intended to guide you trough a number of steps needed to start compiling, and hopefully, running veejay on Ubuntu/Debian based distro's. You will need to type in some commands in the terminal; The final steps in this document will assume that you can move around a bit on the commandline too  


#### 2. Versions  
Software versions used in this document refer to Ubuntu 10.04 LTS/Lucid Lynx and veejay v1.5.9-4 retrieved from Git. Since both ubuntu and veejay are moving targets, we advice you to always try and use the latest versions available. When in trouble, just [contact us.](http://groups.google.com/group/veejay-discussion?hl=en)  


#### 3. Prerequisite  
**Ubuntu 10.x:** Veejay uses a set of packages called "libavutils". The versions shipped by ubuntu may not be up-to-date. I've found the "MOTU Media" packages of excellent quality and use those instead.(https://launchpad.net/~motumedia/+archive/ppa) . You may add the MOTU repositories using the following command: $ sudo apt-add-repository ppa:motumedia/ppa.  

Also, note that you will need **veejay 1.5.20** from git. This version of veejay works with ffmpeg-0.8.12 "Love".  

**Ubuntu 12.x:**  

Current **master branch** in git works with more recent versions of ffmpeg. The version installed by your apt-get install commands will be fine.  

To compile veejay ( and software in general ) you need a list of additional packages installed that do not ship with the default installation of Ubuntu.  
The list below lists all dependencies:  


    # Packages installed on Xubuntu 12.04 to run veejay  
    *  and some dependencies compiled from source  
    *   
    *  `sudo apt-get install` these  

    build-essential  
    automake  
    libtool  
    cmake  

    *  revision control  
    git  

    *  ffmpeg  
    yasm  

    *  veejay-server  
    libgtk2.0-dev  
    libx11-dev  
    libxml2-dev  
    libxinerama-dev  
    libsdl1.2-dev  
    libjack-dev  
    libglib2.0-dev  
    libquicktime-dev  
    libmjpegtools-dev  
    libjpeg62-dev  
    libfreetype6-dev  
    libdv4-dev  
    libdirectfb-dev  
    liblo-dev  

    *  veejay-client  
    libglade2-dev  

    *  libunicap  
    intltool  
    libraw1394-dev  
    libv4l-dev  

    *  ucview  
    *  libunicapgtk  
    *  libucil  
    libtheora-dev  
    libvorbis-dev  
    libxv-dev  
    libgconf2-dev


#### 4. Downloading veejay  
<span class="c1">The recommended way</span>Use GIT repository. This will contain the latest version and bugfixes of the current code. An alternative is to use a snapshot release. Git can be installed from synaptic. When looking for help, always supply the used versions of the software, as a bug may have been fixed in a later version.  

[Look here for a description of how to download veejay using git.](http://www.veejayhq.net/download-2/)  


#### 5. Compiling  
After downloading and unpacking veejay you should have a directory tree that looks like this:  


    veejay-git/  
    `-- veejay-current  
    |-- sendVIMS  
    |-- veejay-client  
    |-- veejay-server  
    |-- veejay-themes  
    `-- veejay-utils

As you can see, veejay has been split up in a number of different "packages". These packages have to be compiled separately, but in a specific order.  

We'll start by compiling veejay-server:  


    $cd veejay-server  
    $export PKG_CONFIG_PATH=/usr/lib/pkgconfig  
    $./autogen.sh  
    $./configure --prefix=/usr  
    $make -j2  
    $sudo make install

Notes:  

Make sure that PKG_CONFIG_PATH points to the directory containing the .pc files of the libraries veejay will be going to use! If you have build other libraries from source and installed them , for example to /opt, set /opt to be the first path on PKG_CONFIG_PATH and then include any other paths.  


    $ export PKG_CONFIG_PATH=/opt/lib/pkgconfig:/usr/lib/pkgconfig

If you run in trouble, you can launch ./build.sh and send us the output.  

Next, veejay-client:  


    $cd ../veejay-client  
    $export PKG_CONFIG_PATH=/usr/lib/pkgconfig  
    $./autogen.sh  
    $./configure --prefix=/usr  
    $make -j2  
    $sudo make install

And some themes:  


    $cd ../veejay-themes  
    $sudo ./INSTALL.sh

That particular installation of veejay did not run without some fonts installed for the OSD. I'm sure that'll be fixed in the near future, but here's how to fix that:  


    $mkdir ~/.veejay & mkdir ~/.veejay/fonts  
    $cp /usr/share/fonts/truetype/freefont/FreeSans.ttf .veejay/fonts/

You may now start veejay:  


    $veejay -d

And reloaded:  


    $reloaded

That's it, cheers!
