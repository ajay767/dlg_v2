import BlogUpdateCard from '@components/BLOG/BlogUpdateCard';
import { useEffect, useState } from 'react';
import { getBlog, getAllBlogs } from '@utils/api';
import { useRouter } from 'next/router';
import withAuth from '@lib/withAuth';

export const getStaticPaths = async () => {
  const result = await getAllBlogs();
  const data = [...result.blog];
  const paths = data.map((blog) => {
    return {
      params: {
        id: blog._id,
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const blog = await getBlog({ id: params.id });
  return {
    props: {
      blog,
    },
    revalidate: 5, // Incremental Site Generation
  };
};

function Blog_update({ blog }) {
  console.log(blog);
  let LocalBase, db;
  const router = useRouter();
  const [blogData, setBlogData] = useState(blog);
  const [render, setRender] = useState(false);
  return (
    <div>
      <BlogUpdateCard blog={blogData} />
    </div>
  );
}
// Blog_update.getInitialProps = async ({ params }) => {
//   const blog = await getBlog({ id: params.id });
//   return {
//     blog,
//   };
// };

export default Blog_update;
