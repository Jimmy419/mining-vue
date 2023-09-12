import axios from "../http";
import { SearchParamModel } from "../models/common.model";

const parkingApiUrl = {
  URL_GET_PARKING_ORDER_LIST_FILTER: "api/parking/order/filter",
};

/**
 * get login log list
 * @returns
 */
export function getParkingOrderList(
  searchParam: SearchParamModel,
  pageIndex: number,
  pageSize: number
) {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${parkingApiUrl.URL_GET_PARKING_ORDER_LIST_FILTER}?pageIndex=${pageIndex}&pageSize=${pageSize}`,
    method: "post",
    data: searchParam,
  });
}
