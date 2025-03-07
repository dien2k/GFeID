import { APIResponse } from '@/@types/extended.type';
import { baseApi } from '..';
import {
  ModelsCustomer,
  PaginationPaginationModelsCustomerModelsCustomer,
} from '@/@types/api.type';

const CustomerServices = {
  getCustomers: async (params: {
    page: number;
    limit: number;
    name?: string;
    phone?: string;
    email?: string;
  }) => {
    const response = await baseApi.customersList({
      page: params.page,
      limit: params.limit,
      name: params.name,
      phone: params.phone,
      email: params.email,
    });
    return response.data as APIResponse<PaginationPaginationModelsCustomerModelsCustomer>;
  },
  getCustomerById: async (id: string) => {
    const response = await baseApi.customersDetail(id);
    return response.data as APIResponse<ModelsCustomer>;
  },
  createCustomer: async (customer: ModelsCustomer) => {
    const response = await baseApi.customersCreate(customer);
    return response.data as APIResponse<ModelsCustomer>;
  },
  updateCustomer: async (customerId: string, customer: ModelsCustomer) => {
    const response = await baseApi.customersUpdate(customerId, customer);
    return response.data as APIResponse<ModelsCustomer>;
  },
};

export default CustomerServices;
