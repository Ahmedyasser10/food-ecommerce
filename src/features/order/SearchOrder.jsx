import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [quary, setQuery] = useState('');
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!quary) return;
    navigate(`/order/${quary}`);
    setQuery('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search ordr#"
        value={quary}
        onChange={(e) => setQuery(e.target.value)}
        className="w-28 rounded-full bg-yellow-100 px-4 py-3 text-sm transition-all duration-300 placeholder:text-stone-400 focus:right-2 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}

export default SearchOrder;
