import Image from "next/image";
import Link from "next/link";

interface CardProjectProps {
    slug: string;
    urlImage: string;
    typeProject: string;
    projectTitle: string;
    projectDescription: string;
    projectTechnologies?: string[];
}

export default function CardProject({ slug, urlImage, typeProject, projectTitle, projectDescription, projectTechnologies }: CardProjectProps) {
    return (
        <Link href={`/proyectos/${slug}`} className="rounded-[15px] border border-[#e1e1e1] md:hover:border-[#a855f7] overflow-hidden shadow-[5px_5px_10px] shadow-[#eeeeee]">
            <div>
                <Image src={`/projects/${urlImage}`} alt={projectTitle} width={400} height={300} className="w-full" />
            </div>
            <div className="flex flex-col gap-3 py-6 px-4">
                <div className="flex flex-col gap-2 mb-[10px]">
                    <span className="text-sm text-[#a855f7] uppercase">{typeProject}</span>
                    <ul className="flex items-center gap-2 text-xs flex-wrap">
                        {projectTechnologies?.map((tech, index) => (
                            <li key={index} className="py-1 px-4 border border-[#e1e1e1] md:hover:border-[#a855f7] rounded-full cursor-default">{tech}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold">{projectTitle}</h3>
                    <p className="text-[#626269]">{projectDescription}</p>
                </div>
            </div>
        </Link>
    );
}
