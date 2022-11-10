import React, { useLayoutEffect, useState } from "react";

const SvgGen = () => {
   function useWindowSize() {
      const [size, setSize] = useState([0, 0]);
      useLayoutEffect(() => {
         function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
         }
         window.addEventListener("resize", updateSize);
         updateSize();
         return () => window.removeEventListener("resize", updateSize);
      }, []);
      return size;
   }
   const [width] = useWindowSize();
   // console.log(width);
   const wave = document.getElementById("wave");
   // console.log(wave);
   if (width < 576) {
      const wave = document.getElementById("wave");
      wave?.setAttribute("viewBox", "1000 30 500 200");
   } else if (width > 576 && width < 992) {
      const wave = document.getElementById("wave");
      wave?.setAttribute("viewBox", "160 35 740 210");
   } else if (width > 992) {
      const wave = document.getElementById("wave");
      wave?.setAttribute("viewBox", "220 35 1440 180");
   }
   /* 1010 30 500 250 (mobile) */
   /* 160 35 740 210 (tab) */
   /* 220 35 1440 210 (desktop) */
   // console.log(wave);
   return (
      <svg id="wave" style={{ transform: "rotate(180deg)", transition: "0.3s" }} viewBox="220 35 1440 210" version="1.1" xmlns="http://www.w3.org/2000/svg">
         <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
               <stop stopColor="rgba(243, 106, 62, 1)" offset="0%"></stop>
               <stop stopColor="rgba(255, 179, 11, 1)" offset="100%"></stop>
            </linearGradient>
         </defs>
         <path
            style={{ transform: "translate(0, 0px)", opacity: 1 }}
            fill="url(#sw-gradient-0)"
            d="M0,28L17.1,23.3C34.3,19,69,9,103,42C137.1,75,171,149,206,149.3C240,149,274,75,309,56C342.9,37,377,75,411,93.3C445.7,112,480,112,514,112C548.6,112,583,112,617,121.3C651.4,131,686,149,720,135.3C754.3,121,789,75,823,88.7C857.1,103,891,177,926,172.7C960,168,994,84,1029,79.3C1062.9,75,1097,149,1131,158.7C1165.7,168,1200,112,1234,88.7C1268.6,65,1303,75,1337,65.3C1371.4,56,1406,28,1440,37.3C1474.3,47,1509,93,1543,98C1577.1,103,1611,65,1646,79.3C1680,93,1714,159,1749,191.3C1782.9,224,1817,224,1851,224C1885.7,224,1920,224,1954,205.3C1988.6,187,2023,149,2057,140C2091.4,131,2126,149,2160,135.3C2194.3,121,2229,75,2263,60.7C2297.1,47,2331,65,2366,84C2400,103,2434,121,2451,130.7L2468.6,140L2468.6,280L2451.4,280C2434.3,280,2400,280,2366,280C2331.4,280,2297,280,2263,280C2228.6,280,2194,280,2160,280C2125.7,280,2091,280,2057,280C2022.9,280,1989,280,1954,280C1920,280,1886,280,1851,280C1817.1,280,1783,280,1749,280C1714.3,280,1680,280,1646,280C1611.4,280,1577,280,1543,280C1508.6,280,1474,280,1440,280C1405.7,280,1371,280,1337,280C1302.9,280,1269,280,1234,280C1200,280,1166,280,1131,280C1097.1,280,1063,280,1029,280C994.3,280,960,280,926,280C891.4,280,857,280,823,280C788.6,280,754,280,720,280C685.7,280,651,280,617,280C582.9,280,549,280,514,280C480,280,446,280,411,280C377.1,280,343,280,309,280C274.3,280,240,280,206,280C171.4,280,137,280,103,280C68.6,280,34,280,17,280L0,280Z"
         ></path>
      </svg>
   );
};

export default SvgGen;
