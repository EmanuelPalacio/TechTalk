import io from "socket.io-client";


export let socket = null;

export function initSockets() {
  socket = io("http://192.168.0.4:9000");
}
