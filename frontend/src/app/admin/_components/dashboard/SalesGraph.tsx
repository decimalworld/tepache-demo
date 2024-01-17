import { useState } from "react";

const SALES_STAT = {
  "Jan": 1961,
  "Feb": 1872,
  "Mar": 1435,
  "Apr": 1443,
  "May": 1710,
  "Jun": 1171,
  "Jul": 1555,
  "Aug": 1492,
  "Sep": 1643,
  "Oct": 1057,
  "Nov": 1073,
  "Dec": 1004,
}

const GraphGrid: React.FC<{value: number}> = ({value}) => {
  return (
    <div className="flex w-full gap-2 z-0">
      <div className="w-10 text-start -mt-3">{`$${value}`}</div>
      <div className="border-t-2 border-gray-200 w-full"></div>
    </div>
  )
}

const GraphBar: React.FC<{text: string, value: number, max: number}> = ({text, value, max}) => {
  const [hover, setHover] = useState(false);
  const percent:string = Math.round(value/max * 100).toString() + "%"
  return (
    <div className="flex flex-col pt-auto pb-0 h-full justify-end overflow-visible">
      <div 
        className="flex-grow flex hover:brightness-125"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        >
        <div 
          className="w-[6px] bg-blue-500 mx-auto mt-auto mb-0 rounded-t-xl relative"
          style={{height: percent}}
          >
            <div className="absolute -top-8 -left-4 rounded-md bg-blue-500" hidden={!hover}>{value}</div>
          </div>
      </div>
      <div className="h-6">{text}</div>
    </div>
  )
}

const SalesGraph: React.FC = () => {
  const max: number = Object.values(SALES_STAT).reduce((max, val) => val > max ? val : max, 10)
  
  const normalizer: number = Number('1' + '0'.repeat(max.toString().length-2));
  const absoluteMax: number = Math.ceil(max / (4 * normalizer)) * (4 * normalizer)
  const graphBench = [4,3,2,1,0].map(val => absoluteMax/4*val)

  return(
    <div className="bg-white w-[792px] h-fit p-4 flex flex-col gap-2">
      <div className="font-semibold">
        Sales statistics
      </div>
      <div className="w-full flex-grow">
        <div className="h-[200px] relative">
          <div className="absolute bg-transparent flex flex-col justify-between w-full h-[200px] pb-6 pt-4 pr-2 top-0">
              {graphBench.map((value, index) => <GraphGrid value={value} key={`g${index}`}/>)}
          </div>
          <div className="absolute bg-transparent pl-12 pr-2 pb-3 pt-4 justify-evenly flex w-full h-[200px]">
                {Object.entries(SALES_STAT).map(([key, val], index) => <GraphBar text={key} value={val} max={max} key={`b${index}`}/>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SalesGraph;
