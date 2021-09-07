import React from "react";
import cookie from "cookie";
import redirect from "./redirect";
import { getLocalUser } from "@utils/api";
import useUser from "../components/Custom Hooks/useUser";

function withAuth({
  component: Component,
  redirectURL = "/admin/auth",
  allowed = ["super"],
}) {
  return class Authenticated extends React.Component {
    static getInitialProps(ctx) {
      let token, role;
      if (ctx.req) {
        const cookieStr = ctx.req.headers.cookie || "";
        const cookieObj = cookie.parse(cookieStr);
        token = cookieObj.token;
        role = cookieObj.role;
      } else {
        const user = getLocalUser();
        token = user.token;
        role = user.role;
        console.log(token);
      }
      const isUserAllowed = allowed.includes(role) || role === "super";
      if (!token || !isUserAllowed) {
        redirect(ctx, redirectURL);
        return { status: "redirecting" };
      }
      return { status: "authenticated" };
    }

    render() {
      return <Component {...this.props} />;
    }
  };
}

export default withAuth;
