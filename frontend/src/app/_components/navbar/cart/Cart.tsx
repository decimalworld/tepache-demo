'use client'
import { motion } from "framer-motion";
import ProgressPromote from "./ProgressPromote";

const Cart: React.FC<{showCart: boolean, handleClose: () => void}> = ({showCart, handleClose}) => {
  return (
    <div>
      <motion.div 
        className="bg-red-500 h-[1000px] absolute right-0 border-t-2 border-orange-100 z-50 flex flex-col overflow-clip"
        initial={{ width: 0 }}
        animate={{ width: showCart ? 475: 0 }}
        transition={{ease: "easeInOut", duration: .3}}
      >
        <div className="w-[475px]">
          <div className="h-6 flex my-2">
            <div className="ml-auto mr-2 h-5 w-5 bg-orange-100 hover:cursor-pointer cross-shape" onClick={handleClose}/>
          </div>
          <ProgressPromote/>
        </div>
      </motion.div>
    </div>
  )
}

export default Cart
