const PaginationBar = ({ currentPage, totalPages, onPageChange }) => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={i === currentPage ? "rounded underline m-1" : "bg-gray-100"}
        >
          {i}
        </button>
      );
    }
    return (
      <div className="flex flex-wrap gap-4 text-xs md:text-base rounded-lg px-4 w-fit self-center text-slate-800 bg-slate-100">
        {pages}
      </div>
    );
  };
  
  export default PaginationBar;
  