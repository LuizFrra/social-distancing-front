import { Layout, Menu } from 'antd';

import {
    UserOutlined, VideoCameraOutlined, UploadOutlined,
} from '@ant-design/icons';

import styles from './Layout.module.css';

const { Sider } = Layout;
const { Item } =  Menu;

export default function SideBar({ isCollapsed, shouldRender }) {
    if(!shouldRender) return <></>;
    return (
      <>
          <Sider trigger={null} collapsible collapsed={isCollapsed}>
            <div className={styles.logo} />
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
          </Sider>
      </>
    );
  }