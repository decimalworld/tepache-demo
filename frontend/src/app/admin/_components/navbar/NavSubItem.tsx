import { NavSubItemModel } from "@/utils/models";
import Link from "next/link";
import { useState } from "react";

const NavSubItem: React.FC<NavSubItemModel> = ({location, link}) => {
  const [isExpand, setIsExpand] = useState(false)
  return (
      <div className="p-4 text-slate-500 flex justify-between hover:cursor-pointer text-base" onClick={() => setIsExpand(prevState => !prevState)}>
        <Link href={link} className="hover:brightness-125 hover:underline">{location}</Link>
      </div>
  )
}

export default NavSubItem;
