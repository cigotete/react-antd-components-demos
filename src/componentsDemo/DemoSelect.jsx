import { Select } from 'antd';

export const DemoSelect = () => {

  const numbers = [
    'Falcon',
    'Cheetah',
    'Springbok',
    'Turtle',
    'Turtle in a rocket',
  ];

  const musicalInstruments = [
    'Guitar',
    'Piano',
    'Drums',
    'Violin',
    'Trumpet',
  ];
  
  return (
    <>
      Which is the speedest animal?
      <Select
        placeholder="Select an animal"
        style={{ width: '120px' }}
      >
        {
          numbers.map((animal, index) => (
            <Select.Option
            key={index}
            value={index}>{animal}
            </Select.Option>
          ))
        }
      </Select>
      <br />
      Which are your favorite musical instruments?
      <Select
        mode="multiple"
        placeholder="Select an instrument"
        style={{ width: '120px' }}
      >
        {
          musicalInstruments.map((instrument, index) => (
            <Select.Option
            key={index}
            value={index}>{instrument}
            </Select.Option>
          ))
        }
      </Select>
    </>
  )
};