import { BusinessFormModel } from "@/models";
import axios from "../http";
import { SearchParamModel } from "../models/common.model";
import { ShopModel } from "../models/shop.model";

const shopApiUrl = {
  URL_GET_SHOP_LIST_FILTER: "api/shop/filter",
  // URL_GET_SHOP_TYPE_LIST: "api/shop/type/list",
  URL_GET_SHOP_AREA_LIST: "api/shop/area/list",
  URL_GET_SHOP_FLOOR_LIST: "api/shop/floor/list",
  URL_DELETE_SHOP: "api/shop/delete",
  URL_ADD_SHOP: "api/shop/add",
  UPDATE_ADD_SHOP: "api/shop/update",
  URL_GET_BUSINESS_FORM_LIST: "api/shop/type/list",
  URL_UPDATE_BUSINESS_FORM: "api/shop/type/update",
  URL_ADD_BUSINESS_FORM: "api/shop/type/add",
  URL_DELETE_BUSINESS_FORM: "api/shop/type/delete",
};

export function getShopListApi(
  searchParam: SearchParamModel,
  pageNo: number,
  pageSize: number
) {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${shopApiUrl.URL_GET_SHOP_LIST_FILTER}?pageNo=${pageNo}&pageSize=${pageSize}`,
    method: "post",
    data: searchParam,
  });
}

// export function getShopTypeList() {
//   return axios({
//     url: `${process.env.VUE_APP_API_PREFIX}${shopApiUrl.URL_GET_SHOP_TYPE_LIST}`,
//   });
// }

export function getShopAreaList() {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${shopApiUrl.URL_GET_SHOP_AREA_LIST}`,
  });
}

export function getShopFloorList() {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${shopApiUrl.URL_GET_SHOP_FLOOR_LIST}`,
  });
}

export function addShop(shop: ShopModel) {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${shopApiUrl.URL_ADD_SHOP}`,
    method: "post",
    data: shop,
  });
}

export function updateShop(shop: ShopModel) {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${shopApiUrl.UPDATE_ADD_SHOP}`,
    method: "post",
    data: shop,
  });
}

export function removeShop(shopId: number) {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${shopApiUrl.URL_DELETE_SHOP}/${shopId}`,
    method: "post",
  });
}

/**
 * get business form list
 * @returns
 */
export function getBusinessFormListApi() {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${shopApiUrl.URL_GET_BUSINESS_FORM_LIST}`,
  });
}

/**
 * update business form
 * @param data
 * @returns
 */
export function updateBusinessFormApi(data: Partial<BusinessFormModel>) {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${shopApiUrl.URL_UPDATE_BUSINESS_FORM}`,
    method: "post",
    data: data,
  });
}

/**
 * add business form
 * @param data
 * @returns
 */
export function addBusinessFormApi(data: Partial<BusinessFormModel>) {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${shopApiUrl.URL_ADD_BUSINESS_FORM}`,
    method: "post",
    data: data,
  });
}

/**
 * delete business form
 * @param typeId
 * @returns
 */
export function deleteBusinessFormApi(typeId: number) {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${shopApiUrl.URL_DELETE_BUSINESS_FORM}/${typeId}`,
    method: "post",
    data: null,
  });
}
