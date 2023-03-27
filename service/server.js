import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from './routes/index.routes.js';
import mongoConection from './config/confingMongoDB.js';
import { server, app, io } from './config/createServer.js';
import { PORT } from './config/enviroments.js';
import cloudinary from './config/cloudinary.js';

/* ------ SERVER CONFIG ------- */
app.use(morgan('dev'));
app.use(
  cors({
    origin: '',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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
mongoConection();
