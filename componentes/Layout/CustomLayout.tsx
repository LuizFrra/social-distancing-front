import { useState } from 'react';

import { Layout } from 'antd';

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  MenuOutlined,
} from '@ant-design/icons';

import { IsLessThan } from '../../helpers/QuerySelector';

import styles from './Layout.module.css';
import SideBar from './SideBar';
import { NavBar } from './NavBar';

const { Content } = Layout;

const LayoutStyle = {
  content: {
    margin: '24px 16px 0',
    padding: 24,
    height: 'calc(100vh - 112px)',
    overflowY: 'scroll',
    overflowX: 'hidden',
  } as React.CSSProperties,
};

export default function CustomLayout({ children }) {
  const shouldRenderSideBar = !IsLessThan('md');
  const shouldRenderLogoOnNavBar = !shouldRenderSideBar;

  const [isCollapsed, setIsCollapsed] = useState(false);

  const toogleCollapse = () => setIsCollapsed(!isCollapsed);

  const renderCollapseButton = () => {
    if (!shouldRenderSideBar)
      return (
        <MenuOutlined className={styles.trigger} onClick={toogleCollapse} />
      );
    if (isCollapsed) {
      return (
        <MenuUnfoldOutlined
          className={styles.trigger}
          onClick={toogleCollapse}
        />
      );
    }
    return (
      <MenuFoldOutlined className={styles.trigger} onClick={toogleCollapse} />
    );
  };

  const collapsedButtons = renderCollapseButton();

  return (
    <>
      <Layout>
        <SideBar
          isCollapsed={isCollapsed}
          shouldRender={shouldRenderSideBar}
          onCloseDrawer={toogleCollapse}
        />
        <Layout className={styles.site_layout}>
          <NavBar logo={shouldRenderLogoOnNavBar}>{collapsedButtons}</NavBar>
          <Content
            className={styles.layout_content}
            style={LayoutStyle.content}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </>
  );
}
