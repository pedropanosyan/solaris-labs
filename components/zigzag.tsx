"use client";
import Image from 'next/image'
import WebDevelopment from '@/public/images/web-development.svg'
import Automate from '@/public/images/automate.svg'
import Testing from '@/public/images/testing.svg'
import {useLanguage} from "@/context/LanguageContext";

const images = [WebDevelopment, Automate, Testing];

export default function Zigzag() {

    const { content } = useLanguage();
    const { services } = content;


    return (
        <section className="bg-gray-900" id={content.navbar.sections[0].link.slice(1)}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 border-t border-gray-800">
                <div className="py-12 md:py-20">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h1 className="h2 mb-4">{services.title}</h1>
                        <p className="text-xl text-gray-400">
                            {services.subtitle}
                        </p>
                    </div>

                    {/* Items */}
                    <div className="grid gap-20">
                        {services.items.map((service, index) => (
                            <div key={index} className="md:grid md:grid-cols-12 md:gap-6 items-center">
                                {/* Image */}
                                <div
                                    className={`max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 ${
                                        service.order === 1 ? 'md:order-1' : 'rtl'
                                    }`}
                                    data-aos="fade-up"
                                >
                                    <Image className="max-w-full mx-auto md:max-w-none h-auto" src={images[index]} width={540} height={405} alt={`Features ${index + 1}`} />
                                </div>
                                {/* Content */}
                                <div
                                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                                    data-aos={service.order === 1 ? 'fade-right' : 'fade-left'}
                                >
                                    <div className={`md:${service.order === 1 ? 'pr' : 'pl'}-4 lg:${service.order === 1 ? 'pr' : 'pl'}-12 xl:${service.order === 1 ? 'pr' : 'pl'}-16`}>
                                        <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                                            {service.title === 'Web development' ? 'Captivate your clients' : service.title === 'Mobile development' ? 'Expand your scope' : 'Automate repetitive tasks'}
                                        </div>
                                        <h3 className="h3 mb-3">{service.title}</h3>
                                        <p className="text-xl text-gray-400 mb-4">{service.description}</p>
                                        <ul className="text-lg text-gray-400 -mb-2">
                                            {service.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-center mb-2">
                                                    <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                                    </svg>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}
