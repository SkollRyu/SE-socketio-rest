# Socket IO Intro

Ref: [Socket.IO Documenatation](https://socket.io/docs/v4/)

## Concept


## Functions
- Emitting events
    - [Cheatsheet](https://socket.io/docs/v4/emit-cheatsheet/)
    - Emit(eventname, data): send message to client
        - socket.emit: to the client connected to that socket
        - io.emit: to all clients
        - io.to(socketID).emit: to specific client

- Listening to events
    - on: regular event listener
    - once: one-time event listener
    - off: remove specific event listener


- Rooms: arbitary channel that sockets can join and leave
    - 