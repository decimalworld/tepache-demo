'use client'
import { motion } from "framer-motion";
import { useState } from "react";

const Cart: React.FC<{showCart: boolean, handleMouseLeave: () => void}> = ({showCart, handleMouseLeave}) => {
  return (
    <div>
      <motion.div 
        className="bg-red-500 w-[475px] h-[1000px] absolute right-0 border-t-2 border-orange-100 z-50"
        animate={{ x: showCart ? 0 : 475 }}
        transition={{ease: "easeInOut", duration: .3}}
        onMouseLeave={handleMouseLeave}
      >
      </motion.div>
    </div>
  )
}

export default Cart
