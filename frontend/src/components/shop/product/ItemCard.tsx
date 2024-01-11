import { ShopItem } from "@/utils/models"
import Image from "next/image";
import DescriptionGroup from "./DescriptionGroup";
import ButtonGroup from "./ButtonGroup";

const ItemCard: React.FC<{ item: ShopItem }> = ({ item }) => {
  const {type, name , image, titleColor, textColor} = item;
  return (
    <div className="min-w-[420px] w-[420px]">
      <div className={`bg-${titleColor} text-${textColor} uppercase font-semibold py-1 px-2`}>{type}</div>
      <div className="h-60 relative">
        <Image src={image} alt={name} fill={true}/>
      </div>
      <div className={`py-6 px-8 border-2 border-${textColor} flex flex-col justify-between h-[410px]`}>
        <DescriptionGroup item={item}/>
        <ButtonGroup bgColor={textColor} textColor="orange-100"/>
      </div>
    </div>
  )
}

export default ItemCard
