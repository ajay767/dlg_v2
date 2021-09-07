import React from 'react';
import cookie from 'cookie';
import universalCookie from 'universal-cookie';
import redirect from './redirect';

const localCookie = new universalCookie();

function withAuth(Component, redirectURL = '/admin/auth') {
  return class Authenticated extends React.Component {
    static getInitialProps(ctx) {
      let token;
      if (ctx.req) {
        const cookieStr = ctx.req.headers.cookie || '';
        token = cookie.parse(cookieStr).token;
      } else {
        token = localCookie.get('token');
      }
      console.log('Protect token is ', token);

      if (!token) {
        redirect(ctx, redirectURL);
        return { status: 'redirecting' };
      }
      return { status: 'authenticated' };
    }

    render() {
      return <Component {...this.props} />;
    }
  };
}

export default withAuth;
