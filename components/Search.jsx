import { BsSearch, BsFilter } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import SearchCategory from "./SearchCategory";
import BackgroundBlur from "./BackgroundBlur";

const Search = ({ isSearchOpen, setIsSearchOpen }) => {
  const [openFilter, setOpenFilter] = useState(false);
  const [value, setValue] = useState("");
  return (
    <BackgroundBlur isOpen={isSearchOpen} setIsOpen={setIsSearchOpen}>
      <motion.div
        initial={{ y: 160, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 0.25 } }}
        exit={{
          y: 160,
          opacity: 0,
          scale: 0.75,
          transition: { duration: 0.2 },
        }}
        className="fixed top-1/3 flex flex-col gap-4">
        <label className="flex items-center gap-4 p-2 pl-4 bg-primary-black shadow-xl rounded-lg">
          <BsSearch className="text-white" />
          <input autoFocus type="text" className="w-[50vw] sm:w-[30vw] text-base bg-transparent focus:outline-none text-white" value={value} onChange={(e) => setValue(e.target.value)} />
          <button className={`text-white p-2 rounded transition ${openFilter && `!text-primary-black bg-white`}`} onClick={() => setOpenFilter(!openFilter)}>
            <BsFilter />
          </button>
        </label>
        <AnimatePresence>
          {value && (
            <motion.section
              initial={{ y: 40, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.5, ease: "easeOut" },
              }}
              exit={{ opacity: 0 }}
              className="flex flex-col max-h-96 overflow-y-auto overflow-x-hidden shadow-xl bg-primary-black rounded-lg">
              <SearchCategory cat="worlds" setIsOpen={setIsSearchOpen} search={value} />
            </motion.section>
          )}
        </AnimatePresence>
      </motion.div>
    </BackgroundBlur>
  );
};

export default Search;
