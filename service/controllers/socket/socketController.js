import { searchChat } from '../../service/database/chat/searchChat.js';
import { createMessage } from '../../service/database/message/createMessage.js';
import { searchMessage } from '../../service/database/message/searchMessage.js';

const socketController = (socket) => {
  console.log('se conecto el socket', socket.id);


  //send and get message
  socket.on('sendMessage', async ({ senderId, text, idConversation }) => {
    await createMessage({
      conversationId: idConversation,
      sender: senderId,
      text
    })

    socket.to(idConversation).emit('getMessage', {
      senderId,
      text,
    });
  });
    };
    

  //busca conversation x id user y envia conversations
  socket.on('getConv', async (userId) => {
    const conv = await searchChat(userId);
    
    socket.emit('sendConv', conv);
  });

  //busca mensajes x id conversation
  socket.on('getMessages', async (idConversation) => {
    
    const messages = await searchMessage(idConversation);
    
    socket.emit('sendMessages', messages);
  });

  //when disconnect
  socket.on('disconnect', () => {
    console.log('a user disconnected!');
  });

export default socketController;
