import { ShopItem } from "@/utils/models"
import ItemCard from "../product/ItemCard"
import { indexProductFn } from "@/api/ProductsFlavor"

async function getData() {
  try{
    const res = await indexProductFn("flavors")()
    const flavors = (await res.json()).data.items
    return flavors
  } catch (e) {
    return []
  }
}

const FlavourGroup: React.FC = async () => {
  const flavors = await getData()
  return (
    <div className="flex gap-10 my-5">
      { flavors.map((item: ShopItem) => <ItemCard key={item.id} item={item}/>)}
    </div>
  )
}

export default FlavourGroup
