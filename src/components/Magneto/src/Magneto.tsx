// MIT License

// Copyright (c) 2024 AathiEswar

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

import React, { useEffect, useRef, ReactNode, HTMLAttributes } from 'react';
import gsap from 'gsap';

interface MagnetoProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className : string ;
  amplitudex?: number;
  periodx?: number;
  amplitudey?: number;
  periody?: number;
}

const Magneto: React.FC<MagnetoProps> = ({ children , className, amplitudex, periodx, amplitudey, periody , ...props}) => {
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
    <div ref={magnetic} className={`${className}`} {...props}>
      {children}
    </div>
  );
};

export default Magneto;
