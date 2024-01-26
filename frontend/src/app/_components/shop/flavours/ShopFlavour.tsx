import { Suspense } from "react"
import FlavourGroup from "./FlavourGroup"

const ShopFlavour: React.FC = () => {
  return (
    <div className="mx-8 flex flex-col">
      <div className="font-extrabold text-8xl text-center -rotate-2 text-red-500 my-16 overflow-hidden">
        Shop Flavours
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <FlavourGroup/>
      </Suspense>
    </div>
  )
}

export default ShopFlavour
