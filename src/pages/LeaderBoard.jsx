import { getUsersWithHighestScores } from "../api/userAPI";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import ScoresBoard from "../components/ScoresBoard";
import SortScores from "../components/SortScores";

const LeaderBoard = () => {
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [scoreField, setScoreField] = useState("flipsScore");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await getUsersWithHighestScores();
        setUsers(data.users);
        setTotalPages(data.totalPages);
      } catch (error) {}
    };
    fetchUsers();
  }, []);
  useEffect(() => {
    setLoading(true);
    const fetchUsers = async () => {
      setCurrentPage(1);
      try {
        const { data } = await getUsersWithHighestScores({ scoreField });
        setUsers(data.users);
        setTotalPages(data.totalPages);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [scoreField]);
  const onPageChange = async (num) => {
    setCurrentPage(num);
    try {
      const { data } = await getUsersWithHighestScores({
        pageNumber: num,
        scoreField,
      });
      setUsers(data.users);
    } catch (error) {}
  };
  return (
    <div className="p-1 flex flex-col gap-2">
      <Navbar />
      <SortScores
        scoreField={scoreField}
        setScoreField={setScoreField}
        loading={loading}
      />
      <ScoresBoard
        users={users}
        totalPages={totalPages}
        onPageChange={onPageChange}
        scoreField={scoreField}
        setScoreField={setScoreField}
        currentPage={currentPage}
      />
    </div>
  );
};

export default LeaderBoard;
