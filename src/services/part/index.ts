import { APIResponse } from '@/@types/extended.type';
import { baseApi } from '..';
import {
  EntitiesPartCreateRequest,
  ModelsPart,
  PaginationPaginationModelsPartEntitiesPartResponse,
} from '@/@types/api.type';

const PartServices = {
  getParts: async (params: { page: number; per_page: number }) => {
    const response = await baseApi.partsList({
      page: params.page,
      per_page: params.per_page,
    });
    return response.data as APIResponse<PaginationPaginationModelsPartEntitiesPartResponse>;
  },
  getPartById: async (id: string) => {
    const response = await baseApi.partsDetail(id);
    return response.data as APIResponse<ModelsPart>;
  },
  createPart: async (data: EntitiesPartCreateRequest) => {
    const response = await baseApi.partsCreate(data);
    return response.data as APIResponse<ModelsPart>;
  },
  updatePart: async (id: string, data: EntitiesPartCreateRequest) => {
    const response = await baseApi.partsUpdate(id, data);
    return response.data as APIResponse<ModelsPart>;
  },
};

export default PartServices;
