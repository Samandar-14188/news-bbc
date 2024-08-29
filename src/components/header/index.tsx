import { Header } from "antd/es/layout/layout";
import HeaderComponent from "./header";

export default function index() {
  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="demo-logo" />
      <HeaderComponent />
    </Header>
  );
}
