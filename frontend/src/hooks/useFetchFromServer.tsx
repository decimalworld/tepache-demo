import { useState } from "react"

const useFetchFromServer = () => {
  const [fetchState, setFetchState] = useState<'idle' | 'loading' | 'resolved' | 'error'>('idle');
  const [data, setData] = useState();
  const [error, setError] = useState<string>();

  const fetchDataFn = (url: string, options = {}) =>{
    setFetchState('loading')
    fetch(url, options)
      .then(res => res.json())
      .then(res => {
        setData(res)
        setFetchState('resolved')
      })
      .catch(err => {
        setError(err)
        setFetchState('error')
      })
  } 
  return {
    fetchDataFn,
    fetchState,
    data,
    error
  }
}

export default useFetchFromServer
