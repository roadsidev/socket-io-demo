import { io } from "socket.io-client";

const socket = io("http://www.chrisbenz.dev:3000");

socket.on("connect", () => {
    console.log(socket.connected);
    socket.emit("message", "Hello, I'm connected!");
  });

  socket.on("message", (data) => {
    console.log(data); 
  });