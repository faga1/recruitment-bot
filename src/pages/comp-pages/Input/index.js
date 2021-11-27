import React, { useState } from "react";
import { Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Search } = Input;
const { Option } = Search;

const SelectComp = ({counter, username, rename}) => {
  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
  }

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <div>
      <section className={'code-box'}>
        <section className={'code-box-demo'}>
          <div className="dsky-comp-wrapper">
            <div style={{width: '300px'}}>
              <Input placeholder="Basic usage" />
            </div>
          </div>
          <div className="dsky-comp-wrapper"  style={{ marginTop: '8px' }}>
            <div style={{width: '300px'}}>
              <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default SelectComp