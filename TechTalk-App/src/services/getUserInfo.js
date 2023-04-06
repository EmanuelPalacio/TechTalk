import TechTalkApi from './apiConfig.js';

export default async function getUserInfo(id, token) {
  try {
    const { user } = await TechTalkApi.get(`/user/${id}`, {}, {});
    return user;
  } catch (error) {
    console.log(error);
  }
}
