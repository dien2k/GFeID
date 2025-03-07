import { APIResponse } from '@/@types/extended.type';
import { baseApi } from '..';
import {
  EntitiesVehicleCreateRequest,
  ModelsVehicle,
  PaginationPaginationModelsVehicleModelsVehicle,
} from '@/@types/api.type';

const VehicleServices = {
  getVehicles: async ({
    page = 1,
    limit = 10,
    search = '',
  }: {
    page: number;
    limit: number;
    search: string;
  }) => {
    const response = await baseApi.vehiclesList({
      page,
      limit,
      license_plate: search,
    });
    return response.data as APIResponse<PaginationPaginationModelsVehicleModelsVehicle>;
  },
  getVehicleById: async (id: string) => {
    const response = await baseApi.getVehicleById(id);
    return response.data as APIResponse<ModelsVehicle>;
  },
  createVehicle: async (data: EntitiesVehicleCreateRequest) => {
    const response = await baseApi.vehiclesCreate(data);
    return response.data as APIResponse<ModelsVehicle>;
  },
  updateVehicle: async (id: string, data: EntitiesVehicleCreateRequest) => {
    const response = await baseApi.vehiclesUpdate(id, data);
    return response.data as APIResponse<ModelsVehicle>;
  },
};

export default VehicleServices;
