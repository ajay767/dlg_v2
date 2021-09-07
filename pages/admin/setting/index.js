import withAuth from '@lib/withAuth';
import Wrapper from '@admin/Wrapper';
import Content from '@admin/Content';

function Setting() {
  return (
    <Wrapper>
      <Content>Profile page</Content>
    </Wrapper>
  );
}
const authProps = {
  component: Setting,
  allowed: ['admin', 'super'],
};
export default withAuth(authProps);
