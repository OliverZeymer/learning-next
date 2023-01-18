"use client";

import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";

export const TypingText = ({ title, textStyles }) => (
  <motion.p variants={textContainer} className={`font-normal text-sm text-secondary-white ${textStyles}`}>
    {Array.from(title).map((letter, index) => (
      <motion.span key={index} variants={textVariant2} className="inline-block">
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2 variants={textVariant2} initial="hidden" whileInView="show" className={`mt-10 font-bold md:text-6xl text-4xl text-white ${textStyles}`}>
    {title}
  </motion.h2>
);
