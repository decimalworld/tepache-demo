import { Selection } from "@/utils/models"
import { ForwardRefRenderFunction, forwardRef, useImperativeHandle, useRef } from "react"

export interface SelectionInputHandlingRef {
  getValue: () => any,
  reset: () => void
}

const SelectionInput: ForwardRefRenderFunction<SelectionInputHandlingRef,{options: Selection[], className?: string, defaultValue?: string}> = ({options, className, defaultValue=''}, ref) => {
  const selectionRef = useRef<HTMLSelectElement>(null);

  useImperativeHandle(
    ref,
    () => ({
      getValue() {
        return selectionRef.current!.value
      },
      reset() {
        selectionRef.current!.value=defaultValue
      }
    })
  )

  return (
    <select className={"border-2 border-slate-100 " + className} ref={selectionRef} defaultValue={defaultValue}>
      <option value={defaultValue} key={-1} disabled/>
      { options.map((option, index) => (
        <option value={option.value} key={index}>{option.text}</option>
      ))}
    </select>
  )
}

export default forwardRef(SelectionInput)
