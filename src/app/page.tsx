'use client';
import CardExperience from "@/components/CardExperience";
import CardFAQ from "@/components/CardFAQ";
import CardLink from "@/components/CardLink";
import CardProject from "@/components/CardProject";
import CardService from "@/components/CardServices";
import CardSkills from "@/components/CardSkills";
import CardTestimonials from "@/components/CardTestimonials";
import CTA from "@/components/CTA";
import Form from "@/components/Form";
import Metrics from "@/components/Metrics";
import Image from "next/image";
import Link from "next/link";
import projectsData from "@/data/projects.js";

export default function Home() {
  const projects = projectsData.projects;

  return (
    <>
      <section className="min-h-[100vh] flex flex-col justify-center items-center text-center gap-6 pt-16 pb-4 px-4">
        <h1 className="text-4xl md:text-5xl md:text-7xl font-bold">Diseñadora <span className="text-[#a855f7] text-shadow-[0px_0px_8px] shadow-[#a855f7]">UX/UI</span> Creativa</h1>
        <p className="text-xl md:text-2xl text-[#626269] max-w-[750px]">Transformo ideas en experiencias digitales hermosas y funcionales. Especializada en diseños creativos, investigación de usuarios e innovación digital.</p>
        <div className="flex justify-center gap-8">
          <Metrics metricCount={1} metricLabel="Proyecto" />
          <Metrics metricCount={"100%"} metricLabel="Satisfacción" />
        </div>
        <div className="flex justify-center gap-4 my-4">
          <Link href="#proyectos" className="py-2 px-4 rounded-[10px] border border-[#a855f7] bg-[#a855f7] md:hover:bg-[#a855f7]/90 text-white cursor-pointer">Ver mí Trabajo</Link>
          <Link href="#contacto" className="py-2 px-4 rounded-[10px] border border-[#e1e1e1] md:hover:border-[#a855f7] md:hover:text-[#a855f7] cursor-pointer transform transition-all duration-300">Contáctame</Link>
        </div>
        <Image src="/icons/keyboard_arrow_down.svg" alt="" width={40} height={40} className="" />
      </section>

      <section id="sobre-mi" className="section max-w-6xl mx-auto">
        <div className="headingContainer">
          <h2 className="heading">Sobre Mí</h2>
        </div>
        <article className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:pt-0 md:pl-0 md:p-10">
            <div className="block-inline border border-dashed border-[#a855f7]/50 md:hover:border-[#a855f7] rounded-[25px] p-4 shadow-[5px_5px_10px] shadow-[#eeeeee] transition-all duration-300">
              <Image src="/melisabdn-ux-ui-designer.jpeg" alt="Melisa Belen Díaz - UX/UI Designer" width={1200} height={800} className="w-full h-auto rounded-[15px]" />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Mi historia</h2>
            <p className="paraphrase">Soy Melisa Belén Díaz, Diseñadora UX/UI y Desarrolladora Web Frontend Jr. con una larga carrera de formación universitaria y autodidacta, capaz de entregar resultados profesionales y personalizados, mejorando la retención y experiencia de usuario en cada uno de mis trabajos.</p>
            <p className="paraphrase">Mi formación académica abarca una larga carrera de formación universitaria en la Tecnicatura Universitaria en Programación (Universidad Provincial del Sudoeste) combinada con cursos de UX/UI con foco en accesibilidad, diseño centrado en el usuario y prototipado con herramientas como Figma y Adobe XD, junto con otras herramientas de diseño y programación.</p>
            <p className="paraphrase">A través de mis años de formación he ido adquiriendo grandes habilidades que me permiten trabajar en diferentes entornos de trabajo y proyectos, cuidando cada detalle profesional, y poniendo un enfoque en la experiencia de usuario final, la accesibilidad y el diseño inclusivo.</p>
          </div>
        </article>
        <hr className="my-[50px] border-[#eeeeee]" />
        <article>
          <h2 className="text-2xl font-bold mb-5">Habilidades y Expertise</h2>
          <div className="flex flex-col gap-6">
            <CardSkills skillName="Programación Web" skills={["HTML5", "CSS", "JavaScript", "ReactJS", "SQL", "Python", "Flask", "C#"]} />
            <CardSkills skillName="Diseño UX/UI" skills={["Figma", "Photoshop", "Adobe XD"]} />
            <CardSkills skillName="Herramientas" skills={["WordPress", "Git", "GitHub"]} />
          </div>
        </article>
      </section>

      <section id="proyectos" className="section max-w-6xl mx-auto">
        <div className="headingContainer">
          <h2 className="heading">Proyectos Destacados</h2>
          <p className="text-[#626269]">Una selección de proyectos donde la creatividad, la estrategia y la experiencia se unen para crear productos memorables.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map(project => (
              <CardProject 
                key={project.id}
                slug={project.slug}
                urlImage={project.image.url} 
                typeProject={project.type} 
                projectTitle={project.title} 
                projectDescription={project.description} 
                projectTechnologies={project.technologies} 
              />
            ))}
        </div>
      </section>

      <section id="experiencia" className="section max-w-6xl mx-auto">
        <div className="headingContainer">
          <h2 className="heading">Experiencia Profesional</h2>
        </div>
        <div className="flex gap-4">
          <div className="timeLine-gradient md:hidden h-[660px] w-[25px] rounded-full"></div>
          <ul className="flex flex-col gap-6 md:gap-0">
            <li>
              <CardExperience Position="Simulación Laboral IT - UX/UI Designer" Company="No Country" Description="Como parte de mi compromiso, decidí participar en la simulación laboral de No Country en el rol de UX/UI designer. Durante este desafío, tuve la oportunidad de fortalecer mis conocimientos en un entorno colaborativo. Llevé a cabo investigaciones, creé mapas de empatía, desarrollé arquitecturas de diseño y prototipos de alta y baja fidelidad con el objetivo de llegar a un producto viable. Esta experiencia no solo me permitió aplicar mis habilidades existentes, sino también aprender de forma activa y rápida en un entorno dinámico." DateRange="Feb 2024 - May 2024" />
            </li>
            {/*
              // Línea del tiempo continua
            <li className="md:ml-[75px]">
              <div className="hidden md:block w-[5px] h-[75px] rounded-full bg-[#a855f7] my-[5px] mx-auto"></div>
            </li>
            */}
          </ul>
        </div>
      </section>

      <section id="servicios" className="section max-w-6xl mx-auto">
        <div className="headingContainer">
          <h2 className="heading">Servicios</h2>
          <p className="text-[#626269]">Soluciones de diseño integral para transformar tu visión en realidad</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CardService urlIcon="palette.svg" serviceName="Diseño UX/UI" serviceDescription="Creación de interfaces intuitivas y atractivas que ofrecen experiencias excepcionales a los usuarios." />
          <CardService urlIcon="code.svg" serviceName="Prototipado Interactivo" serviceDescription="Desarrollo de prototipos funcionales para validar conceptos y mejorar la comunicación con stakeholders." />
          <CardService urlIcon="group.svg" serviceName="Investigación de Usuarios" serviceDescription="Análisis profundo de comportamientos y necesidades para fundamentar decisiones de diseño." />
          <CardService urlIcon="bolt.svg" serviceName="Optimización de Experiencia" serviceDescription="Mejora continua de productos digitales basada en datos y feedback de usuarios." />
          <CardService urlIcon="star.svg" serviceName="Consultoría Estratégica" serviceDescription="Asesoramiento en estrategia digital y transformación de procesos de diseño." />
          <CardService urlIcon="globe.svg" serviceName="Enfoque en Accesibilidad" serviceDescription="Implementación de diseños inclusivos que garantizan la usabilidad y accesibilidad para todos los usuarios, independientemente de sus capacidades." />
        </div>
      </section>

      <section id="testimonios" className="section max-w-6xl mx-auto">
        <div className="headingContainer">
          <h2 className="heading">Testimonios</h2>
          <p className="text-[#626269]">Lo que dicen mis compañeros y clientes sobre mi trabajo</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CardTestimonials Testimonial="Excelente profesional y compañera de equipo. 100% recomendada." Author="Ana Laura Z." Position="Tester QA Manual | Jr. Software Engineer" />
          <CardTestimonials Testimonial="La investigación de usuarios realizada por Meli nos proporcionó insights valiosos que transformaron nuestro proyecto. Su enfoque centrado en el usuario es excepcional." Author="María Tellez" Position="UX/UI Designer" />
          <CardTestimonials Testimonial="Trabajar con Meli fue una experiencia fantástica. Su creatividad y habilidades de diseño llevaron mi sitio web al siguiente nivel." Author="Chris Bauttierre" Position="Web Developer" />
        </div>
      </section>

      <section id="faq" className="section max-w-6xl mx-auto">
        <div className="headingContainer">
          <h2 className="heading">Preguntas Frecuentes</h2>
          <p className="text-[#626269]">Tus preguntas son valiosas. Respuestas a las dudas más comunes.</p>
        </div>
        <div className="flex flex-col gap-6">
          <CardFAQ question="¿Cuál es el proceso de cada proyecto?" answer="El proceso de diseño abarca desde la investigación inicial hasta la entrega final, incluyendo investigación, prototipado y pruebas con usuarios reales para asegurar la mejor experiencia." />
          <CardFAQ question="¿Qué entregables puedo esperar?" answer="Los entregables incluyen wireframes, prototipos interactivos y especificaciones de diseño, todos orientados a facilitar el desarrollo y la accesibilidad." />
          <CardFAQ question="¿Cómo determinas el costo de un proyecto?" answer="El costo se determina en base a la complejidad del proyecto y las necesidades del cliente." />
        </div>
      </section>

      <section id="contacto" className="section">
        <div className="headingContainer max-w-xl text-center">
          <h2 className="heading">Conectemos</h2>
          <p className="text-[#626269]">¿Ya tienes un proyecto en mente? Contáctame y creemos algo increíble juntos.</p>
        </div>
        <Form />
        <div className="flex justify-center items-center py-12 gap-6">
          <CardLink url="https://www.linkedin.com/in/melisa-belen-diaz-nieto/">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin" data-loc="client/src/pages/Home.tsx:542"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </CardLink>
          <CardLink url="mailto:melisabdiaz.it@gmail.com">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail" data-loc="client/src/pages/Home.tsx:545"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
          </CardLink>
        </div>
      </section>

      <CTA />
    </>
  );
}
