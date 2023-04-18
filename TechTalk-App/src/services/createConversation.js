import TechTalkApi from './apiConfig.js';

export default async function createConversation(newConversation) {
  try {
    const { data } = await TechTalkApi.post(
      `/chat/conversations`,
      newConversation
    );
    
    return data;
  } catch (error) {
    throw new Error(error);
  }
}