import { useState } from 'react';
import Typography from '@components/Typography';
import Button from '@components/Button';
import TextInput from '@components/TextInput';

function RegisterCard({ handleRegistrationForm }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <div className="rounded-md my-10 text-gray-600 w-full mx-2 md:w-4/12 md:mx-auto bg-white shadow  p-4">
      <Typography type="section" className="mb-5">
        Lorem Ipsum dummy text of the printing
      </Typography>
      <TextInput
        value={name}
        setValue={setName}
        label="Name"
        className="mt-2"
      />
      <TextInput
        type="email"
        value={email}
        setValue={setEmail}
        label="Email"
        className="mt-2"
      />
      <Button
        onClick={() => handleRegistrationForm({ name, email })}
        className="mt-4"
        btnType="primary"
      >
        Start
      </Button>
    </div>
  );
}

export default RegisterCard;
