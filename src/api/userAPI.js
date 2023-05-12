import axios from "axios";

const userAPI = axios.create({ baseURL: `${import.meta.env.VITE_SERVER_ENDPOINT}/user` });

export const addUser = (data) => userAPI.post("/", data);
export const updateScore = (data) => userAPI.put("/score", data);
export const getUsersWithHighestScores = (data) =>
  userAPI.get("/", { params: { ...data } });
export const getUserRank = (data) =>
  userAPI.get("/rank", {
    params: { ...data },
  });
