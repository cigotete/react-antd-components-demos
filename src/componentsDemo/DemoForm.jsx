import {
  Form,
  Input,
  Button,
} from "antd";

export const DemoForm = () => {

  const onFinish = (values) => {
    console.log(values);
  }

  return (
    <>
      <Form
      onFinish={ onFinish }>
        <Form.Item
        label="username"
        name="username">
          <Input
          placeholder="Username"
          required
          />
        </Form.Item>
        <Form.Item
        label="password"
        name="password">
          <Input.Password
          placeholder="Password"
          required
          />
        </Form.Item>
        <Form.Item>
          <Button
          type="primary"
          htmlType="submit">
          Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};