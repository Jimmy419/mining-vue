import {
  Organization,
  OrgSaveParams,
  SystemUser,
  SystemUserSaveObj,
  UserRoleResourceSubmit,
} from "@/models/system.type";
import {
  SystemResource,
  SystemResourceAdd,
} from "@/models/system-resource.type";
import { UserRoleSubmit } from "@/models/user-role.type";
import axios from "../http";
import { Customer } from "@/models";
// import { UserAuth } from "../models/user-auth";

const systemCommonApiUrl = {
  URL_GET_ORG_LIST: "api/organization/list", //获取组织结构列表
  URL_UPDATE_ORG: "api/organization/update", //更新组织
  URL_ADD_ORG: "api/organization/add", //新增组织
  URL_DELETE_ORG: "api/organization/delete", //删除组织
  URL_GET_USER_LIST: "api/user/all/list", //获取系统用户列表
  URL_GET_ROLE_LIST: "api/role/list", //获取角色列表
  URL_UPDATE_USER: "api/user/update", //修改用户信息
  URL_REACTIVE_USER: "api/user/reActive", //启用用户
  URL_DELETE_USER: "api/user/delete", //禁用用户
  URL_RESET_PSW: "api/reset/pwd", //重置密码
  URL_ADD_USER: "api/user/add", //添加user
  URL_GET_RESOURCE_LIST: "api/resource/list", //获取资源列表
  URL_ADD_ROLE: "api/role/save", //新增和修改角色
  URL_DELETE_ROLE: "api/role/delete", //删除角色
  URL_GET_ROLE_PERMISSION_LIST: "api/role/id/perms", //获取角色资源列表
  URL_UPDATE_USER_ROLE: "api/user/role/update", //更新用户角色
  URL_UPDATE_ROLE_PERMISSION_MATRIX: "api/role/perm/auth", //更新角色permission
  URL_ADD_RESOURCE: "api/resource/save", //新增和修改资源
  URL_DELETE_RESOURCE: "api/resource/delete", //删除资源
};

/**
 * get organization list
 * @returns
 */
export function getOrgList() {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${systemCommonApiUrl.URL_GET_ORG_LIST}`,
    method: "get",
  });
}

/**
 * update organization
 * @param org
 * @returns
 */
export function updateOrg(org: Organization) {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${systemCommonApiUrl.URL_UPDATE_ORG}`,
    method: "put",
    data: org,
  });
}

/**
 * add organization
 * @param org
 * @returns
 */
export function addOrg(org: OrgSaveParams) {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${systemCommonApiUrl.URL_ADD_ORG}`,
    method: "post",
    data: org,
  });
}

/**
 * delete org
 * @param orgId
 * @returns
 */
export function deleteOrg(orgId: number) {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${systemCommonApiUrl.URL_DELETE_ORG}`,
    method: "delete",
    params: {
      organizationId: orgId,
    },
  });
}

/**
 * get system user list
 * @returns
 */
export function getUserList() {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${systemCommonApiUrl.URL_GET_USER_LIST}`,
    method: "get",
  });
}

/**
 * update system user info
 * @param user
 * @returns
 */
export function updateUser(user: SystemUser) {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${systemCommonApiUrl.URL_UPDATE_USER}`,
    method: "post",
    data: user,
  });
}

/**
 * reactive user
 * @param userId
 * @returns
 */
export function reActiveUser(userId: number) {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${systemCommonApiUrl.URL_REACTIVE_USER}`,
    method: "get",
    params: {
      userId: userId,
    },
  });
}

/**
 * disable user
 * @param userId
 * @returns
 */
export function deleteUser(userId: number) {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${systemCommonApiUrl.URL_DELETE_USER}`,
    method: "get",
    params: {
      userId: userId,
    },
  });
}

/**
 * reset user password
 * @param loginId
 * @returns
 */
export function resetPassword(loginId: string) {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${systemCommonApiUrl.URL_RESET_PSW}`,
    method: "get",
    params: {
      loginId,
    },
  });
}

/**
 * add user
 * @param user
 * @returns
 */
export function addUser(user: SystemUserSaveObj) {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${systemCommonApiUrl.URL_ADD_USER}`,
    method: "post",
    data: user,
  });
}

/**
 * get user role list
 * @returns
 */
export function getRoleList() {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${systemCommonApiUrl.URL_GET_ROLE_LIST}`,
    method: "get",
  });
}

/**
 * save user role
 * @param role
 * @returns
 */
export function saveRole(role: UserRoleSubmit) {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${systemCommonApiUrl.URL_ADD_ROLE}`,
    method: "post",
    data: role,
  });
}

/**
 * delete role
 * @param roleId
 * @returns
 */
export function deleteRole(roleId: number) {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${systemCommonApiUrl.URL_DELETE_ROLE}`,
    method: "get",
    params: { roleId },
  });
}

export function getRolePermissionList(roleId: number) {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${systemCommonApiUrl.URL_GET_ROLE_PERMISSION_LIST}`,
    method: "get",
    params: { roleId },
  });
}

/**
 * update user role
 * @param roleUpdateParams
 * @returns
 */
export function updateUserRoleApi(roleUpdateParams: Partial<Customer>) {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${systemCommonApiUrl.URL_UPDATE_USER_ROLE}`,
    method: "post",
    data: roleUpdateParams,
  });
}

/**
 * get resource list
 * @returns
 */
export function getResourceList() {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${systemCommonApiUrl.URL_GET_RESOURCE_LIST}`,
    method: "get",
  });
}

/**
 * save resource
 * @param resource
 * @returns
 */
export function saveResource(resource: SystemResource | SystemResourceAdd) {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${systemCommonApiUrl.URL_ADD_RESOURCE}`,
    method: "post",
    data: resource,
  });
}

/**
 * delete resource
 * @param resId
 * @returns
 */
export function deleteResource(resId: number) {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${systemCommonApiUrl.URL_DELETE_RESOURCE}`,
    method: "get",
    params: { resId },
  });
}

/**
 * update role permissions
 * @param rolePermission
 * @returns
 */
export function updateRolePermission(rolePermission: UserRoleResourceSubmit) {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${systemCommonApiUrl.URL_UPDATE_ROLE_PERMISSION_MATRIX}`,
    method: "post",
    data: rolePermission,
  });
}

// /**
//  * 登录
//  * @param parameter
//  * @returns
//  */
// export function login(parameter: UserAuth) {
//   return axios({
//     url: systemCommonApiUrl.LOGIN,
//     method: "post",
//     data: parameter,
//   });
// }

// /**
//  * 获取菜单列表
//  * @param parameter
//  * @returns
//  */
// export function getMenuList(parameter: { userId: number }) {
//   return axios({
//     url: systemCommonApiUrl.URL_GET_MENU_LIST,
//     method: "get",
//     params: parameter,
//   });
// }
