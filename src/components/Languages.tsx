import React from 'react';
import Image from 'next/image';
import { FunctionComponent } from "react";
import { languages } from '@/data';

export const Languages: FunctionComponent = () =>  {
  return (
    <section id="skills" className='bg-tertiary py-12'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-8 md:grid-flow-row'>
          {languages.map((language, index) => (
            <div className='flex items-center justify-center' key={index}>
              <Image src={language.image} alt={language.name} width={96} height={96} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
