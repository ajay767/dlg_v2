import { useEffect, useState } from 'react';
import withAuth from '@lib/withAuth';
import Wrapper from '@admin/Wrapper';
import Content from '@admin/Content';
import Image from '@components/Image';
import TextInput from '@components/TextInput';
import FilePond from '@components/FilePond';
import Typography from '@components/Typography';
import Button from '@components/Button';
import { HiBadgeCheck } from 'react-icons/hi';
import useUser from '@hook/useUser';
import { getUser } from '@utils/api';
import { updateUser } from '@utils/api';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

function Setting() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [coupan, setCoupan] = useState('');
  const [email, setEmail] = useState('user.email');
  const [domain, setDomain] = useState('Technical Head');
  const [files, setFiles] = useState([]);

  const handleProfileUpdate = async () => {
    const data = {
      name,
      email,
      domain,
      photo: files.length > 0 ? files[0].url : '',
    };
    const result = await updateUser(data);
    if (result.status === 'success') {
      toast.success('succesfully Updated');
      router.reload(window.location.pathname);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const { user } = await getUser();
      setName(user.name);
      setEmail(user.email);
      setCoupan(user.coupan);
    };

    fetchUser();
  }, []);

  return (
    <Wrapper>
      <Content>
        <Typography type='section' className='mb-2 text-gray-500'>
          Profile
        </Typography>
        <div className='mx-auto w-full md:w-10/12 xl:w-8/12'>
          <div className='relative w-20 h-20  md:w-28  md:h-28  bg-gray-200 rounded-full  mx-auto'>
            <Image
              src={
                files.length > 0
                  ? files[0].url
                  : 'https://res.cloudinary.com/dazsoonxb/image/upload/v1631084985/vwkptfla8ebfvu0hjtgx.png'
              }
              className=' w-full h-full   rounded-full '
              alt='User'
            />
            <HiBadgeCheck
              size={28}
              className='text-secondary absolute bottom-0 right-0 rounded-full bg-white '
            />
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
            <TextInput
              label='Name'
              value={name}
              setValue={setName}
              className='mt-2'
            />
            <TextInput
              label='Email'
              value={email}
              setValue={setEmail}
              className='mt-2'
            />
          </div>
          <TextInput
            label='Domain'
            value={domain}
            setValue={setDomain}
            className='mt-2'
          />
          <FilePond
            label='Picture'
            value={files}
            setValue={setFiles}
            className='mt-2'
            files={files}
            setFiles={setFiles}
          />
          <TextInput
            disabled
            value={coupan.toUpperCase()}
            label='Security Token'
          />
          <Button onClick={handleProfileUpdate} btnType='primary'>
            Update Profile
          </Button>
        </div>
      </Content>
    </Wrapper>
  );
}
const authProps = {
  component: Setting,
  allowed: ['admin', 'super'],
};
export default withAuth(authProps);
