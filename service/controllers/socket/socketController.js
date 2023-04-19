import { searchChat } from '../../service/database/chat/searchChat.js';
import { createMessage } from '../../service/database/message/createMessage.js';
import { searchMessage } from '../../service/database/message/searchMessage.js';
import { findChat } from '../../service/database/chat/findChat.js';
import { io } from '../../config/index.js';
import { createChat } from '../../service/database/chat/createChat.js';

const socketController = async (socket) => {
  const userId = socket.handshake.query.userId;
  console.log('se conecto el socket', userId);

  socket.join(userId);

  const ids = await searchChat(userId);
  if (ids.length !== 0) {
    ids.forEach((item) => {
      socket.join(item._id.toString());
    });
  }

  //send and get message
  socket.on('sendMessage', async ({ sender, text, idConversation }) => {
    const newMess = await createMessage({
      conversationId: idConversation,
      sender: sender,
      text,
    });

    io.in(idConversation).emit('getMessage', newMess);
  });

  //busca conversation x id user y envia conversations
  socket.on('getConv', async (userId) => {
    const conv = await searchChat(userId);
    socket.emit('sendConv', conv);
  });

  //busca conversation x id de los dos user
  socket.on('getConvTwoUsers', async (senderId, receiverId, callback) => {
    let conv = await findChat(senderId, receiverId);
    if (conv === null) {
      const newconv = await createChat(senderId, receiverId);
      console.log('Conversation creada en socket : ', newconv);
      conv = newconv;
    }
    io.to(senderId.toString())
      .to(receiverId.toString())
      .emit('joinConversation', conv._id.toString());
    callback(conv._id);
  });
  socket.on('joined', (id) => {
    socket.join(id);
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
};
export default socketController;
