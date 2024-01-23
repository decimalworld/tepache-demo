import { useCallback, useEffect, useState } from "react"

const usePostLoad = <T,>(postLoadFn: () => T) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const getResult = () => {
    return loaded ? postLoadFn() : null
  }

  useEffect(() => setLoaded(true), [])

  return {
    getResult
  }
}

export default usePostLoad
