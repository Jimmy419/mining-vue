import axios from "../http";

const commonApiUrl = {
  URL_GET_PAY_METHOD_LIST: "api/pay/method/list",
};

export function getPayMethodList() {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${commonApiUrl.URL_GET_PAY_METHOD_LIST}`,
    method: "get",
  });
}
