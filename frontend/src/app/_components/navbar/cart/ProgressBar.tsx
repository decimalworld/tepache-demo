import { useEffect, useRef, useState } from "react";

const ProgressBar: React.FC<{progress: number}> = ({progress}) => {
  const [progressWidth, setProgressWidth] = useState(0);
  const [loaded, setLoaded] = useState(false)
  const barRef = useRef<HTMLDivElement | null>(null)
  
  if (loaded) setProgressWidth(barRef.current!.offsetWidth * progress)
  
  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <div className="h-6 mx-5 border-2 border-orange-100 flex" ref={barRef}>
      <div className="h-4 bg-orange-100 my-auto mx-1 w-1/2" style={{width: progressWidth}}/>
    </div>
  )
}

export default ProgressBar;
