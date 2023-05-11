import { useContext } from "react";
import { UserContext } from "../context/userContext";

const UserProfile = () => {
  const userCreds = useContext(UserContext);
  return (
    <div className="bg-gray-300 bg-opacity-80 rounded-2xl p-1 cursor-pointer">
      <img src={userCreds.user.picture} className="rounded-full w-10 md:w-12" />
    </div>
  );
};

export default UserProfile;
