import React, { useState } from "react";
import { TreeSelect  } from 'antd';
const { SHOW_PARENT } = TreeSelect;

const SelectComp = ({counter, username, rename}) => {
  const [value, setValue] = useState(['0-0-0']);

  const treeData = [
    {
      title: 'Node1',
      value: '0-0',
      key: '0-0',
      children: [
        {
          title: 'Child Node1',
          value: '0-0-0',
          key: '0-0-0',
        },
      ],
    },
    {
      title: 'Node2',
      value: '0-1',
      key: '0-1',
      children: [
        {
          title: 'Child Node3',
          value: '0-1-0',
          key: '0-1-0',
        },
        {
          title: 'Child Node4',
          value: '0-1-1',
          key: '0-1-1',
        },
        {
          title: 'Child Node5',
          value: '0-1-2',
          key: '0-1-2',
        },
      ],
    },
  ];

  const onChange = value => {
    console.log('onChange ', value);
    setValue(value);
  };

  const tProps = {
    treeData,
    value: value,
    onChange: onChange,
    // showSearch: true,
    treeCheckable: true,
    treeDefaultExpandAll: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: 'Please select',
    style: {
      width: '384px',
    },
  };

  return (
    <div>
      <section className={'code-box'}>
        <section className={'code-box-demo'}>
          <div className="dsky-comp-wrapper">
            <TreeSelect {...tProps} />
          </div>
        </section>
      </section>
    </div>
  );
}

export default SelectComp