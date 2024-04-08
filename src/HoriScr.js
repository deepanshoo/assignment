import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const HoriScr = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.to(containerRef.current, {
      x: () => -(containerRef.current.scrollWidth - containerRef.current.clientWidth),
      duration: 20,
      ease: "none",
      repeat: -1,
      yoyo: false,
    });
  }, []);

  const cards = Array.from({ length: 10 }, (_, index) => {
    const cardIndex = index + 1; // Card index starts from 1
    return (
      <button key={index} className="bg-purple-200 hover:bg-purple-600 rounded-lg shadow-md p-4" style={{ minWidth: "300px" }}>
        <h2 className="text-lg font-semibold">Card {cardIndex}</h2>
        <p>Description of Card {cardIndex}, Description of Card {cardIndex}, Description of Card {cardIndex}</p>
      </button>
    );
  });

  const loopedCards = [...cards, ...cards];

  return (
    <div className="overflow-x-hidden">
      <div ref={containerRef} className="flex space-x-4 p-4">
        {loopedCards}
      </div>
    </div>
  );
};

export default HoriScr;
