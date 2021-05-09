const Search = ({ setSearch }) => {
  const change = (e) => setSearch(e.target.name);
  return (
    <div>
      <input type="text" onChange={(e) => change(e)} />
    </div>
  );
};

export default Search;
