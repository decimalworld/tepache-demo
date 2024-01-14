'use client'
import { useState } from "react";
import Announcement from "./Announcement"
import NavbarItems from "./NavbarItems"
import Cart from "./cart/Cart"

const Navbar: React.FC = () => {
  const [showCart, setShowCart] = useState(false);
  return (
    <div className="sticky top-0 z-40">
      <Announcement/>
      <div className="relative">
        <Cart showCart={showCart} handleMouseLeave={() => setShowCart(false)}/>
      </div>
      <NavbarItems handleShowCart={() => setShowCart(true)}/>
    </div>
  )
}

export default Navbar
