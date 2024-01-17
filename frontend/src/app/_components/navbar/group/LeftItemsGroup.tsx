import NavItem from "../NavItem";
import NavItemsGroup from "./NavItemsGroup";

const LeftItemsGroup: React.FC = () => {
  return (
    <NavItemsGroup>
      <NavItem>Shop</NavItem>
      <NavItem>About</NavItem>
      <NavItem withDropDown={false}>Subscription</NavItem>
    </NavItemsGroup>
  )
}

export default LeftItemsGroup;
