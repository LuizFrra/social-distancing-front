import BaseService from './BaseService';

class DeviceService extends BaseService {
  constructor(url, basePath) {
    super(url, basePath);
  }
}

export default new DeviceService(process.env.SOCIAL_DISTANCING_API, '/device');
