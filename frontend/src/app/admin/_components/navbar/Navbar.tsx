import { PropsWithChildren } from "react"
import NavItem from "./NavItem";

const ITEMS: {location: string, link: string, subItem?: {location: string, link: string}[]}[] = [
  {
    location: 'Products',
    link: '/admin/products',
    subItem: [
      {
        location: 'Product list',
        link: '/admin/products'
      }, 
      {
        location: 'Add product',
        link: './admin/products/new'
      },
      {
        location: 'Product stocks',
        link: './admin/products/stocks'
      }],
  }, 
  {
    location: 'Orders',
    link: '/admin/orders',
  }, 
  {
    location: 'Subscribers',
    link: '/admin/subscribers',
  }];

const Navbar: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div className="flex w-full h-fit">
      <div className="border-2 border-gray-100 flex flex-col w-64 min-w-64 shadow-xl">
        <div className="h-20 border-b-2 border-gray-100 flex flex-col justify-center px-4">
          <div className="text-2xl font-bold text-blue-500">Admin</div>
          <div className="text-sm -my-2 text-gray-400">Tepache</div>
        </div>
        <div className="text-lg font-bold p-4 text-slate-500">Dashboard</div>
        {ITEMS.map((item,index) => <NavItem key={index} {...item}></NavItem>)}
      </div>
      {children}
    </div>
  )
}

export default Navbar
