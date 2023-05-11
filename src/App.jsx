import { useState, useEffect, useContext } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Game from "./pages/Game";
import { addUser } from "./api/userAPI";
import LeaderBoard from "./pages/LeaderBoard";
import {
  generateDateAfterSeconds,
  reloadIfTokenIsNoLongerValid,
} from "./utils/validateToken";
import { UserContext } from "./context/userContext";

function App() {
  const [user, setUser] = useState(
    localStorage.getItem("userAuth")
      ? JSON.parse(localStorage.getItem("userAuth"))
      : null
  );
  const userCreds = useContext(UserContext);
  console.log(userCreds);
  const [profile, setProfile] = useState(null);
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse);
      localStorage.setItem("userAuth", JSON.stringify(codeResponse));
      localStorage.setItem(
        "expiryDate",
        JSON.stringify(generateDateAfterSeconds(codeResponse.expires_in))
      );
    },
    onError: (error) => alert("Login Failed:", error),
  });

  useEffect(() => {
    reloadIfTokenIsNoLongerValid();
  }, []);

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  useEffect(() => {
    const addMe = async () => {
      try {
        const { data } = await addUser(profile);
        localStorage.setItem("userCreds", JSON.stringify(data));
        userCreds.setUser(data);
      } catch (error) {
        console.log(error)
      }
    };
    if (profile) addMe();
  }, [profile]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              profile ? <Navigate to={"/game"} /> : <Home login={login} />
            }
          />
          <Route
            path="/game"
            element={profile ? <Game /> : <Navigate to={"/"} />}
          />
          <Route
            path="/leaderboard"
            element={profile ? <LeaderBoard /> : <Navigate to={"/"} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
