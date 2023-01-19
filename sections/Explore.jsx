"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { ExploreCard, TitleText, TypingText } from "../components";
import { exploreWorlds } from "../constants";

const Explore = () => {
  const [activeCard, setActiveCard] = useState("world-2");
  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className={`${styles.innerWidth} flex flex-col`}>
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Choose the world you want <br className="md:block hidden" /> to explore
            </>
          }
          textStyles="text-center z-10"
        />
        <div className="mt-10 flex lg:flex-row flex-col min-h-[70vh] lg:min-h-0 gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard key={world.id} {...world} index={index} activeCard={activeCard} handleClick={setActiveCard} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
export default Explore;
