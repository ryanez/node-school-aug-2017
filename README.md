# Node School React Workshop Aug 2017 [@Nearsoft](www.nearsoft.com)
## Contents
### Workshop
This folder contains the support material that will be used by instructor and attendes during the workshop, it contains all the steps, instructions and code snipets in order to reduce the amount of time on error and typo detections while the workshop execution.
### UI
This is the final product which is mean to be the outcome result of the workshop, this folder will be left on a different branch (not merged with master) with the purpose that each attendee must write it during the workshop. [Get started](workshop/README.md)!
### Server
This small but handy web server implemented with [express](https://expressjs.com) and [socket.io](https://socket.io) is written for demostration and testing purposes, in the last chapter of the workshop the attendant will need to run it in order to test the remote data access.

**Note**: the ugly `package.json` on the root of this repository is there because the `/server` app is deployed on [heroku](https://node-school-aug-2017.herokuapp.com) and we need it to tell heroku how to install and run our server (because it's not on the root of the repo).