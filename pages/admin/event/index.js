import { useState } from 'react';
import withAuth from '@lib/withAuth';
import routes from '@components/admin/routes';
import NavBar from '@components/admin/Navbar';
import Content from '@components/admin/Content';
import Wrapper from '@components/admin/Wrapper';
import EventForm from '@components/admin/EventForm';
import Typography from '@components/Typography';

const AllEvents = () => {
  const [formData, setFormData] = useState({
    eventName: '',
    organiser: '',
    description: '',
    eventDate: '',
    chiefGuest: '',
    overview: '',
  });

  const handleEventForm = (data) => {
    console.log(data);
  };

  return (
    <Wrapper>
      <NavBar navItem={routes['events'].navbar} />
      <Content>
        <Typography type="section" className="text-gray-500">
          All Event List
        </Typography>
      </Content>
    </Wrapper>
  );
};

export default withAuth(AllEvents, '/admin/auth');
