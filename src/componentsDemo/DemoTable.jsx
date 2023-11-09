import { Table } from "antd";

export const DemoTable = () => {

  const data = [
    {
      key: '1',
      id: 1,
      name: 'Claudia',
      age: 32,
      address: 'Calle Falsa 123',
    },
    {
      key: '2',
      id: 2,
      name: 'Juan',
      age: 17,
      address: 'Calle Falsa 456',
    },
    {
      key: '3',
      id: 3,
      name: 'Camilo',
      age: 52,
      address: 'Calle Falsa 789',
    },
    {
      key: '4',
      id: 4,
      name: 'John',
      age: 52,
      address: 'Calle Falsa 010',
    }
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (text, record) => <a href={'user/' + record.id}>{text}</a>
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      sorter: (a, b) => a.address.localeCompare(b.address),
    },
    {
      title: 'Calculated',
      key: 'calculated',
      render: payload => {
        return <p>{ payload.age >= 18 ? 'Adult' : 'Under-age' }</p>
      }
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => <a>Delete</a>
    
    }
  ];

  return (
    <>
      <Table
        dataSource={data}
        columns={columns}
        pagination={{ pageSize: 2 }}
        bordered
      >
        </Table>
    </>
  );
}