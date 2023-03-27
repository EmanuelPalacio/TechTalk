import express from 'express';
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

import cookieParser from "cookie-parser";


/* ------ SERVER CONFIG ------- */
app.use(morgan('dev'));
//middlewares
app.use(
  cors({
    origin: '',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/* app.use('/api', router); */
// Routes
app.use('/api', router);

server.listen(PORT, () => {
  console.log('server iniciado');
});

/* ------ SOCKET IO ------- */
io.on('connection', (socket) => {
  console.log('se conecto el socket', socket.id);
});
/* ------ CLOUDINARY ------- */
cloudinary.config();
console.log(cloudinary, 'conexion exitosa de Cloudinary');

/* ------ CONNECT MONGODB ATLAS ------- */
confingMongoDB();

app.get("/", (req,res) => {
  res.send("Server is Running...")
})
