import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'http';

/* ------ Create Server ------- */
export const app = express();
export const server = createServer(app);
export const io = new Server(server, {
  /* options */
  cors: {
    origin: '*',
  },
});
