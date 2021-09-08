import withAuth from '@lib/withAuth';
import Wrapper from '@admin/Wrapper';
import Content from '@admin/Content';
import Navbar from '@admin/Navbar';
import routes from '@admin/routes';
import Image from '@components/Image';
import Typography from '@components/Typography';
import Link from 'next/link';

function Blogging() {
  return (
    <Wrapper>
      <Navbar navItem={routes['blogging'].navbar} />
      <Content className="text-gray-500">
        <Typography type="section" className="mb-5">
          All Blogs
        </Typography>
        <div className="w-full lg:w-10/12">
          {new Array(6).fill(-2).map((blog, index) => {
            return (
              <Link href="/admin/blogging" key={index}>
                <a>
                  <div className="mb-5 flex justify-between items-start">
                    <Image
                      className="h-36 hidden md:block  md:w-3/12 mr-4 rounded "
                      src="/assets/images/meet.jpg"
                    />
                    <div className="w-full md:w-9/12">
                      <Typography type="section" className="font-bold">
                        Why you should join DLG
                      </Typography>
                      <Typography
                        type="header-caption"
                        className="overflow-clip "
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                      </Typography>
                    </div>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
      </Content>
    </Wrapper>
  );
}
const authProp = {
  component: Blogging,
  allowed: ['admin'],
};
export default withAuth(authProp);
