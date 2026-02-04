import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface ProjectProps {
  item: {
    id: string;
    image: StaticImageData;
    name: string;
    category: string;
    url: string;
  };
}

const Project: React.FC<ProjectProps> = ({ item }) => {
  return (
    <div className="project border rounded-lg overflow-hidden shadow-lg">
      <a href={item.url} target="_blank" rel="noopener noreferrer">
        <Image src={item.image} alt={item.name}  className="object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-gray-600">{item.category}</p>
        </div>
      </a>
    </div>
  );
};

export default Project;
