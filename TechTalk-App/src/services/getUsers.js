import TechTalkApi from './apiConfig.js';

export default async function getUsers() {
  try {
    const { data } = await TechTalkApi.get(
      `/user`,
      {},
    );
    
    return data;
  } catch (error) {
    throw new Error(error);
  }
}