"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ArrowScrollDown() {
  return (
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{
        duration: 1.6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="flex justify-center"
    >
      <Image
        src="/icons/keyboard_arrow_down.svg"
        alt=""
        width={40}
        height={40}
      />
    </motion.div>
  );
}
