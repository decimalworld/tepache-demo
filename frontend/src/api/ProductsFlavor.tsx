const createProductFn = (params: Record<string, any>, type: "flavors" | "packs" | "merchs"): () => Promise<Response> => {
  return () => fetch(
    `http://localhost:3000/products/${type}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }
  )
}

export { createProductFn }
