'use client';
import { FunctionComponent } from "react";
import Image from 'next/image';
import TypingEffect from "./TypingEffect";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { social } from "@/data";

export const AboutMe: FunctionComponent = () => {
 return (
    <section className="lg:min-h-[50vh] min-h-[70vh] flex items-center lg:bg-cover lg:bg-center lg:bg-no-repeat py-16 lg:py-32 overflow-hidden">
        <div className='flex flex-col xl:flex-row gap-24'>
                <Image 
                    src="/assets/about.webp" 
                    alt="Description of image" 
                    width={500} 
                    height={500}
                    className="rounded-lg"
                />
            <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
                <div className='flex flex-col'>
                    <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'> Thiago dos Santos</h2>
                    <p className='mb-4 text-sm lg:text-base tracking-widest'>
                        <TypingEffect />
                    </p>
                    <p className='mb-8'>
                        I&apos;m currently graduating in software engineering and work as a helpdesk and web developer, 
                        using HTML, CSS, JavaScript and PHP languages. I also work with marketplace construction in Magento 2 and MySQL database handling.
                        I&apos;m a proactive person who is always in search of knowledge and new experiences.
                    </p>
                </div>
                <div className= "flex flex-col items-center justify-center w-full space-x-4 max-h-[10vh]">
                    <div className= "flex space-x-4 justify-center">
                        <Button asChild className="mt-4">
                            <Link href="/files/CVptbr.pdf" download target="_blank" rel="noopener noreferrer">
                                Download CV (PT-BR)
                            </Link>
                        </Button>
                        <Button asChild className="mt-4">
                            <Link href="files/CVenuk.pdf" download target="_blank" rel="noopener noreferrer">
                            Download CV (EN-UK)
                            </Link>
                        </Button>
                    </div>
                    <div className="text-xs text-muted-foreground hidden lg:flex flex space-x-6 p-8 justify-center">
                        {social.map((item, index) => {
                            const {href, icon} = item;
                            return (
                                <a className='hover:text-[#F63D3C] text-base' href={href} key={index}>{icon}</a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    </section>
 );
};