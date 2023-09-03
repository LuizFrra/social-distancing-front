import Link from 'next/link';

import { Layout, Menu, Drawer } from 'antd';

import { UserOutlined, CloseOutlined, PlusOutlined } from '@ant-design/icons';

import styles from './Layout.module.css';

const { Sider } = Layout;
const { Item } = Menu;

const headerStyle = {
  background: '#001529',
  border: '0',
};

const LinkItem = ({ name, path, ...other }) => (
  <Item icon={<UserOutlined />} {...other}>
    <Link href={path}>
      <a>{name}</a>
    </Link>
  </Item>
);

export default function SideBar({ isCollapsed, shouldRender, onCloseDrawer }) {
  const closeDrawerIcon = () => (
    <CloseOutlined
      style={{ color: 'white' }}
      className={styles.drawer_trigger}
    />
  );

  const menu = () => (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
      <LinkItem name="Devices" path="/" />
    </Menu>
  );

  // device screen is less or equal md
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
          style={{ height: '100vh' }}
          width="100%"
        >
          {menu()}
        </Sider>
      </Drawer>
    );
  }
  return (
    <>
      <Sider
        trigger={null}
        collapsible
        collapsed={isCollapsed}
        style={{ height: '100vh' }}
      >
        <div className={styles.logo} />
        {menu()}
      </Sider>
    </>
  );
}
