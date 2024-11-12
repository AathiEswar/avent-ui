import React, { useEffect, useRef, ReactNode, HTMLAttributes } from 'react';
import gsap from 'gsap';

interface MagnetoProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  amplitudex?: number;
  periodx?: number;
  amplitudey?: number;
  periody?: number;
}

const Magneto: React.FC<MagnetoProps> = ({ children, amplitudex, periodx, amplitudey, periody , ...props}) => {
  const magnetic = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const xTo = gsap.quickTo(magnetic.current, "x", { duration: 1, ease: `elastic.out(${amplitudex || 1}, ${periodx || 0.3})` });
    const yTo = gsap.quickTo(magnetic.current, "y", { duration: 1, ease: `elastic.out(${amplitudey || 1}, ${periody || 0.3})` });

    const mouseEnter = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = magnetic.current!.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x);
      yTo(y);
    };

    const mouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    const currentMagnetic = magnetic.current;

    if (currentMagnetic) {
      currentMagnetic.addEventListener("mousemove", mouseEnter);
      currentMagnetic.addEventListener("mouseleave", mouseLeave);
    }

    return () => {
      if (currentMagnetic) {
        currentMagnetic.removeEventListener("mousemove", mouseEnter);
        currentMagnetic.removeEventListener("mouseleave", mouseLeave);
      }
    };
  }, [amplitudex, periodx, amplitudey, periody]);

  return (
    <div ref={magnetic} {...props}>
      {children}
    </div>
  );
};

export default Magneto;
