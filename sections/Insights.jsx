"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { InsightCard, TitleText, TypingText } from "../components";
import { insights } from "../constants";
const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.25,
      }}
      className={`${styles.innerWidth} flex flex-col`}>
      <TypingText title="| Insight" textStyles="text-center" />
      <TitleText title={<>Insight about Metaverse</>} textStyles="text-center" />
      <div className="mt-12  flex flex-col gap-8">
        {insights.map((insight, index) => (
          <InsightCard key={`insight-${index}`} index={index + 1} {...insight} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
