import Button from '../Button';
import Link from 'next/link';
import CustomImageComponent from '../Image';
function BlogCard({ data }) {
  return (
    <div className="w-64 justify-self-center animate__bounceInLeft ">
      <CustomImageComponent
        className="rounded-md object-cover w-full h-44"
        alt="blog card"
        src={data.poster}
      />
      <h3 className="my-2 text-xl font-bold text-gray-700 truncate">
        {data.title}
      </h3>
      <p className="text-sm text-gray-600  ">{data.description}</p>
      <Link href={`/blog/${data._id}`}>
        <a>
          <Button className="my-4" btnType="small">
            Read more
          </Button>
        </a>
      </Link>
    </div>
  );
}

export default BlogCard;
