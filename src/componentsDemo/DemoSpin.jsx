import React, { useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin, Button } from 'antd';

export const DemoSpin = () => {

  const [spinShow, setSpinShow] = useState(false);

  return (
    <>
      <Button
      onClick={() => setSpinShow(!spinShow)}>
        Toggle Spin
      </Button>

      <Spin
      size="large"
      spinning={ spinShow } />

      <Spin
      indicator={
      <LoadingOutlined
        style={{
          fontSize: 24,
        }}
        spin
          />
        }
        spinning={ spinShow } 
      />
      <br />
      <br />
      <Spin spinning={ spinShow } >
        <div>
        { !spinShow
        ? "This is a content loaded"
        : "This is a content that is being loaded..."
        }
        </div>
      </Spin>

    </>
  )
};