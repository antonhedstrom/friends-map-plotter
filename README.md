# Friends Map Plotter

Service to plot all your friends visiting the same URL.

# Development

## Server

* User visits the site and will be prompted for a name.
* Name is stored in a token together with a generated unique GUID.
* Save latest position for all users in variable (for now, DB or Cache later...)
* Schedule an event that will broadcast all user positions every X second

## Client

* Each user reports its position using navigator.geolocation every 5 second.
This is being done using something like: POST /position {lng: X, lat: y}
* On incoming Websocket: Update store. The incoming will message will have a guid
  that will identify the user. This is the key in store.users object.
