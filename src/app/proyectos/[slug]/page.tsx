import FileDownloadSection from "@/components/FileDownloadSection";
import projectsData from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  return projectsData.projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }>; }) {
  const { slug } = await params;

  const project = projectsData.projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="section w-full h-screen flex justify-center items-center text-center">
        <div className="max-w-4xl flex flex-col justify-center items-center gap-4">
          <h1 className="text-5xl font-bold">Proyecto No Encontrado</h1>
          <p className="text-lg text-[#626269]">Lo sentimos! No hemos encontrado nigún proyecto con dichas coincidencias. Revisa la URL o regresa a la página principal.</p>
          <div className="flex justify-center items-center gap-4">
            <Link href="/#proyectos" className="mt-4 px-4 py-2 bg-[#a855f7] md:hover:bg-[#a855f7]/90 text-white border border-[#a855f7] rounded-[10px] cursor-pointer transition-all duration-300">Ver más Proyectos</Link>
            <Link href="/" className="mt-4 px-4 py-2 border border-[#c1d1c1] md:hover:border-[#a855f7] rounded-[10px] cursor-pointer transition-all duration-300">Volver al inicio</Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section id="#home" className="py-[150px] px-[25px] max-w-4xl mx-auto">
        <div className="mb-2">
          <Link href="/#proyectos" className="text-sm text-[#a855f7] md:hover:text-[#a855f7]/90 transition-all duration-300">&larr; Volver a Proyectos</Link>
        </div>
        <div>
          <Image
            src={`/projects/${project?.image.url}`}
            alt={`${project?.title}`}
            width={800}
            height={600}
            className="w-full mb-6 rounded-[15px]"
          />
        </div>

        <div className="flex flex-col gap-10 my-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl uppercase">{project?.title}</h1>
            <p className="text-[#626269]">{project?.description}</p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl">Tecnologías Utilizadas</h2>
            <ul className="text-sm flex items-center gap-2 flex-wrap">
              {project?.technologies.map((tech, index) => (
                <li key={index} className="py-1 px-4 border border-gray-200 md:hover:border-[#a855f7] rounded-full cursor-default">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {project?.files && project.files.length > 0 && (
            <FileDownloadSection files={project.files} />
          )}
        </div>
      </section>
    </>
  );
}
