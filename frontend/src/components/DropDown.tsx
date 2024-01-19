import { motion } from "framer-motion"
import { on } from "process"

const DropDown: React.FC<{isExpand: boolean, onClick?: () => void}> = ({isExpand, onClick}) => {
  return(
    <motion.span
        animate={{rotate: isExpand ? 180 : 0}}
        transition={{duration: 0.2}}
        className="hover:cursor-pointer"
        onClick={onClick}
        >
          &#9650;
      </motion.span>
  )
}

export default DropDown
