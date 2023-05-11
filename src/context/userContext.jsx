import { createContext, useState } from "react";
export const UserContext = createContext();

const UserContextWrapper = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem("userCreds")
      ? JSON.parse(localStorage.getItem("userCreds"))
      : null
  );
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextWrapper;
