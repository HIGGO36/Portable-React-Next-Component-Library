import React, { useState, CSSProperties, useRef, useEffect } from 'react';
import styles from '../styles/SearchMenu.module.scss';

interface SearchMenuProps {
  onSearch: (term: string) => void;
  style?: CSSProperties;
}

const SearchMenu: React.FC<SearchMenuProps> = ({ onSearch, style }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [focus, setFocus] = useState(false);
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value.toLowerCase());
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Tab' && document.activeElement === searchRef.current) {
      setFocus(true);
    } else {
      setFocus(false);
    }
  };

  const baseStyle: CSSProperties = {
    background: '#E0E4E5',
    border: '2px solid #9EA92C',
    padding: '5px',
    margin: '8px auto',
    cursor: 'pointer',
  };

  const hoverAndFocusStyle: CSSProperties = {
    ...baseStyle,
    background: '#E9F3F7',
    border: '2px solid #254C5C',
  };

  return (
    <div
      className={styles.searchContainer}
      style={focus || hover || active ? hoverAndFocusStyle : baseStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
    >
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        ref={searchRef}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </div>
  );
};

export default SearchMenu;
