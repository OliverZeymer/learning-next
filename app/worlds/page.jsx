async function getData(url) {
  const res = await fetch(url)
  const data = await res.json()
  console.log(data.data)
  return data
}

const WorldsPage = async () => {
  const url = "https://dummyjson.com/products"
  const data = await getData(url)
  return (
    <div>
      {data.products.map((item) => (
        <div>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <img src={item.images[0]} alt="" />
        </div>
      ))}
    </div>
  )
}
export default WorldsPage
