import { getUsersWithHighestScores } from "../api/userAPI";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import ScoresBoard from "../components/ScoresBoard";

const LeaderBoard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const {data} = await getUsersWithHighestScores()
        setUsers(data);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="p-1 flex flex-col gap-2">
      <Navbar />
      <ScoresBoard users={users}/>
    </div>
  );
};

export default LeaderBoard;
