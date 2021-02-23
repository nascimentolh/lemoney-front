import Vue from "vue";

export const userKey = "@LEMONEY_APP_USER";
export const baseApiUrl = "http://localhost:3000";

export function showError(e) {
  if (e && e.response && e.response.data) {
    Vue.toasted.global.defaultError({ msg: e.response.data.error });
  } else if (typeof e === "string") {
    Vue.toasted.global.defaultError({ msg: e });
  } else {
    Vue.toasted.global.defaultError();
  }
}

export default { baseApiUrl, showError };
