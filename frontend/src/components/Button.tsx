import { PropsWithChildren } from "react"

const Button: React.FC<PropsWithChildren<{className?: string, onClick?: ()=> void}>> = ({className, children, ...props}) => {
  const style = `${className} hover:cursor-pointer hover:brightness-125`
  return <div {...props} className={style}>
    {children}
  </div>
}

export default Button
