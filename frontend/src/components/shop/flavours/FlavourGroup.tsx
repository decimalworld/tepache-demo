import { ITEMS } from "@/utils/database"
import FlavourItem from "./FlavourItem"

const FlavourGroup: React.FC = () => {
  return (
  <div className="flex gap-10 my-5">
    { ITEMS.map(item => <FlavourItem item={item}/>)}
  </div>
  )
}

export default FlavourGroup
