'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import image3 from './image/image 34.png';
import linerone from './image/Frame 1321319033.png';
import Pagesix from './Pagesix';

gsap.registerPlugin(ScrollTrigger);

// data/testimonials.js
export const testimonials = [
  {
    id: 1,
    title: "Precision Meets Simplicity",
    text: "The accuracy and the user-friendly interface of this MT5 simulator make it my go-to tool for perfecting my trading techniques.",
    name: "Changpeng Zhao",
    role: "Binance CEO",
    image: image3,
  },
  {
    id: 2,
    title: "Precision Meets Simplicity",
    text: "The accuracy and the user-friendly interface of this MT5 simulator make it my go-to tool for perfecting my trading techniques.",
    name: "Changpeng Zhao",
    role: "Binance CEO",
    image: image3,
  },
  {
    id: 3,
    title: "Precision Meets Simplicity",
    text: "The accuracy and the user-friendly interface of this MT5 simulator make it my go-to tool for perfecting my trading techniques.",
    name: "Changpeng Zhao",
    role: "Binance CEO",
    image: image3,
  },
];



const Pagethree = ({ item } ) => {
  const wrapperRef = useRef(null);
  const gridItem1Ref = useRef(null);
  const acquireRef = useRef(null);

  useEffect(() => {
    // Create GSAP context for proper scoping and cleanup
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: '(min-width: 768px)',
        },
        (context) => {
          const { isDesktop } = context.conditions;

          if (isDesktop) {
            // Create a timeline for better control and sequencing
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: wrapperRef.current,
                start: 'top 90%',
                end: 'bottom 90%', // Adjusted for smoother completion
                scrub: 0.8,
              },
            });

            // Main wrapper animation (left to right)
            tl.fromTo(
              wrapperRef.current,
              { x: -100, opacity: 0 },
              {
                x: 0,
                opacity: 1,
                duration: 2,
                ease: 'power3.out',
              },
              0 // Start at timeline's beginning
            );

            // First grid item (text content) animation (left to right)
            tl.fromTo(
              gridItem1Ref.current,
              { x: 150, opacity: 0, scale: 0.95 },
              {
                x: 0,
                opacity: 1,
                scale: 1,
                duration: 2,
                ease: 'power3.out',
              },
              0.1 // Slight stagger
            );

            // Second grid item (image) animation (faster right to left)
            tl.fromTo(
              acquireRef.current,
              { x: 50, opacity: 0, scale: 0.95 },
              {
                x: 0,
                opacity: 1,
                scale: 1,
                duration: 2, // Faster animation
                ease: 'power3.out',
              },
              0.25 // Stagger for visual hierarchy
            );
          }
        }
      );
    }, wrapperRef); // Scope animations to wrapperRef for React's strict mode

    // Cleanup GSAP context and animations
    return () => ctx.revert();
  }, []);
    return (
        <div id='Blog' className='relative '>
          <Image className='w-full absolute top-0 -z-11' src={linerone} alt='lineroneLoading...'/>
            <div ref={wrapperRef} className='relative container mx-auto py-[40px] sm:py-[48px] md:py-[60px] lg:py-[90px] xl:py-[120px] 2xl:py-[148px]'>
                <div className="">
                  <div className='flex flex-col items-center justify-center'>
                    <div className="flex items-center justify-start">
                      <button className=" transingpore relative overflow-hidden px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px]
                          py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px]
                          text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]
                        "
                      >
                        Testimonials

                        <div
                          className="
                            absolute inset-0 h-full w-full animate-gradient
                            bg-gradient-to-tl
                            from-[#308A6200]/50 via-[#308A6200]/50 to-[#53F0AB]/50
                            bg-[length:var(--bg-size)_100%]
                            [border-radius:inherit]
                            [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
                            ![mask-composite:subtract]
                            p-[1px]
                          "
                        />
                      </button>
                    </div>

                    <div  className='flex items-center justify-center flex-col pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[24px]'>
                      <div className='flex items-center flex-col justify-center'>
                        <h2 className='tradines text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[62px]'>
                        <span>What Our </span><span className='unlocyhoua'>Users Say</span>  
                        </h2>
                        <p className='bitstartp text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[24px]  pb-[13px] sm:pb-[14px] md:pb-[15px] lg:pb-[16px] xl:pb-[20px] 2xl:pb-[24px] '>Our users love how the MT5 simulator helps them refine strategies, build <br className="md:block hidden"/> confidence, and master trading in a risk-free environment. </p>
                      </div>
                    </div>
                  </div>
                    <div className="">

                      {/* Grid */}
                      <div className="grid grid-cols-12 gap-[11px] sm:gap-[12px] md:gap-[13px] lg:gap-[14px] xl:gap-[15px] 2xl:gap-[16px]">
                        {testimonials.map((item) => (
                          <div
                            key={item.id}
                            className=" grid grid-cols-3 col-start-4  col-span-6 backgroindinsga gap-[14px] sm:gap-[15px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[32px] w-full relative "
                          >
                            <div
                        className="
                          absolute inset-[2px] h-full w-full animate-gradient
                          bg-gradient-to-b
                          from-[#308A6200]/50 via-[#308A6200]/50 to-[#53F0AB]
                          bg-[length:var(--bg-size)_100%]
                          [border-radius:inherit]
                          [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
                          ![mask-composite:subtract]
                          p-[2px]
                        "
                      />
                            {/* Image */}
                            <div className="pl-0.5">
                              <Image
                                src={item.image}
                                alt={item.name}
                                className="rounded-[32px]  w-full col-span-1"
                              />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col justify-between col-span-2 py-[14px] sm:py-[15px] md:py-[16px] lg:py-[20px] xl:py-[24px] 2xl:py-[32px] pr-[15px] sm:pr-[16px] md:pr-[20px] lg:pr-[24px] xl:pr-[32px] 2xl:pr-[38px]">
                              <div>
                                <h3 className="cardhadeasassss text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[22px] 2xl:text-[26px]">
                                  {item.title}
                                </h3>
                                <p className="bitstartp text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] pt-[12px] sm:pt-[13px] md:pt-[14px] lg:pt-[15px] xl:pt-[16px] 2xl:pt-[20px]  !text-start">
                                  “{item.text}”
                                </p>
                              </div>

                              <div className="mt-4">
                                <p className="text-sm font-medium text-white">
                                  {item.name}
                                </p>
                                <p className="text-xs text-white/50">
                                  {item.role}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                    </div>
                </div>  
                
            </div>
            <Pagesix/>
        </div>
    );
};

export default Pagethree;