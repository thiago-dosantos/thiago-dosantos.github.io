'use client';
import { FunctionComponent } from "react";
import Image from 'next/image';
import TypingEffect from "./TypingEffect";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const AboutMe: FunctionComponent = () => {
 return (
    <section id='' className="lg:min-h-[50vh] min-h-[70vh] flex items-center lg:bg-cover lg:bg-center lg:bg-no-repeat py-16 lg:py-32 overflow-hidden">
        <div className='flex flex-col xl:flex-row gap-24'>
                <Image 
                    src="/assets/about.webp" 
                    alt="Description of image" 
                    width={500} 
                    height={300}
                    className="rounded-lg"
                />
            <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
                <div className='flex flex-col'>
                    <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'> Thiago dos Santos</h2>
                    <p className='mb-4 text-sm lg:text-base tracking-widest'>
                        <TypingEffect />
                    </p>
                    <p className='mb-8'>
                        I'm currently graduating in software engineering and work as a helpdesk and web developer, 
                        using HTML, CSS, JavaScript and PHP languages. I also work with marketplace construction in Magento 2 and MySQL database handling.
                        I'm a proactive person who is always in search of knowledge and new experiences.
                    </p>
                </div>
                <div className= "flex space-x-4">
                <Button asChild className="mt-4">
                    <Link href="/">
                        Download CV (PT-BR)
                    </Link>
                </Button>
                <Button asChild className="mt-4">
                    <Link href="/">
                    Download CV (EN-UK)
                    </Link>
                </Button>
                </div>
            </div>
        </div>
    </section>
 );
};
