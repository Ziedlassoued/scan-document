import React, { FormEvent } from 'react';
import styles from './SearchBar.module.css';
import SearchIcon from '@mui/icons-material/Search';

type SearchBarProps = {
  placeholder: string;
};

function SearchBar({ placeholder }: SearchBarProps) {
  const handleChange = (event: FormEvent) => {
    event.preventDefault();
  };
  return (
    <div className={styles.search}>
      <div className={styles.searchInputs}>
        <input type="text" placeholder={placeholder} onChange={handleChange} />
        <div className={styles.searchIcon}>
          <SearchIcon />
        </div>
      </div>
      <div className={styles.results}></div>
    </div>
  );
}
export default SearchBar;
