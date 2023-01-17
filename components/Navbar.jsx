"use client"

import { AnimatePresence, motion } from "framer-motion"
import styles from "../styles"
import { navVariants } from "../utils/motion"
import { BsSearch, BsX } from "react-icons/bs"
import { CgMenuRight } from "react-icons/cg"
import { useState } from "react"
import NavigationMenu from "./NavigationMenu"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <motion.nav variants={navVariants} initial="hidden" whileInView="show" className={`${styles.xPaddings} py-8 relative text-white`}>
      <div className="absolute w-1/2 inset-0 gradient-01"></div>
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
        <BsSearch className="w-6 h-6 object-contain cursor-pointer" />
        <h2 className="font-extrabold text-2xl leading-8 ">METAVERSUS</h2>
        {!isMenuOpen ? (
          <CgMenuRight size={24} className="w-6 h-6 cursor-pointer z-[999]" onClick={() => setIsMenuOpen(!isMenuOpen)} />
        ) : (
          <BsX size={24} className="w-6 h-6 cursor-pointer z-[999]" onClick={() => setIsMenuOpen(!isMenuOpen)} />
        )}
      </div>
      <AnimatePresence>{isMenuOpen && <NavigationMenu />}</AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
