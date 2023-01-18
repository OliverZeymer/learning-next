import Link from "next/link";
import { motion } from "framer-motion";
import ClickAwayListener from "@mui/base/ClickAwayListener";
const NavigationMenu = ({ setIsMenuOpen }) => (
  <ClickAwayListener onClickAway={() => setIsMenuOpen(false)}>
    <motion.ul
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.3 }}
      className=" 
    select-none fixed top-0 left-0 h-screen bg-gradient-to-b from-violet-800 to-purple-900 z-40 shadow-2xl rounded-r-3xl p-8 flex flex-col gap-8 justify-center items-center text-2xl font-bold text-white ">
      <li className="hover:text-secondary-white transition-colors">
        <Link href="/"> Home </Link>
      </li>

      <li className="hover:text-secondary-white transition-colors">
        <Link href="/"> Explore </Link>
      </li>
      <li className="hover:text-secondary-white transition-colors">
        <Link href="/"> Contact </Link>
      </li>
    </motion.ul>
  </ClickAwayListener>
);

export default NavigationMenu;
