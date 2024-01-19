'use client'
import DropDown from "@/components/DropDown";
import { useState } from "react";
import NavSubItem from "./NavSubItem";
import { motion } from "framer-motion";
import Link from "next/link";
import { NavItemModel } from "@/utils/models";

const NavItem: React.FC<NavItemModel> = ({location, link, subItem}) => {
  const [isExpand, setIsExpand] = useState(false)
  return (
    <>
      <div className="p-4 text-slate-500 flex justify-between font-semibold">
        <Link href={link} className="hover:brightness-125 hover:underline">
          {location}
        </Link>
        {subItem && <DropDown isExpand={isExpand} onClick={() => setIsExpand(prevState => !prevState)}/>}
      </div>
        <motion.div 
          initial={false}
          animate={{ height: isExpand ? "fit-content" : 0 }}
          transition={{ duration: .3 }}
          className="overflow-clip"
          >
        {subItem && subItem.map((item, index) => <NavSubItem {...item} key={index}/>)}
        </motion.div>
    </>
  )
}

export default NavItem;
