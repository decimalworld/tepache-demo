export interface ShopItem {
  id: string,
  type: string,
  name: string,
  reviews: number,
  image: string,
  textColor: string,
  titleColor: string,
  description: string 
}

export interface ShopPack {
  id: string,
  type: string,
  name: string,
  reviews: number,
  image: string,
  description: string,
  marker: ShopMarker
}

export interface ShopMarker {
  type: string,
  amount: number,
  unit: string
}
