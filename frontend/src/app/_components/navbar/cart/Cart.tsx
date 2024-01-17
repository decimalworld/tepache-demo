'use client'
import { motion } from "framer-motion";
import ProgressPromote from "./ProgressPromote";

const Cart: React.FC<{showCart: boolean, handleClose: () => void}> = ({showCart, handleClose}) => {
  return (
    <div>
      <motion.div 
        className="bg-red-500 w-[475px] h-[1000px] absolute right-0 border-t-2 border-orange-100 z-50 flex flex-col"
        initial={{ x: 475 }}
        animate={{ x: showCart ? 0 : 475 }}
        transition={{ease: "easeInOut", duration: .3}}
      >
        <div className="h-6 w-full flex my-2">
          <div className=" close-button ml-auto mr-2 h-5 w-5 bg-orange-100" onClick={handleClose}/>
        </div>
        <ProgressPromote/>
      </motion.div>
    </div>
  )
}

export default Cart
