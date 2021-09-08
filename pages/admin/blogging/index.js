import withAuth from '@lib/withAuth';
import Wrapper from '@admin/Wrapper';
import Content from '@admin/Content';
import Navbar from '@admin/Navbar';
import routes from '@admin/routes';
import Image from '@components/Image';
import Typography from '@components/Typography';
import Link from 'next/link';
import { getAllBlogs } from '../../../utils/api';
import { useEffect, useState } from 'react';

function Blogging() {
  const [blogs, setBlogs] = useState([]);
  console.log(blogs);
  useEffect(async () => {
    try {
      const result = await getAllBlogs();
      setBlogs([...result.blog]);
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <Wrapper>
      <Navbar navItem={routes['blogging'].navbar} />
      <Content className='text-gray-500'>
        <Typography type='section' className='mb-5'>
          All Blogs
        </Typography>
        <div className='w-full lg:w-10/12'>
          {blogs.map((blog, index) => {
            return (
              <Link href='/admin/blogging' key={blog._id}>
                <a>
                  <div className='mb-5 flex justify-between items-start'>
                    <Image
                      className='h-36 hidden md:block  md:w-3/12 mr-4 rounded '
                      src='/assets/images/meet.jpg'
                    />
                    <div className='w-full md:w-9/12'>
                      <Typography type='section' className='font-bold'>
                        {blog.title}
                      </Typography>
                      <Typography
                        type='header-caption'
                        className='overflow-clip '
                      >
                        {blog.description}
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
