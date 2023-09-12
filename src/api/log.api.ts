import axios from "../http";

const logApiUrl = {
  URL_GET_ACTION_LOG_LIST: "api/bizlog/list",
  URL_GET_LOGIN_LOG_LIST: "api/user/login/history",
};

/**
 * get actions log list
 * @returns
 */
export function getActionLogList() {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${logApiUrl.URL_GET_ACTION_LOG_LIST}`,
    method: "get",
  });
}

/**
 * get login log list
 * @returns
 */
export function getLoginLogList() {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${logApiUrl.URL_GET_LOGIN_LOG_LIST}`,
    method: "get",
  });
}
