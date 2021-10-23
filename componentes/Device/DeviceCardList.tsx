import { Row, Col } from 'antd';

import DeviceCard from './DeviceCard';

export default function DeviceCardList({ devices }): JSX.Element {
  return buildDeviceCardList(devices);
}

export function buildDeviceCardList(devices): JSX.Element {
  if (devices === null || devices.length === 0) {
    return <></>;
  }

  const rows = [];
  let currentRow = [];
  let currentRowIndex = 0;
  const rowJustify = 'center';

  devices.forEach((device, index) => {
    currentRowIndex = index;

    if (index % 4 === 0) {
      rows.push(
        <Row key={currentRowIndex} justify={rowJustify}>
          {currentRow}
        </Row>
      );
      currentRow = [];
    }

    currentRow.push(
      <Col key={device.id} xs={24} sm={16} md={12} lg={12} xl={6}>
        <DeviceCard device={device} />
      </Col>
    );
  });

  if (currentRow.length > 0) {
    rows.push(
      <Row key={currentRowIndex + 1} justify={rowJustify}>
        {currentRow}
      </Row>
    );
    currentRow = [];
  }

  return <>{rows}</>;
}
