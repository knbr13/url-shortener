import axios from "axios";

const userAPI = axios.create({ baseURL: "https://worrisome-fox-tank-top.cyclic.app/user" });

export const addUser = (data) => userAPI.post("/", data);
export const updateScore = (data) => userAPI.put("/score", data);
export const getUsersWithHighestScores = (data) =>
  userAPI.get("/", { params: { ...data } });
export const getUserRank = (data) =>
  userAPI.get("/rank", {
    params: { ...data },
  });
