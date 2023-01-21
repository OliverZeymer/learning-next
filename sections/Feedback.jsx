"use client";
import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";
const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.25,
      }}
      className={`${styles.innerWidth} lg:flex-row gap-6 flex flex-col`}>
      <motion.div
        viewport={{ once: true }}
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] lg:max-w-sm flex justify-end flex-col gradient-05 sm:p-8
        p-4 rounded-[32px] border border-[#6a6a6a] relative">
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-3xl text-2xl sm:leading-10 leading-9 text-white">Samantha</h4>
          <p className="mt-2 font-normal sm:text-lg text-xs sm:leading-5 leading-4 text-white">Founder | Metaversus</p>
        </div>
        <p className="mt-6 font-normal sm:text-2xl text-lg sm:leading-[45px] leading-10 text-white">
          "With the development of today's technology, we are able to create a new world that is more immersive and interactive than ever before. We are excited to be a part of this new
          world. "
        </p>
      </motion.div>
      <motion.div viewport={{ once: true }} variants={fadeIn("left", "tween", 0.2, 1)} className="hidden sm:flex relative flex-1 justify-center items-center">
        <img src="/planet-09.png" alt="planet-09" className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]" />
        <motion.div
          viewport={{ once: true }}
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute
      -left-[10%] top-[3%]
      ">
          <a href="#explore" className="rounded-full">
            <img src="/stamp.png" alt="stamp" className="w-40 h-40 rounded-full object-contain" />
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
