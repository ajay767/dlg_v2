import React from 'react';
import axios from 'axios';
import redirect from './redirect';

const baseURL = 'http://localhost:3000';

function withAuth(Component, redirectURL) {
  return class Authenticated extends React.Component {
    static async getInitialProps(ctx) {
      try {
        const url = `${baseURL}/api/protect`;
        const res = await axios.get(url);
        const status = res.data.auth;
        if (!status) {
          redirect(ctx, redirectURL);
        }
        return { data: 'authenticated' };
      } catch (error) {
        console.log(error);
      }
    }

    render() {
      return <Component {...this.props} />;
    }
  };
}

export default withAuth;
