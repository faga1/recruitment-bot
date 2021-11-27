import React, { useState } from "react";
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

export default function SwitchComp() {

  return (
    <div>
      <h2>DatePicker 日期选择框</h2>
      <section className={'code-box'}>
        <section className={'code-box-demo'}>
          <div className={'dsky-comp-wrapper'}>
            <DatePicker />
          </div>
          <div className={'dsky-comp-wrapper'} style={{ marginTop: '8px' }}>
            <RangePicker />
          </div>
        </section>
      </section>
    </div>
  );
}
