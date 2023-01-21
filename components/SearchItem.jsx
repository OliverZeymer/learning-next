"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const SearchItem = ({ item, setIsOpen, cat, index }) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.25,
          delay: index * 0.1,
          ease: "easeOut",
        },
      }}
      exit={{
        opacity: 0,
        y: -20,
        transition: {
          duration: 0.25,
          ease: "easeOut",
        },
      }}
      key={item.id}
      layout
      className="p-4 text-white border-b-2 max-h-16 border-b-secondary-white/25 last-of-type:border-b-0 sm:hover:bg-black/20 cursor-pointer flex items-center relative transition-colors">
      <Link
        onClick={() => {
          setIsOpen(false);
        }}
        className="flex items-center justify-between w-full"
        href={`/${cat}/${item.id}`}>
        <p className="font-bold">{item.title}</p>
        <img src={item.imgUrl} alt="" className="w-12 h-12 ml-auto object-cover" />
      </Link>
    </motion.li>
  );
};

export default SearchItem;
