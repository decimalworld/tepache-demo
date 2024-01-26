const createProductFn = (type: "flavors" | "packs" | "merchs", params: Record<string, any>): () => Promise<Response> => {
  return () => fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/products/${type}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }
  )
}

const indexProductFn = (type: "flavors" | "packs" | "merchs", params?: Record<string, any>): () => Promise<Response> => {
  return () => fetch(
      [`${process.env.PRIVATE_BACKEND_URL}/products/${type}`, new URLSearchParams(params)].join('?'),
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
}

export { createProductFn, indexProductFn }
