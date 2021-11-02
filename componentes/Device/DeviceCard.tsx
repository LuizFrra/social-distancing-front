import Link from 'next/link';

import { Card } from 'antd';
import { EditOutlined, LineChartOutlined } from '@ant-design/icons';

const LinkIcon = ({ deviceId }) => (
  <Link href="/device/[id]/live" as={`/device/${deviceId}/live`}>
    <a>
      <LineChartOutlined key="chart" />
    </a>
  </Link>
);

export default function DeviceCard({ device }) {
  const { Meta } = Card;
  const { identifier } = device;
  return (
    <Card
      style={{ width: 300, marginTop: 16 }}
      actions={[
        <EditOutlined key="edit" />,
        <LinkIcon deviceId={device.id} key="chart" />,
      ]}
    >
      <Meta title={identifier} />
    </Card>
  );
}
