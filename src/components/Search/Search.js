import "./Search.css";

export const Search = ({ searchParams, setSearchParams }) => {
  const term = searchParams.get("term");

  return (
    <div className="search">
      <input
        placeholder="Search..."
        value={term || ""}
        onChange={(e) => setSearchParams({ term: e.target.value })}
      />
    </div>
  );
};
