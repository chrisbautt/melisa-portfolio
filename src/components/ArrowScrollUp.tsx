"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ArrowScrollUp() {
    return (
        <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            className="flex justify-center"
        >
            <Link href="#home" aria-label="Regresar arriba">
                <Image
                    src="icons/keyboard-arrow-up.svg"
                    alt="Regresar arriba"
                    width={50}
                    height={50}
                    className="cursor-pointer w-[40px] h-[40px] md:w-[45px] md:h-[45px]"
                />
            </Link>
        </motion.div>
    );
}
