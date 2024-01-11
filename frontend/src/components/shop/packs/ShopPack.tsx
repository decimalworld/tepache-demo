import Image from "next/image"
import PackGroup from "./PackGroup";

const ShopPack: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full h-fit my-16 flex flex-col">
        <div className="h-[725px] relative">
          <Image src="https://tepache-mock-1.s3.ap-southeast-1.amazonaws.com/development/general/DLC-New_Flavors.jpg" alt="new flavours" fill/>
        </div>
        <div className="bg-red-500 rotate-2 h-[1000px] w-110% -mx-5 -my-10 border-t-4 border-orange-100">
          <div className="text-center text-8xl uppercase font-bold text-white my-16">Shop variety packs</div>
          <PackGroup/>
        </div>
      </div>
    </div>
  )
}

export default ShopPack;
