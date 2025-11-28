import Link from "next/link";

interface CardLinkProps {
  children: React.ReactNode;
  url: string;
}

export default function CardLink({ children, url }: CardLinkProps) {
  return (
    <>
        <Link href={url} target="_blank" className="inline-block p-3 border border-[#c1c1c1] rounded-[10px] md:hover:border-[#a855f7] transform md:hover:scale-[1.1] transition-all duration-500">
            {children}
        </Link>
    </>
  );
}
