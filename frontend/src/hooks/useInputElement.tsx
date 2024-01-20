import { InputHandlingImperative } from "@/utils/models"
import { ChangeEvent, ForwardedRef, useImperativeHandle, useState } from "react"

type HTMLElementWithValue = HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement

const useInputElement = (ref: ForwardedRef<InputHandlingImperative>, defaultValue: any) => {
  const [data, setData] = useState(defaultValue);
  
  useImperativeHandle(ref, () => ({
    getValue() { return data },
    reset() { setData(defaultValue) }
  }))

  const updateOnChangeFn = (e: ChangeEvent<HTMLElementWithValue>) => setData(e?.target?.value)

  return {
    data: data,
    setData: setData,
    updateOnChangeFn: updateOnChangeFn
  }
}

export default useInputElement;
