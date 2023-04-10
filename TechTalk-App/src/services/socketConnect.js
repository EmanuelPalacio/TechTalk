import { LOCAL_HOST, API_URL } from '@env';
import { io } from 'socket.io-client';

const URL = process.env.NODE_ENV === 'development' ? LOCAL_HOST : API_URL;

export const socket = io(URL, {
   autoConnect: false,
});
