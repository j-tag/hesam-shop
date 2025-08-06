const products = [
  {
    id: "1",
    name: "Product 1",
    description: "Description for Product 1",
    price: 10,
    image: "/1200W-null.jpg",
  },
  {
    id: "2",
    name: "Product 2",
    description: "Description for Product 2",
    price: 20,
    image: "/DNA_Oversized_T-Shirt_-Summit_Blue-1.png",
  },
  {
    id: "3",
    name: "Product 3",
    description: "Description for Product 3",
    price: 30,
    image: "/MVNS3720_BLK_0036_99849c68-93f0-4f22-b737-c4ed1f174247.jpg",
  },
  {
    id: "4",
    name: "Product 4",
    description: "Description for Product 4",
    price: 40,
    image:
      "/LLg-Fashion-Running-Sneaker-for-Men-Shoes-Casual-Shoes-Leather-Sport-Shoes-Breathable-Comfortable-Walking-Shoes-Black-US11_8e9d44bb-b19b-42e9-bca1-979205c0779e.6fc41a815c10699375294302df46565a.jpeg",
  },
]

export function getProducts() {
  return products
}

export function getProduct(id: string) {
  return products.find((product) => product.id === id)
}
