import { Order, ShopPack } from './models';

export const PACKS: ShopPack[] = [
  {
    id: 'pa1',
    name: "Originales",
    reviews: 179,
    description: "Beloved Flavors\nHealthy Way to Hydrate\nGood for Groups",
    image_full_link: "https://tepache-mock-1.s3.ap-southeast-1.amazonaws.com/development/general/originales-pack.jpg",
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
      image_full_link: "https://tepache-mock-1.s3.ap-southeast-1.amazonaws.com/development/general/originales-pack.jpg",
      type: "Classics for a reason!",
      quantity: 1
    }
  ]
}
