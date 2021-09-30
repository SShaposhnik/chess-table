import { BathHouseResponse } from 'interfaces';
import HttpClient from './HttpClient';

export default class Service extends HttpClient {
  /**
   * Get bath house list
   */
  static getBathHouseList(date: string): Promise<BathHouseResponse> {
    return this.get(`/api/bathschedules/${date}`);
  }
}
