import NavItem from "../NavItem";
import NavItemsGroup from "./NavItemsGroup";

const RightItemsGroup: React.FC<{handleShowCart: () => void}> = ({handleShowCart}) => {
  return (
    <NavItemsGroup>
      <NavItem withDropDown={false}>Sign In</NavItem>
      <NavItem withDropDown={false} onClick={handleShowCart}>Cart</NavItem>
    </NavItemsGroup>
  )
};

export default RightItemsGroup;
