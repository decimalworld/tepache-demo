import { PropsWithChildren } from "react"
import NavItem from "./NavItem";

const ITEMS: {text: string, withDropDown: boolean}[] = [
  {
    text: 'Products',
    withDropDown: true
  }, 
  {
    text: 'Orders',
    withDropDown: false
  }, 
  {
    text: 'Subscribers',
    withDropDown: false
  }];

const Navbar: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div className="flex w-full h-screen">
      <div className="border-2 border-gray-100 flex flex-col h-full w-64 min-w-64 shadow-xl">
        <div className="h-20 border-b-2 border-gray-100 flex flex-col justify-center px-4">
          <div className="text-2xl font-bold text-blue-500">Admin</div>
          <div className="text-sm -my-2 text-gray-400">tepache</div>
        </div>
        <div className="text-lg font-bold p-4 text-slate-500">Dashboard</div>
        {ITEMS.map((item,index) => <NavItem key={index} {...item}></NavItem>)}
      </div>
      {children}
    </div>
  )
}

export default Navbar
