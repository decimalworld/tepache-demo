import { motion } from "framer-motion"

const DropDown: React.FC<{isExpand: boolean}> = ({isExpand}) => {
  return(
    <motion.span
        animate={{rotate: isExpand ? 180 : 0}}
        transition={{duration: 0.2}}
        >
          &#9650;
      </motion.span>
  )
}

export default DropDown
