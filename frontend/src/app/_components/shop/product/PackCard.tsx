import { ShopPack } from "@/utils/models"
import Image from "next/image";
import DescriptionGroup from "./DescriptionGroup";
import ButtonGroup from "./ButtonGroup";

const PackCard: React.FC<{ item: ShopPack }> = ({ item }) => {
  const {type, name , image} = item;
  return (
    <div className="min-w-[420px] w-[420px]">
      <div className={`bg-white text-red-500 font-semibold uppercase py-1 px-2`}>{type}</div>
      <div className="h-60 relative">
        <Image src={image} alt={name} fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
      </div>
      <div className={`py-6 px-8 border-2 border-white flex flex-col justify-between h-[410px]`}>
        <DescriptionGroup item={{...item, textColor: "white",titleColor: "white"}}/>
        <ButtonGroup bgColor="red-500" textColor="white"/>
      </div>
    </div>
  )
}

export default PackCard
