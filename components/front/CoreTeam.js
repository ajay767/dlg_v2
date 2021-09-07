import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from '@components/Image';
import Typography from '@components/Typography';
import SwiperNavigation from '@swiper/NavButton';
import SwiperCore, { Navigation } from 'swiper';
SwiperCore.use([Navigation]);

import 'swiper/css';
import 'swiper/css/pagination';

// eslint-disable-next-line
import 'swiper/css/bundle';

const teamList = [
  {
    name: 'Mr. Nipurn Runij',
    profile: '/assets/images/nipurn_sir.jpg',
    role: 'Co-Founder and President ',
    about:
      'Mr. Nipurn is in 3rd year of his B.Tech. degree. He founded DLG with an aim of helping students of tier 3 colleges excel in their career. He believes, “it’s not the college that makes amazing student but it’sthe students who makes the college amazing.”Mr. Nipurn is a highly driven individual who’s focused on helping as many students as he can. !',
  },
  {
    name: 'Mr.Siddharth Songara',
    profile: '/assets/images/sidd_sir.jpg',
    role: 'Co-Founder and Vice President',
    about:
      'Mr. Siddharth is in 3rd year of his B.Tech. degree. He is known for his friendly personality, leadership and management skills. He has mentored the members of DLG in their professional as well as personal lives.',
    quote:
      "Don't be what happened to you. Be what you choose to be. It is only you who will write your own fate",
  },
  {
    name: 'Mr. Ankit Mishra',
    profile: '/assets/images/ankit_sir.jpg',
    role: 'Co-Founder and President',
    about:
      'Mr. Ankit is doing B.Tech. in Information Technology and is in his 4th year. He is known for his calm demeanour, leadership and management skills.He has mentored the members of DLG in their professional as well as personal lives.',
    quote:
      'College is not just a place to pursue a degree.You get go more about You and what You genuinely want to achieve in life.',
  },
];

const TeamCard = ({ team }) => {
  return (
    <div className="flex items-center flex-col justify-start text-gray-500">
      <Image src={team.profile} className="h-24  w-24  rounded-full" />
      <h3 className="font-lg font-semibold mt-4">{team.name}</h3>
      <h3 className="font-lg font-semibold mt-2 mb-4 text-primary-dark">
        {team.role}
      </h3>
      <p className="text-lg font-normal italic my-3 w-8/12 md:w-4/12 xl:w-3/12 text-center text-gray-500">
        {team.about}
        <br />
        <span className="text-primary-extradark ">{team.quote}</span>
      </p>
    </div>
  );
};

function CoreTeam() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="my-10">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <Typography className="text-gray-700" type="secondary">
            Core Team
          </Typography>
          <Typography className="text-gray-500" type="header-caption">
            We don't create employee, we create leaders.
          </Typography>
        </div>
        <SwiperNavigation nextRef={nextRef} prevRef={prevRef} />
      </div>
      <div className="my-5 py-10 ">
        <Swiper
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          loop={true}
          slidesPerView={'auto'}
          spaceBetween={20}
          freeMode={true}
          className="mySwiper"
        >
          {teamList.map((team, index) => (
            <SwiperSlide
              className="w-full flex items-center justify-center"
              key={index}
            >
              <TeamCard team={team} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default CoreTeam;
