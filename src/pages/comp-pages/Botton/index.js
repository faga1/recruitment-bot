import React, { useState } from "react";
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const BottonComp = ({counter, username, rename}) => {

  return (
    <div>
      <h2>Button 按钮</h2>
      <div>
        <p>Count: {counter}</p>
        <p>username: {username}</p>
      </div>
      <section className={'code-box'}>
        <section className={'code-box-demo'}>
          <div className={'dsky-button-wrapper'}>
            <Button type="primary" icon={<PlusOutlined />}>新增</Button>
            &nbsp;
            <Button>新增批量</Button>&nbsp;
            <Button>下载</Button>&nbsp;
            <Button >刷新</Button>&nbsp;
          </div>
        </section>
      </section>
    </div>
  );
}

export default BottonComp