# writevibe

## Welcome

This application helps artists organize their written songs into albums, EPs, mixtapes, or singles. Users can also store demos, stems, and released tracks to their profile.

## Getting Started

- install npm
- run "npm i" in the root directory to install dependencies
- run "npm run build" to compile the .jsx files
- run "npm start" to serve the application
- navigate to "http://localhost:2112/" in your browser

## API

CRUD API
The below URL's should be prefixed with /api/
|              Action                 |Method|          URL          |
| ----------------------------------- | ---- | --------------------- |
|Add user to the database             |POST  |/users                 |
|Add album to the database            |POST  |/users/:userid/albums  |
|Add song to the database             |POST  |/albums/:albumid/songs |
|Add section to the database          |POST  |/songs/:songid/sections|
|Add line to the database             |POST  |/sections/:secid/lines |
|Add demo to the database             |POST  |/songs/:songid/demos   |
|Get user from the database (login)   |GET   |/users                 |
|Get user's albums from the database  |GET   |/users/:userid/albums  |
|Get album's songs from the database  |GET   |/albums/:albumid/songs |
|Get song's sections from the database|GET   |/songs/:songid/sections|
|Get section's lines from the database|GET   |/sections/:secid/lines |
|Get song's demos from the database   |GET   |/songs/:songid/demos   |