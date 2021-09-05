import PageWrapper from '@layout/PageWrapper';
import Section from '@layout/Section';
import Typography from '@components/Typography';
import Image from 'next/image';

function About() {
  return (
    <PageWrapper>
      <div
        className="overflow-hidden relative shadow-lg flex flex-col md:flex-row justify-between items-center h-max bg-gray-800"
        style={{
          backgroundImage:
            ' linear-gradient(125deg, #000 50%, rgba(0,0,0,0)), url("/assets/images/meet.jpg")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <Section>
          <div className=" py-10 px-5 md:py-20">
            <div className="text-gray-100 w-full md:w-11/12 lg:w-8/12 xl:w-6/12     ">
              <Typography type="primary" className="mb-2">
                Working Together is
                <span className="text-primary">Success</span>
              </Typography>
              <Typography type="header-caption" className="">
                Digital learning group is a student run community of Madhav
                Institute of Technology and Science. We help students excel in
                their careers by helping them develop their technical and soft
                skills and thus having an overall personality development and
                also preparing them for this era of digitalization.
              </Typography>
            </div>
          </div>
        </Section>
      </div>
      <Section>
        <div className="p-5 md:py-20  flex flex-col md:flex-row justify-around items-center">
          <div className=" w-full md:w-6/12 lg:w-4/12 shadow-md ">
            <img
              className="h-72 md:h-full w-full   rounded-md object-cover  "
              src="/assets/images/people-chair.jpg"
              alt="people on chair"
            />
          </div>
          <div className=" w-full md:w-6/12 md:p-5 lg:p-10 mt-5 md:mt-0 text-gray-700">
            <Typography type="secondary" className="mb-2">
              How we work
            </Typography>
            <Typography type="content">
              We frequently organize workshops, webinars and various activities
              on online platforms which focuses on development of technical and
              soft skills, required in the real world. The best thing about us
              :- Most of our events and all webinars are absolutely FREE!
            </Typography>
          </div>
        </div>
        <div className="p-5 md:py-20  flex flex-col md:flex-row justify-around items-center">
          <div className="md:order-last  w-full md:w-4/12 shadow-md ">
            <img
              className="h-72 w-full   rounded-md object-cover "
              src="/assets/images/meet.jpg"
              alt="people on chair"
            />
          </div>
          <div className=" w-full md:w-6/12 md:p-10 mt-5 md:mt-0 text-gray-700">
            <Typography type="secondary" className="mb-2">
              Our Webinar
            </Typography>
            <Typography type="content">
              We organize weekly webinars with professionals and experts as
              speakers. Our webinars deal with plathora of topics which revolve
              around “How to be placement and industry ready”,
              “entrepreneurship” , “Topper Talks” and everything which can be
              useful for a student
            </Typography>
          </div>
        </div>
      </Section>
    </PageWrapper>
  );
}

export default About;
