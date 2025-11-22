"use client"
import { useState } from "react"
import ProductCard from "./ProductCard"
import { Product } from "../types"
import { saveCart } from "../actions/cart"
import {
  Button,
  List,
  SimpleGrid,
  Stack,
  ThemeIcon,
  Title,
} from "@mantine/core"
import { IconCircleCheck } from "@tabler/icons-react"
import { notifications } from "@mantine/notifications"

export default function ProductList({
  products,
  initialCart,
}: {
  products: Product[]
  initialCart: Product[]
}) {
  const [cart, setCart] = useState<Product[]>(initialCart)

  return (
    <>
    <Title order={1}>Yeah! Life can be very nice!</Title>
      <Stack>
        <Title order={3}>Your cart</Title>
        <List
          spacing="xs"
          size="sm"
          center
          icon={
            <ThemeIcon color="teal" size={24} radius="xl">
              <IconCircleCheck size={16} />
            </ThemeIcon>
          }
        >
          {cart.map((product) => (
            <List.Item key={product.id}>
              {product.name} - ${product.price}
            </List.Item>
          ))}
        </List>
        <Button
          maw="fit-content"
          variant="gradient"
          gradient={{ from: "green", to: "yellow", deg: 195 }}
          size="compact-md"
          onClick={() => {
            saveCart(cart)

            notifications.show({
              title: "Your cart is saved",
              message: "Do not forget to checkout! 🌟",
            })
          }}
        >
          Save Cart
        </Button>
      </Stack>
      <br />
      <SimpleGrid cols={{ base: 1, xs: 1, sm: 5 }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCartAction={() => {
              setCart([...cart, product])

              notifications.show({
                title: "Item added",
                message: "Item addet to your cart! 💪🏻🛒",
              })
            }}
          />
        ))}
      </SimpleGrid>
    </>
  )
}
