import projectsData from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import CTA from "@/components/CTA";

export async function generateStaticParams() {
  return projectsData.projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }>; }) {
  const { slug } = await params;

  const project = projectsData.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className="py-[100px] px-[25px] max-w-4xl mx-auto">
        <div>
          <Image
            src={`/projects/${project.image.url}`}
            alt={project.title}
            width={800}
            height={600}
            className="w-full mb-6 rounded-[15px]"
          />
        </div>

        <div className="flex flex-col gap-8 my-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold">{project.title}</h1>
            <p className="text-lg text-gray-700">{project.description}</p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">Tecnologías Utilizadas</h2>
            <ul className="text-sm flex items-center gap-2 flex-wrap">
              {project.technologies.map((tech, index) => (
                <li key={index} className="py-1 px-4 border border-gray-200 md:hover:border-[#a855f7] rounded-full cursor-default">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
