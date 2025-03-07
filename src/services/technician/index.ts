import {
  ModelsTechnician,
  PaginationPaginationModelsTechnicianModelsTechnician,
} from '@/@types/api.type';
import { APIResponse } from '@/@types/extended.type';
import { baseApi } from '..';

const TechnicianServices = {
  getTechnicians: async (params: {
    page: number;
    limit: number;
    name?: string;
    phone?: string;
    contact_email?: string;
  }) => {
    const response = await baseApi.techniciansList({
      page: params.page,
      limit: params.limit,
    });
    return response.data as APIResponse<PaginationPaginationModelsTechnicianModelsTechnician>;
  },
  getTechnicianById: async (id: string) => {
    const response = await baseApi.techniciansDetail(id);
    return response.data as APIResponse<ModelsTechnician>;
  },
  updateTechnician: async (id: string, values: ModelsTechnician) => {
    const response = await baseApi.techniciansUpdate(id, values);
    return response.data as APIResponse<ModelsTechnician>;
  },
  createTechnician: async (technician: ModelsTechnician) => {
    const response = await baseApi.techniciansCreate(technician);
    return response.data as APIResponse<ModelsTechnician>;
  },
};

export default TechnicianServices;
