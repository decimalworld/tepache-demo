import { PropsWithChildren } from "react"
import NavBar from "./_components/navbar/Navbar"

const AdminLayout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <NavBar>
      {children}
    </NavBar>
  )
}

export default AdminLayout
