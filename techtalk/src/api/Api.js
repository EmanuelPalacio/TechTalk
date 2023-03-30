import axios from "axios"


// const URL =
//   process.env.NODE_ENV === 'development'
//     ? LOCAL_HOST
//     : process.env.PORT; 

export const TechTalkApi = axios.create({
    baseURL:'http://192.168.1.7:9000/api'
})