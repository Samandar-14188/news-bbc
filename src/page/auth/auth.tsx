import React from "react";
import { Button, Form, Input } from "antd";
import type { FormItemProps } from "antd";
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
    [prefixPath, prefix]
  );

  return (
    <MyFormItemContext.Provider value={concatPath}>
      {children}
    </MyFormItemContext.Provider>
  );
};

const MyFormItem = ({ name, ...props }: FormItemProps) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName =
    name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;

  return <Form.Item name={concatName} {...props} />;
};

const Auth: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = (value: any) => {
    localStorage.setItem("user", JSON.stringify(value.user));
    if (value.user) {
      navigate("/");
    }
  };

  return (
    <div className="auth-container">
      <Form
        name="form_item_path"
        layout="vertical"
        onFinish={onFinish}
        className="form-container"
      >
        <MyFormItemGroup prefix={["user"]}>
          <MyFormItemGroup prefix={["name"]}>
            <MyFormItem name="firstName" label="First Name">
              <Input />
            </MyFormItem>
            <MyFormItem name="lastName" label="Last Name">
              <Input />
            </MyFormItem>
          </MyFormItemGroup>
          <MyFormItem
            name="password"
            label="Password"
            rules={[
              { required: true, message: "Please input your password!" },
              {
                min: 8,
                message: "Password must be at least 8 characters long.",
              }            ]}
          >
            <Input.Password />
          </MyFormItem>
        </MyFormItemGroup>

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Auth;
