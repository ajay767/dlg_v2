import React from 'react';
import UniversalCookie from 'universal-cookie';
import cookieParser from 'cookie';

const cookie = new UniversalCookie();

function withAuth(Component, redirectURL) {
  return class Authenticated extends React.Component {
    static getInitialProps(ctx) {
      let token;
      if (ctx.req) {
        const cookieStr = ctx.req.headers.cookie || '';
        const cookieObj = cookieParser.parse(cookieStr);
        token = cookieObj?.token;
      } else {
        token = cookie.get('token');
      }

      if (!token) {
        ctx.res.writeHead(302, {
          Location: redirectURL,
        });
        ctx.res.end();
      }

      return { hello: 'world' };
    }

    render() {
      return <Component {...this.props} />;
    }
  };
}

export default withAuth;
