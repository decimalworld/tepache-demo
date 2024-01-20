import { InputHandlingImperative } from "@/utils/models";
import { RefObject, createRef, useRef } from "react";

type InputHandlingRef = RefObject<InputHandlingImperative>

const useForm = (refNames: string[]) => {
  const refsRecord = refNames.reduce<Record<string, InputHandlingRef>>((record, refName) => ({...record, [refName]: createRef<InputHandlingImperative>()}), {})

  const resetForm = () => Object.values<RefObject<InputHandlingImperative>>(refsRecord).forEach(ref => ref.current!.reset())

  const getValues = () => refNames.reduce<Record<string, any>>((record, refName) => {
    return ({...record, [refName]: refsRecord[refName].current!.getValue()})
  }, {})

  return {
    refsRecord,
    resetForm,
    getValues,
  }
}

export default useForm;
