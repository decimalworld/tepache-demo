import { PropsWithChildren } from "react"

const Button: React.FC<PropsWithChildren<{bgColor: string, textColor: string}>> = ({ children, bgColor, textColor }) => {
  return (
    <div className={`text-center text-${textColor} bg-${bgColor} border-2 border-${textColor} py-1 text-lg font-semibold`}>
      {children}
    </div>
  ) 
};

export default Button;
