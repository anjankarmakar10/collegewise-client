const SearchInput = () => {
  return (
    <form className="flex flex-col md:flex-row items-center  gap-2">
      <input
        type="text"
        placeholder="Search here"
        className="input bg-white input-bordered w-full text-black max-w-xs"
      />
      <button className="bg-green-500 text-white button">Search</button>
    </form>
  );
};
export default SearchInput;
