import SearchItem from "./SearchItem"
import { AnimatePresence, motion } from "framer-motion"
import { exploreWorlds } from "../constants"
const SearchCat = ({ cat, search, setIsOpen }) => {
  //filter through data with the search value
  const filteredData = exploreWorlds.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
  return (
    <motion.ul>
      <h3 className="px-4 py-2 uppercase tracking-wider text-primary-black font-bold bg-primary-black/10">{cat}</h3>
      <AnimatePresence>
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => <SearchItem key={item.id} item={item} setIsOpen={setIsOpen} cat={cat} index={index} />)
        ) : (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-4 text-primary-black uppercase tracking-wider font-extrabold">
            No results found
          </motion.p>
        )}
      </AnimatePresence>
    </motion.ul>
  )
}

export default SearchCat
