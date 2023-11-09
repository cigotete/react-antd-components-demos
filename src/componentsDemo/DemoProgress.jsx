import React from 'react';
import { Progress } from 'antd';

export const DemoProgress = () => {
  return (
    <div>
      <Progress percent={30} />
      {/* <Progress percent={30} strokeWidth={ 50 }/> */} {/* strokeWidth deprecated */}
      <Progress percent={50} status="active" />
      <Progress percent={70} status="exception" />
      <Progress percent={100} />
      <Progress percent={50} showInfo={false} />
      <Progress type="circle" percent={75} />
      <Progress type="circle" percent={70} status="exception" />
      <Progress type="circle" percent={100} />
      <Progress type="dashboard" percent={75} />
      <Progress type="dashboard" percent={70} status="exception" />
      <Progress type="dashboard" percent={100} />
    </div>
  );
};
