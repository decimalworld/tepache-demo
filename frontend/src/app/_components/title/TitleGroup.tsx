'use client'
import Image from "next/image"
import ParadeGroup from "./ParadeGroup"
import TitleText from './TitleText'

const TITLE_IMAGE = 'https://tepache-mock-1.s3.ap-southeast-1.amazonaws.com/development/general/Title+image.png'

const TitleGroup: React.FC = () => {
  return (
    <>
      <div className="relative h-[750px] flex flex-col">
        <div className="w-full h-full -z-10 absolute">
          <Image src={TITLE_IMAGE} alt='Title image' fill priority/>
        </div>
        <div className="w-full flex m-auto">
          <TitleText/>
        </div>
      </div>
      <div className="-mx-5 -mt-[70px] mb-20">
        <ParadeGroup/>
      </div>
    </>
  )
}

export default TitleGroup;
