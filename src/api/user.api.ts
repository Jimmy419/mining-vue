import axios from "../http";
import { ChangePassParams, UserAuthModel } from "../models/user-auth.model";

const authenticationApiUrl = {
  LOGIN: "api/login",
  URL_GET_MENU_LIST: "api/user/menu/list",
  URL_UPDATE_USER_PASSWORD: "api/user/pwd/update",
  URL_GET_CURRENT_USER_ROLES: "api/user/roles",
};

/**
 * 登录
 * @param parameter
 * @returns
 */
export function loginApi(parameter: UserAuthModel) {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${authenticationApiUrl.LOGIN}`,
    method: "post",
    data: parameter,
  });
}

/**
 * 获取菜单列表
 * @param parameter
 * @returns
 */
export function getMenuListApi(parameter: { userId: number }) {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${authenticationApiUrl.URL_GET_MENU_LIST}`,
    method: "get",
    params: parameter,
  });
}

/**
 * update password
 * @param parameter
 * @returns
 */
export function updatePasswordApi(parameter: ChangePassParams) {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${authenticationApiUrl.URL_UPDATE_USER_PASSWORD}`,
    method: "get",
    params: parameter,
  });
}

/**
 * get current login user roles
 * @returns
 */
export function getCurrentUserRolesApi() {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${authenticationApiUrl.URL_GET_CURRENT_USER_ROLES}`,
    method: "get",
  });
}
