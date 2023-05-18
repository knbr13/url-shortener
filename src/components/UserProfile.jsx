import { useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import { googleLogout } from "@react-oauth/google";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const [userProfilePopup, setUserProfilePopup] = useState(false);
  const userCreds = useContext(UserContext);
  const handleLogout = () => {
    googleLogout();
    localStorage.removeItem("expiryDate");
    localStorage.removeItem("userAuth");
    localStorage.removeItem("userCreds");
    location.reload();
  };
  if (userCreds.user) {
    return (
      <div
        className="bg-gray-300 bg-opacity-80 rounded-2xl p-1 cursor-pointer"
        onClick={() => setUserProfilePopup(true)}
      >
        {userCreds.user?.picture && (
          <img
            src={userCreds.user.picture}
            className="rounded-full w-10 md:w-12"
          />
        )}
        {userProfilePopup && (
          <div className="absolute top-20 gap-2 items-center z-10 bg-gray-300 bg-opacity-95 p-2 rounded-lg left-[20%] sm:left-[42%] flex flex-col">
            <p
              className="hover:bg-gray-500 px-1 rounded-lg self-end"
              onClick={(e) => {
                e.stopPropagation();
                setUserProfilePopup(false);
              }}
            >
              X
            </p>
            <img className="rounded-full" src={userCreds.user?.picture ?? ""} />
            <p className="text-gray-800">{userCreds.user.name}</p>
            <p className="text-gray-600">{userCreds.user.email}</p>
            {userCreds.user.timeScore && (
              <p className="text-gray-800">Best Score: </p>
            )}
            <div className="flex w-7/12 m-auto justify-between">
              {userCreds.user.flipsScore && (
                <p className="text-gray-800">
                  {userCreds.user.flipsScore}{" "}
                  <span className="text-xs">flips</span>
                </p>
              )}
              {userCreds.user.timeScore && (
                <p className="text-gray-800">
                  {userCreds.user.timeScore}{" "}
                  <span className="text-xs">sec</span>
                </p>
              )}
            </div>
            <button onClick={handleLogout}>logout</button>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <Link to={"/"}>
        <button className="bg-opacity-80 rounded-md text-sm md:text-base p-1 cursor-pointer text-white">
          Login
        </button>
      </Link>
    );
  }
};

export default UserProfile;
