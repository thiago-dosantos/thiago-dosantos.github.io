import React from 'react'
import { FunctionComponent } from "react";

import Projects from '@/components/SectionsComponents/Projects';

export const Portfolio: FunctionComponent = () => {
  return (
    <section id='portfolio' className='section min-h-[800px] pt-14'>
        <h1 className="text-center cursor-default text-3xl md:text-4xl font-bold tracking-tighter leading-tight">
          My Lastest Projects
        </h1>
      <Projects />
    </section>
  )
}