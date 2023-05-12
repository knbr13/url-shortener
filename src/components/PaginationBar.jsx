const PaginationBar = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <button
        key={i}
        onClick={() => onPageChange(i)}
        className={
          i == currentPage
            ? "bg-gray-300 underline hover:bg-gray-400"
            : "bg-gray-300 hover:bg-gray-400"
        }
      >
        {i}
      </button>
    );
  }
  return (
    <div className="flex flex-wrap gap-4 text-xs md:text-base rounded-lg bg-gray-300 px-4 w-fit self-center text-slate-800">
      {pages}
    </div>
  );
};

export default PaginationBar;
