import Button from '../Button';

function BlogCard() {
  return (
    <div className="  w-full sm:w-64 justify-self-center ">
      <img
        className="rounded-sm object-cover w-full h-44"
        alt="blog card"
        src="/assets/images/beyond.jpg"
      />
      <h3 className="my-2 text-xl font-bold text-gray-700">
        Increaing corona cases, what to do?
      </h3>
      <p className="text-sm text-gray-600  ">
        We at digital learning group, prepare students for future by making them
        aware of all the opportunities
      </p>
      <Button className="my-4" btnType="small">
        Read more
      </Button>
    </div>
  );
}

export default BlogCard;
