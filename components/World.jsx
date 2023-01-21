"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
export function World({ index, world }) {
  const router = useRouter();
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      variants={fadeIn("up", "spring", index * 0.4, 0.75)}
      onClick={() => router.push(`/worlds/${world.id}`)}
      className="flex flex-col justify-end grid-rows-2 gap-6 cursor-pointer">
      <h1 className="text-3xl md:text-5xl xl:text-6xl text-white">{world.title}</h1>
      <img src={world.imgUrl} className="max-w-4xl w-full md:rounded-2xl md:h-[250px]" alt="" />
    </motion.div>
  );
}
