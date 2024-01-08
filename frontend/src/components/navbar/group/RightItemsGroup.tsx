import NavItem from "../NavItem";
import NavItemsGroup from "./NavItemsGroup";

const RightItemsGroup: React.FC = () => {
  return (
    <NavItemsGroup>
      <NavItem withDropDown={false}>Sign In</NavItem>
      <NavItem withDropDown={false}>Cart</NavItem>
    </NavItemsGroup>
  )
};

export default RightItemsGroup;
