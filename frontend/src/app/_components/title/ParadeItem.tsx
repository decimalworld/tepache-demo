const ParadeItem: React.FC<{text: string}> = ({text}) => {
  return (
    <div className="border-2 border-red-500 text-red-500 p-auto w-[12.5%] text-center text-4xl py-10 font-bold bg-orange-100">
      {text}
    </div>
  )
};

export default ParadeItem;
