"use client";;
import { motion, useInView } from "framer-motion";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

export default function WordFadeIn({
  words,
  delay = 0.15,

  variants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * delay },
    }),
  },

  className
}) {
  const _words = words.split(" ");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });



  return (
    (<motion.h2
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      ref={ref} 
      className={cn(
        "font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]",
        className
      )}>
      {_words.map((word, i) => (
        <motion.span key={word} variants={variants} custom={i}>
          {word}{" "}
        </motion.span>
      ))}
    </motion.h2>)
  );
}
