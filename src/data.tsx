// skills images
import SkillImg1 from '@/assets/skills/html5.png';
import SkillImg2 from '@/assets/skills/css3.png';
import SkillImg3 from '@/assets/skills/js.png';
import SkillImg4 from '@/assets/skills/reactjs.png';
import SkillImg5 from '@/assets/skills/nextjs.png';
import SkillImg6 from '@/assets/skills/nodejs.png';
import SkillImg7 from '@/assets/skills/git.png';
import SkillImg8 from '@/assets/skills/figma.png';

// projects images
import CloneFlix from '@/assets/projects/cloneflix.png';
import Emailverif from '@/assets/projects/emailverif.png';
import LinkShotener from '@/assets/projects/LinkShortener.png';
import AnalogicClock from '@/assets/projects/clockUX.png';
import FacebookClone from '@/assets/projects/facebookclone.png';
import Calculator from '@/assets/projects/calculator.png';

import { StaticImageData } from 'next/image';

interface Language {
  name: string;
  image: StaticImageData;
}

export const languages: Language[] = [
  {
    name: 'HTML5',
    image: SkillImg1,
  },
  {
    name: 'CSS3',
    image: SkillImg2,
  },
  {
    name: 'JavaScript',
    image: SkillImg3,
  },
  {
    name: 'ReactJS',
    image: SkillImg4,
  },
  {
    name: 'NextJS',
    image: SkillImg5,
  },
  {
    name: 'NodeJS',
    image: SkillImg6,
  },
  {
    name: 'Git',
    image: SkillImg7,
  },
  {
    name: 'Figma',
    image: SkillImg8,
  },
];

export const projectsData = [
    {
      id: '1',
      image: CloneFlix,
      name: 'Netflix Clone',
      category: 'Web Development',
      url: 'https://thiago-cloneflixproject.netlify.app/',
    },
    {
      id: '2',
      image: Emailverif,
      name: 'Sign UP Verification',
      category: 'Web Development',
      url: 'https://signup-withmsg.netlify.app/',
    },
    {
      id: '3',
      image: LinkShotener,
      name: 'Link Shortener Generator',
      category: 'UI/UX design',
      url:  'https://link-shortener-generator.netlify.app/',
    },
    {
      id: '4',
      image: AnalogicClock,
      name: 'Analogic Clock',
      category: 'UI/UX design',
      url: 'https://analogic-clockux.netlify.app/',
    },
    {
      id: '5',
      image: FacebookClone,
      name: 'Facebook Clone',
      category: 'Web Development',
      url: 'https://mainpage-facebook.netlify.app/',
    },
    {
      id: '6',
      image: Calculator,
      name: 'Calculator',
      category: 'Branding',
      url: 'https://calculator-purecode.netlify.app/'
    },
  ];
  
  // projects
  export const projectsNav = [
    {
      name: 'all',
    },
    {
      name: 'UI/UX Design',
    },
    {
      name: 'web development',
    },
    {
      name: 'branding',
    },
  ];