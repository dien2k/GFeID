import { APIResponse } from '@/@types/extended.type';
import { baseApi } from '..';
import { ModelsAdminUser } from '@/@types/api.type';
import { PaginationPaginationModelsAdminUserModelsAdminUser } from '@/@types/api.type';
const AdminUserServices = {
  getAdminUsers: async () => {
    const response = await baseApi.adminUsersList();
    return response.data as APIResponse<PaginationPaginationModelsAdminUserModelsAdminUser>;
  },
  getAdminUser: async (id: string) => {
    const response = await baseApi.adminUsersDetail(Number(id));
    return response.data as APIResponse<ModelsAdminUser>;
  },
  createAdminUser: async (adminUser: ModelsAdminUser) => {
    const response = await baseApi.adminUsersCreate(adminUser);
    return response.data as APIResponse<ModelsAdminUser>;
  },
  updateAdminUser: async (id: string, adminUser: ModelsAdminUser) => {
    const response = await baseApi.adminUsersUpdate(Number(id), adminUser);
    return response.data as APIResponse<ModelsAdminUser>;
  },
};

export default AdminUserServices;
