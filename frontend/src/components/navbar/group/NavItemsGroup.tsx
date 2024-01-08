import { PropsWithChildren } from "react";

const NavItemsGroup: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex gap-5">
      {children}
    </div>
  )
}

export default NavItemsGroup;
