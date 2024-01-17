const TitleText: React.FC = () => {
  return (
    <div className="h-full uppercase w-mid-[750px] w-[750px] flex flex-col -rotate-2 text-green-700">
      <div className="my-auto mx-10 text-center font-bold">
        <span className="text-8xl">
          Experience the taste of tepache!
        </span>
        <br/>
        <span className="text-3xl">
          A Mexican fermented pineapple drink
        </span>
        <div className="text-white bg-blue-600 w-[350px] mx-auto my-5 py-3 hover:cursor-pointer hover:bg-red-500">
          Shop now
        </div>
      </div>
    </div>
  )
};

export default TitleText;
