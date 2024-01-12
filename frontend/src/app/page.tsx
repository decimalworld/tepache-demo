import Footer from '@/components/footer/Footer'
import IntroGroup from '@/components/intro/IntroGroup'
import ShopFlavour from '@/components/shop/flavours/ShopFlavour'
import ShopPack from '@/components/shop/packs/ShopPack'
import TitleGroup from '@/components/title/TitleGroup'

export default function Home() {
  return (
    <div className="overflow-clip">
      <TitleGroup/>
      <ShopFlavour/>
      <ShopPack/>
      <IntroGroup/>
      <div className="h-[300px]"/>
      <Footer/>
    </div>
  )
}
