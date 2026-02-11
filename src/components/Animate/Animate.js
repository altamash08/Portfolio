import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Animate.scss";

const Animate = () => {
  const svgRef = useRef(null);

  useEffect(() => {

    const timer = setTimeout(() => {

      const paths = svgRef.current.querySelectorAll("path");

      const colors = ["#FFD700", "#5CB8E4", "#F2F2F2"];

      // Prepare paths
      paths.forEach((path, i) => {
        const length = path.getTotalLength();

        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
          stroke: colors[i % colors.length],
        });
      });

      // Timeline
      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 1,
        onRepeat: () => {
          // RESET every time
          paths.forEach((path) => {
            const length = path.getTotalLength();

            gsap.set(path, {
              strokeDashoffset: length,
            });
          });
        },
      });

      // Animate
      paths.forEach((path, i) => {
        tl.to(
          path,
          {
            strokeDashoffset: 0,
            duration: 1.5,
            ease: "power2.out",
          },
          i * 0.15
        );
      });

    }, 2000); // 2 sec delay

    return () => clearTimeout(timer);

  }, []);

  return (
    <div className="animate-wrapper">
      <svg
        ref={svgRef}
        className="developer-text"
        viewBox="0 0 1400 200"
      >

        {/* D */}
        <path d="M40 20 V180 Q140 180 140 100 Q140 20 40 20" />

        {/* E */}
        <path d="M180 20 V180" />
        <path d="M180 20 H280" />
        <path d="M180 100 H260" />
        <path d="M180 180 H280" />

        {/* V */}
        <path d="M320 20 L370 180 L420 20" />

        {/* E */}
        <path d="M460 20 V180" />
        <path d="M460 20 H560" />
        <path d="M460 100 H540" />
        <path d="M460 180 H560" />

        {/* L */}
        <path d="M600 20 V180 H700" />

        {/* O */}
        <path
          d="M760 100 
             m -50,0 
             a 50,70 0 1,0 100,0 
             a 50,70 0 1,0 -100,0"
        />

        {/* P */}
        <path d="M860 20 V180" />
        <path d="M860 20 H940 Q980 20 980 70 Q980 120 940 120 H860" />

        {/* E */}
        <path d="M1020 20 V180" />
        <path d="M1020 20 H1120" />
        <path d="M1020 100 H1100" />
        <path d="M1020 180 H1120" />

        {/* R */}
        <path d="M1120 20 V180" />
        <path d="M1120 20 H1200 Q1240 20 1240 70 Q1240 120 1200 120 H1120" />
        <path d="M1200 120 L1260 180" />

      </svg>
    </div>
  );
};

export default Animate;