import Link from "next/link"
import { motion } from "framer-motion"
const NavigationMenu = () => (
  <motion.ul
    initial={{ x: "100%" }}
    animate={{ x: 0 }}
    exit={{ x: "100%" }}
    transition={{ duration: 0.3 }}
    className=" 
    select-none
    fixed
  top-0
  right-0
  h-screen
  w-[25vw]
  bg-gradient-to-b
  from-violet-800
  to-purple-900
  z-50
  shadow-2xl
  rounded-l-3xl
  p-8
  flex
  flex-col
  gap-8
  justify-center
  items-center
  text-2xl
  font-bold
  text-white
  ">
    <li className="hover:text-gray-600 ">
      <Link href="/"> Home </Link>
    </li>

    <li className="hover:text-gray-600 ">
      <Link href="/"> Explore </Link>
    </li>
    <li className="hover:text-gray-600 ">
      <Link href="/"> Contact </Link>
    </li>
  </motion.ul>
)

export default NavigationMenu
