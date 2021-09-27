import HttpClient from './HttpClient';

export default class Service extends HttpClient {
  /**
   * Get bath house list
   */
  static getBathHouseList(date: string): Promise<any> {
    return this.get(`/api/bathSchedule/${date}`);
  }
}
