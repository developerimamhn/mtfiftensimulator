'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import numbeingss from './image/Frame 1321sads318957.png';
import image2 from './image/image5.png';
import image3 from './image/image6.png';
import image4 from './image/image7.png';
import linetwo from './image/smslide3.png';
import lineone from './image/smslide4.png';

gsap.registerPlugin(ScrollTrigger);

const Pagefore = () => {
const wrapperRef = useRef(null);
const textRef = useRef(null);
const imageRef = useRef(null);
const playIconRef = useRef(null);

  
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
        duration: 0.9,
      },
    });

    // Section reveal
    tl.from(wrapperRef.current, {
      autoAlpha: 0,
      y: 80,
    })

    // Text block
    .from(
      textRef.current,
      {
        autoAlpha: 0,
        y: 50,
      },
      '-=0.4'
    )

    // Image / logo zoom
    .from(
      imageRef.current,
      {
        autoAlpha: 0,
        scale: 0.9,
        y: 30,
      },
      '-=0.4'
    )

    // Play icon pop
    .from(
      playIconRef.current,
      {
        autoAlpha: 0,
        scale: 0,
        ease: 'back.out(1.7)',
        duration: 0.6,
      },
      '-=0.2'
    );
  });

  return () => mm.revert();
}, []);



    return (
        <div id='About' ref={wrapperRef} className='py-[45px] sm:py-[55px] md:py-[75px] lg:py-[105px] xl:py-[124px] 2xl:py-[148px] px-6 sm:px-0 relative bg-gradient-to-b from-[#061113] to-[#061113]  overflow-hidden'>
        <svg className='w-full absolute top-0 overflow-hidden animate-spin' style={{ animationDuration: "50s", animationTimingFunction: "linear" }} viewBox="0 0 1920 856" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M280.03 29.0327L279.394 29.7875L279.864 30.6131L278.898 30.1158L277.842 30.4836L278.478 29.7289L278.007 28.9032L278.973 29.4005L280.03 29.0327Z" fill="white" fill-opacity="0.5"/>
        <path d="M111.991 102.574L111.354 103.328L111.825 104.154L110.859 103.657L109.803 104.025L110.439 103.27L109.968 102.444L110.934 102.942L111.991 102.574Z" fill="white" fill-opacity="0.5"/>
        <path d="M59.0222 13.2749L58.3857 14.0296L58.8565 14.8553L57.8905 14.358L56.8338 14.7258L57.4704 13.971L56.9996 13.1454L57.9655 13.6427L59.0222 13.2749Z" fill="white" fill-opacity="0.5"/>
        <path d="M558.46 84.1889L557.823 84.9437L558.294 85.7694L557.328 85.272L556.271 85.6399L556.908 84.8851L556.437 84.0595L557.403 84.5568L558.46 84.1889Z" fill="white" fill-opacity="0.5"/>
        <path d="M916.102 31.6596L915.466 32.4144L915.937 33.2401L914.971 32.7427L913.914 33.1106L914.55 32.3558L914.08 31.5302L915.046 32.0275L916.102 31.6596Z" fill="white" fill-opacity="0.5"/>
        <path d="M583.069 215.511L582.433 216.266L582.903 217.092L581.937 216.594L580.881 216.962L581.517 216.207L581.046 215.382L582.012 215.879L583.069 215.511Z" fill="white" fill-opacity="0.5"/>
        <path d="M305.811 126.21L305.175 126.965L305.646 127.791L304.68 127.294L303.623 127.661L304.259 126.907L303.789 126.081L304.755 126.578L305.811 126.21Z" fill="white" fill-opacity="0.5"/>
        <path d="M294.327 302.183L293.69 302.938L294.161 303.763L293.195 303.266L292.139 303.634L292.775 302.879L292.304 302.054L293.27 302.551L294.327 302.183Z" fill="white" fill-opacity="0.5"/>
        <path d="M1153.05 286.423L1152.41 287.178L1152.88 288.004L1151.92 287.506L1150.86 287.874L1151.5 287.119L1151.03 286.294L1151.99 286.791L1153.05 286.423Z" fill="white" fill-opacity="0.5"/>
        <path d="M1430.07 63.1772L1429.44 63.932L1429.91 64.7576L1428.94 64.2603L1427.88 64.6282L1428.52 63.8734L1428.05 63.0477L1429.02 63.5451L1430.07 63.1772Z" fill="white" fill-opacity="0.5"/>
        <path d="M1824.98 262.787L1824.34 263.541L1824.81 264.367L1823.85 263.87L1822.79 264.238L1823.43 263.483L1822.96 262.657L1823.92 263.154L1824.98 262.787Z" fill="white" fill-opacity="0.5"/>
        <path d="M1644.05 614.728L1643.41 615.483L1643.88 616.308L1642.92 615.811L1641.86 616.179L1642.5 615.424L1642.03 614.599L1642.99 615.096L1644.05 614.728Z" fill="white" fill-opacity="0.5"/>
        <path d="M1829.2 837.976L1828.57 838.731L1829.04 839.556L1828.07 839.059L1827.01 839.427L1827.65 838.672L1827.18 837.847L1828.15 838.344L1829.2 837.976Z" fill="white" fill-opacity="0.5"/>
        <path d="M874.386 835.349L873.749 836.104L874.22 836.93L873.254 836.432L872.197 836.8L872.834 836.045L872.363 835.22L873.329 835.717L874.386 835.349Z" fill="white" fill-opacity="0.5"/>
        <path d="M1127.03 409.867L1126.4 410.621L1126.87 411.447L1125.9 410.95L1124.85 411.318L1125.48 410.563L1125.01 409.737L1125.98 410.235L1127.03 409.867Z" fill="white" fill-opacity="0.5"/>
        <path d="M736.577 320.568L735.94 321.323L736.411 322.148L735.445 321.651L734.389 322.019L735.025 321.264L734.554 320.438L735.52 320.936L736.577 320.568Z" fill="white" fill-opacity="0.5"/>
        <path d="M436.589 746.05L435.952 746.805L436.423 747.631L435.457 747.133L434.4 747.501L435.037 746.746L434.566 745.921L435.532 746.418L436.589 746.05Z" fill="white" fill-opacity="0.5"/>
        <path d="M87.616 617.355L86.9795 618.11L87.4503 618.935L86.4843 618.438L85.4276 618.806L86.0641 618.051L85.5933 617.225L86.5593 617.723L87.616 617.355Z" fill="white" fill-opacity="0.5"/>
        <path d="M91.8328 228.642L91.1963 229.397L91.6671 230.222L90.7011 229.725L89.6444 230.093L90.2809 229.338L89.8101 228.513L90.7761 229.01L91.8328 228.642Z" fill="white" fill-opacity="0.5"/>
        <path d="M554.241 265.412L553.604 266.166L554.075 266.992L553.109 266.495L552.053 266.863L552.689 266.108L552.218 265.282L553.184 265.779L554.241 265.412Z" fill="white" fill-opacity="0.5"/>
        <path d="M1368.43 268.039L1367.8 268.793L1368.27 269.619L1367.3 269.122L1366.24 269.489L1366.88 268.735L1366.41 267.909L1367.38 268.406L1368.43 268.039Z" fill="white" fill-opacity="0.5"/>
        <path d="M1211.87 533.308L1211.24 534.063L1211.71 534.888L1210.74 534.391L1209.69 534.759L1210.32 534.004L1209.85 533.179L1210.82 533.676L1211.87 533.308Z" fill="white" fill-opacity="0.5"/>
        <path d="M1020.87 669.882L1020.23 670.637L1020.7 671.463L1019.73 670.965L1018.68 671.333L1019.31 670.578L1018.84 669.753L1019.81 670.25L1020.87 669.882Z" fill="white" fill-opacity="0.5"/>
        <path d="M756.733 357.337L756.097 358.092L756.567 358.918L755.601 358.42L754.545 358.788L755.181 358.034L754.71 357.208L755.676 357.705L756.733 357.337Z" fill="white" fill-opacity="0.5"/>
        <path d="M1068.21 155.101L1067.57 155.856L1068.04 156.681L1067.08 156.184L1066.02 156.552L1066.66 155.797L1066.19 154.972L1067.15 155.469L1068.21 155.101Z" fill="white" fill-opacity="0.5"/>
        <path d="M142.221 732.917L141.585 733.672L142.056 734.498L141.09 734.001L140.033 734.368L140.67 733.614L140.199 732.788L141.165 733.285L142.221 732.917Z" fill="white" fill-opacity="0.5"/>
        <path d="M107.772 394.107L107.136 394.862L107.607 395.687L106.641 395.19L105.584 395.558L106.22 394.803L105.75 393.977L106.716 394.475L107.772 394.107Z" fill="white" fill-opacity="0.5"/>
        <path d="M898.761 380.976L898.124 381.731L898.595 382.556L897.629 382.059L896.572 382.427L897.209 381.672L896.738 380.847L897.704 381.344L898.761 380.976Z" fill="white" fill-opacity="0.5"/>
        <path d="M669.081 543.814L668.444 544.569L668.915 545.394L667.949 544.897L666.892 545.265L667.529 544.51L667.058 543.684L668.024 544.182L669.081 543.814Z" fill="white" fill-opacity="0.5"/>
        <path d="M1783.26 34.2866L1782.63 35.0414L1783.1 35.867L1782.13 35.3697L1781.08 35.7375L1781.71 34.9828L1781.24 34.1571L1782.21 34.6545L1783.26 34.2866Z" fill="white" fill-opacity="0.5"/>
        <path d="M1431.48 525.429L1430.84 526.184L1431.31 527.01L1430.35 526.512L1429.29 526.88L1429.93 526.125L1429.45 525.3L1430.42 525.797L1431.48 525.429Z" fill="white" fill-opacity="0.5"/>
        <path d="M822.116 620.838L820.842 622.348L821.784 624L819.851 623.005L817.737 623.741L819.01 622.231L818.068 620.579L820.001 621.574L822.116 620.838Z" fill="white" fill-opacity="0.5"/>
        <path d="M466.813 429.107L465.539 430.618L466.481 432.27L464.548 431.274L462.434 432.011L463.708 430.5L462.766 428.848L464.699 429.843L466.813 429.107Z" fill="white" fill-opacity="0.5"/>
        <path d="M1325.54 106.055L1324.26 107.565L1325.21 109.217L1323.27 108.222L1321.16 108.958L1322.43 107.448L1321.49 105.795L1323.42 106.791L1325.54 106.055Z" fill="white" fill-opacity="0.5"/>
        <path d="M1289.68 623.463L1288.4 624.973L1289.35 626.625L1287.41 625.63L1285.3 626.366L1286.57 624.856L1285.63 623.204L1287.56 624.199L1289.68 623.463Z" fill="white" fill-opacity="0.5"/>
        <path d="M287.522 597.199L286.248 598.709L287.19 600.361L285.257 599.366L283.143 600.102L284.417 598.592L283.475 596.94L285.408 597.935L287.522 597.199Z" fill="white" fill-opacity="0.5"/>
        <path d="M82.2173 531.539L80.9436 533.049L81.8857 534.701L79.9528 533.706L77.8383 534.442L79.112 532.932L78.1699 531.28L80.1028 532.275L82.2173 531.539Z" fill="white" fill-opacity="0.5"/>
        <path d="M11.6704 268.894L10.3967 270.405L11.3388 272.057L9.40588 271.062L7.29143 271.798L8.5651 270.287L7.62301 268.635L9.55594 269.63L11.6704 268.894Z" fill="white" fill-opacity="0.5"/>
        <path d="M1808.01 41.5737L1808.65 42.3285L1808.18 43.1541L1809.14 42.6568L1810.2 43.0246L1809.56 42.2699L1810.03 41.4442L1809.07 41.9416L1808.01 41.5737Z" fill="white" fill-opacity="0.5"/>
        <path d="M1361.54 23.1889L1362.18 23.9437L1361.71 24.7694L1362.67 24.272L1363.73 24.6399L1363.09 23.8851L1363.56 23.0595L1362.6 23.5568L1361.54 23.1889Z" fill="white" fill-opacity="0.5"/>
        <path d="M1336.93 154.511L1337.57 155.266L1337.1 156.092L1338.06 155.594L1339.12 155.962L1338.48 155.207L1338.96 154.382L1337.99 154.879L1336.93 154.511Z" fill="white" fill-opacity="0.5"/>
        <path d="M1614.19 65.2104L1614.83 65.9652L1614.35 66.7908L1615.32 66.2935L1616.38 66.6614L1615.74 65.9066L1616.21 65.0809L1615.25 65.5783L1614.19 65.2104Z" fill="white" fill-opacity="0.5"/>
        <path d="M1625.67 241.183L1626.31 241.938L1625.84 242.763L1626.8 242.266L1627.86 242.634L1627.22 241.879L1627.7 241.054L1626.73 241.551L1625.67 241.183Z" fill="white" fill-opacity="0.5"/>
        <path d="M766.95 225.423L767.587 226.178L767.116 227.004L768.082 226.506L769.139 226.874L768.502 226.119L768.973 225.294L768.007 225.791L766.95 225.423Z" fill="white" fill-opacity="0.5"/>
        <path d="M489.929 2.17722L490.565 2.93199L490.095 3.75764L491.061 3.2603L492.117 3.62816L491.481 2.87339L491.952 2.04774L490.986 2.54508L489.929 2.17722Z" fill="white" fill-opacity="0.5"/>
        <path d="M95.0207 201.787L95.6572 202.541L95.1864 203.367L96.1524 202.87L97.2091 203.238L96.5726 202.483L97.0434 201.657L96.0774 202.154L95.0207 201.787Z" fill="white" fill-opacity="0.5"/>
        <path d="M275.95 553.728L276.587 554.483L276.116 555.308L277.082 554.811L278.139 555.179L277.502 554.424L277.973 553.599L277.007 554.096L275.95 553.728Z" fill="white" fill-opacity="0.5"/>
        <path d="M90.8 776.976L91.4365 777.731L90.9657 778.556L91.9317 778.059L92.9884 778.427L92.3519 777.672L92.8227 776.847L91.8567 777.344L90.8 776.976Z" fill="white" fill-opacity="0.5"/>
        <path d="M534.458 816.373L535.095 817.127L534.624 817.953L535.59 817.456L536.647 817.823L536.01 817.069L536.481 816.243L535.515 816.74L534.458 816.373Z" fill="white" fill-opacity="0.5"/>
        <path d="M1045.61 774.349L1046.25 775.104L1045.78 775.93L1046.75 775.432L1047.8 775.8L1047.17 775.045L1047.64 774.22L1046.67 774.717L1045.61 774.349Z" fill="white" fill-opacity="0.5"/>
        <path d="M792.966 348.867L793.603 349.621L793.132 350.447L794.098 349.95L795.154 350.318L794.518 349.563L794.989 348.737L794.023 349.235L792.966 348.867Z" fill="white" fill-opacity="0.5"/>
        <path d="M1183.42 259.568L1184.06 260.323L1183.59 261.148L1184.55 260.651L1185.61 261.019L1184.97 260.264L1185.45 259.438L1184.48 259.936L1183.42 259.568Z" fill="white" fill-opacity="0.5"/>
        <path d="M1483.41 685.05L1484.05 685.805L1483.58 686.631L1484.55 686.133L1485.6 686.501L1484.97 685.746L1485.44 684.921L1484.47 685.418L1483.41 685.05Z" fill="white" fill-opacity="0.5"/>
        <path d="M1832.39 556.355L1833.02 557.11L1832.55 557.935L1833.52 557.438L1834.57 557.806L1833.94 557.051L1834.41 556.225L1833.44 556.723L1832.39 556.355Z" fill="white" fill-opacity="0.5"/>
        <path d="M1828.17 167.642L1828.8 168.397L1828.33 169.222L1829.3 168.725L1830.36 169.093L1829.72 168.338L1830.19 167.513L1829.22 168.01L1828.17 167.642Z" fill="white" fill-opacity="0.5"/>
        <path d="M1365.76 204.412L1366.4 205.166L1365.93 205.992L1366.89 205.495L1367.95 205.863L1367.31 205.108L1367.78 204.282L1366.82 204.779L1365.76 204.412Z" fill="white" fill-opacity="0.5"/>
        <path d="M551.568 207.039L552.204 207.793L551.733 208.619L552.699 208.122L553.756 208.489L553.119 207.735L553.59 206.909L552.624 207.406L551.568 207.039Z" fill="white" fill-opacity="0.5"/>
        <path d="M708.126 472.308L708.763 473.063L708.292 473.888L709.258 473.391L710.315 473.759L709.678 473.004L710.149 472.179L709.183 472.676L708.126 472.308Z" fill="white" fill-opacity="0.5"/>
        <path d="M899.134 608.882L899.771 609.637L899.3 610.463L900.266 609.965L901.322 610.333L900.686 609.578L901.157 608.753L900.191 609.25L899.134 608.882Z" fill="white" fill-opacity="0.5"/>
        <path d="M1163.27 296.337L1163.9 297.092L1163.43 297.918L1164.4 297.42L1165.46 297.788L1164.82 297.034L1165.29 296.208L1164.32 296.705L1163.27 296.337Z" fill="white" fill-opacity="0.5"/>
        <path d="M851.792 94.101L852.429 94.8558L851.958 95.6815L852.924 95.1841L853.981 95.552L853.344 94.7972L853.815 93.9716L852.849 94.4689L851.792 94.101Z" fill="white" fill-opacity="0.5"/>
        <path d="M1777.78 671.917L1778.42 672.672L1777.94 673.498L1778.91 673.001L1779.97 673.368L1779.33 672.614L1779.8 671.788L1778.84 672.285L1777.78 671.917Z" fill="white" fill-opacity="0.5"/>
        <path d="M1812.23 333.107L1812.87 333.862L1812.4 334.687L1813.36 334.19L1814.42 334.558L1813.78 333.803L1814.25 332.977L1813.29 333.475L1812.23 333.107Z" fill="white" fill-opacity="0.5"/>
        <path d="M1021.24 319.976L1021.88 320.731L1021.41 321.556L1022.37 321.059L1023.43 321.427L1022.79 320.672L1023.26 319.847L1022.3 320.344L1021.24 319.976Z" fill="white" fill-opacity="0.5"/>
        <path d="M703.905 797.988L704.542 798.743L704.071 799.568L705.037 799.071L706.094 799.439L705.457 798.684L705.928 797.858L704.962 798.356L703.905 797.988Z" fill="white" fill-opacity="0.5"/>
        <path d="M1250.92 482.814L1251.56 483.569L1251.08 484.394L1252.05 483.897L1253.11 484.265L1252.47 483.51L1252.94 482.684L1251.98 483.182L1250.92 482.814Z" fill="white" fill-opacity="0.5"/>
        <path d="M-1.07302 813.746L-0.436501 814.5L-0.907306 815.326L0.058675 814.829L1.11537 815.197L0.478859 814.442L0.949664 813.616L-0.016317 814.113L-1.07302 813.746Z" fill="white" fill-opacity="0.5"/>
        <path d="M488.523 464.429L489.159 465.184L488.688 466.01L489.654 465.512L490.711 465.88L490.075 465.125L490.545 464.3L489.579 464.797L488.523 464.429Z" fill="white" fill-opacity="0.5"/>
        <path d="M1097.89 559.838L1099.16 561.348L1098.22 563L1100.15 562.005L1102.27 562.741L1100.99 561.231L1101.93 559.579L1100 560.574L1097.89 559.838Z" fill="white" fill-opacity="0.5"/>
        <path d="M1453.19 368.107L1454.46 369.618L1453.52 371.27L1455.45 370.274L1457.57 371.011L1456.29 369.5L1457.23 367.848L1455.3 368.843L1453.19 368.107Z" fill="white" fill-opacity="0.5"/>
        <path d="M594.464 45.0545L595.738 46.5648L594.796 48.2169L596.729 47.2218L598.843 47.9578L597.57 46.4476L598.512 44.7954L596.579 45.7906L594.464 45.0545Z" fill="white" fill-opacity="0.5"/>
        <path d="M630.324 562.463L631.597 563.973L630.655 565.625L632.588 564.63L634.703 565.366L633.429 563.856L634.371 562.204L632.438 563.199L630.324 562.463Z" fill="white" fill-opacity="0.5"/>
        <path d="M1632.48 536.199L1633.75 537.709L1632.81 539.361L1634.74 538.366L1636.86 539.102L1635.58 537.592L1636.53 535.94L1634.59 536.935L1632.48 536.199Z" fill="white" fill-opacity="0.5"/>
        <path d="M1837.78 470.539L1839.06 472.049L1838.12 473.701L1840.05 472.706L1842.16 473.442L1840.89 471.932L1841.83 470.28L1839.9 471.275L1837.78 470.539Z" fill="white" fill-opacity="0.5"/>
        <path d="M1853.72 819.855L1855 821.366L1854.05 823.018L1855.99 822.023L1858.1 822.759L1856.83 821.248L1857.77 819.596L1855.84 820.591L1853.72 819.855Z" fill="white" fill-opacity="0.5"/>
        <path d="M1908.33 207.894L1909.6 209.405L1908.66 211.057L1910.59 210.062L1912.71 210.798L1911.43 209.287L1912.38 207.635L1910.44 208.63L1908.33 207.894Z" fill="white" fill-opacity="0.5"/>
        <g opacity="0.2">
        <path d="M456.175 568.797C456.175 568.909 456.083 569 455.971 569C455.859 569 455.768 568.909 455.768 568.797V535.018C455.768 534.906 455.859 534.814 455.971 534.814C456.083 534.814 456.175 534.906 456.175 535.018V568.797Z" fill="white"/>
        <path d="M458.617 554.553C458.617 556.013 457.433 557.198 455.972 557.198C454.511 557.198 453.326 556.013 453.326 554.553V549.669C453.326 548.208 454.511 547.023 455.972 547.023C457.433 547.023 458.617 548.208 458.617 549.669V554.553Z" fill="white"/>
        <path d="M447.863 555.977C447.863 556.202 447.681 556.384 447.456 556.384C447.231 556.384 447.049 556.202 447.049 555.977V534.407C447.049 534.182 447.231 534 447.456 534C447.681 534 447.863 534.182 447.863 534.407V555.977Z" fill="white"/>
        <path d="M449.899 546.209C449.899 547.558 448.806 548.651 447.457 548.651C446.109 548.651 445.016 547.558 445.016 546.209V544.174C445.016 542.826 446.109 541.732 447.457 541.732C448.806 541.732 449.899 542.826 449.899 544.174V546.209Z" fill="white"/>
        </g>
        </svg>
        <div className='container mx-auto'>
            <div ref={textRef} className='grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[32px] sm:gap-[36px] md:gap-[40px] lg:gap-[48px] xl:gap-[64px] 2xl:gap-[78px]'>
            <div>
                <div className="flex items-center justify-start">
                <button className=" transingpore relative overflow-hidden px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px]
                    py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px]
                    text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]
                    "
                >
                    Simulate

                    <div className="absolute inset-0 h-full w-full animate-gradient
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
                    <span>Immersive Full </span><br className='md:block hidden'/><span className='unlocyhoua'>Market Reply</span>  
                    </h2>
                    <p className='bitstartp text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[24px]  pb-[14px] sm:pb-[15px] md:pb-[16px] lg:pb-[20px] xl:pb-[24px] 2xl:pb-[28px] !text-start '>Relive past market movements with our immersive full market replay feature. Experience the thrill of trading in real-time, analyze historical data, and identify potential trading opportunities. </p>
                    <p className='bitstartp text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] pb-[20px] sm:pb-[24px] md:pb-[32px] lg:pb-[36px] xl:pb-[40px] 2xl:pb-[48px] !text-start '>Our replay tool provides a realistic simulation of market conditions, allowing you to refine your strategies and gain valuable insights.</p>
                    <button className='buttonauditelt relative  cursor-pointer text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] flex items-center py-[12px] sm:py-[13px] md:py-[14px] lg:py-[15px] xl:py-[16px] 2xl:py-[20px] px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px] group gap-[7.50px]'>
                        Buy Now
                    </button>
                </div>
                </div>
            </div>
            <div className='relative'>
              <Image ref={imageRef} className='w-full ' src={numbeingss} alt='Loading...'/>
              <svg ref={playIconRef} className='absolute hover:scale-125 duration-300 right-[5%] bottom-[5%] cursor-pointer w-[32px] sm:w-[36px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[90px]' viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M45 7.5C24.3 7.5 7.5 24.3 7.5 45C7.5 65.7 24.3 82.5 45 82.5C65.7 82.5 82.5 65.7 82.5 45C82.5 24.3 65.7 7.5 45 7.5ZM54.975 51.4875L50.175 54.2625L45.375 57.0375C39.1875 60.6 34.125 57.675 34.125 50.55V45V39.45C34.125 32.2875 39.1875 29.4 45.375 32.9625L50.175 35.7375L54.975 38.5125C61.1625 42.075 61.1625 47.925 54.975 51.4875Z" fill="white"/>
              </svg>
            </div>
            </div>
        </div>
    </div>
    );
};

export default Pagefore;