import Link from "next/link";

export default function CTA() {
    return (
        <>
            <section className="section bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-y border-[#eeeeee] flex flex-col justify-center items-center text-center gap-6">
                <h2 className="text-4xl font-bold">¿Listo para Transformar Tu Visión?</h2>
                <p className="text-lg text-[#626269]">Contáctame hoy y descubre cómo puedo ayudarte a crear experiencias digitales excepcionales.</p>
                <Link href="/#contacto" className="bg-[#a855f7] text-white py-2 px-4 rounded-[10px] cursor-pointer md:hover:bg-[#a855f7]/90">Comenzar Ahora</Link>
            </section>
        </>
    );
}
