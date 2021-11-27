import React, { useState } from "react";
import { Alert } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const AlertComp = ({counter, username, rename}) => {

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  }

  const changeName = () => {
    rename('joby')
  }
  console.log('---buildTime---', process.env.buildTime, process.env.paths)

  return (
    <div>
      <section className={'code-box'}>
        <section className={'code-box-demo'}>
          <div className="dsky-comp-wrapper dsky-alert-wrapper">
            <Alert message="查询结果过多，只展示Top2500，可通过下载按钮下载所有数据或限制筛选条件缩小查询范围" type="info" showIcon />
            <Alert message="查询结果过多，只展示Top2500，可通过下载按钮下载所有数据或限制筛选条件缩小查询范围" type="success" showIcon />
            <Alert message="查询结果过多，只展示Top2500，可通过下载按钮下载所有数据或限制筛选条件缩小查询范围" type="warning" showIcon />
            <Alert message="查询结果过多，只展示Top2500，可通过下载按钮下载所有数据或限制筛选条件缩小查询范围" type="error" showIcon />
          </div>
        </section>
      </section>
    </div>
  );
}

export default AlertComp