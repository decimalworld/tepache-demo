import { PropsWithChildren } from "react";

const InputWrapper: React.FC<PropsWithChildren<{title?: string}>> = ({children, title}) => {
  return (
    <div className="gap-2 flex flex-col">
      <div>{title}</div>
      {children}
    </div>
  )
};

export default InputWrapper;
