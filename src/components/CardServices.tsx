import Image from "next/image";

interface CardServiceProps {
    serviceName: string;
    serviceDescription: string;
    urlIcon: string;
}

export default function CardService({ serviceName, serviceDescription, urlIcon }: CardServiceProps) {
    return (
        <div className="w-full min-h-[300px] rounded-[15px] border border-[#e1e1e1] md:hover:border-[#a855f7] overflow-hidden shadow-[5px_5px_10px] shadow-[#eeeeee]">
            <div className="flex flex-col gap-3 py-6 px-4">
                <Image src={`/icons/${urlIcon}`} alt="" width={50} height={50} className="mb-[10px]" />
                <h3 className="text-xl font-bold">{serviceName}</h3>
                <p className="text-[#626269]">{serviceDescription}</p>
            </div>
        </div>
    );
}
