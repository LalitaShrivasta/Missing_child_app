import React, { Component } from "react";
import Slider from './slider.js';
import { Layout, Menu, Breadcrumb } from "antd";
import { Link } from "react-router-dom";
const { Header, Icon } = Layout;


class Navbar extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px", float: "right" }}
          >
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>

            <Menu.Item key="2">
              <Link to="/login">Login</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/signup">Signup</Link>
            </Menu.Item>
          </Menu>
          <span>
            <h1 style={{ float: "left", marginTop: "12px", color: "white" }}>
              Missing Child App
            </h1>
          </span>
        </Header>
        <Slider/>
      </Layout>
    );
  }
}
export default Navbar;
