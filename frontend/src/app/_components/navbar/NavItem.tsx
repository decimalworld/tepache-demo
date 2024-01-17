'use client'
import { PropsWithChildren, useState } from "react";
import DropDown from "@/components/DropDown";

const NavItem: React.FC<PropsWithChildren<{withDropDown?: boolean, onClick?: () => void}>> = ({children, withDropDown = true, onClick}) =>{
  const [isExpand, setIsExpand] = useState(false)

  return (
    <div 
      className="my-auto mx-5 flex gap-2 uppercase font-bold hover:cursor-pointer"
      onMouseEnter={() => setIsExpand(true)}
      onMouseLeave={() => setIsExpand(false)}
      onClick={onClick || (() => {})}
      >
      {children}
      {withDropDown && <DropDown isExpand={isExpand}/>}
    </div>
  )
}

export default NavItem
