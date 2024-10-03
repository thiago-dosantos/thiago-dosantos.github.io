"use client";

import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { projectsData } from '@/data';
import { projectsNav } from '@/data';
import { StaticImageData } from 'next/image';
import Project  from '@/components/SectionsComponents/Project';


interface ProjectType {
    item: {
      id: string;
      image: StaticImageData;
      name: string;
      category: string;
      url: string;
    };
  }

const Projects: React.FC = () => {
  const [item, setItem] = useState<{ name: string }>({ name: 'all' });
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [active, setActive] = useState<number>(0);

  useEffect(() => {
    if (item.name === 'all') {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project: ProjectType) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e: React.MouseEvent<HTMLLIElement>, index: number) => {
    setItem({ name: (e.target as HTMLElement).textContent!.toLowerCase() });
    setActive(index);
  };

  return (
    <div className='container mx-auto'>
      <nav className='mb-12 max-w-xl mx-auto'>
        <ul className='flex flex-col md:flex-row justify-evenly items-center'>
          {projectsNav.map((navItem, index) => (
            <li
              onClick={(e) => handleClick(e, index)}
              className={`${active === index ? 'active' : ''} cursor-pointer capitalize m-4 hover:underline`}
              key={index}
            >
              {navItem.name}
            </li>
          ))}
        </ul>
      </nav>
      <section className='gap-24 grid lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8'>
        {projects.map((projectItem) => (
            <div className='transform transition-transform duration-300 hover:scale-105'>
            <Project item={projectItem} key={projectItem.id} />
            </div>
        ))}
        </section>

    </div>
  );
};

export default Projects;
