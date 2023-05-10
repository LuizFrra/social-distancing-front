import BaseService from './BaseService';

class DeviceService extends BaseService {
  constructor(url, basePath) {
    super(url, basePath);
  }

  async getLogsByDevice(deviceId) {
    const url = `${this.url}${this.basePath}/${deviceId}/log`;
    const response = fetch(url).then((response) => response.json());
    return response;
  }
}

export default new DeviceService('http://localhost:8080/api/v1', '/device');
