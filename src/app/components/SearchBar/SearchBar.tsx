import React, { useEffect, useState } from 'react';
import styles from './SearchBar.module.css';
import SearchIcon from '@mui/icons-material/Search';

type SearchBarProps = {
  onSearch: (value: string) => void;
};

function SearchBar({ onSearch }: SearchBarProps) {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (value.length === 0) {
      return;
    }

    const timeoutId = setTimeout(() => {
      onSearch(value);
    }, 300);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value]);

  return (
    <div className={styles.search}>
      <div className={styles.searchInputs}>
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Enter document name"
        />
        <SearchIcon />
      </div>
    </div>
  );
}
export default SearchBar;
