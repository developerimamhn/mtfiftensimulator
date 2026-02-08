'use client';

import { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function AnimatedSoundBars() {
//   const container = useRef(null);

//   useGSAP(() => {
//     if (!container.current) return;

//     // শুধু filter গ্রুপের ভিতরের rect গুলো সিলেক্ট করা হচ্ছে
//     const glowingBars = container.current.querySelectorAll('g[filter] rect');

//     console.log('গ্লো বার পাওয়া গেছে:', glowingBars.length); // কনসোলে চেক করার জন্য

//     gsap.utils.toArray(glowingBars).forEach((bar, index) => {
//       const duration = 1.6 + Math.random() * 2.0; // 1.6s – 3.6s
//       const delay = Math.random() * 1.0 + index * 0.1;

//       gsap.to(bar, {
//         scaleY: 0.65 + Math.random() * 1.2, // ছোট-বড় হবে
//         transformOrigin: '50% 100%', // নিচ থেকে বড় হবে
//         duration: duration,
//         delay: delay,
//         ease: 'sine.inOut',
//         repeat: -1,
//         yoyo: true,
//       });

//       gsap.to(bar, {
//         opacity: 0.75 + Math.random() * 0.5, // গ্লো ফেইড হবে
//         duration: duration * 1.3,
//         delay: delay,
//         ease: 'sine.inOut',
//         repeat: -1,
//         yoyo: true,
//       });
//     });
//   }, { scope: container });
//   useEffect(() => {
//     if (container.current) {
//       const style = document.createElement('style');
//       style.textContent = `
//         g[filter] rect {
//           animation: glowPulse 3.5s ease-in-out infinite alternate;
//           transform-origin: 50% 100%;
//         }
//         @keyframes glowPulse {
//           0%   { transform: scaleY(0.8); opacity: 0.8; }
//           100% { transform: scaleY(1.35); opacity: 1; }
//         }
//       `;
//       document.head.appendChild(style);
//       return () => { document.head.removeChild(style); };
//     }
//   }, []);
  return (
    <svg
    //   ref={container}
      className="w-full mt-[13px] sm:mt-[14px] md:mt-[15px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[24px]"
      viewBox="0 0 376 298"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="4.5" width="375" height="293" rx="19.5" fill="url(#paint0_linear_933_547)" fill-opacity="0.08" stroke="url(#paint1_linear_933_547)"/>
      <g className='line' filter="url(#filter0_f_933_547)">    
        <rect x="46" y="113" width="4" height="68" rx="2" fill="white"/>
        <rect x="42" y="130" width="12" height="34" rx="6" fill="white"/>
      </g>
      <rect className='height-scale' x="46" y="113" width="4" height="68" rx="2" fill="white"/>
      <rect x="42" y="130" width="12" height="34" rx="6" fill="white"/>
      <g className='height-scale' filter="url(#filter1_f_933_547)">
        <rect x="74" y="85" width="4" height="78" rx="2" fill="#54BFA3"/>
        <rect x="70" y="110" width="12" height="45" rx="6" fill="#54BFA3"/>
      </g>    
      <rect className='height-scale' x="74" y="85" width="4" height="78" rx="2" fill="#54BFA3"/>
      <rect x="70" y="110" width="12" height="45" rx="6" fill="#54BFA3"/>
      <g filter="url(#filter2_f_933_547)">
        <rect  x="102" y="105" width="4" height="87" rx="2" fill="white"/>
        <rect x="98" y="118" width="12" height="26" rx="6" fill="white"/>
      </g>
      <rect  className='height-scale' x="102" y="105" width="4" height="87" rx="2" fill="white"/>
      <rect x="98" y="118" width="12" height="26" rx="6" fill="white"/>
      <g filter="url(#filter3_f_933_547)">
        <rect x="130" y="113" width="4" height="58" rx="2" fill="white"/>
        <rect x="126" y="138" width="12" height="26" rx="6" fill="white"/>
      </g>
      <rect className='height-scale' x="130" y="113" width="4" height="58" rx="2" fill="white"/>
      <rect x="126" y="138" width="12" height="26" rx="6" fill="white"/>
      <g filter="url(#filter4_f_933_547)">
        <rect x="158" y="78" width="4" height="57" rx="2" fill="#54BFA3"/>
        <rect x="154" y="86" width="12" height="42" rx="6" fill="#54BFA3"/>
      </g>
      <rect className='height-scale' x="158" y="78" width="4" height="57" rx="2" fill="#54BFA3"/>
      <rect x="154" y="86" width="12" height="42" rx="6" fill="#54BFA3"/>
      <g filter="url(#filter5_f_933_547)">
        <rect x="214" y="83" width="4" height="65" rx="2" fill="white"/>
        <rect x="210" y="99" width="12" height="32" rx="6" fill="white"/>
      </g>
      <rect className='height-scale' x="214" y="83" width="4" height="65" rx="2" fill="white"/>
      <rect x="210" y="99" width="12" height="32" rx="6" fill="white"/>
      <g filter="url(#filter6_f_933_547)">
        <rect x="298" y="40" width="4" height="85" rx="2" fill="#54BFA3"/>
        <rect x="294" y="65" width="12" height="32" rx="6" fill="#54BFA3"/>
      </g>
      <rect className='height-scale' x="298" y="40" width="4" height="85" rx="2" fill="#54BFA3"/>
      <rect x="294" y="65" width="12" height="32" rx="6" fill="#54BFA3"/>
      <g filter="url(#filter7_f_933_547)">
        <rect x="242" y="70" width="4" height="53" rx="2" fill="#54BFA3"/>
        <rect x="238" y="78" width="12" height="12" rx="4" fill="#54BFA3"/>
      </g>
      <rect className='height-scale' x="242" y="70" width="4" height="53" rx="2" fill="#54BFA3"/>
      <rect x="238" y="78" width="12" height="12" rx="4" fill="#54BFA3"/>
      <g filter="url(#filter8_f_933_547)">
        <rect x="270" y="46" width="4" height="53" rx="2" fill="#54BFA3"/>
        <rect x="266" y="54" width="12" height="29" rx="6" fill="#54BFA3"/>
      </g>
      <rect className='height-scale' x="270" y="46" width="4" height="53" rx="2" fill="#54BFA3"/>
      <rect x="266" y="54" width="12" height="29" rx="6" fill="#54BFA3"/>
      <g filter="url(#filter9_f_933_547)">
        <rect x="326" y="74" width="4" height="53" rx="2" fill="white"/>
        <rect x="322" y="82" width="12" height="29" rx="6" fill="white"/>
      </g>
      <g filter="url(#filter10_f_933_547)">
        <rect x="326" y="74" width="4" height="53" rx="2" fill="white"/>
        <rect x="322" y="82" width="12" height="29" rx="6" fill="white"/>
      </g>
      <rect className='height-scale' x="326" y="74" width="4" height="53" rx="2" fill="white"/>
      <rect  x="322" y="82" width="12" height="29" rx="6" fill="white"/>
      <g filter="url(#filter11_f_933_547)">
        <rect x="186" y="125" width="4" height="65" rx="2" fill="white"/>
        <rect x="182" y="153" width="12" height="9" rx="4" fill="white"/>
      </g>
      <rect x="186" y="125" width="4" height="65" rx="2" fill="white"/>
      <rect x="182" y="147" width="12" height="21" rx="6" fill="white"/>
      <g className='line' opacity="0.2">
        <path d="M28 202.688C28 195.128 34.1281 189 41.6875 189C49.2469 189 55.375 195.128 55.375 202.688V298H28V202.688Z" fill="white" fill-opacity="0.04"/>
        <path d="M28 202.688C28 195.128 34.1281 189 41.6875 189C49.2469 189 55.375 195.128 55.375 202.688V298H28V202.688Z" fill="url(#paint2_linear_933_547)"/>
        <path d="M67.375 159.687C67.375 152.128 73.5031 146 81.0625 146C88.6219 146 94.75 152.128 94.75 159.687V298H67.375V159.687Z" fill="white" fill-opacity="0.04"/>
        <path d="M67.375 159.687C67.375 152.128 73.5031 146 81.0625 146C88.6219 146 94.75 152.128 94.75 159.687V298H67.375V159.687Z" fill="url(#paint3_linear_933_547)"/>
        <path d="M106.75 126.687C106.75 119.128 112.878 113 120.438 113C127.997 113 134.125 119.128 134.125 126.687V298H106.75V126.687Z" fill="white" fill-opacity="0.04"/>
        <path d="M106.75 126.687C106.75 119.128 112.878 113 120.438 113C127.997 113 134.125 119.128 134.125 126.687V298H106.75V126.687Z" fill="url(#paint4_linear_933_547)"/>
        <path d="M146.125 202.688C146.125 195.128 152.253 189 159.812 189C167.372 189 173.5 195.128 173.5 202.688V298H146.125V202.688Z" fill="white" fill-opacity="0.04"/>
        <path d="M146.125 202.688C146.125 195.128 152.253 189 159.812 189C167.372 189 173.5 195.128 173.5 202.688V298H146.125V202.688Z" fill="url(#paint5_linear_933_547)"/>
        <path d="M185.5 201.687C185.5 194.128 191.628 188 199.188 188C206.747 188 212.875 194.128 212.875 201.688V298H185.5V201.687Z" fill="white" fill-opacity="0.04"/>
        <path d="M185.5 201.687C185.5 194.128 191.628 188 199.188 188C206.747 188 212.875 194.128 212.875 201.688V298H185.5V201.687Z" fill="url(#paint6_linear_933_547)"/>
        <path d="M224.875 107.687C224.875 100.128 231.003 94 238.562 94C246.122 94 252.25 100.128 252.25 107.687V298H224.875V107.687Z" fill="white" fill-opacity="0.04"/>
        <path d="M224.875 107.687C224.875 100.128 231.003 94 238.562 94C246.122 94 252.25 100.128 252.25 107.687V298H224.875V107.687Z" fill="url(#paint7_linear_933_547)"/>
        <path d="M264.25 167.687C264.25 160.128 270.378 154 277.938 154C285.497 154 291.625 160.128 291.625 167.688V298H264.25V167.687Z" fill="white" fill-opacity="0.04"/>
        <path d="M264.25 167.687C264.25 160.128 270.378 154 277.938 154C285.497 154 291.625 160.128 291.625 167.688V298H264.25V167.687Z" fill="url(#paint8_linear_933_547)"/>
        <path d="M303.625 191.687C303.625 184.128 309.753 178 317.312 178C324.872 178 331 184.128 331 191.688V298H303.625V191.687Z" fill="white" fill-opacity="0.04"/>
        <path d="M303.625 191.687C303.625 184.128 309.753 178 317.312 178C324.872 178 331 184.128 331 191.688V298H303.625V191.687Z" fill="url(#paint9_linear_933_547)"/>
      </g>
      <defs>
        <filter id="filter0_f_933_547" x="2" y="73" width="92" height="148" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="20" result="effect1_foregroundBlur_933_547"/>
        </filter>
        <filter id="filter1_f_933_547" x="30" y="45" width="92" height="158" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="20" result="effect1_foregroundBlur_933_547"/>
        </filter>
        <filter id="filter2_f_933_547" x="58" y="65" width="92" height="167" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="20" result="effect1_foregroundBlur_933_547"/>
        </filter>
        <filter id="filter3_f_933_547" x="86" y="73" width="92" height="138" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="20" result="effect1_foregroundBlur_933_547"/>
        </filter>
        <filter id="filter4_f_933_547" x="114" y="38" width="92" height="137" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="20" result="effect1_foregroundBlur_933_547"/>
        </filter>
        <filter id="filter5_f_933_547" x="170" y="43" width="92" height="145" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="20" result="effect1_foregroundBlur_933_547"/>
        </filter>
        <filter id="filter6_f_933_547" x="254" y="0" width="92" height="165" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="20" result="effect1_foregroundBlur_933_547"/>
        </filter>
        <filter id="filter7_f_933_547" x="198" y="30" width="92" height="133" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="20" result="effect1_foregroundBlur_933_547"/>
        </filter>
        <filter id="filter8_f_933_547" x="226" y="6" width="92" height="133" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="20" result="effect1_foregroundBlur_933_547"/>
        </filter>
        <filter id="filter9_f_933_547" x="282" y="34" width="92" height="133" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="20" result="effect1_foregroundBlur_933_547"/>
        </filter>
        <filter id="filter10_f_933_547" x="282" y="34" width="92" height="133" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="20" result="effect1_foregroundBlur_933_547"/>
        </filter>
        <filter id="filter11_f_933_547" x="142" y="85" width="92" height="145" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="20" result="effect1_foregroundBlur_933_547"/>
        </filter>
        <linearGradient id="paint0_linear_933_547" x1="188" y1="4" x2="188" y2="298" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" stop-opacity="0.5"/>
          <stop offset="0.5" stop-color="white" stop-opacity="0"/>
          <stop offset="1" stop-color="white" stop-opacity="0.5"/>
        </linearGradient>
        <linearGradient id="paint1_linear_933_547" x1="188" y1="4" x2="188" y2="298" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" stop-opacity="0.16"/>
          <stop offset="0.5" stop-color="white" stop-opacity="0"/>
          <stop offset="1" stop-color="white" stop-opacity="0.16"/>
        </linearGradient>
        <linearGradient id="paint2_linear_933_547" x1="41.6875" y1="189" x2="41.6875" y2="298" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" stop-opacity="0.24"/>
          <stop offset="1" stop-color="#FB6838" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint3_linear_933_547" x1="81.0625" y1="146" x2="81.0625" y2="298" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" stop-opacity="0.24"/>
          <stop offset="1" stop-color="#FB6838" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint4_linear_933_547" x1="120.438" y1="113" x2="120.437" y2="298" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" stop-opacity="0.24"/>
          <stop offset="1" stop-color="#FB6838" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint5_linear_933_547" x1="159.812" y1="189" x2="159.812" y2="298" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" stop-opacity="0.24"/>
          <stop offset="1" stop-color="#FB6838" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint6_linear_933_547" x1="199.188" y1="188" x2="199.187" y2="298" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" stop-opacity="0.24"/>
          <stop offset="1" stop-color="#FB6838" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint7_linear_933_547" x1="238.562" y1="94" x2="238.562" y2="298" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" stop-opacity="0.24"/>
          <stop offset="1" stop-color="#FB6838" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint8_linear_933_547" x1="277.938" y1="154" x2="277.937" y2="298" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" stop-opacity="0.24"/>
          <stop offset="1" stop-color="#FB6838" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint9_linear_933_547" x1="317.312" y1="178" x2="317.312" y2="298" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" stop-opacity="0.24"/>
          <stop offset="1" stop-color="#FB6838" stop-opacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  );
}