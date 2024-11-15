import React from 'react';
// import { motion } from 'framer-motion'; 

//const Loader = () => {
//  // Positions de chaque étape de l'animation
//  const positions = [
//    { cx: 333.1, cy: 29.5 },  // Position initiale dans le 'i'
//    { cx: 280, cy: 120 },     // Position au-dessus du 'i'
//    { cx: 200, cy: 170 },     // Position dans le 'L'
//    { cx: 270, cy: 170 },     // Position à droite du 'L'
//  ];
//
//  return (
//    <div style={styles.loaderContainer}>
//      <svg
//        version="1.1"
//        id="Calque_1"
//        xmlns="http://www.w3.org/2000/svg"
//        xmlnsXlink="http://www.w3.org/1999/xlink"
//        x="0px"
//        y="0px"
//        viewBox="0 0 372 206"
//        xmlSpace="preserve"
//      >
//        <style type="text/css">{".st0{fill:#B69F61;}"}</style>
//        <g transform="translate(0.000000,206.000000) scale(0.100000,-0.100000)">
//          {/* Insère ici les chemins <path> de ton SVG */}
//        </g>
//
//        {/* Animation du cercle avec Framer Motion */}
//        <motion.circle
//          className="st0"
//          r="11.5"
//          fill="#B69F61"
//          // Animation des étapes
//          animate={{
//            cx: positions.map((pos) => pos.cx),
//            cy: positions.map((pos) => pos.cy),
//          }}
//          transition={{
//            repeat: Infinity, // Animation cyclique
//            duration: 4,      // Durée totale de l'animation
//            times: [0, 0.25, 0.5, 0.75, 1], // Étapes de l'animation
//            ease: "easeInOut",
//          }}
//        />
//      </svg>
//    </div>
//  );
//};
//
//// Styles de base pour le loader
//const styles = {
//  loaderContainer: {
//    display: 'flex',
//    justifyContent: 'center',
//    alignItems: 'center',
//    width: '100vw',
//    height: '100vh',
//    backgroundColor: '#ffffff', // Couleur de fond du loader
//  },
//};
//
//export default Loader;
//