import withAuth from '@lib/withAuth';
import Wrapper from '@components/admin/Wrapper';
import Content from '@components/admin/Content';

function Admin() {
  return (
    <Wrapper>
      <Content>
        <div className="w-full h-96">Hello</div>
      </Content>
    </Wrapper>
  );
}

export default withAuth(Admin, '/admin/auth');
