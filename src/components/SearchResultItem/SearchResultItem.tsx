import React, { FC } from 'react';
import styles from './SearchResultItem.module.css';
import { Card } from 'antd';

interface SearchResultItemProps {itemDetails: any}

const SearchResultItem: FC<SearchResultItemProps> = ({itemDetails}) => (
  <Card bordered={true} id={itemDetails.id}>
    <a href={itemDetails.url} target="_blank" rel="noopener noreferrer">{itemDetails.url}</a>
    <iframe src={itemDetails.url} title={itemDetails.url} style={{width: '100%', height: '300px'}}></iframe>
  </Card>
);

export default SearchResultItem;
