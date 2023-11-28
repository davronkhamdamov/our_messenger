const { Server } = require("socket.io");
const { PORT } = require("./lib/envariment");
const io = new Server(PORT, {});

io.on("connection", (socket) => {
  socket.emit("hello", "world");
});
