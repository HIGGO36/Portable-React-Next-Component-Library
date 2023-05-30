import React from 'react';
import SearchMenu from './SearchMenu';

interface SearchMenuWrapperProps {
  onSearch: (term: string) => void;
}

const SearchMenuWrapper: React.FC<SearchMenuWrapperProps> = ({ onSearch }) => {
  return (
    <div>
      <SearchMenu onSearch={onSearch} />
    </div>
  );
};

export default SearchMenuWrapper;
