"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import { BsSearch } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative text-white`}>
    <div className="absolute w-1/2 inset-0 gradient-01"></div>
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <BsSearch className="w-6 h-6 object-contain " />
      <h2 className="font-extrabold text-2xl leading-8 ">METAVERSUS</h2>
      <CgMenuRight className="w-6 h-6 object-contain" />
    </div>
  </motion.nav>
);

export default Navbar;
