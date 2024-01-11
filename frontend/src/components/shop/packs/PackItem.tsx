import { ShopPack } from "@/utils/models"
import Image from "next/image"

const PackItem: React.FC<{pack: ShopPack}> = ({pack}) => {
  const { type, image, name } = pack
  
  return (
    <div className="w-m-[420px] w-[420px] h-fit">
      <div className="bg-white text-red-500 uppercase px-4 py-1 font-semibold">
        {type}
      </div>
      <div className="h-60 relative">
        <Image src={image} alt={name} fill={true}/>
      </div>
      <div className="px-4 py-6 border-2 border-white h-[280px] flex justify-between">
        <div className="font-bold uppercase text-white text-5xl">
          {name}
        </div>
      </div>
    </div>
  )
}

export default PackItem
