import React from 'react';
import PageWrapper from '@layout/PageWrapper';
import Section from '@layout/Section';
import Image from '@components/Image';
import Typography from '@components/Typography';
import { getAllBlogs } from '@utils/api';
import Link from 'next/link';

function BlogPage({ blogs }) {
  return (
    <PageWrapper>
      <Section className="text-gray-500">
        <div className="w-full md:w-10/12 xl:w-8/12 p-0 md:p-5 ">
          {blogs.map((blog, index) => {
            return (
              <Link href={`/blog/${blog._id}`} key={index}>
                <a>
                  <div className="mb-10 flex justify-between items-start">
                    <Image
                      className="h-36 hidden md:block  md:w-4/12 mr-4 rounded "
                      src={blog.poster}
                    />
                    <div className="w-full md:w-8/12">
                      <Typography type="section" className="font-bold">
                        {blog.title}
                      </Typography>
                      <Typography
                        type="header-caption"
                        className="overflow-clip "
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
      </Section>
    </PageWrapper>
  );
}

export default BlogPage;

export const getStaticProps = async ({ params }) => {
  const result = await getAllBlogs();
  const blogs = result.blog;
  return {
    props: {
      blogs: blogs,
    },
    revalidate: 3, // Incremental Site Generation
  };
};
