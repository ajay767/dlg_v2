import withAuth from '@lib/withAuth';
import { useState, useEffect } from 'react';
import Wrapper from '@admin/Wrapper';
import Content from '@admin/Content';
import Navbar from '@admin/Navbar';
import routes from '@admin/routes';
import BlogMarkdown from '@components/BlogMarkdown';

function Preview() {
  const [mounted, setMounted] = useState(false);
  const [data, setData] = useState({});
  useEffect(() => {
    setMounted(true);
    const blogJSON = localStorage.getItem('blog-draft');
    console.log(JSON.parse(blogJSON));
    if (blogJSON) {
      setData(JSON.parse(blogJSON));
    }
  }, []);
  return (
    <Wrapper>
      <Navbar navItem={routes['blogging'].navbar} />
      <Content>
        <div className="w-full lg:w-10/12">
          {mounted && <BlogMarkdown data={data} />}
        </div>
      </Content>
    </Wrapper>
  );
}

export default withAuth(Preview);
