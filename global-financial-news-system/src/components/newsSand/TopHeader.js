import React, { useState } from 'react'
import { Layout, Dropdown, Menu, Space, Avatar, Badge } from 'antd'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined
} from '@ant-design/icons';
const { Header } = Layout

export default function TopHeader() {
  const [collapsed, setCollapsed] = useState(false)
  const changeCollected = () => {
    setCollapsed(!collapsed)
  }

  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <span>顶级管理员</span>
          ),
        },
        {
          key: '2',
          label: (
            <span>消息列表</span>
          ),
          disabled: true,
        },
        {
          key: '3',
          danger: true,
          label: '退出',
        },
      ]}
    />
  );
  return (
    <Header
      className="site-layout-background"
      style={{
        position: "relative",
        padding: '0 16px',
      }}
    >
      {/* {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => setCollapsed(!collapsed),
      })} */}
      {
        collapsed ? <MenuUnfoldOutlined
          onClick={changeCollected} /> : <MenuFoldOutlined
          onClick={changeCollected} />
      }

      {/* <div style={{ position: "absolute", top: "0", left: "50%", }}
      >莫愁前路无知己，天下谁人不识君</div> */}

      <span style={{ position: "absolute", top: "0",left:"40%",fontSize:"12px",fontWeight:"700",color:"#aaa" }}
      >莫愁前路无知己，天下谁人不识君</span>

      <div style={{ float: "right" }}>
        <span>欢迎您，高先生</span>
        <Dropdown overlay={menu}>
          <Space>
            <Badge count={1}>
              <Avatar shape="square" icon={<UserOutlined />} />
            </Badge>
          </Space>
        </Dropdown>
      </div>
    </Header>
  )
}
