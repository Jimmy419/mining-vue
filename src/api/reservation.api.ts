import axios from "../http";

const reservationApiUrl = {
  URL_GET_RESERVATION_LIST: "api/activity/reservations",
  URL_RESERVATION_BUNCH_CONFIRM: "api/activity/reservation/remedy",
};

/**
 * get reservation list
 * @returns
 */
export function getReservationListApi(sessionId: number) {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${reservationApiUrl.URL_GET_RESERVATION_LIST}`,
    method: "get",
    params: {
      sessionId,
    },
  });
}

/**
 * reservation bunch confirmation
 * @param data
 * @returns
 */
export function reservationBunchConfirm(data: string[]) {
  return axios({
    url: `${process.env.VUE_APP_API_PREFIX}${reservationApiUrl.URL_RESERVATION_BUNCH_CONFIRM}`,
    method: "put",
    data: data,
  });
}
