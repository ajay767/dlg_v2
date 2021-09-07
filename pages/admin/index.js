import withAuth from '@lib/withAuth';
import Wrapper from '@components/admin/Wrapper';
import Content from '@components/admin/Content';
import Typography from '@components/Typography';

function Admin() {
  return (
    <Wrapper>
      <Content>
        <div className=" flex-1 mx-auto text-gray-500 p-2 lg:p-5 flex items-center justify-center">
          <Typography type="secondary" className=" text-center">
            Digital Learning <span className="text-primary-dark">Group</span>
            <span className="text-base  ml-2 ">v2.0</span>
          </Typography>
        </div>
      </Content>
    </Wrapper>
  );
}

const authProp = {
  component: Admin,
  allowed: ['admin'],
};

export default withAuth(authProp);
