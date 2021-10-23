import { Card } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';

export default function DeviceCard({ device }) {
  const { Meta } = Card;
  const { identifier } = device;

  return (
    <Card
      style={{ width: 300, marginTop: 16 }}
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        // avatar={<Avatar icon={icon} />}
        title={identifier}
      />
    </Card>
  );
}
