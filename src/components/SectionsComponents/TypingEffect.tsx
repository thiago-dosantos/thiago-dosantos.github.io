import { useEffect } from "react";
import Typed from "typed.js";

const TypingEffect: React.FC = () => {
  useEffect(() => {
    const options = {
      strings: ["I Build Web Site", "I'm Web Developer", "I'm Front-End Dev", "I'm Web Designer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    };
    const typed = new Typed(".typing", options);
    return () => {
      typed.destroy();
    };
  }, []);

  return <span className="typing text-4xl leading-[44px] mb:text-5xl md:leading-tight lg:text-5xl lg:leading-[1.2] font-bold md:tracking-[-2px]"></span>; // Elemento onde o efeito de digitação será aplicado
};

export default TypingEffect;