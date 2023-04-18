import TechTalkApi from './apiConfig.js';

const getActivity = async (activity) => {
  try {
    const { data } = await TechTalkApi.get(`/activities/${activity}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export default getActivity;
