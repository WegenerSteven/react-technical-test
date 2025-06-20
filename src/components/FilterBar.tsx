type FilterBarProps = {
  filters: string[];
  removeFilter: (filter: string) => void;
  clearFilters: () => void;
};

export default function FilterBar({
  filters,
  removeFilter,
  clearFilters,
}: FilterBarProps) {
  return (
    <div className="bg-white shadow-md rounded-md px-6 py-4 flex flex-wrap items-center justify-between mx-4 -mt-20 relative z-10 gap-4">
      <div className="flex flex-wrap gap-4">
        {filters.map((filter, idx) => (
          <div
            key={idx}
            className="flex items-center bg-cyan-100 rounded overflow-hidden"
          >
            <span className="px-3 py-1 text-cyan-700 font-bold text-sm">
              {filter}
            </span>
            <button
              className="bg-cyan-700 hover:bg-black text-white px-2 h-full"
              onClick={() => removeFilter(filter)}
            >
              ✕
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={clearFilters}
        className="text-cyan-700 font-bold text-sm hover:underline"
      >
        Clear
      </button>
    </div>
  );
}
