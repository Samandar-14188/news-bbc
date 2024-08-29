import React from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

const MyFormItemContext = React.createContext<(string | number)[]>([]);

interface MyFormItemGroupProps {
  prefix: string | number | (string | number)[];
}

function toArr(
  str: string | number | (string | number)[]
): (string | number)[] {
  return Array.isArray(str) ? str : [str];
}

const MyFormItemGroup: React.FC<
  React.PropsWithChildren<MyFormItemGroupProps>
> = ({ prefix, children }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(
    () => [...prefixPath, ...toArr(prefix)],
    [prefix, prefixPath]
  );

  return (
    <MyFormItemContext.Provider value={concatPath}>
      {children}
    </MyFormItemContext.Provider>
  );
};

const Auth: React.FC = () => {
  const navigate = useNavigate();

  const handleFinish = (values: any) => {
    console.log("Received values:", values);
    navigate("/home");
  };

  return (
    <div className="auth-container">
    <Form
      name="auth"
      onFinish={handleFinish}
      style={{ maxWidth: "400px", margin: "0 auto", paddingTop: "100px" }}
      className="form-container"
    >
      <MyFormItemGroup prefix="user">
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
      </MyFormItemGroup>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default Auth;
