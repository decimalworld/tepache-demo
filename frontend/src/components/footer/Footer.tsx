import Image from "next/image"
import Brand from "./Brand"
import FooterNav from "./FooterNav"
import Email from "./Email"

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full h-[200px] relative">
          <Image src="https://tepache-mock-1.s3.ap-southeast-1.amazonaws.com/development/general/footer-pattern.png" fill alt="footer" loading="eager" draggable={false}/>
      </div>
      <div className="h-[300px] bg-red-500 w-full flex">
        <Brand/>
        <FooterNav/>
        <Email/>
      </div>
    </div>
  )
}

export default Footer
