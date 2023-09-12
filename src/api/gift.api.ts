import { GiftModel } from "@/models";
import axios from "../http";

const giftApiUrl = {
  URL_GET_GIFT_LIST: "api/gift/filter",
  URL_ADD_GIFT: "api/gift/add",
  URL_UPDATE_GIFT: "api/gift/update",
  URL_REMOVE_GIFT: "api/gift/delete",
  URL_GET_GIFT_EXCHANGE_LIST: "api/gift/exchange/filter",
  URL_GIFT_EXCHANGE: "api/gift/exchange/check",
  URL_GIFT_BALANCE_UPDATE: "api/gift/balance/update",
};

export interface GiftExchangeParamsModel {
  customerId?: number;
  desc?: number;
  endDate?: string;
  keyword?: string;
  mobile?: string;
  orderBy?: number;
  startDate?: string;
  giftId?: number;
  statusId?: number;
  talentId?: number;
  userId?: number;
}

/**
 * get activity list
 * @returns
 */
export function getGiftListApi(
  pageNo: number,
  pageSize: number,
  searchParam: { keyword: string }
) {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${giftApiUrl.URL_GET_GIFT_LIST}?pageNo=${pageNo}&pageSize=${pageSize}`,
    method: "post",
    data: searchParam,
  });
}

/**
 * add new gift
 * @returns
 */
export function addGiftApi(param: Partial<GiftModel>) {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${giftApiUrl.URL_ADD_GIFT}`,
    method: "post",
    data: param,
  });
}

/**
 * update gift info
 * @returns
 */
export function updateGiftApi(param: Partial<GiftModel>) {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${giftApiUrl.URL_UPDATE_GIFT}`,
    method: "post",
    data: param,
  });
}

/**
 * delete gift by id
 * @param giftId
 * @returns
 */
export function deleteGiftApi(giftId: number) {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${giftApiUrl.URL_REMOVE_GIFT}/${giftId}`,
    method: "post",
  });
}

/**
 * get gift exchange list api
 * @param pageNo
 * @param pageSize
 * @param searchParam
 * @returns
 */
export function getGiftExchangeListApi(
  pageNo: number,
  pageSize: number,
  searchParam: GiftExchangeParamsModel
) {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${giftApiUrl.URL_GET_GIFT_EXCHANGE_LIST}?pageNo=${pageNo}&pageSize=${pageSize}`,
    method: "post",
    data: searchParam,
  });
}

/**
 * gift exchange api
 * @param tradeNo
 * @returns
 */
export function giftExchangeApi(tradeNo: string) {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${giftApiUrl.URL_GIFT_EXCHANGE}?tradeNo=${tradeNo}`,
    method: "put",
  });
}

/**
 * gift balance update
 * @param params
 * @returns
 */
export function giftBalanceUpdate(params: {
  balanceNum: number;
  giftId: number;
}) {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${giftApiUrl.URL_GIFT_BALANCE_UPDATE}`,
    method: "post",
    data: params,
  });
}
