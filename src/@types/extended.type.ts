/**
 * Ở đây custom lại type của api để phù hợp với logic cần dùng hoặc logic của component.
 * Chỉ tạo nếu type re-useable, còn nếu chỉ 1 lần thì có thể extend từ type của api ở trong component
 * */

import {
  EntitiesServiceJobCardItem,
  EntitiesVehicleResponse,
  ModelsCustomer,
} from './api.type';

export interface APIResponse<T> {
  data: T;
}

export interface ServiceJobCardItem extends EntitiesServiceJobCardItem {
  id: number;
}

export interface VehicleResponse extends EntitiesVehicleResponse {
  license_plate?: string;
  customer?: ModelsCustomer;
}
