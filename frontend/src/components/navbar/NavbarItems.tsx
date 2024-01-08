import LeftItemsGroup from "./group/LeftItemsGroup";
import RightItemsGroup from "./group/RightItemsGroup";

const NavbarItems: React.FC = () => {
  return (
    <div className="bg-orange-100 h-[120px] border-b-red-500 border-b-2 flex justify-between px-5 text-red-500">
      <LeftItemsGroup/>
      <RightItemsGroup/>
      <div className="absolute flex h-[120px] left-1/2 right-1/2 uppercase text-xl font-extrabold">
        <span className="m-auto">De La Calle</span>
      </div>
    </div>
  )
}

export default NavbarItems;
