import React, { FC } from 'react';
import { Button, Input, Space, message } from 'antd';
import { SearchProps } from 'antd/es/input/Search';
import Upload from 'antd/es/upload/Upload';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';

const UploadFileInput: FC = () => {
  const sendFileContentAPI = (query) => {
    fetch('http://127.0.0.1:8000/api/search-api/', {
      method: "POST",
      body: JSON.stringify({ query }),
    })
      .then(response => response.json())
      .then(json => console.log('file send content response', json))
      .catch(error => console.error('Error fetching search API:', error));
  }
  const props: UploadProps = {
    name: 'file',
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') 
      {
        console.log("File uploaded Information",info);
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return(
  <div data-testid="SearchInput">
      <Upload {...props}>
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
  </div>
  );
};

export default UploadFileInput;
