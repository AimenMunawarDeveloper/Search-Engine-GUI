import React, { FC } from 'react';
import styles from './SearchInput.module.css';
import { Input, Space } from 'antd';
import { SearchProps } from 'antd/es/input/Search';

const { Search } = Input;
interface SearchInputProps {onFinish: (value: any)=>any}

const SearchInput: FC<SearchInputProps> = ({onFinish}) => {
  const onSearch: SearchProps['onSearch'] = (value, _e) => {
    console.log(value);
    onFinish(value)};
  return(
  <div className={styles.SearchInput} data-testid="SearchInput">
      <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      onSearch={onSearch}
     />
  </div>
  );
};

export default SearchInput;
