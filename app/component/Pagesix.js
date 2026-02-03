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
  const gridItem1Ref = useRef(null);
  const gridItem2Ref = useRef(null);
  const gridItem3Ref = useRef(null);
  const titleRef = useRef(null);
  const acquireRef = useRef(null);
  
  useEffect(() => {
    const mm = gsap.matchMedia();
  
    mm.add(
      {
        isDesktop: '(min-width: 768px)',
        isMobile: '(max-width: 767px)',
      },
      (context) => {
        const { isDesktop, isMobile } = context.conditions;
  
        // Skip all animations on mobile
        if (isMobile) return;
  
        // Main wrapper animation (desktop only)
        gsap.fromTo(
          wrapperRef.current,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: 'top 80%',
              end: 'top 50%',
              scrub: 0.8,
            },
          }
        );
  
        // Title animation (desktop only)
        gsap.fromTo(
          titleRef.current,
          { y: 30, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 85%',
              end: 'top 50%',
              scrub: 0.8,
            },
          }
        );
  
        // Grid items animation (desktop only)
        [gridItem1Ref, gridItem2Ref, gridItem3Ref].forEach((ref, index) => {
          gsap.fromTo(
            ref.current,
            { y: 50, opacity: 0, scale: 0.9 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 1,
              delay: index * 0.25,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: ref.current,
                start: 'top 80%',
                end: 'top 30%',
                scrub: 0.8,
              },
            }
          );
        });
  
        // Acquire CRX section animation (desktop only)
        gsap.fromTo(
          acquireRef.current,
          { y: 50, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: acquireRef.current,
              start: 'top 85%',
              end: 'top 40%',
              scrub: 0.8,
            },
          }
        );
      }
    );
  
    return () => mm.revert(); // Cleanup
  }, []);
  
  const itemRefs = useRef([]);
  
  useEffect(() => {
    const mm = gsap.matchMedia();
  
    mm.add(
      {
        isDesktop: '(min-width: 768px)',
        isMobile: '(max-width: 767px)',
      },
      (context) => {
        const { isMobile } = context.conditions;
  
        // Skip animations on mobile
        if (isMobile) return;
  
        // Item animations (desktop only)
        itemRefs.current.forEach((el, index) => {
          if (!el) return;
  
          gsap.fromTo(
            el,
            {
              autoAlpha: 0,
              y: 50,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.3,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 100%',
                toggleActions: 'play none none none',
              },
              delay: index * 0.1,
            }
          );
        });
      }
    );
  
    return () => mm.revert(); // Cleanup
  }, []);


    
    return (
        <div id='About' ref={wrapperRef} className='pb-[40px] sm:pb-[48px] md:pb-[60px] lg:pb-[90px] xl:pb-[120px] 2xl:pb-[150px] px-6 sm:px-0 relative'>
           <div className='container mx-auto'>
              <div className='flex items-center flex-col justify-center'>
                        <h2 className='tradines text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[62px]'>
                        <span>Our Trusted </span><span className='unlocyhoua'>Partners</span>  
                        </h2>
                        <p className='bitstartp text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[24px]'>We partner with top industry leaders to enhance your trading <br className="md:block hidden"/>experience with innovation and reliability.</p>
                      </div>
              <div className='grid grid-cols-3 md:grid-cols-6 justify-center items-center gap-[24px] sm:gap-[32px] md:gap-[36px] lg:gap-[40px] xl:gap-[48px] 2xl:gap-[64px] mt-[32px] sm:mt-[36px] md:mt-[40px] lg:mt-[48px] xl:mt-[64px] 2xl:mt-[84px]'>
                <Image className='w-full brightness-75' src={image2} alt='Loading...'/>
                <Image className='w-full brightness-75' src={image3} alt='Loading...'/>
                <div className='flex items-center justify-center'>
                <Image className='w-1/2 brightness-75' src={image4} alt='Loading...'/>
                </div>
                <Image className='w-full brightness-75' src={numbeingss} alt='Loading...'/>
                <Image className='w-full brightness-75' src={image5} alt='Loading...'/>
                <div className='flex items-center justify-center'>
                <Image className='w-1/2 brightness-75' src={lastone} alt='Loading..'/>
                </div>
              </div>
           </div>  
        </div>
    );
};

export default Pagesix;