---
title: Installation
name: installation
type: page
date: "Sat, 14 Apr 2012 10:01:24 +0000"
author: niels
---

## Pre-compiled packages

Currently there is a all-in-one binary release for Ubuntu 12.04 LTS (64 bit).
You can grab it here: [veejay-1.5.28-amd64](https://sourceforge.net/projects/veejay/files/veejay-1.5-bin/veejay-1.5.28-amd64.deb/download)

## Compile from source

To get a copy of veejay's source anonymously:

    git clone git://code.dyne.org/veejay.git veejay-git

To check the latest releases:

    git tag

Some information about compiling can be found in our documentation.
[Concact us](/contact/) if you need some help compiling veejay for your distribution.


### Compiling on Mint

These steps are for Mint 17.1 Rebecca

1. Get all the dependencies:

(first, make sure you are up-to-date)

Install the dependencies with:
```
$ sudo apt-get install git autoconf automake libtool m4 gcc libjpeg62-dev libswscale-dev libavutil-dev libavcodec-dev libavformat-dev libx11-dev gtk-2.0-dev libxml2-dev libsdl1.2-dev libjack0 libjack-dev jackd1
```


2. Build the server

```
$ cd veejay-current
veejay-current $ cd veejay-server
veejay-server $ sh autogen.sh
veejay-server $ ./configure
veejay-server $ make
veejay-server $ sudo make install
```

If you want to build for a generic or specific architecture, replace the above configure command with for example:

```
# generic 
$ ./configure --with-arch-target=generic

# specific cpu
$ ./configure --wit-arch-target=core2
```

The client and command line utility also accept the --with-arch-target configure parameter.

3. Build the client

```
veejay-server $ cd ..
veejay-current $ cd veejay-client
veejay-client $ sh autogen.sh
veejay-client $ ./configure && make
veejay-client $ sudo make install
```

4. Build the command line tool sayVIMS (optional)

```
veejay-client $ cd ..
veejay-current $ cd veejay-utils
veejay-utils $ sh autogen.sh
veejay-utils $ ./configure && make
veejay-utlis $ sudo make install
```

5. Test-run 

First, run the server stand-alone in dummy mode:

```
$ veejay -v -d
```

If all goes well, you will see a black video window. Press CTRL-C to exit

Then, run the server with a video-file:

```
$ veejay -v /path/to/mjpeg.avi
```

### Compiling on Ubuntu with ffmpeg from sources

These steps are for Ubuntu 14.10 Utopic Unicorn (tested over xubuntu)

1. Build your own ffmpeg:

(tested with ffmpeg version 2.6.git)

Mainly you will follow the official ffmpeg compilation [guide for Ubuntu](https://trac.ffmpeg.org/wiki/CompilationGuide/Ubuntu).
The little difference who make it work is the '--enable-shared' you add to give at the './configure' step to fix linking errors like "relocation R_X86_64_32 against `ff_a64_muxer'".
The build is a bit udge, it's time to make coffee.

2. Get all the dependencies to build veejay:

(first, make sure you are up-to-date)

Install the dependencies with:
```
$ sudo apt-get install git autoconf automake libtool m4 gcc libjpeg8-dev libswscale-dev libavutil-dev libavcodec-dev libavformat-dev libavresample-dev libx11-dev libgtk2.0-dev libxml2-dev libsdl1.2-dev libjack0 libjack-dev jackd1 libglade2-dev
```

Nota : install also libsdl1.2-dev dependencies (libavahi-client-dev, libavahi-common-dev, libcaca-dev, libpulse-dev, libslang2-dev) and maybe also other dependencies from other packages.


3. Build the server

You need to inform where veejay will get the ffmpeg you just successfuly build, this is done by setting of few environnement variables based on where you have installed ffmpeg (/opt/ffmpeg , $HOME/bin/ffmpeg, ....)

```
export PKG_CONFIG_PATH=/usr/lib/pkgconfig:$HOME/ffmpeg_build/lib/pkgconfig
export LD_LIBRARY_PATH=$HOME/ffmpeg_build/lib
export C_INCLUDE_PATH=$HOME/ffmpeg_build/include
```

Then build the server.


```
$ cd veejay-current
veejay-current $ cd veejay-server
veejay-server $ sh autogen.sh
veejay-server $ ./configure --enable-shared
veejay-server $ make
veejay-server $ sudo make install
```

If you want to build for a generic or specific architecture, replace the above configure command with for example:

```
# generic
$ ./configure --enable-shared --with-arch-target=generic

# specific cpu
$ ./configure --enable-shared --wit-arch-target=core2
```

The client and command line utility also accept the --with-arch-target configure parameter.

4. Build the client

```
veejay-server $ cd ..
veejay-current $ cd veejay-client
veejay-client $ sh autogen.sh
veejay-client $ ./configure && make
veejay-client $ sudo make install
```

5. Build the command line tool sayVIMS (optional)

```
veejay-client $ cd ..
veejay-current $ cd veejay-utils
veejay-utils $ sh autogen.sh
veejay-utils $ ./configure && make
veejay-utlis $ sudo make install
```

6. Test-run

Has you have configured a non-standard installation of ffmpeg, you must inform veejay where to found it by setting an environnment variable.

```
export LD_LIBRARY_PATH=$HOME/ffmpeg_build/lib
```

Now you can test the server stand-alone in dummy mode:

```
$ veejay -v -d
```

If all goes well, you will see a black video window. Press CTRL-C to exit

Then, run the server with a video-file:

```
$ veejay -v /path/to/mjpeg.avi
```

## Source archives

* [Veejay development (websvn, trac)](http://code.dyne.org/veejay)
* [Veejay File Release archive](http://www.sourceforge.net/projects/veejay)

