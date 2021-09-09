import BlogUpdateCard from '@components/BLOG/BlogUpdateCard';
import { useEffect, useState } from 'react';
import { getBlog, getAllBlogs } from '@utils/api';
import withAuth from '@lib/withAuth';

function Blog_update({ blog }) {
  const [blogData, setBlogData] = useState(blog);
  return (
    <div>
      <BlogUpdateCard blog={blogData} />
    </div>
  );
}
Blog_update.getInitialProps = async (ctx) => {
  const blog = await getBlog({ id: ctx.query.id });
  return {
    blog,
  };
};

const authProp = {
  component: Blog_update,
  allowed: ['admin'],
};
export default withAuth(authProp);

// export const getStaticPaths = async () => {
//   const result = await getAllBlogs();
//   const data = [...result.blog];
//   const paths = data.map((blog) => {
//     return {
//       params: {
//         id: blog._id,
//       },
//     };
//   });
//   return {
//     paths,
//     fallback: true,
//   };
// };

// export const getStaticProps = async ({ params }) => {
//   const blog = await getBlog({ id: params.id });
//   return {
//     props: {
//       blog,
//     },
//     revalidate: 5, // Incremental Site Generation
//   };
// };
