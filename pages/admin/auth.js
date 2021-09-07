import { useState } from 'react';
import universalCookie from 'universal-cookie';
import axios from 'axios';
import toast from 'react-hot-toast';
import AdmiPortal from '@components/layout/AdminPortal';
import Typography from '@components/Typography';
import TextInput from '@components/TextInput';
import Button from '@components/Button';
import { useRouter } from 'next/router';

const localCookie = new universalCookie();

function Auth() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const { data } = await axios.post('/api/login', {
      email,
      password,
    });

    localCookie.set('token', data.token);
    localCookie.set('role', data.role);
    toast.success('Welcome back!');
    router.push('/admin');
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
            <Button btnType="secondary" type="submit" className="my-4 ">
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
