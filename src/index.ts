import { Server } from "socket.io";

const io = new Server({ /* options */ });

io.on("connection", (socket) => {
  // ...
  socket.on("message", (message) => {
    socket.emit("message", "Hello, your message was received successfully!");
  }

  )
});



io.listen(3000);
console.log("listening on port 3000");
