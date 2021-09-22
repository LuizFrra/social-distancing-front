import { Grid } from 'antd';

const { useBreakpoint } = Grid;

export function IsLessThan(value: string) {
  const status = useBreakpoint();
  if (status[value] == false) return true;
  return false;
}
