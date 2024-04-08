import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost, faStar } from '@fortawesome/free-solid-svg-icons'; // Import the star icon

gsap.registerPlugin(ScrollTrigger);

const Dash3 = () => {
  const heading = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heading.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    tl.fromTo(
      heading.current,
      { x: -300, fontSize: "2rem" },
      { x: -150, fontSize: "4rem" }
    );

    // move the ghost icon 
    const ghostTl = gsap.timeline({
        scrollTrigger: {
          trigger: heading.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
  
      // Animate the position of the ghost icon
      ghostTl.fromTo(
        "#ghost", 
        { y: "0%" }, 
        { y: "1500%"} 
      );

    // Rotate the star icon infinitely
    gsap.to("#flower", {
      rotation: "+=360",
      transformOrigin: "center",
      duration: 10,
      ease: "linear",
      repeat: -1,
    });
  });

  return (
    <div className="relative isolate overflow-hidden bg-orange-200 mx-auto max-w-5xl py-600 px-10 sm:px-10 sm:py-10 rounded-lg mt-20" style={{ marginBottom: '50px' }}>
      <div className="absolute top-0 right-0 m-4 -py-8" style={{ width: "50px", height: "50px" }}>
        <FontAwesomeIcon icon={faGhost} id="ghost" style={{ width: "35px", height: "35px", color: "orange", transformOrigin: "center" }} />
      </div>
      <div className="absolute top-0 right-20 m-4" style={{ width: "50px", height: "50px" }}>
        <FontAwesomeIcon icon={faStar} id="flower" style={{ width: "50px", height: "50px", color: "orange", transformOrigin: "center" }} />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex justify-center items-center h-full">
        <div className="mx-auto max-w-2xl lg:mx-0 text-center" ref={heading}>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-1xl">Ahead App</h2>
          <p className="mt-8 text-7xl py-8 font-bold leading-24 text-white">
            Mastering your life by mastering emotions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dash3;
