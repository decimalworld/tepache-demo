const uploadImageFn = (from_url: string, to_url: string): () => Promise<Response> => {
  return () => fetch(from_url)
    .then(res => res.blob())
    .then(file => {
      return fetch(
        to_url,
        {
          method: "PUT",
          body: file,
          headers: new Headers({
            'content-type': file.type,
          })
        }
      )})
}
export { uploadImageFn }
