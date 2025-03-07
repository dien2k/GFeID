import {
  ModelsServiceCenter,
  PaginationPaginationModelsServiceCenterModelsServiceCenter,
} from '@/@types/api.type';
import { APIResponse } from '@/@types/extended.type';
import { baseApi } from '..';

const ServiceCenterServices = {
  getServiceCenters: async (params: { page: number; limit: number }) => {
    const response = await baseApi.serviceCentersList({
      page: params.page,
      limit: params.limit,
    });
    return response.data as APIResponse<PaginationPaginationModelsServiceCenterModelsServiceCenter>;
  },
  // TODO: getProvinces, getCities, getDistricts, getWards
  // getProvinces: async () => {
  //   const response = await baseApi.provincesList();
  //   return response.data as APIResponse<ModelsProvince[]>;
  // },
  // getCities: async () => {
  //   const response = await baseApi.citiesList();
  //   return response.data as APIResponse<ModelsCity[]>;
  // },
  // getDistricts: async () => {
  //   const response = await baseApi.districtsList();
  //   return response.data as APIResponse<ModelsDistrict[]>;
  // },
  // getWards: async () => {
  //   const response = await baseApi.wardsList();
  //   return response.data as APIResponse<ModelsWard[]>;
  // },
  updateServiceCenter: async (id: string, values: ModelsServiceCenter) => {
    const response = await baseApi.serviceCentersUpdate(id, values);
    return response.data as APIResponse<ModelsServiceCenter>;
  },
  createServiceCenter: async (serviceCenter: ModelsServiceCenter) => {
    const response = await baseApi.serviceCentersCreate(serviceCenter);
    return response.data as APIResponse<ModelsServiceCenter>;
  },
  getServiceCenter: async (id: string) => {
    const response = await baseApi.serviceCentersDetails(id);
    return response.data as APIResponse<ModelsServiceCenter>;
  },
};

export default ServiceCenterServices;
