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

/* ------ SOCKET IO ------- */
io.on('connection', (socket) => {
  console.log('se conecto el socket', socket.id);
});
/* ------ CLOUDINARY ------- */
cloudinary.config();

/* ------ CONNECT MONGODB ATLAS ------- */
confingMongoDB();
