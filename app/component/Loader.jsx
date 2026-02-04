'use client';

import { gsap } from 'gsap';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import logo from './image/logo.png';

const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete,
    });

    tl.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
      }
    )
      .to(logoRef.current, {
        scale: 0.95,
        duration: 0.4,
        ease: 'power2.inOut',
      })
      .to(loaderRef.current, {
        yPercent: -100,
        duration: 1,
        ease: 'power4.inOut',
      });
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#061113]"
    >
      <div ref={logoRef}>
        <Image src={logo} alt="Loading" className="h-[48px] w-auto" />
      </div>
    </div>
  );
};

export default Loader;
