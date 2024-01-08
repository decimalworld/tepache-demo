import Announcement from "./Announcement"
import NavbarItems from "./NavbarItems"

const Navbar: React.FC = () => {
  return (
    <div className="sticky top-0 z-50">
      <Announcement/>
      <NavbarItems/>
    </div>
  )
}

export default Navbar
