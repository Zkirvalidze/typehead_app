import React from 'react';
import { useStateContext } from '../../context/StateContextProvider';
import styles from './SearchBar.module.css';
export default function SearchBar() {
  const { searchTerm, setSearchTerm } = useStateContext();

  return (
    <input
      autoFocus
      type="text"
      className={styles.searchBar}
      value={searchTerm}
      placeholder="Search User"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}
