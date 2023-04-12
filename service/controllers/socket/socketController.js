import { io } from '../../config/index.js';
import { searchChat } from '../../service/database/chat/searchChat.js';
import { searchMessage } from '../../service/database/message/searchMessage.js';

const socketController = (socket) => {
  console.log('se conecto el socket', socket.id);

  /* let users = [];

    const addUser = (userId, socketId) => {
      !users.some((user) => user.userId === userId) &&
        users.push({ userId, socketId });
    };
    
    const removeUser = (socketId) => {
      users = users.filter((user) => user.socketId !== socketId);
    };
    
    const getUser = (userId) => {
      return users.find((user) => user.userId === userId);
    }; */

  //take userId and socketId from user
  socket.on('addUser', (userId) => {
    addUser(userId, socket.id);
    io.emit('getUsers', users);
  });

  //send and get message
  socket.on('sendMessage', ({ senderId, receiverId, text }) => {
    const user = getUser(receiverId);
    io.to(user.socketId).emit('getMessage', {
      senderId,
      text,
    });
  });

  //busca conversation x id user y envia conversations
  socket.on('getConv', async (userId) => {
    const conv = await searchChat(userId);
    console.log('Socket Conversations return: ', conv);
    io.emit('sendConv', conv);
  });

  //busca mensajes x id conversation
  socket.on('getMessages', async (idConversation) => {
    console.log('en socket idConversation: ', idConversation);

    const messages = await searchMessage(idConversation);
    console.log('Socket Messages return: ', messages);
    socket.emit('sendMessages', messages);
  });

  //when disconnect
  socket.on('disconnect', () => {
    console.log('a user disconnected!');
  });
};

export default socketController;
