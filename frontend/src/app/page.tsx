import ShopFlavour from '@/components/shop/flavours/ShopFlavour'
import ShopPack from '@/components/shop/packs/ShopPack'
import TitleGroup from '@/components/title/TitleGroup'

export default function Home() {
  return (
    <div className="overflow-clip">
      <TitleGroup/>
      <ShopFlavour/>
      <ShopPack/>
      <div className="h-[1000px]"/>
    </div>
  )
}
