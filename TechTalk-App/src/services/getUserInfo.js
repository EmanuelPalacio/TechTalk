import TechTalkApi from './apiConfig.js';

export default async function getUserInfo(id, token) {
  try {
    const { data } = await TechTalkApi.get(
      `/user/${id}`,
      {},
      {
        headers: {
          token,
        },
      },
    );
    return { user: data.user };
  } catch (error) {
    throw new Error(error);
  }
}
