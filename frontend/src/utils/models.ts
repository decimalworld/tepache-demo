export interface Product {
  id: string,
  name: string,
  reviews: number,
  image: string,
  type: string,
  description: string
}

export interface ShopItem extends Product {
  textColor: string,
  titleColor: string,
}

export interface ShopPack extends Product{
  marker: ShopMarker
}

export interface ShopMarker {
  type: string,
  amount: number,
  unit: string
}

export interface Order {
  entries: (Product & {quantity: number})[]
}
