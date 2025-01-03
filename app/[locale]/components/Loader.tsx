import React, { useEffect, useRef,useState } from "react";
import gsap from "gsap";

const Loader = () => {
    const [showLoader, setShowLoader] = useState(true);
    const loaderRef = useRef(null);
    const circleRef = useRef(null); // Référence pour le cercle

    useEffect(() => {
        const timeline = gsap.timeline({
          onComplete: () => setShowLoader(false), // Masquer le loader après l'animation
        });
  
      // Ajouter les animations dans la timeline
      timeline
        .to(circleRef.current, { 
        scale:0.7,
        fill:'black',
          duration: 0, 
          x: -66, // Position initiale (centre du "i")
          y: 40, 
          ease: "power1.inOut" 
        })
        .to(circleRef.current, { 
          duration: 0.6, 
          x: -66, // Position du point du "i"
          y: 5, 
          ease: "power1.inOut" 
        })
        .to(circleRef.current, { 
          duration: 0.6, 
          x: -37, // Barre du "l"
          y: 5, 
          ease: "power1.inOut" 
        })
        .to(circleRef.current, { 
          duration: 0.6, 
          fill:"#B69F61",
          x: 5, // Droite du "l"
          y: 5, 
          ease: "power1.inOut" 
        })
          .to(loaderRef.current, {
            y: "-100%",
            opacity: 0,
            duration: 0.5,
            ease: "power1.inOut",
          });
  
      return () => {
        timeline.kill(); // Nettoyer la timeline si le composant est démonté
      };
    }, []);

    if (!showLoader) {
        return null;
      }

  return (
    <div ref={loaderRef} className="loader_container fixed top-0 flex items-center justify-center w-full h-screen bg-light_beige z-50">
    <svg
      version="1.1"
      id="Calque_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="30%"
      height="30%"
      viewBox="0 0 372 206"
    >
      <g transform="translate(0.000000,206.000000) scale(0.100000,-0.100000)">
        <path
          d="M1450,1745v-85h-55h-55v-90v-90h54h54l4-147c4-168,18-216,86-286c34-36,99-77,120-77c5,0,17,39,25,87c14,76,15,89,2,103
		c-34,37-45,89-45,205v115h70h70v90v90h-70h-70v85v85h-95h-95V1745z"
        />
        <path
          d="M2830,1538c0-240,3-302,16-350c31-110,131-190,255-205l49-6v90v89l-46,12c-39,11-48,18-64,55c-18,38-20,67-20,325v282h-95
		h-95V1538z"
        />
        <path
          d="M883,1612c-95-34-168-108-193-197c-18-63-9-179,18-231c76-148,298-208,466-125c34,16,75,44,91,61l30,32l-45,39
		c-58,50-76,56-103,31c-56-51-156-68-215-38c-31,16-66,53-75,79c-6,16,9,17,220,17h226l-5,68c-13,173-114,271-288,279
		C955,1630,921,1626,883,1612z M1092,1451c15-17,28-36,28-41c0-6-51-10-130-10c-71,0-130,3-130,6c0,18,26,47,58,64
		c28,15,51,19,91,17C1055,1484,1068,1478,1092,1451z"
        />
        <path
          d="M2040,1617c-112-32-184-89-229-179c-25-50-31-73-31-128c0-95,23-155,85-216c89-89,235-116,343-63c51,25,51,25,54,5
		c3-19,11-21,85-24l81-3l7,56c4,30,5,115,3,188c-3,115-7,139-29,187c-14,31-40,72-58,93C2285,1608,2142,1646,2040,1617z M2195,1424
		c14-9,33-30,41-45c20-40,18-118-5-155c-25-40-95-69-148-61c-137,23-166,205-42,270C2082,1455,2155,1450,2195,1424z"
        />
        <path
          d="M525,1611c-77-19-152-88-173-160c-7-23-12-113-12-230v-191h80h80v174c0,101,5,186,11,205c11,32,52,61,87,61
		c11,0,47,32,86,75l67,75l-98-1C599,1618,542,1615,525,1611z"
        />
        <path d="M2540,1300v-290h90h90v290v290h-90h-90V1300z" />
        <path
          d="M3162,929c-153-26-251-135-260-290c-6-99,14-162,73-227c122-135,374-143,514-17c22,21,41,41,41,45c0,5-26,29-57,54l-58,45
		l-25-24c-60-58-171-73-242-33c-33,19-68,61-68,83c0,3,104,5,231,5h232l-5,73c-3,44-14,93-28,125C3458,888,3314,955,3162,929z
		 M3296,774c19-9,42-30,50-45l15-29h-142h-141l14,23C3131,781,3229,806,3296,774z"
        />
        <path
          d="M923,900c-59-12-116-44-158-87c-42-44-78-148-73-214l3-44l223-3l222-2l-15-30c-19-36-52-59-102-71c-56-12-109,0-165,37
		l-50,34l-54-42c-30-24-54-46-54-49c0-15,85-82,128-102c69-31,246-32,314,0c140,64,205,226,154,379C1251,844,1079,933,923,900z
		 M1042,760c22,0,88-57,88-76c0-11-25-14-130-14c-140,0-149,4-112,49c20,26,89,53,117,46C1016,762,1033,760,1042,760z"
        />
        <path
          d="M600,890c-94-7-133-23-184-75c-55-55-66-108-66-327V300h80h80v175c0,129,4,185,14,210c15,36,42,55,75,55
		c18,0,150,125,159,151C762,901,730,901,600,890z"
        />
        <path
          d="M1323,871c3-12,54-144,113-296l107-275h92h92l108,277c59,152,110,285,113,295c4,17-2,19-89,16l-94-3l-60-167
		c-33-93-62-168-65-168s-32,75-65,168l-60,167l-99,3C1321,891,1318,890,1323,871z"
        />
        <path d="M2020,595V300h90h90v295v295h-90h-90V595z" />
        <path
          d="M2264,873c4-10,55-141,113-291l107-273l95,3l95,3l111,285l111,285l-90,3c-49,1-93-1-97-5s-33-81-65-171
		c-31-89-60-159-64-155s-33,81-65,171l-57,162h-100C2267,890,2258,888,2264,873z"
        />
      </g>
      <circle ref={circleRef} className="st0" fill="transparent" cx="333.1" cy="29.5" r="11.5" />
    </svg>
    </div>
  );
};

export default Loader;
