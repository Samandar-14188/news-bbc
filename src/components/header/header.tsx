import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const headerItems = [
  { key: "home", label: "Home", path: "/" },
  { key: "sport", label: "Sport", path: "/sport" },
  { key: "multimedia", label: "Multimedia", path: "/multimedia" },
];

const HeaderComponent: React.FC = () => {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["home"]}
      style={{ flex: 1, minWidth: 0 }}
    >
      {headerItems.map(({ key, label, path }) => (
        <Menu.Item key={key}>
          <Link to={path}>{label}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default HeaderComponent;
