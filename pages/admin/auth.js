import { useState } from 'react';
import toast from 'react-hot-toast';
import AdmiPortal from '@components/layout/AdminPortal';
import Typography from '@components/Typography';
import TextInput from '@components/TextInput';
import Button from '@components/Button';
import { useRouter } from 'next/router';
import { login } from './../../utils/api';
import Cookies from 'js-cookie';

function Auth() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onLoad = (data) => {
    console.log(data);
    const { token } = data;
    const { role } = data.user;
    Cookies.set('token', token, { path: '' });
    Cookies.set('role', role, { path: '' });
    toast.success('Welcome to the Admin of DLG');
    router.push('/admin');
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    login(data, onLoad);
  };

  return (
    <AdmiPortal>
      <div className="admin__container p-10">
        <div className="flex items-center justify-center flex-col my-auto">
          <img
            className="h-20 md:24 mb-4"
            src="/assets/images/logo_main.png"
            alt="logo"
          />
          <Typography type="secondary" className="text-center text-gray-600">
            Welcome to Admin portal
          </Typography>
          <form
            onSubmit={handleLogin}
            className="grid grid-cols-1 gap-4 w-full md:w-8/12 xl:w-6/12 mx-auto my-10"
          >
            <TextInput
              label="Email"
              type="email"
              value={email}
              setValue={setEmail}
            />
            <TextInput
              label="Password"
              type="password"
              value={password}
              setValue={setPassword}
            />
            <Button btnType="primary" type="submit" className="my-4 ">
              Login
            </Button>
          </form>
          <p className="text-sm text-gray-300 text-center">verion 2.0</p>
        </div>
      </div>
    </AdmiPortal>
  );
}

export default Auth;
