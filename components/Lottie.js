import React, { useRef, useEffect, useMemo } from 'react';
import data from './../public/lottie/confeti.json';
import Lottie from 'react-lottie';

export default function Animation(props) {
  const lottie = useRef(null);
  const defaultOptions = useMemo(() => {
    return {
      loop: true,
      autoplay: true,
      animationData: data,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };
  }, []);
  useEffect(() => {
    if (lottie) defaultOptions.play = true;
  }, [defaultOptions]);
  return (
    <div className="lottie">
      <Lottie options={defaultOptions} ref={lottie} />
    </div>
  );
}
