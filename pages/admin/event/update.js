import { useState } from 'react';
import withAuth from '@lib/withAuth';
import routes from '@components/admin/routes';
import NavBar from '@components/admin/Navbar';
import Wrapper from '@components/admin/Wrapper';
import Content from '@components/admin/Content';
import Typography from '@components/Typography';
import Button from '@components/Button';
import TextInput from '@components/TextInput';
import Loader from '@utils/Loader';

const UpdateEvent = () => {
  const [eventId, setEventId] = useState('');
  return (
    <Wrapper>
      <NavBar navItem={routes['events'].navbar} />
      <Content>
        <Typography type="section" className="text-gray-500">
          Update Event
        </Typography>
        <div className="">
          <TextInput
            value={eventId}
            setValue={setEventId}
            name="eventID"
            type="text"
            placeholder="Enter Event ID"
          />
          <Button btnType="secondary" type="search">
            Search
          </Button>
        </div>
        <div className="h-full flex items-center justify-center">
          <Loader />
        </div>
      </Content>
    </Wrapper>
  );
};

export default withAuth(UpdateEvent, '/admin/auth');
