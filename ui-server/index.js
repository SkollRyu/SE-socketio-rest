// const express = require('express');
// const cors = require('cors');
// const app = express();

// app.use(cors());

// app.get('/api/number', (req, res) => {
//   const number = Math.floor(Math.random() * 100);
//   res.json({ "number": number }); // this line passes the number to the client as JSON
// });

// app.listen(3001, () => {
//   console.log('Server listening on port 3001');
// });


import express from "express"; // not {} because it's not a named export
import { createServer } from "http";
import  cors  from "cors";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  }
});

app.use(cors());

io.on('connection', socket => {
  console.log('Client connected');

  socket.on('getNumber', () => {
    const number = Math.floor(Math.random() * 100);
    console.log(`Generated number: ${number}`);
    io.emit('number', { number });
    // socket emit sends to one client
    // io emit sends to all clients
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const port = 3001;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
