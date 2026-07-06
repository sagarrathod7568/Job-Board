import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="bg-white rounded-xl shadow-xl p-4 flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">

      <input
        type="text"
        placeholder="Search by job title, company..."
        className="flex-1 border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
      />

      <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg flex items-center justify-center gap-2 transition">
        <FiSearch />
        Search
      </button>

    </div>
  );
};

export default SearchBar;