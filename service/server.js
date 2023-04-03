import { json, urlencoded } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from './routes/index.routes.js';
import {
  app,
  cloudinary,
  confingMongoDB,
  io,
  PORT,
  server,
} from './config/index.js';

import cookieParser from 'cookie-parser';

/* ------ SERVER CONFIG ------- */
app.use(morgan('dev'));
//middlewares
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(json());
app.use(urlencoded({ extended: true }));
// Routes
app.use('/api', router);

server.listen(PORT, () => {
  console.log('server iniciado PORT || ', PORT);
});

/* ------ CLOUDINARY ------- */
cloudinary.config();

/* ------ CONNECT MONGODB ATLAS ------- */
confingMongoDB();

app.get('/', (req, res) => {
  res.send('Server is Running...');
});

/* ------ SOCKET IO ------- */
io.on('connection', (socket) => {
  console.log('se conecto el socket', socket.id);
});

let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  //when ceonnect
  console.log("a user connected.");

  //take userId and socketId from user
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });

  //send and get message
  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
    const user = getUser(receiverId);
    io.to(user.socketId).emit("getMessage", {
      senderId,
      text,
    });
  });

  //when disconnect
  socket.on("disconnect", () => {
    console.log("a user disconnected!");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});
