import { ITEMS } from "@/utils/database"
import ItemCard from "../product/ItemCard"

const FlavourGroup: React.FC = () => {
  return (
    <div className="flex gap-10 my-5">
      { ITEMS.map(item => <ItemCard key={item.id} item={item}/>)}
    </div>
  )
}

export default FlavourGroup
