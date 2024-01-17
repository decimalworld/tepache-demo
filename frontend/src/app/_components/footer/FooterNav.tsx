import { PropsWithChildren } from "react"
import FooterGroup from "./FooterGroup"


const NAVIGATORS: {name: string, link?: string}[][] = [
  [
    {name: "subscribe"},
    {name: "find a store"},
    {name: "faq"},
    {name: "careers"},
    {name: "blog"}
  ],
  [
    {name: "shop"},
    {name: "familia"},
    {name: "history"},
    {name: "contact"},
    {name: "ccpa opt-out"},
    {name: "sponsor requests"},
  ],
  [
    {name: "terms"},
    {name: "privacy"},
    {name: "returns"},
    {name: "log in"},
    {name: "wholesale inquiries"},
    {name: "shipping"},
  ]
]

const NavRow: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div className="uppercase font-extrabold hover:cursor-pointer hover:underline hover:brightness-125">
      {children}
    </div>
  )
}

const NavCol: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div className="flex-grow px-2 flex flex-col gap-2 font-bold uppercase">
      {children}
    </div>
  )
}

const FooterNav: React.FC = () => {
  return (
    <FooterGroup className="w-[40%] h-full flex justify-between">
      {NAVIGATORS.map((navcol, cindex) => (
        <NavCol key={cindex}>{navcol.map((nav, rindex) => (
            <NavRow key={rindex}>{nav.name}</NavRow>
          ))}</NavCol>
        ))}
    </FooterGroup>
  )
};

export default FooterNav;
