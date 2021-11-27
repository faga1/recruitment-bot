import React, { useState } from "react";
import { Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Option } = Select;

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
            <Select defaultValue="value1" style={{ width: 180 }}>
              <Option value="value1">金币</Option>
              <Option value="value2">内容一</Option>
              <Option value="value3" disabled>
                内容二
              </Option>
              <Option value="value4">内容划过态</Option>
              <Option value="value5">内容四</Option>
            </Select>
          </div>
          <div className="dsky-comp-wrapper"  style={{ marginTop: '8px' }}>
            <Select
              mode="multiple"
              style={{ width: '384px' }}
              placeholder="Please select"
              defaultValue={['a10', 'c12']}
              onChange={handleChange}
            >
              {children}
            </Select>
          </div>
        </section>
      </section>
    </div>
  );
}

export default SelectComp