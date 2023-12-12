import React, { FC } from 'react';
import styles from './SearchResultItem.module.css';
import { Card } from 'antd';

interface SearchResultItemProps {itemDetails: any}

const SearchResultItem: FC<SearchResultItemProps> = ({itemDetails}) => (
  <Card title={itemDetails.title} bordered={true} id={itemDetails.id}>
    <span>Id: {itemDetails.id}</span>
  </Card>
);

export default SearchResultItem;
