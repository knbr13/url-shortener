import axios from "axios";

const userAPI = axios.create({ baseURL: "http://localhost:4000/user" });

export const addUser = (data) => userAPI.post("/", data);
export const updateScore = (data) => userAPI.put("/score", data);
export const getUsersWithHighestScores = (data) =>
  userAPI.get("/", { params: { ...data } });
export const getUserRank = (data) =>
  userAPI.get("/rank", {
    params: { ...data },
  });
