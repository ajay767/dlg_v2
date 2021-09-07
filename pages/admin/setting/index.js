<<<<<<< HEAD
import { useState } from 'react';
import withAuth from '@lib/withAuth';
import Wrapper from '@admin/Wrapper';
import Content from '@admin/Content';
import Image from '@components/Image';
import TextInput from '@components/TextInput';
import FilePond from '@components/FilePond';
import Typography from '@components/Typography';
import Button from '@components/Button';
import { HiBadgeCheck } from 'react-icons/hi';

function Setting() {
  const [name, setName] = useState('Ajay Yadav');
  const [email, setEmail] = useState('aju9617@gmail.com');
  const [domain, setDomain] = useState('Technical Head');

  return (
    <Wrapper>
      <Content>
        <Typography type="section" className="mb-2 text-gray-500">
          Profile
        </Typography>
        <div className="mx-auto w-full md:w-10/12 xl:w-8/12">
          <div className="relative w-20 h-20  md:w-28  md:h-28  bg-gray-200 rounded-full  mx-auto">
            <Image
              src="/assets/images/user.png"
              className=" w-full h-full   rounded-full "
              alt="User"
            />
            <HiBadgeCheck
              size={28}
              className="text-secondary absolute bottom-0 right-0 rounded-full bg-white "
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <TextInput
              label="Name"
              value={name}
              setValue={setName}
              className="mt-2"
            />
            <TextInput
              label="Email"
              value={email}
              setValue={setEmail}
              className="mt-2"
            />
          </div>
          <TextInput
            label="Domain"
            value={domain}
            setValue={setDomain}
            className="mt-2"
          />
          <FilePond
            label="Picture"
            value={name}
            setValue={setName}
            className="mt-2"
          />
          <TextInput disabled value="SHJDS3787" label="Security Token" />
          <Button btnType="primary">Update Profile</Button>
        </div>
      </Content>
=======
import withAuth from '@lib/withAuth';
import Wrapper from '@admin/Wrapper';
import Content from '@admin/Content';

function Setting() {
  return (
    <Wrapper>
      <Content>Profile page</Content>
>>>>>>> b8fc0116716c8481e773461019d22b052d92aeec
    </Wrapper>
  );
}
const authProps = {
  component: Setting,
  allowed: ['admin', 'super'],
};
export default withAuth(authProps);
