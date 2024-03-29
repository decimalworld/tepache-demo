import Footer from './_components/footer/Footer'
import TitleGroup from './_components/title/TitleGroup'
import ShopFlavour from './_components/shop/flavours/ShopFlavour'
import ShopPack from './_components/shop/packs/ShopPack'
import IntroGroup from './_components/intro/IntroGroup'

export default async function Home() {
  return (
    <div className="overflow-hidden bg-orange-100">
      <TitleGroup/>
      <ShopFlavour/>
      <ShopPack/>
      <IntroGroup/>
      <div className="h-[300px]"/>
      <Footer/>
    </div>
  )
}
