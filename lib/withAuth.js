import React from 'react';
import cookie from 'cookie';
import redirect from './redirect';
import { getLocalUser } from '@utils/api';

function withAuth({
  component: Component,
  redirectURL = '/admin/auth',
  allowed = ['super'],
}) {
  const Protect = ({ children, ...props }) => {
    return <Component {...props}>{children}</Component>;
  };

  Protect.getInitialProps = async (ctx) => {
    let token, role;
    if (ctx.req) {
      const cookieStr = ctx.req.headers.cookie || '';
      const cookieObj = cookie.parse(cookieStr);
      token = cookieObj.token;
      role = cookieObj.role;
    } else {
      const user = getLocalUser();
      token = user.token;
      role = user.role;
    }
    const isUserAllowed = allowed.includes(role) || role === 'super';
    if (!token || !isUserAllowed) {
      redirect(ctx, redirectURL);
      return { status: 'Redirected' };
    }

    const props =
      Component.getInitialProps && (await Component.getInitialProps(ctx));

    return { ...props, status: 'success' };
  };

  return Protect;
}

export default withAuth;
