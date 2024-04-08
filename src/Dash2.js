import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Dash2() {
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
      { x: -400, fontSize: "2rem" },
      { x: -150, fontSize: "4rem" }
    );
  });

  return (
    <div className="mx-1 py-8 max-w-7xl">
      <h1
        className="mx-10 text-xl xl:text-7xl py-8 font-bold leading-24 text-black"
        ref={heading}
      >
        Does this sound familiar
      </h1>
    </div>
  );
}
