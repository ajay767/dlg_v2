import { useState } from 'react';
import TextInput from '@components/TextInput';
import Typography from '@components/Typography';
import Button from '@components/Button';
import FilePond from '@components/FilePond';
import Section from '@layout/Section';
function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signupToken, setSignupToken] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(email, password, signupToken);
  };

  return (
    <Section>
      <div className="flex items-center justify-center flex-col my-auto">
        <img
          className="h-20 md:24 mb-4"
          src="/assets/images/logo_main.png"
          alt="logo"
        />
        <Typography type="secondary" className="text-center text-gray-600">
          Signup for Admin portal
        </Typography>
        <form
          onSubmit={handleSignup}
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
          <TextInput
            label="Confirm Password"
            type="text"
            value={confirmPassword}
            setValue={setConfirmPassword}
          />
          <TextInput
            label="Token"
            type="text"
            value={signupToken}
            setValue={setSignupToken}
          />
          <Typography type="lable">Profile</Typography>
          <FilePond />
          <Button btnType="primary" type="submit">
            Signup
          </Button>
        </form>
        <p className="text-sm text-gray-300 text-center">verion 2.0</p>
      </div>
    </Section>
  );
}

export default Signup;
