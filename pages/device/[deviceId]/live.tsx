import dynamic from 'next/dynamic';

import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

const Column = dynamic(() => import('../../../componentes/teste/Column'), {
  ssr: false,
});

function getColumnConfig(data) {
  return {
    data: data,
    isStack: true,
    xField: 'year',
    yField: 'value',
    seriesField: 'type',
    label: {
      style: {
        fill: 'red',
        opacity: 1.0,
        fontSize: 24,
      },
    },
  };
}

export default function Live() {
  const router = useRouter();
  const deviceId = router.query.deviceId;

  const [data, setData] = useState([]);
  const [refreshToken, setRefreshToken] = useState(Math.random());

  useEffect(() => {
    asyncFetch();
  }, [refreshToken]);

  const asyncFetch = () => {
    fetch(
      'https://gw.alipayobjects.com/os/antfincdn/8elHX%26irfq/stack-column-data.json'
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      })
      .finally(() => {
        console.log('buscando');
        setTimeout(() => setRefreshToken(Math.random()), 3000);
      });
  };

  console.log(data);

  console.log(deviceId);
  return <Column {...getColumnConfig(data)} />;
}
