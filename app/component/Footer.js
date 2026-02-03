'use client'


import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import logo from "./image/logo.png";
import logoone from './image/Mask Group.png';
import logotwo from './image/Mask Group1.png';
import logothree from './image/Mask Group3.png';


gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const [toggle, setToggle] = useState(false);
    const menuRef = useRef(null); 
    const menuButtonRef = useRef(null);
    const [scrolled, setScrolled] = useState(false);
  
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        (!menuButtonRef.current || !menuButtonRef.current.contains(event.target))
      ) {
        setToggle(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  
    const handleScroll = (e, sectionId) => {
      e.preventDefault();
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 50,
          behavior: "smooth",
        });
        setToggle(false);
      }
    };
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    useEffect(() => {
      // Example of animating elements when they come into view
      gsap.fromTo('.feature', 
        { opacity: 0, y: 50 }, 
        {
          opacity: 1,
          y: 0,
          stagger: 0.3,
          scrollTrigger: {
            trigger: '.feature',
            start: 'top 100%',
            end: 'bottom top',
            toggleActions: 'play none none none'
          }
        }
      );
  
      // Example of animating the button with scale and opacity
      gsap.fromTo('.buttonaudit-3', 
        { opacity: 0, scale: 0.8 }, 
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'ease-in-out',
          scrollTrigger: {
            trigger: '.buttonaudit-3',
            start: 'top 100%',
            end: 'bottom top',
            toggleActions: 'play none none none'
          }
        }
      );
    }, []);
  
    const [isTranslated, setIsTranslated] = useState(false);
  
    const handleClick = () => {
      setIsTranslated(true);
      setTimeout(() => {
        setIsTranslated(false);
      }, 200);
    };


    const iconRefs = useRef([]);

  useEffect(() => {
    // GSAP entrance animation for icons
    gsap.fromTo(
      iconRefs.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      }
    );
  }, []);

  // Handle hover animation with GSAP
  const handleMouseEnter = (index) => {
    gsap.to(iconRefs.current[index], {
      scale: 1.2,
      rotate: 10,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(iconRefs.current[index], {
      scale: 1,
      rotate: 0,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const socialLinks = [
    { href: 'https://twitter.com', icon: 'twitter' },
    { href: 'https://linkedin.com', icon: 'linkedin' },
    { href: 'https://facebook.com', icon: 'facebook' },
    { href: 'https://instagram.com', icon: 'instagram' },
    { href: 'https://telegram.org', icon: 'telegram' },
  ];
  
    return (
        <div id='Support' className='footersvg'>
            <div className='w-full '>
              
                <div className='flex items-start justify-between sm:flex-row flex-col gap-[40px] pb-[24px] sm:pb-[32px] md:pb-[36px] lg:pb-[40px] xl:pb-[48px] 2xl:pb-[60px] container mx-auto px-[24px] sm:px-0 pt-[36px] sm:pt-[40px] md:pt-[48px] lg:pt-[64px] xl:pt-[96px] 2xl:pt-[130px] relative'>
                  <svg className='w-full absolute z-[0] left-0 top-[90px] 2xl:block hidden' viewBox="0 0 1024 235" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1401_1786)">
                  <g clip-path="url(#clip1_1401_1786)">
                  <path opacity="0.2" d="M396.25 0V235" stroke="white" stroke-miterlimit="10" stroke-dasharray="4 2"/>
                  <path opacity="0.2" d="M846.25 0V235" stroke="white" stroke-miterlimit="10" stroke-dasharray="4 2"/>
                  <path opacity="0.2" d="M629.25 0V235" stroke="white" stroke-miterlimit="10" stroke-dasharray="4 2"/>
                  <path opacity="0.2" d="M0 66.75H1024" stroke="white" stroke-miterlimit="10" stroke-dasharray="4 2"/>
                  <path opacity="0.2" d="M1 170.75H397" stroke="white" stroke-miterlimit="10" stroke-dasharray="4 2"/>
                  <path d="M396 174C397.657 174 399 172.657 399 171C399 169.343 397.657 168 396 168C394.343 168 393 169.343 393 171C393 172.657 394.343 174 396 174Z" fill="#262626" stroke="white" stroke-opacity="0.2" stroke-miterlimit="10"/>
                  <path d="M396 70C397.657 70 399 68.6569 399 67C399 65.3431 397.657 64 396 64C394.343 64 393 65.3431 393 67C393 68.6569 394.343 70 396 70Z" fill="#262626" stroke="white" stroke-opacity="0.2" stroke-miterlimit="10"/>
                  <path d="M629 70C630.657 70 632 68.6569 632 67C632 65.3431 630.657 64 629 64C627.343 64 626 65.3431 626 67C626 68.6569 627.343 70 629 70Z" fill="#262626" stroke="white" stroke-opacity="0.2" stroke-miterlimit="10"/>
                  <path d="M846 70C847.657 70 849 68.6569 849 67C849 65.3431 847.657 64 846 64C844.343 64 843 65.3431 843 67C843 68.6569 844.343 70 846 70Z" fill="#262626" stroke="white" stroke-opacity="0.2" stroke-miterlimit="10"/>
                  </g>
                  </g>
                  <defs>
                  <clipPath id="clip0_1401_1786">
                  <rect width="1024" height="235" fill="white"/>
                  </clipPath>
                  <clipPath id="clip1_1401_1786">
                  <rect width="1024" height="235" fill="white"/>
                  </clipPath>
                  </defs>
                  </svg>

                    <div className='grid grid-cols-3 sm:grid-cols-5  h-full relative z-[1]'>
                      <div className='col-span-2 sm:pb-0 pb-[40px]'>
                        <div className='flex items-start sm:items-center  sm:flex-row flex-col gap-[4px] lg:gap-[8px] justify-between'>
                          <Image className='h-[20px] sm:h-[26px] 2xl:h-[30px] w-fit' src={logo} alt="loading..."/>
                          <div className='flex items-center gap-[4px] lg:gap-[8px] pr-[16px] sm:pr-[20px] md:pr-[24px] lg:pr-[32px] xl:pr-[36px] 2xl:pr-[40px] sm:pt-0 pt-6'>
                            <Image src={logoone} alt='Loading...'/>
                            <Image src={logotwo} alt='Loading...'/>
                            <Image src={logothree} alt='Loading...'/>
                          </div>
                        </div>
                        <p className='opacity-0 cursor-none select-none pointer-events-none'>Bitstamp USA, Inc. is licensed to engage in Virtual Currency Business Activity by the New York State Department of Financial Services.</p>
                        <p className='privacypolicy  sm:pt-[8px] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] !text-white/60  cursor-pointer'>Terms & Conditions↘</p>
                        <p className='privacypolicy pt-[8px] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] !text-white/60  cursor-pointer '>Privacy Policy↘</p>
                        <p className='privacypolicy pt-[32px] sm:pt-[36px] md:pt-[40px] lg:pt-[48px] xl:pt-[64px] 2xl:pt-[96px] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] !text-white/60  cursor-pointer '>Tars AI © 2025. All rights reserved.</p>
                      </div>
                        <div className='flex col-span-1 pb-[60px] sm:pb-0 items-center flex-col gap-[14px] sm:gap-[15px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[30px] justify-start'>
                        <div className=''>
                          <p className='privacypolicy  pb-[24px] sm:pb-[32px] md:pb-[36px] lg:pb-[40px] xl:pb-[48px] 2xl:pb-[60px] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] !text-white/60  cursor-pointer '>About</p>
                            <ul className='flex justify-start flex-col gap-[12px] sm:gap-[13px] md:gap-[14px] lg:gap-[15px] xl:gap-[16px] 2xl:gap-[20px] footeritesm figtree text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px]'>
                              <a className='privacypolicy duration-300  text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] cursor-pointer'>Manifesto</a>
                              <a className='privacypolicy duration-300  text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] cursor-pointer'>Acceleration Program</a>
                              <a className='privacypolicy duration-300  text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] cursor-pointer'>Ecosystem</a>
                              <a className='privacypolicy duration-300  text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] cursor-pointer'>Partners</a>
                              <a className='privacypolicy duration-300  text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] cursor-pointer'>Careers</a>
                              <a className='privacypolicy duration-300  text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] cursor-pointer'>Brand Guidelines</a>
                              <a className='privacypolicy duration-300  text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] cursor-pointer'>Tokenomics</a>
                            </ul>
                            </div>
                        </div> 
                        <div className='flex col-span-1 items-center  flex-col gap-[14px] sm:gap-[15px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[30px] justify-start'>
                        <div className=''>
                          <p className='privacypolicy pb-[24px] sm:pb-[32px] md:pb-[36px] lg:pb-[40px] xl:pb-[48px] 2xl:pb-[60px] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] !text-white/60  cursor-pointer'>Products</p>
                            <ul className='flex justify-start flex-col gap-[12px] sm:gap-[13px] md:gap-[14px] lg:gap-[15px] xl:gap-[16px] 2xl:gap-[20px] footeritesm figtree text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px]'>
                              <a className='privacypolicy duration-300  text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] cursor-pointer'>AI Market</a>
                              <a className='privacypolicy duration-300  text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] cursor-pointer'>Staking</a>
                              <a className='privacypolicy duration-300  text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] cursor-pointer'>Sona</a>
                              <a className='privacypolicy duration-300  text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] cursor-pointer'>TGPT Search Engine</a>
                            </ul>
                            </div>
                        </div> 
                        <div className='flex col-span-1 items-center  flex-col gap-[14px] sm:gap-[15px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[30px] justify-start'>
                        <div className=''>
                          <p className='privacypolicy text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] !text-white/60  cursor-pointer block pb-[24px] sm:pb-[32px] md:pb-[36px] lg:pb-[40px] xl:pb-[48px] 2xl:pb-[60px]'>Coming soon</p>
                            <ul className='flex justify-start flex-col gap-[12px] sm:gap-[13px] md:gap-[14px] lg:gap-[15px] xl:gap-[16px] 2xl:gap-[20px] footeritesm figtree text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px]'>
                              <a className='privacypolicy duration-300  text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] cursor-pointer '>Docs</a>
                              <a className='privacypolicy duration-300  text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] cursor-pointer'>AI Agent Market</a>
                            </ul>
                            </div>
                        </div> 
                    </div>
                    
                </div>
                <div className='pt-[32px] sm:pt-[36px] md:pt-[40px] lg:pt-[48px] xl:pt-[64px] 2xl:pt-[71px] flex justify-center items-center container mx-auto'>
                  <svg className='w-full' viewBox="0 0 1023 121" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M55.1258 122.7C31.8358 122.7 13.9858 115.39 0.385781 99.92L20.6158 82.07C30.4758 91.08 42.2058 95.67 55.6358 95.67C67.5358 95.67 75.0158 92.44 75.0158 85.81C75.0158 81.05 71.1058 78.5 61.5858 76.63L40.8458 72.72C17.3858 68.3 5.31578 57.25 5.31578 38.38C5.31578 15.26 23.3358 0.299994 53.0858 0.299994C74.8458 0.299994 91.6758 7.95 103.066 22.91L83.1758 38.21C75.8658 30.05 65.4958 25.8 53.0858 25.8C42.3758 25.8 36.9358 28.86 36.9358 34.13C36.9358 38.38 40.5058 40.93 48.3258 42.46L72.1258 46.88C96.0958 51.3 107.486 62.18 107.486 82.07C107.486 107.57 87.9358 122.7 55.1258 122.7ZM234.866 122.7C197.806 122.7 172.306 98.22 172.306 61.5C172.306 24.78 197.806 0.299994 234.866 0.299994C271.926 0.299994 297.426 24.78 297.426 61.5C297.426 98.22 271.926 122.7 234.866 122.7ZM205.456 61.5C205.456 80.2 216.846 92.1 234.866 92.1C252.886 92.1 264.276 80.2 264.276 61.5C264.276 42.8 252.886 30.9 234.866 30.9C216.846 30.9 205.456 42.8 205.456 61.5ZM367.189 121V1.99999H399.489V92.78H455.249V121H367.189ZM518.842 121L559.132 1.99999H605.542L647.022 121H611.322L605.202 101.79H557.432L551.312 121H518.842ZM566.102 74.25H596.362L581.402 26.99H581.062L566.102 74.25ZM713.63 121V1.99999H750.86L797.78 75.61H798.12V1.99999H827.7V121H790.47L743.55 47.39H743.21V121H713.63ZM894.336 121L934.626 1.99999H981.036L1022.52 121H986.816L980.696 101.79H932.926L926.806 121H894.336ZM941.596 74.25H971.856L956.896 26.99H956.556L941.596 74.25Z" fill="url(#paint0_linear_1401_1851)"/>
                  <defs>
                  <linearGradient id="paint0_linear_1401_1851" x1="510.5" y1="2" x2="510.5" y2="100.7" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white" stop-opacity="0.24"/>
                  <stop offset="1" stop-color="#390671" stop-opacity="0.4"/>
                  </linearGradient>
                  </defs>
                  </svg>
                </div>
            </div>
        </div>
    );
};

export default Footer;