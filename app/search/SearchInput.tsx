import { useState } from "react";
import { useRouter } from "next/router";

const SearchInput = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    router.push(`/search?name=${query}`);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for Pokémon"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchInput;
