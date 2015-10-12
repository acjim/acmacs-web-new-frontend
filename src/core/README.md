# AcmacsCore.bundle
We use a special version of https://github.com/acorg/acmacs.git as our backend to do all the calculations.
In order get the application to work, you have to put a compiled version of the core bundle into this folder.

## Download precompiled binaries
You can get precompiled binaries for OS X (10.7+) and Ubuntu (14.04) [here](https://drive.google.com/folderview?id=0B3SjWA2XVkqCTERmV1BJUkZOYzA&usp=sharing).

## Build AcmacsCore.bundle on OS X
1. Get current version of Acmacs: https://github.com/acorg/acmacs.git
2. Prerequisites
	- OS X Command Line Developer Tools
	- pkg-config (install over homebrew)
3. Set $ACMACS_ROOT environment variable to point to the Acmacs folder
4. Build AcmacsCore package
   `$ACMACS_ROOT/bin/c2r-build CORE`
5. Navigate to `$ACMACS_ROOT`
6. Build core bundle
`bin/c2env make -j acmacs-core-bundle`
It will create a tree under ~/Desktop/AcmacsCore.bundle on OSX

## Build AcmacsCore.bundle on Ubuntu
To Do

## Running under Windows
Install [Vagrant](https://www.vagrantup.com/) and call:
* vagrant init
* vagrant up
* vagrant ssh
* now download the Ubuntu core and extract it to /acjim/ (reason: no symlinks in /vagrant/)
* ready to go