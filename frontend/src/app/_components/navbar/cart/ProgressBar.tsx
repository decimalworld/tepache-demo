import usePostLoad from "@/hooks/usePostLoad";
import { useRef } from "react";

const ProgressBar: React.FC<{progress: number}> = ({progress}) => {
  const barRef = useRef<HTMLDivElement | null>(null)
  
  const {getResult} = usePostLoad<number>(() => barRef.current!.offsetWidth * progress)

  const width:number = getResult() || 0

  return (
    <div className="h-6 mx-5 border-2 border-orange-100 flex" ref={barRef}>
      <div className="h-4 bg-orange-100 my-auto mx-1 w-1/2" style={{width: width}}/>
    </div>
  )
}

export default ProgressBar;
