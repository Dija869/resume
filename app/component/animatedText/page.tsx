// 'use client';
// import { useEffect, useRef, useState } from 'react';

// const AnimatedTextBanner = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [isInitialized, setIsInitialized] = useState(false);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     // Set up initial state
//     const container = containerRef.current;

//     // Calculate the total width of the text content
//     const calculateWidth = () => {
//       if (!container) return 0;
//       return container.scrollWidth / 2; // Half because we duplicated the content
//     };

//     // Set initial position
//     if (!isInitialized) {
//       container.style.transform = 'translate3d(0px, 0px, 0px)';
//       container.style.transition = 'none';
//       setIsInitialized(true);

//       // Small delay to ensure proper initialization
//       setTimeout(() => {
//         // Apply the transition and transform
//         container.style.transition = 'transform 50000ms linear';
//         container.style.transform = `translate3d(-${calculateWidth()}px, 0px, 0px)`;

//         // Handle infinite looping
//         container.addEventListener('transitionend', function() {
//           // Reset position without animation
//           container.style.transition = 'none';
//           container.style.transform = 'translate3d(0px, 0px, 0px)';

//           // Force reflow/repaint
//           container.offsetHeight;

//           // Restart animation
//           setTimeout(() => {
//             container.style.transition = 'transform 50000ms linear';
//             container.style.transform = `translate3d(-${calculateWidth()}px, 0px, 0px)`;
//           }, 10);
//         });
//       }, 100);
//     }

//     // Handle window resize
//     const handleResize = () => {
//       if (!isInitialized) return;

//       // Reset and restart animation with new dimensions
//       container.style.transition = 'none';
//       container.style.transform = 'translate3d(0px, 0px, 0px)';

//       // Force reflow/repaint
//       container.offsetHeight;

//       setTimeout(() => {
//         container.style.transition = 'transform 20000ms linear';
//         container.style.transform = `translate3d(-${calculateWidth()}px, 0px, 0px)`;
//       }, 10);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, [isInitialized]);

//   // Text elements to display
//   const textItems = [
//     "Marketer",
//     "Copywriter",
//     "10 years of Experience",
//     "Digital Strategist",
//     "Web Developer"
//   ];

//   return (
//     <div className=" py-15 overflow-hidden px-0">
//       <div className="relative whitespace-nowrap overflow-hidden">
//         {/* Clone the text twice to create seamless loop */}
//         <div 
//           ref={containerRef}
//           className="inline-block whitespace-nowrap"
//         >
//           {textItems.map((text, index) => (
//             <span 
//               key={index} 
//               className="text-5xl md:text-7xl py-10 font-bold mx-8 text-transparent inline-block"
//               style={{
//                 WebkitTextStroke: '1px rgba(160, 174, 192, 0.7)'
//               }}
//             >
//               {text}
//             </span>
//           ))}

//           {/* Clone to create continuous effect */}
//           {textItems.map((text, index) => (
//             <span 
//               key={`clone-${index}`} 
//               className="text-5xl md:text-7xl font-bold mx-8 py-10 text-transparent inline-block"
//               style={{
//                 WebkitTextStroke: '1px rgba(160, 174, 192, 0.7)',
//               }}
//             >
//               {text}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnimatedTextBanner;


'use client';
import { useEffect, useRef, useState } from 'react';

const AnimatedTextBanner = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    const calculateWidth = () => {
      if (!container) return 0;
      return container.scrollWidth / 2; // Half because we duplicated the content
    };

    if (!isInitialized) {
      container.style.transform = 'translate3d(0px, 0px, 0px)';
      container.style.transition = 'none';
      setIsInitialized(true);

      setTimeout(() => {
        container.style.transition = 'transform 50000ms linear';
        container.style.transform = `translate3d(-${calculateWidth()}px, 0px, 0px)`;

        container.addEventListener('transitionend', function () {
          container.style.transition = 'none';
          container.style.transform = 'translate3d(0px, 0px, 0px)';

          // Force reflow/repaint
          void container.offsetHeight;

          setTimeout(() => {
            container.style.transition = 'transform 50000ms linear';
            container.style.transform = `translate3d(-${calculateWidth()}px, 0px, 0px)`;
          }, 10);
        });
      }, 100);
    }

    const handleResize = () => {
      if (!isInitialized) return;

      container.style.transition = 'none';
      container.style.transform = 'translate3d(0px, 0px, 0px)';

      // Force reflow/repaint
      void container.offsetHeight;

      setTimeout(() => {
        container.style.transition = 'transform 20000ms linear';
        container.style.transform = `translate3d(-${calculateWidth()}px, 0px, 0px)`;
      }, 10);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isInitialized]);

  const textItems = [
    'Marketer',
    'Copywriter',
    '10 years of Experience',
    'Digital Strategist',
    'Web Developer',
  ];

  return (
    <div className="py-15 overflow-hidden px-0">
      <div className="relative whitespace-nowrap overflow-hidden">
        <div ref={containerRef} className="inline-block whitespace-nowrap">
          {textItems.map((text, index) => (
            <span
              key={index}
              className="text-5xl md:text-7xl py-10 font-bold mx-8 text-transparent inline-block"
              style={{
                WebkitTextStroke: '1px rgba(160, 174, 192, 0.7)',
              }}
            >
              {text}
            </span>
          ))}
          {textItems.map((text, index) => (
            <span
              key={`clone-${index}`}
              className="text-5xl md:text-7xl font-bold mx-8 py-10 text-transparent inline-block"
              style={{
                WebkitTextStroke: '1px rgba(160, 174, 192, 0.7)',
              }}
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedTextBanner;
