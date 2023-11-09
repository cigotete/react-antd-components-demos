import { useState } from 'react';
import { Button } from 'antd';
import { VerticalAlignBottomOutlined } from '@ant-design/icons';
import axios from 'axios';

export const DemoButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [quote, setQuote] = useState('');

  const handleClick = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get('https://api.breakingbadquotes.xyz/v1/quotes');
      const { data } = response;
      console.log('data:', data);
      setQuote(data[0]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button
      type="primary"
      loading={isLoading}
      onClick={handleClick}
      icon={<VerticalAlignBottomOutlined />}
      >
        {isLoading ? 'Cargando...' : 'Obtener Cita'}
      </Button>
      { quote.quote && <p>{quote.quote}</p> }
      { quote.author && <p>{quote.author}</p> }
    </>
  );
}