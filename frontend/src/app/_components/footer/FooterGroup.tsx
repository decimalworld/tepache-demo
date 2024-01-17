import { PropsWithChildren } from "react"

const FooterGroup: React.FC<PropsWithChildren<{className: string}>> = ({className, children}) => {
  return (
    <div className={`${className} h-full text-orange-100`}>
      {children}
    </div>
  )
};

export default FooterGroup;
