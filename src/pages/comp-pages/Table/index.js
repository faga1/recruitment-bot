import React, { useState } from "react";
import { Table } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

export default function SwitchComp() {

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  }

  const columns = [
    {
      title: '归属日期',
      dataIndex: 'ascriptionDate'
    },
    {
      title: '归属数量',
      className: 'column-money',
      dataIndex: 'ascriptionCount',
    },
    {
      title: '归属状态',
      dataIndex: 'ascriptionStatus',
    },
    {
      title: '审核信息',
      dataIndex: 'ascriptionInfo',
    },
    {
      title: '审核时间',
      dataIndex: 'auditTime',
    },
    {
      title: '审核备注',
      dataIndex: 'auditRemark',
    },
    {
      title: '操作',
      dataIndex: 'auditRemark',
      render: text => <a>编辑</a>,
    },
  ];
  
  const data = [
    {
      key: '1',
      ascriptionDate: '2020-02-05',
      ascriptionCount: '95428',
      ascriptionStatus: '16427',
      ascriptionInfo: '16427',
      auditTime: '16427',
      auditRemark: '16427'
    },
    {
      key: '2',
      ascriptionDate: '2020-02-05',
      ascriptionCount: '95428',
      ascriptionStatus: '16427',
      ascriptionInfo: '16427',
      auditTime: '16427',
      auditRemark: '16427'
    },
    {
      key: '3',
      ascriptionDate: '2020-02-05',
      ascriptionCount: '95428',
      ascriptionStatus: '16427',
      ascriptionInfo: '16427',
      auditTime: '16427',
      auditRemark: '16427'
    },
  ];

  return (
    <div>
      <h2>Table 表格</h2>
      <section className={'code-box'}>
        <section className={'code-box-demo'}>
          <div className={'dsky-table-wrapper'}>
          <Table
            columns={columns}
            dataSource={data}
            bordered
            pagination={false}
          />
          </div>
        </section>
      </section>
    </div>
  );
}
