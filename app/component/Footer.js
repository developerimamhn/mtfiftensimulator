'use client'


import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import logo from "./image/logo.png";
import Link from 'next/link';
import backgroundimageawsta from "./image/Frame 1321319039.png";
import { LiaBarsSolid } from 'react-icons/lia';
  

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


    return (
        <div id='Support' className='footersvg relative'>
          <Image className='h-fit absolute bottom-0 left-0 animate-pulse' src={backgroundimageawsta} alt='backgroundLoading...'/>
            <div className='w-full flex flex-col gap-[44px] px-6 sm:px-0 sm:gap-0 sm:grid grid-cols-12 container mx-auto py-[32px] sm:py-[36px] md:py-[40px] lg:py-[48px] xl:py-[64px] 2xl:py-[96px]'>
              <div className='col-span-4'>
                <Link href='/' className='cursor-pointer flex items-center justify-start Froggo-Logo'>
                <Image className='w-fit h-[28px] sm:h-[34px] 2xl:h-[41px]' src={logo} alt=''/></Link>
                <div className='h-[16px] sm:h-[20px] md:h-[24px] lg:h-[32px] xl:h-[36px] 2xl:h-[40px] flex items-center justify-start gap-[11px] sm:gap-[12px] md:gap-[13px] lg:gap-[14px] xl:gap-[15px] 2xl:gap-[16px] mt-[14px] sm:mt-[15px] md:mt-[16px] lg:mt-[20px] xl:mt-[24px] 2xl:mt-[32px] '>
                  <svg className='h-full cursor-pointer' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M20 5C28.25 5 35 11.75 35 20C35 27.4166 29.5833 33.583 22.5 34.833L22.415 34.7656C22.4433 34.7602 22.4717 34.7557 22.5 34.75V24.167H25.833L26.5 20H22.5V17.083C22.5001 15.9165 22.9168 15 24.75 15H26.667V11.167C25.5837 11.0003 24.4163 10.833 23.333 10.833C19.9165 10.8331 17.5 12.9171 17.5 16.667V20H13.75V24.167H17.5V34.75C17.5279 34.7556 17.556 34.7602 17.584 34.7656L17.5 34.833C10.4167 33.583 5 27.4166 5 20C5 11.75 11.75 5 20 5Z" fill="#BED2C8"/>
                  </svg>

                  <svg className='h-full cursor-pointer' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.84509 5.8335C6.73439 5.8335 5.83398 6.7339 5.83398 7.8446V32.1556C5.83398 33.2663 6.73439 34.1667 7.84509 34.1667H32.1562C33.2669 34.1667 34.1673 33.2663 34.1673 32.1556V7.8446C34.1673 6.7339 33.2669 5.8335 32.1562 5.8335H7.84509ZM12.1935 14.6324C13.551 14.6324 14.6514 13.532 14.6514 12.1745C14.6514 10.817 13.551 9.7166 12.1935 9.7166C10.8361 9.7166 9.73561 10.817 9.73561 12.1745C9.73561 13.532 10.8361 14.6324 12.1935 14.6324ZM16.9025 16.4489H20.976V18.315C20.976 18.315 22.0814 16.1042 25.0891 16.1042C27.7721 16.1042 29.9946 17.4259 29.9946 21.4545V29.9498H25.7733V22.4839C25.7733 20.1074 24.5045 19.846 23.5377 19.846C21.5312 19.846 21.1877 21.5767 21.1877 22.7939V29.9498H16.9025V16.4489ZM14.3361 16.4489H10.0509V29.9498H14.3361V16.4489Z" fill="#BED2C8"/>
                  </svg>

                  <svg className='h-full cursor-pointer' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M32.9519 13.4812C32.9632 13.7727 32.967 14.0641 32.967 14.3555C32.967 23.1925 26.7506 33.3943 15.3829 33.3943C11.891 33.3943 8.64397 32.2814 5.9082 30.3868C6.3918 30.4398 6.88294 30.4796 7.38161 30.4796C10.2769 30.4796 12.9436 29.4063 15.0588 27.6044C12.3545 27.5647 10.0709 25.6171 9.28334 22.9673C9.66142 23.0468 10.0508 23.0867 10.449 23.0867C11.0104 23.0867 11.5556 23.0073 12.0781 22.8483C9.24814 22.2388 7.11657 19.5361 7.11657 16.2901C7.11657 16.2504 7.11657 16.2371 7.11657 16.2106C7.95062 16.7008 8.90523 17.0053 9.9189 17.0451C8.25835 15.8394 7.16679 13.7859 7.16679 11.4674C7.16679 10.2485 7.47076 9.09576 8.00586 8.10209C11.0531 12.1563 15.609 14.8193 20.7452 15.0975C20.6397 14.6073 20.5857 14.0908 20.5857 13.574C20.5857 9.87761 23.3528 6.8833 26.7669 6.8833C28.5442 6.8833 30.1495 7.6916 31.2762 8.98999C32.6868 8.69851 34.0083 8.1421 35.2041 7.37366C34.7406 8.93703 33.7621 10.2484 32.4833 11.0698C33.7344 10.9108 34.9277 10.5534 36.0344 10.0234C35.2041 11.3616 34.159 12.5405 32.9519 13.4812Z" fill="#BED2C8"/>
                  </svg>

                  <svg className='h-full cursor-pointer' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M31.552 9.38884C29.4275 8.41402 27.1492 7.6958 24.7672 7.28444C24.7238 7.2765 24.6804 7.29634 24.6581 7.33602C24.3651 7.85717 24.0406 8.53703 23.8133 9.0714C21.2512 8.68782 18.7023 8.68782 16.1928 9.0714C15.9655 8.52513 15.6291 7.85717 15.3348 7.33602C15.3125 7.29767 15.2691 7.27783 15.2257 7.28444C12.845 7.69447 10.5667 8.4127 8.44084 9.38884C8.42245 9.39678 8.40668 9.41001 8.39617 9.4272C4.07481 15.8833 2.891 22.1806 3.47173 28.3999C3.47436 28.4303 3.49144 28.4594 3.51509 28.478C6.36622 30.5718 9.128 31.8429 11.8385 32.6854C11.8819 32.6987 11.9279 32.6828 11.9555 32.6471C12.5967 31.7715 13.1682 30.8482 13.6583 29.8774C13.6872 29.8205 13.6596 29.753 13.6005 29.7305C12.6939 29.3866 11.8307 28.9673 11.0003 28.4912C10.9346 28.4528 10.9293 28.3589 10.9898 28.3139C11.1645 28.183 11.3393 28.0468 11.5061 27.9092C11.5364 27.8841 11.5784 27.8788 11.6139 27.8946C17.0691 30.3853 22.975 30.3853 28.3659 27.8946C28.4014 27.8775 28.4434 27.8827 28.4749 27.9079C28.6418 28.0454 28.8165 28.183 28.9926 28.3139C29.053 28.3589 29.0491 28.4528 28.9834 28.4912C28.153 28.9766 27.2898 29.3866 26.3819 29.7292C26.3228 29.7517 26.2965 29.8205 26.3254 29.8774C26.826 30.8469 27.3976 31.7701 28.0269 32.6458C28.0532 32.6828 28.1005 32.6987 28.1438 32.6854C30.8675 31.8429 33.6293 30.5718 36.4804 28.478C36.5054 28.4594 36.5212 28.4317 36.5238 28.4012C37.2188 21.2111 35.3597 14.9653 31.5954 9.42852C31.5862 9.41001 31.5704 9.39678 31.552 9.38884ZM14.4729 24.613C12.8305 24.613 11.4772 23.1052 11.4772 21.2534C11.4772 19.4016 12.8042 17.8938 14.4729 17.8938C16.1547 17.8938 17.4948 19.4149 17.4685 21.2534C17.4685 23.1052 16.1415 24.613 14.4729 24.613ZM25.5489 24.613C23.9066 24.613 22.5533 23.1052 22.5533 21.2534C22.5533 19.4016 23.8803 17.8938 25.5489 17.8938C27.2307 17.8938 28.5708 19.4149 28.5446 21.2534C28.5446 23.1052 27.2307 24.613 25.5489 24.613Z" fill="#BED2C8"/>
                  </svg>

                  <svg className='h-full cursor-pointer' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.67773 19.9284C5.67773 11.9454 11.9321 6.03516 20.0007 6.03516C28.0692 6.03516 34.3236 11.9454 34.3236 19.9284C34.3236 27.9114 28.0692 33.8216 20.0007 33.8216C18.5514 33.8216 17.161 33.6303 15.8546 33.271C15.6007 33.2011 15.3306 33.2209 15.0896 33.3272L12.2467 34.5822C11.5031 34.9104 10.6636 34.3816 10.6387 33.569L10.5607 31.0212C10.5511 30.7072 10.4099 30.4139 10.1759 30.2045C7.38904 27.7123 5.67773 24.104 5.67773 19.9284ZM15.6072 17.3163L11.3998 23.9914C10.996 24.632 11.7835 25.3538 12.3866 24.8961L16.906 21.4662C17.2118 21.2342 17.6342 21.2329 17.9412 21.4632L21.2876 23.973C22.2917 24.7262 23.7249 24.4617 24.3942 23.3999L28.6016 16.7247C29.0052 16.0841 28.2179 15.3623 27.6146 15.82L23.0953 19.2499C22.7895 19.482 22.3671 19.4832 22.0601 19.2529L18.7137 16.7431C17.7096 15.99 16.2764 16.2544 15.6072 17.3163Z" fill="#BED2C8"/>
                  </svg>

                </div>
              </div>
              <div className='col-span-8 grid sm:grid-cols-3 md:flex-nowrap gap-[24px] sm:gap-[32px] md:gap-[36px] lg:gap-[40px] xl:gap-[48px] 2xl:gap-[64px]'>

                <div>
                  <h2 className='conadcsteraagara text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]'>Contacts</h2>
                    <a className="cursor-pointer Link-manu-bar flex items-start !p-0 group relative mt-[14px] sm:mt-[15px] md:mt-[16px] lg:mt-[20px] xl:mt-[24px] 2xl:mt-[32px]" href="#WhatsApp">
                    WhatsApp: +61 2 7912 2480</a>
                    <a className="cursor-pointer Link-manu-bar flex items-start !p-0 group relative mt-[13px] sm:mt-[14px] md:mt-[15px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[24px]" href="#Email">
                    Email: info@mt5simulator.com</a>
                    <a className="cursor-pointer Link-manu-bar flex items-start !p-0 group relative mt-[13px] sm:mt-[14px] md:mt-[15px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[24px]" href="#PhoneSupport">
                    Phone Support: Available from 4-8 PM AEST</a>
                </div>

                <div>
                  <h2 className='conadcsteraagara text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]'>Important Links</h2>
                    <a className="cursor-pointer Link-manu-bar flex items-start !p-0 group relative mt-[14px] sm:mt-[15px] md:mt-[16px] lg:mt-[20px] xl:mt-[24px] 2xl:mt-[32px]" href="#ContactUs">
                    Contact Us</a>
                    <a className="cursor-pointer Link-manu-bar flex items-start !p-0 group relative mt-[13px] sm:mt-[14px] md:mt-[15px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[24px]" href="#AffiliateProgram">
                    Affiliate Program</a>
                    <a className="cursor-pointer Link-manu-bar flex items-start !p-0 group relative mt-[13px] sm:mt-[14px] md:mt-[15px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[24px]" href="#CancelSubscription">
                    Cancel Subscription</a>
                    <a className="cursor-pointer Link-manu-bar flex items-start !p-0 group relative mt-[14px] sm:mt-[15px] md:mt-[16px] lg:mt-[20px] xl:mt-[24px] 2xl:mt-[32px]" href="#RefundPolicy">
                    Refund Policy</a>
                    <a className="cursor-pointer Link-manu-bar flex items-start !p-0 group relative mt-[13px] sm:mt-[14px] md:mt-[15px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[24px]" href="#PrivacyPolicy">
                    Privacy Policy</a>
                    <a className="cursor-pointer Link-manu-bar flex items-start !p-0 group relative mt-[13px] sm:mt-[14px] md:mt-[15px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[24px]" href="#FAQs">
                    FAQs</a>
                </div>

                <div>
                  <h2 className='conadcsteraagara text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]'>Subscribe to Our Emails</h2>
                    <input className='w-full p-[11px] sm:p-[12px] md:p-[13px] lg:p-[14px] xl:p-[15px] 2xl:p-[16px] mailheresecsa outline-none mt-[12px] sm:mt-[13px] md:mt-[14px] lg:mt-[15px] xl:mt-[16px] 2xl:mt-[21px]' type='mail' placeholder='Enter your email here' />
                    <a className="cursor-pointer Link-manu-bar flex items-start !p-0 group relative mt-[14px] sm:mt-[15px] md:mt-[16px] lg:mt-[20px] xl:mt-[24px] 2xl:mt-[32px]" href="#Terms&Conditions">
                    Terms & Conditions</a>
                    <a className="cursor-pointer Link-manu-bar flex items-start !p-0 group relative mt-[13px] sm:mt-[14px] md:mt-[15px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[24px]" href="#RiskDisclosure">
                    Risk Disclosure</a>
                    <a className="cursor-pointer Link-manu-bar flex items-start !p-0 group relative mt-[13px] sm:mt-[14px] md:mt-[15px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[24px]" href="#DataPolicy">
                    Data Policy</a>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Footer;