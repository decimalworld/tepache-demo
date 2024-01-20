import useInputElement from "@/hooks/useInputElement";
import { InputHandlingImperative } from "@/utils/models";
import { ForwardRefRenderFunction, forwardRef } from "react";

interface InputProps {
    defaultValue?: string, 
    placeholder?:string, 
    rows?: number, 
    type: string
    className?: string
}

const TextbaseInput: ForwardRefRenderFunction<InputHandlingImperative, InputProps> = ({defaultValue = '', placeholder, rows, type, className}, ref) => {
  const Comp = type === 'textarea' ? 'textarea' : 'input'
  const { data, updateOnChangeFn } = useInputElement(ref, defaultValue);

  return (
    <Comp 
              {...(type !== 'textarea' && {type: type})} 
              className={`border-slate-100 border-2 w-full rounded-sm px-2 resize-none ${className}`}
              placeholder={placeholder}
              value={data}
              {...(rows && Comp=='textarea' && {rows: rows})}
              onChange={updateOnChangeFn}
              />
  )
}

export default forwardRef(TextbaseInput)
