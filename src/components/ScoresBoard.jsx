import { useState } from "react";
import PaginationBar from "./PaginationBar";
import Score from "./Score";

const ScoresBoard = ({ users, totalPages, onPageChange, currentPage }) => {

    return (
    <div className="flex flex-col gap-2 m-auto w-11/12 text-center md:w-9/12 lg:w-7/12 rounded-lg p-1 bg-gray-300 bg-opacity-50">
      <div className="flex justify-around items-center border-b border-gray-800">
        <p className="text-sm md:text-lg text-gray-800">Picture</p>
        <p className="text-sm md:text-lg text-gray-800">name + email</p>
        <p className="text-sm md:text-lg text-gray-800">nb of flips</p>
      </div>
      {users?.map((user, index) => {
        return <Score key={index} user={user} index={index} />;
      })}
      {totalPages > 1 && <PaginationBar onPageChange={onPageChange} totalPages={totalPages} currentPage={currentPage}/>}
    </div>
  );
};

export default ScoresBoard;
