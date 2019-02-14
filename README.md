# Mobile presence
## Winter stage 2019

Make a mobile client application that detects a signal
bluetooth and, consequently, communicate to a remote server the
detection. This communication is advisable to take only one
time, eventually you can send an end communication
detection, but not consecutive detection communications (therefore
from off to on, possibly from on to off, but not on-on-on etc)

Used tecnologies:
- <a href='https://cordova.apache.org/' target='_blank' style='text-decoration: none; color: inherit; font-weight: bold;'>Cordova</a> (framework for mobile app)
- <a href='https://vuejs.org/' target='_blank' style='text-decoration: none; color: inherit; font-weight: bold;'>VueJs</a> (javascript framework)
- <a href='https://cloud.google.com/datastore/' target='_blank' style='text-decoration: none; color: inherit; font-weight: bold;'>Firebase-Firestore</a> (database cloud)

Detail of my project on my <a href='https://trello.com/invite/b/3XH7xA09/e392d7de50cd1f6e1953e12ea8fdf0bb/moblie-presence' target='_blank'>Trello dashboard</a>

----------

## Release 2.0 is HERE!
The app can now:
- Check for bluetooth connection
- Scan for ble devices
- Write on the database the bluetooth and the user informations
- Rudimental status and connections gui

<br>

Further improvements will be:
- Pleasing gui
- Better status with icons
- No more text but a bubble structured interface for the bluetooth devices informations
