'use client';
import { FunctionComponent } from "react";
import Image from 'next/image';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { social } from "@/data";
import { Code, Database, Cpu, Layers } from "lucide-react";

export const AboutMe: FunctionComponent = () => {
 return (
    <section id="about" className="flex items-center py-12 lg:py-20 overflow-hidden">
        <div className='container mx-auto px-5'>
            <div className='flex flex-col xl:flex-row items-start gap-10 xl:gap-14'>
                {/* Imagem vertical - lado esquerdo */}
                <div className="relative w-full xl:w-2/5 max-w-sm">
                    <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[3/4]">
                        <Image 
                            src="/assets/about1.jpg" 
                            alt="Thiago dos Santos - Software Engineer" 
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, 40vw"
                        />
                    </div>
                </div>
                
                {/* Conteúdo - lado direito */}
                <div className='flex-1 space-y-8'>
                    {/* Cabeçalho */}
                    <div>
                        <div className="inline-flex items-center mb-3">
                            <div className="w-10 h-1 bg-[#F63D3C] mr-3"></div>
                            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                About Me
                            </span>
                        </div>
                        
                        <h1 className='text-2xl lg:text-3xl xl:text-4xl font-bold mb-5'>
                            Thiago <span className="text-[#F63D3C]">dos Santos</span>
                        </h1>
                    </div>
                    
                    {/* Texto sobre */}
                    <div className="space-y-4">
                        <p className='text-gray-700 dark:text-gray-300 text-sm lg:text-base leading-relaxed'>
                            I am a <span className="font-bold text-[#F63D3C]">Software Engineer</span> dedicated to delivering solutions 
                            that bridge the gap between high-performance Front-end and robust Back-end architecture.
                        </p>
                        
                        <p className='text-gray-700 dark:text-gray-300 text-sm lg:text-base leading-relaxed'>
                            Since 2024, I have been transforming complex requirements into scalable applications, 
                            leveraging an ecosystem that spans from <span className="font-semibold">PHP (Laravel/CodeIgniter)</span> to 
                            <span className="font-semibold"> Modern JavaScript (React/Next.js)</span>.
                        </p>
                        
                        <p className='text-gray-700 dark:text-gray-300 text-sm lg:text-base leading-relaxed'>
                            My approach goes beyond just writing code: as an engineer, I prioritize efficient data 
                            modeling in <span className="font-semibold">MySQL and MongoDB</span> and the development of seamless 
                            <span className="font-semibold"> Node.js APIs</span> that connect business logic to the end user.
                        </p>
                        
                        <p className='text-gray-700 dark:text-gray-300 text-sm lg:text-base leading-relaxed'>
                            I specialize in identifying client needs and translating them into intuitive interfaces 
                            and secure, reliable integrations.
                        </p>
                    </div>
                    
                    {/* Tech Stack Indicators */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="flex items-center space-x-2 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                            <div className="p-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-md">
                                <Code className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            </div>
                            <span className="font-medium text-gray-700 dark:text-gray-300 text-xs">Full Stack</span>
                        </div>
                        
                        <div className="flex items-center space-x-2 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                            <div className="p-1.5 bg-green-100 dark:bg-green-900/30 rounded-md">
                                <Database className="w-4 h-4 text-green-600 dark:text-green-400" />
                            </div>
                            <span className="font-medium text-gray-700 dark:text-gray-300 text-xs">Databases</span>
                        </div>
                        
                        <div className="flex items-center space-x-2 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                            <div className="p-1.5 bg-purple-100 dark:bg-purple-900/30 rounded-md">
                                <Cpu className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                            </div>
                            <span className="font-medium text-gray-700 dark:text-gray-300 text-xs">APIs</span>
                        </div>
                        
                        <div className="flex items-center space-x-2 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                            <div className="p-1.5 bg-orange-100 dark:bg-orange-900/30 rounded-md">
                                <Layers className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                            </div>
                            <span className="font-medium text-gray-700 dark:text-gray-300 text-xs">Architecture</span>
                        </div>
                    </div>
                    
                    {/* Botões de Download */}
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Button asChild className="flex-1 bg-[#F63D3C] hover:bg-[#d63433] text-white py-4 text-xs lg:text-sm font-medium">
                            <Link href="/files/CVptbr.pdf" download target="_blank" rel="noopener noreferrer">
                                📄 Download CV (PT-BR)
                            </Link>
                        </Button>
                        <Button asChild variant="outline" className="flex-1 py-4 text-xs lg:text-sm font-medium border hover:border-[#F63D3C] hover:text-[#F63D3C]">
                            <Link href="/files/CVenuk.pdf" download target="_blank" rel="noopener noreferrer">
                                📄 Download CV (EN-UK)
                            </Link>
                        </Button>
                    </div>
                    
                    {/* Redes Sociais e Info */}
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                            {/* Redes Sociais */}
                            <div>
                                <h3 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                                    Connect with me
                                </h3>
                                <div className="flex gap-2">
                                    {social.map((item, index) => {
                                        const {href, icon} = item;
                                        return (
                                            <a 
                                                key={index}
                                                href={href} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#F63D3C] hover:text-white transition-all duration-300 text-gray-700 dark:text-gray-300"
                                                aria-label={`Link to ${href}`}
                                            >
                                                <span className="text-sm">{icon}</span>
                                            </a>
                                        )
                                    })}
                                </div>
                            </div>
                            
                            {/* Informação adicional */}
                            <div className="text-left lg:text-right">
                                <div className="inline-flex items-center space-x-1.5 text-gray-600 dark:text-gray-400">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-xs font-medium">Available for opportunities</span>
                                </div>
                                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                                    Based in Londrina, Brazil • Open to remote work
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
 );
};