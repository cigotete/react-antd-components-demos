import { useState } from 'react';
import { Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export const DemoInput = () => {

  const [inputText, setInputText] = useState('');
  const [buttonText, setButtonText] = useState('Botón campo texto');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleButtonClick = () => {
    setButtonText(inputText);
  };

  return (
    <>
      <Input
        placeholder="Escribe un texto"
        value={inputText}
        onChange={handleInputChange}
        prefix={<UserOutlined />}
        allowClear
      />
      <Button
      type="primary"
      onClick={handleButtonClick}>
        {buttonText}
      </Button>
    </>
  );
};