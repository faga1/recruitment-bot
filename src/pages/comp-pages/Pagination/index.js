import React, { useState } from "react";
import { Pagination } from 'antd';

function PaginationComp() {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);

  const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  }

  return (
    <div>
      <h2>Pagination分页</h2>
      {/* <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button> */}
      <section className={'code-box'}>
        <section className={'code-box-demo'}>
          <div className={'dsky-pagination-wrapper'}>
            <Pagination
              onShowSizeChange={onShowSizeChange}
              showSizeChanger
              showQuickJumper
              showTotal={total => `共${total}条`}
              // showTotal
              defaultCurrent={3}
              total={500}
            />
          </div>
        </section>
      </section>
    </div>
  );
}

export default PaginationComp