import axios from "../http";
import { SearchParamModel } from "../models/common.model";

const pointApiUrl = {
  URL_GET_POINTS_LOG_LIST_FILTER: "api/point/log/filter",
  URL_GET_UPLOADED_RECEIPT_WITH_CONDITION: "api/point/receipt/filter",
  URL_POINT_AUDIT: "api/point/audit",
  URL_POINT_RECYCLE:"api/point/recycle",
  URL_GET_RECEIPT_REASONS: "api/receipt/reason/list",
};

export function getPointsLogList(
  searchParam: SearchParamModel,
  pageNo: number,
  pageSize: number
) {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${pointApiUrl.URL_GET_POINTS_LOG_LIST_FILTER}?pageNo=${pageNo}&pageSize=${pageSize}`,
    method: "post",
    data: searchParam,
  });
}

export function getPointsReceipts(
  searchParam: SearchParamModel,
  pageNo: number,
  pageSize: number
) {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${pointApiUrl.URL_GET_UPLOADED_RECEIPT_WITH_CONDITION}?pageNo=${pageNo}&pageSize=${pageSize}`,
    method: "post",
    data: searchParam,
  });
}

/**
 * 积分审核
 * @param params
 * @returns
 */
export function pointAudit(params: {
  amount?: number;
  receiptNo: string;
  point?: number;
  reasonId?: number;
  statusId: number;
  customerId: number;
  receiptId: number;
}) {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${pointApiUrl.URL_POINT_AUDIT}`,
    method: "post",
    data: params,
  });
}

/**
 * 积分作废
 * @param params
 * @returns
 */
export function pointRecycleApi(params: {
  amount?: number;
  receiptNo: string;
  point?: number;
  reasonId?: number;
  statusId?: number;
  customerId: number;
  receiptId: number;
}){
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${pointApiUrl.URL_POINT_RECYCLE}`,
    method: "post",
    data: params,
  });
  
}

/**
 * get receipt reason list
 * @returns
 */
export function getReceiptReasonsApi() {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${pointApiUrl.URL_GET_RECEIPT_REASONS}`,
    method: "get",
  });
}
