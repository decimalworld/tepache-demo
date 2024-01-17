import Button from "../shop/product/Button"

const TextGroup: React.FC = () => {
  return (
    <div className="rotate-2 h-fit flex w-[110%] -ml-5 relative z-10">
      <div className="w-1/2 text-8xl whitespace-pre-wrap uppercase font-extrabold py-36 ml-20 text-center">
          {"A Cultured\nmodern\ntradition"}
      </div>
      <div className="w-1/2 text-center my-auto mr-24 ml-auto whitespace-pre-wrap flex flex-col gap-4">
        <div className="mx-auto text-lg uppercase font-semibold">
        {
          "Discorver the authentic tastes from the streets of\nMexico and toast to modern flavors with traditional\ninspiration\nTepache is a naturally fermented beverage made with\npineapples, spices and tropical fruits. We've\ncrafted our recipes by taking inspiration from\nregions throughout Mexico, creating deliciously\nbold combinations."
        }
        </div>
        <div className="flex flex-col mx-auto">
          <div className="w-[150px]">
            <Button bgColor="orange-100" textColor="red-500">
              About us
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-16 flex w-full">
        <div className="border-orange-100 bg-red-500 mx-auto text-center h-fit w-[350px] border-2 whitespace-pre-wrap uppercase font-bold text-2xl">
          {"A delicious and\nhealthy\nalternative to\nsoda!"}
        </div>
      </div>
    </div>
  )
}

export default TextGroup
