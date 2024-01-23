const createProductFn = (params: Record<string, any>): () => Promise<Response> => {
  return () => fetch(
    'http://localhost:3000/products/flavors',
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
