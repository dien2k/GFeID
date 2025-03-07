import { EntitiesAdminUserProfile, EntitiesToken } from "@/@types/api.type";
import { baseApi} from "..";
import { APIResponse } from "@/@types/extended.type";

interface LoginParams {
  email: string;
  password: string;
}

const AuthServices = {
  login: async (form: LoginParams) => {
    const response = await baseApi.authLoginCreate({
      email: form.email,
      password: form.password,
      grant_type: "password",
    })

    return response.data as APIResponse<EntitiesToken>;
  },
  getUserInfo: async () => {
    const response = await baseApi.meProfileList();
    return response.data as APIResponse<EntitiesAdminUserProfile>;
  },
};

export default AuthServices;
