import { useState, useContext } from 'react';
import withAuth from '@lib/withAuth';
import Wrapper from '@admin/Wrapper';
import Content from '@admin/Content';
import Image from '@components/Image';
import TextInput from '@components/TextInput';
import FilePond from '@components/FilePond';
import Typography from '@components/Typography';
import Button from '@components/Button';
import { HiBadgeCheck } from 'react-icons/hi';
import { updateUser } from '@utils/api';
import toast from 'react-hot-toast';
import { Context as rootContext } from '@context/root';

function Setting() {
  const user = useContext(rootContext);

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [domain, setDomain] = useState('Technical Head');
  const [files, setFiles] = useState([]);

  const handleProfileUpdate = async () => {
    const data = {
      name: user.name,
      email: user.email,
      domain: 'Technical head',
      photo: files.length > 0 ? files[files.length - 1].url : user.photo,
    };
    const result = await updateUser(data);
    if (result.status === 'success') {
      toast.success('succesfully Updated');
      user.fetchUser();
    }
  };

  return (
    <Wrapper>
      <Content>
        <Typography type="section" className="mb-2 text-gray-500">
          Profile
        </Typography>
        <div className="mx-auto w-full md:w-10/12 xl:w-8/12">
          <div className="relative w-20 h-20  md:w-28  md:h-28  bg-gray-200 rounded-full  mx-auto">
            <Image
              src={user.photo}
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
            value={files}
            setValue={setFiles}
            className="mt-2"
            files={files}
            setFiles={setFiles}
          />
          <TextInput
            disabled
            value={user.coupan.toUpperCase()}
            label="Security Token"
          />
          <Button onClick={handleProfileUpdate} btnType="primary">
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
