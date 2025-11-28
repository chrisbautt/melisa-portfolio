'use client';
import CardExperience from "@/components/CardExperience";
import CardFAQ from "@/components/CardFAQ";
import CardLink from "@/components/CardLink";
import CardProject from "@/components/CardProject";
import CardService from "@/components/CardServices";
import CardSkills from "@/components/CardSkills";
import CardTestimonials from "@/components/CardTestimonials";
import Form from "@/components/Form";
import Image from "next/image";
import Link from "next/link";
import projectsData from "@/data/projects.js";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import ArrowScrollDown from "@/components/ArrowScrollDown";
import Skills from "@/components/Skills";

export default function Home() {
  const projects = projectsData.projects;

  return (
    <>
      <section id="home" className="min-h-[100vh] flex flex-col justify-center items-center text-center gap-6 pt-15 md:pt-10 md:pb-4 px-4">
        <h1 className="text-4xl md:text-5xl md:text-7xl">Diseñadora <span className="text-[#a855f7] text-shadow-[0px_0px_10px] shadow-[#a855f7]">UX/UI</span> Creativa</h1>
        <p className="text-xl md:text-2xl text-[#626269] max-w-[750px] font-light">Transformo ideas en experiencias digitales hermosas y funcionales. Especializada en diseños creativos, investigación de usuarios e innovación digital.</p>
        <div className="w-full max-w-3xl mt-4">
          <TestimonialsCarousel speed={30}>
            <Skills prop="Diseño de Sitios Web" />
            <Skills prop="Desarrollo de Sitios Web" />
            <Skills prop="Investigación de Usuarios" />
            <Skills prop="Prototipado Funcional" />
            <Skills prop="Wireframes" />
            <Skills prop="Pruebas de Usabilidad" />
            <Skills prop="Scripting con Python" />
          </ TestimonialsCarousel>
        </div>
        <div className="flex justify-center gap-4 my-2">
          <Link href="#proyectos" className="py-2 px-4 rounded-[10px] border border-[#a855f7] bg-[#a855f7] md:hover:bg-[#a855f7]/90 text-white cursor-pointer">Ver mí Trabajo</Link>
          <Link href="#contacto" className="py-2 px-4 rounded-[10px] border border-[#e1e1e1] md:hover:border-[#a855f7] md:hover:text-[#a855f7] cursor-pointer transform transition-all duration-300">Contáctame</Link>
        </div>
        <ArrowScrollDown />
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
            <h2 className="text-2xl font-bold mb-4">¿Quién Soy Yo?</h2>
            <p className="paraphrase">Soy Melisa Belén Díaz, Diseñadora UX/UI y Desarrolladora Web Frontend Jr. con una larga carrera de formación universitaria y autodidacta, capaz de entregar resultados profesionales y personalizados, mejorando la retención y experiencia de usuario en cada uno de mis trabajos.</p>
            <p className="paraphrase">Mi formación académica abarca desde una Tecnicatura Universitaria en Programación (Universidad Provincial del Sudoeste) combinada con cursos de UX/UI con foco en accesibilidad, diseño centrado en el usuario y prototipado del alta y baja fidelidad con herramientas como Figma y Adobe XD, junto con otras herramientas de diseño y programación.</p>
            <p className="paraphrase">A través de mis años de formación he ido adquiriendo grandes conocimientos y habilidades, junto con algunos certificados que refuerzan mis conocimientos, todo esto me permite trabajar en diferentes entornos de trabajo y proyectos, cuidando cada detalle profesional, y poniendo un enfoque en la experiencia de usuario final, la accesibilidad y el diseño inclusivo.</p>
          </div>
        </article>
        <hr className="my-[50px] border-[#eeeeee]" />
        <article>
          <h2 className="text-2xl font-bold mb-5">Habilidades y Expertise</h2>
          <div className="flex flex-col gap-6">
            <CardSkills skillName="Desarrollo Web" skills={["HTML5", "CSS", "JavaScript", "ReactJS", "MySQL", "Python", "Flask", "C#"]} />
            <CardSkills skillName="Diseño UX/UI" skills={["Figma", "Adobe XD", "Canva"]} />
            <CardSkills skillName="Herramientas" skills={["WordPress", "Git", "GitHub"]} />
            <CardSkills skillName="Metodologías" skills={["UX Research", "Design Thinking", "Scrum"]} />
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
          <div className="timeLineGradient md:hidden w-[25px] rounded-full"></div>
          <ul className="flex flex-col gap-6 md:gap-0">
            <li>
              <CardExperience Position="Simulación Laboral IT - UX/UI Designer" Company="No Country" Description="Participé en dos equipos multidisciplinarios donde desarrollamos prototipos funcionales para una página web. Aporté en el diseño de interfaces accesibles, wireframes y prototipado en Figma, colaborando estrechamente con desarrolladores y testers. La experiencia me permitió aplicar metodologías UX y mejorar mis habilidades de comunicación y trabajo ágil." DateRange="Ene 2024 - May 2024" />
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
          <CardService urlIcon="palette.svg" serviceName="Diseño UX/UI" serviceDescription="Diseño de interfaces atractivas e intuitivas que ofrecen experiencias excepcionales centradas en el usuario." />
          <CardService urlIcon="code.svg" serviceName="Prototipado Funcional" serviceDescription="Desarrollo de prototipos funcionales para la validación de conceptos y la mejora en la comunicación con stakeholders." />
          <CardService urlIcon="pan-tool.svg" serviceName="Pruebas de Usabilidad" serviceDescription="Evaluación de la experiencia de usuario para identificar áreas de mejora y optimizar la usabilidad del proyecto." />
          <CardService urlIcon="group.svg" serviceName="Investigación de Usuarios" serviceDescription="Análisis profundo de comportamientos y necesidades para fundamentar decisiones de diseño." />
          <CardService urlIcon="mac-computer.svg" serviceName="Creación de Sitios Web" serviceDescription="Creación de sitios web visualmente atractivos y accesibles enfocado en la experiencia del usuario." />
          <CardService urlIcon="script.svg" serviceName="Automatizaciones y Análisis" serviceDescription="Implementación de scripts y flujos de trabajo para la optimización de tareas y el análisis de datos con Python." />
        </div>
      </section>

      <section id="testimonios" className="section">
        <div className="headingContainer text-center">
          <h2 className="heading">Testimonios</h2>
          <p className="text-[#626269]">Lo que dicen mis compañeros y clientes sobre mi trabajo</p>
        </div>
        <TestimonialsCarousel speed={40}>
          <div className="min-w-[95%] md:min-w-[33%] lg:min-w-[500px]">
            <CardTestimonials
              Testimonial="Excelente profesional y compañera de equipo. 100% recomendada."
              Author="Ana Laura Z."
              Position="Tester QA Manual | Jr. Software Engineer"
            />
          </div>
          <div className="min-w-[95%] md:min-w-[33%] lg:min-w-[500px]">
            <CardTestimonials
              Testimonial="La investigación de usuarios realizada por Meli nos proporcionó insights valiosos que transformaron nuestro proyecto. Su enfoque centrado en el usuario es excepcional."
              Author="María Tellez"
              Position="UX/UI Designer"
            />
          </div>
          <div className="min-w-[95%] md:min-w-[33%] lg:min-w-[500px]">
            <CardTestimonials
              Testimonial="Trabajar con Meli fue una experiencia fantástica. Su creatividad y habilidades de diseño llevaron mi sitio web al siguiente nivel."
              Author="Chris Bauttierre"
              Position="Web Developer"
            />
          </div>
        </TestimonialsCarousel>
      </section>

      <section id="faq" className="section max-w-6xl mx-auto">
        <div className="headingContainer">
          <h2 className="heading">Preguntas Frecuentes</h2>
          <p className="text-[#626269]">Tus preguntas son valiosas. Respuestas a las dudas más comunes.</p>
        </div>
        <div className="flex flex-col gap-6">
          <CardFAQ question="¿En que consiste el proceso de cada proyecto?" answer="El proceso de diseño abarca desde la investigación inicial hasta la entrega final, incluyendo investigación, prototipado y pruebas con usuarios reales para asegurar la mejor experiencia." />
          <CardFAQ question="¿Qué entregables puedo esperar?" answer="Los entregables incluyen wireframes, prototipos interactivos y especificaciones de diseño, todos orientados a facilitar el desarrollo y la accesibilidad." />
          <CardFAQ question="¿Cómo determinas el costo de un proyecto?" answer="El costo se determina en base a la complejidad del proyecto y las necesidades del cliente." />
          <CardFAQ question="¿Qué tipo de clientes o proyectos has manejado?" answer="He trabajado en proyectos colaborativos y académicos de desarrollo web frontend y UX/UI, aplicando metodologías ágiles, diseños centrados en el usuario y herramientas de análisis de datos. También he realizado proyectos personales orientados al aprendizaje, tanto en frontend como con Python." />
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
    </>
  );
}
