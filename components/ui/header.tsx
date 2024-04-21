"use client"
import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Logo from '../../assets/icons/solaris-icon.svg'
import LogoWithName from '../../assets/icons/solaris-high-resolution-logo-transparent (1).png'

const sections = [
    {name: 'Services', href: '#services'},
    {name: 'Expertise', href: '#expertise'},
    {name: 'Crew', href: '#crew'},
]

export default function Header() {
    
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
                            {sections.map((section) => (
                                <li key={section.name}>
                                    <a href={section.href} className="text-lg text-white hover:text-purple-600">
                                        {section.name}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a
                                    href={"#contact"}
                                    className="btn-sm text-white bg-purple-700 hover:bg-purple-800 ml-3"
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <MobileMenu/>

                </div>
            </div>
        </header>
    )
}


