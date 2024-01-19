import { ForwardRefRenderFunction, forwardRef, useImperativeHandle, useState } from "react";

export interface TextbaseInputHandlingRef {
  getValue: () => any,
  reset: () => void
}

interface InputProps {
    defaultValue?: string, 
    placeholder?:string, 
    rows?: number, 
    type: string
    className?: string
}

const TextbaseInput: ForwardRefRenderFunction<TextbaseInputHandlingRef, InputProps> = ({defaultValue = '', placeholder, rows, type, className}, ref) => {
  const [value, setValue] = useState(defaultValue)
  const Comp = type === 'textarea' ? 'textarea' : 'input'

  useImperativeHandle(
    ref,
    () => ({
      getValue() {
        return value
      },
      reset() {
        setValue('')
      }
    })
    )

  return (
    <Comp 
              {...(type !== 'textarea' && {type: type})} 
              className={`border-slate-100 border-2 w-full rounded-sm px-2 resize-none ${className}`}
              placeholder={placeholder}
              value={value}
              {...(rows && Comp=='textarea' && {rows: rows})}
              onChange={e => setValue(e.target.value)}
              />
  )
}

export default forwardRef(TextbaseInput)
