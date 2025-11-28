import Image from "next/image";

interface SkillsProps {
    prop: string;
}

export default function Ticks({ prop }: SkillsProps) {
    return (
        <span className="min-w-[250px] py-[5px] px-[10px] rounded-[10px] border border-[#e1e1e1] cursor-default flex flex-nowrap whitespace-nowrap items-center gap-1">
            <Image src="/icons/star.svg" alt="" width={25} height={25} />
            <span className="whitespace-nowrap">{prop}</span>
        </span>
    );
}