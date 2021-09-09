import withAuth from '@lib/withAuth';
import { useState, useEffect } from 'react';
import Wrapper from '@admin/Wrapper';
import Content from '@admin/Content';
import Navbar from '@admin/Navbar';
import routes from '@admin/routes';
import BlogMarkdown from '@components/BlogMarkdown';

let LocalBase, db;

function Preview() {
  const [mounted, setMounted] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {});
  useEffect(() => {
    const init = async () => {
      LocalBase = (await import('localbase')).default;
      db = new LocalBase('db');
      const blogList = await db.collection('blogs').get();
      const draftBlog = blogList.filter((blog) => blog.id === 1);
      if (draftBlog.length > 0) {
        setData(JSON.parse(draftBlog[0].content));
      }
    };
    init();
    setMounted(true);
  }, []);

  return (
    <Wrapper>
      <Navbar navItem={routes['blogging'].navbar} />
      <Content>
        <div className='w-full lg:w-10/12'>
          {mounted && <BlogMarkdown data={data} />}
        </div>
      </Content>
    </Wrapper>
  );
}
const authProp = {
  component: Preview,
  allowed: ['admin'],
};
export default withAuth(authProp);
