import { useEffect, useState } from 'react';
import withAuth from '@lib/withAuth';
import Wrapper from '@admin/Wrapper';
import Content from '@admin/Content';
import Navbar from '@admin/Navbar';
import routes from '@admin/routes';
import Image from '@components/Image';
import Modal from '@components/Modal';
import Typography from '@components/Typography';
import router from 'next/router';
import Button from '@components/Button';
import { getAllBlogs } from '@utils/api';
import { BsPlus } from 'react-icons/bs';

let LocalBase, db;

function Blogging() {
  const [blogList, setBlogList] = useState([]);
  const [modalState, setModalState] = useState(false);
  const [blog, setBlog] = useState(null);

  const ModalCard = () => {
    return (
      <Modal>
        <div className='w-11/12 md:6/12 lg:w-4/12 bg-white text-gray-500  rounded p-5'>
          <div className='flex items-center justify-between '>
            <Typography type='header-caption' className='font-bold'>
              Blog Editor
            </Typography>
            <div
              onClick={handleModalState}
              className='transform rotate-45 cursor-pointer h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center'
            >
              <BsPlus size={35} />
            </div>
          </div>
          <div className='my-2 mb-4'>
            <Typography type='section' className='mb-2'>
              {blog.title}
            </Typography>
            <Typography type='header-caption'>{blog.description}</Typography>
          </div>
          <div>
            <Button
              btnType='primary'
              className='mr-2'
              onClick={() => {
                HandleBlogEdit(blog);
              }}
            >
              Edit
            </Button>
            <Button
              onClick={() => {
                HandleBlogEdit(blog);
              }}
              btnType='primary'
            >
              View
            </Button>
          </div>
        </div>
      </Modal>
    );
  };
  const HandleBlogEdit = (blog) => {
    console.log(blog._id);
  };
  const handleModalState = (blog) => {
    if (blog) setBlog(blog);
    setModalState(!modalState);
  };
  useEffect(() => {
    const init = async () => {
      LocalBase = (await import('localbase')).default;
      db = new LocalBase('db');
    };
    init();
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await getAllBlogs();
        setBlogList(res.blog);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <Wrapper>
      <Navbar navItem={routes['blogging'].navbar} />
      <Content className='text-gray-500'>
        <Typography type='section' className='mb-5'>
          All Blogs
        </Typography>
        {modalState && <ModalCard />}
        <div className='w-full lg:w-10/12'>
          {blogList.map((blog, index) => {
            return (
              <div
                onClick={() => handleModalState(blog)}
                key={index}
                className=' cursor-pointer mb-5 flex justify-between items-start'
              >
                <Image
                  className='h-36 hidden md:block  md:w-3/12 mr-4 rounded '
                  src={blog.poster}
                />
                <div className='w-full md:w-9/12 relative'>
                  <Typography type='section' className='font-bold'>
                    {blog.title}
                  </Typography>
                  <Typography type='header-caption' className='overflow-clip '>
                    {blog.description}
                  </Typography>
                </div>
              </div>
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
