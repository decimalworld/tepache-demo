import Button from "./Button";

const ButtonGroup: React.FC<{bgColor: string}> = ({bgColor}) => {
  return (
    <div className="flex flex-col gap-4 uppercase">
      <Button bgColor={bgColor} textColor="orange-100">
        Add to cart
      </Button>
      <Button textColor={bgColor} bgColor="orange-100">
        Shop now
      </Button>
    </div>
  )
};

export default ButtonGroup;
