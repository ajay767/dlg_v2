import withAuth from '@lib/withAuth';
import Wrapper from '@components/admin/Wrapper';
import Content from '@components/admin/Content';

function Admin() {
  return (
    <Wrapper>
      <Content>
        <div className="bg-red-500  w-full h-96"></div>
      </Content>
    </Wrapper>
  );
}

export default withAuth(Admin, '/admin/auth');
