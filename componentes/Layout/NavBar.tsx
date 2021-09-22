import { Layout, Row, Col } from 'antd';
'@ant-design/icons';

import styles from './Layout.module.css';

const { Header } = Layout;

interface NavBarProps {
  logo?: unknown,
  children: unknown
}

export function NavBar(props: NavBarProps) {
    const renderNavBarItems = () => {
      if(props.children && !props.logo) return props.children;
      return <>
        <Row>
          <Col span={8}>
            <div className={styles.logo} />
          </Col>
          <Col span={16}>
            <Row justify="end" align="middle" style={{height: '100%'}}>
              {props.children}
            </Row>
          </Col>
        </Row>
      </>;
    }
    return (
      <Header className={styles.site_layout_background} style={{ padding: 0 }}>
        {renderNavBarItems()}
      </Header>
    );
}