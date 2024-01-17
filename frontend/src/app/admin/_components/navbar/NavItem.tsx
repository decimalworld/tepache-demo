'use client'
import DropDown from "@/components/DropDown";
import { useState } from "react";

const NavItem: React.FC<{text: string, withDropDown?: boolean}> = ({text, withDropDown=false}) => {
  const [isExpand, setIsExpand] = useState(false)
  return (
    <div className="p-4 text-slate-500 flex justify-between hover:cursor-pointer" onClick={() => setIsExpand(prevState => !prevState)}>
      {text}
      {withDropDown && <DropDown isExpand={isExpand}/>}
    </div>
  )
}

export default NavItem;
