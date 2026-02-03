'use client';

import { gsap } from "gsap";
import Image from 'next/image';
import { useEffect, useRef } from "react";
import HeroPage from './HeroPage';
import Div from './image/Div.png';
import largecomet from './image/large-comet.png';
import largecomet1 from './image/large-comet1.png';
import NavBar from './NavBar';


const Header = () => {
    const svgRef = useRef(null);

    useEffect(() => {
      // Ensure GSAP runs only on the client-side
      if (typeof window === "undefined") return;
  
      const svg = svgRef.current;
      if (!svg) return; // Guard against null ref
  
      // Target SVG elements directly with querySelectorAll
      const verticalLines = svg.querySelectorAll(".vertical-lines path");
      const horizontalLines = svg.querySelectorAll(".horizontal-lines path");
      const rectangles = svg.querySelectorAll(".rect-1, .rect-2, .rect-3");
      const highlightLines = svg.querySelectorAll(
        ".highlight-line, .vertical-highlight"
      );
  
      // Animate vertical lines
      gsap.from(verticalLines, {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.1,
      });
  
      // Animate horizontal lines
      gsap.from(horizontalLines, {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.1,
        delay: 0.5,
      });
  
      // Animate rectangles
      gsap.from(rectangles, {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
        stagger: 0.3,
        delay: 1,
      });
  
      // Animate highlight lines
      gsap.fromTo(
        highlightLines,
        { opacity: 0.5 },
        {
          opacity: 1,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.2,
          delay: 1.5,
        }
      );
    }, []);
    return (
        <div className='relative overflow-hidden sm:h-screen'>
          <svg className="w-full h-1/2 absolute top-0 left-0 animate-spin" style={{ animationDuration: "50s", animationTimingFunction: "linear" }} viewBox="0 0 1920 741" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M292.327 32.1831L291.69 32.9378L292.161 33.7635L291.195 33.2662L290.139 33.634L290.775 32.8793L290.304 32.0536L291.27 32.5509L292.327 32.1831Z" fill="white" fill-opacity="0.5"/>
<path d="M1151.05 16.4233L1150.41 17.1781L1150.88 18.0037L1149.92 17.5064L1148.86 17.8743L1149.5 17.1195L1149.03 16.2938L1149.99 16.7912L1151.05 16.4233Z" fill="white" fill-opacity="0.5"/>
<path d="M1642.05 344.728L1641.41 345.483L1641.88 346.308L1640.92 345.811L1639.86 346.179L1640.5 345.424L1640.03 344.599L1640.99 345.096L1642.05 344.728Z" fill="white" fill-opacity="0.5"/>
<path d="M1827.2 567.976L1826.57 568.731L1827.04 569.556L1826.07 569.059L1825.01 569.427L1825.65 568.672L1825.18 567.847L1826.15 568.344L1827.2 567.976Z" fill="white" fill-opacity="0.5"/>
<path d="M1383.54 607.373L1382.91 608.127L1383.38 608.953L1382.41 608.456L1381.35 608.823L1381.99 608.069L1381.52 607.243L1382.49 607.74L1383.54 607.373Z" fill="white" fill-opacity="0.5"/>
<path d="M872.386 565.349L871.749 566.104L872.22 566.93L871.254 566.432L870.197 566.8L870.834 566.045L870.363 565.22L871.329 565.717L872.386 565.349Z" fill="white" fill-opacity="0.5"/>
<path d="M1125.03 139.867L1124.4 140.621L1124.87 141.447L1123.9 140.95L1122.85 141.318L1123.48 140.563L1123.01 139.737L1123.98 140.235L1125.03 139.867Z" fill="white" fill-opacity="0.5"/>
<path d="M734.577 50.5678L733.94 51.3226L734.411 52.1483L733.445 51.6509L732.389 52.0188L733.025 51.264L732.554 50.4384L733.52 50.9357L734.577 50.5678Z" fill="white" fill-opacity="0.5"/>
<path d="M434.589 476.05L433.952 476.805L434.423 477.631L433.457 477.133L432.4 477.501L433.037 476.746L432.566 475.921L433.532 476.418L434.589 476.05Z" fill="white" fill-opacity="0.5"/>
<path d="M85.616 347.355L84.9795 348.11L85.4503 348.935L84.4843 348.438L83.4276 348.806L84.0641 348.051L83.5933 347.225L84.5593 347.723L85.616 347.355Z" fill="white" fill-opacity="0.5"/>
<path d="M1366.43 -1.96146L1365.8 -1.20669L1366.27 -0.381032L1365.3 -0.878374L1364.24 -0.51051L1364.88 -1.26528L1364.41 -2.09093L1365.38 -1.59359L1366.43 -1.96146Z" fill="white" fill-opacity="0.5"/>
<path d="M1209.87 263.308L1209.24 264.063L1209.71 264.888L1208.74 264.391L1207.69 264.759L1208.32 264.004L1207.85 263.179L1208.82 263.676L1209.87 263.308Z" fill="white" fill-opacity="0.5"/>
<path d="M1018.87 399.884L1018.23 400.639L1018.7 401.465L1017.73 400.967L1016.68 401.335L1017.31 400.58L1016.84 399.755L1017.81 400.252L1018.87 399.884Z" fill="white" fill-opacity="0.5"/>
<path d="M754.733 87.3375L754.097 88.0923L754.567 88.9179L753.601 88.4206L752.545 88.7884L753.181 88.0337L752.71 87.208L753.676 87.7054L754.733 87.3375Z" fill="white" fill-opacity="0.5"/>
<path d="M140.221 462.917L139.585 463.672L140.056 464.498L139.09 464.001L138.033 464.368L138.67 463.614L138.199 462.788L139.165 463.285L140.221 462.917Z" fill="white" fill-opacity="0.5"/>
<path d="M105.772 124.107L105.136 124.862L105.607 125.687L104.641 125.19L103.584 125.558L104.22 124.803L103.75 123.977L104.716 124.475L105.772 124.107Z" fill="white" fill-opacity="0.5"/>
<path d="M896.761 110.976L896.124 111.731L896.595 112.556L895.629 112.059L894.572 112.427L895.209 111.672L894.738 110.847L895.704 111.344L896.761 110.976Z" fill="white" fill-opacity="0.5"/>
<path d="M1214.1 588.988L1213.46 589.743L1213.93 590.568L1212.96 590.071L1211.91 590.439L1212.54 589.684L1212.07 588.858L1213.04 589.356L1214.1 588.988Z" fill="white" fill-opacity="0.5"/>
<path d="M671.3 686.165L670.663 686.92L671.134 687.746L670.168 687.249L669.111 687.616L669.748 686.862L669.277 686.036L670.243 686.533L671.3 686.165Z" fill="white" fill-opacity="0.5"/>
<path d="M667.081 273.814L666.444 274.569L666.915 275.394L665.949 274.897L664.892 275.265L665.529 274.51L665.058 273.684L666.024 274.182L667.081 273.814Z" fill="white" fill-opacity="0.5"/>
<path d="M1919.07 604.746L1918.44 605.5L1918.91 606.326L1917.94 605.829L1916.88 606.197L1917.52 605.442L1917.05 604.616L1918.02 605.113L1919.07 604.746Z" fill="white" fill-opacity="0.5"/>
<path d="M1623.3 738.695L1622.66 739.45L1623.13 740.275L1622.17 739.778L1621.11 740.146L1621.75 739.391L1621.28 738.565L1622.24 739.063L1623.3 738.695Z" fill="white" fill-opacity="0.5"/>
<path d="M1429.48 255.429L1428.84 256.184L1429.31 257.01L1428.35 256.512L1427.29 256.88L1427.93 256.125L1427.45 255.3L1428.42 255.797L1429.48 255.429Z" fill="white" fill-opacity="0.5"/>
<path d="M820.116 350.838L818.842 352.348L819.784 354L817.851 353.005L815.737 353.741L817.01 352.231L816.068 350.579L818.001 351.574L820.116 350.838Z" fill="white" fill-opacity="0.5"/>
<path d="M464.813 159.107L463.539 160.617L464.481 162.27L462.548 161.274L460.434 162.01L461.708 160.5L460.766 158.848L462.699 159.843L464.813 159.107Z" fill="white" fill-opacity="0.5"/>
<path d="M1287.68 353.463L1286.4 354.973L1287.35 356.625L1285.41 355.63L1283.3 356.366L1284.57 354.856L1283.63 353.204L1285.56 354.199L1287.68 353.463Z" fill="white" fill-opacity="0.5"/>
<path d="M285.522 327.199L284.248 328.709L285.19 330.361L283.257 329.366L281.143 330.102L282.417 328.592L281.475 326.94L283.408 327.935L285.522 327.199Z" fill="white" fill-opacity="0.5"/>
<path d="M237.944 681.767L236.67 683.278L237.612 684.93L235.679 683.935L233.565 684.671L234.839 683.16L233.896 681.508L235.829 682.503L237.944 681.767Z" fill="white" fill-opacity="0.5"/>
<path d="M80.2173 261.539L78.9436 263.049L79.8857 264.701L77.9528 263.706L75.8383 264.442L77.112 262.932L76.1699 261.28L78.1028 262.275L80.2173 261.539Z" fill="white" fill-opacity="0.5"/>
<path d="M64.2798 610.855L63.0061 612.366L63.9482 614.018L62.0153 613.023L59.9008 613.759L61.1745 612.248L60.2324 610.596L62.1653 611.591L64.2798 610.855Z" fill="white" fill-opacity="0.5"/>
<path d="M9.6704 -1.10565L8.39673 0.404646L9.33881 2.05678L7.40588 1.0616L5.29143 1.79769L6.5651 0.287397L5.62301 -1.36473L7.55594 -0.369554L9.6704 -1.10565Z" fill="white" fill-opacity="0.5"/>
          </svg>
            <NavBar/>
            <HeroPage/>
        </div>
    );
};

export default Header;