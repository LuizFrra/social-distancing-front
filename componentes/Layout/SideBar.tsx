import { Layout, Menu, Drawer } from 'antd';

import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  CloseOutlined,
} from '@ant-design/icons';

import styles from './Layout.module.css';

const { Sider } = Layout;
const { Item } = Menu;

const headerStyle = {
  background: '#001529',
  border: '0',
};

export default function SideBar({ isCollapsed, shouldRender, onCloseDrawer }) {
  const closeDrawerIcon = () => (
    <CloseOutlined
      style={{ color: 'white' }}
      className={styles.drawer_trigger}
    />
  );

  const menu = () => (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
      <Item key="1" icon={<UserOutlined />}>
        nav 1
      </Item>
      <Item key="2" icon={<VideoCameraOutlined />}>
        nav 2
      </Item>
      <Item key="3" icon={<UploadOutlined />}>
        nav 3
      </Item>
    </Menu>
  );

  if (!shouldRender) {
    return (
      <Drawer
        title={<div className={styles.logo} />}
        placement="right"
        visible={!isCollapsed}
        bodyStyle={{ padding: 0 }}
        headerStyle={headerStyle}
        closeIcon={closeDrawerIcon()}
        onClose={onCloseDrawer}
      >
        <Sider
          trigger={null}
          collapsible
          collapsed={isCollapsed}
          style={{ height: '100%' }}
          width="100%"
        >
          {menu()}
        </Sider>
      </Drawer>
    );
  }
  return (
    <>
      <Sider trigger={null} collapsible collapsed={isCollapsed}>
        <div className={styles.logo} />
        {menu()}
      </Sider>
    </>
  );
}
