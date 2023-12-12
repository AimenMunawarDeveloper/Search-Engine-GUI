import React, { FC } from 'react';
import styles from './SearchResult.module.css';

interface SearchResultProps {}

const SearchResult: FC<SearchResultProps> = () => (
  <div className={styles.SearchResult} data-testid="SearchResult">
    SearchResult Component
  </div>
);

export default SearchResult;
