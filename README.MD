# Simple Application showcase of REST + Socketio servers

## Architecture Overview
This is a showcase of using 2 servers.
- UI Server
    - Using socketio to connect to clients
    - Allows full-duplex communcation
    - Allows broadcast and single messaging in real time
- Game Logic Server
    - Using Flask to implement the REST API server

## How to run it
1. Clone it
2. Open 3-4 terminals
3. `cd game-logic-server` > `flask run` (make sure you pip install flask alr)
4. `cd ui-server` > `npm install` > `node index.js` (make sure you have node installed, with v16.19.0+)
5. `cd client` > `npm install` > `npm start` or `npm start --port [port number]`