export const getStore = async (resource, query) => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
      const store = await response.json()
    return store
}