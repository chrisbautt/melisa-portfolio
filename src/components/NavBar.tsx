'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSmoothScroll } from "@/hooks/smoothScroll";
import { useCurrentPath } from "@/hooks/useCurrentPath";


interface NavItem {
    label: string;
    href: string;
}

export default function NavBar() {
    useSmoothScroll({ duration: 2500, updateURL: "replace" });
    const { pathname } = useCurrentPath() || {};

    const defaultMenu: NavItem[] = [
      { label: "Sobre mí", href: "#sobre-mi" },
      { label: "Proyectos", href: "#proyectos" },
      { label: "Experiencia", href: "#experiencia" },
      { label: "Servicios", href: "#servicios" },
      { label: "FAQ", href: "#faq" },
      { label: "Contacto", href: "#contacto" },
    ];

    const projectMenu: NavItem[] = [
      { label: "Sobre mí", href: "/#sobre-mi" },
      { label: "Proyectos", href: "/#proyectos" },
      { label: "Experiencia", href: "/#experiencia" },
      { label: "Servicios", href: "/#servicios" },
      { label: "FAQ", href: "/#faq" },
      { label: "Contacto", href: "/#contacto" },
    ];

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenNavBar = () => {
        setIsOpen(!isOpen);
    }

    const currentMenu =
        pathname?.startsWith("/proyectos") ? projectMenu : defaultMenu;

    return (
        <>
            <header className='bg-[rgba(255,255,255,0.7)] md:bg-[rgba(255,255,255,0.6)] backdrop-blur-lg shadow-[5px_5px_10px] shadow-[#eeeeee] fixed z-100 top-4 md:top-6 lg:top-8 left-0 right-0 border border-[#e1e1e1] w-[90%] max-w-6xl mx-auto rounded-[15px] py-3 md:py-4 px-6 flex flex-col md:flex-row justify-between items-center gap-6 font-medium'>
                <div className="w-full flex md:hidden justify-between items-center">
                    <Link href="/" className="text-[#a855f7] text-xl uppercase"><span className="text-shadow-[0px_0px_2px] shadow-[#a855ee]">UX/UI</span> Designer</Link>
                    <button className="cursor-pointer" onClick={handleOpenNavBar}>
                        <Image src={isOpen ? "/icons/close.svg" : "/icons/menu.svg"} alt="menu icon" width={30} height={30} />
                    </button>
                </div>
                
                {/* Movile navBar */}
                <ul className={`${isOpen ? 'relative' : 'hidden'} flex flex-col justify-center items-center text-center gap-3 p-2`}>
                    {currentMenu.map((item, index) => (
                        <li key={index}><Link href={item.href} onClick={() => setIsOpen(false)}>{item.label}</Link></li>
                    ))}
                </ul>

                {/* Desktop navBar */}
                <Link href="#home" className="hidden md:inline-block text-[#a855f7] text-xl uppercase"><span className="text-shadow-[0px_0px_2px] shadow-[#a855ee]">UX/UI</span> Designer</Link>
                <ul className="hidden md:flex justify-end items-center gap-8">
                    {currentMenu.map((item, index) => (
                        <li
                            key={index}
                        >
                            <Link
                                href={item.href}
                                className="md:hover:text-[#a855f7] transition-all duration-200"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </header>
        </>
    );
}
