'use client'
import ParadeItem from "./ParadeItem";
import { motion } from "framer-motion"; 

const paradeTexts = ["Low in sugar", "Less than 45 calories", "Fermented", "Certified organic"];

const ParadeGroup: React.FC<{className?: string}> = ({className}) => {

  return (
    <div className="flex overflow-hidden w-min-[4000px] w-[4000px] -rotate-2">
      <motion.div
        className={`flex w-full ${className}`}
        animate={{x: -2000}}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >  
          {paradeTexts.map((paradeText, index) => <ParadeItem key={`l${index}`} text={paradeText}/>)}
          {paradeTexts.map((paradeText, index) => <ParadeItem key={`r${index}`} text={paradeText}/>)}
      </motion.div> 
    </div>
  )
};

export default ParadeGroup;
