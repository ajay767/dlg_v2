import withAuth from '../../../lib/auth';
import routes from '../../../components/admin/routes';
import NavBar from '../../../components/admin/Navbar';
import Wrapper from '../../../components/admin/Wrapper';
import Content from '../../../components/admin/Content';
import Typography from '../../../components/Typography';
import Loader from '../../../utils/Loader';

const UpdateMaterial = () => {
  return (
    <Wrapper>
      <NavBar navItem={routes['academics'].navbar} />
      <Content>
        <Typography type="section" className="text-gray-500">
          Update Material
        </Typography>
        <div className="h-full flex items-center justify-center">
          <Loader />
        </div>
      </Content>
    </Wrapper>
  );
};

export default withAuth(UpdateMaterial, '/admin/auth');
