'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import imageone from './image/Group 1597883234.png';
import imagetwo from './image/Group 1597883235.png';
import imagethree from './image/Group 1597883236.png';
import linerone from './image/Frame 1321319033.png';
import numbeingss from './image/numbeingss.png';

gsap.registerPlugin(ScrollTrigger);



const Pageone = () => {
  const wrapperRef = useRef(null); // Outer container
  const gridItem1Ref = useRef(null); // First grid item (text content)
  const acquireRef = useRef(null); // Second grid item (image)

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
                start: 'top 100%',
                end: 'bottom 100%', // Adjusted for smoother completion
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
                duration: 1.5,
                ease: 'power3.out',
              },
              0 // Start at timeline's beginning
            );

            // First grid item (text content) animation (left to right)
            tl.fromTo(
              gridItem1Ref.current,
              { x: -50, opacity: 0, scale: 0.95 },
              {
                x: 0,
                opacity: 1,
                scale: 1,
                duration: 1,
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
                duration: 0.6, // Faster animation
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
        <div  id='About'  className='relative'>
          <svg className='w-full absolute bottom-0 -z-10' viewBox="0 0 1920 419" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1936" height="597" transform="matrix(1 0 0 -1 -8 597)" fill="url(#paint0_radial_918_6121)"/>
            <path d="M292.327 25.1831L291.69 25.9378L292.161 26.7635L291.195 26.2662L290.139 26.634L290.775 25.8793L290.304 25.0536L291.27 25.5509L292.327 25.1831Z" fill="white" fill-opacity="0.5"/>
            <path d="M1151.05 9.42331L1150.41 10.1781L1150.88 11.0037L1149.92 10.5064L1148.86 10.8743L1149.5 10.1195L1149.03 9.29383L1149.99 9.79117L1151.05 9.42331Z" fill="white" fill-opacity="0.5"/>
            <path d="M1642.05 337.728L1641.41 338.483L1641.88 339.308L1640.92 338.811L1639.86 339.179L1640.5 338.424L1640.03 337.599L1640.99 338.096L1642.05 337.728Z" fill="white" fill-opacity="0.5"/>
            <path d="M1125.03 132.867L1124.4 133.621L1124.87 134.447L1123.9 133.95L1122.85 134.318L1123.48 133.563L1123.01 132.737L1123.98 133.235L1125.03 132.867Z" fill="white" fill-opacity="0.5"/>
            <path d="M734.577 43.5678L733.94 44.3226L734.411 45.1483L733.445 44.6509L732.389 45.0188L733.025 44.264L732.554 43.4384L733.52 43.9357L734.577 43.5678Z" fill="white" fill-opacity="0.5"/>
            <path d="M85.614 340.355L84.9775 341.11L85.4483 341.935L84.4823 341.438L83.4256 341.806L84.0622 341.051L83.5914 340.225L84.5573 340.723L85.614 340.355Z" fill="white" fill-opacity="0.5"/>
            <path d="M1209.87 256.308L1209.24 257.063L1209.71 257.888L1208.74 257.391L1207.69 257.759L1208.32 257.004L1207.85 256.179L1208.82 256.676L1209.87 256.308Z" fill="white" fill-opacity="0.5"/>
            <path d="M1018.87 392.882L1018.23 393.637L1018.7 394.463L1017.73 393.965L1016.68 394.333L1017.31 393.578L1016.84 392.753L1017.81 393.25L1018.87 392.882Z" fill="white" fill-opacity="0.5"/>
            <path d="M754.733 80.3374L754.097 81.0921L754.567 81.9178L753.601 81.4205L752.545 81.7883L753.181 81.0335L752.71 80.2079L753.676 80.7052L754.733 80.3374Z" fill="white" fill-opacity="0.5"/>
            <path d="M105.77 117.107L105.134 117.862L105.605 118.687L104.639 118.19L103.582 118.558L104.218 117.803L103.748 116.977L104.714 117.475L105.77 117.107Z" fill="white" fill-opacity="0.5"/>
            <path d="M896.761 103.976L896.124 104.731L896.595 105.556L895.629 105.059L894.572 105.427L895.209 104.672L894.738 103.847L895.704 104.344L896.761 103.976Z" fill="white" fill-opacity="0.5"/>
            <path d="M667.081 266.814L666.444 267.569L666.915 268.394L665.949 267.897L664.892 268.265L665.529 267.51L665.058 266.684L666.024 267.182L667.081 266.814Z" fill="white" fill-opacity="0.5"/>
            <path d="M1429.48 248.429L1428.84 249.184L1429.31 250.01L1428.35 249.512L1427.29 249.88L1427.93 249.125L1427.45 248.3L1428.42 248.797L1429.48 248.429Z" fill="white" fill-opacity="0.5"/>
            <path d="M820.114 343.838L818.84 345.348L819.782 347L817.849 346.005L815.735 346.741L817.008 345.231L816.066 343.579L817.999 344.574L820.114 343.838Z" fill="white" fill-opacity="0.5"/>
            <path d="M464.813 152.107L463.539 153.618L464.481 155.27L462.548 154.274L460.434 155.011L461.708 153.5L460.766 151.848L462.699 152.843L464.813 152.107Z" fill="white" fill-opacity="0.5"/>
            <path d="M1287.68 346.463L1286.4 347.973L1287.34 349.625L1285.41 348.63L1283.3 349.366L1284.57 347.856L1283.63 346.204L1285.56 347.199L1287.68 346.463Z" fill="white" fill-opacity="0.5"/>
            <path d="M285.522 320.199L284.248 321.709L285.19 323.361L283.257 322.366L281.143 323.102L282.417 321.592L281.475 319.94L283.408 320.935L285.522 320.199Z" fill="white" fill-opacity="0.5"/>
            <path d="M80.2153 254.539L78.9417 256.049L79.8837 257.701L77.9508 256.706L75.8364 257.442L77.11 255.932L76.1679 254.28L78.1009 255.275L80.2153 254.539Z" fill="white" fill-opacity="0.5"/>
            <path d="M273.95 276.728L274.587 277.483L274.116 278.308L275.082 277.811L276.139 278.179L275.502 277.424L275.973 276.599L275.007 277.096L273.95 276.728Z" fill="white" fill-opacity="0.5"/>
            <path d="M790.966 71.8667L791.603 72.6214L791.132 73.4471L792.098 72.9498L793.154 73.3176L792.518 72.5628L792.989 71.7372L792.023 72.2345L790.966 71.8667Z" fill="white" fill-opacity="0.5"/>
            <path d="M1481.41 408.05L1482.05 408.805L1481.58 409.631L1482.55 409.133L1483.6 409.501L1482.97 408.746L1483.44 407.921L1482.47 408.418L1481.41 408.05Z" fill="white" fill-opacity="0.5"/>
            <path d="M1830.39 279.355L1831.02 280.11L1830.55 280.935L1831.52 280.438L1832.57 280.806L1831.94 280.051L1832.41 279.225L1831.44 279.723L1830.39 279.355Z" fill="white" fill-opacity="0.5"/>
            <path d="M706.126 195.308L706.763 196.063L706.292 196.888L707.258 196.391L708.315 196.759L707.678 196.004L708.149 195.179L707.183 195.676L706.126 195.308Z" fill="white" fill-opacity="0.5"/>
            <path d="M897.134 331.882L897.771 332.637L897.3 333.463L898.266 332.965L899.322 333.333L898.686 332.578L899.157 331.753L898.191 332.25L897.134 331.882Z" fill="white" fill-opacity="0.5"/>
            <path d="M1161.27 19.3374L1161.9 20.0921L1161.43 20.9178L1162.4 20.4205L1163.46 20.7883L1162.82 20.0335L1163.29 19.2079L1162.32 19.7052L1161.27 19.3374Z" fill="white" fill-opacity="0.5"/>
            <path d="M1775.78 394.917L1776.42 395.672L1775.94 396.498L1776.91 396.001L1777.97 396.368L1777.33 395.614L1777.8 394.788L1776.84 395.285L1775.78 394.917Z" fill="white" fill-opacity="0.5"/>
            <path d="M1810.23 56.1069L1810.87 56.8617L1810.4 57.6873L1811.36 57.19L1812.42 57.5578L1811.78 56.8031L1812.25 55.9774L1811.29 56.4748L1810.23 56.1069Z" fill="white" fill-opacity="0.5"/>
            <path d="M1019.24 42.976L1019.88 43.7308L1019.41 44.5565L1020.37 44.0591L1021.43 44.427L1020.79 43.6722L1021.26 42.8466L1020.3 43.3439L1019.24 42.976Z" fill="white" fill-opacity="0.5"/>
            <path d="M1248.92 205.814L1249.56 206.569L1249.08 207.394L1250.05 206.897L1251.11 207.265L1250.47 206.51L1250.94 205.684L1249.98 206.182L1248.92 205.814Z" fill="white" fill-opacity="0.5"/>
            <path d="M486.523 187.429L487.159 188.184L486.688 189.01L487.654 188.512L488.711 188.88L488.075 188.125L488.545 187.3L487.579 187.797L486.523 187.429Z" fill="white" fill-opacity="0.5"/>
            <path d="M1095.89 282.838L1097.16 284.348L1096.22 286L1098.15 285.005L1100.27 285.741L1098.99 284.231L1099.93 282.579L1098 283.574L1095.89 282.838Z" fill="white" fill-opacity="0.5"/>
            <path d="M1451.19 91.1072L1452.46 92.6175L1451.52 94.2697L1453.45 93.2745L1455.57 94.0106L1454.29 92.5003L1455.23 90.8482L1453.3 91.8433L1451.19 91.1072Z" fill="white" fill-opacity="0.5"/>
            <path d="M628.324 285.463L629.597 286.973L628.655 288.625L630.588 287.63L632.703 288.366L631.429 286.856L632.371 285.204L630.438 286.199L628.324 285.463Z" fill="white" fill-opacity="0.5"/>
            <path d="M1630.48 259.199L1631.75 260.709L1630.81 262.361L1632.74 261.366L1634.86 262.102L1633.58 260.592L1634.53 258.94L1632.59 259.935L1630.48 259.199Z" fill="white" fill-opacity="0.5"/>
            <path d="M1835.78 193.539L1837.06 195.049L1836.12 196.701L1838.05 195.706L1840.16 196.442L1838.89 194.932L1839.83 193.28L1837.9 194.275L1835.78 193.539Z" fill="white" fill-opacity="0.5"/>
            <g opacity="0.2">
            <path d="M1578.17 212.797C1578.17 212.909 1578.08 213 1577.97 213C1577.86 213 1577.77 212.909 1577.77 212.797V179.018C1577.77 178.906 1577.86 178.814 1577.97 178.814C1578.08 178.814 1578.17 178.906 1578.17 179.018V212.797Z" fill="white"/>
            <path d="M1580.62 198.553C1580.62 200.013 1579.43 201.198 1577.97 201.198C1576.51 201.198 1575.33 200.013 1575.33 198.553V193.669C1575.33 192.208 1576.51 191.023 1577.97 191.023C1579.43 191.023 1580.62 192.208 1580.62 193.669V198.553Z" fill="white"/>
            <path d="M1569.86 199.977C1569.86 200.202 1569.68 200.384 1569.45 200.384C1569.23 200.384 1569.05 200.202 1569.05 199.977V178.407C1569.05 178.182 1569.23 178 1569.45 178C1569.68 178 1569.86 178.182 1569.86 178.407V199.977Z" fill="white"/>
            <path d="M1571.9 190.209C1571.9 191.558 1570.8 192.651 1569.46 192.651C1568.11 192.651 1567.01 191.558 1567.01 190.209V188.174C1567.01 186.826 1568.11 185.732 1569.46 185.732C1570.8 185.732 1571.9 186.826 1571.9 188.174V190.209Z" fill="white"/>
            </g>
            <g opacity="0.2">
            <path d="M1487.17 79.797C1487.17 79.9094 1487.08 80.0005 1486.97 80.0005C1486.86 80.0005 1486.77 79.9094 1486.77 79.797V46.0179C1486.77 45.9056 1486.86 45.8145 1486.97 45.8145C1487.08 45.8145 1487.17 45.9056 1487.17 46.0179V79.797Z" fill="white"/>
            <path d="M1489.62 65.5525C1489.62 67.0135 1488.43 68.1979 1486.97 68.1979C1485.51 68.1979 1484.33 67.0135 1484.33 65.5525V60.6688C1484.33 59.2078 1485.51 58.0234 1486.97 58.0234C1488.43 58.0234 1489.62 59.2078 1489.62 60.6688V65.5525Z" fill="white"/>
            <path d="M1478.86 66.9767C1478.86 67.2015 1478.68 67.3837 1478.45 67.3837C1478.23 67.3837 1478.05 67.2015 1478.05 66.9767V45.407C1478.05 45.1822 1478.23 45 1478.45 45C1478.68 45 1478.86 45.1822 1478.86 45.407V66.9767Z" fill="white"/>
            <path d="M1480.9 57.2092C1480.9 58.5578 1479.8 59.651 1478.46 59.651C1477.11 59.651 1476.01 58.5578 1476.01 57.2092V55.1743C1476.01 53.8257 1477.11 52.7324 1478.46 52.7324C1479.8 52.7324 1480.9 53.8257 1480.9 55.1743V57.2092Z" fill="white"/>
            </g>
            <g opacity="0.2">
            <path d="M1446.17 306.797C1446.17 306.909 1446.08 307 1445.97 307C1445.86 307 1445.77 306.909 1445.77 306.797V273.018C1445.77 272.906 1445.86 272.814 1445.97 272.814C1446.08 272.814 1446.17 272.906 1446.17 273.018V306.797Z" fill="white"/>
            <path d="M1448.62 292.553C1448.62 294.013 1447.43 295.198 1445.97 295.198C1444.51 295.198 1443.33 294.013 1443.33 292.553V287.669C1443.33 286.208 1444.51 285.023 1445.97 285.023C1447.43 285.023 1448.62 286.208 1448.62 287.669V292.553Z" fill="white"/>
            <path d="M1437.86 293.977C1437.86 294.202 1437.68 294.384 1437.45 294.384C1437.23 294.384 1437.05 294.202 1437.05 293.977V272.407C1437.05 272.182 1437.23 272 1437.45 272C1437.68 272 1437.86 272.182 1437.86 272.407V293.977Z" fill="white"/>
            <path d="M1439.9 284.209C1439.9 285.558 1438.8 286.651 1437.46 286.651C1436.11 286.651 1435.01 285.558 1435.01 284.209V282.174C1435.01 280.826 1436.11 279.732 1437.46 279.732C1438.8 279.732 1439.9 280.826 1439.9 282.174V284.209Z" fill="white"/>
            </g>
            <g opacity="0.2">
            <path d="M345.175 127.797C345.175 127.909 345.083 128 344.971 128C344.859 128 344.768 127.909 344.768 127.797V94.0179C344.768 93.9056 344.859 93.8145 344.971 93.8145C345.083 93.8145 345.175 93.9056 345.175 94.0179V127.797Z" fill="white"/>
            <path d="M347.617 113.553C347.617 115.013 346.433 116.198 344.972 116.198C343.511 116.198 342.327 115.013 342.327 113.553V108.669C342.327 107.208 343.511 106.023 344.972 106.023C346.433 106.023 347.617 107.208 347.617 108.669V113.553Z" fill="white"/>
            <path d="M336.861 114.977C336.861 115.202 336.679 115.384 336.454 115.384C336.229 115.384 336.047 115.202 336.047 114.977V93.407C336.047 93.1822 336.229 93 336.454 93C336.679 93 336.861 93.1822 336.861 93.407V114.977Z" fill="white"/>
            <path d="M338.897 105.209C338.897 106.558 337.804 107.651 336.456 107.651C335.107 107.651 334.014 106.558 334.014 105.209V103.174C334.014 101.826 335.107 100.732 336.456 100.732C337.804 100.732 338.897 101.826 338.897 103.174V105.209Z" fill="white"/>
            </g>
            <g opacity="0.2">
            <path d="M231.175 368.797C231.175 368.909 231.083 369 230.971 369C230.859 369 230.768 368.909 230.768 368.797V335.018C230.768 334.906 230.859 334.814 230.971 334.814C231.083 334.814 231.175 334.906 231.175 335.018V368.797Z" fill="white"/>
            <path d="M233.617 354.553C233.617 356.013 232.433 357.198 230.972 357.198C229.511 357.198 228.327 356.013 228.327 354.553V349.669C228.327 348.208 229.511 347.023 230.972 347.023C232.433 347.023 233.617 348.208 233.617 349.669V354.553Z" fill="white"/>
            <path d="M222.861 355.977C222.861 356.202 222.679 356.384 222.454 356.384C222.229 356.384 222.047 356.202 222.047 355.977V334.407C222.047 334.182 222.229 334 222.454 334C222.679 334 222.861 334.182 222.861 334.407V355.977Z" fill="white"/>
            <path d="M224.897 346.209C224.897 347.558 223.804 348.651 222.456 348.651C221.107 348.651 220.014 347.558 220.014 346.209V344.174C220.014 342.826 221.107 341.732 222.456 341.732C223.804 341.732 224.897 342.826 224.897 344.174V346.209Z" fill="white"/>
            </g>
            <g opacity="0.2">
            <path d="M454.175 291.797C454.175 291.909 454.083 292 453.971 292C453.859 292 453.768 291.909 453.768 291.797V258.018C453.768 257.906 453.859 257.814 453.971 257.814C454.083 257.814 454.175 257.906 454.175 258.018V291.797Z" fill="white"/>
            <path d="M456.617 277.553C456.617 279.013 455.433 280.198 453.972 280.198C452.511 280.198 451.327 279.013 451.327 277.553V272.669C451.327 271.208 452.511 270.023 453.972 270.023C455.433 270.023 456.617 271.208 456.617 272.669V277.553Z" fill="white"/>
            <path d="M445.861 278.977C445.861 279.202 445.679 279.384 445.454 279.384C445.229 279.384 445.047 279.202 445.047 278.977V257.407C445.047 257.182 445.229 257 445.454 257C445.679 257 445.861 257.182 445.861 257.407V278.977Z" fill="white"/>
            <path d="M447.897 269.209C447.897 270.558 446.804 271.651 445.456 271.651C444.107 271.651 443.014 270.558 443.014 269.209V267.174C443.014 265.826 444.107 264.732 445.456 264.732C446.804 264.732 447.897 265.826 447.897 267.174V269.209Z" fill="white"/>
            </g>
            <defs>
            <radialGradient id="paint0_radial_918_6121" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1034 597) scale(2257.2 696.048)">
            <stop offset="0.4" stop-color="#061113" stop-opacity="0"/>
            <stop offset="0.7" stop-color="#1EB683"/>
            <stop offset="1" stop-color="white"/>
            </radialGradient>
            </defs>
            </svg>
            <Image className='w-full absolute top-0 -z-11' src={linerone} alt='lineroneLoading...'/>
            

            <div   className=''>
              <div ref={wrapperRef} className='container mx-auto px-[24px] sm:px-0'>
                <div className='bacxkgaAS mx-auto py-[45px] sm:py-[55px] md:py-[75px] lg:py-[105px] xl:py-[124px] 2xl:py-[148px] relative sm:gap-0 gap-12'>
                  <div className="flex items-center justify-start">
                    <button className=" transingpore relative overflow-hidden px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px]
                        py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px]
                        text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]
                      "
                    >
                      Discovery

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

                <div  className='flex items-start justify-start flex-col pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[24px]'>
                  <div className='flex items-start flex-col justify-start'>
                    <h2 className='tradines text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[62px] !text-start'>
                     <span >Elevate Your </span><span className='unlocyhoua'>Trading Game</span>  
                    </h2>
                    <p className='bitstartp text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px]  pb-[32px] sm:pb-[36px] md:pb-[40px] lg:pb-[48px] xl:pb-[64px] 2xl:pb-[84px] !text-start '>Hone your trading skills risk-free with our advanced MT5 simulator—experience real-time <br className='md:block hidden'/> markets, practice strategies, and build confidence before investing.</p>
                  </div>
                </div>
                <div ref={acquireRef} className='flex items-center grid-cols-1 md:grid-cols-3 gap-[13px] sm:gap-[14px] md:gap-[15px] lg:gap-[16px] xl:gap-[20px] 2xl:gap-[24px]'>
                  <div className='bordingrtexara relative pt-[14px] sm:pt-[15px] md:pt-[16px] lg:pt-[20px] xl:pt-[24px] 2xl:pt-[32px] pb-[13px] sm:pb-[14px] md:pb-[15px] lg:pb-[16px] xl:pb-[20px] 2xl:pb-[24px]  px-[13px] sm:px-[14px] md:px-[15px] lg:px-[16px] xl:px-[20px] 2xl:px-[24px] overflow-hidden'>
                    <h2 className='repetinmaksa text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]'>Repetition Makes Mastery</h2>
                    <p className='throeconsper text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] mt-[11px] sm:mt-[12px] md:mt-[13px] lg:mt-[14px] xl:mt-[15px] 2xl:mt-[16px]'>Through consistent repetition, skills are refined <br className='md:block hidden'/> and mastery is gradually achieved over time.</p>
                    <Image className='w-full mt-[13px] sm:mt-[14px] md:mt-[15px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[24px]' src={imageone} alt=''/>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-full absolute left-0 bottom-0 h-auto' viewBox="0 0 424 318" fill="none">
                    <g filter="url(#filter0_f_1826_1347)">
                      <ellipse cx="212" cy="309" rx="91" ry="109" fill="#1EB683" fill-opacity="0.6"/>
                    </g>
                    <defs>
                      <filter id="filter0_f_1826_1347" x="-79" y="0" width="582" height="618" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1826_1347"/>
                      </filter>
                    </defs>
                  </svg>
                  </div>
                  {/* section 2 */}
                  <div className='bordingrtexara relative pt-[14px] sm:pt-[15px] md:pt-[16px] lg:pt-[20px] xl:pt-[24px] 2xl:pt-[32px] pb-[13px] sm:pb-[14px] md:pb-[15px] lg:pb-[16px] xl:pb-[20px] 2xl:pb-[24px]  px-[13px] sm:px-[14px] md:px-[15px] lg:px-[16px] xl:px-[20px] 2xl:px-[24px] overflow-hidden'>
                    <h2 className='repetinmaksa text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]'>Unearth Profitable <br className="md:block hidden"/> Trading Opportunities</h2>
                    <p className='throeconsper text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] mt-[11px] sm:mt-[12px] md:mt-[13px] lg:mt-[14px] xl:mt-[15px] 2xl:mt-[16px]'>Consistent analysis and strategy reveal hidden <br className='md:block hidden'/>paths to trading success.</p>
                    <Image className='w-full mt-[13px] sm:mt-[14px] md:mt-[15px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[24px]' src={imagetwo} alt=''/>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-full absolute left-0 bottom-0 h-auto' viewBox="0 0 424 318" fill="none">
                    <g filter="url(#filter0_f_1826_1347)">
                      <ellipse cx="212" cy="309" rx="91" ry="109" fill="#1EB683" fill-opacity="0.6"/>
                    </g>
                    <defs>
                      <filter id="filter0_f_1826_1347" x="-79" y="0" width="582" height="618" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1826_1347"/>
                      </filter>
                    </defs>
                  </svg>
                  </div>
                  {/* section 3 */}
                  <div className='bordingrtexara relative pt-[14px] sm:pt-[15px] md:pt-[16px] lg:pt-[20px] xl:pt-[24px] 2xl:pt-[32px] pb-[13px] sm:pb-[14px] md:pb-[15px] lg:pb-[16px] xl:pb-[20px] 2xl:pb-[24px]  px-[13px] sm:px-[14px] md:px-[15px] lg:px-[16px] xl:px-[20px] 2xl:px-[24px] overflow-hidden'>
                    <h2 className='repetinmaksa text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]'>Grow Your Expertise</h2>
                    <p className='throeconsper text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] mt-[11px] sm:mt-[12px] md:mt-[13px] lg:mt-[14px] xl:mt-[15px] 2xl:mt-[16px]'>Master the art of trading through continuous <br className='md:block hidden'/>learning and practical experience.</p>
                    <Image className='w-full mt-[13px] sm:mt-[14px] md:mt-[15px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[24px]' src={imagethree} alt=''/>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-full absolute left-0 bottom-0 h-auto' viewBox="0 0 424 318" fill="none">
                    <g filter="url(#filter0_f_1826_1347)">
                      <ellipse cx="212" cy="309" rx="91" ry="109" fill="#1EB683" fill-opacity="0.6"/>
                    </g>
                    <defs>
                      <filter id="filter0_f_1826_1347" x="-79" y="0" width="582" height="618" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1826_1347"/>
                      </filter>
                    </defs>
                  </svg>
                  </div>
                </div>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-center flex-col py-[32px] sm:py-[36px] md:py-[40px] lg:py-[48px] xl:py-[64px] 2xl:py-[99px]'>
                  <h2 className='tradinesshara text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[54px]'>
                     Sharpen your skills for the market
                    </h2>
                    <p className='bitstartp text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[24px]  pb-[14px] sm:pb-[15px] md:pb-[16px] lg:pb-[20px] xl:pb-[24px] 2xl:pb-[32px]  '>Immerse yourself in the dynamic world of the market. Feel the pulse of every candle as <br className='lg:block hidden'/>it forms, and learn to master your emotions and cultivate patience.</p>
                    <button className='buttonauditelt relative  cursor-pointer text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] flex items-center py-[12px] sm:py-[13px] md:py-[14px] lg:py-[15px] xl:py-[16px] 2xl:py-[20px] px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px] group gap-[7.50px]'>
                            Buy Now
                        </button>
                </div>
        </div>
    );
};

export default Pageone;