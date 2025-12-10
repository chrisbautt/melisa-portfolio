"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

interface File {
  url: string;
  movilFileName: string;
  desktopFileName: string;
}

interface FileDownloadSectionProps {
  files: File[];
}

export default function FileDownloadSection({ files }: FileDownloadSectionProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl">Archivos relacionados</h2>
      <div>
        {files.map((file, index) => (
          <Link
            key={index}
            href={file.url}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="py-1 px-4 border border-[#e1e1e1] rounded-full cursor-pointer transition-all duration-300 md:hover:border-[#a855f7] md:hover:text-[#a855f7]"
          >
            Descargar {isMobile ? file.movilFileName : file.desktopFileName}
          </Link>
        ))}
      </div>
    </div>
  );
}
