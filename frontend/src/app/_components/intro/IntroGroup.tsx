import Image from "next/image";
import TextGroup from "./TextGroup";

const IntroGroup: React.FC = () => {
  return (
    <div className="mt-8 w-full bg-red-500 text-orange-100">
      <TextGroup/>
      <div className="h-[700px]">
        <div className="w-[110%] h-[950px] -ml-10 relative z-0 rotate-2 border-b-2 border-red-500">
          <Image 
            src="https://tepache-mock-1.s3.ap-southeast-1.amazonaws.com/development/general/DLC-New_Flavors-JStrutz.jpg"
            alt="new flavor"
            fill
          />
        </div>
      </div>
    </div>
  )
}

export default IntroGroup;
