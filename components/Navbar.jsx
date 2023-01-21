"use client";
import { AnimatePresence, motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import NavigationMenu from "./NavigationMenu";
import { Fade as Hamburger } from "hamburger-react";
import Search from "./Search";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <header>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
        }}
        className={`${styles.xPaddings} py-8 relative text-white`}>
        <div className="absolute w-1/2 inset-0 gradient-01"></div>
        <div className={`${styles.innerWidth} flex justify-between items-center`}>
          <Hamburger size={24} toggled={isMenuOpen} toggle={setIsMenuOpen} />
          <h2 className="font-extrabold text-2xl leading-8 z-10">
            <Link href="/">METAVERSUS </Link>
          </h2>
          <BsSearch onClick={() => setIsSearchOpen(true)} className="w-6 h-6 relative p-3 box-content object-contain cursor-pointer z-50" />
        </div>
      </motion.nav>
      <AnimatePresence>{isMenuOpen && <NavigationMenu setIsMenuOpen={setIsMenuOpen} />}</AnimatePresence>
      <AnimatePresence>{isSearchOpen && <Search isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />}</AnimatePresence>
    </header>
  );
};

export default Navbar;
