import Button from "./Button";

const ButtonGroup: React.FC<{bgColor: string, textColor: string}> = ({bgColor, textColor}) => {
  return (
    <div className="flex flex-col gap-4 uppercase">
      <Button bgColor={bgColor} textColor={textColor}>
        Add to cart
      </Button>
      <Button textColor={bgColor} bgColor={textColor}>
        Shop now
      </Button>
    </div>
  )
};

export default ButtonGroup;
