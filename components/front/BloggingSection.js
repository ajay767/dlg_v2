import Section from '../layout/Section';
import Typography from '../Typography';
import BlogCard from './BlogCard';

function Blogging() {
  return (
    <Section className="my-10">
      <div className="mb-5">
        <Typography className="text-gray-700" type="secondary">
          Latest Blogs
        </Typography>
        <Typography className="text-gray-500" type="header-caption">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
      </div>
      <div className="my-10 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </Section>
  );
}

export default Blogging;
