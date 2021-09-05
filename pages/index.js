import Section from '@components/layout/Section';
import Landing from '@components/front/Landing';
import UpcomingEvent from '@components/front/UpcomingEvent';
import PageWrapper from '@components/layout/PageWrapper';
import Blogging from '@components/front/BloggingSection';

function ShortHeader() {
  return (
    <Section className="my-20">
      <div className="w-full md:w-8/12 mx-auto px-10 flex items-center justify-between  ">
        <p className="flex flex-col justify-center items-center ">
          <span
            style={{
              WebkitTextStrokeWidth: '2px',
              WebkitTextStrokeColor: '#c78426',
            }}
            className="font-bold text-5xl text-white flex items-center "
          >
            45
            <span
              style={{
                WebkitTextStrokeWidth: '0',
                WebkitTextStrokeColor: '#c78426',
              }}
              className="text-gray-700 text-4xl"
            >
              +
            </span>
          </span>
          <span className="text-base text-gray-700 font-bold"> Members</span>
        </p>
        <p className="flex flex-col justify-center items-center ">
          <span
            style={{
              WebkitTextStrokeWidth: '2px',
              WebkitTextStrokeColor: '#c78426',
            }}
            className="font-bold text-5xl text-white flex items-center "
          >
            98
            <span
              style={{
                WebkitTextStrokeWidth: '0',
                WebkitTextStrokeColor: '#c78426',
              }}
              className="text-gray-700 text-4xl"
            >
              +
            </span>
          </span>
          <span className="text-base text-gray-700 font-bold"> Podcast</span>
        </p>
        <p className="flex flex-col justify-center items-center ">
          <span
            style={{
              WebkitTextStrokeWidth: '2px',
              WebkitTextStrokeColor: '#c78426',
            }}
            className="font-bold text-5xl text-white flex items-center "
          >
            23
            <span
              style={{
                WebkitTextStrokeWidth: '0',
                WebkitTextStrokeColor: '#c78426',
              }}
              className="text-gray-700 text-4xl"
            >
              +
            </span>
          </span>
          <span className="text-base text-gray-700 font-bold">Workshops</span>
        </p>
      </div>
    </Section>
  );
}

function Main() {
  return (
    <div id="landing">
      <PageWrapper>
        <>
          <Landing />
          <ShortHeader />
          <Section className="my-24  ">
            <UpcomingEvent />
          </Section>
          <Blogging />
        </>
      </PageWrapper>
    </div>
  );
}

export default Main;
