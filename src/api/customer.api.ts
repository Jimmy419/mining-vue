import { Customer } from "@/models";
import axios from "../http";
import { SearchParamModel } from "../models/common.model";

const customerApiUrl = {
  URL_GET_CUSTOMER_LIST: "api/customer/list/condition",
  URL_GET_CUSTOMER_INFOR: "api/customer/get",
  URL_UPDATE_CUSTOMER_BIRTHDAY: "api/customer/birthday/update",
  URL_UPDATE_CUSTOMER_LEVEL: "api/customer/vip/type/update",
  URL_UPDATE_CUSTOMER_POINTS: "api/point/handle",
};

/**
 * get login log list
 * @returns
 */
export function getCustomerList(
  searchParam: SearchParamModel,
  pageNo: number,
  pageSize: number
) {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${customerApiUrl.URL_GET_CUSTOMER_LIST}?pageNo=${pageNo}&pageSize=${pageSize}`,
    method: "post",
    data: searchParam,
  });
}

export function getCustomerInfor(customerId: number) {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${customerApiUrl.URL_GET_CUSTOMER_INFOR}?customerId=${customerId}`,
    method: "get",
  });
}

/**
 * update customer birthday
 * @param customer
 * @returns
 */
export function updateCustomerBirthday(customer: Partial<Customer>) {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${customerApiUrl.URL_UPDATE_CUSTOMER_BIRTHDAY}`,
    method: "put",
    data: customer,
  });
}

/**
 * update customer level
 * @param customer
 * @returns
 */
export function updateCustomerUserLevelApi(customer: Partial<Customer>) {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${customerApiUrl.URL_UPDATE_CUSTOMER_LEVEL}`,
    method: "put",
    data: customer,
  });
}

interface ReceptInfoForUpdatePoints {
  auditDate: string;
  changeType: number;
  currrentScore: number;
  bindReceipt?: number;
  amount?: number;
  receiptNo?: string;
  changeValue: number;
  remark: string;
}
export interface UpdatePointsParamsModel extends ReceptInfoForUpdatePoints {
  receiptId?: number;
  cardId: number;
  customerId: number;
  receiptInfo?: ReceptInfoForUpdatePoints;
}

/**
 * update customer points
 * @param pointsObj
 * @returns
 */
export function updateCustomerPointsApi(pointsObj: UpdatePointsParamsModel) {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${customerApiUrl.URL_UPDATE_CUSTOMER_POINTS}`,
    method: "post",
    data: pointsObj,
  });
}
