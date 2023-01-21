"use cliient";
import { motion } from "framer-motion";
import { useEffect } from "react";

const BackgroundBlur = ({ children, isOpen, setIsOpen }) => {
  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "initial";
    }

    return () => {
      body.style.overflow = "initial";
    };
  }, [setIsOpen]);
  return (
    <motion.div
      onKeyDown={(e) => {
        if (e.keyCode === 27 || e.key === "Escape" || e.key === "Esc") {
          setIsOpen(false);
        }
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="blurry-background fixed w-screen h-screen top-0 left-0 bg-black/50 backdrop-blur-lg z-50 flex flex-col items-center justify-center"
      onClick={(e) => {
        const hasTargetClassName = e.target.className;
        if (typeof hasTargetClassName === "string") {
          if (e.target.className.includes("blurry-background")) {
            setIsOpen(false);
          } else {
            return;
          }
        }
      }}>
      {children}
    </motion.div>
  );
};

export default BackgroundBlur;
