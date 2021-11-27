import React, { useState } from "react";
import { Switch } from 'antd';

export default function SwitchComp() {

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  }

  return (
    <div>
      <h2>Switch 开关</h2>
      <section className={'code-box'}>
        <section className={'code-box-demo'}>
          <div className={'dsky-switch-wrapper'}>
            <Switch defaultChecked onChange={onChange} />
          </div>
        </section>
      </section>
    </div>
  );
}
