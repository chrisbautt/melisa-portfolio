import Image from "next/image";

interface CardTestimonialsProps {
    Testimonial: string;
    Author: string;
    Position: string;
}

export default function CardTestimonials({ Testimonial, Author, Position }: CardTestimonialsProps) {
    return (
        <div className="w-full min-h-[300px] rounded-[15px] border border-[#e1e1e1] md:hover:border-[#a855f7] overflow-hidden shadow-[5px_5px_10px] shadow-[#eeeeee] flex flex-col justify-between gap-3 py-6 px-4">
            <div>
                <div className="flex justify-start items-center gap-1">
                    <Image src="/icons/star_wght.svg" alt="" width={20} height={20} />
                    <Image src="/icons/star_wght.svg" alt="" width={20} height={20} />
                    <Image src="/icons/star_wght.svg" alt="" width={20} height={20} />
                    <Image src="/icons/star_wght.svg" alt="" width={20} height={20} />
                    <Image src="/icons/star_wght.svg" alt="" width={20} height={20} />
                </div>
                <p className="text-[#626269] italic my-4">&quot;{Testimonial}&quot;</p>
            </div>
            <div>
                <h3 className="text font-bold mt-4">{Author}</h3>
                <p className="text-sm text-[#626269]">{Position}</p>
            </div>
        </div>
    );
}
