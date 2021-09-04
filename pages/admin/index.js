import withAuth from '@lib/withAuth';
import Wrapper from '@components/admin/Wrapper';
import Content from '@components/admin/Content';

function Admin() {
  return (
    <Wrapper>
      <Content>this is main page</Content>
    </Wrapper>
  );
}

export default withAuth(Admin, '/admin/auth');
