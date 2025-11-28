'use client';
import Image from "next/image";
import { useState } from "react";

interface CardFAQProps {
    question: string;
    answer: string;
}

export default function CardFAQ({ question, answer }: CardFAQProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <details className="list-none border border-[#e1e1e1] rounded-[15px] md:hover:border-[#a855f7] shadow-[5px_5px_10px] shadow-[#eeeeee] transition-all duration-300">
                <summary className="flex justify-between items-center gap-4 text-lg py-6 px-4 cursor-pointer" onClick={toggleOpen}>
                    {question}
                    <Image src={`/icons/${isOpen ? "keyboard-arrow-up" : "keyboard-arrow-down"}.svg`} alt="" width={40} height={40} className="w-[40px] h-[40px]" />
                </summary>
                <p className="text-[#626269] py-6 px-4 border-t border-[#f1f1f1]">{answer}</p>
            </details>
        </>
    );
}
