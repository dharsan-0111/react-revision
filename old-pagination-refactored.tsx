import { useMemo, useState } from "react";

export default function App() {
  const data = useMemo(() => {
    const arr = [];
    for (let i = 1; i <= 100; i++) {
      arr.push(`Item ${i}`);
    }
    return arr;
  }, []);

  const ITEMS_PER_PAGE = 10;
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const [currentPage, setCurrentPage] = useState(0);

  // Compute data based on current page instead of storing in state
  const dataAsPerPage = data.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const handlePrev = () => {
    if (currentPage === 0) return;
    setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage >= totalPages - 1) return;
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <>
      {dataAsPerPage?.map((item) => (
        <p key={item}>{item}</p>
      ))}
      <div className="flex gap-4 justify-center py-4">
        <button disabled={currentPage === 0} onClick={handlePrev}>
          Prev
        </button>
        <div className="flex gap-2">
          {[...Array(totalPages).keys()].map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => setCurrentPage(pageNum)}
              className={currentPage === pageNum ? "font-bold underline" : ""}
            >
              {pageNum + 1}
            </button>
          ))}
        </div>
        <button disabled={currentPage >= totalPages - 1} onClick={handleNext}>
          Next
        </button>
      </div>
    </>
  );
}
