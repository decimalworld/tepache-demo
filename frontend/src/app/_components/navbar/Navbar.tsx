'use client'
import { useState } from "react";
import Announcement from "./Announcement"
import NavbarItems from "./NavbarItems"
import Cart from "./cart/Cart"
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [showCart, setShowCart] = useState(false);
  const pathname = usePathname();
  const showNav = !pathname.match(/^\/admin/)
  return (
    (showNav && <div className="sticky top-0 z-40">
      <Announcement/>
      <div className="relative">
        <Cart showCart={showCart} handleClose={() => setShowCart(false)}/>
      </div>
      <NavbarItems handleShowCart={() => setShowCart(true)}/>
    </div>)
  )
}

export default Navbar
