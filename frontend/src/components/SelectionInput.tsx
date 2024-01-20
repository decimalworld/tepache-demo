import useInputElement from "@/hooks/useInputElement"
import { InputHandlingImperative, Selection } from "@/utils/models"
import { ForwardRefRenderFunction, forwardRef} from "react"

const SelectionInput: ForwardRefRenderFunction<InputHandlingImperative,{options: Selection[], className?: string, defaultValue?: string}> = ({options, className, defaultValue=''}, ref) => {
  const {data, updateOnChangeFn} = useInputElement(ref, defaultValue);

  return (
    <select className={"border-2 border-slate-100 " + className} value={data} onChange={updateOnChangeFn}>
      <option value={defaultValue} key={-1} disabled/>
      { options.map((option, index) => (
        <option value={option.value} key={index}>{option.text}</option>
      ))}
    </select>
  )
}

export default forwardRef(SelectionInput)
