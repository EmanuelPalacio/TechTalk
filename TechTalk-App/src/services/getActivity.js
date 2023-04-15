import TechTalkApi from './apiConfig.js';

const getActivity = async (activity) => {
  try {
    return await TechTalkApi.get(`/activities/${activity}`);
  } catch (error) {
    console.log(error);
  }
};
export default getActivity;
