"use client";


import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { LiaBarsSolid } from "react-icons/lia";
import { VscChromeClose } from "react-icons/vsc";
import logo from './image/logo.png';


const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    const menuRef = useRef(null);
    const menuButtonRef = useRef(null);
    const [scrolled, setScrolled] = useState(false); // For background styling
    const [isVisible, setIsVisible] = useState(true); // For show/hide
    const [prevScrollPos, setPrevScrollPos] = useState(0); // Tracks scroll direction
    const [activeSection, setActiveSection] = useState("");
    const [isScrolling, setIsScrolling] = useState(false);



    // Handle clicks outside to close the menu
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

    // Smooth scroll to section
const handleScroll = (e, sectionId) => {
  e.preventDefault();

  const section = document.getElementById(sectionId);
  if (!section) return;
   setIsScrolling(true);  

  const headerOffset = 80; // navbar height (adjust if needed)
  const elementPosition = section.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });

  setToggle(false);
  setActiveMenu(sectionId); // যদি active menu ব্যবহার করো
};
 

    // Scroll logic for show/hide and background change
    useEffect(() => {
        const handleScroll = () => {
            // if (isScrolling) return;
            const currentScrollPos = window.scrollY;

            // Update scrolled state for background styling
            if (currentScrollPos > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Show/hide navbar based on scroll direction
            if (currentScrollPos < 50) {
                setIsVisible(true); // Show near the top
            } else if (currentScrollPos > prevScrollPos) {
                setIsVisible(false); // Hide when scrolling down
            } else {
                setIsVisible(true); // Show when scrolling up
            }   

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    const handleScrollToTop   = (e, targetId) => {
        e.preventDefault();
        if (targetId === "") {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };
      


      useEffect(() => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      threshold: 0.6,
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);


    return (
        <div className={` header ${scrolled ? "scrolled" : " "}  w-full header backgronsdvg   ${
            isVisible ? "translate-y-0 transition-transform duration-300" : "-translate-y-full transition-transform duration-300 "
        }`}>
            
        <header className='px-[24px] sm:px-[40px] md:px-[48px] lg:px-[64px] xl:px-[96px] 2xl:px-[160px] mt-[14px] sm:mt-[15px] md:mt-[16px] lg:mt-[20px] xl:mt-[24px] 2xl:mt-[32px]'>
            <div className='container mx-auto borderingthisheadiner flex justify-between items-center relative  sm:overflow-hidden pl-[14px] sm:pl-[15px] md:pl-[16px] lg:pl-[20px] xl:pl-[24px] 2xl:pl-[32px] pr-[11px] sm:pr-[12px] md:pr-[13px] lg:pr-[14px] xl:pr-[15px] 2xl:pr-[16px]'>
            <dev className='linersext absolute bottom-0 left-0 w-full h-[2px] z-10'></dev>
            <Link onClick={(e) => handleScrollToTop(e, "")} href='' className='cursor-pointer flex items-center justify-start Froggo-Logo sm:py-0 py-2'>
                <Image className='w-full h-[24px] sm:h-[34px] 2xl:h-[41px]' src={logo} alt=''/></Link>
                <div className='sm:hidden relative top-[-11px] -left-6'>   
                    
                    <div 
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-100' : 'opacity-0 -translate-x-2'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <VscChromeClose className='text-white text-[24px] absolute' />
                    </div>
                    <div ref={menuButtonRef}
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-0 translate-x-2' : 'opacity-100'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <LiaBarsSolid className='text-white text-[24px] absolute' />
                    </div>
                </div>
                 

                <nav ref={menuRef} className={`navbar-items-main absolute sm:top-0 top-[100%] sm:left-0 sm:relative duration-1000 z-[999] sm:opacity-100 flex justif-start sm:justify-start items-start sm:items-center sm:bg-transparent bg-[#15161B] sm:flex-row flex-col p-[20px] sm:p-[0] sm:w-fit w-full h-screen sm:h-full 
                    ${toggle ? 'left-[0]' :'left-[120%]' }  sm:gap-0 gap-2.5
                    ${toggle ? 'opacity-100' : 'opacity-10'} 
                    `} >
                    <a className="cursor-pointer Link-manu-bar  flex items-center group relative" href="#Home" onClick={(e) => handleScroll(e, "Home")}>
                    Home
                    <svg xmlns="http://www.w3.org/2000/svg" className='bottom-[500px] group-hover:bottom-[-150%] w-full  absolute lg:block hidden  duration-500  left-1/2 -translate-x-1/2 pointer-events-none select-none' viewBox="0 0 86 73" fill="none">
                        <rect width="86" height="73" fill="url(#paint0_linear_1826_718)"/>
                        <line y1="72" x2="86" y2="72" stroke="url(#paint1_linear_1826_718)" stroke-width="2"/>
                        <defs>
                            <linearGradient id="paint0_linear_1826_718" x1="43" y1="0" x2="43" y2="73" gradientUnits="userSpaceOnUse">
                            <stop offset="0.25" stop-color="#53F0AB" stop-opacity="0"/>
                            <stop offset="1" stop-color="#53F0AB" stop-opacity="0.06"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_1826_718" x1="0" y1="73.5" x2="86" y2="73.5" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#53F0AA" stop-opacity="0"/>
                            <stop offset="0.495" stop-color="#53F0AA"/>
                            <stop offset="1" stop-color="#53F0AA" stop-opacity="0"/>
                            </linearGradient>
                        </defs>
                        </svg>
                    </a>

                    <a className="cursor-pointer Link-manu-bar flex items-center group relative" href="#About" onClick={(e) => handleScroll(e, "About")}>
                    About 
                    <svg xmlns="http://www.w3.org/2000/svg" className='bottom-[500px] group-hover:bottom-[-150%] w-full  absolute lg:block hidden  duration-500  left-1/2 -translate-x-1/2 pointer-events-none select-none' viewBox="0 0 86 73" fill="none">
                        <rect width="86" height="73" fill="url(#paint0_linear_1826_718)"/>
                        <line y1="72" x2="86" y2="72" stroke="url(#paint1_linear_1826_718)" stroke-width="2"/>
                        <defs>
                            <linearGradient id="paint0_linear_1826_718" x1="43" y1="0" x2="43" y2="73" gradientUnits="userSpaceOnUse">
                            <stop offset="0.25" stop-color="#53F0AB" stop-opacity="0"/>
                            <stop offset="1" stop-color="#53F0AB" stop-opacity="0.06"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_1826_718" x1="0" y1="73.5" x2="86" y2="73.5" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#53F0AA" stop-opacity="0"/>
                            <stop offset="0.495" stop-color="#53F0AA"/>
                            <stop offset="1" stop-color="#53F0AA" stop-opacity="0"/>
                            </linearGradient>
                        </defs>
                        </svg></a>

                    <a className="cursor-pointer Link-manu-bar flex items-center group relative" href="#Software" onClick={(e) => handleScroll(e, "Software")}>
                    Software
                    <svg xmlns="http://www.w3.org/2000/svg" className='bottom-[500px] group-hover:bottom-[-150%] w-full  absolute lg:block hidden  duration-500  left-1/2 -translate-x-1/2 pointer-events-none select-none' viewBox="0 0 86 73" fill="none">
                        <rect width="86" height="73" fill="url(#paint0_linear_1826_718)"/>
                        <line y1="72" x2="86" y2="72" stroke="url(#paint1_linear_1826_718)" stroke-width="2"/>
                        <defs>
                            <linearGradient id="paint0_linear_1826_718" x1="43" y1="0" x2="43" y2="73" gradientUnits="userSpaceOnUse">
                            <stop offset="0.25" stop-color="#53F0AB" stop-opacity="0"/>
                            <stop offset="1" stop-color="#53F0AB" stop-opacity="0.06"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_1826_718" x1="0" y1="73.5" x2="86" y2="73.5" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#53F0AA" stop-opacity="0"/>
                            <stop offset="0.495" stop-color="#53F0AA"/>
                            <stop offset="1" stop-color="#53F0AA" stop-opacity="0"/>
                            </linearGradient>
                        </defs>
                        </svg></a>
                    
                    <a className="cursor-pointer Link-manu-bar flex items-center group relative " href="#UserGuides" onClick={(e) => handleScroll(e, "UserGuides")}>
                    User Guides
                    <svg xmlns="http://www.w3.org/2000/svg" className='bottom-[500px] group-hover:bottom-[-150%] w-full  absolute lg:block hidden  duration-500  left-1/2 -translate-x-1/2 pointer-events-none select-none' viewBox="0 0 86 73" fill="none">
                        <rect width="86" height="73" fill="url(#paint0_linear_1826_718)"/>
                        <line y1="72" x2="86" y2="72" stroke="url(#paint1_linear_1826_718)" stroke-width="2"/>
                        <defs>
                            <linearGradient id="paint0_linear_1826_718" x1="43" y1="0" x2="43" y2="73" gradientUnits="userSpaceOnUse">
                            <stop offset="0.25" stop-color="#53F0AB" stop-opacity="0"/>
                            <stop offset="1" stop-color="#53F0AB" stop-opacity="0.06"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_1826_718" x1="0" y1="73.5" x2="86" y2="73.5" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#53F0AA" stop-opacity="0"/>
                            <stop offset="0.495" stop-color="#53F0AA"/>
                            <stop offset="1" stop-color="#53F0AA" stop-opacity="0"/>
                            </linearGradient>
                        </defs>
                        </svg></a>

                    <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px] group relative " href="#More" onClick={(e) => handleScroll(e, "More")}>
                    More  
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-full  absolute lg:block hidden  duration-500  left-1/2 -translate-x-1/2 pointer-events-none select-none bottom-[500px] group-hover:bottom-[-150%]' viewBox="0 0 86 73" fill="none">
                        <rect width="86" height="73" fill="url(#paint0_linear_1826_718)"/>
                        <line y1="72" x2="86" y2="72" stroke="url(#paint1_linear_1826_718)" stroke-width="2"/>
                        <defs>
                            <linearGradient id="paint0_linear_1826_718" x1="43" y1="0" x2="43" y2="73" gradientUnits="userSpaceOnUse">
                            <stop offset="0.25" stop-color="#53F0AB" stop-opacity="0"/>
                            <stop offset="1" stop-color="#53F0AB" stop-opacity="0.06"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_1826_718" x1="0" y1="73.5" x2="86" y2="73.5" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#53F0AA" stop-opacity="0"/>
                            <stop offset="0.495" stop-color="#53F0AA"/>
                            <stop offset="1" stop-color="#53F0AA" stop-opacity="0"/>
                            </linearGradient>
                        </defs>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-[12px] sm:w-[13px] md:w-[14px] lg:w-[15px] xl:w-[16px] 2xl:w-[21px]' viewBox="0 0 21 21" fill="none">
                        <path d="M17.4303 7.83125L11.7253 13.5362C11.0516 14.21 9.94906 14.21 9.27531 13.5362L3.57031 7.83125" stroke="#ACBAC0" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>

                    <ul className='sm:hidden flex flex-col ml-atuo gap-4'>
                    <button className='buttonauditelt relative  cursor-pointer text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] flex items-center py-[12px] sm:py-[13px] md:py-[14px] lg:py-[15px] xl:py-[16px] 2xl:py-[20px] px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px] group gap-[7.50px]'>
                            Buy Now
                        </button>
                    </ul>
                </nav>
                
                <ul className='sm:flex hidden gap-4 py-[7px] sm:py-[8px] lg:py-[10px]'>
                        <button className='buttonauditelt relative  cursor-pointer text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] flex items-center py-[12px] sm:py-[13px] md:py-[14px] lg:py-[15px] xl:py-[16px] 2xl:py-[20px] px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px] group gap-[7.50px]'>
                            Buy Now
                        </button>
                </ul>
                
                </div>
            </header>

            <div className='navbarunderborder'></div>
        </div>
    );
};

export default NavBar;