'use client'
import { PropsWithChildren, useState } from "react";
import { motion } from "framer-motion";

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

const NavItem: React.FC<PropsWithChildren<{withDropDown?: boolean}>> = ({children, withDropDown = true}) =>{
  const [isExpand, setIsExpand] = useState(false)

  return (
    <div 
      className="my-auto mx-5 flex gap-2 uppercase font-bold"
      onMouseEnter={() => setIsExpand(true)}
      onMouseLeave={() => setIsExpand(false)}
      >
      {children}
      {withDropDown && <DropDown isExpand={isExpand}/>}
    </div>
  )
}

export default NavItem
