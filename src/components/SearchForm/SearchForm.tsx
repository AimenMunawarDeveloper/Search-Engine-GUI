import React, { FC, useState } from 'react';
import SearchInput from "../SearchInput/SearchInput.tsx";
import SearchResultItem from "../SearchResultItem/SearchResultItem.tsx";
import { Form, message, Row, Col, Space, Typography } from 'antd'; // Import Row and Col from Ant Design
import { Flex } from 'antd';
import '../../App.css';
import UploadFileInput from '../UploadFile/UploadFile.tsx';

interface SearchFormProps { }
const { Text, Link } = Typography;
const SearchForm: FC<SearchFormProps> = () => {
  const [form] = Form.useForm();
  const [searchResult, setSearchResult] = useState([]);

  const callSearchAPI = (query) => {
    fetch('http://127.0.0.1:8000/api/search-api/', {
      method: "POST",
      body: JSON.stringify({ query }),
    })
      .then(response => response.json())
      .then(json => setSearchResult(json))
      .catch(error => console.error('Error fetching search API:', error));
  }

  const onFinish = (props) => {
    callSearchAPI(props);
  };


  const onChange = () => {
    // Handle change if needed
  };

  const onFinishFailed = () => {
    message.error('Submit failed!');
  };

  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex', width: '100%' }}>
    <Form
      className="SearchForm"
      onChange={onChange}
      form={form}
      layout="vertical"
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Row justify="center"> {/* Center the form items using Row */}
        <Space direction="vertical" size="middle">
          <Typography level={3}>
            <Text type="warning">
              Search Anything
            </Text>
          </Typography>
          <SearchInput onFinish={onFinish} />
          <Typography level={3}>
            <Text type="warning">
              Upload Custom File (.json)
            </Text>
          </Typography>
          <UploadFileInput/>
        </Space>
      </Row>
    </Form>
      <Flex gap="middle" vertical style={{height: '1000px', overflowY: 'scroll', padding:'20px'}}>
      {Array.isArray(searchResult) && searchResult?.length>0 &&
      <Typography level={1}>
            <Text type="warning">
              Search Result are
            </Text>
          </Typography>}
      {Array.isArray(searchResult) && searchResult.map((url: any, index) => (
        <SearchResultItem key={index} itemDetails={{ url, id: index }} />
      ))}
    </Flex>
    </Space>
  );
};

export default SearchForm;