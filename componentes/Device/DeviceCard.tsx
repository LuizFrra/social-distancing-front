import { Card } from 'antd';
import { EditOutlined, LineChartOutlined } from '@ant-design/icons';

export default function DeviceCard({ device }) {
  const { Meta } = Card;
  const { identifier } = device;

  return (
    <Card
      style={{ width: 300, marginTop: 16 }}
      actions={[<EditOutlined key="edit" />, <LineChartOutlined key="chart" />]}
    >
      <Meta title={identifier} />
    </Card>
  );
}
