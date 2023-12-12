import React, { FC, useState } from 'react';
import styles from './SearchForm.module.css';
import SearchInput from "../SearchInput/SearchInput.tsx";
import SearchResultItem from "../SearchResultItem/SearchResultItem.tsx";
import { Button, Form, Input, message, Space } from 'antd';
import { Flex, Radio } from 'antd';

interface SearchFormProps {}

const SearchForm: FC<SearchFormProps> = () => { 
  const [form] = Form.useForm();
  const [searchResult, setSearchResult] = useState([]);
  const callSearchAPI= (query)=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setSearchResult(json))
  }
  const onFinish = (props) => {
    callSearchAPI(props);
  };

  const onChange = (props) => {
    callSearchAPI(props.target.value);
  };

  const onFinishFailed = () => {
    message.error('Submit failed!');
  };

  return (
    <Form
      onChange={onChange}
      form={form}
      layout="vertical"
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
     <SearchInput 
      onFinish={onFinish}
     />
       <Flex gap="middle" vertical>
     {searchResult?.map((itemDetails: any, index) => (<SearchResultItem itemDetails={{...itemDetails, id: index}} />))} 
       </Flex>
    </Form>
  );
};

export default SearchForm;
