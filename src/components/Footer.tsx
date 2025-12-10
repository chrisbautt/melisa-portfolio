import ArrowScrollUp from "./ArrowScrollUp";
import CardLink from "./CardLink";

export default function Footer() {
    return (
        <footer className="bg-[#f2e8ff] text-[#111111] p-12 text-center rounded-t-[35px] md:rounded-t-[50px] overflow-hidden mt-[-15px]">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-4">
                <div className="flex justify-center items-center gap-6">
                    <CardLink url="https://www.linkedin.com/in/melisa-belen-diaz-nieto/" ariaLabel="Ir a mi perfil de LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin" data-loc="client/src/pages/Home.tsx:542"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </CardLink>
                    <CardLink url="mailto:melisabdiaz.it@gmail.com" ariaLabel="Enviar un correo electrónico">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail" data-loc="client/src/pages/Home.tsx:545"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                    </CardLink>
                </div>
                <ArrowScrollUp />
            </div>
        </footer>
    );
}
