import Cookies from "js-cookie";
export const config = {
  headers: {
    authorization: Cookies.get("token"),
  },
};
