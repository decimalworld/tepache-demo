import FooterGroup from "./FooterGroup";

const Email: React.FC = () => {
  return (
    <FooterGroup className="w-[35%]">
      <div className="relative">
        <input type="text" className="uppercase bg-red-500 text-orange-100 placeholder:text-orange-100 border-b-2 border-orange-100 pb-2 w-96 outline-none font-extrabold focus:px-3 transition-all ease-in-out duration-300 z-0" placeholder="Email Address"/>
        <div className="h-full pb-2 w-8 absolute left-[22rem] top-0 hover:cursor-pointer bg-transparent z-10">
          <div className="h-full w-[30px] signature-arrow bg-orange-100"></div>
        </div>
      </div>
    </FooterGroup>
  )
};

export default Email;
