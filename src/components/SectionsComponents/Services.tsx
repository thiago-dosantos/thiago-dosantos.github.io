'use cliente';
import { FunctionComponent } from "react";
import { services } from '@/data';

export const Services: FunctionComponent = () => {
    return (

    <section className='container mx-auto px-5'>
        <div className='container mx-auto'>
            <div className='flex flex-col items-center text-center'>
                <h2 className='text-center cursor-default text-3xl md:text-4xl font-bold tracking-tighter leading-tight before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-1/4 before:hidden before:lg:block'>What I do for Clients</h2>
                <p className='py-8'>
                    Turning Ideas into Memorable Digital Experiences
                </p>
            </div>
            {/* items */}
            <div className='grid lg:grid-cols-3 gap-6'>
                {services.map((service, index)=> {
                    const {icon, name, description} = service;
                    return <div className='bg-tertiary p-6 rounded-2xl border shadow-lg' key={index}>
                        <div className='text-customblue rounded-sm w-12 h12 flex justify-center items-center mb-24 text-[28px]'>{icon}</div>
                        <h4 className='text-xl font-medium mb-2'>{name}</h4>
                        <p>{description}</p>
                    </div>
                })}
            </div>
        </div>
    </section>

    );
};
