import React, { useState } from "react";
import { Radio } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const AlertComp = ({counter, username, rename}) => {

  const onChange = (checked) => {
    console.log(`switch to `, checked);
  }

  return (
    <div>
      <h2>Radio 单选框</h2>
      <section className={'code-box'}>
        <section className={'code-box-demo'}>
          <div className="dsky-comp-wrapper">
            <div>
              <Radio.Group onChange={onChange} defaultValue="a">
                <Radio.Button value="a">Hangzhou</Radio.Button>
                <Radio.Button value="b">Shanghai</Radio.Button>
                <Radio.Button value="c">Beijing</Radio.Button>
                <Radio.Button value="d">Chengdu</Radio.Button>
              </Radio.Group>
            </div>
            <div>
              <Radio.Group onChange={onChange} defaultValue="a" style={{ marginTop: 16 }}>
                <Radio.Button value="a">Hangzhou</Radio.Button>
                <Radio.Button value="b" disabled>
                  Shanghai
                </Radio.Button>
                <Radio.Button value="c">Beijing</Radio.Button>
                <Radio.Button value="d">Chengdu</Radio.Button>
              </Radio.Group>
            </div>
            <div>
              <Radio.Group disabled onChange={onChange} defaultValue="a" style={{ marginTop: 16 }}>
                <Radio.Button value="a">Hangzhou</Radio.Button>
                <Radio.Button value="b">Shanghai</Radio.Button>
                <Radio.Button value="c">Beijing</Radio.Button>
                <Radio.Button value="d">Chengdu</Radio.Button>
              </Radio.Group>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default AlertComp