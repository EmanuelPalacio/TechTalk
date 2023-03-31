import axios from "axios";
import { LOCAL_HOST } from "@env";

const URL =
  process.env.NODE_ENV === "development" ? LOCAL_HOST : process.env.PORT;

export const TechTalkApi = axios.create({
  baseURL: URL,
});
