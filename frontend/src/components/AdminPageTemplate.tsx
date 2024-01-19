import { PropsWithChildren } from "react";

const AdminPageTemplate: React.FC<PropsWithChildren<{title: string, width?: string}>> = ({children, title, width="100%"}) => {
  return (
    <div className="flex flex-col w-full h-fit">
      <div className="h-20 min-h-20"></div>
      <div className="bg-gray-300 h-[1000px] py-8 px-8 flex flex-col gap-8 px-auto">
        <div 
          className="text-2xl font-bold mx-auto" 
          style={{width: width}}
          >{title}</div>
        <div style={{width: width}} className="mx-auto">{children}</div>
      </div>
    </div>
  )
};

export default AdminPageTemplate;
