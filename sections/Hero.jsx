"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className={`${styles.innerWidth} flex flex-col`}>
      <div className="flex justify-center items-center flex-col relative z-10  select-none">
        <motion.h1 variants={textVariant(0.1)} className={styles.heroHeading}>
          Metaverse
        </motion.h1>
        <motion.div variants={textVariant(0.2)} className="flex flex-row justify-center items-center">
          <span className={styles.heroHeading}>Ma</span>
          <div className={styles.heroDText} />
          <span className={styles.heroHeading}>Ness</span>
        </motion.div>
      </div>

      <motion.div variants={slideIn("right", "spring", 0, 1)} className="relative w-full md:-mt-[20px] -mt-[12px]">
        <img src="/cover.png" alt="hero_cover" className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] -top-[30px] z-10 relative" />

        <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
          <a href="#explore" className="rounded-full">
            <img src="/stamp.png" alt="stamp" className="rounded-full sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
