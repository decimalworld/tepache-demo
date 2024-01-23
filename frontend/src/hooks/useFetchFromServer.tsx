import { useCallback, useState } from "react"

const useFetchFromServer = () => {
  const [fetchState, setFetchState] = useState<'idle' | 'loading' | 'resolved' | 'error'>('idle');
  const [responseData, setResponseData] = useState<Response>();
  const [error, setError] = useState<Record<string, any>>();

  const fetchDataFn = useCallback((fetchFn: () => Promise<Response>) =>{
    setFetchState('loading')
    fetchFn()
      .then(res => {
        if (!res.ok) {
          res.json().then((parseError: Record<string, any>) => { 
            setError(parseError)
            setFetchState('error')
          })
        } else {
          setFetchState('resolved')
          setResponseData(res)
        }
      })
  }, [])

  const resetState = useCallback(() => {
    setFetchState('idle')
    setResponseData(undefined)
    setError(undefined)
  }, [])

  return {
    fetchDataFn,
    fetchState,
    resetState,
    responseData,
    error,
  }
}

export default useFetchFromServer
