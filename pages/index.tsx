import { GetServerSideProps } from 'next';

import DeviceService from '../services/DeviceService';
import DeviceCardList from '../componentes/Device/DeviceCardList';
import { AddDeviceModal } from '../componentes/modal/AddDeviceModal';

export default function Home({ devices }): JSX.Element {
  return (
    <>
      <AddDeviceModal />
      <DeviceCardList devices={devices} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const devices = await DeviceService.get();

  return { props: { devices } };
};
