import { searchChat } from "../../service/database/chat/searchChat.js";
import { searchUser } from "../../service/database/findService.js"
import {io} from '../../config/index.js';

const socketController = (socket) => {
    console.log('se conecto el socket', socket.id);
    
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
    
      //busca conversation x id user y envia conversations
      socket.on("getConv", async (userId) => {
        const conv = await searchChat(userId)
        console.log("Socket Conversations return: ", conv)
        io.emit("sendConv", conv);
      });

      //busca info del otro user de la conversation
      socket.on("getUser", async (friendId) => {
        const otherUser = await searchUser(friendId)
        console.log("Socket Other user return: ", otherUser)
        io.emit("sendUser", otherUser);
      });

      //when disconnect
      socket.on("disconnect", () => {
        console.log("a user disconnected!");
        removeUser(socket.id);
        io.emit("getUsers", users);
      });

}


export default socketController