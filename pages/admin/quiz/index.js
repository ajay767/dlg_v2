import Wrapper from '@admin/Wrapper';
import Navbar from '@admin/Navbar';
import Content from '@admin/Content';
import routes from '@admin/routes';

export default function index() {
  return (
    <Wrapper>
      <Navbar navItem={routes['quiz'].navbar} />
      <Content>Hello from Quiz</Content>
    </Wrapper>
  );
}
