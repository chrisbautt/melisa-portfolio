import ArrowScrollUp from "./ArrowScrollUp";

export default function Footer() {
    return (
        <footer className="bg-[#f2e8ff] text-[#111111] py-12 px-8 text-center rounded-t-[35px] md:rounded-t-[50px] overflow-hidden mt-[-15px]">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-4">
                <div className="font-light text-sm uppercase flex flex-col md:flex-row items-center gap-1 md:gap-4">
                    <p><u>Melisa</u> Belén Díaz Nieto</p>
                </div>
                <ArrowScrollUp />
            </div>
        </footer>
    );
}
