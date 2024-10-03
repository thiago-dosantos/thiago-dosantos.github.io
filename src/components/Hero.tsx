"use client";
import { FunctionComponent } from "react";
import TypingEffect from "./SectionsComponents/TypingEffect";
import Image from 'next/image';

export const Hero: FunctionComponent = () => {
  return (
    <div className="container mx-auto px-5">
      
      <div className=" dark:prose-invert">
      <div className="container mx-auto h-full w-full">
          <div className='flex items-center h-full pt-8'>
            {/* left */}
            <div className='flex-1 flex flex-col items-center lg:item-start'>
              <p className='text-2xl mb-[22px]'>Hello my name is <span className='text-customblue'> Thiago </span> and</p>
              <h1 className='text-4xl leading-[44px] text-start mb:text-5xl md:leading-tight lg:text-5xl lg:leading-[1.2] font-bold md:tracking-[-2px]'> {' '}
              </h1>
              <div>
              <TypingEffect />
              </div>
              

              <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-sm text-center lg:text-center'>This is my portfolio <br />for show my projects. <br /><small>(under development)</small></p>
            </div>
            {/* right */}
            <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
              <Image 
                src="/assets/banner-woman2.webp" 
                alt="Description of image" 
                width={500} 
                height={300} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
