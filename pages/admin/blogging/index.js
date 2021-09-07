import withAuth from '@lib/withAuth';
import Wrapper from '@admin/Wrapper';
import Content from '@admin/Content';
import Navbar from '@admin/Navbar';
import routes from '@admin/routes';

function Blogging() {
  return (
    <Wrapper>
      <Navbar navItem={routes['blogging'].navbar} />
      <Content>All Blogs wll be shown Here</Content>
    </Wrapper>
  );
}
const authProp = {
  component: Blogging,
  allowed: ['admin'],
};
export default withAuth(authProp);
