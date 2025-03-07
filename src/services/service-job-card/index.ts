import {
  EntitiesServiceJobCardCreateRequest,
  ModelsServiceJobCard,
  PaginationPaginationEntitiesServiceJobCardListItemResponseModelsServiceJobCard,
} from '@/@types/api.type';
import { baseApi } from '..';
import { APIResponse } from '@/@types/extended.type';

const ServiceJobCardServices = {
  getServiceJobCard: async (params: { page: number; limit: number }) => {
    const response = await baseApi.serviceJobCardsList({
      page: params.page,
      limit: params.limit,
    });
    return response.data as APIResponse<PaginationPaginationEntitiesServiceJobCardListItemResponseModelsServiceJobCard>;
  },
  createServiceJobCard: async (data: EntitiesServiceJobCardCreateRequest) => {
    const response = await baseApi.serviceJobCardsCreate(data);
    return response.data as APIResponse<ModelsServiceJobCard>;
  },
  getServiceJobCardById: async (id: string) => {
    const response = await baseApi.serviceJobCardsDetail(id);
    return response.data as APIResponse<ModelsServiceJobCard>;
  },
};

export default ServiceJobCardServices;
