import React, { useState, useEffect } from 'react';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import DeviceService from '../../../services/DeviceService';

const ReactApexChart = dynamic(
  () => import('../../../componentes/charts/ReactApexChart'),
  {
    ssr: false,
  }
);

const options: ApexCharts.ApexOptions = {
  chart: {
    type: 'area',
    height: 350,
  },
  dataLabels: {
    enabled: true,
  },
  stroke: {
    width: 3,
  },
  xaxis: {
    labels: {
      formatter: function (value, timestamp) {
        const date = new Date(timestamp);
        return (
          date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
        );
      },
    },
  },
};

const fetchDeviceLogs = async (deviceId) => {
  return await DeviceService.getLogsByDevice(deviceId);
};

const transformDataToSeries = (data) => {
  const numberOfObjects = [];
  const numberOfNearObjects = [];

  data.forEach((element) => {
    const timestamp = element.timestamp;
    const numberOfNearObjectsValue = parseInt(
      element.payload.number_of_near_objects
    );
    const numberOfObjectsValue = parseInt(element.payload.number_of_objets);
    numberOfNearObjects.push([timestamp, numberOfNearObjectsValue]);
    numberOfObjects.push([timestamp, numberOfObjectsValue]);
  });

  return [
    {
      name: 'Qtd de Pessoas',
      data: numberOfObjects,
    },
    {
      name: 'Qtd de Pessoas Próximas',
      data: numberOfNearObjects,
    },
  ];
};

export default function Live() {
  const router = useRouter();
  const deviceId = router.query.deviceId;

  const [series, setSeries] = useState([{ data: [] }]);
  const [refreshToken, setRefreshToken] = useState(Math.random());

  useEffect(() => {
    if (deviceId != undefined) {
      const deviceLogs = fetchDeviceLogs(deviceId);
      deviceLogs.then((data) => {
        const series = transformDataToSeries(data);
        setSeries(series);
      });
      console.log(deviceId);
      setTimeout(() => setRefreshToken(Math.random()), 500);
    }
  }, [refreshToken, deviceId]);

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="area"
      height={350}
    />
  );
}
