import { ShopItem } from "@/utils/models";

const DescriptionGroup: React.FC<{item: ShopItem}> = ({ item }) => {
  const { textColor, name, reviews, description } = item;
  return (
    <div className={`text-${textColor} flex flex-col gap-5 h-[350px] whitespace-pre-wrap`}>
      <div className={`text-5xl font-extrabold`}>
        {name}
      </div>
      <div className="gap-2 flex">
        <span className="text-2xl">
          { [...Array(5)].map(() => <span>&#9733;</span>) }
        </span>
        <span className="mb-0 mt-auto text-lg">
          {` ${reviews > 1 ? 'Reviews' : 'Review'} ${reviews}`}
        </span>
      </div>
      <div>
        <span className="text-lg">{description}</span>
      </div>
    </div>
  )
};

export default DescriptionGroup;
