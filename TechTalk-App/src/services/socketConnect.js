import { LOCAL_HOST, HOST_PROD } from '@env';
import { io } from 'socket.io-client';

const URL = process.env.NODE_ENV === 'development' ? LOCAL_HOST : HOST_PROD;

export const socket = io(URL, {
  autoConnect: false,
});
