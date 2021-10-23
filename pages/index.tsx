import { GetServerSideProps } from 'next';

import DeviceService from '../services/DeviceService';
import DeviceCardList from '../componentes/Device/DeviceCardList';

export default function Home({ devices }): JSX.Element {
  return <DeviceCardList devices={devices} />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch data from external API
  const devices = await DeviceService.get();

  // Pass data to the page via props
  return { props: { devices } };
};
