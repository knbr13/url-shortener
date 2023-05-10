import React from "react";

const WinPopup = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75"
      onClick={onClose}
    >
      <div
        className="bg-gray-200 rounded-lg p-8 flex items-center flex-col text-gray-900"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
        <p className="text-lg mb-6">You have won the game!</p>
        <button
          className="text-white font-bold w-fit py-2 px-4 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default WinPopup;
