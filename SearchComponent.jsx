import { useNavigate } from 'react-router-dom';

const SearchComponent = () => {
  const navigate = useNavigate();

  // Function to handle the search query
  const handleSearch = (event) => {
    const query = event.target.value;
    if (query) {
      navigate(`/recipes/search?query=${query}`);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for recipes"
        onChange={handleSearch} // Trigger search on text change
      />
    </div>
  );
};

export default SearchComponent;
