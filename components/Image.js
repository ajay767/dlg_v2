import { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

const CustomImageComponent = ({
  src,
  className,
  objectFit = 'cover',
  objectPosition = 'center',
  ...props
}) => {
  const [visible, setVisible] = useState(false);
  const [blurDataURL, setBlurDataURL] = useState('');

  useEffect(() => {
    const fetchBlurUrl = async () => {
      const res = await axios.post('/api/blur', { src });
      setBlurDataURL(res.data.base64);
      setVisible(true);
    };

    fetchBlurUrl();
  }, []);

  return (
    <>
      {visible ? (
        <div className={`relative overflow-hidden ${className}`}>
          <Image
            layout="fill"
            objectFit={objectFit}
            objectPosition={objectPosition}
            blurDataURL={blurDataURL}
            src={src}
            placeholder="blur"
            {...props}
          />
        </div>
      ) : (
        <div className={`relative overflow-hidden ${className}`}></div>
      )}
    </>
  );
};

export default CustomImageComponent;
