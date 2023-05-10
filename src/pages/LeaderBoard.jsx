import { getUsersWithHighestScores } from "../api/userAPI";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import ScoresBoard from "../components/ScoresBoard";

const LeaderBoard = () => {
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [scoreField, setScoreField] = useState("flipsScore");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await getUsersWithHighestScores();
        setUsers(data.users);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);
  const onPageChange = async (num) => {
    setCurrentPage(num);
    try {
      const { data } = await getUsersWithHighestScores({
        pageNumber: num,
        scoreField,
      });
      console.log(data)
      setUsers(data.users);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-1 flex flex-col gap-2">
      <Navbar />
      <ScoresBoard users={users} totalPages={totalPages} onPageChange={onPageChange}/>
    </div>
  );
};

export default LeaderBoard;
