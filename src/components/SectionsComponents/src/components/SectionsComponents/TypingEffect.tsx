"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingEffect: React.FC = () => {
  const elRef = useRef<HTMLSpanElement>(null);
  const typedRef = useRef<Typed | null>(null);

  useEffect(() => {
    if (!elRef.current) return;

    const options = {
      strings: [
        "I Build Web Sites",
        "I'm a Web Developer", 
        "I'm a Front-End Developer",
        "I'm a Web Designer",
        "I'm a Full Stack Developer"
      ],
      typeSpeed: 70, // Mais lento para digitação
      backSpeed: 50, // Mais lento para apagar
      backDelay: 1500, // Espera 1.5 segundos antes de apagar
      startDelay: 500, // Espera 0.5 segundos antes de começar
      loop: true,
      loopCount: Infinity,
      showCursor: true,
      cursorChar: "|",
      smartBackspace: true, // Isso ajuda a não "comer" letras
    };

    typedRef.current = new Typed(elRef.current, options);

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, []);

  return (
    <span 
      ref={elRef} 
      className="text-3xl lg:text-4xl leading-[44px] md:leading-tight lg:leading-[1.2] font-bold md:tracking-[-2px]"
      aria-label="I Build Web Sites, I'm a Web Developer, I'm a Front-End Developer, I'm a Web Designer, I'm a Full Stack Developer"
    />
  );
};

export default TypingEffect;