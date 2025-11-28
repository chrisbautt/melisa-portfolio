import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section w-full h-screen flex justify-center items-center text-center">
      <div className="max-w-4xl flex flex-col justify-center items-center gap-4">
        <h1 className="text-5xl font-bold">Página No Encontrada</h1>
        <p className="text-lg text-[#626269]">Lo sentimos! puede que esta página no exista. Revisa la URL o vuelve a la página principal.</p>
        <Link href="/" className="mt-4 px-4 py-2 border border-[#c1d1c1] md:hover:border-[#a855f7] rounded-[10px] cursor-pointer transition-all duration-300">Volver al inicio</Link>
      </div>
    </section>
  );
}
