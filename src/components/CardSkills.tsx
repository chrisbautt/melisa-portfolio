'use client';
import Image from "next/image";
import { useState } from "react";

interface CardSkillsProps {
    skillName: string;
    skills: string[];
}

export default function CardSkills({ skillName, skills }: CardSkillsProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDetails = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <details>
                <summary className="flex justify-between items-center p-4 border border-[#e1e1e1] md:hover:border-[#a855f7] rounded-[15px] transform transition-all duration-300 cursor-pointer shadow-[5px_5px_10px] shadow-[#eeeeee]"  onClick={toggleDetails}>
                    <div className="flex items-center gap-4">
                        <div className="w-[5px] h-[35px] bg-[#a855f7] rounded-full"></div>
                        <div><span className="font-bold text-[#a855f7] text-lg">{skillName}</span></div>
                    </div>
                    <Image src={isOpen ? "/icons/keyboard_arrow_up.svg" : "/icons/keyboard_arrow_down.svg"} alt="mostrar detalles" width={40} height={40} className="cursor-pointer" />
                </summary>
                <div className="p-4 font-bold">
                    <ul className="flex flex-wrap gap-8 justify-start items-center">
                        {skills.map((skill, index) => (
                            <li key={index} className="skillItem">{skill}</li>
                        ))}
                    </ul>
                </div>
            </details>
        </>
    );
}
