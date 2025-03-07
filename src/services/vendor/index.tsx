import { APIResponse } from '@/@types/extended.type';
import { baseApi } from '..';
import {
  ModelsVendor,
  PaginationPaginationModelsVendorModelsVendor,
} from '@/@types/api.type';

const VendorServices = {
  getVendors: async ({
    page = 1,
    per_page = 10,
    last_id = 0,
  }: {
    page: number;
    per_page: number;
    last_id?: number;
  }) => {
    const response = await baseApi.vendorList({
      page,
      per_page,
      last_id,
    });
    return response.data as APIResponse<PaginationPaginationModelsVendorModelsVendor>;
  },
  getVendorById: async (id: string) => {
    const response = await baseApi.vendorDetails(id);
    return response.data as APIResponse<ModelsVendor>;
  },
  createVendor: async (data: ModelsVendor) => {
    const response = await baseApi.vendorCreate(data);
    return response.data as APIResponse<ModelsVendor>;
  },
  updateVendor: async (id: string, data: ModelsVendor) => {
    const response = await baseApi.vendorUpdate(id, data);
    return response.data as APIResponse<ModelsVendor>;
  },
};

export default VendorServices;
