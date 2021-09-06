import { useState } from 'react';
import PageWrapper from '@layout/PageWrapper';
import Section from '@layout/Section';
import TextInput from '@components/TextInput';
import Button from '@components/Button';
import TextArea from '@components/TextArea';
import Typography from '@components/Typography';
import { FiPhoneCall, FiMail, FiMap } from 'react-icons/fi';

function contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <PageWrapper>
      <h1>Hello this is my h1</h1>
      <div
        style={{
          backgroundImage:
            'linear-gradient(125deg, #000 50%, rgba(0,0,0,0)), url("/assets/images/post-box.jpg")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        className="xl:p-10 py-10"
      >
        <Section className="text-white md:hidden ">
          <Typography type="secondary">Get In Touch</Typography>
          <Typography type="header-caption">
            Feel free to ask your query
          </Typography>
        </Section>
        <Section
          style={{ minHeight: '60vh' }}
          className="text-white flex flex-col md:flex-row items-center  justify-between "
        >
          <div className="w-full md:w-6/12 order-first md:order-last rounded-md bg-white shadow-md p-5">
            <TextInput
              className="mb-2"
              value={name}
              setValue={setName}
              label="Name"
            />
            <TextInput
              className="mb-2"
              value={email}
              setValue={setEmail}
              label="Email"
            />
            <TextArea
              className="mb-2"
              value={message}
              setValue={setMessage}
              label="Message"
            />
            <Button btnType="primary">Send</Button>
          </div>

          <div className="my-10 w-full md:w-6/12 ">
            <div className="hidden md:block">
              <Typography type="secondary">Get In Touch</Typography>
              <Typography type="header-caption">
                Feel free to ask your query
              </Typography>
            </div>
            <div className="mt-10 w-full md:w-8/12">
              <div className="mb-4 flex justify-start items-center">
                <span>
                  <FiPhoneCall size={24} />
                </span>
                <span className="ml-4 ">+91-787-999-6998</span>
              </div>
              <div className="mb-4 flex justify-start items-center">
                <span>
                  <FiMail size={24} />
                </span>
                <span className="ml-4 ">dlgmits@gmail.com</span>
              </div>
              <div className="mb-4 flex justify-start items-start md:items-center">
                <span>
                  <FiMap size={24} />
                </span>
                <span className="ml-4">
                  Madhav Institute of Technology and Science Gwalior Madhya
                  Pradesh 474005
                </span>
              </div>
            </div>

            <div className="w-full md:w-8/12 mt-10 ">
              <Typography type="section">About Developer</Typography>
              <Typography type="caption" className="text-sm md:mt-2">
                This website is designed and developed by Ajay and Ashutosh,we
                are always excited to work on some awesome projects, email us
                and let's discuss over coffee.
                <br />
                <span className="text-primary font-bold">
                  aju9617@gmail.com
                </span>
                <br />
                <span className="text-primary font-bold">
                  ashusinghweb414@gmail.com
                </span>
              </Typography>
            </div>
          </div>
        </Section>
      </div>
    </PageWrapper>
  );
}

export default contact;
