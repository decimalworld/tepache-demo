import ShopFlavour from '@/components/shop/flavours/ShopFlavour'
import TitleGroup from '@/components/title/TitleGroup'

export default function Home() {
  return (
    <div className="overflow-clip">
      <TitleGroup/>
      <ShopFlavour/>
      <div className="h-[1000px]"/>
    </div>
  )
}
