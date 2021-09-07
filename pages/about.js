import { useRef } from 'react';
import PageWrapper from '@layout/PageWrapper';
import Section from '@layout/Section';
import Typography from '@components/Typography';
import SwiperSection from '@swiper/SwiperSection';
import SwiperNavigation from '@swiper/NavButton';
import CustomImageComponent from '../components/Image';
import Accordian from '@components/front/Accordian';
import CoreTeam from '@components/front/CoreTeam';

function TeamCard({ data }) {
  return (
    <div className="bg-white p-2 rounded shadow text-gray-700">
      <CustomImageComponent
        src={data}
        className="w-44 h-44 object-cover rounded"
      />
      <div className="my-2 ">
        <Typography type="header-caption" className="font-bold">
          Ajay yadav
        </Typography>
        <Typography type="header-caption">Technical Head</Typography>
      </div>
    </div>
  );
}

const team = [
  '/assets/images/dev-ajay.jpg',
  '/assets/images/sidd_sir.jpg',
  '/assets/images/harshita.jpeg',
  '/assets/images/satyam.jpeg',
  '/assets/images/vaishnavi.jpeg',
  '/assets/images/nipurn_sir.jpg',
  '/assets/images/profile1.jpg',
  '/assets/images/profile2.webp',
  '/assets/images/profile3.jpg',
];

function About() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
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
          <div className=" py-10  md:py-20">
            <div className="text-gray-100 w-full md:w-11/12 lg:w-8/12 xl:w-6/12     ">
              <Typography type="primary" className="mb-2">
                Working Together is
                <span className="text-primary"> Success</span>
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
        <div className="mt-10  mb-10 md:py-20  flex flex-col md:flex-row justify-around items-center">
          <CustomImageComponent
            className="w-full md:w-6/12 lg:w-4/12  shadow-md h-56 md:h-64  rounded-md"
            src="/assets/images/people-chair.jpg"
            alt="people on chair"
          />
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
        <div className="my-5 md:py-20  flex flex-col md:flex-row justify-around items-center">
          <CustomImageComponent
            className="w-full md:w-6/12 lg:w-4/12 md:order-last shadow-md h-56 md:h-64  rounded-md"
            src="/assets/images/meet.jpg"
            alt="people on chair"
          />
          <div className=" w-full md:w-6/12 md:p-10 mt-5 md:mt-0 text-gray-700">
            <Typography type="secondary" className="mb-2">
              Webinar and Events
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
      <Section>
        <div className="mb-10">
          <Accordian />
        </div>
      </Section>

      <Section>
        <CoreTeam />
      </Section>

      <Section className="my-10">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <Typography className="text-gray-700" type="secondary">
              Our Team
            </Typography>
            <Typography className="text-gray-500" type="header-caption">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Typography>
          </div>
          <SwiperNavigation nextRef={nextRef} prevRef={prevRef} />
        </div>
        <SwiperSection
          component={TeamCard}
          nextRef={nextRef}
          prevRef={prevRef}
          data={team}
        />
      </Section>
    </PageWrapper>
  );
}

export default About;
