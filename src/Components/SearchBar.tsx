import { Search } from 'lucide-react'
import { useState, useEffect, useRef } from 'react';

const SearchBar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShowSearch(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="flex items-center gap-2">
      {showSearch && (
        <input
          type="text"
          placeholder="Search movies..."
          className="px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      )}
      <button
        className="text-white hover:text-gray-300"
        onClick={() => setShowSearch(!showSearch)}
      >
        <Search />
      </button>
    </div>
  );
}

export default SearchBar