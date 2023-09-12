import { ConfigModel } from "@/models";
import axios from "../http";

const configSettingsApiUrl = {
  URL_GET_CONFIG_LIST: "api/plazaConfig/list/get",
  URL_UPDATE_CONFIG_VALUE: "api/plazaConfig/layerInfoPic/upload",
};

/**
 * get activity list
 * @returns
 */
export function getConfigListApi() {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${configSettingsApiUrl.URL_GET_CONFIG_LIST}`,
    method: "get",
  });
}

/**
 * update config value
 * @param param
 * @returns
 */
export function updateConfigValueApi(param: Partial<ConfigModel>) {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${configSettingsApiUrl.URL_UPDATE_CONFIG_VALUE}`,
    method: "post",
    data: param,
  });
}
