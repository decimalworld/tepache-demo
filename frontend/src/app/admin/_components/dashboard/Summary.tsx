import Image from "next/image"

const TOTAL_SALES = {
  title: 'Total sales',
  display: '$123,456',
  image: 'https://tepache-mock-1.s3.ap-southeast-1.amazonaws.com/development/general/coin-svgrepo-com.svg'
}

const TOTAL_ORDERS = {
  title: 'Total orders',
  display: '3290',
  image: 'https://tepache-mock-1.s3.ap-southeast-1.amazonaws.com/development/general/cart-svgrepo-com.svg'
}

const TOTAL_PRODUCTS = {
  title: 'Total products',
  display: '322',
  image: 'https://tepache-mock-1.s3.ap-southeast-1.amazonaws.com/development/general/package-svgrepo-com.svg'
}

const SummaryPanel: React.FC<{title: string, display: string, image: string}> = ({title, display, image}) => {
  return (
    <div className="flex w-96 h-32 bg-white gap-5">
      <div className="w-20 h-20 bg-gray-100 my-auto mx-4 rounded-full flex">
        <div className="w-16 h-16 relative m-auto">
          <Image src={image} fill alt="money icon"/>
        </div>
      </div>
      <div className="h-20 my-auto flex flex-col justify-around">
        <div className="text-lg text-gray-500 font-semibold">{title}</div>
        <div className="text-2xl font-bold">{display}</div>
      </div>
    </div>
  )
}

const Summary: React.FC = () => {
  return <div className="flex justify-between">
    <SummaryPanel {...TOTAL_SALES}/>
    <SummaryPanel {...TOTAL_ORDERS}/>
    <SummaryPanel {...TOTAL_PRODUCTS}/>
  </div>
}

export default Summary
