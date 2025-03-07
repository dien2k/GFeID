import { APIResponse } from '@/@types/extended.type';
import { baseApi } from '..';
import {
  ModelsService,
  PaginationPaginationModelsServiceModelsService,
} from '@/@types/api.type';

const ServiceServices = {
  getServices: async (params: { page: number; per_page: number }) => {
    const response = await baseApi.servicesList({
      page: params.page,
      per_page: params.per_page,
    });
    return response.data as APIResponse<PaginationPaginationModelsServiceModelsService>;
  },
  getService: async (id: string) => {
    const response = await baseApi.servicesDetail(id);
    return response.data as APIResponse<ModelsService>;
  },
  createService: async (data: ModelsService) => {
    const response = await baseApi.servicesCreate(data);
    return response.data as APIResponse<ModelsService>;
  },
  updateService: async (id: string, data: ModelsService) => {
    const response = await baseApi.servicesUpdate(id, data);
    return response.data as APIResponse<ModelsService>;
  },
};

export default ServiceServices;
