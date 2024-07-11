"use client";
import { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import MobileMenu from './mobile-menu';
import LogoWithName from '../../assets/icons/solaris-high-resolution-logo-transparent (1).png';
import languageIcon from '../../assets/icons/language.svg';
import { useLanguage } from "@/context/LanguageContext";

type Language = "spanish" | "english";

export default function Header() {
    const { content, switchLanguage, language } = useLanguage();
    const { navbar } = content;
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLLIElement>(null);

    const handleLanguageChange = (lang: Language) => {
        switchLanguage(lang);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="absolute w-full z-30 mt-5">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Site branding */}
                    <div className="shrink-0 mr-4 flex items-center">
                        {/* Logo */}
                        <Link href="/" className="block" aria-label="Cruip">
                            <img src={LogoWithName.src} alt="Solaris" className="h-12"/>
                        </Link>
                    </div>

                    {/* Desktop navigation */}
                    <nav className="hidden md:flex md:grow">
                        {/* Desktop sign in links */}
                        <ul className="flex gap-5 grow justify-end flex-wrap items-center">
                            {navbar.sections.map((section) => (
                                <li key={section.name}>
                                    <a href={section.link} className="text-lg text-white hover:text-purple-600">
                                        {section.name}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a
                                    href={navbar.contact.link}
                                    className="btn-sm text-white bg-purple-700 hover:bg-purple-800 ml-3"
                                >
                                    {navbar.contact.name}
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className={'flex gap-1 items-center'}>
                        <MobileMenu/>
                        <li className="relative ml-3 md:ml-8 md:mt-1 mb-1 md:bottom-0" ref={dropdownRef}>
                            <div className="flex items-center cursor-pointer relative">
                                <img
                                    src={languageIcon.src}
                                    alt={language}
                                    className="w-6 h-6"
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                />
                                {dropdownOpen && (
                                    <ul className="absolute top-0 mt-10 right-0 bg-gray-800 text-white py-1 shadow-lg rounded">
                                        {["english", "spanish"].map((lang) => (
                                            <p
                                                key={lang}
                                                onClick={() => handleLanguageChange(lang as Language)}
                                                className={`px-4 py-2 ${lang === language ? 'text-purple-600 cursor-default' : 'hover:bg-gray-700 cursor-pointer'}`}
                                            >
                                                {lang.charAt(0).toUpperCase() + lang.slice(1)}
                                            </p>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </li>
                    </div>
                </div>
            </div>
        </header>
    );
}
