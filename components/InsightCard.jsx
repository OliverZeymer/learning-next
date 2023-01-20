"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 1)} className="flex md:flex-row flex-col gap-4">
    <img src={imgUrl} alt={title} className="md:w-64 w-full h-60 rounded-[32px] object-cover" />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-16 flex flex-col max-w-2xl">
        <h4 className="font-normal lg:text-5xl text-white text-2xl">{title}</h4>
        <p className="mt-4 font-normal lg:text-xl text-sm text-secondary-white">{subtitle}</p>
      </div>
      <div className="lg:flex hidden items-center justify-center w-24 h-24 rounded-full bg-transparent border-2 border-white">
        <img src="arrow.svg" alt="arrow" className="w-[40%] h-[40%] object-contain" />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
