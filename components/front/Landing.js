import Typography from '../Typography';
import Button from '../Button';
import Section from '../layout/Section';
import CustomImageComponent from '../Image';
function Landing() {
  return (
    <Section className="overflow-hidden">
      <div className="relative flex items-center" style={{ height: '80vh' }}>
        <div className="md:hidden position top-0 bottom-0 left-0 right-0">
          <img
            alt="spiral shade"
            src="/assets/images/tech-1.jpg"
            style={{ aspectRatio: '1/1' }}
            className=" w-1/6 object-cover rounded-full shadow-lg absolute top-5 left-10 "
          />
          <img
            alt="spiral shade"
            src="/assets/images/tech-2.jpg"
            style={{ aspectRatio: '1/1' }}
            className=" w-2/6 object-cover rounded-full shadow-lg absolute bottom-5 right-5 "
          />
          <img
            alt="spiral shade"
            src="/assets/images/tech-3.png"
            style={{ aspectRatio: '1/1' }}
            className=" w-1/6 object-cover rounded-full shadow-lg absolute bottom-20 left-10"
          />
          <img
            alt="spiral shade"
            src="/assets/images/tech-4.jpg"
            style={{ aspectRatio: '1/1' }}
            className="w-44 object-cover rounded-full shadow-lg absolute top-5 right-10 "
          />
        </div>
        <div className="relative w-full md:w-6/12  ">
          <Typography type="primary" className="text-gray-700">
            Digital Learning <span className="text-primary-dark">Group</span>
          </Typography>
          <Typography type="header-caption" className="text-gray-500 my-2">
            Let’s build your career together “ We at digital learning group,
            prepare students for future by making them aware of all the
            opportunities available in the digital world and how to make best
            use of them
          </Typography>
          <div className="flex items-center">
            <Button className="my-4 mr-5" btnType="hero">
              Join us
            </Button>
            <Button className="my-4 mr-5 box-border" btnType="outline">
              Contact us
            </Button>
          </div>
        </div>
        <div className="w-6/12 h-4/5 relative  hidden md:block">
          <img
            alt="spiral shade"
            src="/assets/images/spiral.png"
            className=" w-11/12 mx-auto opacity-30"
          />
          <img
            alt="spiral shade"
            src="/assets/images/tech-1.jpg"
            style={{ aspectRatio: '1/1' }}
            className=" w-1/6 object-cover rounded-full shadow-lg absolute top-5 left-10 "
          />
          <img
            alt="spiral shade"
            src="/assets/images/tech-2.jpg"
            style={{ aspectRatio: '1/1' }}
            className=" w-2/6 object-cover rounded-full shadow-lg absolute md:bottom-40 lg:bottom-10 right-5 "
          />
          <img
            alt="spiral shade"
            src="/assets/images/tech-3.png"
            style={{ aspectRatio: '1/1' }}
            className=" w-2/6 object-cover rounded-full shadow-lg absolute bottom-52 left-10 md:bottom-48 lg:bottom-10"
          />
          <img
            alt="spiral shade"
            src="/assets/images/tech-4.jpg"
            style={{ aspectRatio: '1/1' }}
            className="w-3/6 object-cover rounded-full shadow-lg absolute top-5 right-20 "
          />
        </div>
      </div>
    </Section>
  );
}

export default Landing;
