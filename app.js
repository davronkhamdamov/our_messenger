const { Server } = require("socket.io");
const { PORT } = require("./lib/envariment");
const cors = require("cors")
const io = new Server(PORT, {});

io.use(cors.config())

io.on("connection", (socket) => {
  socket.emit("hello", "world");
});
