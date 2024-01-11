import { PACKS } from "@/utils/database";
import PackCard from "../product/PackCard";

const PackGroup: React.FC = () => {
  return (
    <div className="-rotate-2 w-[92%] mx-auto h-fit">
      { PACKS.map(pack => <PackCard key={pack.id} item={pack}/>) }
    </div>
  )
}

export default PackGroup;
