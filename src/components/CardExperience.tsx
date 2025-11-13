import Image from "next/image";

interface CardExperienceProps {
    Position: string;
    Company: string;
    Description: string;
    DateRange: string;
}

export default function CardExperience({ Position, Company, Description, DateRange }: CardExperienceProps) {
    return (
        <>
            <div className="relative border border-[#e1e1e1] rounded-[15px] shadow-[5px_5px_10px] shadow-[#e1e1e1] p-4 md:hover:border-[#a855f7] transition-all duration-300">
                <div className="bg-white relative top-0 left-[-40px] md:left-0 md:right-0 md:mx-auto w-[15px] h-[15px] rounded-full flex justify-center items-center">
                    <div className="bg-[#a855f7] w-[10px] h-[10px] rounded-full"></div>
                </div>
                <div className="flex items-start gap-3 font-bold">
                    <Image src="/icons/work.svg" alt="Experiencia Laboral" width={30} height={30} />
                    <div>
                        <h3 className="text-lg">{Position}</h3>
                        <p className="text-[#a855f7] font-normal">{Company}</p>
                    </div>
                </div>
                <div className="text-[#626269] text-end py-8">
                    <p>{Description}</p>
                </div>
                <hr className="border-[#eeeeee] my-4" />
                <div className="flex items-center gap-3 text-[#626269]">
                    <Image src="/icons/calendar.svg" alt="Fecha de empleo" width={20} height={20} />
                    <span>{DateRange}</span>
                </div>
            </div>
        </>
    );
}
