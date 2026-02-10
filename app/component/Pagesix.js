'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import image2 from './image/image fill.png';
import image3 from './image/image.png';
import image4 from './image/image120.png';
import numbeingss from './image/image124.png';
import image5 from './image/image1254.png';
import lastone from './image/imagscase.png';

gsap.registerPlugin(ScrollTrigger);


const Pagesix = () => {
const wrapperRef = useRef(null);
const titleRef = useRef(null);
const logosRef = useRef([]);

useEffect(() => {
  const mm = gsap.matchMedia();

  mm.add('(min-width: 768px)', () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
      defaults: {
        ease: 'power3.out',
        duration: 0.5,
      },
    });

    // Section reveal
    tl.from(wrapperRef.current, {
      autoAlpha: 0,
      y: 60,
    })

    // Title + paragraph
    .from(
      titleRef.current,
      {
        autoAlpha: 0,
        y: 30,
      },
      '-=0.4'
    )

    // Logos stagger
    .from(
      logosRef.current,
      {
        autoAlpha: 0,
        height: 0,
        y: 40,
        scale: 0.9,
        stagger: 0.15,
      },
      '-=0.2'
    );
  });

  return () => mm.revert();
}, []);

    
    return (
        <div id='About' ref={wrapperRef} className='pb-[40px] sm:pb-[48px] md:pb-[60px] lg:pb-[90px] xl:pb-[120px] 2xl:pb-[150px] px-6 sm:px-0 relative'>
           <div className='container mx-auto'>
              <div ref={titleRef} className='flex items-center flex-col justify-center'>
                        <h2 className='tradines text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[62px]'>
                        <span>Our Trusted </span><span className='unlocyhoua'>Partners</span>  
                        </h2>
                        <p className='bitstartp text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[24px]'>We partner with top industry leaders to enhance your trading <br className="md:block hidden"/>experience with innovation and reliability.</p>
                      </div>
              <div className='grid grid-cols-3 md:grid-cols-6 justify-center items-center gap-[24px] sm:gap-[32px] md:gap-[36px] lg:gap-[40px] xl:gap-[48px] 2xl:gap-[64px] mt-[32px] sm:mt-[36px] md:mt-[40px] lg:mt-[48px] xl:mt-[64px] 2xl:mt-[84px]'>
                <Image ref={(el) => (logosRef.current[0] = el)} className='w-full brightness-75' src={image2} alt='Loading...'/>
                <Image ref={(el) => (logosRef.current[1] = el)} className='w-full brightness-75' src={image3} alt='Loading...'/>
                <div ref={(el) => (logosRef.current[2] = el)} className='flex items-center justify-center'>
                <Image className='w-1/2 brightness-75' src={image4} alt='Loading...'/>
                </div>
                <Image ref={(el) => (logosRef.current[3] = el)} className='w-full brightness-75' src={numbeingss} alt='Loading...'/>
                <Image ref={(el) => (logosRef.current[4] = el)} className='w-full brightness-75' src={image5} alt='Loading...'/>
                <div ref={(el) => (logosRef.current[5] = el)} className='flex items-center justify-center'>
                <Image className='w-1/2 brightness-75' src={lastone} alt='Loading..'/>
                </div>
              </div>
           </div>  
        </div>
    );
};

export default Pagesix;