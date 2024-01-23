import { InputHandlingImperative } from "@/utils/models";
import { RefObject, createRef, useCallback } from "react";

type InputHandlingRef = RefObject<InputHandlingImperative>

const useForm = (refNames: string[]) => {
  const refsRecord = refNames.reduce<Record<string, InputHandlingRef>>((record, refName) => ({...record, [refName]: createRef<InputHandlingImperative>()}), {})

  const resetForm = useCallback(() => Object.values<RefObject<InputHandlingImperative>>(refsRecord).forEach(ref => ref.current!.reset()), [refsRecord])

  const getValues = useCallback(() => refNames.reduce<Record<string, any>>((record, refName) => {
    return ({...record, [refName]: refsRecord[refName].current!.getValue()})
  }, {}), [refsRecord, refNames])

  return {
    refsRecord,
    resetForm,
    getValues,
  }
}

export default useForm;
