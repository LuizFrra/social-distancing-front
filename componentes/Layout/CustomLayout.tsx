import { useState } from 'react';

import { Layout } from 'antd';

import {
  MenuUnfoldOutlined, MenuFoldOutlined, MenuOutlined
} from '@ant-design/icons';

import { IsLessThan } from '../../helpers/QuerySelector';

import styles from './Layout.module.css';
import SideBar from './SideBar';

const { Header, Content } = Layout;

const LayoutStyle = {
  content: {
    margin: '24px 16px',
    padding: 24,
    height: 'calc(100vh - 112px)',
  }
}

export default function CustomLayout({ children }) {
  const shouldRenderSideBar = !IsLessThan('md');

  const [isCollapsed, setIsCollapsed] = useState(false);

  const toogleCollapse = () => setIsCollapsed(!isCollapsed);

  const renderCollapseButton = () => {
    if(!shouldRenderSideBar) return <MenuOutlined className={styles.trigger} onClick={toogleCollapse} />;
    if(isCollapsed) return <MenuUnfoldOutlined className={styles.trigger} onClick={toogleCollapse} />;
    return <MenuFoldOutlined className={styles.trigger} onClick={toogleCollapse} />;
  }

  return (
    <>
      <Layout>
        <SideBar isCollapsed={isCollapsed} shouldRender={shouldRenderSideBar} />
        <Layout className={styles.site_layout}>
          <Header className={styles.site_layout_background} style={{ padding: 0 }}>
            {renderCollapseButton()}
          </Header>
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

