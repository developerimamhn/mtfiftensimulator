'use client';


import gsap from 'gsap';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import righticon from './image/Frame 1984078515.png';


const Pagefive = () => {
  
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Check if the screen width is greater than 768px (non-mobile)
    const isDesktop = window.innerWidth > 768;

    if (isDesktop) {
      // Animation for text elements
      gsap.from(textRef.current, {
        opacity: 0,
        x: -100,
        duration: 1.5,
        ease: 'power2.out',
      });

      // Animation for buttons
      gsap.from(buttonRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        delay: 0.5,
        ease: 'power2.out',
      });

      // Animation for image
      gsap.from(imageRef.current, {
        opacity: 0,
        x: 100,
        duration: 1.5,
        delay: 0.5,
        ease: 'power2.out',
      });
    }
  }, []);

  const itemRefs = useRef([]);

  // GSAP animation effect
  useEffect(() => {
    const isDesktop = window.innerWidth > 768;

    if (isDesktop) {
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
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 100%',
              toggleActions: 'play none none none',
            },
            delay: index * 0.1, // Delay between each item
          }
        );
      });
    }
  }, []);
    return (
        <div id='Blog' className='relative pt-[80px] sm:pt-[60px] md:pt-[70px] lg:pt-[90px] xl:pt-[120px] 2xl:pt-[148px]'>
            <div className='relative z-[2] overflow-hidden container mx-auto '>
              <div className='container mx-auto px-[24px] sm:px-0 w-full '>
                  <div  className='flex items-center justify-center flex-col pt-[16px] sm:pt-[20px] md:pt-[24px] lg:pt-[32px] xl:pt-[36px] 2xl:pt-[40px]'>
                    <div className='flex items-center flex-col justify-center'>
                      <h2 className='tradines text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[62px] text-center'>
                        <span > Unlock Your </span><br/> <span className='unlocyhoua'> Trading Potential </span>  
                      </h2>
                      <p className='bitstartp text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[24px] pb-[14px] sm:pb-[15px] md:pb-[16px] lg:pb-[20px] xl:pb-[24px] 2xl:pb-[32px] text-center '>Don&apos;t just take our word for it. Try our platform today and discover the difference firsthand.<br className='md:block hidden'/> With our advanced features, intuitive interface, and exceptional customer support, you&apos;ll <br className='md:block hidden'/>see why we&apos;re the preferred choice for traders of all levels.</p>
                      <button className='buttonauditelt relative  cursor-pointer text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] flex items-center py-[12px] sm:py-[13px] md:py-[14px] lg:py-[15px] xl:py-[16px] 2xl:py-[20px] px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px] group gap-[7.50px]'>
                              Buy Now
                          </button>
                    </div>
                  </div>
              </div>
              <Image className='w-full mt-[22px] sm:mt-[24px] md:mt-[32px] lg:mt-[36px] xl:mt-[40px] 2xl:mt-[52px]' src={righticon} alt='loading..'/>
            </div>
        </div>
    );
};

export default Pagefive;