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

export interface NavSubItemModel {
  location: string,
  link: string
}

export interface NavItemModel {
  location: string, 
  link: string, 
  subItem?: NavSubItemModel[]
}

export interface Selection {
  text: string,
  value: string
}

export interface InputHandlingImperative {
  getValue: () => any,
  reset: () => void
}
