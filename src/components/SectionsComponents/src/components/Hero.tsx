"use client";
import { FunctionComponent } from "react";
import TypingEffect from "./SectionsComponents/TypingEffect";
import Image from 'next/image';

export const Hero: FunctionComponent = () => {
  return (
    <div id="home" className="container mx-auto px-5">
      <div className="dark:prose-invert">
        <div className="container mx-auto h-full w-full">
          <div className='flex items-center h-full pt-8'>
            {/* left */}
            <div className='flex-1 flex flex-col items-center lg:items-start'>
              <p className='text-2xl mb-[22px]'>
                Hello my name is <span className='text-customblue'>Thiago</span> and
              </p>
              <h1 className='text-4xl leading-[44px] text-start mb:text-5xl md:leading-tight lg:text-5xl lg:leading-[1.2] font-bold md:tracking-[-2px] mb-2'>
                <TypingEffect />
              </h1>
              
              <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-sm text-center lg:text-left'>
                This is my portfolio to showcase my projects. <br />
                <small>(under development)</small>
              </p>
            </div>
            {/* right */}
            <div className='hidden lg:flex flex-1 justify-end items-center h-full'>
              <div className="relative w-full max-w-[500px]">
                {/* Efeito de vazamento da imagem */}
                <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-white/30 to-transparent dark:from-transparent dark:via-gray-900/30 dark:to-transparent rounded-3xl blur-xl z-0"></div>
                
                {/* Container da imagem com máscara de gradiente */}
                <div 
                  className="relative rounded-2xl overflow-hidden"
                  style={{
                    maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'
                  }}
                >
                  <Image 
                    src="/assets/hero1.jpg" 
                    alt="Thiago dos Santos - Full Stack Developer" 
                    width={500} 
                    height={300} 
                    priority
                    className="w-full h-auto object-cover"
                  />
                  
                  {/* Overlay gradiente suave nas bordas */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-white/40 dark:from-gray-900/40 dark:via-transparent dark:to-gray-900/40"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};