import { Order, ShopItem, ShopPack } from './models';

export const ITEMS: ShopItem[] = [{
  id: 'p1',
  type: 'New Flavor!',
  name: 'Watermelon\njalapeno',
  reviews: 11,
  image: 'https://tepache-mock-1.s3.ap-southeast-1.amazonaws.com/development/flavours/Watermelon+jalapeno.jpg',
  textColor: 'red-500',
  titleColor: 'emerald-500',
  description: "Fruity & Floral\nSpiked with Chilis\nDelicately Balanced"
}, {
  id: 'p2',
  type: 'New Flavor!',
  name: 'Cactus\nprickly pear',
  reviews: 12,
  image: 'https://tepache-mock-1.s3.ap-southeast-1.amazonaws.com/development/flavours/Catus+prickly+pear.jpg',
  textColor: 'fuchsia-500',
  titleColor: 'emerald-500',
  description: "Sweet and Tart\nPerfect Shade of Pink\nNature's Candy"
}, {
  id: 'p3',
  type: 'Fan favorite!',
  name: 'Mango chili',
  reviews: 22,
  image: 'https://tepache-mock-1.s3.ap-southeast-1.amazonaws.com/development/flavours/Mango+chili.jpg',
  textColor: 'red-500',
  titleColor: 'yellow-400',
  description: 'Sweet and Not Too Spicy\nPerfectly Ripe Mongos\nRich with a hint of Spcice'
}, {
  id: 'p4',
  type: 'Thirst quencher!',
  name: 'Ginger\nManzana',
  reviews: 19,
  image: 'https://tepache-mock-1.s3.ap-southeast-1.amazonaws.com/development/flavours/Ginger+manzana.jpg',
  textColor: 'sky-500',
  titleColor: 'yellow-400',
  description: 'Bold Kick of Ginger\nBubbly and Refreshing\nPerfectly Sweet'
}]

export const PACKS: ShopPack[] = [
  {
    id: 'pa1',
    name: "Originales",
    reviews: 179,
    description: "Beloved Flavors\nHealthy Way to Hydrate\nGood for Groups",
    image: "https://tepache-mock-1.s3.ap-southeast-1.amazonaws.com/development/general/originales-pack.jpg",
    type: "Classics for a reason!",
    marker: {
      type: "originales",
      amount: 12,
      unit: "pack"
    }
  }
]

export const USER_ORDER: Order = {
  entries: [
    {
      id: 'pa1',
      name: "Originales",
      reviews: 179,
      description: "Beloved Flavors\nHealthy Way to Hydrate\nGood for Groups",
      image: "https://tepache-mock-1.s3.ap-southeast-1.amazonaws.com/development/general/originales-pack.jpg",
      type: "Classics for a reason!",
      quantity: 1
    }
  ]
}
