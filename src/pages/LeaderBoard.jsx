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
      setUsers(data.users);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-1 flex flex-col gap-2">
      <Navbar />
      <div className="w-11/12 text-center md:w-9/12 lg:w-7/12 flex m-auto justify-around bg-gray-300 bg-opacity-50 rounded-lg">
        <p className="text-gray-800 p-2 hover:bg-gray-300 rounded-lg cursor-pointer">Flips Score</p>
        <p className="text-gray-800 p-2 hover:bg-gray-300 rounded-lg cursor-pointer">Time Score</p>
      </div>
      <ScoresBoard
        users={users}
        totalPages={totalPages}
        onPageChange={onPageChange}
        scoreField={scoreField}
        setScoreField={setScoreField}
      />
    </div>
  );
};

export default LeaderBoard;
