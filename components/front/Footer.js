import { useState } from 'react';
import Section from '../layout/Section';
import TextInput from '../TextInput';
import Button from '../Button';
import Link from 'next/link';

function Footer() {
  const [Message, setMessage] = useState('Write Message');
  return (
    <div className="bg-gray-900 ">
      <Section className="bg-gray-900 p-5 lg:p-10 py-10 grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="col-span-4 h-14">
          <img
            className="h-full"
            src="/assets/images/logo_white.png"
            alt="logo"
          />
        </div>
        <div className="text-gray-300 col-span-4 md:col-span-1">
          <span className="text-primary text-sm font-bold">About us</span>
          <p className="text-sm">
            Let’s build your career together “ We at digital learning group,
            prepare students for future by making them aware of all the
            opportunities
          </p>
        </div>
        <div className="flex justify-between md:justify-around items-start self-start ">
          <div className="text-gray-300">
            <span className="text-primary mb-2 text-sm font-bold">Links</span>
            <Link href="/">
              <a>
                <p className="text-sm">Home</p>
              </a>
            </Link>
            <Link href="/blog">
              <a>
                <p className="text-sm">Blog</p>
              </a>
            </Link>
            <Link href="/contact">
              <a>
                <p className="text-sm">Contact us</p>
              </a>
            </Link>
            <Link href="/about">
              <a>
                <p className="text-sm">About us</p>
              </a>
            </Link>
          </div>
          <div className="text-gray-300">
            <span className="text-primary mb-2 text-sm font-bold">Social</span>
            <Link href="https://instagram.com/digitallearninggroupmits?igshid=uzkh9ru4r3dg">
              <a>
                <p className="text-sm">Facebook</p>
              </a>
            </Link>
            <p className="text-sm">Instagram</p>
            <p className="text-sm">Linkedin</p>
          </div>
        </div>

        <div className="col-span-4 lg:col-span-1">
          <span className="text-primary mb-2 text-sm font-bold">
            Write Message
          </span>
          <TextInput
            textbox="custom"
            className="bg-gray-600 text-gray-200 my-2"
            value={Message}
            setValue={setMessage}
          />
          <Button btnType="small">Send</Button>
        </div>
        <div className="col-span-4 text-xs text-gray-400">
          <p>
            Launching into the grocery vertical, Flipkart introduces Supermart
            that is out to bring everyday essentials close to you. From pulses,
            spices, dairy, personal and sanitary care, breakfast essentials,
            health drinks, spreads, ready to cook, grooming to cleaning agents,
            we are happy to present everything you need to run a house. Now buy
            Grocery products for as low as 1 Rupee only - our 1 Rupee Store
            presents new products every day for a nominal price of 1 Rupee only.
            Terms and conditions apply.
          </p>
        </div>
      </Section>
    </div>
  );
}

export default Footer;
