"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const ExploreCard = ({ id, imgUrl, title, index, activeCard, handleClick }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`
    relative ${
      activeCard === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
    } flex items-center justify-center select-none text-white min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
      onClick={() => handleClick(id)}>
      <img src={imgUrl} alt={title} className="absolute w-full h-full object-cover rounded-3xl" />
      {activeCard !== id ? (
        <h3 className="font-semibold sm:text-2xl lg:mb-8 text-lg lg:bottom-20 absolute truncate z-0 lg:rotate-[-90deg] lg:origin-[0,0]">{title}</h3>
      ) : (
        <motion.div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-3xl">
          <div className="w-16 h-16 rounded-3xl glassmorhphism mb-4">
            <img src="/headset.svg" alt="headset" className="w-1/2 h-1/2 object-contain" />
          </div>
          <p className="font-normal text-lg leading-5 text-white uppercase lg:truncate">Enter the Metaverse</p>
          <h2 className="mt-6 font-semibold sm:text-3xl text-2xl text-white lg:truncate">{title}</h2>
        </motion.div>
      )}
    </motion.div>
  );
};
export default ExploreCard;
